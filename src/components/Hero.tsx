import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function Hero() {
  const { t } = useI18n();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Enhanced Animated Background with Artistic Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-700 via-red-900 to-black opacity-80"></div>
        <div className="absolute inset-0 opacity-60">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 800px 600px at 20% 30%, rgba(220, 38, 38, 0.4) 0%, transparent 50%),
                radial-gradient(ellipse 600px 800px at 80% 70%, rgba(185, 28, 28, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse 400px 400px at 50% 50%, rgba(239, 68, 68, 0.2) 0%, transparent 50%),
                repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px)
              `,
              filter: 'blur(20px)'
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8 text-center relative z-10 w-full">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 animate-fade-in transform -translate-y-12 sm:-translate-y-8 md:-translate-y-8 lg:-translate-y-8">
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm sm:text-base text-white font-medium animate-slide-up font-inter">
            {t.hero.welcome}
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight font-poppins animate-slide-up px-4 sm:px-6 max-w-5xl mx-auto">
            {t.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-inter animate-slide-up-delay px-4 sm:px-6">
            {t.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-6 md:pt-8 animate-slide-up-delay-2 px-4 sm:px-6">
            <a
              href="https://wa.me/5591998382662"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-animate bg-newt-red hover:bg-red-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl flex items-center space-x-3 w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black font-inter transform hover:scale-105"
            >
              <span>{t.hero.cta1}</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <button
              onClick={() => scrollToSection('services')}
              className="btn-animate border-2 border-white text-white hover:bg-white hover:text-black px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold w-full sm:w-auto font-inter text-base sm:text-lg md:text-xl transform hover:scale-105"
            >
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}