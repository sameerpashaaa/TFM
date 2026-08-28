import { Gift, Award, Star, Zap } from 'lucide-react';

export default function RewardsPage() {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-label">TFM CLUB</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>TFM Rewards Program</h1>
        <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 40 }}>Earn points with every purchase and redeem them for premium rewards, free steaks, and exclusive discounts.</p>

        {/* Highlight Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 40 }}>
          {[
            { icon: <Award size={32} color="var(--crimson)" />, title: 'Earn Points', desc: 'Get 5 points for every $1 AUD spent online or in-store.' },
            { icon: <Gift size={32} color="var(--crimson)" />, title: 'Redeem Rewards', desc: 'Convert points to instant checkout discounts and free meat cuts.' },
            { icon: <Zap size={32} color="var(--crimson)" />, title: 'VIP Perks', desc: 'Gain access to secret cuts, early sale access, and birthday gifts.' },
          ].map((item, index) => (
            <div key={index} style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E8DFD4', textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#FBF0E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>{item.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: '#7C7268', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* VIP Tiers */}
        <h2 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, marginBottom: 28 }}>VIP Membership Tiers</h2>
        <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E8DFD4', marginBottom: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { tier: 'Bronze Tier', points: '0 - 500 Points', multiplier: '1x Points', color: '#cd7f32', desc: 'Default tier for all registered TFM members.' },
              { tier: 'Silver Tier', points: '501 - 2,000 Points', multiplier: '1.25x Points Multiplier', color: '#c0c0c0', desc: 'Unlock extra benefits. Free delivery on orders above $100 AUD.' },
              { tier: 'Gold Tier', points: '2,001+ Points', multiplier: '1.5x Points Multiplier', color: '#ffd700', desc: 'Our premium club. Free items on birthday, priority delivery within 45 mins, and custom butchery cuts request.' },
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'center', borderBottom: i < 2 ? '1px solid #F2EBE2' : 'none', paddingBottom: i < 2 ? 16 : 0 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#FAF6F1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `3px solid ${t.color}` }}>
                  <Star size={20} color={t.color} fill={t.color} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                    <h4 style={{ fontWeight: 800, fontSize: 15 }}>{t.tier}</h4>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--crimson)' }}>{t.points}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#7C7268', marginBottom: 4 }}>{t.desc}</p>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#059669', background: '#ecfdf5', padding: '2px 8px', borderRadius: 4 }}>{t.multiplier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--accent-deep)', color: '#fff', borderRadius: 20, padding: 32, textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Join the TFM Rewards Club Today</h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.8)', maxWidth: 500, margin: '0 auto 20px', lineHeight: 1.6 }}>
            Create an account or sign in to start earning points immediately. New members get 100 bonus points!
          </p>
          <button className="btn-red" style={{ background: '#fff', color: 'var(--crimson)', fontWeight: 800, padding: '12px 32px', fontSize: 14 }}>
            Sign In / Register
          </button>
        </div>
      </div>
    </div>
  );
}
