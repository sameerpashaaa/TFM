import { ShieldCheck, Truck, Clock, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Halal Certified',
    desc: '100% certified halal sourcing and processing',
  },
  {
    icon: Truck,
    title: 'Cold-Chain Delivery',
    desc: 'Delivered fresh in temperature-controlled vehicles',
  },
  {
    icon: Clock,
    title: 'Same-Day Freshness',
    desc: 'Cut and packed the same day as delivery',
  },
  {
    icon: ThumbsUp,
    title: 'Quality Guarantee',
    desc: 'Not satisfied? Easy returns, no questions asked',
  },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: '64px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', marginBottom: 48 }}>
          Why Choose Tarneit Fresh Meat
        </h2>
        
        {/* Grid — responsive via .trust-grid in index.css */}
        <div className="trust-grid">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: 64, height: 64, 
                  borderRadius: '50%',
                  background: 'var(--chip)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                  color: 'var(--accent-premium)'
                }}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5, maxWidth: 240 }}>
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
