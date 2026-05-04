import { P } from '../data/photos';

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', background: 'linear-gradient(145deg,#0b2d47,#1a5276 60%,#0f3a5e)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }} className="sm-col">

        <div style={{ flex: '1 1 420px', padding: '0 0 0 52px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ flex: 1.3, borderRadius: 3, overflow: 'hidden', minHeight: 200 }}>
            <img src={P.about1} alt="Ohrid old town" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', transition: 'transform .6s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, minHeight: 160 }}>
            <div style={{ borderRadius: 3, overflow: 'hidden' }}>
              <img src={P.about2} alt="Ohrid sunset" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
            <div style={{ borderRadius: 3, overflow: 'hidden' }}>
              <img src={P.gal3} alt="Historic church" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 400px', padding: '40px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="reveal" style={{ fontSize: 10, letterSpacing: '.32em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 18 }}>The Destination</p>
          <h2 className="reveal" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, color: '#fff', lineHeight: 1.08, marginBottom: 32 }}>
            Ohrid —<br /><em style={{ color: '#7ec8e8' }}>Europe's Jerusalem</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginBottom: 32 }}>
            {[{ n: '365', u: 'Churches' }, { n: '3M+', u: 'Years Old' }, { n: '2', u: 'UNESCO Titles' }, { n: '294m', u: 'Lake Depth' }].map(s => (
              <div key={s.n} className="reveal">
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 38, fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', marginTop: 3 }}>{s.u}</div>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(255,255,255,.65)', fontWeight: 300, marginBottom: 28 }}>
            Cradled in the mountains of North Macedonia, Ohrid is one of Europe's oldest, most enchanting cities. Its ancient lake — one of the world's oldest bodies of water — reflects a skyline of Byzantine churches and a medieval hilltop fortress.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Swimming', 'Sailing', 'Hiking', 'Wine Tasting', 'Cultural Tours', 'Diving'].map(t => (
              <span key={t} style={{ padding: '7px 16px', border: '1px solid rgba(201,162,39,.38)', color: 'var(--gold)', borderRadius: 2, fontSize: 11 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
