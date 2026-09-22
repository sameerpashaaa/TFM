import { SITE_CONFIG } from '../config/siteConfig';
import { waLink } from '../lib/whatsapp';

export default function ReviewsPage() {
  const { googleReviews } = SITE_CONFIG;

  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <div className="section-label">CUSTOMER REVIEWS</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>
          What Our Customers Say
        </h1>

        {googleReviews.url ? (
          <>
            <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 32, fontSize: 15, lineHeight: 1.6 }}>
              {googleReviews.rating != null && googleReviews.count != null
                ? `${googleReviews.rating}★ average from ${googleReviews.count} verified Google reviews.`
                : 'Our customers leave honest reviews on Google.'}
            </p>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <a
                href={googleReviews.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
                style={{ display: 'inline-block', padding: '14px 32px', fontSize: 14, textDecoration: 'none' }}
              >
                See our reviews on Google
              </a>
            </div>
          </>
        ) : (
          <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 40, fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 40px' }}>
            We're collecting verified reviews. In the meantime, you can ask us anything directly —
            our customers' feedback means everything to us.
          </p>
        )}

        {/* Leave a review / Contact CTA */}
        <div style={{
          background: '#fff',
          borderRadius: 16,
          padding: '32px',
          border: '1px solid #E8DFD4',
          textAlign: 'center',
          marginTop: 24,
        }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Had an order with us?</h2>
          <p style={{ color: '#7C7268', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
            We'd love to hear from you. Send us a message on WhatsApp — your feedback helps us
            improve and helps other local families find fresh, honest meat.
          </p>
          <a
            href={waLink('Hi Tarneit Fresh Meat! I\'d like to share feedback about my recent order.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
            style={{ display: 'inline-block', padding: '13px 28px', fontSize: 14, textDecoration: 'none' }}
          >
            Share feedback on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
