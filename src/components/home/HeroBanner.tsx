import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/siteConfig';
import { generalEnquiryLink } from '../../lib/whatsapp';

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// Proof strip items — only rendered when data is available
const proofItems = [
  // Always shown (backed by config):
  { text: `Free delivery over $${SITE_CONFIG.deliveryFreeOver}`, always: true },
  { text: 'Delivered in about 60 minutes', always: true },
  { text: 'Free replacement guarantee', always: true, link: '/returns' },
  // Conditionally shown (when owner data set):
  ...(SITE_CONFIG.halalCertifier
    ? [{ text: `Halal certified — ${SITE_CONFIG.halalCertifier}`, always: true }]
    : [{ text: 'Halal certified', always: true }]),
  ...(SITE_CONFIG.googleReviews.url && SITE_CONFIG.googleReviews.rating != null
    ? [{
        text: `${SITE_CONFIG.googleReviews.rating}★ Google reviews`,
        always: true,
        link: SITE_CONFIG.googleReviews.url,
        external: true,
      }]
    : []),
] as { text: string; always: boolean; link?: string; external?: boolean }[];

export default function HeroBanner() {
  const heroStyle: React.CSSProperties = {
    position: 'relative',
    minHeight: 'clamp(560px, 92vh, 760px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: SITE_CONFIG.heroImage
      ? `url(${SITE_CONFIG.heroImage}) center/cover no-repeat`
      : 'linear-gradient(135deg, #2B1A0F 0%, #1A0F07 60%, #0D0806 100%)',
    overflow: 'hidden',
  };

  return (
    <div style={heroStyle}>
      {/* Overlay for legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: SITE_CONFIG.heroImage
          ? 'linear-gradient(100deg, rgba(10,7,5,0.82) 0%, rgba(10,7,5,0.50) 44%, rgba(10,7,5,0.14) 76%, transparent 100%)'
          : 'none',
        pointerEvents: 'none',
      }} />

      {/* Hero copy */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 640 }}>
          <h1 style={{
            fontSize: 'clamp(28px, 5.2vw, 60px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            marginBottom: 20,
            textShadow: '0 2px 24px rgba(0,0,0,0.5)',
          }}>
            Fresh halal meat, cut this morning in Tarneit — at your door in 60 minutes.
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 'clamp(15px, 1.6vw, 17px)',
            lineHeight: 1.65,
            maxWidth: 500,
            marginBottom: 32,
            textShadow: '0 1px 8px rgba(0,0,0,0.4)',
          }}>
            Beef, lamb, goat, chicken, fish and our marinated favourites. Delivering 7 days
            to Tarneit, Truganina, Hoppers Crossing, Werribee &amp; Point Cook.
            Free delivery over $100.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link
              to="/collections/all"
              className="btn-red"
              style={{ padding: '15px 32px', fontSize: 15, letterSpacing: 0.3 }}
            >
              Order now
            </Link>
            <a
              href={generalEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '15px 28px',
                background: 'rgba(255,255,255,0.12)',
                border: '1.5px solid rgba(255,255,255,0.35)',
                borderRadius: 'var(--r-pill)',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                backdropFilter: 'blur(4px)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
            >
              <WhatsAppIcon />
              WhatsApp the butcher
            </a>
          </div>
        </div>
      </div>

      {/* Proof strip */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        background: 'rgba(0,0,0,0.45)',
        backdropFilter: 'blur(4px)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}>
        <div className="container scrollbar-none" style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          padding: '12px 16px',
          alignItems: 'center',
        }}>
          {proofItems.map((item, i) => (
            item.link ? (
              item.external ? (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: 12,
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                    flexShrink: 0,
                  }}
                >
                  ✓ {item.text}
                </a>
              ) : (
                <Link
                  key={i}
                  to={item.link}
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: 12,
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                    flexShrink: 0,
                  }}
                >
                  ✓ {item.text}
                </Link>
              )
            ) : (
              <span
                key={i}
                style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12, fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                ✓ {item.text}
              </span>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
