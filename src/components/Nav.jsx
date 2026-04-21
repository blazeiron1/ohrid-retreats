export default function Nav({ scrolled }) {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
      padding: '18px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(11,45,71,.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      boxShadow: scrolled ? '0 2px 28px rgba(0,0,0,.35)' : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#2e86c1,#c9a227)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🌊</div>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 21, fontWeight: 500, color: '#fff', letterSpacing: '.04em' }}>Park Queens Apartments Ohrid</span>
      </div>
      <div className="hide-sm" style={{ display: 'flex', gap: 40 }}>
        {['Apartments', 'About', 'Amenities', 'Gallery', 'Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="nav-link"
            style={{ color: 'rgba(255,255,255,.8)', textDecoration: 'none', fontSize: 11, fontWeight: 400, letterSpacing: '.18em', textTransform: 'uppercase' }}>
            {l}
          </a>
        ))}
      </div>
      <a href="#contact" className="hide-sm btn-gold"
        style={{ padding: '10px 26px', background: 'linear-gradient(135deg,#c9a227,#e8c560)', color: '#1a1208', borderRadius: 2, textDecoration: 'none', fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}>
        Book Now
      </a>
    </nav>
  );
}
