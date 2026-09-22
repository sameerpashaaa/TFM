import { generalEnquiryLink } from '../lib/whatsapp';
import { SITE_CONFIG } from '../config/siteConfig';

export default function ReturnsPage() {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="section-label">QUALITY GUARANTEE</div>
        <h1 style={{ textAlign: 'center', fontSize: 36, fontWeight: 700, marginBottom: 14, color: '#1B1714' }}>
          Returns & Quality Guarantee
        </h1>

        <div style={{ background: '#fff', borderRadius: 16, padding: '32px', border: '1px solid #E8DFD4', marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Our Promise</h2>
          <p style={{ color: '#5E554C', fontSize: 15, lineHeight: 1.8 }}>
            If you are not satisfied with the quality, weight, or portioning of your order,
            contact us within 24 hours of delivery. We will collect the item and arrange a
            full refund or replacement — whichever you prefer.
          </p>
        </div>

        <div style={{ background: '#fff', borderRadius: 16, padding: '32px', border: '1px solid #E8DFD4', marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>How to Contact Us</h2>
          <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
            The fastest way is to WhatsApp or call us directly. Please have your order details
            (approximate time, what you ordered) and a description of the issue ready.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href={generalEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
              style={{ padding: '12px 24px', textDecoration: 'none', fontSize: 14 }}
            >
              WhatsApp us
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              style={{ padding: '12px 24px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-pill)', textDecoration: 'none', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}
            >
              Call {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 16, padding: '32px', border: '1px solid #E8DFD4' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>What Is Not Covered</h2>
          <ul style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>Issues reported more than 24 hours after delivery.</li>
            <li>Change of mind after meat has been portioned or cooked.</li>
            <li>Variation in natural fat marbling or muscle colour (normal for fresh meat).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
