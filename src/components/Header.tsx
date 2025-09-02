import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import type { Locale } from '../i18n/translations';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsLangMenuOpen(false);
  };

  const localeLabels = {
    'pt-BR': '🇧🇷 PT-BR',
    'pt-PT': '🇵🇹 PT-PT', 
    'en': '🇺🇸 EN'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-newt-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm p-1 -ml-1"
              aria-label="Newt Company - Voltar ao início"
            >
              <img 
                src="/Logo Completa Newt Company.png" 
                alt="Newt Company" 
                className="h-6 sm:h-8 lg:h-10 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm px-2 py-1">{t.nav.home}</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm px-2 py-1">{t.nav.about}</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm px-2 py-1">{t.nav.services}</button>
            <button onClick={() => scrollToSection('products')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm px-2 py-1">{t.nav.products}</button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm px-2 py-1">{t.nav.faq}</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-newt-red transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm px-2 py-1">{t.nav.contact}</button>
          </nav>

          {/* Desktop CTA and Language Selector */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-white hover:text-newt-red transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm px-2 py-1"
                aria-label="Selecionar idioma"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium font-inter">{localeLabels[locale]}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-40 z-10">
                  {(Object.keys(localeLabels) as Locale[]).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-inset font-inter ${
                        locale === loc ? 'text-newt-red bg-red-50' : 'text-gray-700'
                      }`}
                    >
                      {localeLabels[loc]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <a
              href="https://wa.me/5591998382662"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-inter"
            >
              {t.nav.whatsapp}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-1">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 text-white hover:text-newt-red transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm min-h-[44px] min-w-[44px] justify-center"
                aria-label="Selecionar idioma"
              >
                <Globe className="w-4 h-4" />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-40 z-10">
                  {(Object.keys(localeLabels) as Locale[]).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-inset font-inter ${
                        locale === loc ? 'text-newt-red bg-red-50' : 'text-gray-700'
                      }`}
                    >
                      {localeLabels[loc]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-newt-red transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 bg-newt-black/98 backdrop-blur-sm">
            <nav className="py-6 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-200 py-3 px-4 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm min-h-[48px]">{t.nav.home}</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-200 py-3 px-4 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm min-h-[48px]">{t.nav.about}</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-200 py-3 px-4 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm min-h-[48px]">{t.nav.services}</button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-200 py-3 px-4 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm min-h-[48px]">{t.nav.products}</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-200 py-3 px-4 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm min-h-[48px]">{t.nav.faq}</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-200 py-3 px-4 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black rounded-sm min-h-[48px]">{t.nav.contact}</button>
              <div className="pt-6 px-4 border-t border-gray-800 mt-4">
                <a
                  href="https://wa.me/5591998382662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block btn-primary text-center font-inter min-h-[48px] flex items-center justify-center"
                >
                  {t.nav.whatsapp}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}