import { useState } from 'react';
import { P } from '../data/photos';

const items = [
  { src: P.gal1,    lb: 'Lake Ohrid at Dawn',        span: 2, h: 300 },
  { src: P.gal2,    lb: 'Old Town Cobblestones',      span: 1, h: 300 },
  { src: P.gal3,    lb: 'Historic Church',            span: 1, h: 240 },
  { src: P.gal6,    lb: 'Mountain Reflections',       span: 1, h: 240 },
  { src: P.gal4,    lb: 'Golden Hour Sunset',         span: 2, h: 300 },
  { src: P.gal5,    lb: 'Ohrid City at Night',        span: 1, h: 300 },
  { src: P.apt1Hero, lb: 'The Lakeside Suite',        span: 1, h: 260 },
  { src: P.apt3Hero, lb: "Samuil's Crown Terrace",    span: 2, h: 260 },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: '100px 52px', background: 'var(--stone)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="reveal" style={{ fontSize: 10, letterSpacing: '.32em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 18 }}>Visual Journey</p>
          <h2 className="reveal" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(34px,4vw,58px)', fontWeight: 300, color: 'var(--lake-deep)' }}>
            Ohrid Through <em>Our Lens</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {items.map((g, i) => {
            const [hov, setHov] = useState(false);
            return (
              <div key={i}
                onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
                style={{ gridColumn: `span ${g.span}`, height: g.h, borderRadius: 3, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
                <img src={g.src} alt={g.lb}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .65s ease', transform: hov ? 'scale(1.07)' : 'scale(1)' }} />
                <div style={{ position: 'absolute', inset: 0, background: hov ? 'rgba(11,45,71,.5)' : 'rgba(11,45,71,.08)', transition: 'background .35s', display: 'flex', alignItems: 'flex-end' }}>
                  <div style={{ padding: 22, transform: hov ? 'translateY(0)' : 'translateY(14px)', opacity: hov ? 1 : 0, transition: 'all .3s' }}>
                    <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: '#fff', fontWeight: 400 }}>{g.lb}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
