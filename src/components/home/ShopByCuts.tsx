import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { cuts } from '../../data/categories';
import { Link } from 'react-router-dom';
import CutIcon from '../shared/CutIcon';

export default function ShopByCuts() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ canScrollLeft: false, canScrollRight: true });

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
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (ref.current) ref.current.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '64px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <div className="section-label" style={{ color: 'var(--accent-deep)', textAlign: 'left' }}>BUTCHER'S CHOICE</div>
            <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>Shop by Cuts</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link to="/collections/all" style={{ fontSize: 14, fontWeight: 600, color: 'var(--crimson)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              View All <ArrowRight size={16} />
            </Link>
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
        </div>

        <div style={{ position: 'relative' }}>
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
            {cuts.map((cut, i) => (
              <Link key={i} to={`/collections/beef?cut=${encodeURIComponent(cut)}`}
                style={{ textDecoration: 'none', flexShrink: 0, scrollSnapAlign: 'start' }}>
                <div 
                  className="surface"
                  style={{
                    padding: '24px 20px', minWidth: 160, textAlign: 'center',
                    transition: 'all .2s', cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--crimson)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLDivElement).style.transform = 'none'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16, color: 'var(--accent-premium)' }}>
                    <CutIcon name={cut} size={40} />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{cut}</div>
                </div>
              </Link>
            ))}
            
            {/* View All Card */}
            <Link to="/collections/all" style={{ textDecoration: 'none', flexShrink: 0, scrollSnapAlign: 'start' }}>
                <div 
                  className="surface"
                  style={{
                    padding: '24px 20px', minWidth: 160, height: '100%', textAlign: 'center',
                    transition: 'all .2s', cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--chip)', border: 'none'
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--crimson)'; (e.currentTarget as HTMLDivElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--chip)'; (e.currentTarget as HTMLDivElement).style.color = 'inherit'; }}
                >
                  <div style={{ fontSize: 14, fontWeight: 600 }}>View All<br/>Cuts</div>
                </div>
            </Link>
          </div>
          
          {/* Gradient fade indicator for scrolling right */}
          {scrollState.canScrollRight && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 16,
              width: 80,
              background: 'linear-gradient(to right, transparent, var(--bg))',
              pointerEvents: 'none',
              zIndex: 2
            }} />
          )}
        </div>
      </div>
    </section>
  );
}
