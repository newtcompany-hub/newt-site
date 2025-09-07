import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import type { Locale } from '../i18n/translations';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale, setLocale, t } = useI18n();

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isLangMenuOpen && !target.closest('.language-selector')) {
        setIsLangMenuOpen(false);
      }
    };
    
    if (isLangMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isLangMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsLangMenuOpen(false);
  };

  const localeLabels = {
    'pt-BR': '🇧🇷',
    'pt-PT': '🇵🇹', 
    'en': '🇺🇸'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-black/70 backdrop-blur-sm'
    }`} role="banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16" role="navigation" aria-label="Menu principal">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm"
              aria-label="Newt Company - Voltar ao início"
            >
              <img 
                src="/Logo Completa Newt Company.png" 
                alt="Newt Company" 
                className="h-6 w-auto"
                loading="eager"
                decoding="async"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1">{t.nav.home}</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1">{t.nav.about}</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1">{t.nav.services}</button>
            <button onClick={() => scrollToSection('products')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1">{t.nav.products}</button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1">{t.nav.faq}</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1">{t.nav.contact}</button>
          </div>

          {/* Desktop CTA and Language Selector */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="text-white flex items-center space-x-1 hover:text-newt-red transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1"
                aria-label="Selecionar idioma"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium font-inter">{localeLabels[locale]}</span>
              </button>
              
              <div className={`absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-32 z-10 transition-all duration-200 ${
                isLangMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                  {(Object.keys(localeLabels) as Locale[]).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 font-inter ${
                        locale === loc ? 'text-newt-red bg-red-50' : 'text-gray-700'
                      }`}
                    >
                      {localeLabels[loc]}
                    </button>
                  ))}
              </div>
            </div>
            
            <a
              href="https://wa.me/5591998382662"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-newt-red hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 font-inter text-sm"
            >
              {t.nav.whatsapp}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="text-white flex items-center justify-center hover:text-newt-red transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm"
                aria-label="Selecionar idioma"
              >
                <Globe className="w-4 h-4" />
              </button>
              
              <div className={`absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-24 z-10 transition-all duration-200 ${
                isLangMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                  {(Object.keys(localeLabels) as Locale[]).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={`block w-full text-left px-2 py-1.5 text-xs hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 font-inter ${
                        locale === loc ? 'text-newt-red bg-red-50' : 'text-gray-700'
                      }`}
                    >
                      {localeLabels[loc]}
                    </button>
                  ))}
              </div>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-newt-red transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`lg:hidden bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
            <nav className="py-6">
              {/* Menu Items */}
              <div className="px-6 space-y-0">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none border-b border-gray-800 last:border-b-0"
                >
                  {t.nav.home}
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none border-b border-gray-800 last:border-b-0"
                >
                  {t.nav.about}
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none border-b border-gray-800 last:border-b-0"
                >
                  {t.nav.services}
                </button>
                <button 
                  onClick={() => scrollToSection('products')} 
                  className="block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none border-b border-gray-800 last:border-b-0"
                >
                  {t.nav.products}
                </button>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none border-b border-gray-800 last:border-b-0"
                >
                  {t.nav.faq}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none"
                >
                  {t.nav.contact}
                </button>
              </div>
              
              {/* Bottom Buttons */}
              <div className="px-6 mt-8 space-y-3">
                <a
                  href="https://wa.me/5591998382662"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-newt-red hover:bg-red-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors duration-200 focus:outline-none text-center font-inter"
                >
                  Falar no WhatsApp
                </a>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-4 rounded-xl font-semibold transition-colors duration-200 focus:outline-none text-center font-inter"
                >
                  Ver Serviços
                </button>
              </div>
            </nav>
        </div>
      </div>
    </header>
  );
}