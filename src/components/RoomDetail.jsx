import { useState, useEffect, useRef } from 'react';

const NAV_H = 72;
const PHONE = '38978123456';
const WA_URL = name => `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello! I'm interested in the ${name} at Boutique Hotel Nika.`)}`;
const VIBER_URL = `viber://chat?number=${PHONE}`;

const VIEW_LABELS = {
  lake: 'Lake View', oldtown: 'Old Town View', garden: 'Garden View',
  pool: 'Pool View', fortress: 'Fortress View', panoramic: 'Panoramic View',
};

const FEAT_ICONS = {
  'lake view': '🌊', 'panoramic lake view': '🌊', '360° panoramic view': '🌄',
  'old town view': '🏛', 'garden view': '🌿', 'private garden': '🌿',
  'pool view': '🏊', 'fortress view': '🏰', 'full kitchen': '🍳',
  'kitchenette': '🍳', 'a/c': '❄️', 'private terrace': '🌅',
  'rooftop terrace': '🌅', 'private rooftop': '🌅', 'balcony': '🌇',
  'private balcony': '🌇', 'parking': '🚗', 'netflix': '📺', 'smart tv': '📺',
  'free wi-fi': '📶', 'coffee maker': '☕', 'espresso machine': '☕',
  'washer': '🧺', 'spa bath': '🛁', 'concierge': '🎩', 'wine bar': '🍷',
  'home theater': '🎬', 'butler service': '🛎', 'bbq area': '🔥',
  'outdoor dining': '🍽', 'outdoor shower': '🚿', 'direct pool access': '🏊',
  'pool access': '🏊', 'stone interior': '🪨', 'two bedrooms': '🛏',
  'three bedrooms': '🛏', 'queen bed': '🛏', 'stone walls': '🪨',
};
const featIcon = f => FEAT_ICONS[f.toLowerCase()] || '✓';

const CAT_COLORS = { standard: '#5a8a5e', superior: '#2e6090', deluxe: '#b08828' };

export default function RoomDetail({ apt, onClose }) {
  const [slide, setSlide] = useState(0);
  const [form, setForm] = useState({ name: '', phone: '', checkin: '', checkout: '', message: '' });
  const [sent, setSent] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current?.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    const handler = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, []);

  const inp = { width: '100%', padding: '11px 14px', border: '1px solid #d4c8b8', borderRadius: 2, fontSize: 13, fontFamily: "'Lato',sans-serif", background: '#fff', color: '#1a1208', outline: 'none', transition: 'border-color .25s, box-shadow .25s' };
  const focus = e => { e.target.style.borderColor = '#5dade2'; e.target.style.boxShadow = '0 0 0 3px rgba(93,173,226,.18)'; };
  const blur  = e => { e.target.style.borderColor = '#d4c8b8'; e.target.style.boxShadow = 'none'; };
  const lbl   = t => <label style={{ fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: '#8a7a6e', display: 'block', marginBottom: 6 }}>{t}</label>;

  return (
    <div ref={containerRef} style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'var(--cream)', overflowY: 'auto', animation: 'pageSlideUp .38s cubic-bezier(.25,.46,.45,.94)' }}>

      {/* spacer for nav */}
      <div style={{ height: NAV_H }} />

      {/* Sub-header — sticks right below nav */}
      <div style={{ position: 'sticky', top: NAV_H, zIndex: 20, background: 'rgba(250,246,240,.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e8ddd0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 52px', gap: 16 }}>
        <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', color: '#0b2d47', fontSize: 13, fontFamily: "'Lato',sans-serif", letterSpacing: '.04em', padding: '4px 0', whiteSpace: 'nowrap' }}>
          ← Back to Rooms
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, justifyContent: 'center', minWidth: 0 }}>
          <span style={{ background: CAT_COLORS[apt.category], color: '#fff', fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 20, fontWeight: 600, whiteSpace: 'nowrap' }}>{apt.category}</span>
          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(15px,2vw,21px)', color: '#0b2d47', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{apt.name}</span>
        </div>
        <div style={{ whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: '#0b2d47', fontWeight: 500 }}>€{apt.price}</span>
          <span style={{ fontSize: 11, color: '#8a7a6e' }}>/night</span>
        </div>
      </div>

      {/* Gallery carousel */}
      <div style={{ position: 'relative', height: 'clamp(260px,42vh,500px)', background: '#111', overflow: 'hidden' }}>
        <img src={apt.gallery[slide]} alt={apt.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity .35s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: apt.overlay, pointerEvents: 'none' }} />
        {apt.gallery.length > 1 && <>
          <button onClick={() => setSlide(s => (s - 1 + apt.gallery.length) % apt.gallery.length)} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,.45)', border: 'none', color: '#fff', width: 42, height: 42, borderRadius: '50%', cursor: 'pointer', fontSize: 22, backdropFilter: 'blur(4px)' }}>‹</button>
          <button onClick={() => setSlide(s => (s + 1) % apt.gallery.length)} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,.45)', border: 'none', color: '#fff', width: 42, height: 42, borderRadius: '50%', cursor: 'pointer', fontSize: 22, backdropFilter: 'blur(4px)' }}>›</button>
        </>}
        <div style={{ position: 'absolute', bottom: 16, right: 20, display: 'flex', gap: 6 }}>
          {apt.gallery.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} style={{ width: i === slide ? 22 : 7, height: 7, borderRadius: 4, background: i === slide ? '#c9a227' : 'rgba(255,255,255,.5)', border: 'none', cursor: 'pointer', transition: 'all .3s' }} />
          ))}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${apt.gallery.length},1fr)`, gap: 3, background: '#1a1a1a' }}>
        {apt.gallery.map((src, i) => (
          <div key={i} onClick={() => setSlide(i)} style={{ height: 72, overflow: 'hidden', cursor: 'pointer', opacity: i === slide ? 1 : .5, transition: 'opacity .25s', border: i === slide ? '2px solid #c9a227' : '2px solid transparent' }}>
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '52px 52px 0' }}>
        <div className="detail-cols" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.45fr) minmax(0,1fr)', gap: 52, alignItems: 'start' }}>

          {/* LEFT */}
          <div>
            {/* Stats */}
            <div style={{ display: 'flex', flexWrap: 'wrap', background: '#fff', borderRadius: 3, overflow: 'hidden', boxShadow: '0 2px 16px rgba(11,45,71,.07)', marginBottom: 36 }}>
              {[
                { i: '🛏', label: 'Bedrooms', v: `${apt.beds} Bed${apt.beds > 1 ? 's' : ''}` },
                { i: '👤', label: 'Guests',   v: `Up to ${apt.maxPersons}` },
                { i: '📐', label: 'Size',     v: `${apt.sqm} m²` },
                { i: '👁',  label: 'View',    v: VIEW_LABELS[apt.view] || apt.view },
                { i: '🏢', label: 'Floor',    v: `Floor ${apt.floor}` },
              ].map((s, idx, arr) => (
                <div key={s.label} style={{ flex: '1 1 80px', padding: '18px 10px', textAlign: 'center', borderRight: idx < arr.length - 1 ? '1px solid #f0e8dc' : 'none' }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{s.i}</div>
                  <div style={{ fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: '#a09080', marginBottom: 3 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: '#3a2a20', fontWeight: 500 }}>{s.v}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontSize: 9, letterSpacing: '.28em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 14 }}>About This Room</p>
              <p style={{ fontSize: 16, lineHeight: 1.9, color: '#5a4a40', fontWeight: 300 }}>{apt.desc}</p>
            </div>

            {/* Features */}
            <div style={{ marginBottom: 52 }}>
              <p style={{ fontSize: 9, letterSpacing: '.28em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 20 }}>Room Features</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(155px,1fr))', gap: 10 }}>
                {apt.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', padding: '12px 14px', borderRadius: 3, boxShadow: '0 1px 6px rgba(11,45,71,.06)', border: '1px solid #f0e8dc' }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{featIcon(f)}</span>
                    <span style={{ fontSize: 12, color: '#4a3a30', lineHeight: 1.3 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — contact panel */}
          <div style={{ position: 'sticky', top: NAV_H + 60 }}>
            <div style={{ background: '#fff', borderRadius: 4, boxShadow: '0 8px 40px rgba(11,45,71,.12)', overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(135deg,#0b2d47,#1a5276)', padding: '24px 28px' }}>
                <p style={{ fontSize: 10, letterSpacing: '.2em', color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', marginBottom: 6 }}>Starting from</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 40, color: '#fff', fontWeight: 400 }}>€{apt.price}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,.6)' }}>/ night</span>
                </div>
              </div>

              <div style={{ padding: '24px 28px' }}>
                <p style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8a7a6e', marginBottom: 12 }}>Contact Us Instantly</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
                  <a href={WA_URL(apt.name)} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '13px 20px', background: '#25D366', color: '#fff', borderRadius: 3, textDecoration: 'none', fontSize: 13, fontWeight: 700, fontFamily: "'Lato',sans-serif" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                    WhatsApp
                  </a>
                  <a href={VIBER_URL}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '13px 20px', background: '#7360f2', color: '#fff', borderRadius: 3, textDecoration: 'none', fontSize: 13, fontWeight: 700, fontFamily: "'Lato',sans-serif" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.398.002C8.45.065 3.78 1.066 1.85 5.245.85 7.35.508 9.45.474 11.604c-.045 2.156-.09 6.192 3.787 7.275h.004l-.004 1.67s-.027.725.45 1.06c.578.405 1.254.043 2.065-.744 0 0 .459-.497.937-.91 1.937 1.62 4.018 2.566 6.695 2.779 4.586.366 9.18-1.86 9.978-6.41C24.684 9.972 23.35 2.1 11.398.002zm.37 17.71c-2.34-.208-4.12-1.19-5.506-2.693l-.004-.004-1.527 1.62c-.094.097-.22.14-.328.088-.108-.053-.145-.177-.145-.305l.07-3.198c-2.877-.834-2.977-4.196-2.96-6.09.03-1.857.317-3.67 1.116-5.35C3.972 1.13 8.048.228 11.57.1c5.54-.228 10.34 2.516 11.087 8.26.81 6.18-2.95 9.49-7.71 9.71-.71.03-1.42.02-2.11-.08-.36-.05-.72-.12-1.07-.22v-.054zm2.81-5.053c-.138.066-.277.098-.412.098-.28 0-.55-.126-.75-.36l-1.7-2.02c-.254-.305-.22-.77.086-1.024.305-.254.77-.22 1.024.086l1.07 1.273c.82-.955 1.56-2.02 2.154-3.168.192-.37.647-.518 1.017-.326.37.192.518.647.326 1.017-.765 1.468-1.72 2.77-2.815 3.424z"/></svg>
                    Viber
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <div style={{ flex: 1, height: 1, background: '#e8ddd0' }} />
                  <span style={{ fontSize: 10, color: '#a09080', whiteSpace: 'nowrap' }}>or send a message</span>
                  <div style={{ flex: 1, height: 1, background: '#e8ddd0' }} />
                </div>

                {sent ? (
                  <div style={{ textAlign: 'center', padding: '28px 16px', background: 'rgba(201,162,39,.07)', border: '1px solid rgba(201,162,39,.25)', borderRadius: 3 }}>
                    <div style={{ fontSize: 36, marginBottom: 10 }}>✉️</div>
                    <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: '#0b2d47', marginBottom: 8 }}>Message Sent!</p>
                    <p style={{ fontSize: 13, color: '#6a5a50', lineHeight: 1.7 }}>We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                    <div>{lbl('Your Name')}<input style={inp} type="text" placeholder="Full name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={focus} onBlur={blur} /></div>
                    <div>{lbl('Phone / Email')}<input style={inp} type="text" placeholder="+389 78 ..." required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} onFocus={focus} onBlur={blur} /></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                      <div>{lbl('Check-in')}<input style={inp} type="date" value={form.checkin} onChange={e => setForm({ ...form, checkin: e.target.value })} onFocus={focus} onBlur={blur} /></div>
                      <div>{lbl('Check-out')}<input style={inp} type="date" value={form.checkout} onChange={e => setForm({ ...form, checkout: e.target.value })} onFocus={focus} onBlur={blur} /></div>
                    </div>
                    <div>{lbl('Message')}<textarea style={{ ...inp, minHeight: 72, resize: 'vertical' }} placeholder="Any special requests…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={focus} onBlur={blur} /></div>
                    <button type="submit" className="btn-gold" style={{ width: '100%', padding: '13px', background: 'linear-gradient(135deg,#c9a227,#e8c560)', color: '#1a1208', border: 'none', borderRadius: 2, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer', fontFamily: "'Lato',sans-serif", marginTop: 4 }}>
                      Send Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* All Photos */}
        <div style={{ marginTop: 64, paddingBottom: 80 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
            <p style={{ fontSize: 9, letterSpacing: '.28em', color: 'var(--gold)', textTransform: 'uppercase' }}>All Photos</p>
            <div style={{ flex: 1, height: 1, background: '#e0d5c5' }} />
            <span style={{ fontSize: 11, color: '#a09080' }}>{apt.gallery.length} photos</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12 }}>
            {apt.gallery.map((src, i) => (
              <div key={i} onClick={() => { setSlide(i); containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ borderRadius: 3, overflow: 'hidden', cursor: 'pointer', aspectRatio: '4/3', border: i === slide ? '3px solid #c9a227' : '3px solid transparent', transition: 'border-color .25s, transform .25s', transform: 'scale(1)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <img src={src} alt={`${apt.name} photo ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
