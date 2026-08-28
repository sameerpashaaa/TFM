import { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { DataService } from '../services/api';
import type { Product } from '../data/products';
import { categories, cuts } from '../data/categories';
import ProductCard from '../components/shared/ProductCard';

const origins = ['Australia', 'New Zealand', 'South Africa', 'Japan', 'United States'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Best Selling', 'Newest'];

const beefSubCategories = [
  { label: 'All Beef', slug: 'all-beef' },
  { label: 'Wagyu Beef', slug: 'australian-wagyu-beef' },
  { label: 'Black Angus', slug: 'australian-black-angus-beef' },
  { label: 'Beef Steaks', slug: 'beef-steaks' },
  { label: 'Beef Mince', slug: 'beef-mince' },
  { label: 'Beef Ribs', slug: 'beef-ribs' },
  { label: 'Beef Brisket', slug: 'beef-brisket' },
  { label: 'Beef Skewers', slug: 'beef-mishkak-fondue' },
  { label: 'Beef Sausages', slug: 'all-sausages' },
  { label: 'Dry Aged Beef', slug: 'dry-aged-beef' }
];

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

export default function CollectionPage() {
  const { slug = 'all-beef' } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const category = categories.find(c => c.slug === slug);

  const [rawProducts, setRawProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [selectedCuts, setSelectedCuts] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(250);
  const [sort, setSort] = useState('Featured');

  useEffect(() => {
    setLoading(true);
    DataService.getProducts({ categorySlug: slug, query: searchQuery }).then(res => {
      setRawProducts(res.data);
      setLoading(false);
    });
  }, [slug, searchQuery]);

  const toggleOrigin = (o: string) => setSelectedOrigins(prev => prev.includes(o) ? prev.filter(x => x !== o) : [...prev, o]);
  const toggleCut = (c: string) => setSelectedCuts(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);

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
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 900, margin: '0 auto' }}>
            {beefSubCategories.map(sub => (
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
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 32, paddingBottom: 48 }}>
        <div style={{ display: 'flex', gap: 28 }}>

          {/* Sidebar */}
          <aside style={{ width: 240, flexShrink: 0, background: '#fff', borderRadius: 16, padding: 20, height: 'fit-content', border: '1px solid #E8DFD4', position: 'sticky', top: 80 }}>
            <h3 style={{ fontWeight: 800, fontSize: 16, marginBottom: 20 }}>Filters</h3>

            <FilterSection title="Price ($ AUD)">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#7C7268', marginBottom: 8 }}>
                <span>$ 0 AUD</span>
                <span>$ {maxPrice} AUD</span>
              </div>
              <input type="range" min={0} max={250} step={5} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} />
            </FilterSection>

            <FilterSection title="Shop by Origin">
              {origins.map(o => (
                <label key={o} className="custom-checkbox" style={{ marginBottom: 10 }}>
                  <input type="checkbox" checked={selectedOrigins.includes(o)} onChange={() => toggleOrigin(o)} />
                  <span style={{ fontSize: 13, color: '#4A423B' }}>{o}</span>
                </label>
              ))}
            </FilterSection>

            <FilterSection title="Shop by Cuts">
              {cuts.slice(0, 8).map(c => (
                <label key={c} className="custom-checkbox" style={{ marginBottom: 10 }}>
                  <input type="checkbox" checked={selectedCuts.includes(c)} onChange={() => toggleCut(c)} />
                  <span style={{ fontSize: 13, color: '#4A423B' }}>{c}</span>
                </label>
              ))}
            </FilterSection>

            {(selectedOrigins.length > 0 || selectedCuts.length > 0 || maxPrice < 45) && (
              <button onClick={() => { setSelectedOrigins([]); setSelectedCuts([]); setMaxPrice(45); }}
                style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--crimson)', color: 'var(--crimson)', borderRadius: 6, fontWeight: 600, fontSize: 12, background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <X size={12} /> Clear All Filters
              </button>
            )}
          </aside>

          {/* Product grid */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <p style={{ fontSize: 14, color: '#7C7268' }}><strong style={{ color: '#111' }}>{filtered.length}</strong> products found</p>
              <select value={sort} onChange={e => setSort(e.target.value)}
                style={{ padding: '8px 12px', border: '1px solid #E8DFD4', borderRadius: 6, fontSize: 13, color: '#4A423B', background: '#fff', cursor: 'pointer', outline: 'none' }}>
                {sortOptions.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#8A8074' }}>
                <p style={{ fontSize: 16 }}>Loading fresh products from PostgreSQL...</p>
              </div>
            ) : filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#8A8074' }}>
                <p style={{ fontSize: 18, marginBottom: 8 }}>No products match your filters.</p>
                <button onClick={() => { setSelectedOrigins([]); setSelectedCuts([]); setMaxPrice(250); }}
                  className="btn-red" style={{ marginTop: 12 }}>Clear Filters</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="product-grid">
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .product-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          aside { display: none !important; }
          .product-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
