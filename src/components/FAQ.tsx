import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.faq-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('opacity-0', 'translate-y-8');
                item.classList.add('opacity-100', 'translate-y-0');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const faqSection = document.getElementById('faq');
    if (faqSection) {
      observer.observe(faqSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-newt-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 font-poppins leading-tight">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-inter max-w-4xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-6xl mx-auto">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className="faq-item border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl mb-4 sm:mb-6 md:mb-8 overflow-hidden hover:border-newt-red bg-white opacity-0 translate-y-8 transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left p-6 sm:p-8 md:p-10 lg:p-12 hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 min-h-[64px] sm:min-h-[72px] lg:min-h-[80px]"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-newt-black font-poppins pr-4 sm:pr-6 md:pr-8 leading-tight ${
                    openIndex === index ? 'font-bold' : ''
                  }`}>
                    {item.question}
                  </h3>
                  <ChevronDown className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-newt-red flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} />
                </div>
              </button>
              
              <div 
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="p-6 sm:p-8 md:p-10 lg:p-12 pt-0 bg-gray-50">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-inter max-w-5xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}