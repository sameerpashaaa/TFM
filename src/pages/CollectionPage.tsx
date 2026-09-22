import { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, X, SlidersHorizontal } from 'lucide-react';
import { DataService } from '../services/api';
import type { Product } from '../data/products';
import { categories, navCategories } from '../data/categories';
import ProductCard from '../components/shared/ProductCard';

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Best Selling', 'Newest'];



function FilterSection({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid #F2EBE2', paddingBottom: 16, marginBottom: 16 }}>
      <button onClick={() => setOpen(v => !v)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '4px 0', fontWeight: 700, fontSize: 12, letterSpacing: .5, textTransform: 'uppercase', color: '#1B1714', background: 'none', border: 'none', cursor: 'pointer' }}>
        {title}
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {open && <div style={{ marginTop: 12 }}>{children}</div>}
    </div>
  );
}

function FilterContent({ selectedOrigins, toggleOrigin, selectedCuts, toggleCut, maxPrice, setMaxPrice, onClear, availableOrigins, availableCuts }: {
  selectedOrigins: string[];
  toggleOrigin: (o: string) => void;
  selectedCuts: string[];
  toggleCut: (c: string) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
  onClear: () => void;
  availableOrigins: string[];
  availableCuts: string[];
}) {
  return (
    <>
      <FilterSection title="Price ($ AUD)">
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#7C7268', marginBottom: 8 }}>
          <span>$ 0 AUD</span>
          <span>$ {maxPrice} AUD</span>
        </div>
        <input type="range" min={0} max={250} step={5} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} />
      </FilterSection>

      {availableOrigins.length > 0 && (
        <FilterSection title="Shop by Origin">
          <div style={{ maxHeight: 200, overflowY: 'auto' }}>
            {availableOrigins.map(o => (
              <label key={o} className="custom-checkbox" style={{ marginBottom: 10, display: 'block' }}>
                <input type="checkbox" checked={selectedOrigins.includes(o)} onChange={() => toggleOrigin(o)} />
                <span style={{ fontSize: 13, color: '#4A423B', marginLeft: 8 }}>{o}</span>
              </label>
            ))}
          </div>
        </FilterSection>
      )}

      {availableCuts.length > 0 && (
        <FilterSection title="Shop by Cuts">
          <div style={{ maxHeight: 250, overflowY: 'auto' }}>
            {availableCuts.map(c => (
              <label key={c} className="custom-checkbox" style={{ marginBottom: 10, display: 'block' }}>
                <input type="checkbox" checked={selectedCuts.includes(c)} onChange={() => toggleCut(c)} />
                <span style={{ fontSize: 13, color: '#4A423B', marginLeft: 8 }}>{c}</span>
              </label>
            ))}
          </div>
        </FilterSection>
      )}

      {(selectedOrigins.length > 0 || selectedCuts.length > 0 || maxPrice < 250) && (
        <button onClick={onClear}
          style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--crimson)', color: 'var(--crimson)', borderRadius: 6, fontWeight: 600, fontSize: 12, background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <X size={12} /> Clear All Filters
        </button>
      )}
    </>
  );
}

export default function CollectionPage() {
  const { slug = 'all-beef' } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const category = categories.find(c => c.slug === slug);

  const activeNavCategory = navCategories.find(nav => 
    nav.slug === slug || nav.subCategories?.some(sub => sub.slug === slug)
  );
  const subCategoryPills = activeNavCategory?.subCategories || [];

  const [rawProducts, setRawProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [selectedCuts, setSelectedCuts] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(250);
  const [sort, setSort] = useState('Featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    DataService.getProducts({ categorySlug: slug, query: searchQuery }).then(res => {
      setRawProducts(res.data);
      setLoading(false);
    });
  }, [slug, searchQuery]);

  useEffect(() => {
    if (mobileFilterOpen) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => document.body.classList.remove('scroll-locked');
  }, [mobileFilterOpen]);

  const availableOrigins = useMemo(() => {
    const set = new Set(rawProducts.map(p => p.origin));
    return Array.from(set).filter(Boolean).sort();
  }, [rawProducts]);

  const availableCuts = useMemo(() => {
    const set = new Set(rawProducts.map(p => p.cut));
    return Array.from(set).filter(Boolean).sort();
  }, [rawProducts]);

  const toggleOrigin = (o: string) => setSelectedOrigins(prev => prev.includes(o) ? prev.filter(x => x !== o) : [...prev, o]);
  const toggleCut = (c: string) => setSelectedCuts(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  const clearAll = () => { setSelectedOrigins([]); setSelectedCuts([]); setMaxPrice(250); };

  const filtered = useMemo(() => {
    let list = [...rawProducts];
    if (selectedOrigins.length) list = list.filter(p => selectedOrigins.includes(p.origin));
    if (selectedCuts.length) list = list.filter(p => selectedCuts.includes(p.cut));
    list = list.filter(p => p.price <= maxPrice);
    if (sort === 'Price: Low to High') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'Price: High to Low') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'Best Selling') list = [...list].sort((a, b) => b.reviewCount - a.reviewCount);
    return list;
  }, [rawProducts, selectedOrigins, selectedCuts, maxPrice, sort]);

  const activeFilterCount = selectedOrigins.length + selectedCuts.length + (maxPrice < 250 ? 1 : 0);

  const pageTitle = searchQuery
    ? `Search Results for "${searchQuery}"`
    : category?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  useEffect(() => {
    document.title = `${pageTitle} | Tarneit Fresh Meat`;
  }, [pageTitle]);

  const desc = category?.description || `Shop premium ${slug.replace(/-/g, ' ')} delivered fresh within 1 hour across Melbourne & Tarneit.`;

  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: '#fff', padding: '32px 0 24px', borderBottom: '1px solid #E8DFD4', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 6 }}>{pageTitle}</h1>
          <p style={{ color: '#7C7268', fontSize: 14, maxWidth: 620, margin: '0 auto 20px' }}>{desc}</p>

          {/* Subcategory Pills */}
          {subCategoryPills.length > 0 && (
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 900, margin: '0 auto' }}>
              {subCategoryPills.map(sub => (
                <Link
                  key={sub.slug}
                  to={`/collections/${sub.slug}`}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    padding: '6px 14px',
                    borderRadius: 20,
                    textDecoration: 'none',
                    background: slug === sub.slug ? 'var(--crimson)' : '#FAF6F1',
                    color: slug === sub.slug ? '#fff' : '#4A423B',
                    border: `1px solid ${slug === sub.slug ? 'var(--crimson)' : '#E8DFD4'}`,
                    transition: 'all 0.2s',
                  }}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="container" style={{ paddingTop: 32, paddingBottom: 48 }}>
        {/* Mobile filter bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          {/* Mobile filter button — visible only on mobile via CSS */}
          <button
            className="mobile-filter-btn"
            onClick={() => setMobileFilterOpen(true)}
          >
            <SlidersHorizontal size={15} />
            Filters {activeFilterCount > 0 && <span style={{ background: 'var(--crimson)', color: '#fff', borderRadius: '50%', width: 18, height: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>{activeFilterCount}</span>}
          </button>

          {/* Sort — always visible */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
            <p style={{ fontSize: 14, color: '#7C7268', whiteSpace: 'nowrap' }}>
              <strong style={{ color: '#111' }}>{filtered.length}</strong> products
            </p>
            <select value={sort} onChange={e => setSort(e.target.value)}
              style={{ padding: '8px 12px', border: '1px solid #E8DFD4', borderRadius: 6, fontSize: 13, color: '#4A423B', background: '#fff', cursor: 'pointer', outline: 'none' }}>
              {sortOptions.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 28 }}>
          {/* Desktop Sidebar — hidden on mobile via CSS */}
          <aside style={{ width: 240, flexShrink: 0, background: '#fff', borderRadius: 16, padding: 20, height: 'fit-content', border: '1px solid #E8DFD4', position: 'sticky', top: 80 }} className="collection-sidebar">
            <h3 style={{ fontWeight: 800, fontSize: 16, marginBottom: 20 }}>Filters</h3>
            <FilterContent
              selectedOrigins={selectedOrigins}
              toggleOrigin={toggleOrigin}
              selectedCuts={selectedCuts}
              toggleCut={toggleCut}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              onClear={clearAll}
              availableOrigins={availableOrigins}
              availableCuts={availableCuts}
            />
          </aside>

          {/* Product grid */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#8A8074' }}>
                <p style={{ fontSize: 16 }}>Loading fresh products from PostgreSQL...</p>
              </div>
            ) : filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#8A8074' }}>
                <p style={{ fontSize: 18, marginBottom: 8 }}>No products match your filters.</p>
                <button onClick={clearAll}
                  className="btn-red" style={{ marginTop: 12 }}>Clear Filters</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="product-grid">
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <>
          <div className="mobile-filter-overlay" onClick={() => setMobileFilterOpen(false)} />
          <div className="mobile-filter-drawer">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #E8DFD4' }}>
              <h3 style={{ fontWeight: 800, fontSize: 16, margin: 0 }}>Filters</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                style={{ padding: 6, border: 'none', background: 'none', cursor: 'pointer' }}
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            <FilterContent
              selectedOrigins={selectedOrigins}
              toggleOrigin={toggleOrigin}
              selectedCuts={selectedCuts}
              toggleCut={toggleCut}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              onClear={clearAll}
              availableOrigins={availableOrigins}
              availableCuts={availableCuts}
            />
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="btn-red"
              style={{ width: '100%', marginTop: 16, padding: '14px' }}
            >
              Show {filtered.length} Results
            </button>
          </div>
        </>
      )}

      <style>{`
        @media (max-width: 900px) {
          .collection-sidebar { display: none !important; }
          .product-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .product-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
          .product-grid > div { min-width: 0 !important; }
        }
      `}</style>
    </div>
  );
}
