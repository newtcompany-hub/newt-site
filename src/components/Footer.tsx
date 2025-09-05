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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Logo & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <div className="mb-4">
                <img 
                  src="/Logo Completa Newt Company.png" 
                  alt="Newt Company" 
                  className="h-6 sm:h-8 w-auto mb-2"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-body font-inter">
                {t.footer.tagline}
              </p>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white font-poppins">
              {t.footer.quickLinks}
            </h4>
            <nav className="space-y-2 sm:space-y-3">
              <button onClick={() => scrollToSection('home')} className="block text-sm sm:text-base text-gray-400 hover:text-newt-red transition-colors duration-200 custom-focus rounded-sm font-inter py-1">{t.nav.home}</button>
              <button onClick={() => scrollToSection('about')} className="block text-sm sm:text-base text-gray-400 hover:text-newt-red transition-colors duration-200 custom-focus rounded-sm font-inter py-1">{t.nav.about}</button>
              <button onClick={() => scrollToSection('services')} className="block text-sm sm:text-base text-gray-400 hover:text-newt-red transition-colors duration-200 custom-focus rounded-sm font-inter py-1">{t.nav.services}</button>
              <button onClick={() => scrollToSection('products')} className="block text-sm sm:text-base text-gray-400 hover:text-newt-red transition-colors duration-200 custom-focus rounded-sm font-inter py-1">{t.nav.products}</button>
              <button onClick={() => scrollToSection('contact')} className="block text-sm sm:text-base text-gray-400 hover:text-newt-red transition-colors duration-200 custom-focus rounded-sm font-inter py-1">{t.nav.contact}</button>
              <button onClick={() => scrollToSection('faq')} className="block text-sm sm:text-base text-gray-400 hover:text-newt-red transition-colors duration-200 custom-focus rounded-sm font-inter py-1">{t.nav.faq}</button>
            </nav>
          </div>

          {/* Column 3 - Legal & Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white font-poppins">
              {t.footer.legal}
            </h4>
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <a href="#" className="block text-sm sm:text-base text-gray-400 hover:text-newt-red transition-colors duration-200 custom-focus rounded-sm font-inter py-1">{t.footer.terms}</a>
              <a href="#" className="block text-sm sm:text-base text-gray-400 hover:text-newt-red transition-colors duration-200 custom-focus rounded-sm font-inter py-1">{t.footer.privacy}</a>
            </div>
            
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white font-poppins">
              {t.footer.contact}
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="https://wa.me/5591998382662" target="_blank" rel="noopener noreferrer" className="block text-sm sm:text-base text-gray-400 hover:text-newt-red transition-colors duration-200 custom-focus rounded-sm font-inter py-1">WhatsApp</a>
              <a href="mailto:contatonewtcompany@gmail.com" className="block text-sm sm:text-base text-gray-400 hover:text-newt-red transition-colors duration-200 custom-focus rounded-sm font-inter py-1">E-mail</a>
              <p className="text-gray-400 text-xs sm:text-sm font-inter">{t.footer.cnpj}</p>
            </div>
          </div>

          {/* Column 4 - Social & Language */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white font-poppins">
              {t.footer.social}
            </h4>
            <div className="flex space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <a href="https://www.instagram.com/newtcompany_" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-gray-800 hover:bg-newt-red rounded-lg transition-colors duration-200 custom-focus min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.tiktok.com/@newt.company" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-gray-800 hover:bg-newt-red rounded-lg transition-colors duration-200 custom-focus min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="TikTok">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://open.spotify.com/playlist/70UluII4XHpmVwgjUm3YV3?si=6e2fe62230db4e91" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-gray-800 hover:bg-newt-red rounded-lg transition-colors duration-200 custom-focus min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Spotify">
                <Music className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:contatonewtcompany@gmail.com" className="p-2.5 sm:p-3 bg-gray-800 hover:bg-newt-red rounded-lg transition-colors duration-200 custom-focus min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="E-mail">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

            {/* Language Selector */}
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white font-poppins">
              {t.nav.language}
            </h4>
            <div className="space-y-1 sm:space-y-2">
              {(Object.keys(localeLabels) as Locale[]).map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocale(loc)}
                  className={`block text-xs sm:text-sm transition-colors duration-200 custom-focus rounded-sm font-inter py-1 ${
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
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400 font-inter">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}