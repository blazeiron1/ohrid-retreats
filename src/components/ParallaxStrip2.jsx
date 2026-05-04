import { useState } from 'react';
import { P } from '../data/photos';

const panels = [
  { src: P.pan1, lb: 'The Lake',      sub: '3 million years old' },
  { src: P.pan2, lb: 'Old Town',      sub: 'UNESCO Heritage' },
  { src: P.pan3, lb: 'The Mountains', sub: 'Surrounding Ohrid' },
  { src: P.pan4, lb: 'St. Naum',      sub: 'Lakeside monastery' },
];

export default function ParallaxStrip2() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', height: 280, overflow: 'hidden' }}>
      {panels.map((p, i) => {
        const [h, setH] = useState(false);
        return (
          <div key={i} style={{ position: 'relative', overflow: 'hidden' }}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
            <img src={p.src} alt={p.lb}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .7s ease', transform: h ? 'scale(1.1)' : 'scale(1)' }} />
            <div style={{ position: 'absolute', inset: 0, background: h ? 'rgba(11,45,71,.62)' : 'rgba(11,45,71,.38)', transition: 'background .35s', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: '#fff', fontWeight: 300, textAlign: 'center' }}>{p.lb}</p>
              <p style={{ fontSize: 10, letterSpacing: '.16em', color: h ? '#c9a227' : 'rgba(255,255,255,.5)', textTransform: 'uppercase', marginTop: 8, transition: 'color .3s' }}>{p.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
