import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Globe, User, ShoppingCart, Menu, X, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { navCategories } from '../../data/categories';

const infoLinks = [
  { label: 'Customer Reviews', to: '/reviews' },
  { label: 'TFM Rewards', to: '/rewards' },
  { label: 'Refer a Friend', to: '/refer' },
  { label: 'Make Money With TFM', to: '/affiliate' },
];

export default function Header() {
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { totalCount, openCart } = useCart();
  const navigate = useNavigate();

  // Body scroll-lock when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => document.body.classList.remove('scroll-locked');
  }, [mobileOpen]);

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/collections/all?q=${encodeURIComponent(query)}`);
      setMobileOpen(false);
    }
  };

  const closeDrawer = () => setMobileOpen(false);

  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #E8DFD4', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container header-inner">
        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Brand */}
        <Link to="/" style={{ flexShrink: 0, textDecoration: 'none', lineHeight: 1.1 }} onClick={closeDrawer}>
          <div className="brand-text">TARNEIT</div>
          <div className="brand-sub">FRESH MEAT</div>
        </Link>

        {/* Search — desktop only */}
        <form className="desktop-search" onSubmit={handleSearch}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={16} style={{ position: 'absolute', left: 14, color: '#8A8074', pointerEvents: 'none' }} />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search beef, lamb, wagyu, mince..."
              style={{
                width: '100%',
                padding: '10px 14px 10px 38px',
                border: '1.5px solid #DCD1C4',
                borderRadius: 8,
                fontSize: 14,
                outline: 'none',
                background: '#FAF6F1',
                transition: 'border-color .2s',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--crimson)')}
              onBlur={e => (e.currentTarget.style.borderColor = '#DCD1C4')}
            />
          </div>
        </form>

        {/* Right actions */}
        <div className="desktop-actions">
          {/* Language */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', fontSize: 13, fontWeight: 600, color: '#4A423B' }}>
            <Globe size={15} />
            <span style={{ background: '#E2673A', color: '#fff', padding: '2px 6px', borderRadius: 3, fontSize: 11, fontWeight: 700 }}>
              EN
            </span>
          </div>

          {/* Account */}
          <button
            onClick={() => setAuthModalOpen(true)}
            style={{ padding: 8, borderRadius: 6, color: '#4A423B', display: 'flex', alignItems: 'center', border: 'none', background: 'none', cursor: 'pointer' }}
            aria-label="Sign in to your account"
          >
            <User size={20} />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={openCart}
            style={{ padding: 8, borderRadius: 6, color: '#4A423B', display: 'flex', alignItems: 'center', position: 'relative', border: 'none', background: 'none', cursor: 'pointer' }}
            aria-label={`Shopping cart, ${totalCount} item${totalCount !== 1 ? 's' : ''}`}
          >
            <ShoppingCart size={20} />
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 2,
                right: 2,
                minWidth: 18,
                height: 18,
                borderRadius: '50%',
                background: 'var(--crimson)',
                color: '#fff',
                fontSize: 10,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 3px',
              }}
            >
              {totalCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay — click to close */}
      {mobileOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          className="mobile-drawer"
          aria-label="Mobile navigation"
        >
          {/* Mobile search */}
          <form onSubmit={handleSearch} style={{ marginBottom: 20 }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Search size={16} style={{ position: 'absolute', left: 14, color: '#8A8074', pointerEvents: 'none' }} />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search beef, lamb, wagyu..."
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 38px',
                  border: '1.5px solid #DCD1C4',
                  borderRadius: 8,
                  fontSize: 16, /* 16px prevents iOS auto-zoom */
                  outline: 'none',
                  background: '#fff',
                }}
              />
            </div>
          </form>

          {/* Category links */}
          <div style={{ paddingBottom: 16, borderBottom: '1px solid #E8DFD4', marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--accent-deep)', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 12 }}>
              Shop by Category
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {navCategories.map(cat => (
                <Link
                  key={cat.slug}
                  to={`/collections/${cat.slug}`}
                  onClick={closeDrawer}
                  style={{
                    fontWeight: 600,
                    fontSize: 15,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 0',
                    borderBottom: '1px solid var(--border-light)',
                  }}
                >
                  {cat.label}
                  <ChevronRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                </Link>
              ))}
              <Link
                to="/collections/all"
                onClick={closeDrawer}
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: 'var(--crimson)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                }}
              >
                Shop All Cuts
                <ChevronRight size={16} style={{ flexShrink: 0 }} />
              </Link>
            </div>
          </div>

          {/* Info links */}
          <div style={{ paddingBottom: 16, borderBottom: '1px solid #E8DFD4', marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--accent-deep)', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 12 }}>
              More
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {infoLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeDrawer}
                  style={{
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: '9px 0',
                    borderBottom: '1px solid var(--border-light)',
                    display: 'block',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Utility links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { label: 'Store Locations', to: '/locations' },
              { label: 'About Us', to: '/about' },
              { label: 'Contact Us', to: '/contact' },
              { label: 'FAQs', to: '/faqs' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeDrawer}
                style={{
                  fontWeight: 500,
                  fontSize: 14,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  padding: '9px 0',
                  borderBottom: '1px solid var(--border-light)',
                  display: 'block',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Account Modal */}
      {authModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
          onClick={e => { if (e.target === e.currentTarget) setAuthModalOpen(false); }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: 28,
              width: '100%',
              maxWidth: 380,
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}
          >
            <button
              onClick={() => setAuthModalOpen(false)}
              style={{ position: 'absolute', top: 16, right: 16, border: 'none', background: 'none', cursor: 'pointer', padding: 4 }}
              aria-label="Close sign in modal"
            >
              <X size={20} />
            </button>
            <h3 style={{ margin: '0 0 8px', color: '#2B231D', fontSize: 20, fontWeight: 700 }}>Member Sign In</h3>
            <p style={{ margin: '0 0 20px', color: '#7C7268', fontSize: 13 }}>
              Sign in to earn rewards points on every order.
            </p>
            <input
              placeholder="Email address"
              type="email"
              autoComplete="email"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #DCD1C4', borderRadius: 8, marginBottom: 12, fontSize: 16 }}
            />
            <input
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #DCD1C4', borderRadius: 8, marginBottom: 16, fontSize: 16 }}
            />
            <button
              onClick={() => {
                alert('Sign in successful! Welcome to Tarneit Fresh Meat Rewards.');
                setAuthModalOpen(false);
              }}
              style={{
                width: '100%',
                background: 'var(--crimson)',
                color: '#fff',
                border: 'none',
                padding: '13px',
                borderRadius: 8,
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: 15,
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
