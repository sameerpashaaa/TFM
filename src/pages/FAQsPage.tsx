import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
  cat: string;
}

const faqs: FaqItem[] = [
  { cat: 'Delivery', q: 'How fast do you deliver fresh meat in Tarneit & Melbourne?', a: 'We deliver within 1 hour across Tarneit, Werribee, and surrounding Melbourne suburbs. Delivery is active 7 days a week from 8:00 AM to 8:00 PM.' },
  { cat: 'Delivery', q: 'What is the delivery fee?', a: 'Delivery is free on all orders above $100 AUD. For orders below $100 AUD, a flat delivery fee of $12 AUD is applied.' },
  { cat: 'Quality', q: 'Is TFM meat 100% Halal certified?', a: 'Yes. All our products are 100% Halal certified. We source directly from approved free-range farms in Australia and New Zealand under strict organic guidelines.' },
  { cat: 'Quality', q: 'How is the fresh meat packed?', a: 'We pack all meats in temperature-controlled thermal boxes with food-grade gel ice packs. This ensures the meat remains perfectly cold (between 0°C and 4°C) during transport.' },
  { cat: 'Orders', q: 'What is your return policy?', a: 'We offer a 100% money-back guarantee. If you are not satisfied with the portioning, weight, or quality of the meat, contact us within 24 hours of delivery, and we will collect the item and offer a full refund or replacement.' },
  { cat: 'Orders', q: 'Do you offer customized butchery request?', a: 'Yes. In the product detail page, there is a "Special Request" text box. You can specify details like "fat trimmed", "cut into thick steak pieces", or "bone removed", and our butchers will prepare it exactly to your liking.' }
];

function FaqRow({ faq }: { faq: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #E8DFD4', marginBottom: 12, overflow: 'hidden' }}>
      <button onClick={() => setOpen(v => !v)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '18px 24px', fontWeight: 700, fontSize: 14, textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', color: '#1B1714' }}>
        <span>{faq.q}</span>
        {open ? <ChevronUp size={16} color="var(--crimson)" /> : <ChevronDown size={16} color="var(--crimson)" />}
      </button>
      {open && (
        <div style={{ padding: '0 24px 20px', fontSize: 13, color: '#5E554C', lineHeight: 1.6, borderTop: '1px solid #F2EBE2', paddingTop: 16 }}>
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const [activeCat, setActiveCat] = useState('All');
  const categories = ['All', 'Delivery', 'Quality', 'Orders'];

  const filtered = activeCat === 'All' ? faqs : faqs.filter(f => f.cat === activeCat);

  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-label">HAVE QUESTIONS?</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>Frequently Asked Questions</h1>
        <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 32 }}>Everything you need to know about our sourcing, delivery, and refund guarantees.</p>

        {/* Categories */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 28 }}>
          {categories.map(c => (
            <button key={c} className={`tab-btn ${activeCat === c ? 'active' : ''}`}
              onClick={() => setActiveCat(c)}>
              {c}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div>
          {filtered.map((f, i) => <FaqRow key={i} faq={f} />)}
        </div>
      </div>
    </div>
  );
}
