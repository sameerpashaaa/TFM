import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import { generalEnquiryLink } from '../../lib/whatsapp';

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// Only render social links that have a real URL (not null)
const socialConfig = [
  { key: 'facebook', icon: <FacebookIcon size={16} />, label: 'Facebook', url: SITE_CONFIG.socials.facebook },
  { key: 'instagram', icon: <InstagramIcon size={16} />, label: 'Instagram', url: SITE_CONFIG.socials.instagram },
  { key: 'whatsapp', icon: <WhatsAppIcon size={16} />, label: 'WhatsApp', url: generalEnquiryLink() }, // WhatsApp always shown
] as const;

const linkStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,.7)',
  fontSize: 13,
  textDecoration: 'none',
  transition: 'color 0.2s',
};

export default function Footer() {
  const { address, hours, email, phoneDisplay, phoneRaw } = SITE_CONFIG;
  const addressStr = [
    address.street,
    address.suburb,
    address.state,
    address.postcode,
    address.country,
  ]
    .filter(Boolean)
    .join(', ');

  const activeSocials = socialConfig.filter(s => s.url != null);

  return (
    <footer style={{ background: 'var(--footer-bg)', color: '#fff', paddingTop: 48, paddingBottom: 0, borderTop: '4px solid var(--accent-premium)' }}>
      <div className="container footer-grid">

        {/* Brand & Contact */}
        <div>
          <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: 1, marginBottom: 4 }}>TARNEIT</div>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 16, color: 'var(--accent-premium)' }}>Tarneit Fresh Meat</div>

          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
            {addressStr}
          </p>

          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', lineHeight: 2, marginBottom: 16 }}>
            {email && (
              <div>
                <span style={{ fontWeight: 600, color: '#fff' }}>Email:</span>{' '}
                <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
              </div>
            )}
            <div>
              <span style={{ fontWeight: 600, color: '#fff' }}>WhatsApp / Phone:</span>{' '}
              <a href={`tel:${phoneRaw}`} style={linkStyle}>{phoneDisplay}</a>
            </div>
          </div>

          {/* Business hours — only shown when confirmed */}
          {hours && (
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#fff', marginBottom: 4 }}>Business Hours:</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.7)' }}>{hours}</div>
            </div>
          )}

          {/* ABN — only shown when set */}
          {SITE_CONFIG.abn && (
            <div style={{ marginTop: 12, fontSize: 12, color: 'rgba(255,255,255,.5)' }}>
              ABN {SITE_CONFIG.abn}
            </div>
          )}

          {/* Social links — only those with real URLs */}
          {activeSocials.length > 0 && (
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {activeSocials.map(s => (
                <a
                  key={s.key}
                  href={s.url!}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,.7)',
                    transition: 'all .2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--crimson)';
                    e.currentTarget.style.borderColor = 'var(--crimson)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,.2)';
                    e.currentTarget.style.color = 'rgba(255,255,255,.7)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 15, letterSpacing: .5 }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Delivery Policy', to: '/delivery' },
              { label: 'Returns & Quality Guarantee', to: '/returns' },
              { label: 'FAQs', to: '/faqs' },
              { label: 'Terms of Service', to: '/terms' },
              { label: 'Privacy Policy', to: '/privacy' },
            ].map(l => (
              <Link
                key={l.label}
                to={l.to}
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.7)')}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Delivery Areas */}
        <div>
          <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 15, letterSpacing: .5 }}>Delivery Areas</h4>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
            Delivering fresh halal meat to {SITE_CONFIG.deliveryZones.join(', ')} and surrounding suburbs.
            Free delivery on orders over ${SITE_CONFIG.deliveryFreeOver}.
          </p>
          <Link to="/delivery" style={{ ...linkStyle, fontWeight: 600, textDecoration: 'underline' }}>
            See all delivery areas →
          </Link>
        </div>

        {/* Order CTA — WhatsApp instead of fake newsletter form */}
        <div>
          <h4 style={{ fontWeight: 700, marginBottom: 8, fontSize: 16 }}>Order or Enquire</h4>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
            The easiest way to order is via WhatsApp. Tell us what you need and we'll
            confirm availability and price straight away.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a
              href={generalEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 16px',
                background: '#25D366',
                borderRadius: 6,
                color: '#fff',
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              <WhatsAppIcon size={16} />
              Order on WhatsApp
            </a>
            <a
              href={`tel:${phoneRaw}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 16px',
                border: '1.5px solid rgba(255,255,255,.25)',
                borderRadius: 6,
                color: 'rgba(255,255,255,.9)',
                fontWeight: 600,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', padding: '20px 0', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,.4)', fontSize: 12 }}>
          &copy; {new Date().getFullYear()} Tarneit Fresh Meat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
