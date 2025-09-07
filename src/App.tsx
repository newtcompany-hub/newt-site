import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-inter bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <About />
        </section>
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <Services />
        </section>
        <section className="py-12 sm:py-16 lg:py-20 bg-newt-black">
          <Products />
        </section>
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <FAQ />
        </section>
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
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