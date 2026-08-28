export default function AboutPage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-label">OUR MISSION</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>Our Story</h1>
        <p style={{ textAlign: 'center', color: '#7C7268', fontSize: 16, marginBottom: 40, lineHeight: 1.6 }}>
          Tarneit Fresh Meat (TFM) was founded with a simple vision: to bring the highest quality, fresh, and ethically sourced halal meats directly to families across Tarneit and Greater Melbourne, Victoria.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, margin: '40px 0' }}>
          <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E8DFD4' }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: 'var(--crimson)' }}>Our Story</h3>
            <p style={{ color: '#7C7268', lineHeight: 1.7, fontSize: 14 }}>
              Our journey began in Melbourne, where we noticed a gap in the market for premium butchery cuts delivered with absolute speed and freshness. Traditional methods often involved long cold storage times or compromised sourcing. We set out to change that by partnering with world-class free-range farms in Victoria, regional New South Wales, and New Zealand.
            </p>
          </div>
          <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E8DFD4' }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: 'var(--crimson)' }}>Our Commitment</h3>
            <p style={{ color: '#7C7268', lineHeight: 1.7, fontSize: 14 }}>
              Today, TFM operates Tarneit's leading digital butchery service, delivering orders in under 1 hour within Melbourne's west. We take great pride in our 100% Halal certification, maintaining state-of-the-art cold chain facilities, and offering customer-first guarantees.
            </p>
          </div>
        </div>

        {/* Brand values */}
        <div style={{ marginTop: 48, borderTop: '1px solid #E8DFD4', paddingTop: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, textAlign: 'center' }}>TFM Principles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, textAlign: 'center' }}>
            {[
              { title: '100% Halal Certified', desc: 'All livestock are slaughtered and processed according to strict Islamic laws and hygiene standards.' },
              { title: 'Grass-Fed & Organic', desc: 'No artificial additives, growth hormones, or unnecessary antibiotics in any of our cattle.' },
              { title: 'Uncompromised Cold Chain', desc: 'Continuous temperature monitoring from the farm gate all the way to your doorstep.' },
            ].map((v, i) => (
              <div key={i}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: 'var(--crimson)' }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: '#7C7268', lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
