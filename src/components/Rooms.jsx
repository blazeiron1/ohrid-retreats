import { useState } from 'react';
import { apartments } from '../data/apartments';
import RoomsPage from './RoomsPage';
import RoomDetail from './RoomDetail';

const CATEGORIES = [
  {
    key: 'standard',
    label: 'Standard',
    from: 70,
    beds: '1 Bedroom',
    guests: 'Up to 2 Guests',
    desc: 'Comfortable rooms for couples with essential amenities and beautiful views of Ohrid.',
    img: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overlay: 'linear-gradient(0deg,rgba(11,45,71,.82) 0%,rgba(11,45,71,.18) 60%)',
    count: apartments.filter(a => a.category === 'standard').length,
  },
  {
    key: 'superior',
    label: 'Superior',
    from: 125,
    beds: '2 Bedrooms',
    guests: 'Up to 4 Guests',
    desc: 'Spacious suites for families with premium features, full kitchens, and private outdoor space.',
    img: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overlay: 'linear-gradient(0deg,rgba(26,50,80,.85) 0%,rgba(26,50,80,.15) 60%)',
    count: apartments.filter(a => a.category === 'superior').length,
  },
  {
    key: 'deluxe',
    label: 'Deluxe',
    from: 185,
    beds: '3 Bedrooms',
    guests: 'Up to 6 Guests',
    desc: 'Luxurious apartments with panoramic views, spa baths, and personal concierge service.',
    img: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overlay: 'linear-gradient(0deg,rgba(46,29,0,.88) 0%,rgba(46,29,0,.15) 60%)',
    count: apartments.filter(a => a.category === 'deluxe').length,
  },
];

export default function Rooms() {
  const [browse, setBrowse] = useState(null);
  const [detail, setDetail] = useState(null);

  if (detail) {
    return <RoomDetail apt={detail} onClose={() => setDetail(null)} />;
  }
  if (browse !== null) {
    return <RoomsPage initialCategory={browse} onOpen={setDetail} onBack={() => setBrowse(null)} />;
  }

  return (
    <section id="rooms" style={{ padding: '100px 52px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p className="reveal" style={{ fontSize: 10, letterSpacing: '.32em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 18 }}>Our Collection</p>
          <h2 className="reveal" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(38px,5vw,64px)', fontWeight: 300, color: 'var(--lake-deep)', letterSpacing: '-.02em', lineHeight: 1.05 }}>
            Choose Your<br /><em>Perfect Room</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 28 }}>
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.key} cat={cat} delay={i + 1} onSelect={() => setBrowse(cat.key)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ cat, delay, onSelect }) {
  const [hov, setHov] = useState(false);

  return (
    <div className={`reveal reveal-delay-${delay}`}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={onSelect}
      style={{ borderRadius: 3, overflow: 'hidden', cursor: 'pointer', position: 'relative', height: 460, boxShadow: hov ? '0 32px 64px rgba(0,0,0,.3)' : '0 10px 40px rgba(0,0,0,.15)', transition: 'box-shadow .35s, transform .35s', transform: hov ? 'translateY(-6px)' : 'none' }}>

      {/* Background image */}
      <img src={cat.img} alt={cat.label}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .7s ease', transform: hov ? 'scale(1.06)' : 'scale(1)' }} />

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: cat.overlay, transition: 'opacity .35s', opacity: hov ? .92 : 1 }} />

      {/* Top badges */}
      <div style={{ position: 'absolute', top: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.2)', padding: '6px 14px', borderRadius: 20 }}>
          <span style={{ fontSize: 10, color: '#fff', letterSpacing: '.14em', textTransform: 'uppercase' }}>{cat.count} Rooms</span>
        </div>
        <div style={{ background: 'rgba(201,162,39,.18)', backdropFilter: 'blur(8px)', border: '1px solid rgba(201,162,39,.4)', padding: '6px 14px', borderRadius: 20 }}>
          <span style={{ fontSize: 10, color: '#e8c560', letterSpacing: '.1em' }}>from €{cat.from}/night</span>
        </div>
      </div>

      {/* Bottom content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 28px' }}>
        <p style={{ fontSize: 10, letterSpacing: '.3em', color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', marginBottom: 8 }}>{cat.beds} · {cat.guests}</p>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 38, color: '#fff', fontWeight: 300, marginBottom: 10, letterSpacing: '-.01em' }}>{cat.label}</h3>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.65, marginBottom: 24 }}>{cat.desc}</p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 24px', background: hov ? 'linear-gradient(135deg,#c9a227,#e8c560)' : 'rgba(255,255,255,.12)', backdropFilter: 'blur(8px)', borderRadius: 2, border: hov ? 'none' : '1px solid rgba(255,255,255,.3)', transition: 'all .3s' }}>
          <span style={{ fontSize: 11, color: hov ? '#1a1208' : '#fff', letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: hov ? 600 : 400, fontFamily: "'Lato',sans-serif" }}>View Apartments</span>
          <span style={{ fontSize: 14, color: hov ? '#1a1208' : '#fff' }}>→</span>
        </div>
      </div>
    </div>
  );
}
