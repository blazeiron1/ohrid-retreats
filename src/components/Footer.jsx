export default function Footer() {
  return (
    <footer style={{ padding: '44px 52px', background: '#040c15', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#2e86c1,#c9a227)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🌊</div>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 500, color: '#fff' }}>Park Queens Apartments Ohrid</span>
      </div>
      <div style={{ display: 'flex', gap: 32 }}>
        {['Privacy', 'Terms', 'Contact'].map(l => (
          <a key={l} href="#"
            style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none', fontSize: 12, letterSpacing: '.1em', transition: 'color .3s' }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,.75)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.35)'}>
            {l}
          </a>
        ))}
      </div>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,.22)' }}>© 2025 Park Queens Apartments Ohrid · Ohrid, North Macedonia</p>
    </footer>
  );
}
