// ─── Pricing Map ──────────────────────────────────────────────────────────────
//
// Add real prices here keyed by product slug.
// Until a price is added for a slug, the product will show the
// "Ask price on WhatsApp" button instead of a price + "Add to Order" button.
//
// Price is in AUD per the unit shown on the card.
// weights (optional) are selectable kg options shown on the product page.
//
export const PRICING: Record<
  string,
  { price: number; unit: 'kg' | 'each' | 'pack'; weights?: number[] }
> = {
  // ── Example — uncomment and fill when owner provides prices ──────────────
  // 'lamb-chops': { price: 24.50, unit: 'kg', weights: [0.5, 1, 2] },
  // 'whole-chicken': { price: 9.00, unit: 'kg' },
};

export interface PricingResult {
  price: number | null;
  unit: 'kg' | 'each' | 'pack';
  weights?: number[];
  enquireOnly: boolean;
}

/**
 * Returns pricing data for a product slug.
 * If no price is configured, returns enquireOnly: true.
 */
export function getPricing(slug: string): PricingResult {
  const p = PRICING[slug];
  if (p && p.price != null) {
    return { ...p, enquireOnly: false };
  }
  return { price: null, unit: 'kg', weights: undefined, enquireOnly: true };
}
