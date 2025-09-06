import React from 'react';
import { useI18n } from '../hooks/useI18n';

export function Products() {
  const { t, locale } = useI18n();

  const getProductIcon = (index: number) => {
    const icons = [
      // NewtMind - Custom SVG
      <img src="/ícone de newtmind.svg" alt="NewtMind" width="32" height="32" className="w-8 h-8" />,
      // NewtFlows - Custom SVG
      <img src="/ícone do newtflow.svg" alt="NewtFlows" width="32" height="32" className="w-8 h-8" />,
      // NewtPhotos - Camera icon
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>,
      // FinZap - Clock icon
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>,
      // LeadForge - Clock icon
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>,
      // FicaLeve - Heart/Health icon
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ];
    return icons[index];
  };

  const productData = [
    {
      title: locale === 'en' ? 'ContentAI Pro' : 'NewtMind',
      desc: locale === 'en' ? '24/7 AI-powered content creation suite.' : 'Criador de conteúdo 24h com IA.',
      features: locale === 'en' 
        ? ['Auto-generated scripts', 'Custom thumbnails', 'Trending topics', 'Content calendar']
        : ['Roteiros automáticos', 'Thumbnails personalizadas', 'Ideias no hype', 'Calendário editorial'],
      comingSoon: false
    },
    {
      title: locale === 'en' ? 'FlowMaster' : 'NewtFlows',
      desc: locale === 'en' ? 'Complete business process automation platform.' : 'Automações de processos empresariais.',
      features: locale === 'en'
        ? ['Smart customer service', 'Intelligent support', 'Integrated CRM', 'Sales automation']
        : ['Atendimento automático', 'Suporte inteligente', 'CRM integrado', 'Vendas automatizadas'],
      comingSoon: false
    },
    {
      title: locale === 'en' ? 'PhotoAI Pro' : 'NewtPhotos',
      desc: locale === 'en' ? 'AI image generator via WhatsApp.' : 'Gerador de imagens com IA via WhatsApp.',
      features: locale === 'en'
        ? ['AI image generation', 'WhatsApp integration', 'Multiple styles', 'Instant delivery']
        : ['Geração de imagens com IA', 'Integração WhatsApp', 'Múltiplos estilos', 'Integração com Nano Banana', 'Entrega instantânea'],
      comingSoon: true
    },
    {
      title: locale === 'en' ? 'FinanceFlow' : 'FinZap',
      desc: locale === 'en' ? 'Revolutionary financial management SaaS.' : 'Controle seu dinheiro via WhatsApp.',
      features: locale === 'en'
        ? ['Income & expense tracking', 'WhatsApp billing', 'Automated reports', 'Spreadsheet integration']
        : ['Controle de entradas e saídas', 'Emissão de cobranças no WhatsApp', 'Relatórios automáticos', 'Integração com planilhas'],
      comingSoon: true
    },
    {
      title: locale === 'en' ? 'LeadEngine' : 'LeadForge',
      desc: locale === 'en' ? 'Advanced lead generation and prospecting.' : 'Prospecção e captação de leads.',
      features: locale === 'en'
        ? ['Lead search & qualification', 'Multi-channel capture', 'Contact enrichment', 'Automated pipeline & follow-ups']
        : ['Busca e qualificação de leads', 'Captura multicanal (form/WhatsApp)', 'Enriquecimento de contatos', 'Pipeline e follow-ups automáticos'],
      comingSoon: true
    },
    {
      title: 'FicaLeve',
      desc: locale === 'en' 
        ? 'Your personal trainer and nutritionist on WhatsApp with AI analysis.'
        : 'Seu personal trainer e nutricionista no WhatsApp com análise por IA.',
      features: locale === 'en'
        ? ['Photo analysis & calorie counting', 'Personalized diet plans', 'Custom workout routines', '100% WhatsApp integration', 'Goal-based recommendations']
        : ['Análise de fotos e cálculo de calorias', 'Planos de dieta personalizados', 'Treinos customizados por objetivo', '100% integração WhatsApp', 'Recomendações baseadas em metas'],
      comingSoon: true
    }
  ];

  return (
    <section id="products" className="section-padding bg-newt-black">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 font-poppins leading-heading">
            {t.products.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-inter px-2">
            {t.products.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-6">
          {productData.map((product, index) => (
            <div
              key={index}
              className={`mobile-card group relative bg-gray-900 hover:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-newt-red transition-colors duration-200 ${
                product.comingSoon ? 'opacity-75' : ''
              }`}
            >
              {/* Coming Soon Badge */}
              {product.comingSoon && (
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-newt-red text-white text-xs px-2 sm:px-3 py-1 rounded-full font-semibold font-inter z-10">
                  {t.common.comingSoon}
                </div>
              )}

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {/* Icon */}
                <div className={`inline-flex p-2 sm:p-3 rounded-lg ${
                  product.comingSoon 
                    ? 'bg-gray-700 text-gray-400' 
                    : 'bg-newt-red text-white group-hover:bg-red-500'
                } transition-colors duration-200`}>
                  {getProductIcon(index)}
                </div>
                
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white font-poppins leading-heading">
                  {product.title}
                </h3>
                
                <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed font-inter">
                  {product.desc}
                </p>
                
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 bg-newt-red rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-400 group-hover:text-gray-300 font-inter transition-colors duration-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}