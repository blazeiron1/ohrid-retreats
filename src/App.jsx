import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import PhotoStrip from './components/PhotoStrip';
import Rooms from './components/Rooms';
import ParallaxStrip1 from './components/ParallaxStrip1';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ParallaxStrip2 from './components/ParallaxStrip2';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll);

    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: .1 }
    );
    setTimeout(() => document.querySelectorAll('.reveal').forEach(el => io.observe(el)), 100);

    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  return (
    <div>
      <Nav scrolled={scrolled} />
      <Hero />
      <PhotoStrip />
      <Rooms />
      <ParallaxStrip1 />
      <About />
      <Services />
      <Gallery />
      <ParallaxStrip2 />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
