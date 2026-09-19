import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronRight, Truck, RefreshCw, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { DataService } from '../services/api';
import type { Product } from '../data/products';
import { products } from '../data/products';
import ProductCard from '../components/shared/ProductCard';

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < Math.floor(rating) ? '#f59e0b' : '#DCD1C4', fontSize: 16 }}>★</span>
      ))}
    </div>
  );
}

// SVG thumbnail placeholder
function ThumbPlaceholder({ imgSrc, active }: { imgSrc: string; active: boolean }) {
  return (
    <div style={{
      width: 68, height: 68, borderRadius: 8, background: '#F7F2EB',
      border: `2px solid ${active ? 'var(--crimson)' : '#E8DFD4'}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
      flexShrink: 0,
      overflow: 'hidden',
    }}>
      <img src={imgSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Thumb" />
    </div>
  );
}

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E8DFD4' }}>
      <button onClick={() => setOpen(v => !v)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '16px 0', fontWeight: 600, fontSize: 14, background: 'none', border: 'none', cursor: 'pointer', color: '#1B1714' }}>
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && <div style={{ paddingBottom: 16, fontSize: 14, color: '#7C7268', lineHeight: 1.7 }}>{children}</div>}
    </div>
  );
}

export default function ProductPage() {
  const { slug = '' } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setLoading(true);
    DataService.getProductBySlug(slug).then(res => {
      setProduct(res.data);
      setLoading(false);
      if (res.data) {
        document.title = `${res.data.name} | Tarneit Fresh Meat`;
      }
    });
  }, [slug]);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedRub, setSelectedRub] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [specialRequest, setSpecialRequest] = useState('');

  if (loading) {
    return (
      <div style={{ background: '#F7F2EB', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#7C7268', fontSize: 16 }}>Loading fresh butcher cuts from database...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2>Product not found</h2>
        <Link to="/collections/all-beef" className="btn-red" style={{ marginTop: 16, display: 'inline-flex' }}>Browse Products</Link>
      </div>
    );
  }

  const variant = product.variants?.[selectedVariant];
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 6);

  const galleryImages = [
    product.image,
    '/images/cat-beef.jpg',
    '/images/cat-lamb.jpg',
    '/images/cat-seasoned.jpg',
    '/images/cat-drybeef.jpg',
  ];

  const tabs = ['Understanding Rubs', 'Nutrition Facts', 'Delivery Info'];

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div style={{ background: '#F7F2EB', borderBottom: '1px solid #E8DFD4', padding: '10px 0' }}>
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#7C7268' }}>
            <Link to="/" style={{ color: '#7C7268', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <Link to={`/collections/${product.category}`} style={{ color: '#7C7268', textDecoration: 'none', textTransform: 'capitalize' }}>
              {product.category.replace(/-/g, ' ')}
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: '#1B1714', fontWeight: 500 }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main product section */}
      <div className="container" style={{ paddingTop: 32, paddingBottom: 48 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 40, alignItems: 'start' }}>

          {/* Gallery */}
          <div style={{ display: 'flex', gap: 12 }}>
            {/* Thumbnails */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {galleryImages.map((img, i) => (
                <div key={i} onClick={() => setActiveImage(i)}>
                  <ThumbPlaceholder imgSrc={img} active={activeImage === i} />
                </div>
              ))}
            </div>

            {/* Main image */}
            <div style={{ width: 460, height: 480, borderRadius: 20, background: '#F7F2EB', border: '1px solid #E8DFD4', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {product.badge && (
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: 'var(--crimson)', color: '#fff',
                  fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 4,
                  zIndex: 2,
                }}>SALE</div>
              )}

              <img 
                src={galleryImages[activeImage]} 
                alt={product.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />

              {/* Origin flag */}
              <div style={{ position: 'absolute', bottom: 12, right: 12, fontSize: 28, zIndex: 2 }}>
                {product.origin === 'Australia' ? '🇦🇺' : product.origin === 'New Zealand' ? '🇳🇿' : '🌍'}
              </div>
              {/* TFM watermark */}
              <div style={{ position: 'absolute', top: 12, right: 12, opacity: .35, zIndex: 2 }}>
                <svg width="36" height="30" viewBox="0 0 120 100" fill="none">
                  <ellipse cx="60" cy="38" rx="28" ry="26" fill="none" stroke="#E2673A" strokeWidth="6"/>
                  <path d="M32 22 Q18 8 14 18 Q18 28 32 30" fill="none" stroke="#E2673A" strokeWidth="6" strokeLinecap="round"/>
                  <path d="M88 22 Q102 8 106 18 Q102 28 88 30" fill="none" stroke="#E2673A" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Purchase form */}
          <div style={{ maxWidth: 520 }}>
            <h1 style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 800, lineHeight: 1.3, marginBottom: 12 }}>{product.name}</h1>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Stars rating={product.rating} />
              <span style={{ fontWeight: 700, fontSize: 14 }}>{product.rating}</span>
              <span style={{ color: '#7C7268', fontSize: 13 }}>· {product.reviewCount} reviews</span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
              {product.enquireOnly ? (
                <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--crimson)', background: '#FBF0E9', padding: '6px 16px', borderRadius: 20, border: '1px solid #F2D5C4' }}>
                  Price on Enquiry
                </span>
              ) : (
                <>
                  <span style={{ fontSize: 28, fontWeight: 900, color: 'var(--crimson)' }}>$ {(variant?.price || product.price).toFixed(2)}</span>
                  {product.originalPrice && (
                    <span style={{ fontSize: 16, color: '#8A8074', textDecoration: 'line-through' }}>$ {product.originalPrice.toFixed(2)}</span>
                  )}
                </>
              )}
              {product.inStock && (
                <span style={{ background: '#d1fae5', color: '#065f46', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>IN STOCK</span>
              )}
            </div>
            {product.weight && !product.enquireOnly && <p style={{ fontSize: 13, color: '#7C7268', marginBottom: 16 }}>Price per kg: $ {product.weight}</p>}

            {/* Variants (Weight) */}
            {product.variants && product.variants.length > 1 && (
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Weight</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {product.variants.map((v, i) => (
                    <button key={i} onClick={() => setSelectedVariant(i)}
                      style={{
                        padding: '8px 18px', borderRadius: 6, fontSize: 13, fontWeight: 600,
                        border: '2px solid', cursor: 'pointer',
                        background: selectedVariant === i ? 'var(--crimson)' : '#fff',
                        color: selectedVariant === i ? '#fff' : '#4A423B',
                        borderColor: selectedVariant === i ? 'var(--crimson)' : '#DCD1C4',
                      }}>
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Rubs */}
            {product.rubs && product.rubs.length > 1 && (
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Rubs</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {product.rubs.map((r, i) => (
                    <button key={i} onClick={() => setSelectedRub(i)}
                      style={{
                        padding: '8px 16px', borderRadius: 6, fontSize: 13, fontWeight: 600,
                        border: '2px solid', cursor: 'pointer',
                        background: selectedRub === i ? 'var(--crimson)' : '#fff',
                        color: selectedRub === i ? '#fff' : '#4A423B',
                        borderColor: selectedRub === i ? 'var(--crimson)' : '#DCD1C4',
                      }}>
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Special Request */}
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Special Request</p>
              <textarea
                value={specialRequest}
                onChange={e => setSpecialRequest(e.target.value)}
                placeholder="Any special request for this product"
                rows={3}
                style={{
                  width: '100%', padding: 12, border: '1.5px solid #DCD1C4',
                  borderRadius: 8, fontSize: 13, color: '#4A423B',
                  resize: 'none', outline: 'none',
                  transition: 'border-color .2s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--crimson)'}
                onBlur={e => e.currentTarget.style.borderColor = '#DCD1C4'}
              />
            </div>

            {/* Quantity + Add to Cart / Enquire */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              {product.enquireOnly ? (
                <>
                  <a
                    href="tel:0403153872"
                    className="btn-red"
                    style={{ flex: 1, padding: '14px 20px', fontSize: 15, letterSpacing: .5, textDecoration: 'none', textAlign: 'center', fontWeight: 700 }}
                  >
                    📞 CALL TO ENQUIRE
                  </a>
                  <a
                    href="mailto:momin.shahad79@gmail.com"
                    style={{
                      padding: '14px 20px', border: '1.5px solid var(--crimson)', borderRadius: 8,
                      color: 'var(--crimson)', fontWeight: 700, fontSize: 14, textDecoration: 'none',
                      display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap'
                    }}
                  >
                    ✉ Email Us
                  </a>
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #DCD1C4', borderRadius: 8, overflow: 'hidden' }}>
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      style={{ width: 40, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: '#4A423B' }}>
                      <Minus size={14} />
                    </button>
                    <span style={{ width: 48, textAlign: 'center', fontWeight: 700, fontSize: 15 }}>{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)}
                      style={{ width: 40, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: '#4A423B' }}>
                      <Plus size={14} />
                    </button>
                  </div>
                  <button className="btn-red" style={{ flex: 1, padding: '14px 20px', fontSize: 14, letterSpacing: .5 }}>
                    ADD TO CART
                  </button>
                </>
              )}
            </div>

            {/* Pickup info */}
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '12px 16px', marginBottom: 20, fontSize: 13 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }}/>
                <strong>Pickup available at Tarneit Fresh Meats</strong>
              </div>
              <p style={{ color: '#16a34a', paddingLeft: 14 }}>Shop 6, 747 Tarneit Rd, Tarneit VIC 3020</p>
              <a href="tel:0403153872" style={{ color: 'var(--crimson)', fontSize: 12, fontWeight: 600, paddingLeft: 14, display: 'block', marginTop: 4 }}>Call 0403 153 872 to confirm availability →</a>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
              {[
                { icon: <Truck size={18} color="#E2673A" />, label: 'Express Delivery', sub: '1 Hour' },
                { icon: <RefreshCw size={18} color="#E2673A" />, label: 'Free Returns', sub: '100% Guaranteed' },
                { icon: <ShieldCheck size={18} color="#E2673A" />, label: '100% Halal', sub: 'Certified' },
              ].map((b, i) => (
                <div key={i} style={{ background: '#FAF6F1', border: '1px solid #F2EBE2', borderRadius: 8, padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>{b.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>{b.label}</div>
                  <div style={{ fontSize: 10, color: '#8A8074' }}>{b.sub}</div>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <AccordionItem title="🔄 Free Returns & Replacements">
              <p>Not satisfied? We offer 100% free returns and replacements on all orders. Just contact us within 24 hours of delivery.</p>
            </AccordionItem>
            <AccordionItem title="📞 Need Help? Contact Us">
              <p>Call: 0403 153 872 | Email: momin.shahad79@gmail.com | Shop 6, 747 Tarneit Rd, Tarneit VIC 3020</p>
            </AccordionItem>
          </div>
        </div>

        {/* Product Tabs */}
        <div style={{ marginTop: 48, borderTop: '1px solid #E8DFD4', paddingTop: 36 }}>
          <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid #E8DFD4', marginBottom: 24 }}>
            {tabs.map((t, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                style={{
                  padding: '12px 24px', fontWeight: 600, fontSize: 14, border: 'none',
                  background: 'none', cursor: 'pointer', color: activeTab === i ? 'var(--crimson)' : '#7C7268',
                  borderBottom: `2px solid ${activeTab === i ? 'var(--crimson)' : 'transparent'}`,
                  transition: 'all .2s',
                }}>
                {t}
              </button>
            ))}
          </div>
          <div style={{ fontSize: 14, color: '#4A423B', lineHeight: 1.8, maxWidth: 700 }}>
            {activeTab === 0 && <p>Our premium rubs are blended by our in-house master butchers. The TFM Rub features a signature mix of smoked paprika, garlic, and sea salt. The Coffee Rub adds deep earthy notes perfect for steaks. Lamb Rub is crafted with rosemary, cumin, and mint to complement lamb's natural sweetness. No Rub delivers the pure natural flavour of the meat.</p>}
            {activeTab === 1 && (
              <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: 400 }}>
                <tbody>
                  {[['Calories', '250 kcal'], ['Protein', '26g'], ['Total Fat', '16g'], ['Saturated Fat', '7g'], ['Carbohydrates', '0g'], ['Sodium', '65mg']].map(([k, v]) => (
                    <tr key={k} style={{ borderBottom: '1px solid #F2EBE2' }}>
                      <td style={{ padding: '8px 0', color: '#7C7268' }}>{k}</td>
                      <td style={{ padding: '8px 0', fontWeight: 600, textAlign: 'right' }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {activeTab === 2 && <p>We deliver across Melbourne within 1 hour. Delivery is available 7 days a week. Standard delivery: FREE on all orders. Whole carcass orders include FREE 2x AUS Grass-Fed Burger Patties. All meat is packed in insulated thermal packaging to maintain freshness.</p>}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: 48, borderTop: '1px solid #E8DFD4', paddingTop: 36 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20 }}>You Might Also Like</h2>
            <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8 }} className="scrollbar-none">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .product-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
