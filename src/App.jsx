import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import { Intro, Product, Achievements, About } from './components/Sections';
import AchievementsPage from './components/AchievementsPage';

function App() {
  return (
    <div className="scroll-smooth antialiased">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Product />
        <Achievements />
        <AchievementsPage />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
