# DATA_NEEDED.md — Owner Input Required

All items below are missing from the codebase and must be supplied before the site can display them honestly.
**Do not add placeholder/fake values** — each field is hidden in the UI until real data is provided.

## Priority: Blockers (affects live accuracy now)

| Field | Why Needed | Where It Renders | Status |
|---|---|---|---|
| **Business hours** | FAQ says 8am–8pm, footer said 8am–10pm — contradiction | Footer, FAQ, delivery page | ❌ Needed |
| **Phone number confirmation** | `0403153872` used in code; was `400 000 000` in footer. Confirm this is real. | Header CTAs, footer, product cards, WhatsApp links | ❌ Confirm |
| **Email confirmation** | `contactus@tarneitfreshmeat.com` in code — confirm it's active | Footer, contact page | ❌ Confirm |
| **Street address** | Only "Tarneit VIC 3029" shown until confirmed | Footer, contact page, JSON-LD | ❌ Needed |
| **ABN** | Required for GST invoicing | Footer (hidden until set) | ❌ Needed |

## Reviews & Social Proof

| Field | Why Needed | Where It Renders | Status |
|---|---|---|---|
| **Google Reviews URL** | Public listing URL so "See our reviews on Google" button works | Reviews page | ❌ Needed |
| **Google Reviews rating** | Only show if verified from Google Business | Reviews page summary (hidden until set) | ❌ Needed |
| **Google Reviews count** | Same as above | Reviews page summary | ❌ Needed |

## Halal Certification

| Field | Why Needed | Where It Renders | Status |
|---|---|---|---|
| **Certifier name** | Cannot claim certification without naming the certifier | Hero eyebrow, FAQ, product descriptions, JSON-LD | ❌ Needed |
| **Certificate file/URL** | Supports the claim | About page, FAQ | ❌ Needed |

## Pricing (164 SKUs)

All products currently show "Ask price on WhatsApp". To show actual prices, add each to `src/data/pricing.ts`:

| Slug example | Price (AUD/kg) | Unit | Weights offered | Status |
|---|---|---|---|---|
| `lamb-chops` | ? | kg | [0.5, 1, 2] | ❌ Needed |
| `whole-chicken` | ? | kg | — | ❌ Needed |
| `beef-mince` | ? | kg | [0.5, 1, 2] | ❌ Needed |
| *(all 164 slugs)* | ? | ? | ? | ❌ Needed |

> Full slug list is in `src/data/products.ts`. Export to CSV on request.

## Best Sellers

| Field | Why Needed | Where It Renders | Status |
|---|---|---|---|
| **4–8 best-selling product slugs** | Section is hidden until ≥4 real slugs provided | Homepage Best Sellers carousel | ❌ Needed |

## Bundle / Weekly Special

| Field | Why Needed | Where It Renders | Status |
|---|---|---|---|
| **Bundle product details** | Cannot show "Save X%" without real compare-at math + end date | Homepage bundle banner (currently hidden) | ❌ Needed |
| **Bundle product photo** | Owned photo, not stock/AI | Bundle banner background | ❌ Needed |

## Photography

| Asset | Dimensions | Where Used | Status |
|---|---|---|---|
| `hero.jpg` — shopfront or counter | ≥2400px wide | Hero background | ❌ Needed |
| `butcher.jpg` — portrait | ≥800×800px | About page | ❌ Needed |
| `cat-beef.jpg` | ≥800×600px | Category card | ❌ Needed |
| `cat-lamb.jpg` | ≥800×600px | Category card | ❌ Needed |
| `cat-chicken.jpg` | ≥800×600px | Category card | ❌ Needed |
| `cat-goat.jpg` | ≥800×600px | Category card | ❌ Needed |
| `cat-marinated.jpg` | ≥800×600px | Category card | ❌ Needed |
| 8 product hero shots | ≥800×600px | Product pages | ❌ Needed |
| Van / delivery photo | ≥1200px | About / delivery page | ❌ Needed |
| Certificate scan | — | About / FAQ | ❌ Needed |

## Social Media

| Platform | URL | Status |
|---|---|---|
| Facebook | ? | ❌ Needed |
| Instagram | ? | ❌ Needed |
| TikTok | ? | ❌ Needed |
| LinkedIn | ? | ❌ Needed |

## Real Customer Testimonials

| Field | Why Needed | Status |
|---|---|---|
| 4–6 real verified customer testimonials (name, suburb, quote, optional photo) | Testimonials section is hidden until real ones are provided | ❌ Needed |

---

*Last updated: September 2026. To fill in a field, update `src/config/siteConfig.ts` or the relevant data file, then redeploy.*
