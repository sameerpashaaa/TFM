import { WEEKLY_SPECIAL } from '../../data/homepage';
import { waLink } from '../../lib/whatsapp';
import { Link } from 'react-router-dom';

// Bundle banner is hidden entirely when WEEKLY_SPECIAL is null.
// To enable it, set WEEKLY_SPECIAL in src/data/homepage.ts with real data.
export default function OffersBundle() {
  if (!WEEKLY_SPECIAL) return null;

  const { headline, subtext, ctaText, ctaLink, image, compareAt, price, endsOn } = WEEKLY_SPECIAL;

  // Only show "Save X%" if the math actually checks out
  const savePct = compareAt > 0 && price > 0
    ? Math.round(((compareAt - price) / compareAt) * 100)
    : null;

  // Check if offer end date is in the future
  const isExpired = endsOn && new Date(endsOn) < new Date();
  if (isExpired) return null;

  // Use WhatsApp link if ctaLink is empty
  const resolvedCtaLink = ctaLink || waLink(`Hi TFM! I'd like to order the ${headline}.`);
  const isExternal = resolvedCtaLink.startsWith('http');

  return (
    <section style={{ padding: '24px 0 64px' }}>
      <div className="container">
        <div style={{
          position: 'relative',
          borderRadius: 'var(--r-card)',
          overflow: 'hidden',
          backgroundColor: '#111',
          minHeight: 360,
          display: 'flex',
          alignItems: 'center',
        }}>
          {/* Background image (optional) */}
          {image && (
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <img
                src={image}
                alt={headline}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to right, rgba(27,23,20,0.9) 0%, rgba(27,23,20,0.6) 50%, rgba(27,23,20,0) 100%)'
              }} />
            </div>
          )}

          <div className="offers-content-box" style={{ position: 'relative', zIndex: 1 }}>
            {savePct != null && (
              <div style={{
                display: 'inline-block',
                background: 'var(--accent-premium)',
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1,
                padding: '6px 12px',
                borderRadius: 'var(--r-pill)',
                marginBottom: 20
              }}>
                Save {savePct}%
              </div>
            )}

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(26px, 5vw, 48px)',
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: 16,
              color: image ? '#fff' : 'var(--text-primary)',
            }}>
              {headline}
            </h2>

            <p style={{
              fontSize: 16,
              lineHeight: 1.5,
              color: image ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)',
              marginBottom: 32,
              maxWidth: 480,
            }}>
              {subtext}
            </p>

            {isExternal ? (
              <a
                href={resolvedCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
                style={{ padding: '14px 32px', fontSize: 14, textDecoration: 'none', display: 'inline-block' }}
              >
                {ctaText}
              </a>
            ) : (
              <Link to={resolvedCtaLink} className="btn-red" style={{ padding: '14px 32px', fontSize: 14 }}>
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
