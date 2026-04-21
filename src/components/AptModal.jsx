import { useState, useEffect } from 'react';

export default function AptModal({ apt, onClose }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        {/* Photo carousel */}
        <div style={{ position: 'relative', height: 420, overflow: 'hidden', background: '#000' }}>
          <img src={apt.gallery[slide]} alt={apt.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity .4s ease' }} />
          <div style={{ position: 'absolute', inset: 0, background: apt.overlay, pointerEvents: 'none' }} />

          <button onClick={onClose} style={{ position: 'absolute', top: 18, right: 18, background: 'rgba(0,0,0,.5)', border: 'none', color: '#fff', width: 38, height: 38, borderRadius: '50%', cursor: 'pointer', fontSize: 18, backdropFilter: 'blur(6px)' }}>✕</button>

          {apt.gallery.length > 1 && <>
            <button onClick={() => setSlide(s => (s - 1 + apt.gallery.length) % apt.gallery.length)}
              style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,.45)', border: 'none', color: '#fff', width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', fontSize: 20, backdropFilter: 'blur(4px)' }}>‹</button>
            <button onClick={() => setSlide(s => (s + 1) % apt.gallery.length)}
              style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,.45)', border: 'none', color: '#fff', width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', fontSize: 20, backdropFilter: 'blur(4px)' }}>›</button>
          </>}

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 30px', background: 'linear-gradient(0deg,rgba(0,0,0,.7),transparent)' }}>
            <p style={{ fontSize: 9, letterSpacing: '.22em', color: 'rgba(255,255,255,.65)', textTransform: 'uppercase', marginBottom: 5 }}>{apt.tag}</p>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, color: '#fff', fontWeight: 400 }}>{apt.name}</p>
          </div>

          <div style={{ position: 'absolute', bottom: 24, right: 30, display: 'flex', gap: 6 }}>
            {apt.gallery.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)}
                style={{ width: i === slide ? 22 : 7, height: 7, borderRadius: 4, background: i === slide ? '#c9a227' : 'rgba(255,255,255,.5)', border: 'none', cursor: 'pointer', transition: 'all .3s ease' }} />
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${apt.gallery.length},1fr)`, gap: 3, background: '#111' }}>
          {apt.gallery.map((src, i) => (
            <div key={i} onClick={() => setSlide(i)} style={{ height: 80, overflow: 'hidden', cursor: 'pointer', opacity: i === slide ? 1 : .55, transition: 'opacity .3s', border: i === slide ? '2px solid #c9a227' : '2px solid transparent' }}>
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        {/* Details */}
        <div style={{ padding: '30px 34px 36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', gap: 28 }}>
              {[{ i: '🛏️', v: `${apt.beds} Beds` }, { i: '📐', v: `${apt.sqm} m²` }, { i: '🏢', v: `Floor ${apt.floor}` }].map(s => (
                <div key={s.v} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 22 }}>{s.i}</div>
                  <div style={{ fontSize: 11, color: '#8a7a6e', marginTop: 3 }}>{s.v}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 400, color: 'var(--lake-deep)' }}>€{apt.price}</span>
              <span style={{ fontSize: 13, color: '#8a7a6e' }}> / night</span>
            </div>
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.85, color: '#6a5a50', fontWeight: 300, marginBottom: 22 }}>{apt.desc}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {apt.features.map(f => (
              <span key={f} style={{ fontSize: 11, letterSpacing: '.05em', background: '#f0e8dc', color: '#6a5a50', padding: '6px 14px', borderRadius: 20 }}>✓ {f}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() => { onClose(); setTimeout(() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }), 200); }}
              className="btn-gold"
              style={{ flex: 1, minWidth: 180, padding: '15px', background: 'linear-gradient(135deg,#c9a227,#e8c560)', color: '#1a1208', border: 'none', borderRadius: 2, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer', fontFamily: "'Jost',sans-serif" }}>
              Reserve Now
            </button>
            <button onClick={onClose}
              style={{ padding: '15px 28px', border: '1px solid #c4b49f', background: 'transparent', color: '#6a5a50', borderRadius: 2, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'Jost',sans-serif" }}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
