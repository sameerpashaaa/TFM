// ─── Central Site Configuration ───────────────────────────────────────────────
//
// This is the single source of truth for all business facts.
// No phone numbers, emails, hours, or addresses should appear anywhere
// else in the codebase. All components must import from here.
//
// Fields marked null are DATA_NEEDED — see DATA_NEEDED.md.
// The UI that renders a null field must be hidden, not faked.
//
export const SITE_CONFIG = {
  businessName: 'Tarneit Fresh Meat',

  // ── Contact ──────────────────────────────────────────────────────────────
  // CONFIRM with owner: 0403153872 appears in existing product card code.
  // Footer previously showed +61 400 000 000 (fake — now removed).
  phoneDisplay: '0403 153 872',
  phoneRaw: '+61403153872',
  whatsappNumber: '61403153872', // wa.me format — no leading +

  // CONFIRM with owner whether contactus@tarneitfreshmeat.com is active.
  email: 'contactus@tarneitfreshmeat.com' as string | null,

  // ── Address ──────────────────────────────────────────────────────────────
  address: {
    street: null as string | null, // DATA_NEEDED
    suburb: 'Tarneit',
    state: 'VIC',
    postcode: '3029',
    country: 'Australia',
  },

  abn: null as string | null, // DATA_NEEDED

  // ── Hours ────────────────────────────────────────────────────────────────
  // Contradictions found: footer said 8am–10pm, FAQ said 8am–8pm.
  // Set null until owner confirms. The UI will hide the hours row.
  hours: null as string | null, // DATA_NEEDED: e.g. 'Mon–Sun: 8:00 AM – 8:00 PM'

  // ── Delivery ─────────────────────────────────────────────────────────────
  deliveryZones: [
    'Tarneit',
    'Truganina',
    'Hoppers Crossing',
    'Werribee',
    'Point Cook',
  ],
  deliveryZonePostcodes: {
    3029: 'Tarneit / Truganina',
    3030: 'Point Cook / Werribee',
    3028: 'Hoppers Crossing',
  } as Record<number, string>,
  deliveryFreeOver: 100,   // AUD
  deliveryFeeUnder: 12,    // AUD
  deliveryPromiseMinutes: 60,
  pickupAvailable: true,

  // ── Halal ────────────────────────────────────────────────────────────────
  halalCertifier: null as string | null, // DATA_NEEDED — do not display until set

  // ── Google Reviews ───────────────────────────────────────────────────────
  // Do NOT hardcode a rating here. Only show verified data.
  googleReviews: {
    url: null as string | null,  // DATA_NEEDED — Google Maps/Business listing URL
    rating: null as number | null,
    count: null as number | null,
  },

  // ── Socials ──────────────────────────────────────────────────────────────
  // null → hide the icon entirely (never ship href="#")
  socials: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
    tiktok: null as string | null,
  },

  // ── Hero image ───────────────────────────────────────────────────────────
  // null → use colour-block fallback. Drop in a URL once owner supplies photo.
  heroImage: null as string | null, // DATA_NEEDED: e.g. '/images/hero.jpg'
} as const;

export type SiteConfig = typeof SITE_CONFIG;
