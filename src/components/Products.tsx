import React, { useState } from 'react';
import { X, ExternalLink, MessageCircle } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function Products() {
  const { t, locale } = useI18n();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

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
        : ['Geração de imagens com IA', 'Integração WhatsApp', 'Múltiplos estilos', 'Integração com Nano Banana', 'Entrega instantânea'],
      comingSoon: true,
      detailedDesc: locale === 'en'
        ? 'NewtPhotos brings AI image generation directly to your WhatsApp. Create professional images, logos, social media content and more using simple text commands. Powered by advanced AI models including Google\'s Nano Banana technology for superior results.'
        : 'O NewtPhotos traz geração de imagens com IA diretamente para seu WhatsApp. Crie imagens profissionais, logos, conteúdo para redes sociais e muito mais usando comandos de texto simples. Powered pela tecnologia Nano Banana do Google para resultados superiores.'
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
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

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
              onClick={() => setSelectedProduct(index)}
              className={`mobile-card group relative bg-gray-900 hover:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-newt-red transition-all duration-200 cursor-pointer hover:scale-[1.02] ${
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
                  {product.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 bg-newt-red rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-400 group-hover:text-gray-300 font-inter transition-colors duration-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {product.features.length > 3 && (
                    <li className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 bg-newt-red rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm md:text-base text-newt-red font-inter font-medium">
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
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-newt-red text-white rounded-lg">
                    {getProductIcon(selectedProduct)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-newt-black font-poppins">
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
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-700 text-base leading-relaxed mb-6 font-inter">
                  {productData[selectedProduct].detailedDesc}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-newt-black mb-4 font-poppins">
                    {locale === 'en' ? 'Features:' : 'Recursos:'}
                  </h4>
                  <ul className="space-y-3">
                    {productData[selectedProduct].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-newt-red rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {productData[selectedProduct].hasAccess && (
                    <a
                      href={productData[selectedProduct].accessLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-newt-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 font-inter"
                    >
                      <span>{locale === 'en' ? 'Access NewtMind' : 'Acessar NewtMind'}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  
                  {productData[selectedProduct].whatsappMessage && (
                    <button
                      onClick={() => handleWhatsAppClick(productData[selectedProduct].whatsappMessage!)}
                      className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 font-inter"
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
                      className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 font-inter"
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