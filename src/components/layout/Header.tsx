import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, ChevronRight, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { navCategories } from '../../data/categories';
import { SITE_CONFIG } from '../../config/siteConfig';
import { generalEnquiryLink } from '../../lib/whatsapp';

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const mobileInfoLinks = [
  { label: 'Customer Reviews', to: '/reviews' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Delivery Info', to: '/delivery' },
  { label: 'Returns & Quality', to: '/returns' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Header() {
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
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

        {/* Right actions — desktop */}
        <div className="desktop-actions">
          {/* WhatsApp CTA */}
          <a
            href={generalEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 14px',
              background: '#25D366',
              borderRadius: 6,
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              flexShrink: 0,
            }}
            aria-label="Order on WhatsApp"
          >
            <WhatsAppIcon size={15} />
            <span>Order</span>
          </a>

          {/* Call CTA */}
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '8px 12px',
              borderRadius: 6,
              color: 'var(--text-primary)',
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid var(--border)',
              flexShrink: 0,
            }}
            aria-label={`Call us on ${SITE_CONFIG.phoneDisplay}`}
          >
            <Phone size={14} />
            <span className="header-phone-label">{SITE_CONFIG.phoneDisplay}</span>
          </a>

          {/* Cart Trigger */}
          <button
            onClick={openCart}
            style={{ padding: 8, borderRadius: 6, color: '#4A423B', display: 'flex', alignItems: 'center', position: 'relative', border: 'none', background: 'none', cursor: 'pointer' }}
            aria-label={`Shopping cart, ${totalCount} item${totalCount !== 1 ? 's' : ''}`}
          >
            <ShoppingCart size={20} />
            {totalCount > 0 && (
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
            )}
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

          {/* Mobile WhatsApp + Call CTAs */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
            <a
              href={generalEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '13px',
                background: '#25D366',
                borderRadius: 8,
                color: '#fff',
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <WhatsAppIcon size={17} />
              Order on WhatsApp
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '13px',
                border: '1.5px solid var(--border)',
                borderRadius: 8,
                color: 'var(--text-primary)',
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <Phone size={16} />
              Call us
            </a>
          </div>

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

          {/* Utility links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {mobileInfoLinks.map(link => (
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
    </header>
  );
}
