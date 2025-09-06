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
    // Optimized scroll reveal animations with Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for better performance
          requestAnimationFrame(() => {
            entry.target.classList.add('animate-reveal');
          });
          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections except hero
    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-8');
      observer.observe(section);
    });

    // Preload critical images
    const criticalImages = [
      '/Logo Completa Newt Company.png',
      '/ícone de newtmind.svg',
      '/ícone do newtflow.svg'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Clean up
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
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Column */}
              <div>
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;