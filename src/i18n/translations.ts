export type Locale = 'pt-BR' | 'pt-PT' | 'en';

export const translations = {
  'pt-BR': {
    // Navigation
    nav: {
      home: 'Início',
      about: 'Apresentação',
      services: 'Serviços',
      products: 'Produtos',
      faq: 'FAQ',
      contact: 'Contato',
      whatsapp: 'Falar no WhatsApp',
      language: 'Idioma'
    },
    
    // Hero
    hero: {
      welcome: 'A última peça que falta para o seu negócio',
      headline: 'Agência de IA que escala seu negócio com automações & marketing digital',
      subheadline: 'Newt Company: Especialistas em automações N8N, gestão de tráfego, consultoria e tunning business. Automatize WhatsApp, Instagram e processos.',
      cta1: 'Falar no WhatsApp',
      cta2: 'Ver Serviços'
    },
    
    // About
    about: {
      title: 'Newt Company',
      subtitle: 'Agência especializada em IA e automações N8N que destrava o potencial do seu negócio. Processos manuais te atrasam? Campanhas não convertem? A Newt Company usa automações inteligentes, gestão de tráfego e consultoria estratégica para fazer tunning business na sua empresa.',
      methodology: 'Nossa Metodologia',
      timeline: [
        { title: 'Diagnóstico', desc: 'Análise completa do seu negócio e oportunidades' },
        { title: 'Protótipo', desc: 'Design e estrutura pensados para conversão' },
        { title: 'Construção', desc: 'Desenvolvimento com as melhores tecnologias' },
        { title: 'Automação', desc: 'NewtFlows para otimizar processos e vendas' },
        { title: 'Tráfego', desc: 'Estratégias para atrair visitantes qualificados' },
        { title: 'Escala', desc: 'Crescimento sustentável e métricas claras' }
      ],
      differentials: {
        title: 'Nossos Diferenciais',
        items: [
          'Foco total em conversão e resultados',
          'Velocidade de entrega premium',
          'Stack moderna: N8N, ManyChat, IA e CRM integrado',
          'Suporte contínuo e acompanhamento'
        ]
      }
    },
    
    // Services
    services: {
      title: 'Serviços de Automação e Marketing Digital',
      subtitle: 'Agência completa: IA, automações N8N, gestão de tráfego e consultoria para tunning business',
      items: [
        {
          title: 'Tunning Business',
          desc: 'Serviço completo de otimização empresarial. Tunning business com IA, automações N8N e estratégias personalizadas.',
          bullets: ['Diagnóstico 360°', 'Plano de upgrades', 'Execução ágil', 'Métricas claras']
        },
        {
          title: 'Gestão de Automação',
          desc: 'Automações N8N para WhatsApp, Instagram e processos. Automatize vendas com IA e integração completa.',
          bullets: ['Automação WhatsApp/Instagram', 'Automações N8N', 'Funis com IA', 'Integrações CRM']
        },
        {
          title: 'Gestão de Tráfego',
          desc: 'Marketing digital e tráfego pago estratégico. Campanhas que convertem e geram resultados reais.',
          bullets: ['Planejamento estratégico', 'Criativos de alta conversão', 'Testes A/B', 'Relatórios detalhados']
        },
        {
          title: 'Web Design e SEO',
          desc: 'Sites otimizados para conversão e SEO. Design responsivo integrado com automações.',
          bullets: ['UX/UI premium', 'SEO otimizado', 'Performance máxima', 'Responsivo total']
        },
        {
          title: 'Consultoria Estratégica',
          desc: 'Consultoria especializada em IA e automações. Diagnóstico profissional para tunning business.',
          bullets: ['Análise completa', 'Estratégia personalizada', 'Plano de ação', 'Investimento acessível']
        }
      ]
    },
    
    // Products
    products: {
      title: 'Produtos de Automação com IA',
      subtitle: 'Ferramentas proprietárias com IA para automatizar processos e potencializar resultados',
      items: [
        {
          title: 'NewtMind',
          desc: 'IA para criação de conteúdo 24h. Automatize posts, stories e campanhas.',
          features: ['Roteiros automáticos', 'Thumbnails personalizadas', 'Ideias no hype', 'Calendário editorial']
        },
        {
          title: 'NewtFlows',
          desc: 'Plataforma de automações N8N para processos empresariais e vendas.',
          features: ['Atendimento automático', 'Suporte inteligente', 'CRM integrado', 'Vendas automatizadas']
        },
        {
          title: 'FinZap',
          desc: 'Automação financeira via WhatsApp. Controle completo de finanças automatizado.',
          features: ['Controle de entradas e saídas', 'Emissão de cobranças no WhatsApp', 'Relatórios automáticos', 'Integração com planilhas'],
          comingSoon: true
        },
        {
          title: 'SaaS #2', 
          desc: 'Em breve - Potencialize resultados.',
          features: ['Coming soon'],
          comingSoon: true
        }
      ]
    },
    
    // FAQ
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Tire suas dúvidas sobre nossos serviços',
      items: [
        {
          question: 'Qual o prazo médio de entrega?',
          answer: 'Sites: 7-15 dias úteis. Automações: 5-10 dias. Consultoria: 2-5 dias. Prazos podem variar conforme complexidade.'
        },
        {
          question: 'Quantas revisões estão incluídas?',
          answer: 'Incluímos até 3 rodadas de revisões sem custo adicional. Mudanças estruturais são avaliadas separadamente.'
        },
        {
          question: 'Como começamos o projeto?',
          answer: 'Conversamos via WhatsApp, fazemos o diagnóstico inicial, apresentamos a proposta e, aprovada, iniciamos o desenvolvimento.'
        },
        {
          question: 'Quais formas de pagamento vocês aceitam?',
          answer: 'PIX, transferência bancária, cartão de crédito e parcelamos projetos maiores. Entrada de 50% para iniciar.'
        },
        {
          question: 'Vocês oferecem suporte pós-entrega?',
          answer: 'Sim! Incluímos 30 dias de suporte gratuito. Depois, oferecemos planos mensais de manutenção.'
        },
        {
          question: 'Como garantem a segurança dos meus dados?',
          answer: 'Seguimos a LGPD rigorosamente. Dados criptografados, acesso restrito e políticas claras de privacidade.'
        }
      ]
    },
    
    // Contact
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos conversar sobre como podemos acelerar seus resultados',
      form: {
        name: 'Nome',
        company: 'Nome da empresa',
        phone: 'Telefone',
        phonePlaceholder: '(11) 99999-9999',
        email: 'E-mail',
        emailPlaceholder: 'seu@email.com',
        message: 'Mensagem (opcional)',
        messagePlaceholder: 'Conte-nos sobre seu projeto...',
        budget: 'Quanto você está disposto a investir?',
        budgetOptions: [
          'Até R$ 1.500',
          'Entre R$ 1.500 e R$ 3.000',
          'Acima de R$ 3.000'
        ],
        submit: 'Fale com um Consultor',
        consent: 'Ao enviar, você concorda com nossa Política de Privacidade (LGPD).',
        required: 'Campo obrigatório'
      }
    },
    
    // Footer
    footer: {
      tagline: 'Tunning your Business',
      quickLinks: 'Links Rápidos',
      legal: 'Legal',
      contact: 'Contato',
      social: 'Redes Sociais',
      terms: 'Termos de Uso',
      privacy: 'Política de Privacidade',
      cnpj: 'CNPJ: 59.226.297/0001-50',
      copyright: '© 2025 Newt Company. Todos os direitos reservados.'
    },
    
    // Common
    common: {
      comingSoon: 'Em breve'
    }
  },
  
  'pt-PT': {
    // Navigation
    nav: {
      home: 'Início',
      about: 'Apresentação', 
      services: 'Serviços',
      products: 'Produtos',
      faq: 'FAQ',
      contact: 'Contacto',
      whatsapp: 'Falar no WhatsApp',
      language: 'Idioma'
    },
    
    // Hero
    hero: {
      welcome: 'A última peça que falta para o seu negócio',
      headline: 'Escalamos seu negócio com automações, web design e tráfego pago',
      subheadline: 'Somos um estúdio criativo especializado em automações com IA, sites e tráfego pago.',
      cta1: 'Falar no WhatsApp',
      cta2: 'Ver Serviços'
    },
    
    // About
    about: {
      title: 'Newt Company',
      subtitle: 'Sabe aquela sensação de que sua empresa tem tudo para crescer, mas algo prende as engrenagens? Processos manuais te atrasam, o site não converte e as campanhas não atraem o público certo. É aí que a Newt entra para destravar esse potencial. Usamos automações, IA, web design e tráfego pago para tunar a sua empresa na medida que você precisa.',
      methodology: 'A Nossa Metodologia',
      timeline: [
        { title: 'Diagnóstico', desc: 'Análise completa do seu negócio e oportunidades' },
        { title: 'Protótipo', desc: 'Design e estrutura pensados para conversão' },
        { title: 'Construção', desc: 'Desenvolvimento com as melhores tecnologias' },
        { title: 'Automação', desc: 'NewtFlows para otimizar processos e vendas' },
        { title: 'Tráfego', desc: 'Estratégias para atrair visitantes qualificados' },
        { title: 'Escala', desc: 'Crescimento sustentável e métricas claras' }
      ],
      differentials: {
        title: 'Os Nossos Diferenciais',
        items: [
          'Foco total em conversão e resultados',
          'Velocidade de entrega premium',
          'Stack moderna: n8n, ManyChat, CRM integrado',
          'Suporte contínuo e acompanhamento'
        ]
      }
    },
    
    // Services
    services: {
      title: 'Os Nossos Serviços',
      subtitle: 'Soluções completas para acelerar o seu crescimento digital',
      items: [
        {
          title: 'Tunning Business',
          desc: 'União dos nossos serviços conforme o foco da sua empresa. "Tunamos" empresas ao máximo potencial.',
          bullets: ['Diagnóstico 360°', 'Plano de upgrades', 'Execução ágil', 'Métricas claras']
        },
        {
          title: 'Gestão de Automação',
          desc: 'Automatize processos e vendas com inteligência.',
          bullets: ['Bots WhatsApp e email', 'Funis de conversão', 'Integrações CRM', 'Contratos e faturação']
        },
        {
          title: 'Gestão de Tráfego',
          desc: 'Atraia visitantes qualificados e converta mais.',
          bullets: ['Planeamento estratégico', 'Criativos de alta conversão', 'Testes A/B', 'Relatórios detalhados']
        },
        {
          title: 'Web Design',
          desc: 'Sites que impressionam e convertem visitantes em clientes.',
          bullets: ['UX/UI premium', 'SEO otimizado', 'Performance máxima', 'Responsivo total']
        },
        {
          title: 'Consultoria Estratégica',
          desc: 'Diagnóstico profissional e plano acionável.',
          bullets: ['Análise completa', 'Estratégia personalizada', 'Plano de ação', 'Investimento acessível']
        }
      ]
    },
    
    // Products
    products: {
      title: 'Os Nossos Produtos',
      subtitle: 'Ferramentas proprietárias para potencializar o seu negócio',
      items: [
        {
          title: 'ContentAI Pro',
          desc: '24/7 AI-powered content creation suite.',
          features: ['Auto-generated scripts', 'Custom thumbnails', 'Trending topics', 'Content calendar']
        },
        {
          title: 'FlowMaster',
          desc: 'Complete business process automation platform.',
          features: ['Smart customer service', 'Intelligent support', 'Integrated CRM', 'Sales automation']
        },
        {
          title: 'FinZap',
          desc: 'Controle seu dinheiro pelo WhatsApp.',
          features: ['Controle de entradas e saídas', 'Emissão de cobranças no WhatsApp', 'Relatórios automáticos', 'Integração com planilhas'],
          comingSoon: true
        },
        {
          title: 'LeadEngine',
          desc: 'Coming soon - Supercharge your lead generation.',
          features: ['Coming soon'],
          comingSoon: true
        }
      ]
    },
    
    // FAQ
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Esclareça as suas dúvidas sobre os nossos serviços',
      items: [
        {
          question: 'Qual é o prazo médio de entrega?',
          answer: 'Sites: 7-15 dias úteis. Automações: 5-10 dias. Consultoria: 2-5 dias. Os prazos podem variar conforme a complexidade.'
        },
        {
          question: 'Quantas revisões estão incluídas?',
          answer: 'Incluímos até 3 rondas de revisões sem custo adicional. Mudanças estruturais são avaliadas separadamente.'
        },
        {
          question: 'Como começamos o projecto?',
          answer: 'Conversamos via WhatsApp, fazemos o diagnóstico inicial, apresentamos a proposta e, aprovada, iniciamos o desenvolvimento.'
        },
        {
          question: 'Que formas de pagamento aceitam?',
          answer: 'Transferência bancária, cartão de crédito e oferecemos planos de pagamento para projectos maiores. Entrada de 50% para iniciar.'
        },
        {
          question: 'Oferecem suporte pós-entrega?',
          answer: 'Sim! Incluímos 30 dias de suporte gratuito. Depois, oferecemos planos mensais de manutenção.'
        },
        {
          question: 'Como garantem a segurança dos meus dados?',
          answer: 'Seguimos rigorosamente o RGPD. Dados encriptados, acesso restrito e políticas claras de privacidade.'
        }
      ]
    },
    
    // Contact
    contact: {
      title: 'Entre em Contacto',
      subtitle: 'Vamos conversar sobre como podemos acelerar o crescimento do seu negócio',
      form: {
        name: 'Nome',
        company: 'Nome da empresa',
        phone: 'Telemóvel',
        phonePlaceholder: '+351 912 345 678',
        email: 'Email',
        emailPlaceholder: 'seu@email.com',
        message: 'Mensagem (opcional)',
        messagePlaceholder: 'Conte-nos sobre o seu projeto...',
        budget: 'Quanto pretende investir?',
        budgetOptions: [
          'Até € 850',
          'Entre € 850 e € 2.500',
          'Acima de € 2.500'
        ],
        submit: 'Falar com um Consultor',
        consent: 'Ao submeter, aceita a nossa Política de Privacidade (RGPD).',
        required: 'Campo obrigatório'
      }
    },
    
    // Footer
    footer: {
      tagline: 'Tunning your Business',
      quickLinks: 'Links Rápidos',
      legal: 'Legal',
      contact: 'Contacto',
      social: 'Redes Sociais',
      terms: 'Termos de Uso',
      privacy: 'Política de Privacidade',
      cnpj: 'CNPJ: 59.226.297/0001-50',
      copyright: '© 2025 Newt Company. Todos os direitos reservados.'
    },
    
    // Common
    common: {
      comingSoon: 'Em breve'
    }
  },
  
  'en': {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      products: 'Products', 
      faq: 'FAQ',
      contact: 'Contact',
      whatsapp: 'Chat on WhatsApp',
      language: 'Language'
    },
    
    // Hero
    hero: {
      welcome: 'The missing piece for your business',
      headline: 'We scale your business with automations, web design and paid traffic',
      subheadline: 'We are a creative studio specialized in AI automations, websites and paid traffic.',
      cta1: 'Chat on WhatsApp',
      cta2: 'See Services'
    },
    
    // About
    about: {
      title: 'Newt Company',
      subtitle: 'You know that feeling that your company has everything to grow, but something holds back the gears? Manual processes slow you down, the website doesn\'t convert and campaigns don\'t attract the right audience. That\'s where Newt comes in to unlock this potential. We use automations, AI, web design and paid traffic to tune your company to the measure you need.',
      methodology: 'Our Methodology',
      timeline: [
        { title: 'Diagnosis', desc: 'Complete analysis of your business and opportunities' },
        { title: 'Prototype', desc: 'Design and structure designed for conversion' },
        { title: 'Build', desc: 'Development with the best technologies' },
        { title: 'Automation', desc: 'NewtFlows to optimize processes and sales' },
        { title: 'Traffic', desc: 'Strategies to attract qualified visitors' },
        { title: 'Scale', desc: 'Sustainable growth and clear metrics' }
      ],
      differentials: {
        title: 'Our Differentials',
        items: [
          'Total focus on conversion and results',
          'Premium delivery speed',
          'Modern stack: n8n, ManyChat, integrated CRM',
          'Continuous support and monitoring'
        ]
      }
    },
    
    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Complete solutions to accelerate your digital growth',
      items: [
        {
          title: 'Tunning Business',
          desc: 'Union of our services according to your company focus. We "tune" companies to maximum potential.',
          bullets: ['360° diagnosis', 'Upgrade plan', 'Agile execution', 'Clear metrics']
        },
        {
          title: 'Gestão de Automação',
          desc: 'Automate processes and sales with intelligence.',
          bullets: ['WhatsApp & email bots', 'Conversion funnels', 'CRM integrations', 'Contracts & billing']
        },
        {
          title: 'Gestão de Tráfego',
          desc: 'Attract qualified visitors and convert more.',
          bullets: ['Strategic planning', 'High-conversion creatives', 'A/B testing', 'Detailed reports']
        },
        {
          title: 'Web Design',
          desc: 'Websites that impress and convert visitors into customers.',
          bullets: ['Premium UX/UI', 'SEO optimized', 'Maximum performance', 'Fully responsive']
        },
        {
          title: 'Consultoria Estratégica',
          desc: 'Professional diagnosis and actionable plan.',
          bullets: ['Complete analysis', 'Personalized strategy', 'Action plan', 'Affordable investment']
        }
      ]
    },
    
    // Products
    products: {
      title: 'Our Products',
      subtitle: 'Proprietary tools to boost your business',
      items: [
        {
          title: 'NewtMind',
          desc: '24h AI content creator.',
          features: ['Automatic scripts', 'Custom thumbnails', 'Trending ideas', 'Editorial calendar']
        },
        {
          title: 'NewtFlows',
          desc: 'Business process automations.',
          features: ['Automatic support', 'Intelligent assistance', 'Integrated CRM', 'Automated sales']
        },
        {
          title: 'FinZap',
          desc: 'Control your money through WhatsApp.',
          features: ['Income & expense tracking', 'WhatsApp billing', 'Automated reports', 'Spreadsheet integration'],
          comingSoon: true
        },
        {
          title: 'SaaS #2',
          desc: 'Coming soon - Boost results.',
          features: ['Coming soon'],
          comingSoon: true
        }
      ]
    },
    
    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Clear your doubts about our services',
      items: [
        {
          question: 'What\'s the average delivery time?',
          answer: 'Websites: 7-15 business days. Automations: 5-10 days. Consulting: 2-5 days. Times may vary based on complexity.'
        },
        {
          question: 'How many revisions are included?',
          answer: 'We include up to 3 rounds of revisions at no additional cost. Structural changes are evaluated separately.'
        },
        {
          question: 'How do we start the project?',
          answer: 'We chat via WhatsApp, do initial diagnosis, present proposal and once approved, we start development.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'Bank transfer, credit card and we offer installments for larger projects. 50% upfront to start.'
        },
        {
          question: 'Do you offer post-delivery support?',
          answer: 'Yes! We include 30 days of free support. After that, we offer monthly maintenance plans.'
        },
        {
          question: 'How do you ensure my data security?',
          answer: 'We strictly follow GDPR/LGPD. Encrypted data, restricted access and clear privacy policies.'
        }
      ]
    },
    
    // Contact
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s talk about how we can accelerate your results',
      form: {
        name: 'Name',
        company: 'Company name',
        phone: 'Phone',
        phonePlaceholder: '+1 (555) 123-4567',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message (optional)',
        messagePlaceholder: 'Tell us about your project...',
        budget: 'What\'s your investment range?',
        budgetOptions: [
          'Up to $850',
          'Between $1,000 and $3,000',
          'Above $3,000'
        ],
        submit: 'Get Free Consultation',
        consent: 'By submitting, you agree to our Privacy Policy and Terms of Service.',
        required: 'Required field'
      }
    },
    
    // Footer
    footer: {
      tagline: 'Tunning your Business',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      contact: 'Contact',
      social: 'Social Media',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      cnpj: 'CNPJ: 59.226.297/0001-50',
      copyright: '© 2025 Newt Company. All rights reserved.'
    },
    
    // Common
    common: {
      comingSoon: 'Coming soon'
    }
  }
} as const;