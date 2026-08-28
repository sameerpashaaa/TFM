import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  { name: 'TFM Gourmet Tarneit', address: 'Tarneit Central Shopping Centre, Tarneit VIC 3029', phone: '(03) 9123 4567', hours: '8:00 AM – 8:00 PM (Daily)' },
  { name: 'TFM Gourmet Werribee', address: 'Watton Street Butchery, Werribee VIC 3030', phone: '(03) 9123 4568', hours: '8:00 AM – 8:00 PM (Daily)' },
  { name: 'TFM Melbourne Headquarters & Processing', address: 'Industrial Park Drive, Truganina VIC 3029', phone: '(03) 9123 4500', hours: '6:00 AM – 6:00 PM (Mon-Sat)' }
];

export default function LocationsPage() {
  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-label">VISIT OUR STORES</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>Store Locations</h1>
        <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 40 }}>Find Tarneitfresh Meat gourmet retail shops and fulfillment centers near you.</p>

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
              <button className="btn-red-outline" style={{ marginTop: 8 }}>
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
