import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function Hero() {
  const { t } = useI18n();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-newt-black flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #E11D2A 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #E11D2A 0%, transparent 50%)`,
          backgroundSize: '400px 400px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in pt-16 sm:pt-0">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-heading font-poppins animate-slide-up px-2">
            {t.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-body font-inter animate-slide-up-delay px-4">
            {t.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 animate-slide-up-delay-2 px-4">
            <a
              href="https://wa.me/5591998382662"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-newt-red hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black font-inter min-h-[48px]"
            >
              <span>{t.hero.cta1}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary w-full sm:w-auto font-inter min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}