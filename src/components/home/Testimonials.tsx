import { Quote } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  { name: 'Sabri Al Suleimani', rating: 5, text: 'The quality of TFM beef is absolutely outstanding. I ordered the Australian Wagyu and it was restaurant-level perfection. Delivered in under an hour!' },
  { name: 'Qusai Al-Hinai', rating: 5, text: 'Finally a butcher in Muscat that delivers on their promise. The lamb was incredibly tender and the packaging was excellent. Will definitely order again.' },
  { name: 'Abdulsalam Al-Rashdi', rating: 5, text: 'Best meat delivery service in Oman. The free returns policy gives me so much confidence. The NZ grass-fed lamb cubes are our family favourite.' },
  { name: 'Customer', rating: 4, text: 'Excellent service and amazing meat quality. The seasoned beef mince is perfect for our weekly BBQs. Fast delivery every single time.' },
  { name: 'Mohammed Al-Balushi', rating: 5, text: 'I\'ve been ordering from TFM for 6 months and the quality is consistently brilliant. The dry-aged beef is worth every Rial.' },
  { name: 'Fatima Al-Lawati', rating: 5, text: 'The box collections offer incredible value. Got the lamb box and it lasted us a full week. All cuts were fresh and perfectly butchered.' },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < n ? '#f59e0b' : '#DCD1C4' }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section style={{ background: '#fff', padding: '52px 0' }}>
      <div className="container">
        <div className="section-label">VERIFIED BUYERS</div>
        <h2 className="section-title">What Our Customers Say</h2>

        <div ref={ref} style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 16 }} className="scrollbar-none">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <Quote size={20} style={{ color: 'var(--crimson)', opacity: .4, marginBottom: 8 }} />
              <Stars n={t.rating} />
              <p style={{ fontSize: 13, color: '#4A423B', lineHeight: 1.65, marginTop: 10, marginBottom: 12 }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', background: '#F2EBE2',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700, color: 'var(--crimson)',
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: '#8A8074' }}>Verified Buyer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
