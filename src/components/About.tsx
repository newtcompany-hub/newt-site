import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-newt-black mb-4 sm:mb-6 font-poppins leading-heading">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-body font-inter">
            {t.about.subtitle}
          </p>
        </div>

        {/* Methodology Timeline */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-newt-black text-center mb-8 sm:mb-12 font-poppins leading-heading">
            {t.about.methodology}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
            {t.about.timeline.map((step, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 hover:bg-red-50 p-6 sm:p-6 lg:p-8 rounded-xl border border-gray-200 hover:border-newt-red card-hover"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-7 h-7 sm:w-8 sm:h-8 bg-newt-red text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold group-hover:scale-110 transition-transform duration-200 font-inter">
                  {index + 1}
                </div>
                
                <h4 className="text-lg sm:text-xl font-semibold text-newt-black mb-3 font-poppins group-hover:text-newt-red transition-colors duration-200">
                  {step.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-body font-inter">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentials */}
        <div className="bg-newt-black rounded-2xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-8 sm:mb-12 font-poppins leading-heading">
            {t.about.differentials.title}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {t.about.differentials.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 sm:space-x-4 group"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-newt-red mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-body font-inter group-hover:text-white transition-colors duration-200">
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