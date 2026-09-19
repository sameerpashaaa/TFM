import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  {
    name: 'Tarneit Fresh Meats',
    address: 'Shop 6, 747 Tarneit Rd, Tarneit VIC 3020',
    phone: '0403 153 872',
    hours: '7 Days a Week – Call for Hours',
    mapLink: 'https://maps.google.com/?q=747+Tarneit+Rd+Tarneit+VIC+3020',
  },
];

export default function LocationsPage() {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-label">VISIT OUR STORE</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>Store Location</h1>
        <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 40 }}>Find Tarneit Fresh Meats – your local halal butcher in Tarneit, Victoria.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {locations.map((loc, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E8DFD4', display: 'flex', gap: 24, alignItems: 'start' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#FBF0E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={24} color="var(--crimson)" />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1B1714', marginBottom: 12 }}>{loc.name}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: '#5E554C' }}>
                  <div style={{ display: 'flex', gap: 8 }}><MapPin size={16} style={{ marginTop: 2, flexShrink: 0 }} /> {loc.address}</div>
                  <div style={{ display: 'flex', gap: 8 }}><Clock size={16} style={{ marginTop: 2, flexShrink: 0 }} /> {loc.hours}</div>
                  <div style={{ display: 'flex', gap: 8 }}><Phone size={16} style={{ marginTop: 2, flexShrink: 0 }} /> {loc.phone}</div>
                </div>
              </div>
              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red-outline"
                style={{ marginTop: 8, textDecoration: 'none', display: 'inline-block', padding: '10px 18px', whiteSpace: 'nowrap' }}
              >
                Get Directions
              </a>
            </div>
          ))}
        </div>

        {/* Map embed placeholder */}
        <div style={{ marginTop: 40, borderRadius: 20, overflow: 'hidden', border: '1px solid #E8DFD4', height: 300, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', color: '#7C7268' }}>
            <MapPin size={40} color="var(--crimson)" style={{ margin: '0 auto 12px' }} />
            <p style={{ fontWeight: 600 }}>747 Tarneit Rd, Tarneit VIC 3020</p>
            <a
              href="https://maps.google.com/?q=747+Tarneit+Rd+Tarneit+VIC+3020"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--crimson)', fontSize: 14, fontWeight: 600 }}
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
