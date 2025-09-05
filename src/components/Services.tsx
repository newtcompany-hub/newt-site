import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-newt-black mb-4 sm:mb-6 font-poppins leading-heading">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-body font-inter">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white hover:bg-newt-black p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-newt-red card-hover"
            >
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-newt-black group-hover:text-white transition-colors duration-300 font-poppins leading-heading">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-300 leading-body font-inter transition-colors duration-300">
                  {service.desc}
                </p>
                
                <ul className="space-y-2 sm:space-y-3">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 bg-newt-red rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-300 font-inter transition-colors duration-300">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-newt-red" />
              </div>
            </div>
          ))}
          
          {/* New Co-produção Service */}
          <div className="group relative bg-white hover:bg-newt-black p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-newt-red card-hover">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-newt-black group-hover:text-white transition-colors duration-300 font-poppins leading-heading">
                {locale === 'en' ? 'Content Co-Production' : 'Co-produção'}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-300 leading-body font-inter transition-colors duration-300">
                {locale === 'en' 
                  ? 'End-to-end strategic content production to accelerate authority building and sales growth.'
                  : 'Produção estratégica de conteúdos com execução ponta a ponta para acelerar autoridade e vendas.'
                }
              </p>
              
              <ul className="space-y-2 sm:space-y-3">
                {(locale === 'en' 
                  ? ['Editorial planning', 'Script & filming', 'Editing & post-production', 'Multi-platform distribution', 'Reels/Shorts creation', 'Analytics & optimization']
                  : ['Planejamento editorial', 'Roteiro & captação', 'Edição e pós', 'Distribuição multiplataforma', 'Cortes para Reels/Shorts', 'Métricas e otimização contínua']
                ).map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-newt-red rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-300 font-inter transition-colors duration-300">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-newt-red" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}