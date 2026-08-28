import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Globe, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { totalCount, openCart } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/collections/all?q=${encodeURIComponent(query)}`);
  };

  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #E8DFD4', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 70, gap: 20 }}>
        {/* Mobile menu toggle */}
        <button
          className="btn-icon"
          onClick={() => setMobileOpen(v => !v)}
          style={{ display: 'none', padding: 8, borderRadius: 6, background: 'none', border: 'none', cursor: 'pointer' }}
          id="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Brand */}
        <Link to="/" style={{ flexShrink: 0, textDecoration: 'none', lineHeight: 1.1 }}>
          <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: 1, color: 'var(--crimson)' }}>TARNEIT</div>
          <div style={{ fontWeight: 700, fontSize: 11, letterSpacing: 3, color: '#4A423B' }}>FRESH MEAT</div>
        </Link>

        {/* Search */}
        <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: 520 }}>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 'auto', flexShrink: 0 }}>
          {/* Language */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', fontSize: 13, fontWeight: 600, color: '#4A423B' }}
          >
            <Globe size={15} />
            <span style={{ background: '#E2673A', color: '#fff', padding: '2px 6px', borderRadius: 3, fontSize: 11, fontWeight: 700 }}>
              EN
            </span>
          </div>

          {/* Account */}
          <button
            onClick={() => setAuthModalOpen(true)}
            style={{ padding: 8, borderRadius: 6, color: '#4A423B', display: 'flex', alignItems: 'center', border: 'none', background: 'none', cursor: 'pointer' }}
            title="User Account"
          >
            <User size={20} />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={openCart}
            style={{ padding: 8, borderRadius: 6, color: '#4A423B', display: 'flex', alignItems: 'center', position: 'relative', border: 'none', background: 'none', cursor: 'pointer' }}
            title="Shopping Cart"
          >
            <ShoppingCart size={20} />
            <span
              style={{
                position: 'absolute',
                top: 2,
                right: 2,
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'var(--crimson)',
                color: '#fff',
                fontSize: 10,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {totalCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          style={{
            background: '#FFF8F0',
            borderTop: '1px solid #E8DFD4',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <Link to="/collections/all" onClick={() => setMobileOpen(false)} style={{ fontWeight: 600, color: '#2B231D', textDecoration: 'none' }}>
            Shop All Cuts
          </Link>
          <Link to="/reviews" onClick={() => setMobileOpen(false)} style={{ fontWeight: 600, color: '#2B231D', textDecoration: 'none' }}>
            Customer Reviews
          </Link>
          <Link to="/rewards" onClick={() => setMobileOpen(false)} style={{ fontWeight: 600, color: '#2B231D', textDecoration: 'none' }}>
            Rewards Program
          </Link>
          <Link to="/locations" onClick={() => setMobileOpen(false)} style={{ fontWeight: 600, color: '#2B231D', textDecoration: 'none' }}>
            Store Locations
          </Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} style={{ fontWeight: 600, color: '#2B231D', textDecoration: 'none' }}>
            Contact Us
          </Link>
        </div>
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
            padding: 20,
          }}
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
              style={{ position: 'absolute', top: 16, right: 16, border: 'none', background: 'none', cursor: 'pointer' }}
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
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #DCD1C4', borderRadius: 8, marginBottom: 12 }}
            />
            <input
              placeholder="Password"
              type="password"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #DCD1C4', borderRadius: 8, marginBottom: 16 }}
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
                padding: '12px',
                borderRadius: 8,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

