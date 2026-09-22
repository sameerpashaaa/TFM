import { waLink } from '../lib/whatsapp';
import { SITE_CONFIG } from '../config/siteConfig';

export default function ReferPage() {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 60, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 600, textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#1B1714' }}>Refer a Friend</h1>
        <p style={{ color: '#7C7268', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
          Know someone who'd love fresh halal meat delivered to their door?
        </p>
        <p style={{ color: '#5E554C', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
          Our referral programme is being rebuilt. In the meantime, just tell your friends
          about us — and ask them to mention your name when they WhatsApp their first order.
          We'll sort them out.
        </p>
        <a
          href={waLink("Hi Tarneit Fresh Meat! I'd like to refer a friend to your store.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
          style={{ display: 'inline-block', padding: '14px 32px', fontSize: 14, textDecoration: 'none' }}
        >
          WhatsApp us about a referral
        </a>
        <p style={{ marginTop: 24, color: '#8A8074', fontSize: 13 }}>
          Or call us:{' '}
          <a href={`tel:${SITE_CONFIG.phoneRaw}`} style={{ color: 'var(--crimson)', fontWeight: 600 }}>
            {SITE_CONFIG.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
}
