import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function Services() {
  const { t, locale } = useI18n();

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-newt-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 font-poppins leading-tight">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-inter max-w-4xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white hover:bg-newt-black p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200 hover:border-newt-red transition-all duration-300 hover:shadow-2xl hover:scale-105 min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]"
            >
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-newt-black group-hover:text-white transition-colors duration-300 font-poppins leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-700 group-hover:text-gray-300 leading-relaxed font-inter transition-colors duration-300">
                  {service.desc}
                </p>
                
                <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-newt-red rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm sm:text-base md:text-lg text-gray-700 group-hover:text-gray-300 font-inter transition-colors duration-300">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-12 lg:right-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-newt-red" />
              </div>
            </div>
          ))}
          
          {/* New Co-produção Service */}
          <div className="group relative bg-white hover:bg-newt-black p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200 hover:border-newt-red transition-all duration-300 hover:shadow-2xl hover:scale-105 min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-newt-black group-hover:text-white transition-colors duration-300 font-poppins leading-tight">
                Co-produção
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 group-hover:text-gray-300 leading-relaxed font-inter transition-colors duration-300">
                {locale === 'en' 
                  ? 'End-to-end strategic content production to accelerate authority building and sales growth.'
                  : 'Produção estratégica de conteúdos com execução ponta a ponta para acelerar autoridade e vendas.'
                }
              </p>
              
              <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                {(locale === 'en' 
                  ? ['Editorial planning', 'Script & filming', 'Editing & post-production', 'Multi-platform distribution', 'Reels/Shorts creation', 'Analytics & optimization']
                  : ['Planejamento editorial', 'Roteiro & captação', 'Edição e pós', 'Distribuição multiplataforma', 'Cortes para Reels/Shorts', 'Métricas e otimização contínua']
                ).map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-newt-red rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-sm sm:text-base md:text-lg text-gray-700 group-hover:text-gray-300 font-inter transition-colors duration-300">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-12 lg:right-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-newt-red" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}