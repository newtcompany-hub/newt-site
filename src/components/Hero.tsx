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
    <section id="home" className="relative min-h-screen bg-black overflow-hidden flex items-center px-4 sm:px-6 lg:px-8">
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

      <div className="container mx-auto text-center relative z-10 w-full pt-16 sm:pt-20 lg:pt-24">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 animate-fade-in">
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm sm:text-base lg:text-lg text-white font-medium animate-slide-up font-inter">
            {t.hero.welcome}
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-poppins animate-slide-up max-w-6xl mx-auto px-2">
            {t.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-inter animate-slide-up-delay px-2">
            {t.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 animate-slide-up-delay-2">
            <a
              href="https://wa.me/5591998382662"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-newt-red hover:bg-red-700 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl font-bold text-base sm:text-lg md:text-xl lg:text-2xl transition-colors duration-200 flex items-center space-x-3 w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 focus:ring-offset-newt-black font-inter min-h-[56px] sm:min-h-[64px] lg:min-h-[72px]"
            >
              <span>{t.hero.cta1}</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </a>
            
            <button
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl font-bold transition-colors duration-200 w-full sm:w-auto font-inter text-base sm:text-lg md:text-xl lg:text-2xl min-h-[56px] sm:min-h-[64px] lg:min-h-[72px]"
            >
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}