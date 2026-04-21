import { useState, useEffect, useRef, useCallback } from 'react';
import { P } from '../data/photos';
import { reviews } from '../data/reviews';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const intervalRef = useRef(null);

  const goTo = useCallback(idx => {
    setActive(idx);
    setAnimKey(k => k + 1);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(a => {
        const next = (a + 1) % reviews.length;
        setAnimKey(k => k + 1);
        return next;
      });
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const r = reviews[active];

  return (
    <section style={{ position: 'relative', padding: '110px 52px', overflow: 'hidden' }}>
      <img src={P.testBg} alt="Lake" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,14,26,.85)' }} />

      <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p className="reveal" style={{ fontSize: 10, letterSpacing: '.32em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 18 }}>Guest Stories</p>
        <h2 className="reveal" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, color: '#fff', marginBottom: 56 }}>
          What Guests Say
        </h2>

        <div style={{ background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 4, padding: '52px 60px', position: 'relative', minHeight: 240 }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 80, color: 'var(--gold)', opacity: .28, position: 'absolute', top: 8, left: 34, lineHeight: 1 }}>"</div>

          <div key={animKey} style={{ animation: 'fadeUp .5s ease both' }}>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(17px,2.4vw,22px)', fontStyle: 'italic', color: 'rgba(255,255,255,.9)', lineHeight: 1.75, marginBottom: 28 }}>
              {r.quote}
            </p>
            <p style={{ color: '#fff', fontWeight: 500, fontSize: 14 }}>{r.name}</p>
            <p style={{ color: 'var(--gold)', fontSize: 12, marginTop: 4, letterSpacing: '.1em' }}>{r.city}</p>
            <div style={{ marginTop: 10 }}>{'★★★★★'.split('').map((_, i) => <span key={i} style={{ color: 'var(--gold)', fontSize: 13 }}>★</span>)}</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 28 }}>
          {reviews.map((_, i) => (
            <button key={i}
              onClick={() => { clearInterval(intervalRef.current); goTo(i); }}
              style={{ width: i === active ? 26 : 8, height: 8, borderRadius: 4, background: i === active ? 'var(--gold)' : 'rgba(255,255,255,.25)', border: 'none', cursor: 'pointer', transition: 'all .3s ease' }} />
          ))}
        </div>
        <p style={{ fontSize: 10, color: 'rgba(255,255,255,.3)', marginTop: 16, letterSpacing: '.12em' }}>AUTO-SCROLLING · CLICK DOT TO SELECT</p>
      </div>
    </section>
  );
}
