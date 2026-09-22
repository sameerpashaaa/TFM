# DISCOVERY.md — Source File Map

Generated from codebase audit, September 2026.
Maps every audit search string to its real source file path.

## Build & Deploy Commands
- **Build:** `npm run build` → `tsc -b && vite build`
- **Deploy:** `wrangler pages deploy dist` (from `wrangler.jsonc`)
- **Dev server:** `npm run dev`

## Search String → File Map

| Audit Search String | File | Line(s) | Status |
|---|---|---|---|
| `SALE ENDS BEFORE IT GETS COLD` / fake eyebrow | `src/components/home/HeroBanner.tsx` | L405 | Fixed in T1.6 |
| `Fresh cuts delivered` (old hero H1) | `src/components/home/HeroBanner.tsx` | L420 | Fixed in T1.6 |
| Frame scrub / `ezgif-frame` / `frameIndex` / `scrollY on canvas` | `src/components/home/HeroBanner.tsx` | L1–331 | Fixed in T1.6 |
| `reviewCount > 30` Best Sellers gate | `src/components/home/BestSellers.tsx` | L15 | Fixed in T1.1 |
| `Fatima Al-Lawati` / testimonials array | `src/components/home/Testimonials.tsx` | L7–10 | Fixed in T1.1 |
| `4.8 average from 500+ orders` | `src/components/home/Testimonials.tsx` | L32 | Fixed in T1.1 |
| Fake review rating `4.9` / `482 reviews` | `src/pages/ReviewsPage.tsx` | L23,27 | Fixed in T1.1 |
| `Verified Buyer` / `Verified Purchase` | `src/pages/ReviewsPage.tsx` | L71 | Fixed in T1.1 |
| `Weekend BBQ Bundle` / `Shop the Bundle` | `src/components/home/OffersBundle.tsx` | L15,17 | Fixed in T1.5 |
| `LIMITED TIME` / `Save 15%` | `src/components/home/OffersBundle.tsx` | L14–15 | Fixed in T1.5 |
| `Box Collection` → `/collections/eggs` bug | `src/components/home/ShopByCategory.tsx` | L40–45 | Fixed in T1.4 |
| `Dry Aged Beef` / `Dry Aged Lamb` cards | `src/components/home/ShopByCategory.tsx` | L57–70 | Fixed in T1.4 |
| `Shop by Origin` / `NZ Spring Lamb` / `Norwegian Salmon` | `src/components/home/ShopByOrigin.tsx` | whole file | Deleted in T1.4 |
| `+61 400 000 000` placeholder phone | `src/components/layout/Footer.tsx` | L51,52 | Fixed in T1.3 |
| `Sign in successful` fake login | `src/components/layout/Header.tsx` | L334 | Fixed in T1.2 |
| `MAKE MONEY WITH TFM` secondary nav | `src/components/layout/Navbar.tsx` | L11 | Fixed in T1.2 |
| `enquireOnly` / `Price on Enquiry` | `src/components/shared/ProductCard.tsx` | L107–108 | Fixed in T1.9 |
| `SKINN OFF` typo | `src/data/products.ts` | Multiple | Fixed in T1.9 |
| `WINGETTS` typo | `src/data/products.ts` | Multiple | Fixed in T1.9 |
| `DRUMMETS` typo | `src/data/products.ts` | Multiple | Fixed in T1.9 |
| Postcode `3020` contradiction | `src/pages/ProductPage.tsx` | Multiple | Fixed in T1.3 |
| Hours contradiction (8am/8pm/10pm) | `src/components/layout/Footer.tsx` L57, `src/pages/FAQsPage.tsx` L11 | — | Fixed in T1.3 |
| `halal meat shop in tarneit` (blog title pipes) | `src/data/blogs.ts` | — | Fixed in T1.9 |
| Fake Google rating on Reviews page | `src/pages/ReviewsPage.tsx` | L23–45 | Fixed in T1.1 |
| `marquee` / infinite scroll animation | `src/components/layout/AnnouncementBar.tsx` | whole file | Fixed in T1.7 |
| `href="#"` dead social links | `src/components/layout/Footer.tsx` | L63,66 | Fixed in T1.3 |
| Newsletter form (`preventDefault` only) | `src/components/layout/Footer.tsx` | L145–180 | Fixed in T1.2 |
| Catch-all `* → HomePage` (no 404) | `src/App.tsx` | L48 | Fixed in T1.3 |

## Data Locations
| Data | File |
|---|---|
| Product data (164 items, slugs, prices, enquireOnly) | `src/data/products.ts` |
| Category / nav hierarchy | `src/data/categories.ts` |
| Testimonials | `src/components/home/Testimonials.tsx` (DELETED) |
| Blog posts | `src/data/blogs.ts` |
| Footer link data | Inline in `src/components/layout/Footer.tsx` |
| Router (catch-all) | `src/App.tsx` L48 |

## Key Decisions Made
1. **WhatsApp-first ordering** — no payment backend, no accounts. Cart exports to WhatsApp message.
2. **Phone:** Using `0403153872` as the real number. Footer `400 000 000` was fake.
3. **Postcode:** 3029 everywhere. `3020` was an error.
4. **Hero:** Static colour-block until owner supplies hero photo (set `SITE_CONFIG.heroImage`).
5. **Best Sellers:** Hidden until `BEST_SELLER_SLUGS` has ≥4 real slugs.
6. **Bundle banner:** Hidden until `WEEKLY_SPECIAL` is set with real data.
7. **Socials:** All null → icon row hidden entirely.
8. **Hours:** Both sources contradict — hidden until owner confirms.
