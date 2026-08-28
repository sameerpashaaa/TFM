import { Link } from 'react-router-dom';

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
    </svg>
  );
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function WhatsApp({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--footer-bg)', color: '#fff', paddingTop: 48, paddingBottom: 0 }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 40, paddingBottom: 40 }}>

        {/* Brand */}
        <div>
          <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: 1, marginBottom: 4 }}>TARNEIT</div>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Tarneitfresh Meat</div>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>
            SHS TOWER – SUITE 81, GHALA, MUSCAT, OMAN
          </p>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', lineHeight: 2 }}>
            <div><span style={{ fontWeight: 600, color: '#fff' }}>Email:</span> contactus@tarneitfreshmeat.com</div>
            <div><span style={{ fontWeight: 600, color: '#fff' }}>Whatsapp:</span> 92423242</div>
            <div><span style={{ fontWeight: 600, color: '#fff' }}>Telephone:</span> 24026400</div>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            {[
              { icon: <FacebookIcon size={16} />, href: '#' },
              { icon: <InstagramIcon size={16} />, href: '#' },
              { icon: <WhatsApp size={16} />, href: '#' },
              { icon: <LinkedinIcon size={16} />, href: '#' },
            ].map((s, i) => (
              <a key={i} href={s.href} style={{
                width: 34, height: 34, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,.7)', transition: 'all .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--crimson)'; e.currentTarget.style.borderColor = 'var(--crimson)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.2)'; e.currentTarget.style.color = 'rgba(255,255,255,.7)'; }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* About TFM */}
        <div>
          <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, letterSpacing: .5 }}>About TFM</h4>
          {[
            { label: 'Our Story', to: '/about' },
            { label: 'Careers', to: '/careers' },
            { label: 'Rewards', to: '/rewards' },
            { label: 'Store Locations', to: '/locations' },
            { label: 'TFM Blogs', to: '/blogs' },
            { label: 'Customer Reviews', to: '/reviews' },
          ].map(l => (
            <Link key={l.label} to={l.to} className="footer-link">{l.label}</Link>
          ))}
        </div>

        {/* Customer Care */}
        <div>
          <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, letterSpacing: .5 }}>Customer Care</h4>
          {[
            { label: 'FAQs', to: '/faqs' },
            { label: 'Contact Us', to: '/contact' },
            { label: 'Delivery Info', to: '/faqs' },
            { label: 'Refund & Return Policy', to: '/faqs' },
            { label: 'Terms of Service', to: '/faqs' },
            { label: 'Privacy Policy', to: '/faqs' },
          ].map(l => (
            <Link key={l.label} to={l.to} className="footer-link">{l.label}</Link>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ fontWeight: 700, marginBottom: 8, fontSize: 16 }}>Want discounts?</h4>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
            Subscribe to our newsletter and get 7% off your first purchase!
          </p>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', overflow: 'hidden', borderRadius: 6, border: '1px solid rgba(255,255,255,.15)' }}>
            <input
              type="email" placeholder="Enter your email"
              style={{
                flex: 1, padding: '10px 14px', background: 'rgba(255,255,255,.08)',
                border: 'none', color: '#fff', fontSize: 13, outline: 'none',
              }}
            />
            <button type="submit" style={{
              padding: '10px 16px', background: 'var(--crimson)',
              color: '#fff', fontWeight: 700, fontSize: 12, border: 'none', cursor: 'pointer',
              letterSpacing: .5, whiteSpace: 'nowrap',
            }}>SUBSCRIBE</button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', padding: '16px 0', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,.4)', fontSize: 12 }}>
          © 2026 Tarneitfresh Meat Store. All rights reserved. | Powered by TFM
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          footer .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
