import React from 'react';
import { Sparkles, Zap, Clock } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function Products() {
  const { t } = useI18n();

  const getProductIcon = (index: number) => {
    const icons = [Sparkles, Zap, Clock, Clock];
    const Icon = icons[index];
    return <Icon className="w-8 h-8" />;
  };

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-32 bg-newt-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-poppins leading-heading">
            {t.products.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-body font-inter">
            {t.products.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-6">
          {t.products.items.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900 hover:bg-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-newt-red card-hover ${
                product.comingSoon ? 'opacity-75' : ''
              }`}
            >
              {/* Coming Soon Badge */}
              {product.comingSoon && (
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-newt-red text-white text-xs px-2 sm:px-3 py-1 rounded-full font-semibold font-inter">
                  {t.common.comingSoon}
                </div>
              )}

              <div className="space-y-4 sm:space-y-6">
                {/* Icon */}
                <div className={`inline-flex p-2 sm:p-3 rounded-lg ${
                  product.comingSoon 
                    ? 'bg-gray-700 text-gray-400' 
                    : 'bg-newt-red text-white group-hover:bg-red-500'
                } transition-colors duration-300`}>
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {getProductIcon(index)}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-poppins leading-heading">
                  {product.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 leading-body font-inter">
                  {product.desc}
                </p>
                
                {!product.comingSoon && (
                  <ul className="space-y-2 sm:space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 bg-newt-red rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 font-inter transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}