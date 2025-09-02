import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Add scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, observerOptions);

    // Observe all sections except hero
    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-8');
      observer.observe(section);
    });

    // Clean up
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-inter bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;