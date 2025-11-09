import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import { Intro, Product, Achievements, About } from './components/Sections';

function App() {
  return (
    <div className="scroll-smooth antialiased">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Product />
        <Achievements />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
