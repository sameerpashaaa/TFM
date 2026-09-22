import { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navCategories } from '../../data/categories';
import CutIcon from '../shared/CutIcon';

// Secondary info-row has been removed (T1.2).
// The navbar now contains only the primary category navigation.

export default function Navbar() {
  const [openCat, setOpenCat] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const close = useCallback(() => setOpenCat(null), []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [close]);

  // Escape key closes open dropdown
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [close]);

  return (
    <nav
      ref={navRef}
      className="navbar-root"
      style={{ background: '#fff', borderBottom: '1px solid #E8DFD4', position: 'relative' }}
    >
      {/* Main category nav */}
      <div className="container">
        <div className="navbar-main-nav">
          {navCategories.map(cat => {
            const isOpen = openCat === cat.slug;
            return (
              <div
                key={cat.slug}
                onMouseEnter={() => setOpenCat(cat.slug)}
                onMouseLeave={close}
                style={{ position: 'relative', flexShrink: 0 }}
              >
                {/* Top-level link — also acts as keyboard-accessible toggle */}
                <Link
                  to={`/collections/${cat.slug}`}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() => {
                    // On touch/mouse-click: if dropdown was closed, open it
                    // (navigation happens via the href; on keyboard Enter navigates)
                    close();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '14px 16px',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.8,
                    color: isOpen ? 'var(--crimson)' : '#1B1714',
                    borderBottom: isOpen ? '2px solid var(--crimson)' : '2px solid transparent',
                    transition: 'color .2s, border-color .2s',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat.label}
                  <ChevronDown
                    size={12}
                    className="nav-chevron"
                    aria-hidden="true"
                    style={{
                      transition: 'transform .2s',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                    }}
                  />
                </Link>

                {/* Dropdown — desktop only, triggered by hover or keyboard */}
                {isOpen && (
                  <div
                    role="menu"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: cat.sections ? -100 : 0,
                      width: cat.sections ? 'max-content' : 240,
                      background: '#fff',
                      borderRadius: '0 0 12px 12px',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                      border: '1px solid #E8DFD4',
                      borderTop: 'none',
                      zIndex: 200,
                      padding: cat.sections ? '24px 32px' : '12px 0',
                      display: 'flex',
                      flexDirection: cat.sections ? 'row' : 'column',
                      gap: cat.sections ? 36 : 0,
                    }}
                  >
                    {cat.sections ? (
                      cat.sections.map((sect, sIdx) => (
                        <div key={sIdx} style={{ minWidth: 165 }}>
                          <div style={{ padding: '0 0 10px 0', fontSize: 11, fontWeight: 800, color: 'var(--crimson)', letterSpacing: 0.8, textTransform: 'uppercase', borderBottom: '1px solid #F2EBE2', marginBottom: 12 }}>
                            {sect.title}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {sect.items.map(item => (
                              <Link
                                key={item.slug}
                                to={`/collections/${item.slug}`}
                                role="menuitem"
                                onClick={close}
                                className="nav-dropdown-link"
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 8,
                                  fontSize: 13,
                                  fontWeight: 500,
                                  color: '#5E554C',
                                  textDecoration: 'none',
                                  padding: '3px 0',
                                }}
                              >
                                <CutIcon name={item.name} size={17} />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div style={{ padding: '4px 16px 8px', fontSize: 10, fontWeight: 800, color: 'var(--crimson)', letterSpacing: 1, textTransform: 'uppercase' }}>
                          {cat.label} CATEGORIES
                        </div>
                        {cat.subCategories?.map(sub => (
                          <Link
                            key={sub.slug}
                            to={`/collections/${sub.slug}`}
                            role="menuitem"
                            onClick={close}
                            className="nav-dropdown-link"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 8,
                              padding: '8px 16px',
                              fontSize: 13,
                              fontWeight: 500,
                              color: '#4A423B',
                              textDecoration: 'none',
                            }}
                          >
                            <CutIcon name={sub.name} size={17} />
                            {sub.name}
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
