import React from 'react';
import { Globe, Instagram, Music, Mail } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import type { Locale } from '../i18n/translations';

export function Footer() {
  const { t, locale, setLocale } = useI18n();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const localeLabels = {
    'pt-BR': '🇧🇷',
    'pt-PT': '🇵🇹',
    'en': '🇺🇸'
  };

  return (
    <footer className="bg-newt-black text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Column 1 - Logo & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <div className="mb-4 sm:mb-6">
                <img 
                  src="/Logo Completa Newt Company.png" 
                  alt="Newt Company" 
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto mb-3 sm:mb-4"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-inter">
                {t.footer.tagline}
              </p>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-white font-poppins">
              {t.footer.quickLinks}
            </h4>
            <nav className="space-y-2 sm:space-y-3 md:space-y-4">
              <button onClick={() => scrollToSection('home')} className="block text-sm sm:text-base md:text-lg text-gray-400 hover:text-newt-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm font-inter py-1.5">{t.nav.home}</button>
              <button onClick={() => scrollToSection('about')} className="block text-sm sm:text-base md:text-lg text-gray-400 hover:text-newt-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm font-inter py-1.5">{t.nav.about}</button>
              <button onClick={() => scrollToSection('services')} className="block text-sm sm:text-base md:text-lg text-gray-400 hover:text-newt-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm font-inter py-1.5">{t.nav.services}</button>
              <button onClick={() => scrollToSection('products')} className="block text-sm sm:text-base md:text-lg text-gray-400 hover:text-newt-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm font-inter py-1.5">{t.nav.products}</button>
              <button onClick={() => scrollToSection('contact')} className="block text-sm sm:text-base md:text-lg text-gray-400 hover:text-newt-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm font-inter py-1.5">{t.nav.contact}</button>
              <button onClick={() => scrollToSection('faq')} className="block text-sm sm:text-base md:text-lg text-gray-400 hover:text-newt-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm font-inter py-1.5">{t.nav.faq}</button>
            </nav>
          </div>

          {/* Column 3 - Legal & Contact */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-white font-poppins">
              {t.footer.legal}
            </h4>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-10">
              <a href="#" className="block text-sm sm:text-base md:text-lg text-gray-400 hover:text-newt-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm font-inter py-1.5">{t.footer.terms}</a>
              <a href="#" className="block text-sm sm:text-base md:text-lg text-gray-400 hover:text-newt-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm font-inter py-1.5">{t.footer.privacy}</a>
            </div>
            
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-white font-poppins">
              {t.footer.contact}
            </h4>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <a href="https://wa.me/5591998382662" target="_blank" rel="noopener noreferrer" className="block text-sm sm:text-base md:text-lg text-gray-400 hover:text-newt-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm font-inter py-1.5">WhatsApp</a>
              <a href="mailto:contatonewtcompany@gmail.com" className="block text-sm sm:text-base md:text-lg text-gray-400 hover:text-newt-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm font-inter py-1.5">E-mail</a>
              <p className="text-gray-400 text-xs sm:text-sm font-inter">{t.footer.cnpj}</p>
            </div>
          </div>

          {/* Column 4 - Social & Language */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-white font-poppins">
              {t.footer.social}
            </h4>
            <div className="flex space-x-3 sm:space-x-4 md:space-x-5 mb-6 sm:mb-8 md:mb-10">
              <a href="https://www.instagram.com/newtcompany_" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 md:p-5 bg-gray-800 hover:bg-newt-red rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 min-h-[48px] min-w-[48px] sm:min-h-[56px] sm:min-w-[56px] md:min-h-[64px] md:min-w-[64px] flex items-center justify-center hover:scale-110 transform" aria-label="Instagram">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="https://www.tiktok.com/@newt.company" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 md:p-5 bg-gray-800 hover:bg-newt-red rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 min-h-[48px] min-w-[48px] sm:min-h-[56px] sm:min-w-[56px] md:min-h-[64px] md:min-w-[64px] flex items-center justify-center hover:scale-110 transform" aria-label="TikTok">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://open.spotify.com/playlist/70UluII4XHpmVwgjUm3YV3?si=6e2fe62230db4e91" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 md:p-5 bg-gray-800 hover:bg-newt-red rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 min-h-[48px] min-w-[48px] sm:min-h-[56px] sm:min-w-[56px] md:min-h-[64px] md:min-w-[64px] flex items-center justify-center hover:scale-110 transform" aria-label="Spotify">
                <Music className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="mailto:contatonewtcompany@gmail.com" className="p-3 sm:p-4 md:p-5 bg-gray-800 hover:bg-newt-red rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 min-h-[48px] min-w-[48px] sm:min-h-[56px] sm:min-w-[56px] md:min-h-[64px] md:min-w-[64px] flex items-center justify-center hover:scale-110 transform" aria-label="E-mail">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
            </div>

            {/* Language Selector */}
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6 text-white font-poppins">
              {t.nav.language}
            </h4>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {(Object.keys(localeLabels) as Locale[]).map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocale(loc)}
                  className={`block text-sm sm:text-base md:text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 rounded-sm font-inter py-1.5 ${
                    locale === loc ? 'text-newt-red' : 'text-gray-400 hover:text-newt-red'
                  }`}
                >
                  {localeLabels[loc]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 md:mt-16 lg:mt-20 pt-6 sm:pt-8 md:pt-10 lg:pt-12 text-center">
          <p className="text-sm sm:text-base text-gray-400 font-inter">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}