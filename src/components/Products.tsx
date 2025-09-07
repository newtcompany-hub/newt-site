import React, { useState } from 'react';
import { X, ExternalLink, MessageCircle } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function Products() {
  const { t, locale } = useI18n();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (selectedProduct !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  // Handle escape key to close modal
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProduct !== null) {
        setSelectedProduct(null);
      }
    };

    if (selectedProduct !== null) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedProduct]);

  const getProductIcon = (index: number) => {
    const icons = [
      // NewtMind - Custom SVG
      <img key="newtmind" src="/icone-de-newtmind.svg" alt="NewtMind" width="32" height="32" className="w-8 h-8" />,
      // NewtFlows - Custom SVG
      <img key="newtflows" src="/icone-do-newtflow.svg" alt="NewtFlows" width="32" height="32" className="w-8 h-8" />,
      // NewtPhotos - Camera icon
      <svg key="newtphotos" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>,
      // FinZap - Clock icon
      <svg key="finzap" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>,
      // LeadForge - Clock icon
      <svg key="leadforge" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>,
      // FicaLeve - Heart/Health icon
      <svg key="ficaleve" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ];
    return icons[index] || icons[0];
  };

  const productData = [
    {
      title: locale === 'en' ? 'ContentAI Pro' : 'NewtMind',
      desc: locale === 'en' ? '24/7 AI-powered content creation suite.' : 'Criador de conteúdo 24h com IA.',
      features: locale === 'en' 
        ? ['Auto-generated scripts', 'Custom thumbnails', 'Trending topics', 'Content calendar']
        : ['Roteiros automáticos', 'Thumbnails personalizadas', 'Ideias no hype', 'Calendário editorial'],
      comingSoon: false,
      detailedDesc: locale === 'en' 
        ? 'NewtMind is your 24/7 AI-powered content creation assistant. Generate unlimited scripts, custom thumbnails, and trending content ideas automatically. Perfect for content creators, agencies, and businesses looking to scale their content production without losing quality.'
        : 'O NewtMind é seu assistente de criação de conteúdo com IA 24h. Gere roteiros ilimitados, thumbnails personalizadas e ideias de conteúdo em alta automaticamente. Perfeito para criadores de conteúdo, agências e empresas que querem escalar a produção sem perder qualidade.',
      hasAccess: true,
      accessLink: 'https://payment.ticto.app/O75DCDB36'
    },
    {
      title: locale === 'en' ? 'FlowMaster' : 'NewtFlows',
      desc: locale === 'en' ? 'Complete business process automation platform.' : 'Automações de processos empresariais.',
      features: locale === 'en'
        ? ['Smart customer service', 'Intelligent support', 'Integrated CRM', 'Sales automation']
        : ['Atendimento automático', 'Suporte inteligente', 'CRM integrado', 'Vendas automatizadas'],
      comingSoon: false,
      detailedDesc: locale === 'en'
        ? 'NewtFlows revolutionizes your business processes with intelligent automation. From customer service to sales, our platform integrates WhatsApp, email, CRM and payment systems to create seamless workflows that convert leads into customers automatically.'
        : 'O NewtFlows revoluciona seus processos empresariais com automação inteligente. Do atendimento às vendas, nossa plataforma integra WhatsApp, e-mail, CRM e sistemas de pagamento para criar fluxos que convertem leads em clientes automaticamente.',
      hasAccess: false,
      whatsappMessage: locale === 'en' 
        ? 'I want to know more about NewtFlows, how does it work?'
        : 'Quero saber mais sobre o NewtFlows, como funciona?'
    },
    {
      title: locale === 'en' ? 'PhotoAI Pro' : 'NewtPhotos',
      desc: locale === 'en' ? 'AI image generator via WhatsApp.' : 'Gerador de imagens com IA via WhatsApp.',
      features: locale === 'en'
        ? ['AI image generation', 'WhatsApp integration', 'Multiple styles', 'Instant delivery']
        : ['Geração de imagens com IA', 'Integração WhatsApp', 'Múltiplos estilos', 'Entrega instantânea'],
      comingSoon: true,
      detailedDesc: locale === 'en'
        ? 'NewtPhotos brings AI image generation directly to your WhatsApp. Create professional images, logos, social media content and more using simple text commands. Powered by advanced AI models for superior results.'
        : 'O NewtPhotos traz geração de imagens com IA diretamente para seu WhatsApp. Crie imagens profissionais, logos, conteúdo para redes sociais e muito mais usando comandos de texto simples. Powered por modelos avançados de IA para resultados superiores.'
    },
    {
      title: locale === 'en' ? 'FinanceFlow' : 'FinZap',
      desc: locale === 'en' ? 'Revolutionary financial management SaaS.' : 'Controle seu dinheiro via WhatsApp.',
      features: locale === 'en'
        ? ['Income & expense tracking', 'WhatsApp billing', 'Automated reports', 'Spreadsheet integration']
        : ['Controle de entradas e saídas', 'Emissão de cobranças no WhatsApp', 'Relatórios automáticos', 'Integração com planilhas'],
      comingSoon: true,
      detailedDesc: locale === 'en'
        ? 'FinZap transforms financial management into a simple WhatsApp conversation. Track income and expenses, generate invoices, send payment reminders, and get automated financial reports - all through WhatsApp. Perfect for freelancers, small businesses and professionals.'
        : 'O FinZap transforma gestão financeira em uma conversa simples no WhatsApp. Controle entradas e saídas, gere cobranças, envie lembretes de pagamento e receba relatórios financeiros automáticos - tudo pelo WhatsApp. Perfeito para freelancers, pequenas empresas e profissionais.'
    },
    {
      title: locale === 'en' ? 'LeadEngine' : 'LeadForge',
      desc: locale === 'en' ? 'Advanced lead generation and prospecting.' : 'Prospecção e captação de leads.',
      features: locale === 'en'
        ? ['Lead search & qualification', 'Multi-channel capture', 'Contact enrichment', 'Automated pipeline & follow-ups']
        : ['Busca e qualificação de leads', 'Captura multicanal (form/WhatsApp)', 'Enriquecimento de contatos', 'Pipeline e follow-ups automáticos'],
      comingSoon: true,
      detailedDesc: locale === 'en'
        ? 'LeadForge is your complete lead generation and prospecting solution. Find, qualify and nurture leads automatically across multiple channels. Advanced contact enrichment, automated follow-ups and intelligent pipeline management to maximize your conversion rates.'
        : 'O LeadForge é sua solução completa de geração e prospecção de leads. Encontre, qualifique e nutra leads automaticamente em múltiplos canais. Enriquecimento avançado de contatos, follow-ups automáticos e gestão inteligente de pipeline para maximizar suas conversões.'
    },
    {
      title: 'FicaLeve',
      desc: locale === 'en' 
        ? 'Your personal trainer and nutritionist on WhatsApp with AI analysis.'
        : 'Seu personal trainer e nutricionista no WhatsApp com análise por IA.',
      features: locale === 'en'
        ? ['Photo analysis & calorie counting', 'Personalized diet plans', 'Custom workout routines', '100% WhatsApp integration', 'Goal-based recommendations']
        : ['Análise de fotos e cálculo de calorias', 'Planos de dieta personalizados', 'Treinos customizados por objetivo', '100% integração WhatsApp', 'Recomendações baseadas em metas'],
      comingSoon: true,
      detailedDesc: locale === 'en'
        ? 'FicaLeve is your personal trainer and nutritionist right in WhatsApp. Simply send a photo of your meal or body and our AI analyzes, calculates calories, creates personalized diet plans and workouts according to your goals. 100% on WhatsApp, no complicated apps. Simple, fast and motivating: the easiest way to lose weight, gain muscle or just feel lighter every day.'
        : 'O FicaLeve é seu personal trainer e nutricionista direto no WhatsApp. Basta enviar uma foto da sua refeição ou do seu físico e nossa inteligência artificial analisa, calcula calorias, cria planos de dieta e treinos personalizados de acordo com o seu objetivo. 100% no WhatsApp, sem apps complicados. Simples, rápido e motivador: o jeito mais fácil de perder peso, ganhar massa ou apenas se sentir mais leve no dia a dia.'
    }
  ];

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5591998382662?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-newt-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 font-poppins leading-tight">
            {t.products.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-inter max-w-4xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {productData.map((product, index) => (
            <div
              key={index}
              onClick={() => setSelectedProduct(index)}
              className={`group relative bg-gray-900 hover:bg-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-700 hover:border-newt-red transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] ${
                product.comingSoon ? 'opacity-75' : ''
              }`}
            >
              {/* Coming Soon Badge */}
              {product.comingSoon && (
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-newt-red text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold font-inter z-10 shadow-lg">
                  {t.common.comingSoon}
                </div>
              )}

              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                {/* Icon */}
                <div className={`inline-flex p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl ${
                  product.comingSoon 
                    ? 'bg-gray-700 text-gray-400' 
                    : 'bg-newt-red text-white group-hover:bg-red-500'
                } transition-colors duration-300`}>
                  {getProductIcon(index)}
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-poppins leading-tight">
                  {product.title}
                </h3>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-inter">
                  {product.desc}
                </p>
                
                <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                  {product.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-newt-red rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm sm:text-base md:text-lg text-gray-400 group-hover:text-gray-300 font-inter transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {product.features.length > 3 && (
                    <li className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-newt-red rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm sm:text-base md:text-lg text-newt-red font-inter font-medium">
                        +{product.features.length - 3} {locale === 'en' ? 'more features' : 'mais recursos'}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct !== null && (
          <div 
            className="modal-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <div className="modal-content">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="p-2 sm:p-3 bg-newt-red text-white rounded-lg">
                    {getProductIcon(selectedProduct)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-newt-black font-poppins">
                      {productData[selectedProduct].title}
                    </h3>
                    {productData[selectedProduct].comingSoon && (
                      <span className="inline-block bg-newt-red text-white text-xs px-2 py-1 rounded-full font-semibold font-inter mt-1">
                        {t.common.comingSoon}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-inter">
                  {productData[selectedProduct].detailedDesc}
                </p>

                {/* Features List */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-newt-black mb-3 sm:mb-4 font-poppins">
                    {locale === 'en' ? 'Features:' : 'Recursos:'}
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {productData[selectedProduct].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-newt-red rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-inter text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  {productData[selectedProduct].hasAccess && (
                    <a
                      href={productData[selectedProduct].accessLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-btn flex items-center justify-center space-x-2 bg-newt-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 font-inter min-h-[48px]"
                    >
                      <span>{locale === 'en' ? 'Access NewtMind' : 'Acessar NewtMind'}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  
                  {productData[selectedProduct].whatsappMessage && (
                    <button
                      onClick={() => handleWhatsAppClick(productData[selectedProduct].whatsappMessage!)}
                      className="mobile-btn flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 font-inter min-h-[48px]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{locale === 'en' ? 'Learn More' : 'Saber Mais'}</span>
                    </button>
                  )}
                  
                  {!productData[selectedProduct].hasAccess && !productData[selectedProduct].whatsappMessage && (
                    <button
                      onClick={() => handleWhatsAppClick(
                        locale === 'en' 
                          ? `I'm interested in ${productData[selectedProduct].title}. When will it be available?`
                          : `Tenho interesse no ${productData[selectedProduct].title}. Quando estará disponível?`
                      )}
                      className="mobile-btn flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 font-inter min-h-[48px]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{locale === 'en' ? 'Get Notified' : 'Me Avisar'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}