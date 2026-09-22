import { SITE_CONFIG } from '../config/siteConfig';

export interface OrderItem {
  name: string;
  qty: number;
  weight?: string;
  price?: number | null;
  unit?: string;
}

/**
 * Base WhatsApp link builder.
 * All WhatsApp links in the codebase must go through this function —
 * never hardcode a wa.me number or phone anywhere else.
 */
export function waLink(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp with a pre-filled product price enquiry message.
 */
export function productEnquiryLink(productName: string): string {
  return waLink(
    `Hi Tarneit Fresh Meat! I'd like to know the price and availability for: ${productName}`
  );
}

/**
 * Opens WhatsApp with a pre-filled weekly specials opt-in.
 */
export function weeklySpecialsLink(): string {
  return waLink(`Hi TFM! Please add me to the weekly specials list.`);
}

/**
 * Opens WhatsApp with a pre-filled general order / enquiry message.
 */
export function generalEnquiryLink(): string {
  return waLink(`Hi Tarneit Fresh Meat! I'd like to place an order.`);
}

/**
 * Builds a structured WhatsApp order message from an array of order items.
 *
 * If any item is unpriced, the subtotal line reads "Subtotal: to be confirmed".
 */
export function orderMessage(
  items: OrderItem[],
  meta: {
    suburb?: string;
    name?: string;
    notes?: string;
    delivery: 'delivery' | 'pickup';
  }
): string {
  const lines: string[] = ['*TFM Order Request*', ''];

  items.forEach((item, i) => {
    const weightPart = item.weight ? ` — ${item.weight}` : '';
    const pricePart =
      item.price != null
        ? ` @ $${item.price.toFixed(2)}/${item.unit ?? 'kg'}`
        : '';
    lines.push(`${i + 1}. ${item.qty}x ${item.name}${weightPart}${pricePart}`);
  });

  lines.push('');

  const allPriced = items.every(
    (item) => item.price != null && item.price > 0
  );

  if (allPriced) {
    const subtotal = items.reduce(
      (sum, item) => sum + (item.price ?? 0) * item.qty,
      0
    );
    lines.push(`Subtotal: $${subtotal.toFixed(2)}`);
  } else {
    lines.push('Subtotal: to be confirmed');
  }

  lines.push(
    `Delivery: ${meta.delivery === 'delivery' ? `Yes${meta.suburb ? ` (${meta.suburb})` : ''}` : 'Pickup'}`
  );

  if (meta.name) lines.push(`Name: ${meta.name}`);
  if (meta.notes) lines.push(`Notes: ${meta.notes}`);

  return lines.join('\n');
}

/** Convenience: tel: link from the config */
export function telLink(): string {
  return `tel:${SITE_CONFIG.phoneRaw}`;
}
