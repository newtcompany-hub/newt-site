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
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-8');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-inter bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <FAQ />
        <FAQ />
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;