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
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLangMenuOpen && !(event.target as Element).closest('.language-selector')) {
        setIsLangMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLangMenuOpen]);

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
    'pt-BR': '🇧🇷',
    'pt-PT': '🇵🇹', 
    'en': '🇺🇸'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
      isScrolled ? 'bg-newt-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-300 custom-focus rounded-sm p-1 -ml-1"
              aria-label="Newt Company - Voltar ao início"
            >
              <img 
                src="/Logo Completa Newt Company.png" 
                alt="Newt Company" 
                className="h-5 sm:h-6 md:h-8 lg:h-10 w-auto will-change-transform"
                loading="eager"
                decoding="async"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-newt-red transition-colors duration-300 font-medium font-inter custom-focus rounded-sm px-2 py-1">{t.nav.home}</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-newt-red transition-colors duration-300 font-medium font-inter custom-focus rounded-sm px-2 py-1">{t.nav.about}</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-newt-red transition-colors duration-300 font-medium font-inter custom-focus rounded-sm px-2 py-1">{t.nav.services}</button>
            <button onClick={() => scrollToSection('products')} className="text-white hover:text-newt-red transition-colors duration-300 font-medium font-inter custom-focus rounded-sm px-2 py-1">{t.nav.products}</button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-newt-red transition-colors duration-300 font-medium font-inter custom-focus rounded-sm px-2 py-1">{t.nav.faq}</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-newt-red transition-colors duration-300 font-medium font-inter custom-focus rounded-sm px-2 py-1">{t.nav.contact}</button>
          </nav>

          {/* Desktop CTA and Language Selector */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {/* Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 sm:space-x-2 text-white hover:text-newt-red transition-colors duration-300 custom-focus rounded-sm px-2 py-1"
                aria-label="Selecionar idioma"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium font-inter">{localeLabels[locale]}</span>
              </button>
              
              <div className={`absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-32 sm:min-w-40 z-10 transition-all duration-300 ${
                isLangMenuOpen ? 'opacity-100 visible transform scale-100' : 'opacity-0 invisible transform scale-95'
              }`}>
                  {(Object.keys(localeLabels) as Locale[]).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={`block w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-gray-50 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg custom-focus font-inter ${
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
              className="btn-primary font-inter text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3"
            >
              {t.nav.whatsapp}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-1 sm:space-x-2">
            {/* Mobile Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center justify-center text-white hover:text-newt-red transition-colors duration-300 p-2 custom-focus rounded-sm min-h-[44px] min-w-[44px]"
                aria-label="Selecionar idioma"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <div className={`absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-32 z-10 transition-all duration-300 ${
                isLangMenuOpen ? 'opacity-100 visible transform scale-100' : 'opacity-0 invisible transform scale-95'
              }`}>
                  {(Object.keys(localeLabels) as Locale[]).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg custom-focus font-inter ${
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
              className="text-white hover:text-newt-red transition-colors duration-300 p-2 custom-focus rounded-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden border-t border-gray-800 bg-newt-black/98 backdrop-blur-sm px-2 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
            <nav className="py-4 space-y-1">
              <button onClick={() => scrollToSection('home')} className="mobile-nav block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-300 py-3 px-4 font-medium font-inter custom-focus rounded-sm min-h-[48px]">{t.nav.home}</button>
              <button onClick={() => scrollToSection('about')} className="mobile-nav block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-300 py-3 px-4 font-medium font-inter custom-focus rounded-sm min-h-[48px]">{t.nav.about}</button>
              <button onClick={() => scrollToSection('services')} className="mobile-nav block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-300 py-3 px-4 font-medium font-inter custom-focus rounded-sm min-h-[48px]">{t.nav.services}</button>
              <button onClick={() => scrollToSection('products')} className="mobile-nav block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-300 py-3 px-4 font-medium font-inter custom-focus rounded-sm min-h-[48px]">{t.nav.products}</button>
              <button onClick={() => scrollToSection('faq')} className="mobile-nav block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-300 py-3 px-4 font-medium font-inter custom-focus rounded-sm min-h-[48px]">{t.nav.faq}</button>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav block w-full text-left text-white hover:text-newt-red hover:bg-gray-900 transition-all duration-300 py-3 px-4 font-medium font-inter custom-focus rounded-sm min-h-[48px]">{t.nav.contact}</button>
              <div className="pt-4 px-2 border-t border-gray-800 mt-4">
                <a
                  href="https://wa.me/5591998382662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-btn block btn-primary text-center font-inter min-h-[48px] flex items-center justify-center"
                >
                  {t.nav.whatsapp}
                </a>
              </div>
            </nav>
        </div>
      </div>
    </header>
  );
}