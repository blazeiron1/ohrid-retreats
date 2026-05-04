import { useState } from 'react';
import { P } from '../data/photos';
import { apartments } from '../data/apartments';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', checkin: '', checkout: '', guests: '2', apt: '', notes: '' });
  const [sent, setSent] = useState(false);

  const inp = { width: '100%', padding: '13px 18px', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 2, color: '#fff', fontSize: 14, fontFamily: "'Lato',sans-serif", outline: 'none', transition: 'border-color .3s,box-shadow .3s' };
  const focus = e => { e.target.style.borderColor = '#5dade2'; e.target.style.boxShadow = '0 0 0 3px rgba(93,173,226,.18)'; };
  const blur  = e => { e.target.style.borderColor = 'rgba(255,255,255,.14)'; e.target.style.boxShadow = 'none'; };
  const lbl   = txt => <label style={{ fontSize: 9, letterSpacing: '.18em', color: 'rgba(255,255,255,.45)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>{txt}</label>;

  return (
    <section id="contact" style={{ background: 'linear-gradient(145deg,#1a5276,#0b2d47 60%,#061525)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap' }} className="sm-col">

        <div style={{ flex: '1 1 380px', position: 'relative', minHeight: 560, overflow: 'hidden' }}>
          <img src={P.contactImg} alt="Ohrid terrace view" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(11,45,71,.15),rgba(11,45,71,.72))' }}>
            <div style={{ position: 'absolute', bottom: 52, left: 44 }}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 40, fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>
                Begin Your<br /><em style={{ color: '#7ec8e8' }}>Ohrid Story</em>
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.7, maxWidth: 260, marginBottom: 24 }}>
                We personally curate every stay.<br />Expect a reply within 24 hours.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {[P.ex1, P.gal6, P.gal3].map((src, i) => (
                  <div key={i} style={{ width: 64, height: 64, borderRadius: 3, overflow: 'hidden', border: '2px solid rgba(201,162,39,.5)' }}>
                    <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 420px', padding: '70px 52px' }}>
          <p style={{ fontSize: 10, letterSpacing: '.32em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 22 }}>Reserve Your Stay</p>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '56px 32px', background: 'rgba(201,162,39,.08)', border: '1px solid rgba(201,162,39,.28)', borderRadius: 4, animation: 'fadeIn .6s ease' }}>
              <div style={{ fontSize: 52, marginBottom: 20, animation: 'float 2.5s ease-in-out infinite' }}>🌊</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, color: '#fff', fontWeight: 300, marginBottom: 12 }}>Request Received</h3>
              <p style={{ color: 'rgba(255,255,255,.6)', lineHeight: 1.8, fontSize: 15 }}>We'll confirm your reservation within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="sm-1col">
                <div>{lbl('Full Name')}<input className="form-inp" style={inp} type="text" placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={focus} onBlur={blur} /></div>
                <div>{lbl('Email')}<input className="form-inp" style={inp} type="email" placeholder="you@email.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={focus} onBlur={blur} /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="sm-1col">
                <div>{lbl('Check-in')}<input className="form-inp" style={inp} type="date" value={form.checkin} onChange={e => setForm({ ...form, checkin: e.target.value })} onFocus={focus} onBlur={blur} /></div>
                <div>{lbl('Check-out')}<input className="form-inp" style={inp} type="date" value={form.checkout} onChange={e => setForm({ ...form, checkout: e.target.value })} onFocus={focus} onBlur={blur} /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="sm-1col">
                <div>{lbl('Guests')}
                  <select className="form-inp" style={{ ...inp, cursor: 'pointer' }} value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} onFocus={focus} onBlur={blur}>
                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n} style={{ background: '#0b2d47' }}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
                <div>{lbl('Apartment')}
                  <select className="form-inp" style={{ ...inp, cursor: 'pointer' }} value={form.apt} onChange={e => setForm({ ...form, apt: e.target.value })} onFocus={focus} onBlur={blur}>
                    <option value="" style={{ background: '#0b2d47' }}>Select...</option>
                    {apartments.map(a => <option key={a.id} value={a.name} style={{ background: '#0b2d47' }}>{a.name} — €{a.price}/n</option>)}
                    <option value="flex" style={{ background: '#0b2d47' }}>I'm flexible</option>
                  </select>
                </div>
              </div>
              <div>{lbl('Special Requests')}
                <textarea className="form-inp" style={{ ...inp, minHeight: 100, resize: 'vertical' }}
                  placeholder="Dietary needs, late arrival, celebrations…"
                  value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} onFocus={focus} onBlur={blur} />
              </div>
              <button type="submit" className="btn-gold"
                style={{ padding: '17px', background: 'linear-gradient(135deg,#c9a227,#e8c560)', color: '#1a1208', border: 'none', borderRadius: 2, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer', fontFamily: "'Lato',sans-serif", marginTop: 4 }}>
                Send Reservation Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
