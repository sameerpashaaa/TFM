import { SITE_CONFIG } from '../config/siteConfig';

const LAST_UPDATED = '22 September 2026';

export default function TermsPage() {
  const { businessName, address, email, phoneDisplay } = SITE_CONFIG;
  const addressStr = [address.suburb, address.state, address.postcode, address.country].filter(Boolean).join(', ');

  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: '#1B1714' }}>Terms of Service</h1>
        <p style={{ color: '#8A8074', fontSize: 13, marginBottom: 40 }}>Last updated: {LAST_UPDATED}</p>

        <div style={{ background: '#fff', borderRadius: 16, padding: '32px', border: '1px solid #E8DFD4', display: 'flex', flexDirection: 'column', gap: 28 }}>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>1. About Us</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              {businessName} ({addressStr}) operates this website and accepts orders via WhatsApp and phone.
              {SITE_CONFIG.abn ? ` ABN ${SITE_CONFIG.abn}.` : ''}
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>2. Orders</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              Orders are placed via WhatsApp or phone call. Confirmation is provided by our team before
              your order is prepared. Prices are confirmed at the time of order. We reserve the right to
              decline an order if the requested product is unavailable.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>3. Prices</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              All prices shown on this website are indicative and in Australian Dollars (AUD) inclusive
              of GST where applicable. Final pricing is confirmed via WhatsApp or phone before your order
              is processed. Prices may vary based on weight, availability, and seasonal factors.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>4. Delivery</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              We aim to deliver within approximately {SITE_CONFIG.deliveryPromiseMinutes} minutes of order
              confirmation to suburbs within our delivery zone. Delivery times are estimates and may vary.
              See our <a href="/delivery" style={{ color: 'var(--crimson)' }}>Delivery Policy</a> for full details.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>5. Returns & Refunds</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              We offer a quality guarantee on all fresh meat orders. See our{' '}
              <a href="/returns" style={{ color: 'var(--crimson)' }}>Returns & Quality Guarantee</a> page for full details.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>6. Food Safety</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              All products are handled and packed under food safety standards. Once delivered,
              the customer is responsible for proper storage and handling of perishable goods.
              Fresh meat should be refrigerated immediately upon receipt or frozen if not consumed within 2 days.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>7. Limitation of Liability</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              To the extent permitted by Australian consumer law, {businessName} is not liable for any
              indirect or consequential loss. Nothing in these terms limits your rights under the
              Australian Consumer Law.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>8. Contact</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              For any questions about these terms, contact us:
              {email && <> <a href={`mailto:${email}`} style={{ color: 'var(--crimson)' }}>{email}</a> or</>}
              {' '}call {phoneDisplay}.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
