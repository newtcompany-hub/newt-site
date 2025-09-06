import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-newt-black mb-3 sm:mb-4 md:mb-6 font-poppins leading-heading">
            {t.about.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-inter px-2">
            {t.about.subtitle}
          </p>
        </div>

        {/* Methodology Timeline */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-newt-black text-center mb-6 sm:mb-8 md:mb-12 font-poppins leading-heading">
            {t.about.methodology}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-6">
            {t.about.timeline.map((step, index) => (
              <div
                key={index}
                className="mobile-card group relative bg-gray-50 hover:bg-red-50 p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-200 hover:border-newt-red card-hover will-change-transform"
              >
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-newt-red text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold group-hover:scale-110 transition-transform duration-300 font-inter will-change-transform">
                  {index + 1}
                </div>
                
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-newt-black mb-2 sm:mb-3 font-poppins group-hover:text-newt-red transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-inter">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentials */}
        <div className="bg-newt-black rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12 font-poppins leading-heading">
            {t.about.differentials.title}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {t.about.differentials.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 group"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-newt-red mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 will-change-transform" />
                <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-inter group-hover:text-white transition-colors duration-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}