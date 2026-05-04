import { useState } from 'react';
import { apartments } from '../data/apartments';
import AptCard from './AptCard';
import AptModal from './AptModal';

export default function Apartments() {
  const [modal, setModal] = useState(null);

  return (
    <section id="apartments" style={{ padding: '100px 52px', background: 'var(--cream)' }}>
      {modal && <AptModal apt={modal} onClose={() => setModal(null)} />}
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p className="reveal" style={{ fontSize: 10, letterSpacing: '.32em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 18 }}>Our Collection</p>
          <h2 className="reveal" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(38px,5vw,64px)', fontWeight: 300, color: 'var(--lake-deep)', letterSpacing: '-.02em', lineHeight: 1.05 }}>
            Curated Lakeside<br /><em>Sanctuaries</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(310px,1fr))', gap: 32 }}>
          {apartments.map((a, i) => <AptCard key={a.id} a={a} delay={i + 1} onOpen={setModal} />)}
        </div>
      </div>
    </section>
  );
}
