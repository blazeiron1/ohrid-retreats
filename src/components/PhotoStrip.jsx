import { useState } from 'react';
import { P } from '../data/photos';

const items = [
  { src: P.ex1, lb: 'Lake Ohrid' },
  { src: P.ex2, lb: 'Old Town' },
  { src: P.ex3, lb: 'Historic Churches' },
  { src: P.ex4, lb: 'Cobblestones' },
  { src: P.ex5, lb: 'City at Night' },
];

export default function PhotoStrip() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', height: 220, overflow: 'hidden' }}>
      {items.map(({ src, lb }, i) => {
        const [hov, setHov] = useState(false);
        return (
          <div key={i} style={{ position: 'relative', overflow: 'hidden' }}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
            <img src={src} alt={lb} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s ease', transform: hov ? 'scale(1.1)' : 'scale(1)' }} />
            <div style={{ position: 'absolute', inset: 0, background: hov ? 'rgba(11,45,71,.55)' : 'rgba(11,45,71,.2)', transition: 'background .3s', display: 'flex', alignItems: 'flex-end' }}>
              <p style={{ padding: '14px 16px', fontFamily: "'Cormorant Garamond',serif", fontSize: 16, color: '#fff', opacity: hov ? 1 : 0, transition: 'opacity .3s' }}>{lb}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
