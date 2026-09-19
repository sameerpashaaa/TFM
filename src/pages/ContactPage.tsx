import { Mail, Phone, MapPin, CheckCircle, Hash } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ background: '#F7F2EB', minHeight: '100vh', paddingTop: 40, paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-label">GET IN TOUCH</div>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 14 }}>Contact Us</h1>
        <p style={{ textAlign: 'center', color: '#7C7268', marginBottom: 40 }}>Our team at Tarneit Fresh Meats is here to help you 7 days a week.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32 }}>

          {/* Form */}
          <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E8DFD4' }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 20 }}>Send us a message</h2>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <CheckCircle size={48} color="#059669" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Message Sent Successfully</h3>
                <p style={{ fontSize: 13, color: '#7C7268' }}>Thank you for reaching out. A TFM representative will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#4A423B', display: 'block', marginBottom: 6 }}>NAME</label>
                    <input type="text" required style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #DCD1C4', borderRadius: 6, fontSize: 13, outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#4A423B', display: 'block', marginBottom: 6 }}>EMAIL</label>
                    <input type="email" required style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #DCD1C4', borderRadius: 6, fontSize: 13, outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#4A423B', display: 'block', marginBottom: 6 }}>PHONE NUMBER</label>
                  <input type="text" required placeholder="e.g. 0403 153 872" style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #DCD1C4', borderRadius: 6, fontSize: 13, outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#4A423B', display: 'block', marginBottom: 6 }}>MESSAGE</label>
                  <textarea required rows={4} style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #DCD1C4', borderRadius: 6, fontSize: 13, outline: 'none', resize: 'none' }} />
                </div>
                <button type="submit" className="btn-red" style={{ padding: '12px 20px', width: 'fit-content' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: <Phone size={20} color="var(--crimson)" />, title: 'Call Us', val1: '0403 153 872', val2: '' },
              { icon: <Mail size={20} color="var(--crimson)" />, title: 'Email Enquiries', val1: 'momin.shahad79@gmail.com', val2: '' },
              { icon: <MapPin size={20} color="var(--crimson)" />, title: 'Our Store', val1: 'Shop 6, 747 Tarneit Rd', val2: 'Tarneit VIC 3020, Australia' },
              { icon: <Hash size={20} color="var(--crimson)" />, title: 'ABN', val1: '47 164 552 729', val2: '' },
            ].map((c, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #E8DFD4', display: 'flex', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: '#FBF0E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{c.title}</h3>
                  <p style={{ fontSize: 13, color: '#5E554C', lineHeight: 1.5 }}>{c.val1}</p>
                  {c.val2 && <p style={{ fontSize: 13, color: '#7C7268', lineHeight: 1.5 }}>{c.val2}</p>}
                </div>
              </div>
            ))}

            <div style={{ background: 'var(--accent-deep)', color: '#fff', borderRadius: 20, padding: 24, textAlign: 'center' }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8 }}>Trading Name</h3>
              <p style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Tarneit Fresh Meats</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.8)', lineHeight: 1.5 }}>
                Shop 6, 747 Tarneit Rd<br />
                Tarneit VIC 3020
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
