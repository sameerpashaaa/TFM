import { SITE_CONFIG } from '../../config/siteConfig';

// Static single-line utility bar replacing the old marquee animation.
// Displays delivery zone list and phone number.
// Motion reduced to zero — no animation, no scroll loop.
export default function AnnouncementBar() {
  const zones = SITE_CONFIG.deliveryZones.join(' · ');
  return (
    <div
      style={{
        background: 'var(--accent-deep)',
        color: '#fff',
        height: 34,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <p
        style={{
          fontSize: 12,
          fontWeight: 500,
          margin: 0,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          padding: '0 16px',
        }}
      >
        Free delivery over ${SITE_CONFIG.deliveryFreeOver} · Delivering to: {zones} ·{' '}
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 }}
        >
          {SITE_CONFIG.phoneDisplay}
        </a>
      </p>
    </div>
  );
}
