import { useState } from 'react';

export default function AptCard({ a, delay, onOpen }) {
  const [hov, setHov] = useState(false);

  return (
    <div className={`apt-card reveal reveal-delay-${delay}`}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: '#fff', borderRadius: 3, overflow: 'hidden', boxShadow: hov ? '0 32px 64px rgba(11,45,71,.22)' : '0 8px 36px rgba(11,45,71,.1)' }}>

      <div style={{ height: 270, position: 'relative', overflow: 'hidden' }}>
        <img src={a.heroImg} alt={a.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .65s ease', transform: hov ? 'scale(1.07)' : 'scale(1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: a.overlay }} />

        <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(0,0,0,.42)', backdropFilter: 'blur(8px)', padding: '5px 12px', borderRadius: 20, color: '#fff', fontSize: 10, letterSpacing: '.1em' }}>
          📷 {a.gallery.length} Photos
        </div>

        <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(0,0,0,.38)', backdropFilter: 'blur(12px)', padding: '7px 16px', borderRadius: 20, color: '#fff' }}>
          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 500 }}>€{a.price}</span>
          <span style={{ fontSize: 10, opacity: .7 }}> /night</span>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px' }}>
          <p style={{ fontSize: 9, letterSpacing: '.22em', color: 'rgba(255,255,255,.65)', textTransform: 'uppercase', marginBottom: 5 }}>{a.tag}</p>
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 27, color: '#fff', fontWeight: 400 }}>{a.name}</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid #f0e8dc' }}>
        {[{ i: '🛏️', v: `${a.beds} Beds` }, { i: '📐', v: `${a.sqm} m²` }, { i: '🏢', v: `Floor ${a.floor}` }].map((s, i) => (
          <div key={s.v} style={{ flex: 1, padding: '16px 8px', textAlign: 'center', borderRight: i < 2 ? '1px solid #f0e8dc' : 'none' }}>
            <div style={{ fontSize: 18 }}>{s.i}</div>
            <div style={{ fontSize: 11, color: '#8a7a6e', marginTop: 3 }}>{s.v}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '22px 26px 26px' }}>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: '#6a5a50', fontWeight: 300, marginBottom: 18 }}>{a.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 22 }}>
          {a.features.slice(0, 4).map(f => (
            <span key={f} style={{ fontSize: 10, letterSpacing: '.05em', background: '#f0e8dc', color: '#6a5a50', padding: '5px 12px', borderRadius: 20 }}>✓ {f}</span>
          ))}
          {a.features.length > 4 && <span style={{ fontSize: 10, color: '#8a7a6e', padding: '5px 8px' }}>+{a.features.length - 4} more</span>}
        </div>

        <button onClick={() => onOpen(a)}
          style={{ width: '100%', padding: '14px', background: hov ? 'linear-gradient(135deg,#0b2d47,#1a5276)' : '#0b2d47', color: '#fff', border: 'none', borderRadius: 2, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'Lato',sans-serif", transition: 'background .3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <span>View Details</span>
          <span style={{ fontSize: 14 }}>→</span>
        </button>
      </div>
    </div>
  );
}
