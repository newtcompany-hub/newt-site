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
    <section id="home" className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Enhanced Animated Background with Artistic Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-700 via-red-900 to-black opacity-80"></div>
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at 20% 30%, rgba(220, 38, 38, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 600px 800px at 80% 70%, rgba(185, 28, 28, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 400px 400px at 50% 50%, rgba(239, 68, 68, 0.2) 0%, transparent 50%),
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px)
            `,
            filter: 'blur(30px)',
            animation: 'heroFlow 10s ease-in-out infinite'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm sm:text-base text-white font-medium animate-slide-up font-inter">
            {t.hero.welcome}
          </div>

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
    </section>
  );
}