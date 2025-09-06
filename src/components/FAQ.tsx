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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const items = entry.target.querySelectorAll('.faq-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-in');
              }, index * 40);
            });
          }
        });
      },
      { threshold: 0.1 }
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
      className="section-padding bg-gradient-to-b from-gray-50 to-white relative"
    >
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-newt-red/30 to-transparent"></div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
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
              className="faq-item border border-gray-200 rounded-lg sm:rounded-xl mb-2 sm:mb-3 md:mb-4 overflow-hidden hover:border-newt-red bg-white"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="mobile-input w-full text-left p-3 sm:p-4 md:p-6 lg:p-8 hover:bg-gray-50 transition-all duration-300 custom-focus min-h-[56px] sm:min-h-[60px] md:min-h-[auto]"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`faq-question text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-newt-black font-poppins pr-2 sm:pr-3 md:pr-4 leading-heading ${
                    openIndex === index ? 'expanded' : ''
                  }`}>
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`faq-chevron w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-newt-red flex-shrink-0 ${
                      openIndex === index ? 'rotated' : ''
                    }`}
                  />
                </div>
              </button>
              
              <div className={`faq-content ${
                openIndex === index ? 'expanded' : ''
              }`}>
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