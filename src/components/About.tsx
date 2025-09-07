import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section-padding bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-newt-black mb-4 sm:mb-6 md:mb-8 font-poppins leading-tight">
            {t.about.title}
          </h2>
          <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-inter px-2 sm:px-4 md:px-6 space-y-4 sm:space-y-6">
            {t.about.subtitle.split('\n\n').map((paragraph, index) => (
              <p key={index} className="max-w-4xl mx-auto">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Methodology Timeline */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-newt-black text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 font-poppins leading-tight">
            {t.about.methodology}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-8 lg:gap-10">
            {t.about.timeline.map((step, index) => (
              <div
                key={index}
                className="mobile-card group relative bg-gray-50 hover:bg-red-50 p-6 sm:p-8 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-newt-red transition-all duration-200 hover:shadow-lg"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-newt-red text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold font-inter shadow-lg">
                  {index + 1}
                </div>
                
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-newt-black mb-3 sm:mb-4 font-poppins group-hover:text-newt-red transition-colors duration-200 pt-3 sm:pt-4">
                  {step.title}
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-inter">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentials */}
        <div className="bg-newt-black rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 font-poppins leading-tight">
            {t.about.differentials.title}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
            {t.about.differentials.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 sm:space-x-4 md:space-x-5 group p-2 sm:p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-newt-red mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-inter">
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