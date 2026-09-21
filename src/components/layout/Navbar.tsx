import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navCategories } from '../../data/categories';
import CutIcon from '../shared/CutIcon';

const infoLinks = [
  { label: 'CUSTOMER REVIEWS', to: '/reviews' },
  { label: 'TFM REWARDS', to: '/rewards' },
  { label: 'REFER A FRIEND', to: '/refer' },
  { label: 'MAKE MONEY WITH TFM', to: '/affiliate' },
];

export default function Navbar() {
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);

  return (
    <nav className="navbar-root" style={{ background: '#fff', borderBottom: '1px solid #E8DFD4', position: 'relative' }}>
      {/* Main category nav */}
      <div className="container">
        <div className="navbar-main-nav">
          {navCategories.map(cat => (
            <div
              key={cat.slug}
              onMouseEnter={() => setHoveredCat(cat.slug)}
              onMouseLeave={() => setHoveredCat(null)}
              style={{ position: 'relative', flexShrink: 0 }}
            >
              <Link
                to={`/collections/${cat.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '14px 16px',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 0.8,
                  color: hoveredCat === cat.slug ? 'var(--crimson)' : '#1B1714',
                  borderBottom: hoveredCat === cat.slug ? '2px solid var(--crimson)' : '2px solid transparent',
                  transition: 'all .2s',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat.label}
                {/* Only show chevron dropdown on devices that support hover (non-touch desktop) */}
                <ChevronDown
                  size={12}
                  className="nav-chevron"
                  style={{
                    transition: 'transform .2s',
                    transform: hoveredCat === cat.slug ? 'rotate(180deg)' : 'none',
                  }}
                />
              </Link>

              {/* Mega Dropdown Menu — desktop only, triggered by hover */}
              {hoveredCat === cat.slug && (
                <div
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
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                fontSize: 13,
                                fontWeight: 500,
                                color: '#5E554C',
                                textDecoration: 'none',
                                transition: 'all .15s',
                                padding: '3px 0',
                              }}
                              onMouseEnter={e => {
                                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--crimson)';
                                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(4px)';
                              }}
                              onMouseLeave={e => {
                                (e.currentTarget as HTMLAnchorElement).style.color = '#5E554C';
                                (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
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
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '8px 16px',
                            fontSize: 13,
                            fontWeight: 500,
                            color: '#4A423B',
                            textDecoration: 'none',
                            transition: 'all .15s',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#FBF0E9';
                            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--crimson)';
                            (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '20px';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                            (e.currentTarget as HTMLAnchorElement).style.color = '#4A423B';
                            (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '16px';
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
          ))}
        </div>
      </div>

      {/* Info links row — desktop only */}
      <div className="navbar-info-row">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 0, overflowX: 'auto' }}>
          {infoLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                padding: '8px 20px',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 0.6,
                color: '#7C7268',
                textDecoration: 'none',
                transition: 'color .2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--crimson)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#7C7268')}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
