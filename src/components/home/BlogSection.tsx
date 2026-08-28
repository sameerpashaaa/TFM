import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogs } from '../../data/blogs';
import { useRef } from 'react';

// Decorative blog image placeholder
function BlogPlaceholder({ index }: { index: number }) {
  const palettes = [
    { bg: '#1a0a0a', accent: '#F08A5D' },
    { bg: '#1a1005', accent: '#d97706' },
    { bg: '#071a0a', accent: '#16a34a' },
    { bg: '#05071a', accent: '#4f46e5' },
  ];
  const p = palettes[index % palettes.length];
  return (
    <div style={{ width: '100%', height: '100%', background: p.bg, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* TFM logo */}
      <svg width="48" height="40" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: .4 }}>
        <ellipse cx="60" cy="38" rx="28" ry="26" fill="none" stroke={p.accent} strokeWidth="5"/>
        <path d="M32 22 Q18 8 14 18 Q18 28 32 30" fill="none" stroke={p.accent} strokeWidth="5" strokeLinecap="round"/>
        <path d="M88 22 Q102 8 106 18 Q102 28 88 30" fill="none" stroke={p.accent} strokeWidth="5" strokeLinecap="round"/>
        <circle cx="49" cy="34" r="5" fill={p.accent}/>
        <circle cx="71" cy="34" r="5" fill={p.accent}/>
      </svg>
      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${p.bg}cc, transparent)` }} />
    </div>
  );
}

export default function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section style={{ background: '#fff', padding: '52px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <div className="section-label" style={{ justifyContent: 'flex-start' }}>FROM OUR KITCHEN</div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800 }}>Latest Articles</h2>
          </div>
          <Link to="/blogs" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--crimson)', fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
            View all articles <ArrowRight size={14} />
          </Link>
        </div>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {blogs.map((b, i) => (
            <Link key={b.id} to={`/blogs/${b.slug}`} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ height: 160, overflow: 'hidden', position: 'relative' }}>
                <img src={b.image} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.currentTarget.style.display = 'none'; }}/>
                <div style={{ position: 'absolute', inset: 0 }}>
                  <BlogPlaceholder index={i} />
                </div>
              </div>
              <div style={{ padding: '16px 16px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#8A8074', fontSize: 11, marginBottom: 8 }}>
                  <Calendar size={11} />
                  {b.date}
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.45, marginBottom: 12, color: '#1B1714' }}>{b.title}</h3>
                <span style={{ color: 'var(--crimson)', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                  Read more <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 580px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
