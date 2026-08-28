import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';

function BlogPlaceholder({ index }: { index: number }) {
  const colors = ['#1a0a0a', '#1a1005', '#071a0a', '#05071a'];
  const accents = ['#F08A5D', '#d97706', '#16a34a', '#4f46e5'];
  const c = colors[index % colors.length];
  const a = accents[index % accents.length];
  return (
    <div style={{ width: '100%', height: '100%', background: c, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="48" height="40" viewBox="0 0 120 100" fill="none" style={{ opacity: .35 }}>
        <ellipse cx="60" cy="38" rx="28" ry="26" fill="none" stroke={a} strokeWidth="5"/>
        <path d="M32 22 Q18 8 14 18 Q18 28 32 30" fill="none" stroke={a} strokeWidth="5" strokeLinecap="round"/>
        <path d="M88 22 Q102 8 106 18 Q102 28 88 30" fill="none" stroke={a} strokeWidth="5" strokeLinecap="round"/>
      </svg>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${c}cc, transparent)` }} />
    </div>
  );
}

export default function BlogsPage() {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-label">TFM ARTICLES</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>TFM Blogs & Recipes</h1>
        <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 40 }}>Tips, cooking guides, and butcher stories from the Tarneitfresh Meat family.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {blogs.map((b, i) => (
            <Link key={b.id} to={`/blogs/${b.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid #E8DFD4', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 200, position: 'relative' }}>
                  <img src={b.image} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.currentTarget.style.display = 'none'} />
                  <div style={{ position: 'absolute', inset: 0 }}><BlogPlaceholder index={i} /></div>
                </div>
                <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#8A8074', fontSize: 12, marginBottom: 10 }}>
                    <Calendar size={12} />
                    {b.date}
                  </div>
                  <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1B1714', marginBottom: 12, lineHeight: 1.4 }}>{b.title}</h2>
                  <p style={{ fontSize: 13, color: '#5E554C', lineHeight: 1.5, marginBottom: 16, flex: 1 }}>{b.excerpt}</p>
                  <span style={{ color: 'var(--crimson)', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                    Read Full Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
