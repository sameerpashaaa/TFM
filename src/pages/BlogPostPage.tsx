import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { blogs } from '../data/blogs';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogs.find(b => b.slug === slug);

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2>Article not found</h2>
        <Link to="/blogs" className="btn-red" style={{ marginTop: 16, display: 'inline-flex' }}>Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <Link to="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#7C7268', fontSize: 13, textDecoration: 'none', marginBottom: 24 }}>
          <ArrowLeft size={14} /> Back to Articles
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#8A8074', fontSize: 12, marginBottom: 12 }}>
          <Calendar size={12} />
          {post.date} | Published by TFM Team
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.25, color: '#1B1714', marginBottom: 28 }}>
          {post.title}
        </h1>

        {/* Large Decorative Header */}
        <div style={{ height: 320, background: '#1a0a0a', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', marginBottom: 32 }}>
          <svg width="80" height="70" viewBox="0 0 120 100" fill="none" style={{ opacity: .2 }}>
            <ellipse cx="60" cy="38" rx="28" ry="26" fill="none" stroke="#F08A5D" strokeWidth="5"/>
            <path d="M32 22 Q18 8 14 18 Q18 28 32 30" fill="none" stroke="#F08A5D" strokeWidth="5" strokeLinecap="round"/>
            <path d="M88 22 Q102 8 106 18 Q102 28 88 30" fill="none" stroke="#F08A5D" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(0,0,0,.6))' }} />
        </div>

        {/* Content body */}
        <div style={{ fontSize: 16, color: '#4A423B', lineHeight: 1.8 }} className="blog-content">
          <p style={{ fontWeight: 600, fontSize: 18, color: '#1B1714', marginBottom: 20 }}>
            {post.excerpt}
          </p>
          <p style={{ marginBottom: 20 }}>
            When it comes to sourcing halal meat in the Sultanate of Oman, quality and trust are the primary parameters for every kitchen. At Tarneitfresh Meat (TFM), we believe that transparency is key. Our livestock are sourced directly from certified pastures in Australia and New Zealand, where strict animal welfare laws ensure healthy growth and natural development.
          </p>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1B1714', marginTop: 32, marginBottom: 12 }}>Uncompromised Cold Chain Operations</h3>
          <p style={{ marginBottom: 20 }}>
            To keep meat fresh without freezing, maintaining a stable temperature between 0°C and 4°C is absolutely mandatory. Any break in this cold chain will result in rapid bacteria growth and loss of flavor. That is why TFM delivery drivers are equipped with specialized thermal insulated delivery containers ensuring that the steak or lamb leg arrives at your kitchen exactly as fresh as it left the butcher block.
          </p>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1B1714', marginTop: 32, marginBottom: 12 }}>Portioning & Butchery Customization</h3>
          <p style={{ marginBottom: 20 }}>
            No two recipes are alike. A slow-cooked lamb stew requires bone-in cubes to enrich the gravy, while a barbecue night demands boneless, tender lamb mishkak cubes. Through the TFM online butcher shop, you can specify exactly how you want your cuts trimmed, portioned, or seasoned. This custom-order feature saves time and eliminates food waste, letting you focus on the cooking.
          </p>
        </div>
      </div>
    </div>
  );
}
