import { useState, useRef } from 'react';
import { origins } from '../../data/categories';

type OriginTab = keyof typeof origins;

const tabs: { label: string; key: OriginTab }[] = [
  { label: 'Beef', key: 'beef' },
  { label: 'Lamb', key: 'lamb' },
  { label: 'Chicken', key: 'chicken' },
  { label: 'Fish', key: 'fish' },
];

const flagEmojis: Record<string, string> = {
  'Australian Beef': '🇦🇺',
  'Wagyu Beef': '🇯🇵',
  'Angus Reserve': '🇦🇺',
  'Australian Lamb': '🇦🇺',
  'NZ Spring Lamb': '🇳🇿',
  'Omani Local Lamb': '🇴🇲',
  'Local Fresh Chicken': '🇴🇲',
  'Premium Free-Range': '🇦🇺',
  'Corn-Fed Chicken': '🇺🇸',
  'Fresh Local Catch': '🇴🇲',
  'Norwegian Salmon': '🇳🇴',
  'Indian Ocean Tuna': '🌊',
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
                className="tab-btn"
                style={{
                  background: isActive ? 'var(--crimson)' : 'var(--chip)',
                  color: isActive ? '#fff' : 'var(--text-primary)',
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: isActive ? 'underline' : 'none',
                  textUnderlineOffset: 4,
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: 'var(--r-pill)'
                }}
                onClick={() => setActiveTab(t.key)}>
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div ref={ref} style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 16 }} className="scrollbar-none">
          {origins[activeTab].map((origin, i) => (
            <div key={i} className="surface" style={{
              padding: '24px', 
              minWidth: 220,
              display: 'flex', flexDirection: 'column', gap: 8, cursor: 'pointer',
              transition: 'all .2s', flexShrink: 0,
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--crimson)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLDivElement).style.transform = 'none'; }}
            >
              <div style={{ fontSize: 32, marginBottom: 4 }}>{flagEmojis[origin] || '📍'}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>{origin}</div>
              <div style={{ fontSize: 13, color: 'var(--crimson)', fontWeight: 600, marginTop: 8 }}>View Products →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
