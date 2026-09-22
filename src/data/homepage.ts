// ─── Homepage Curation Config ─────────────────────────────────────────────────
//
// Controls which products appear as "Best Sellers" and whether the bundle
// banner is shown. Both are null/empty by default — UI hides when empty.
//
// BEST_SELLER_SLUGS: add ≥4 real product slugs from products.ts to enable
// the Best Sellers section. Section is hidden when fewer than 4 slugs are set.
//
// WEEKLY_SPECIAL: set to an object with a real product slug, real compare-at
// price math, and an end date to show the bundle banner. null = hide entirely.
// The "Save X%" copy only renders if the math actually matches.
//

export const BEST_SELLER_SLUGS: string[] = [
  // DATA_NEEDED: add 4–8 real slugs from products.ts
  // e.g. 'lamb-chops', 'whole-chicken', 'beef-mince', 'goat-leg'
];

export const WEEKLY_SPECIAL: {
  slug: string;
  compareAt: number;
  price: number;
  endsOn: string; // ISO date string, e.g. '2026-12-31'
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
} | null = null;
// DATA_NEEDED: owner must supply a real bundle with confirmed pricing
// before this is set. Example:
// {
//   slug: 'bbq-bundle',
//   compareAt: 120,
//   price: 99,
//   endsOn: '2026-10-31',
//   headline: 'Weekend BBQ Bundle',
//   subtext: 'Includes lamb chops, marinated mishkak, and chicken wings.',
//   ctaText: 'Order this bundle on WhatsApp',
//   ctaLink: '', // waLink() called in the component
//   image: '/images/bundle.jpg',
// }
