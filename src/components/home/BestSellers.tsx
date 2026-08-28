import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DataService } from '../../services/api';
import type { Product } from '../../data/products';
import ProductCard from '../shared/ProductCard';

export default function BestSellers() {
  const ref = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DataService.getProducts().then(res => {
      setItems(res.data.filter(p => p.reviewCount > 30).slice(0, 8));
      setLoading(false);
    });
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (ref.current) ref.current.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
  };

  return (
    <section style={{ background: '#F7F2EB', padding: '52px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <div className="section-label" style={{ justifyContent: 'flex-start' }}>BEST SELLERS</div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800 }}>Our Most Popular Cuts</h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="carousel-btn" onClick={() => scroll('left')}><ChevronLeft size={18} /></button>
            <button className="carousel-btn" onClick={() => scroll('right')}><ChevronRight size={18} /></button>
          </div>
        </div>

        {loading ? (
          <div style={{ padding: '40px 0', textAlign: 'center', color: '#7C7268' }}>
            Loading Australian fresh cuts...
          </div>
        ) : (
          <div ref={ref} style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8 }} className="scrollbar-none">
            {items.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
