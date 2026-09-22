import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

// ── Category card data ────────────────────────────────────────────────────────
// Rules:
// - Slug must match a category that has real products
// - No "From $X" prices (all products are enquireOnly — pricing map is empty)
// - No emoji badges, no Dry Aged cards, no Box Collection (→ eggs bug)
// - Plain text badge only — max 1 word
//
const cats = [
  {
    slug: 'beef',
    name: 'All Beef',
    sub: 'Steaks, mince, curry cuts and more',
    img: '/images/cat-beef.jpg',
    cta: 'Shop Beef',
    badge: null as string | null,
  },
  {
    slug: 'lamb',
    name: 'All Lamb & Goat',
    sub: 'Chops, shanks, curry pieces and whole cuts',
    img: '/images/cat-lamb.jpg',
    cta: 'Shop Lamb & Goat',
    badge: null,
  },
  {
    slug: 'chicken',
    name: 'Chicken',
    sub: 'Breast, thigh, whole chicken and portions',
    img: '/images/cat-poultry.jpg',
    cta: 'Shop Chicken',
    badge: null,
  },
  {
    slug: 'marinated-chicken',
    name: 'Marinated & Ready-to-Cook',
    sub: 'Chicken, lamb and fish — seasoned and ready',
    img: '/images/cat-seasoned.jpg',
    cta: 'Explore Range',
    badge: 'Popular',
  },
  {
    slug: 'fish',
    name: 'Fish',
    sub: 'Barramundi, Rohu, Basa, Pomfret and more',
    img: '/images/cat-fish.jpg',
    cta: 'Shop Fish',
    badge: null,
  },
  {
    slug: 'whole-carcass',
    name: 'Bulk & Whole Carcass',
    sub: 'Whole lamb, goat and beef for large orders',
    img: '/images/cat-carcass.jpg',
    cta: 'Enquire on WhatsApp',
    badge: 'Bulk',
    external: true, // links to WhatsApp instead of a collection
  },
] as const;

// Placeholder when a category image hasn't been uploaded yet
function ImgPlaceholder({ name }: { name: string }) {
  const colors: Record<string, string> = {
    beef: '#F2E8E0',
    lamb: '#EDE8F2',
    chicken: '#F2F0E0',
    marinated: '#F2ECE0',
    fish: '#E0EEF2',
    bulk: '#EAEAEA',
  };
  const key = name.toLowerCase().split(' ')[0];
  const bg = colors[key] ?? '#F2EDE4';
  return (
    <div style={{ width: '100%', height: '100%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: 13, color: '#8A8074', fontWeight: 500 }}>{name}</span>
    </div>
  );
}

function CategoryCard({ cat }: { cat: typeof cats[number] }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  const content = (
    <div
      className="surface"
      style={{
        position: 'relative',
        borderRadius: 'var(--r-sm)',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? 'var(--shadow-lift)' : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image — 4:3 */}
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
        {imgError ? (
          <ImgPlaceholder name={cat.name} />
        ) : (
          <img
            src={cat.img}
            alt={cat.name}
            onError={() => setImgError(true)}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transition: 'transform 0.4s ease',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        )}

        {/* Plain text badge — top left */}
        {cat.badge && (
          <div style={{
            position: 'absolute', top: 12, left: 12,
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-pill)',
            padding: '4px 10px',
            fontSize: 10,
            fontWeight: 700,
            color: 'var(--accent-deep)',
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          }}>
            {cat.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div>
          <div style={{ color: 'var(--text-primary)', fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em' }}>
            {cat.name}
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500, marginTop: 2 }}>
            {cat.sub}
          </div>
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          marginTop: 4,
          color: 'var(--crimson)',
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 0.2,
        }}>
          {cat.cta}
          <ArrowRight size={14} style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'none' }} />
        </div>
      </div>
    </div>
  );

  if ('external' in cat && cat.external) {
    // Whole Carcass → WhatsApp
    return (
      <a
        href={`https://wa.me/61403153872?text=${encodeURIComponent('Hi Tarneit Fresh Meat! I\'d like to enquire about whole carcass / bulk ordering.')}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block' }}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={`/collections/${cat.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      {content}
    </Link>
  );
}

export default function ShopByCategory() {
  return (
    <section style={{ padding: '64px 0' }}>
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div className="section-label" style={{ color: 'var(--accent-deep)' }}>Browse the Butcher</div>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', margin: '8px 0 0' }}>
            Shop by Category
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginTop: 8, maxWidth: 480, margin: '8px auto 0' }}>
            Fresh halal meat cut to order — delivered across Tarneit and surrounds.
          </p>
        </div>

        {/* Grid — 6 cards, 3-col desktop / 2-col tablet / 1-col mobile */}
        <div className="shop-cat-grid">
          {cats.map((cat) => (
            <CategoryCard key={cat.slug} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
