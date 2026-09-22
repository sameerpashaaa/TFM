import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DataService } from '../../services/api';
import type { Product } from '../../data/products';
import ProductCard from '../shared/ProductCard';
import { BEST_SELLER_SLUGS } from '../../data/homepage';

// Section is hidden entirely when fewer than 4 slugs are configured.
// This prevents the section ever appearing empty or half-populated.
const MIN_ITEMS = 4;

export default function BestSellers() {
  const ref = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrollState, setScrollState] = useState({ canScrollLeft: false, canScrollRight: true });

  useEffect(() => {
    if (BEST_SELLER_SLUGS.length < MIN_ITEMS) {
      setLoading(false);
      return;
    }

    DataService.getProducts().then(res => {
      // Filter to only the curated slugs, in the declared order
      const curated = BEST_SELLER_SLUGS
        .map(slug => res.data.find(p => p.slug === slug))
        .filter((p): p is Product => p != null);
      setItems(curated);
      setLoading(false);
    });
  }, []);

  const handleScroll = () => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setScrollState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: Math.ceil(scrollLeft + clientWidth) < scrollWidth,
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [items]);

  const scroll = (dir: 'left' | 'right') => {
    if (ref.current) ref.current.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
  };

  // Hide section entirely when not enough curated slugs or no matching products
  if (!loading && items.length < MIN_ITEMS) return null;

  return (
    <section style={{ padding: '64px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div className="section-label" style={{ color: 'var(--accent-deep)', textAlign: 'left' }}>POPULAR</div>
            <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>Our Most Popular Cuts</h2>
          </div>
          {items.length > 4 && (
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                className="carousel-btn"
                onClick={() => scroll('left')}
                disabled={!scrollState.canScrollLeft}
                aria-label="Previous"
                style={{ opacity: scrollState.canScrollLeft ? 1 : 0.4, cursor: scrollState.canScrollLeft ? 'pointer' : 'default' }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="carousel-btn"
                onClick={() => scroll('right')}
                disabled={!scrollState.canScrollRight}
                aria-label="Next"
                style={{ opacity: scrollState.canScrollRight ? 1 : 0.4, cursor: scrollState.canScrollRight ? 'pointer' : 'default' }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {loading ? (
          <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
            Loading popular cuts...
          </div>
        ) : (
          <div
            ref={ref}
            onScroll={handleScroll}
            style={{
              display: 'flex',
              gap: 16,
              overflowX: 'auto',
              paddingBottom: 16,
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
            className="scrollbar-none"
          >
            {items.map(p => (
              <div key={p.id} className="carousel-card-wrap">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
