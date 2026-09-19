import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface Props {
  product: Product;
  compact?: boolean;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < Math.floor(rating) ? '#f59e0b' : (i < rating ? '#f59e0b' : '#DCD1C4'), fontSize: 12 }}>★</span>
      ))}
    </div>
  );
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
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="55" rx="38" ry="8" fill="rgba(0,0,0,.08)"/>
        <ellipse cx="50" cy="50" rx="36" ry="36" fill="white" stroke="#E8DFD4" strokeWidth="2"/>
        <ellipse cx="50" cy="42" rx="24" ry="20" fill="#fca5a5" stroke="#f87171" strokeWidth="1.5"/>
        <path d="M32 38 Q40 28 50 35 Q60 28 68 38 Q68 52 50 56 Q32 52 32 38Z" fill="#f87171" opacity=".7"/>
        <circle cx="35" cy="36" r="3" fill="#F08A5D" opacity=".5"/>
        <circle cx="55" cy="32" r="2" fill="#F08A5D" opacity=".5"/>
        <circle cx="65" cy="40" r="2.5" fill="#F08A5D" opacity=".5"/>
        {/* Garnish */}
        <ellipse cx="72" cy="55" rx="5" ry="3" fill="#86efac"/>
        <ellipse cx="28" cy="55" rx="5" ry="3" fill="#fde68a"/>
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
    <div className="product-card" style={{ minWidth: compact ? 200 : 240 }}>
      {/* Image */}
      <div className="product-card-img" style={{ height: compact ? 160 : 200 }}>
        <img
          src={product.image}
          alt={product.name}
          onError={e => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextSibling as HTMLElement)?.removeAttribute('style'); }}
        />
        <div style={{ display: 'none', width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
          <ProductPlaceholder name={product.name} />
        </div>

        {product.badge && (
          <div className="badge-discount" style={{ fontSize: 9 }}>{product.badge}</div>
        )}
        {!product.inStock && <div className="badge-sold-out">SOLD OUT</div>}

        {/* TFM logo watermark */}
        <div style={{
          position: 'absolute', bottom: 8, right: 8,
          width: 28, height: 28, opacity: .6,
        }}>
          <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="38" rx="28" ry="26" fill="none" stroke="#E2673A" strokeWidth="5"/>
            <path d="M32 22 Q18 8 14 18 Q18 28 32 30" fill="none" stroke="#E2673A" strokeWidth="5" strokeLinecap="round"/>
            <path d="M88 22 Q102 8 106 18 Q102 28 88 30" fill="none" stroke="#E2673A" strokeWidth="5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: compact ? '10px 12px' : '14px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <h3 style={{ fontSize: compact ? 12 : 13, fontWeight: 600, color: '#1B1714', lineHeight: 1.4, flex: 1 }}>
          <Link to={`/products/${product.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {product.name}
          </Link>
        </h3>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Stars rating={product.rating} />
          <span style={{ fontSize: 11, color: '#7C7268' }}>({product.reviewCount})</span>
        </div>

        {/* Price or Enquire */}
        {product.enquireOnly ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, background: '#FBF0E9', color: 'var(--crimson)', fontWeight: 700, padding: '3px 10px', borderRadius: 20, border: '1px solid #F2D5C4' }}>
              Price on Enquiry
            </span>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#7C7268', fontWeight: 500 }}>FROM</span>
            <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--crimson)' }}>$ {product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span style={{ fontSize: 12, color: '#8A8074', textDecoration: 'line-through' }}>
                $ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        )}

        {/* Quick Add / Enquire */}
        <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
          {product.enquireOnly ? (
            <a
              href="tel:0403153872"
              className="btn-red"
              style={{ flex: 1, fontSize: 12, padding: '8px 12px', border: 'none', cursor: 'pointer', textDecoration: 'none', textAlign: 'center' }}
            >
              Enquire
            </a>
          ) : (
            <button
              onClick={handleAddToCart}
              className="btn-red"
              style={{ flex: 1, fontSize: 12, padding: '8px 12px', border: 'none', cursor: 'pointer' }}
            >
              Add to Cart
            </button>
          )}
          <Link
            to={`/products/${product.slug}`}
            style={{
              fontSize: 12,
              padding: '8px 10px',
              border: '1px solid #DCD1C4',
              borderRadius: 6,
              color: '#4A423B',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
