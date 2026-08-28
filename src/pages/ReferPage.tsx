export default function ReferPage() {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-label">SHARE THE TASTE</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>Refer a Friend</h1>
        <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 40 }}>Share your love for fresh meat and reward your friends. Both of you get $15 AUD off your next order!</p>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 40 }}>
          {[
            { step: '1', title: 'Get Code', desc: 'Get your unique referral link from your profile dashboard.' },
            { step: '2', title: 'Invite Friends', desc: 'Send the code to your friends. They get $15 AUD off their first purchase.' },
            { step: '3', title: 'Earn Discount', desc: 'Once they complete their order, you receive $15 AUD in shopping credits.' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #E8DFD4', textAlign: 'center', relative: 'true' } as any}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', background: 'var(--crimson)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800,
                margin: '0 auto 16px', fontSize: 14
              }}>
                {s.step}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: '#7C7268', lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Form panel */}
        <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E8DFD4', textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>Quick Invitation</h2>
          <p style={{ fontSize: 13, color: '#7C7268', marginBottom: 24 }}>Enter your friend's email address below to send them an instant discount code.</p>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: 12, maxWidth: 500, margin: '0 auto' }}>
            <input
              type="email" placeholder="Your friend's email address" required
              style={{ flex: 1, padding: '12px 16px', borderRadius: 8, border: '1.5px solid #DCD1C4', fontSize: 14, outline: 'none' }}
            />
            <button type="submit" className="btn-red" style={{ padding: '12px 24px' }}>
              Send Invite
            </button>
          </form>
        </div>

        {/* T&C */}
        <div style={{ background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #E8DFD4', fontSize: 13, color: '#7C7268', lineHeight: 1.6 }}>
          <h4 style={{ fontWeight: 700, color: '#1B1714', marginBottom: 8 }}>Terms & Conditions</h4>
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Referral discount applies to new customers ordering for the first time.</li>
            <li>Minimum order value for referral discount is OMR 10.000.</li>
            <li>Referral credits will be applied automatically to your wallet after successful delivery to your friend.</li>
            <li>Credits are valid for 90 days from the date of issuance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
