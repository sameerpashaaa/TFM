import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DataService } from '../../services/api';
import type { Product } from '../../data/products';
import ProductCard from '../shared/ProductCard';

export default function BestSellers() {
  const ref = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrollState, setScrollState] = useState({ canScrollLeft: false, canScrollRight: true });

  useEffect(() => {
    DataService.getProducts().then(res => {
      setItems(res.data.filter(p => p.reviewCount > 30).slice(0, 8));
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

  return (
    <section style={{ padding: '64px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div className="section-label" style={{ color: 'var(--accent-deep)', textAlign: 'left' }}>BEST SELLERS</div>
            <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>Our Most Popular Cuts</h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button 
              className="carousel-btn" 
              onClick={() => scroll('left')}
              disabled={!scrollState.canScrollLeft}
              style={{ opacity: scrollState.canScrollLeft ? 1 : 0.4, cursor: scrollState.canScrollLeft ? 'pointer' : 'default' }}
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              className="carousel-btn" 
              onClick={() => scroll('right')}
              disabled={!scrollState.canScrollRight}
              style={{ opacity: scrollState.canScrollRight ? 1 : 0.4, cursor: scrollState.canScrollRight ? 'pointer' : 'default' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
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
