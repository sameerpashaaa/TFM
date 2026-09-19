import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cats = [
  {
    slug: 'all-beef',
    name: 'All Beef',
    sub: 'Wagyu · Angus · Grass-Fed',
    // Raw beef steaks on dark background
    img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'Shop Beef →',
    priceFrom: '3.500',
  },
  {
    slug: 'all-lamb',
    name: 'All Lamb',
    sub: 'NZ · AUS · Omani',
    // Lamb chops / rack of lamb
    img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'Shop Lamb →',
    priceFrom: '4.200',
  },
  {
    slug: 'mls-poultry',
    name: 'TFM Poultry',
    sub: 'Chicken · Camel',
    // Fresh whole chicken
    img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'Explore →',
    priceFrom: '1.800',
  },
  {
    slug: 'whole-carcass',
    name: 'Whole Carcass',
    sub: 'Lamb · Beef · Camel',
    // Butcher shop / hanging meat
    img: 'https://images.unsplash.com/photo-1448907503123-67254d59ca4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'View Collection →',
    priceFrom: '45.000',
  },
  {
    slug: 'box-collection',
    name: 'Box Collection',
    sub: 'Value · Party · Family',
    // BBQ platter / meat spread
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'Shop Boxes →',
    priceFrom: '12.000',
  },
  {
    slug: 'seasoned',
    name: 'Seasoned',
    sub: 'Mishkak · Kofta · Rubs',
    // Marinated grilled meat / skewers
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'Explore →',
    priceFrom: '2.500',
  },
  {
    slug: 'dry-aged-beef',
    name: 'Dry Aged Beef',
    sub: 'Tomahawk · Ribeye',
    // Premium thick-cut steaks
    img: 'https://images.unsplash.com/photo-1588347818036-c3fb38dd9b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'Shop Premium →',
    priceFrom: '8.500',
  },
  {
    slug: 'dry-aged-lamb',
    name: 'Dry Aged Lamb',
    sub: 'Rack · Chops · Shoulder',
    // Lamb rack / chops up close
    img: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'View Collection →',
    priceFrom: '9.000',
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
            
            {/* Top badge */}
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
              {cat.slug.includes('dry') ? '🥩 Artisan' : cat.slug.includes('box') ? '📦 Value' : cat.slug.includes('seasoned') ? '🌿 Marinated' : '⭐ Premium'}
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
              color: 'var(--text-muted)',
              fontSize: 12,
              fontWeight: 600,
            }}>
              From OMR {cat.priceFrom}/kg
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
            Every cut, every origin — delivered fresh within hours across Muscat.
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

