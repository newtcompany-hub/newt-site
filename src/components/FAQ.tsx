import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Intersection Observer with better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const items = entry.target.querySelectorAll('.faq-item');
            items.forEach((item, index) => {
              // Use requestAnimationFrame for better performance
              requestAnimationFrame(() => {
                setTimeout(() => {
                  item.classList.add('animate-in');
                }, index * 50);
              });
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="section-padding bg-white"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-newt-black mb-3 sm:mb-4 md:mb-6 font-poppins leading-heading">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-inter px-2">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className="faq-item border border-gray-200 rounded-lg sm:rounded-xl mb-2 sm:mb-3 md:mb-4 overflow-hidden hover:border-newt-red bg-white opacity-0 translate-y-8"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="mobile-input w-full text-left p-3 sm:p-4 md:p-6 lg:p-8 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 min-h-[56px] sm:min-h-[60px] md:min-h-[auto]"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-newt-black font-poppins pr-2 sm:pr-3 md:pr-4 leading-heading ${
                    openIndex === index ? 'font-bold' : ''
                  }`}>
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-newt-red flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              <div 
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="p-3 sm:p-4 md:p-6 lg:p-8 pt-0 bg-gray-50 border-t border-gray-100">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-inter max-w-3xl">
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