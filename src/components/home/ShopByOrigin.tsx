import { useState, useRef } from 'react';
import { origins } from '../../data/categories';

type OriginTab = keyof typeof origins;

const tabs: { label: string; key: OriginTab }[] = [
  { label: 'Beef', key: 'beef' },
  { label: 'Lamb', key: 'lamb' },
  { label: 'Chicken', key: 'chicken' },
  { label: 'Fish', key: 'fish' },
];

// Each origin gets a flag emoji + a relevant background image
const originData: Record<string, { flag: string; img: string; country: string }> = {
  'Australian Beef':      { flag: '🇦🇺', country: 'Australia',   img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=400&q=80' },
  'Wagyu Beef':           { flag: '🇯🇵', country: 'Japan',        img: 'https://images.unsplash.com/photo-1588347818036-c3fb38dd9b7c?auto=format&fit=crop&w=400&q=80' },
  'Angus Reserve':        { flag: '🇦🇺', country: 'Australia',   img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&q=80' },
  'Australian Lamb':      { flag: '🇦🇺', country: 'Australia',   img: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?auto=format&fit=crop&w=400&q=80' },
  'NZ Spring Lamb':       { flag: '🇳🇿', country: 'New Zealand', img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&q=80' },
  'Omani Local Lamb':     { flag: '🇴🇲', country: 'Oman',        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
  'Local Fresh Chicken':  { flag: '🇴🇲', country: 'Oman',        img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=400&q=80' },
  'Premium Free-Range':   { flag: '🇦🇺', country: 'Australia',   img: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=400&q=80' },
  'Corn-Fed Chicken':     { flag: '🇺🇸', country: 'USA',         img: 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?auto=format&fit=crop&w=400&q=80' },
  'Fresh Local Catch':    { flag: '🇴🇲', country: 'Oman',        img: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=400&q=80' },
  'Norwegian Salmon':     { flag: '🇳🇴', country: 'Norway',      img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80' },
  'Indian Ocean Tuna':    { flag: '🌊',   country: 'Indian Ocean', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80' },
};

export default function ShopByOrigin() {
  const [activeTab, setActiveTab] = useState<OriginTab>('beef');
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section style={{ padding: '64px 0' }}>
      <div className="container">
        <div className="section-label" style={{ color: 'var(--accent-deep)' }}>PREMIUM SOURCING</div>
        <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', marginBottom: 24 }}>Shop by Origin</h2>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap' }}>
          {tabs.map(t => {
            const isActive = activeTab === t.key;
            return (
              <button
                key={t.key}
                style={{
                  background: isActive ? 'var(--crimson)' : 'var(--chip)',
                  color: isActive ? '#fff' : 'var(--text-primary)',
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: isActive ? 'underline' : 'none',
                  textUnderlineOffset: 4,
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: 'var(--r-pill)',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
                onClick={() => setActiveTab(t.key)}>
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div ref={ref} style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 16 }} className="scrollbar-none">
          {origins[activeTab].map((origin, i) => {
            const data = originData[origin] ?? { flag: '📍', country: '', img: '' };
            return (
              <div key={i} style={{
                minWidth: 240, flexShrink: 0, borderRadius: 'var(--r-card)',
                overflow: 'hidden', cursor: 'pointer',
                boxShadow: 'var(--shadow-card)', position: 'relative',
                transition: 'transform .2s, box-shadow .2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lift)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-card)'; }}
              >
                {/* Image */}
                <div style={{ height: 160, position: 'relative' }}>
                  <img src={data.img} alt={origin} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', top: 12, left: 12, fontSize: 28, lineHeight: 1 }}>{data.flag}</div>
                  <div style={{ position: 'absolute', bottom: 12, left: 12, color: '#fff', fontSize: 11, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', opacity: 0.85 }}>{data.country}</div>
                </div>
                {/* Content */}
                <div style={{ padding: '16px', background: 'var(--surface)' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)', marginBottom: 8 }}>{origin}</div>
                  <div style={{ fontSize: 13, color: 'var(--crimson)', fontWeight: 600 }}>View Products →</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

