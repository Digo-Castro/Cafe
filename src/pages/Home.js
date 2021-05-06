import React from 'react';

import About from '../components/About';
import BootstrapCarousel from '../components/BootstrapCarousel';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Location from '../components/Location';

export default function Home() {
  return (
    <main>
      <Hero />
      <Header />
      <About />
      <BootstrapCarousel />
      <Location />
      <Contact />
    </main>
  );
}
