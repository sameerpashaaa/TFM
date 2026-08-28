import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cuts } from '../../data/categories';
import { Link } from 'react-router-dom';
import CutIcon from '../shared/CutIcon';

export default function ShopByCuts() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    if (ref.current) ref.current.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
  };

  return (
    <section style={{ background: '#F7F2EB', padding: '52px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <div className="section-label" style={{ justifyContent: 'flex-start' }}>BUTCHER'S CHOICE</div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800 }}>Shop by Cuts</h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="carousel-btn" onClick={() => scroll('left')}><ChevronLeft size={18} /></button>
            <button className="carousel-btn" onClick={() => scroll('right')}><ChevronRight size={18} /></button>
          </div>
        </div>

        <div ref={ref} style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }} className="scrollbar-none">
          {cuts.map((cut, i) => (
            <Link key={i} to={`/collections/all-beef?cut=${encodeURIComponent(cut)}`}
              style={{ textDecoration: 'none', flexShrink: 0 }}>
              <div style={{
                background: '#fff', borderRadius: 16, padding: '16px 20px',
                border: '1px solid #E8DFD4', minWidth: 140, textAlign: 'center',
                transition: 'all .2s', cursor: 'pointer',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--crimson)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#E8DFD4'; (e.currentTarget as HTMLDivElement).style.transform = 'none'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                  <CutIcon name={cut} size={30} />
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#1B1714' }}>{cut}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
