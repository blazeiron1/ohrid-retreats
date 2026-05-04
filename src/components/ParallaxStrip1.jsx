import { P } from '../data/photos';

export default function ParallaxStrip1() {
  return (
    <div style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
      <img src={P.strip1} alt="Lake Ohrid" style={{ width: '100%', height: '130%', objectFit: 'cover', objectPosition: 'center 30%', position: 'absolute', top: '-15%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,45,71,.58)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: '#fff', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(26px,4vw,50px)', fontWeight: 300, lineHeight: 1.2, marginBottom: 16 }}>
            <em>"Europe's most beautiful lake"</em>
          </p>
          <p style={{ fontSize: 11, letterSpacing: '.22em', color: 'rgba(255,255,255,.5)', textTransform: 'uppercase' }}>— Lonely Planet</p>
        </div>
      </div>
    </div>
  );
}
