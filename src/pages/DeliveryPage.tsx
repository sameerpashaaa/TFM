import { SITE_CONFIG } from '../config/siteConfig';
import { generalEnquiryLink } from '../lib/whatsapp';

export default function DeliveryPage() {
  const { deliveryZones, deliveryFreeOver, deliveryFeeUnder, deliveryPromiseMinutes, pickupAvailable } = SITE_CONFIG;

  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="section-label">DELIVERY INFO</div>
        <h1 style={{ textAlign: 'center', fontSize: 36, fontWeight: 700, marginBottom: 14, color: '#1B1714' }}>
          Delivery Policy
        </h1>
        <p style={{ textAlign: 'center', color: '#7C7268', fontSize: 15, marginBottom: 40, lineHeight: 1.7 }}>
          Fresh halal meat delivered to your door, 7 days a week.
        </p>

        {/* Key facts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 40 }}>
          {[
            { label: 'Delivery time', value: `About ${deliveryPromiseMinutes} minutes` },
            { label: 'Free delivery on orders over', value: `$${deliveryFreeOver} AUD` },
            { label: 'Delivery fee under $100', value: `$${deliveryFeeUnder} AUD flat` },
            { label: 'Pickup available', value: pickupAvailable ? 'Yes — contact us to arrange' : 'Contact us' },
          ].map(item => (
            <div key={item.label} style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', border: '1px solid #E8DFD4' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent-deep)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>
                {item.label}
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#1B1714' }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Delivery zones */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '28px 32px', border: '1px solid #E8DFD4', marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Delivery Areas</h2>
          <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
            We currently deliver to the following suburbs and surrounding areas:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {deliveryZones.map(zone => (
              <span key={zone} style={{ background: '#F2EBE2', borderRadius: 'var(--r-pill)', padding: '6px 14px', fontSize: 13, fontWeight: 600, color: '#4A423B' }}>
                {zone}
              </span>
            ))}
          </div>
          <p style={{ color: '#7C7268', fontSize: 13, marginTop: 16, lineHeight: 1.6 }}>
            Not sure if we deliver to your suburb? WhatsApp or call us and we'll let you know straight away.
          </p>
        </div>

        {/* Packaging */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '28px 32px', border: '1px solid #E8DFD4', marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>How We Pack Your Order</h2>
          <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.7 }}>
            All meat is packed in temperature-controlled thermal boxes with food-grade gel ice packs,
            keeping everything cold (between 0°C and 4°C) from our butcher to your door.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a
            href={generalEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
            style={{ display: 'inline-block', padding: '14px 32px', fontSize: 14, textDecoration: 'none' }}
          >
            Order on WhatsApp
          </a>
          <p style={{ marginTop: 16, color: '#8A8074', fontSize: 13 }}>
            Or call{' '}
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} style={{ color: 'var(--crimson)', fontWeight: 600 }}>
              {SITE_CONFIG.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
