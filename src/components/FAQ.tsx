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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-newt-black mb-4 sm:mb-6 font-poppins leading-heading">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-body font-inter">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className="faq-item border border-gray-200 rounded-xl mb-3 sm:mb-4 overflow-hidden hover:border-newt-red bg-white"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left p-4 sm:p-6 lg:p-8 hover:bg-gray-50 transition-all duration-300 custom-focus min-h-[60px] sm:min-h-[auto]"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`faq-question text-base sm:text-lg lg:text-xl font-semibold text-newt-black font-poppins pr-3 sm:pr-4 leading-heading ${
                    openIndex === index ? 'expanded' : ''
                  }`}>
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`faq-chevron w-5 h-5 sm:w-6 sm:h-6 text-newt-red flex-shrink-0 ${
                      openIndex === index ? 'rotated' : ''
                    }`}
                  />
                </div>
              </button>
              
              <div className={`faq-content ${
                openIndex === index ? 'expanded' : ''
              }`}>
                <div className="p-4 sm:p-6 lg:p-8 pt-0 bg-gray-50 border-t border-gray-100">
                  <p className="text-sm sm:text-base text-gray-700 leading-body font-inter max-w-3xl">
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