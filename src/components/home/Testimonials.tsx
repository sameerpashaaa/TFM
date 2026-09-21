import { useRef } from 'react';

const testimonials = [
  { name: 'Sabri Al Suleimani', rating: 5, text: 'The quality of TFM beef is absolutely outstanding. I ordered the Australian Wagyu and it was restaurant-level perfection. Delivered in under an hour!', order: 'Wagyu Ribeye Box' },
  { name: 'Qusai Al-Hinai', rating: 5, text: 'Finally a butcher in Melbourne that delivers on their promise. The lamb was incredibly tender and the packaging was excellent. Will definitely order again.', order: 'Premium Lamb Chops' },
  { name: 'Abdulsalam Al-Rashdi', rating: 5, text: 'Best meat delivery service in Australia. The free returns policy gives me so much confidence. The NZ grass-fed lamb cubes are our family favourite.', order: 'NZ Grass-Fed Lamb' },
  { name: 'Fatima Al-Lawati', rating: 5, text: 'Their customer service is unmatched. Had an issue with my order and they replaced it within 45 minutes, no questions asked.', order: 'Whole Chicken Box' },
  { name: 'Mohammed Al-Balushi', rating: 5, text: 'I\'ve been ordering from TFM for 6 months and the quality is consistently brilliant. The dry-aged beef is worth every dollar.', order: 'Dry-Aged Tomahawk' },
  { name: 'Fatima Al-Lawati', rating: 5, text: 'The box collections offer incredible value. Got the lamb box and it lasted us a full week. All cuts were fresh and perfectly butchered.', order: 'Value Lamb Box' },
];

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < n ? 'var(--star)' : 'var(--border)', fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section style={{ padding: '64px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', marginBottom: 12 }}>What Our Customers Say</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Stars n={5} />
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>4.8 average from 500+ orders</span>
          </div>
        </div>

        <div ref={ref} style={{ display: 'flex', gap: 24, overflowX: 'auto', paddingBottom: 16, scrollSnapType: 'x mandatory' }} className="scrollbar-none">
          {testimonials.map((t, i) => (
            <div key={i} className="surface testimonial-card-item" style={{ 
              padding: '32px', 
              flexShrink: 0,
              scrollSnapAlign: 'start',
              display: 'flex', flexDirection: 'column'
            }}>
              <Stars n={t.rating} />
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 16, marginBottom: 24, flex: 1 }}>"{t.text}"</p>
              
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>{t.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Verified Buyer · Ordered: {t.order}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
