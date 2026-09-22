import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 16px' }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontSize: 72, fontWeight: 900, color: 'var(--crimson)', lineHeight: 1, marginBottom: 16 }}>404</div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: '#1B1714' }}>Page not found</h1>
        <p style={{ color: '#7C7268', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
          The page you're looking for doesn't exist or may have moved.
          Head back home or browse our fresh meat collections.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-red" style={{ padding: '13px 28px', textDecoration: 'none' }}>
            Go home
          </Link>
          <Link
            to="/collections/all"
            style={{
              display: 'inline-block',
              padding: '13px 28px',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--r-pill)',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Shop all cuts
          </Link>
        </div>
      </div>
    </div>
  );
}
