import { useState } from 'react';

const PHONE = '+38978123456';
const WA_URL = `https://wa.me/38978123456?text=${encodeURIComponent('Hello! I would like to inquire about your services at Boutique Hotel Nika.')}`;
const VIBER_URL = 'viber://chat?number=38978123456';

const SERVICES = [
  {
    title: 'AIRPORT TRANSFERS',
    desc: 'We offer comfortable and reliable transfers from Ohrid Airport and Skopje Airport directly to your door. Let us take care of your safe and stress-free journey.',
  },
  {
    title: 'TAXI BOOKING',
    desc: 'We arrange trusted local taxi services around Ohrid and the region, available 24/7 at competitive rates.',
  },
  {
    title: 'RESTAURANT & BOAT RESERVATIONS',
    desc: 'We secure tables at the best lakeside restaurants and arrange private boat excursions on Lake Ohrid for an unforgettable dining experience.',
  },
  {
    title: 'GUIDED CITY TOUR — OHRID',
    desc: 'Explore Ohrid\'s UNESCO-listed old town, ancient churches, and the Samuil Fortress with a knowledgeable local guide.',
  },
  {
    title: 'DAY TRIPS ACROSS NORTH MACEDONIA',
    desc: 'Discover Matka Canyon, Bitola, Mavrovo National Park, and more — we arrange comfortable private day trips to the region\'s finest destinations.',
  },
  {
    title: 'CAR RENTAL',
    desc: 'Explore at your own pace with our curated car rental arrangements. We help you select the right vehicle for your journey.',
  },
  {
    title: 'SPA & WELLNESS',
    desc: 'Enjoy in-room or nearby spa treatments, massage therapy, and wellness packages — the perfect complement to a lakeside retreat.',
  },
];

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" style={{ padding: '100px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 52px' }}>

        {/* Section label */}
        <p className="reveal" style={{ fontSize: 10, letterSpacing: '.32em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 56, textAlign: 'center' }}>
          What We Offer
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }} className="sm-1col">

          {/* LEFT — intro + contacts */}
          <div>
            <h2 className="reveal" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(24px,3vw,36px)', fontWeight: 400, color: '#1a1208', lineHeight: 1.35, marginBottom: 24 }}>
              Our Team — For Your Unforgettable Experience in Ohrid
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.85, color: '#6a5a50', fontWeight: 300, marginBottom: 36 }}>
              With a carefully curated offer of additional services, amenities, and activities, we strive to make your stay in Ohrid as pleasant and fulfilling as possible. For all information and reservations, please contact our reception or reach us directly.
            </p>

            {/* Contact buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={`tel:${PHONE}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '14px 24px', background: '#b8994a', color: '#fff', borderRadius: 2, textDecoration: 'none', fontSize: 14, fontWeight: 700, fontFamily: "'Lato',sans-serif", transition: 'filter .2s' }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'none'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15z"/></svg>
                {PHONE}
              </a>

              <a href={VIBER_URL} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '14px 24px', background: '#b8994a', color: '#fff', borderRadius: 2, textDecoration: 'none', fontSize: 14, fontWeight: 700, fontFamily: "'Lato',sans-serif", transition: 'filter .2s' }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'none'}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M11.398.002C8.45.065 3.78 1.066 1.85 5.245.85 7.35.508 9.45.474 11.604c-.045 2.156-.09 6.192 3.787 7.275h.004l-.004 1.67s-.027.725.45 1.06c.578.405 1.254.043 2.065-.744 0 0 .459-.497.937-.91 1.937 1.62 4.018 2.566 6.695 2.779 4.586.366 9.18-1.86 9.978-6.41C24.684 9.972 23.35 2.1 11.398.002z"/></svg>
                Viber
              </a>

              <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '14px 24px', background: '#b8994a', color: '#fff', borderRadius: 2, textDecoration: 'none', fontSize: 14, fontWeight: 700, fontFamily: "'Lato',sans-serif", transition: 'filter .2s' }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'none'}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT — accordion */}
          <div>
            {SERVICES.map((s, i) => (
              <div key={s.title} style={{ borderTop: '1px solid #e0d5c5' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 18, padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ fontSize: 18, color: '#b8994a', fontWeight: 300, lineHeight: 1, width: 20, flexShrink: 0 }}>
                    {open === i ? '−' : '+'}
                  </span>
                  <span style={{ fontSize: 12, letterSpacing: '.18em', color: '#b8994a', fontFamily: "'Lato',sans-serif", fontWeight: 700, textTransform: 'uppercase' }}>
                    {s.title}
                  </span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: 20, paddingLeft: 38, animation: 'fadeIn .25s ease' }}>
                    <p style={{ fontSize: 14, lineHeight: 1.8, color: '#6a5a50', fontWeight: 300 }}>{s.desc}</p>
                  </div>
                )}
              </div>
            ))}
            <div style={{ borderTop: '1px solid #e0d5c5' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
