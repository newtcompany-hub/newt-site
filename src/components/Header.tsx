import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import type { Locale } from '../i18n/translations';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const { locale, setLocale, t } = useI18n();

  // Detect current section for adaptive styling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'products', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
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

  // Get adaptive styles based on current section
  const getHeaderStyles = () => {
    switch (currentSection) {
      case 'home':
        return {
          bg: 'bg-black/80 backdrop-blur-md',
          text: 'text-white',
          hover: 'hover:text-newt-red',
          border: ''
        };
      case 'about':
        return {
          bg: 'bg-black/80 backdrop-blur-md shadow-lg',
          text: 'text-white',
          hover: 'hover:text-newt-red',
          border: 'border-b border-gray-700'
        };
      case 'services':
        return {
          bg: 'bg-black/80 backdrop-blur-md shadow-lg',
          text: 'text-white',
          hover: 'hover:text-newt-red',
          border: 'border-b border-gray-700'
        };
      case 'products':
        return {
          bg: 'bg-black/80 backdrop-blur-md shadow-lg',
          text: 'text-white',
          hover: 'hover:text-newt-red',
          border: 'border-b border-gray-700'
        };
      case 'faq':
        return {
          bg: 'bg-black/80 backdrop-blur-md shadow-lg',
          text: 'text-white',
          hover: 'hover:text-newt-red',
          border: 'border-b border-gray-700'
        };
      case 'contact':
        return {
          bg: 'bg-black/80 backdrop-blur-md shadow-lg',
          text: 'text-white',
          hover: 'hover:text-newt-red',
          border: 'border-b border-gray-700'
        };
      default:
        return {
          bg: 'bg-black/80 backdrop-blur-md',
          text: 'text-white',
          hover: 'hover:text-newt-red',
          border: ''
        };
    }
  };

  const styles = getHeaderStyles();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${styles.bg} ${styles.border} transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isMenuOpen ? 'h-10 sm:h-12' : 'h-10 sm:h-12 lg:h-14'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm p-1 -ml-1"
              aria-label="Newt Company - Voltar ao início"
            >
              <img 
                src="/Logo Completa Newt Company.png" 
                alt="Newt Company" 
                className="h-3 sm:h-4 md:h-5 w-auto"
                loading="eager"
                decoding="async"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <button onClick={() => scrollToSection('home')} className={`${styles.text} ${styles.hover} transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1`}>{t.nav.home}</button>
            <button onClick={() => scrollToSection('about')} className={`${styles.text} ${styles.hover} transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1`}>{t.nav.about}</button>
            <button onClick={() => scrollToSection('services')} className={`${styles.text} ${styles.hover} transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1`}>{t.nav.services}</button>
            <button onClick={() => scrollToSection('products')} className={`${styles.text} ${styles.hover} transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1`}>{t.nav.products}</button>
            <button onClick={() => scrollToSection('faq')} className={`${styles.text} ${styles.hover} transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1`}>{t.nav.faq}</button>
            <button onClick={() => scrollToSection('contact')} className={`${styles.text} ${styles.hover} transition-colors duration-200 font-medium font-inter focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-2 py-1`}>{t.nav.contact}</button>
          </nav>

          {/* Desktop CTA and Language Selector */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`${styles.text} flex items-center space-x-1 ${styles.hover} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm px-1 py-1`}
                aria-label="Selecionar idioma"
              >
                <Globe className="w-3 h-3" />
                <span className="text-xs font-medium font-inter">{localeLabels[locale]}</span>
              </button>
              
              <div className={`absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-28 z-10 transition-all duration-200 ${
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
            
            <a
              href="https://wa.me/5591998382662"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-newt-red hover:bg-red-700 text-white px-2 py-1.5 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 font-inter text-xs"
            >
              {t.nav.whatsapp}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-1">
            {/* Mobile Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`${styles.text} flex items-center justify-center ${styles.hover} transition-colors duration-200 p-1.5 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm min-h-[32px] min-w-[32px]`}
                aria-label="Selecionar idioma"
              >
                <Globe className="w-3 h-3" />
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
              className={`${styles.text} ${styles.hover} transition-colors duration-200 p-1.5 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm min-h-[32px] min-w-[32px] flex items-center justify-center`}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden bg-black/95 backdrop-blur-md transition-all duration-200 overflow-hidden mobile-menu ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
            <nav className="py-6 pb-safe">
              {/* Menu Items */}
              <div className="px-6 space-y-0">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="mobile-nav block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none border-b border-gray-700 min-h-[56px] flex items-center"
                >
                  {t.nav.home}
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="mobile-nav block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none border-b border-gray-700 min-h-[56px] flex items-center"
                >
                  {t.nav.about}
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="mobile-nav block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none border-b border-gray-700 min-h-[56px] flex items-center"
                >
                  {t.nav.services}
                </button>
                <button 
                  onClick={() => scrollToSection('products')} 
                  className="mobile-nav block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none border-b border-gray-700 min-h-[56px] flex items-center"
                >
                  {t.nav.products}
                </button>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="mobile-nav block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none border-b border-gray-700 min-h-[56px] flex items-center"
                >
                  {t.nav.faq}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="mobile-nav block w-full text-left text-white hover:text-newt-red transition-colors duration-200 py-4 font-medium font-inter focus:outline-none min-h-[56px] flex items-center"
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
                  className="mobile-btn block bg-newt-red hover:bg-red-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors duration-200 focus:outline-none text-center font-inter min-h-[56px] flex items-center justify-center"
                >
                  Falar no WhatsApp
                </a>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    setIsMenuOpen(false);
                  }}
                  className="mobile-btn block w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-4 rounded-xl font-semibold transition-colors duration-200 focus:outline-none text-center font-inter min-h-[56px] flex items-center justify-center"
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