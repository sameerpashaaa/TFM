import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Tag } from 'lucide-react';

const cats = [
  {
    slug: 'beef',
    name: 'All Beef',
    sub: 'Wagyu · Angus · Grass-Fed',
    img: '/images/cat-beef.jpg',
    cta: 'Shop Beef',
    priceFrom: '35.00',
  },
  {
    slug: 'lamb',
    name: 'All Lamb',
    sub: 'NZ · AUS · Local',
    img: '/images/cat-lamb.jpg',
    cta: 'Shop Lamb',
    priceFrom: '24.50',
  },
  {
    slug: 'chicken',
    name: 'TFM Poultry',
    sub: 'Chicken · Free-Range',
    img: '/images/cat-poultry.jpg',
    cta: 'Shop Poultry',
    priceFrom: '14.00',
  },
  {
    slug: 'goat',
    name: 'Whole Carcass',
    sub: 'Lamb · Beef · Goat',
    img: '/images/cat-carcass.jpg',
    cta: 'View Collection',
    priceFrom: '190.00',
  },
  {
    slug: 'eggs',
    name: 'Box Collection',
    sub: 'Value · Party · Family',
    img: '/images/cat-box.jpg',
    cta: 'Shop Boxes',
    priceFrom: '65.00',
  },
  {
    slug: 'marinated-chicken',
    name: 'Seasoned & Marinated',
    sub: 'Chicken · Lamb · Fish',
    img: '/images/cat-seasoned.jpg',
    cta: 'Explore Range',
    priceFrom: '18.00',
  },
  {
    slug: 'beef',
    name: 'Dry Aged Beef',
    sub: 'Tomahawk · Ribeye',
    img: '/images/cat-drybeef.jpg',
    cta: 'Shop Premium',
    priceFrom: '85.00',
  },
  {
    slug: 'lamb',
    name: 'Dry Aged Lamb',
    sub: 'Rack · Chops · Shoulder',
    img: '/images/cat-drylamb.jpg',
    cta: 'View Collection',
    priceFrom: '45.00',
  },
];


function CategoryCard({ cat, index }: { cat: typeof cats[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
    >
      <Link to={`/collections/${cat.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="surface"
          style={{
            position: 'relative',
            borderRadius: 'var(--r-sm)',
            overflow: 'hidden',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
          }}
          whileHover={{ y: -3, boxShadow: 'var(--shadow-lift)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Image Area - 4:3 */}
          <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
            <motion.img 
              src={cat.img} 
              alt={cat.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              animate={{ scale: hovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Category type badge - top left */}
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
              {cat.name.includes('Dry') ? '🥩 Artisan' : cat.name.includes('Box') ? '📦 Value' : cat.name.includes('Seasoned') || cat.name.includes('Marinated') ? '🌿 Marinated' : '⭐ Premium'}
            </div>

            {/* Price badge - top right */}
            <div style={{
              position: 'absolute', top: 12, right: 12,
              background: 'rgba(255,255,255,0.95)',
              padding: '4px 10px',
              borderRadius: 'var(--r-pill)',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
            }}>
              <Tag size={11} color="var(--crimson)" />
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-primary)' }}>
                From ${cat.priceFrom}/kg
              </span>
            </div>
          </div>

          {/* Content Area */}
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div>
              <div style={{
                color: 'var(--text-primary)',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: '-0.01em',
              }}>
                {cat.name}
              </div>
              <div style={{
                color: 'var(--text-secondary)',
                fontSize: 13,
                fontWeight: 500,
                marginTop: 2,
              }}>
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
              <motion.div animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
                <ArrowRight size={14} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function ShopByCategory() {
  return (
    <section style={{ padding: '64px 0' }}>
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <div className="section-label" style={{ color: 'var(--accent-deep)' }}>Browse the Butcher</div>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', margin: 0 }}>
            Shop by Category
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginTop: 8, maxWidth: 480, margin: '8px auto 0' }}>
            Every cut, every origin — delivered fresh within hours across Melbourne.
          </p>
        </motion.div>

        {/* Grid — 4 columns, 2 rows */}
        <div className="shop-cat-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}>
          {cats.map((cat, i) => (
            <CategoryCard key={cat.slug} cat={cat} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .shop-cat-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 16px !important; }
        }
        @media (max-width: 768px) {
          .shop-cat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .shop-cat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

