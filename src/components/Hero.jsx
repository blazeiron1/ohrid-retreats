import { P } from '../data/photos';

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 680, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <img src={P.hero} alt="Lake Ohrid"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%', animation: 'kenBurns 18s ease-in-out infinite alternate' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(5,18,32,.6) 0%,rgba(8,28,50,.35) 40%,rgba(5,15,28,.7) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: 980 }}>
        <p style={{ fontSize: 10, letterSpacing: '.38em', textTransform: 'uppercase', color: '#c9a227', marginBottom: 22, animation: 'fadeUp .8s ease both' }}>
          Luxury Lakeside Living · Ohrid, North Macedonia
        </p>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(52px,9.5vw,112px)', fontWeight: 300, lineHeight: .88, letterSpacing: '-.025em', color: '#fff', animation: 'fadeUp .9s ease .18s both' }}>
          Where the<br />
          <em style={{ fontStyle: 'italic', color: '#fff' }}>Lake</em> Meets<br />
          <span style={{ color: '#fff' }}>Luxury</span>
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,.65)', maxWidth: 500, margin: '28px auto 48px', animation: 'fadeUp .9s ease .36s both' }}>
          Curated apartments in the heart of Ohrid — a UNESCO World Heritage city on the shores of Europe's oldest, deepest lake.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeUp .9s ease .52s both' }}>
          <a href="#apartments" className="btn-gold"
            style={{ padding: '15px 44px', background: 'linear-gradient(135deg,#c9a227,#e8c560)', color: '#1a1208', borderRadius: 2, textDecoration: 'none', fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase' }}>
            Explore Apartments
          </a>
          <a href="#about"
            style={{ padding: '15px 44px', border: '1px solid rgba(255,255,255,.28)', color: 'rgba(255,255,255,.82)', borderRadius: 2, textDecoration: 'none', fontSize: 11, fontWeight: 300, letterSpacing: '.16em', textTransform: 'uppercase', transition: 'border-color .3s,background .3s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.75)'; e.currentTarget.style.background = 'rgba(255,255,255,.07)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.28)'; e.currentTarget.style.background = 'transparent'; }}>
            Discover Ohrid
          </a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'fadeIn 1.5s ease 1.4s both' }}>
        <span style={{ fontSize: 9, letterSpacing: '.22em', color: 'rgba(255,255,255,.38)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 38, background: 'linear-gradient(180deg,rgba(255,255,255,.4),transparent)', animation: 'float 2.4s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
