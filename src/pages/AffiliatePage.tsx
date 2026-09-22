import { waLink } from '../lib/whatsapp';
import { SITE_CONFIG } from '../config/siteConfig';

export default function AffiliatePage() {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 60, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 600, textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#1B1714' }}>Partner with TFM</h1>
        <p style={{ color: '#7C7268', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
          Interested in becoming a TFM affiliate, reseller, or business partner?
        </p>
        <p style={{ color: '#5E554C', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
          Our affiliate programme is being set up. To register your interest and be
          first to know when it launches, message us on WhatsApp.
        </p>
        <a
          href={waLink("Hi Tarneit Fresh Meat! I'm interested in the affiliate / partner programme.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
          style={{ display: 'inline-block', padding: '14px 32px', fontSize: 14, textDecoration: 'none' }}
        >
          Express interest on WhatsApp
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
