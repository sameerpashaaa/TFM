import { waLink } from '../lib/whatsapp';
import { SITE_CONFIG } from '../config/siteConfig';

function ComingSoonPage({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 60, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 600, textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#1B1714' }}>{title}</h1>
        <p style={{ color: '#7C7268', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>{subtitle}</p>
        <p style={{ color: '#5E554C', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
          This programme is being rebuilt. To join the waitlist or ask questions,
          WhatsApp us and we'll keep you updated.
        </p>
        <a
          href={waLink(`Hi Tarneit Fresh Meat! I'd like to join the waitlist for: ${title}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
          style={{ display: 'inline-block', padding: '14px 32px', fontSize: 14, textDecoration: 'none' }}
        >
          Join waitlist on WhatsApp
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

export default function RewardsPage() {
  return (
    <ComingSoonPage
      title="TFM Rewards"
      subtitle="A loyalty programme for our regular customers — earn points on every order."
    />
  );
}
