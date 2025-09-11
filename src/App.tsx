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
      <main role="main">
        <Hero />
        <section className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">Sobre a Newt Company - Agência de IA e Automações</h2>
          <About />
        </section>
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">Serviços de Automação N8N e Marketing Digital</h2>
          <Services />
        </section>
        <section className="py-16 sm:py-20 lg:py-24 bg-newt-black px-4 sm:px-6 lg:px-8" aria-labelledby="products-heading">
          <h2 id="products-heading" className="sr-only">Produtos de IA e Automação</h2>
          <Products />
        </section>
        <section className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="sr-only">Perguntas Frequentes sobre Automações e IA</h2>
          <FAQ />
        </section>
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">Contato - Consultoria em IA e Automações</h2>
          <div className="container mx-auto">
            <Contact />
          </div>
        </section>
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}

export default App;