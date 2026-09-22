import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// ─── Constants ────────────────────────────────────────────────────────────────

const FRAME_COUNT = 160;
const FRAME_URL = (n: number) =>
  `/frames/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;

// Hero track height is now controlled via .hero-track in index.css
// (280vh on desktop → 120vh on mobile)
const SMOOTH_MS   = 55;    // Easing time constant (ms)
const MAX_CONCURRENT = 6;  // Parallel fetches
const PREFETCH_AHEAD = 20; // Frames to prefetch forward
const PREFETCH_BACK  = 8;  // Frames to prefetch backward

// ─── Module-level persistent frame cache ─────────────────────────────────────
//
// This lives OUTSIDE the component so it survives React unmount/remount cycles.
// When the user navigates away and back, frames don't need to be re-fetched.
// We never call bmp.close() destructively on unmount anymore.
//
const frameCache   = new Map<number, ImageBitmap>();
const frameLoading = new Set<number>();
let   activeLoads  = 0;
const loadQueue: number[] = [];

function clamp(v: number, lo = 0, hi = 1) {
  return Math.max(lo, Math.min(hi, v));
}

function pumpQueue(
  onFrameReady: (n: number) => void,
  onError: (n: number, err: unknown) => void,
) {
  while (activeLoads < MAX_CONCURRENT && loadQueue.length > 0) {
    const n = loadQueue.shift()!;
    if (frameCache.has(n) || frameLoading.has(n)) continue;

    frameLoading.add(n);
    activeLoads++;

    fetch(FRAME_URL(n))
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} for frame ${n}`);
        return r.blob();
      })
      .then(b => createImageBitmap(b))
      .then(bmp => {
        frameCache.set(n, bmp);
        frameLoading.delete(n);
        activeLoads--;
        onFrameReady(n);
        pumpQueue(onFrameReady, onError);
      })
      .catch(err => {
        frameLoading.delete(n);
        activeLoads--;
        onError(n, err);
        pumpQueue(onFrameReady, onError);
      });
  }
}

function enqueue(
  n: number,
  priority: boolean,
  onFrameReady: (n: number) => void,
  onError: (n: number, err: unknown) => void,
) {
  n = clamp(n, 1, FRAME_COUNT);
  if (frameCache.has(n) || frameLoading.has(n)) return;
  if (loadQueue.includes(n)) {
    if (priority) {
      // Move to front
      const idx = loadQueue.indexOf(n);
      if (idx > 0) { loadQueue.splice(idx, 1); loadQueue.unshift(n); }
    }
    return;
  }
  if (priority) loadQueue.unshift(n);
  else          loadQueue.push(n);
  pumpQueue(onFrameReady, onError);
}

function prefetchAround(
  center: number,
  dir: number,
  onFrameReady: (n: number) => void,
  onError: (n: number, err: unknown) => void,
) {
  enqueue(center, true, onFrameReady, onError);
  for (let i = 1; i <= PREFETCH_AHEAD; i++)
    enqueue(center + (dir >= 0 ? i : -i), false, onFrameReady, onError);
  for (let i = 1; i <= PREFETCH_BACK; i++)
    enqueue(center + (dir >= 0 ? -i : i), false, onFrameReady, onError);
}

// ─── Canvas draw helpers ──────────────────────────────────────────────────────

function drawCover(
  ctx: CanvasRenderingContext2D,
  bmp: ImageBitmap,
  cw: number,
  ch: number,
) {
  const ar = bmp.width / bmp.height;
  const ca = cw / ch;
  let sx = 0, sy = 0, sw = bmp.width, sh = bmp.height;
  if (ca > ar) { sh = bmp.width / ca; sy = (bmp.height - sh) / 2; }
  else         { sw = bmp.height * ca; sx = (bmp.width  - sw) / 2; }
  ctx.drawImage(bmp, sx, sy, sw, sh, 0, 0, cw, ch);
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  progress: number,
) {
  const fp   = clamp(progress) * (FRAME_COUNT - 1) + 1;
  const lo   = Math.floor(fp);
  const hi   = Math.min(FRAME_COUNT, lo + 1);
  const blend = fp - lo;

  const loBmp = frameCache.get(lo);
  const hiBmp = frameCache.get(hi);
  const fallback = loBmp ?? hiBmp ?? frameCache.get(Math.max(1, lo - 1));

  if (!fallback) return;

  ctx.clearRect(0, 0, w, h);

  if (loBmp && hiBmp && blend > 0.01) {
    drawCover(ctx, loBmp, w, h);
    ctx.globalAlpha = blend;
    drawCover(ctx, hiBmp, w, h);
    ctx.globalAlpha = 1;
  } else {
    drawCover(ctx, loBmp ?? fallback, w, h);
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroBanner() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hintRef   = useRef<HTMLDivElement>(null);

  // ── Single imperative controller effect ──────────────────────────────────
  //
  // All animation state lives inside this effect's closure.
  // No useCallback chain → no stale closure bugs.
  // Re-mounting the component re-runs this effect from scratch.
  //
  useEffect(() => {
    const track  = trackRef.current;
    const canvas = canvasRef.current;
    if (!track || !canvas) return;

    let ctx: CanvasRenderingContext2D | null = null;
    let canvasW = 0;
    let canvasH = 0;

    // ── State (all imperative, inside the closure) ──────────────────────────
    let targetProg = 0;
    let easedProg  = 0;
    let lastTime: number | null = null;
    let lastDrawnFrame = -1;
    let lastPrefCenter = 0;
    let lastPrefTime   = 0;
    let isVisible      = false;
    let rafHandle: number | null = null;
    let destroyed      = false;

    // ── Canvas sizing ────────────────────────────────────────────────────────
    function syncCanvas() {
      if (destroyed) return;
      const dpr = window.devicePixelRatio || 1;
      const w   = canvas!.offsetWidth;
      const h   = canvas!.offsetHeight;
      if (w === 0 || h === 0) {
        // Retry next frame — canvas may not be laid out yet
        requestAnimationFrame(syncCanvas);
        return;
      }
      canvas!.width  = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx = canvas!.getContext('2d');
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvasW = w;
      canvasH = h;
      // Force redraw after resize
      lastDrawnFrame = -1;
    }

    // ── Scroll progress calculation ──────────────────────────────────────────
    //
    // Called directly inside the RAF loop — no stale refs possible.
    //
    function computeProgress(): number {
      if (!track) return 0;
      const trackTop    = track.getBoundingClientRect().top + window.scrollY;
      const scrollRange = Math.max(1, track.offsetHeight - window.innerHeight);
      return clamp((window.scrollY - trackTop) / scrollRange);
    }

    // ── Frame-ready callback ─────────────────────────────────────────────────
    //
    // When a needed frame finishes loading, force a canvas redraw.
    //
    function onFrameReady(n: number) {
      if (destroyed) return;
      const needed = Math.round(targetProg * (FRAME_COUNT - 1)) + 1;
      if (Math.abs(n - needed) <= 3 && ctx && canvasW > 0 && canvasH > 0) {
        lastDrawnFrame = -1; // invalidate so next RAF draws it
      }
    }

    function onFrameError(n: number, err: unknown) {
      if (import.meta.env.DEV) {
        console.warn(`[HeroBanner] Failed to load frame ${n}:`, err);
      }
    }

    // ── Continuous RAF loop ──────────────────────────────────────────────────
    //
    // This loop runs continuously while the section is visible.
    // It does NOT self-terminate. Idle frames are extremely cheap (no draw).
    //
    function loop(time: number) {
      if (destroyed) return;

      // ── Easing ─────────────────────────────────────────────────────────────
      const prev = lastTime ?? time;
      const dt   = Math.min(64, time - prev);
      lastTime   = time;

      targetProg = computeProgress();

      const delta = targetProg - easedProg;
      const alpha = 1 - Math.exp(-dt / SMOOTH_MS);
      easedProg   = Math.abs(delta) < 0.0005 ? targetProg : easedProg + delta * alpha;

      // ── Draw ────────────────────────────────────────────────────────────────
      if (ctx && canvasW > 0 && canvasH > 0) {
        const fp      = clamp(easedProg) * (FRAME_COUNT - 1) + 1;
        const frameIdx = Math.round(fp);
        // Always redraw when scrolling; skip only when completely idle
        if (frameIdx !== lastDrawnFrame || Math.abs(delta) > 0.001) {
          drawFrame(ctx, canvasW, canvasH, easedProg);
          lastDrawnFrame = frameIdx;
        }
      }

      // ── Scroll hint fade ────────────────────────────────────────────────────
      const hint = hintRef.current;
      if (hint) {
        const op = clamp(1 - easedProg / 0.06, 0, 0.8);
        hint.style.opacity  = String(op.toFixed(3));
        hint.style.visibility = op < 0.01 ? 'hidden' : 'visible';
      }

      // ── Prefetch ────────────────────────────────────────────────────────────
      const center = clamp(Math.round(targetProg * (FRAME_COUNT - 1)) + 1, 1, FRAME_COUNT);
      const now    = performance.now();
      if (Math.abs(center - lastPrefCenter) > 3 || now - lastPrefTime > 200) {
        prefetchAround(center, Math.sign(delta), onFrameReady, onFrameError);
        lastPrefCenter = center;
        lastPrefTime   = now;
      }

      rafHandle = requestAnimationFrame(loop);
    }

    // ── IntersectionObserver: start/stop the RAF loop ───────────────────────
    //
    // When the track is off-screen, pause the RAF loop entirely to save CPU.
    // When it comes back into view, restart and resync immediately.
    //
    const io = new IntersectionObserver(
      entries => {
        const visible = entries.some(e => e.isIntersecting);
        if (visible && !isVisible) {
          isVisible  = true;
          lastTime   = null; // reset timing so easing starts fresh
          lastDrawnFrame = -1; // force redraw immediately
          if (rafHandle === null && !destroyed) {
            rafHandle = requestAnimationFrame(loop);
          }
        } else if (!visible && isVisible) {
          isVisible = false;
          if (rafHandle !== null) {
            cancelAnimationFrame(rafHandle);
            rafHandle = null;
          }
        }
      },
      { threshold: 0, rootMargin: '200px 0px' }, // 200px margin so we start slightly before entering view
    );
    io.observe(track);

    // ── ResizeObserver: instant canvas resize without debounce ───────────────
    const ro = new ResizeObserver(() => {
      syncCanvas();
    });
    ro.observe(canvas);

    // ── Initial setup ────────────────────────────────────────────────────────
    // Sync canvas on first mount
    requestAnimationFrame(syncCanvas);

    // Prefetch first batch immediately (first 5 priority, next 35 normal)
    for (let i = 1; i <= 5; i++)  enqueue(i, true,  onFrameReady, onFrameError);
    for (let i = 6; i <= 40; i++) enqueue(i, false, onFrameReady, onFrameError);

    // ── Cleanup ──────────────────────────────────────────────────────────────
    return () => {
      destroyed = true;
      io.disconnect();
      ro.disconnect();
      if (rafHandle !== null) {
        cancelAnimationFrame(rafHandle);
        rafHandle = null;
      }
      // NOTE: We do NOT close() bitmaps or clear frameCache here.
      // The module-level cache persists so frames are reused on remount.
      // This is intentional and eliminates Bug 3.
    };
  }, []); // ← Empty deps: runs once on mount, cleanup on unmount. ✅

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      ref={trackRef}
      className="hero-track"
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        {/* Canvas — GPU-composited layer */}
        <canvas
          ref={canvasRef}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            background: '#0a0705',
          }}
        />

        {/* Gradient overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(100deg, rgba(10,7,5,0.82) 0%, rgba(10,7,5,0.50) 44%, rgba(10,7,5,0.14) 76%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '22%',
            background: 'linear-gradient(to bottom, transparent, rgba(10,7,5,0.36))',
            pointerEvents: 'none',
          }}
        />

        {/* Hero copy */}
        <div
          className="container hero-copy"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 5,
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.70)',
              fontSize: 11,
              letterSpacing: 2.2,
              textTransform: 'uppercase',
              marginBottom: 14,
              fontWeight: 500,
            }}
          >
            Sale ends before it gets cold
          </p>

          <h1
            style={{
              fontSize: 'clamp(28px, 5.2vw, 66px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              marginBottom: 16,
              maxWidth: 620,
              textShadow: '0 2px 24px rgba(0,0,0,0.35)',
            }}
          >
            Fresh cuts delivered<br />
            <span style={{ color: 'var(--crimson-light)' }}>in one hour</span>
          </h1>

          <p
            className="hero-subtext"
            style={{
              color: 'rgba(255,255,255,0.80)',
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 440,
              marginBottom: 28,
              textShadow: '0 1px 8px rgba(0,0,0,0.40)',
            }}
          >
            We deliver the world's finest pasture-raised and grain-fed meats directly to your door
            across Melbourne &mdash; never frozen, never sitting on a shelf.
          </p>

          <Link
            to="/collections/beef"
            className="btn-red"
            style={{ width: 'fit-content', padding: '14px 32px', fontSize: 12, letterSpacing: 1.4 }}
          >
            Shop now
          </Link>
        </div>

        {/* Scroll hint — fades out as animation progresses */}
        <div
          ref={hintRef}
          style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            zIndex: 5,
            opacity: 0.8,
            transition: 'opacity 200ms linear, visibility 200ms linear',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 10,
              letterSpacing: 2,
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Scroll
          </span>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <rect
              x="1" y="1" width="18" height="26" rx="9"
              stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"
            />
            <circle cx="10" cy="8" r="2.5" fill="rgba(255,255,255,0.65)">
              <animate attributeName="cy" values="8;17;8" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
}
