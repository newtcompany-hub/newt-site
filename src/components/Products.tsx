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
        : ['Geração de imagens com IA', 'Integração WhatsApp', 'Múltiplos estilos', 'Entrega instantânea'],
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
    }
  ];

  return (
    <section id="products" className="section-padding bg-newt-black">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {productData.map((product, index) => (
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
                  {getProductIcon(index)}
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-poppins leading-heading">
                  {product.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 leading-body font-inter">
                  {product.desc}
                </p>
                
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}