import { SITE_CONFIG } from '../config/siteConfig';

const LAST_UPDATED = '22 September 2026';

export default function PrivacyPage() {
  const { businessName, email, phoneDisplay } = SITE_CONFIG;

  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: '#1B1714' }}>Privacy Policy</h1>
        <p style={{ color: '#8A8074', fontSize: 13, marginBottom: 40 }}>Last updated: {LAST_UPDATED}</p>

        <div style={{ background: '#fff', borderRadius: 16, padding: '32px', border: '1px solid #E8DFD4', display: 'flex', flexDirection: 'column', gap: 28 }}>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>1. Information We Collect</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              When you place an order or contact us via WhatsApp, phone, or email, we collect
              the information you provide: your name, phone number, delivery address, and order details.
              We do not collect payment card details — all orders are processed offline via agreed payment methods.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>2. How We Use Your Information</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              We use your information solely to process your order, arrange delivery, and communicate
              with you about your order. We do not sell, share, or rent your personal information to
              third parties.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>3. WhatsApp & Phone Communications</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              When you contact us via WhatsApp or phone, your messages are stored within those
              platforms according to their respective privacy policies. We use WhatsApp Business for
              order communications. WhatsApp's privacy policy is available at whatsapp.com/legal.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>4. Cookies</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              This website uses localStorage to save your shopping cart locally on your device.
              No tracking cookies or third-party analytics are used at this time.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>5. Data Retention</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              Order details are retained only as long as necessary to fulfil orders and comply with
              any applicable legal obligations (e.g. tax records for 5 years under Australian law).
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>6. Your Rights</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              Under the Australian Privacy Act 1988, you have the right to access, correct, or
              request deletion of your personal information. To exercise these rights, contact us directly.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>7. Contact</h2>
            <p style={{ color: '#5E554C', fontSize: 14, lineHeight: 1.8 }}>
              Privacy enquiries: {businessName}.
              {email && <> <a href={`mailto:${email}`} style={{ color: 'var(--crimson)' }}>{email}</a> or</>}
              {' '}call {phoneDisplay}.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
