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
    <section 
      id="faq" 
      className="section-padding bg-white"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-newt-black mb-3 sm:mb-4 md:mb-6 font-poppins leading-tight">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-inter px-2">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-5xl mx-auto">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className="faq-item border border-gray-200 rounded-lg sm:rounded-xl mb-3 sm:mb-4 overflow-hidden hover:border-newt-red bg-white opacity-0 translate-y-8 transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="mobile-input w-full text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 min-h-[56px]"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-base sm:text-lg md:text-xl font-semibold text-newt-black font-poppins pr-3 sm:pr-4 leading-tight ${
                    openIndex === index ? 'font-bold' : ''
                  }`}>
                    {item.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-newt-red flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} />
                </div>
              </button>
              
              <div 
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="p-4 sm:p-6 pt-0 bg-gray-50">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-inter max-w-4xl">
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