import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { productEnquiryLink } from '../../lib/whatsapp';

interface Props {
  product: Product;
  compact?: boolean;
}

// Placeholder image using SVG for products without real images
function ProductPlaceholder({ name }: { name: string }) {
  // Warm placeholder tints — cream, blush, sand, clay.
  const colors = ['#F6EDE4', '#FBEDE5', '#F1EADE', '#F7E7DC'];
  const color = colors[name.length % colors.length];
  return (
    <div style={{
      width: '100%', height: '100%',
      background: color,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 12, padding: 16,
    }}>
      {/* Meat plate SVG */}
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="50" cy="55" rx="38" ry="8" fill="rgba(0,0,0,.08)" />
        <ellipse cx="50" cy="50" rx="36" ry="36" fill="white" stroke="#E8DFD4" strokeWidth="2" />
        <ellipse cx="50" cy="42" rx="24" ry="20" fill="#fca5a5" stroke="#f87171" strokeWidth="1.5" />
        <path d="M32 38 Q40 28 50 35 Q60 28 68 38 Q68 52 50 56 Q32 52 32 38Z" fill="#f87171" opacity=".7" />
        <circle cx="35" cy="36" r="3" fill="#F08A5D" opacity=".5" />
        <circle cx="55" cy="32" r="2" fill="#F08A5D" opacity=".5" />
        <circle cx="65" cy="40" r="2.5" fill="#F08A5D" opacity=".5" />
        <ellipse cx="72" cy="55" rx="5" ry="3" fill="#86efac" />
        <ellipse cx="28" cy="55" rx="5" ry="3" fill="#fde68a" />
      </svg>
      <span style={{ fontSize: 11, color: '#8A8074', textAlign: 'center', lineHeight: 1.3 }}>{name.split(' ').slice(0, 3).join(' ')}</span>
    </div>
  );
}

export default function ProductCard({ product, compact = false }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      weight: product.weight || product.variants?.[0]?.weight || '1 kg',
      image: product.image,
    });
  };

  return (
    <div className="product-card" style={{ width: '100%' }}>
      {/* Image (4:3) */}
      <div className="product-card-img" style={{ aspectRatio: '4/3', height: 'auto', margin: 0, borderRadius: 'var(--r-card) var(--r-card) 0 0' }}>
        <img
          src={product.image}
          alt={product.name}
          onError={e => {
            e.currentTarget.style.display = 'none';
            (e.currentTarget.nextSibling as HTMLElement)?.removeAttribute('style');
          }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ display: 'none', width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
          <ProductPlaceholder name={product.name} />
        </div>

        {/* Only show non-ENQUIRE/SALE badges */}
        {product.badge && product.badge !== 'ENQUIRE' && product.badge !== 'SALE' && (
          <div className="badge-discount" style={{ fontSize: 9, background: 'var(--accent-deep)' }}>{product.badge}</div>
        )}
        {!product.inStock && <div className="badge-sold-out">SOLD OUT</div>}
      </div>

      {/* Info */}
      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{ fontSize: compact ? 13 : 15, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4, flex: 1 }}>
          <Link to={`/products/${product.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {product.name}
          </Link>
        </h3>

        {/* Price — only shown when product has a real price */}
        {!product.enquireOnly && product.price > 0 && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--crimson)' }}>
              ${product.price.toFixed(2)}
            </span>
            <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 500, paddingBottom: 2 }}>
              /kg
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'line-through', paddingBottom: 2, marginLeft: 4 }}>
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          {product.enquireOnly || product.price === 0 ? (
            <a
              href={productEnquiryLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
              style={{ flex: 1, fontSize: 12, padding: '10px', textDecoration: 'none', textAlign: 'center' }}
            >
              Ask price on WhatsApp
            </a>
          ) : (
            <button
              onClick={handleAddToCart}
              className="btn-red"
              style={{ flex: 1, fontSize: 12, padding: '10px' }}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
