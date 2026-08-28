import { DollarSign, Percent, TrendingUp, Handshake } from 'lucide-react';

export default function AffiliatePage() {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-label">PARTNERSHIP</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>Make Money with TFM</h1>
        <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 40 }}>Become a TFM affiliate partner. Promote Oman\'s finest premium meats to your followers and earn commissions on every sale.</p>

        {/* Benefits Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 40 }}>
          {[
            { icon: <Percent size={28} color="var(--crimson)" />, title: 'Up to 10% Commission', desc: 'Earn competitive commission on all successful referrals.' },
            { icon: <TrendingUp size={28} color="var(--crimson)" />, title: 'High Conversion', desc: 'TFM is Muscat\'s most popular and trusted meat delivery platform.' },
            { icon: <DollarSign size={28} color="var(--crimson)" />, title: 'Monthly Payouts', desc: 'Receive earnings directly to your bank account with low minimum payout.' },
            { icon: <Handshake size={28} color="var(--crimson)" />, title: 'Marketing support', desc: 'Get banners, promo codes, and special affiliate-only offers.' },
          ].map((b, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: 20, border: '1px solid #E8DFD4', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: 10, borderRadius: '50%', background: '#FBF0E9', marginBottom: 12 }}>{b.icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
              <p style={{ fontSize: 12, color: '#7C7268', lineHeight: 1.4 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Info detail */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 40 }}>
          <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E8DFD4' }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Who is this program for?</h2>
            <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: '#5E554C', lineHeight: 1.5 }}>
              <li><strong>Food Bloggers & Chefs</strong>: Share TFM quality meat recipes and earn commissions when followers buy ingredients.</li>
              <li><strong>Lifestyle Influencers</strong>: Promote healthy eating, organic meats, and convenient shopping in Oman.</li>
              <li><strong>Deal & Coupon Sites</strong>: Share verified discounts and promotional codes.</li>
              <li><strong>Everyday Advocates</strong>: Anyone who loves our steaks and wants to earn pocket money sharing with neighbors.</li>
            </ul>
          </div>
          <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E8DFD4', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>Ready to get started?</h2>
            <p style={{ fontSize: 13, color: '#7C7268', marginBottom: 20, lineHeight: 1.5 }}>
              Registration takes less than 2 minutes. Once approved, you will get access to your portal, custom tracking links, and dashboard metrics.
            </p>
            <button className="btn-red" style={{ width: 'fit-content', margin: '0 auto', padding: '12px 36px' }}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .affiliate-grid { grid-template-columns: 1fr 1fr !important; }
          .info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
