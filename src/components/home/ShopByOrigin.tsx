import { useState, useRef } from 'react';
import { origins } from '../../data/categories';

type OriginTab = keyof typeof origins;

const tabs: { label: string; key: OriginTab }[] = [
  { label: 'Beef', key: 'beef' },
  { label: 'Lamb', key: 'lamb' },
  { label: 'Ostrich', key: 'ostrich' },
  { label: 'Venison', key: 'venison' },
];

const flagEmojis: Record<string, string> = {
  'AUS Grass-Fed Beef': '🇦🇺',
  'Australian Black Angus Beef': '🇦🇺',
  'Australian Wagyu Beef': '🇦🇺',
  'NZ Grass-Fed Beef': '🇳🇿',
  'South African Grass-Fed Beef': '🇿🇦',
  'Japanese A5 Wagyu Beef': '🇯🇵',
  'US Black Angus Beef': '🇺🇸',
  'Brazilian Grass-Fed Beef': '🇧🇷',
  'NZ Grass-Fed Lamb': '🇳🇿',
  'Australian Grass-Fed Lamb': '🇦🇺',
  'Omani Lamb': '🇴🇲',
  'South African Lamb': '🇿🇦',
  'South African Ostrich': '🇿🇦',
  'Namibian Ostrich': '🇳🇦',
  'NZ Venison': '🇳🇿',
  'Scottish Venison': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
};

export default function ShopByOrigin() {
  const [activeTab, setActiveTab] = useState<OriginTab>('beef');
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section style={{ background: '#fff', padding: '52px 0' }}>
      <div className="container">
        <div className="section-label">PREMIUM SOURCING</div>
        <h2 className="section-title">Shop by Origin</h2>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 28, flexWrap: 'wrap' }}>
          {tabs.map(t => (
            <button key={t.key} className={`tab-btn ${activeTab === t.key ? 'active' : ''}`}
              onClick={() => setActiveTab(t.key)}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div ref={ref} style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8 }} className="scrollbar-none">
          {origins[activeTab].map((origin, i) => (
            <div key={i} className="origin-card">
              <div style={{ fontSize: 28 }}>{flagEmojis[origin] || '🌍'}</div>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#1B1714' }}>{origin}</div>
              <div style={{ fontSize: 11, color: 'var(--crimson)', fontWeight: 600, marginTop: 4 }}>View Products →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
