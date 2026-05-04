import { useState } from 'react';
import { apartments } from '../data/apartments';

const NAV_H = 72;


const GUEST_OPTS = [
  { val: 'all', label: 'All',       icon: null },
  { val: '1-2', label: '1 – 2',    icon: '🧑' },
  { val: '3-4', label: '3 – 4',    icon: '👥' },
  { val: '5-6', label: '5 – 6',    icon: '👨‍👩‍👧‍👦' },
];

const CAT_OPTS = [
  { val: 'all',      label: 'All' },
  { val: 'standard', label: 'Standard' },
  { val: 'superior', label: 'Superior' },
  { val: 'deluxe',   label: 'Deluxe' },
];

const CAT_COLORS = { standard: '#5a8a5e', superior: '#2e6090', deluxe: '#b08828' };
const VIEW_LABELS = { lake: 'Lake', oldtown: 'Old Town', garden: 'Garden', pool: 'Pool', fortress: 'Fortress', panoramic: 'Panoramic' };

function Pill({ label, icon, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '8px 18px', borderRadius: 40, cursor: 'pointer',
      background: active ? '#0b2d47' : '#fff',
      color: active ? '#fff' : '#444',
      border: active ? '2px solid #0b2d47' : '1.5px solid #d0ccc6',
      fontSize: 12, fontFamily: "'Lato',sans-serif",
      fontWeight: active ? 700 : 400,
      boxShadow: active ? '0 2px 10px rgba(11,45,71,.25)' : '0 1px 4px rgba(0,0,0,.05)',
      transition: 'all .2s', whiteSpace: 'nowrap',
    }}>
      {icon && <span style={{ fontSize: 13 }}>{icon}</span>}
      {label}
    </button>
  );
}

export default function RoomsPage({ initialCategory, onOpen, onBack }) {
  const [category, setCategory] = useState(initialCategory);
  const [guests,   setGuests]   = useState('all');

  const filtered = apartments.filter(a => {
    if (category !== 'all' && a.category !== category) return false;
    if (guests === '1-2' && a.maxPersons > 2) return false;
    if (guests === '3-4' && (a.maxPersons < 3 || a.maxPersons > 4)) return false;
    if (guests === '5-6' && a.maxPersons < 5) return false;
    return true;
  });

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 3000, background: '#f5f0ea', overflowY: 'auto', animation: 'pageSlideUp .35s cubic-bezier(.25,.46,.45,.94)' }}>

      <div style={{ height: NAV_H }} />

      {/* Hero */}
      <div style={{ position: 'relative', background: 'linear-gradient(150deg,#071e30 0%,#0b2d47 45%,#1a5276 100%)', padding: '64px 52px 72px', textAlign: 'center' }}>
        <button onClick={onBack} style={{ position: 'absolute', top: 22, left: 40, display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', backdropFilter: 'blur(6px)', color: '#fff', padding: '8px 16px', borderRadius: 40, fontSize: 12, fontFamily: "'Lato',sans-serif", cursor: 'pointer', letterSpacing: '.04em' }}>
          ← Back
        </button>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '-.01em' }}>
          Our Apartments
        </h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,.65)', fontWeight: 300 }}>
          Browse and filter to find your perfect stay.
        </p>
      </div>

      {/* Sticky filter bar */}
      <div style={{ position: 'sticky', top: NAV_H, zIndex: 20, background: '#fff', borderBottom: '1px solid #e8e0d8', padding: '20px 52px', boxShadow: '0 2px 16px rgba(0,0,0,.06)' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#999', fontFamily: "'Lato',sans-serif", fontWeight: 700, width: 70, flexShrink: 0 }}>Category</span>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {CAT_OPTS.map(o => <Pill key={o.val} label={o.label} active={category === o.val} onClick={() => setCategory(o.val)} />)}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#999', fontFamily: "'Lato',sans-serif", fontWeight: 700, width: 70, flexShrink: 0 }}>Guests</span>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {GUEST_OPTS.map(o => <Pill key={o.val} label={o.label} icon={o.icon} active={guests === o.val} onClick={() => setGuests(o.val)} />)}
          </div>
        </div>
      </div>

      {/* Results */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 52px 80px' }}>
        <p style={{ fontSize: 12, color: '#999', marginBottom: 28, fontFamily: "'Lato',sans-serif" }}>
          {filtered.length} apartment{filtered.length !== 1 ? 's' : ''} found
        </p>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#999' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
            <p style={{ fontSize: 16 }}>No rooms match your filters.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(310px,1fr))', gap: 28 }}>
            {filtered.map(a => <RoomCard key={a.id} a={a} onOpen={onOpen} />)}
          </div>
        )}
      </div>
    </div>
  );
}

function RoomCard({ a, onOpen }) {
  const [hov, setHov] = useState(false);

  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: '#fff', borderRadius: 4, overflow: 'hidden', boxShadow: hov ? '0 24px 48px rgba(11,45,71,.18)' : '0 4px 20px rgba(11,45,71,.07)', transition: 'box-shadow .3s, transform .3s', transform: hov ? 'translateY(-5px)' : 'none' }}>

      <div style={{ height: 220, position: 'relative', overflow: 'hidden' }}>
        <img src={a.heroImg} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .65s ease', transform: hov ? 'scale(1.06)' : 'scale(1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: a.overlay }} />
        <div style={{ position: 'absolute', top: 14, left: 14, background: CAT_COLORS[a.category], color: '#fff', fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, padding: '4px 12px', borderRadius: 30 }}>
          {a.category}
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 18px' }}>
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: '#fff', fontWeight: 500 }}>{a.name}</p>
        </div>
      </div>

      <div style={{ display: 'flex', background: '#faf6f0', borderBottom: '1px solid #ede5d8' }}>
        {[
          { i: '🛏', v: `${a.beds} Bed${a.beds > 1 ? 's' : ''}` },
          { i: '👤', v: `Up to ${a.maxPersons}` },
          { i: '📐', v: `${a.sqm} m²` },
          { i: '👁',  v: VIEW_LABELS[a.view] || a.view },
        ].map((s, idx, arr) => (
          <div key={s.v} style={{ flex: 1, padding: '11px 4px', textAlign: 'center', borderRight: idx < arr.length - 1 ? '1px solid #ede5d8' : 'none' }}>
            <div style={{ fontSize: 14 }}>{s.i}</div>
            <div style={{ fontSize: 10, color: '#8a7a6e', marginTop: 2 }}>{s.v}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '18px 20px' }}>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#7a6a5e', fontWeight: 300, marginBottom: 14 }}>{a.desc.slice(0, 100)}…</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: '#0b2d47', fontWeight: 600 }}>€{a.price}</span>
            <span style={{ fontSize: 11, color: '#999' }}> /night</span>
          </div>
          <button onClick={() => onOpen(a)} style={{ padding: '11px 22px', background: hov ? 'linear-gradient(135deg,#c9a227,#e8c560)' : '#0b2d47', color: hov ? '#1a1208' : '#fff', border: 'none', borderRadius: 3, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer', fontFamily: "'Lato',sans-serif", transition: 'all .25s' }}>
            View Room →
          </button>
        </div>
      </div>
    </div>
  );
}
