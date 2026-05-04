import { useState } from 'react';
import { P } from '../data/photos';
import { perks } from '../data/perks';

export default function Amenities() {
  return (
    <section id="amenities" style={{ padding: '100px 52px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="reveal" style={{ fontSize: 10, letterSpacing: '.32em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 18 }}>The Experience</p>
          <h2 className="reveal" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(34px,4vw,58px)', fontWeight: 300, color: 'var(--lake-deep)' }}>
            Every Detail, <em>Considered</em>
          </h2>
        </div>
        <div style={{ borderRadius: 3, overflow: 'hidden', height: 220, marginBottom: 3, position: 'relative' }}>
          <img src={P.strip2} alt="Lake view" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,45,71,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,3vw,38px)', color: '#fff', fontWeight: 300 }}>Everything you need for a perfect stay</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(175px,1fr))', gap: 2, background: 'var(--stone-dark)' }}>
          {perks.map(({ ic, lb }) => {
            const [h, setH] = useState(false);
            return (
              <div key={lb} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
                style={{ background: h ? 'var(--lake-deep)' : 'var(--cream)', padding: '30px 18px', textAlign: 'center', transition: 'background .3s', cursor: 'default' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{ic}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: h ? '#fff' : 'var(--lake-deep)', transition: 'color .3s' }}>{lb}</div>
                <div style={{ fontSize: 10, marginTop: 4, color: h ? 'rgba(255,255,255,.45)' : 'var(--text-soft)', transition: 'color .3s', letterSpacing: '.06em' }}>Included</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
