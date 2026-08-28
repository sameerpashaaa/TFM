import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CategoryArt from '../shared/CategoryArt';

const cats = [
  {
    slug: 'all-beef',
    name: 'All Beef',
    sub: 'Wagyu · Angus · Grass-Fed',
    color: '#C4522A',
    accent: '#E2673A',
  },
  {
    slug: 'all-lamb',
    name: 'All Lamb',
    sub: 'NZ · AUS · Omani',
    color: '#1c1917',
    accent: '#78350f',
  },
  {
    slug: 'mls-poultry',
    name: 'TFM Poultry',
    sub: 'Chicken · Camel',
    color: '#14532d',
    accent: '#166534',
  },
  {
    slug: 'whole-carcass',
    name: 'Whole Carcass',
    sub: 'Lamb · Beef · Camel',
    color: '#1e1b4b',
    accent: '#312e81',
  },
  {
    slug: 'box-collection',
    name: 'Box Collection',
    sub: 'Value · Party · Family',
    color: '#7c2d12',
    accent: '#9a3412',
  },
  {
    slug: 'seasoned',
    name: 'Seasoned',
    sub: 'Mishkak · Kofta · Rubs',
    color: '#713f12',
    accent: '#92400e',
  },
  {
    slug: 'dry-aged-beef',
    name: 'Dry Aged Beef',
    sub: 'Tomahawk · Ribeye',
    color: '#450a0a',
    accent: '#C4522A',
  },
  {
    slug: 'dry-aged-lamb',
    name: 'Dry Aged Lamb',
    sub: 'Rack · Chops · Shoulder',
    color: '#1c1917',
    accent: '#44403c',
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
      style={{ position: 'relative' }}
    >
      <Link to={`/collections/${cat.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          style={{
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            height: 210,
            cursor: 'pointer',
            border: '1px solid #E8DFD4',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          }}
          whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Plain backdrop */}
          <div style={{ position: 'absolute', inset: 0, background: '#fff' }} />

          {/* Illustration — idle float, lifts on hover */}
          <motion.div
            style={{
              position: 'absolute',
              top: '14%', left: '50%', width: '44%',
              translateX: '-50%',
              filter: 'drop-shadow(0 3px 7px rgba(0,0,0,0.10))',
            }}
            animate={{
              y: hovered ? -10 : [0, -6, 0],
              scale: hovered ? 1.08 : 1,
              rotate: hovered ? -3 : 0,
            }}
            transition={hovered
              ? { duration: 0.35, ease: 'easeOut' }
              : { y: { duration: 4 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }, duration: 0.4 }}
          >
            <CategoryArt slug={cat.slug} />
          </motion.div>

          {/* Content */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '20px 18px',
            gap: 4,
          }}>
            {/* Category name */}
            <motion.div
              animate={{ y: hovered ? -6 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{
                color: '#1B1714',
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: 0.4,
                lineHeight: 1.2,
              }}>
                {cat.name}
              </div>
              <div style={{
                color: '#7C7268',
                fontSize: 12,
                fontWeight: 500,
                marginTop: 3,
                letterSpacing: 0.3,
              }}>
                {cat.sub}
              </div>
            </motion.div>

            {/* Shop Now button — present immediately, lifts with the card. */}
            <motion.div
              animate={{ y: hovered ? -2 : 0 }}
              transition={{ duration: 0.25 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginTop: 8,
                background: 'var(--crimson)',
                color: '#fff',
                border: 'none',
                borderRadius: 20,
                padding: '6px 14px',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.4,
                width: 'fit-content',
                boxShadow: '0 2px 10px rgba(0,0,0,0.18)',
                cursor: 'pointer',
              }}
            >
              Shop Now <ArrowRight size={13} />
            </motion.div>
          </div>

          {/* Top badge */}
          <div style={{
            position: 'absolute', top: 12, left: 12,
            background: '#F2EBE2',
            border: '1px solid #E8DFD4',
            borderRadius: 20,
            padding: '3px 10px',
            fontSize: 10,
            fontWeight: 700,
            color: '#5E554C',
            letterSpacing: 0.8,
            textTransform: 'uppercase',
          }}>
            {cat.slug.includes('dry') ? '🥩 Artisan' : cat.slug.includes('box') ? '📦 Value' : cat.slug.includes('seasoned') ? '🌿 Marinated' : '⭐ Premium'}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function ShopByCategory() {
  return (
    <section style={{ background: '#F7F2EB', padding: '60px 0 72px' }}>
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <div className="section-label">Browse the Butcher</div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 600,
            color: '#1B1714',
            letterSpacing: '-0.025em',
            margin: 0,
          }}>
            Shop by Category
          </h2>
          <p style={{ color: '#7C7268', fontSize: 15, marginTop: 8, maxWidth: 480, margin: '8px auto 0' }}>
            Every cut, every origin — delivered fresh within hours across Muscat.
          </p>
        </motion.div>

        {/* Grid — 4 columns, 2 rows */}
        <div className="shop-cat-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}>
          {cats.map((cat, i) => (
            <CategoryCard key={cat.slug} cat={cat} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .shop-cat-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .shop-cat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .shop-cat-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
