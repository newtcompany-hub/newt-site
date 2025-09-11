import React from 'react';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function Services() {
  const { t, locale } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.remove('animate-on-scroll');
                el.classList.add('animate-fade-in-up');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="services" ref={sectionRef}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-8 md:mb-10 lg:mb-12 animate-on-scroll">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-newt-black mb-2 sm:mb-3 md:mb-4 font-poppins leading-tight" itemProp="serviceType">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-inter px-2" itemProp="description">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6" itemScope itemType="https://schema.org/Service">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="mobile-card group relative bg-white hover:bg-newt-black p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-newt-red transition-all duration-200 hover:shadow-lg animate-on-scroll"
              itemScope itemType="https://schema.org/Service"
            >
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-newt-black group-hover:text-white transition-colors duration-200 font-poppins leading-tight" itemProp="name">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-300 leading-relaxed font-inter transition-colors duration-200" itemProp="description">
                  {service.desc}
                </p>
                
                <ul className="space-y-2 sm:space-y-3">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 bg-newt-red rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-300 font-inter transition-colors duration-200">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-newt-red" />
              </div>
            </div>
          ))}
          
          {/* New Co-produção Service */}
          <div className="mobile-card group relative bg-white hover:bg-newt-black p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-newt-red transition-all duration-200 hover:shadow-lg animate-on-scroll">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-newt-black group-hover:text-white transition-colors duration-200 font-poppins leading-tight">
                Co-produção
              </h3>
              
              <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-300 leading-relaxed font-inter transition-colors duration-200">
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
                  <li key={bulletIndex} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-newt-red rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-300 font-inter transition-colors duration-200">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-newt-red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}