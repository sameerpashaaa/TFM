import { Link } from 'react-router-dom';

interface OffersBundleProps {
  image?: string;
  eyebrow?: string;
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function OffersBundle({
  image = '/images/hero-value-boxes.jpg',
  eyebrow = 'LIMITED TIME',
  headline = 'Weekend BBQ Bundle — Save 15%',
  subtext = 'Get everything you need for the perfect weekend grill. Includes Wagyu burgers, marinated mishkak, and premium lamb chops.',
  ctaText = 'Shop the Bundle',
  ctaLink = '/collections/box-collection'
}: OffersBundleProps) {
  return (
    <section style={{ padding: '24px 0 64px' }}>
      <div className="container">
        <div style={{
          position: 'relative',
          borderRadius: 'var(--r-card)',
          overflow: 'hidden',
          backgroundColor: '#111',
          minHeight: 400,
          display: 'flex',
          alignItems: 'center',
        }}>
          {/* Background Image */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0
          }}>
            <img 
              src={image} 
              alt="Special Offer" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
            />
            {/* Gradient Overlay for text legibility */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(27,23,20,0.9) 0%, rgba(27,23,20,0.6) 50%, rgba(27,23,20,0) 100%)'
            }} />
          </div>

          {/* Content — responsive via .offers-content-box in index.css */}
          <div className="offers-content-box">
            <div style={{
              display: 'inline-block',
              background: 'var(--accent-premium)',
              color: '#fff',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              padding: '6px 12px',
              borderRadius: 'var(--r-pill)',
              marginBottom: 20
            }}>
              {eyebrow}
            </div>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(26px, 5vw, 48px)',
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: 16,
              color: '#fff'
            }}>
              {headline}
            </h2>

            <p style={{
              fontSize: 16,
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: 32,
              maxWidth: 480
            }}>
              {subtext}
            </p>

            <Link to={ctaLink} className="btn-red" style={{ padding: '14px 32px', fontSize: 14 }}>
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
