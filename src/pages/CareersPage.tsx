export default function CareersPage() {
  const jobs = [
    { title: 'Master Butcher', type: 'Full-time', location: 'Muscat, Oman', dept: 'Butchery Operations', desc: 'Seeking an experienced master butcher to handle premium portioning, dry-age management, and specialty cuts preparation.' },
    { title: 'Quality Assurance Officer', type: 'Full-time', location: 'Ghala, Muscat', dept: 'Quality Control', desc: 'Responsible for monitoring cold chain integrity, checking raw materials, and ensuring compliance with halal & health standards.' },
    { title: 'Customer Experience Executive', type: 'Full-time', location: 'Muscat, Oman', dept: 'Customer Support', desc: 'Manage incoming queries, order issues, delivery coordinates, and customer satisfaction ratings via chat, call and WhatsApp.' },
  ];

  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-label">JOIN OUR TEAM</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>Careers at TFM</h1>
        <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 40 }}>We are always looking for passionate food lovers, expert butchers, and operations specialists to join the TFM family.</p>

        {/* Working culture */}
        <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E8DFD4', marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>Why work with Tarneitfresh Meat?</h2>
          <p style={{ fontSize: 14, color: '#5E554C', lineHeight: 1.6, marginBottom: 20 }}>
            At TFM, we believe our people are our strength. We provide an environment that fosters growth, prioritizes product safety and customer happiness, and respects traditional craftsmanship.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, fontSize: 13 }}>
            <div><strong>Competitive Salary</strong><p style={{ color: '#7C7268', marginTop: 4 }}>We pay industry-leading packages with performance-based bonuses.</p></div>
            <div><strong>Training & Development</strong><p style={{ color: '#7C7268', marginTop: 4 }}>Learn modern processing, food hygiene standards, and customer care skills.</p></div>
            <div><strong>Health Benefits</strong><p style={{ color: '#7C7268', marginTop: 4 }}>Full health insurance and employee discounts on all premium meats.</p></div>
          </div>
        </div>

        {/* Openings */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Open Positions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {jobs.map((j, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #E8DFD4' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1B1714' }}>{j.title}</h3>
                  <span style={{ fontSize: 12, color: '#7C7268', display: 'inline-block', marginTop: 2 }}>{j.dept} | {j.location}</span>
                </div>
                <span style={{ background: '#FBF0E9', color: 'var(--crimson)', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 4 }}>{j.type}</span>
              </div>
              <p style={{ fontSize: 13, color: '#5E554C', lineHeight: 1.5, marginBottom: 16 }}>{j.desc}</p>
              <button className="btn-red" style={{ padding: '8px 16px', fontSize: 12 }}>
                Apply for position
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
