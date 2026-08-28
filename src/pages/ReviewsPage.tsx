import { CheckCircle } from 'lucide-react';

const reviewsData = [
  { name: 'Sabri Al Suleimani', date: '30 Jul 2026', rating: 5, verified: true, title: 'Outstanding Quality', text: 'The quality of TFM beef is absolutely outstanding. I ordered the Australian Wagyu and it was restaurant-level perfection. Delivered in under an hour!' },
  { name: 'David Miller', date: '28 Jul 2026', rating: 5, verified: true, title: 'Excellent Service', text: 'Finally a butcher in Tarneit that delivers on their promise. The lamb rack was incredibly tender and the packaging was excellent. Will definitely order again.' },
  { name: 'Sarah Jenkins', date: '25 Jul 2026', rating: 5, verified: true, title: 'Highly Recommend', text: 'Best fresh meat delivery service in Melbourne. The free returns policy gives me so much confidence. The grass-fed Wagyu ribeye is our family favourite.' },
  { name: 'Mohammed Al-Balushi', date: '20 Jul 2026', rating: 5, verified: true, title: 'Always Perfect', text: 'I\'ve been ordering from TFM for 6 months and the quality is consistently brilliant. The dry-aged beef is worth every Rial.' },
  { name: 'Fatima Al-Lawati', date: '18 Jul 2026', rating: 5, verified: true, title: 'Great Value Box', text: 'The box collections offer incredible value. Got the lamb box and it lasted us a full week. All cuts were fresh and perfectly butchered.' },
  { name: 'Salim Al-Harthy', date: '15 Jul 2026', rating: 4, verified: true, title: 'Great Ribeye Steaks', text: 'Super fast delivery and the Black Angus ribeyes were marble-rich and juicy. Excellent service overall.' }
];

export default function ReviewsPage() {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-label">CUSTOMER VOICE</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>Customer Reviews</h1>
        <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 40 }}>Read verified reviews from our regular customers in Oman.</p>

        {/* Rating Summary */}
        <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E8DFD4', display: 'flex', gap: 40, alignItems: 'center', marginBottom: 32 }}>
          <div style={{ textAlign: 'center', borderRight: '1px solid #E8DFD4', paddingRight: 40 }}>
            <div style={{ fontSize: 48, fontWeight: 900, color: 'var(--crimson)' }}>4.9</div>
            <div style={{ display: 'flex', gap: 2, justifyContent: 'center', margin: '8px 0' }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: 20 }}>★</span>)}
            </div>
            <div style={{ fontSize: 13, color: '#7C7268' }}>Based on 482 reviews</div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { stars: 5, pct: 92 },
              { stars: 4, pct: 6 },
              { stars: 3, pct: 2 },
              { stars: 2, pct: 0 },
              { stars: 1, pct: 0 },
            ].map(r => (
              <div key={r.stars} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12 }}>
                <span style={{ width: 40, fontWeight: 600 }}>{r.stars} Star</span>
                <div style={{ flex: 1, height: 8, background: '#F2EBE2', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${r.pct}%`, height: '100%', background: 'var(--crimson)' }} />
                </div>
                <span style={{ width: 30, color: '#7C7268', textAlign: 'right' }}>{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {reviewsData.map((r, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #E8DFD4' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 6 }}>
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx} style={{ color: idx < r.rating ? '#f59e0b' : '#DCD1C4', fontSize: 14 }}>★</span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1B1714' }}>{r.title}</h3>
                </div>
                <span style={{ fontSize: 12, color: '#8A8074' }}>{r.date}</span>
              </div>
              <p style={{ fontSize: 14, color: '#5E554C', lineHeight: 1.6, marginBottom: 16 }}>{r.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#1B1714' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--crimson)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>
                  {r.name[0]}
                </div>
                {r.name}
                {r.verified && (
                  <span style={{ color: '#059669', display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 500, background: '#ecfdf5', padding: '2px 8px', borderRadius: 20 }}>
                    <CheckCircle size={10} /> Verified Purchase
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
