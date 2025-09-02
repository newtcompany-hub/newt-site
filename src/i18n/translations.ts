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
      headline: 'Sites e automações que vendem todos os dias.',
      subheadline: 'Estúdio criativo que une web design premium, automação inteligente e tráfego qualificado para acelerar seus resultados.',
      cta1: 'Falar no WhatsApp',
      cta2: 'Ver Serviços'
    },
    
    // About
    about: {
      title: 'Newt Company',
      subtitle: 'Estúdio criativo especializado em sites e automações que geram resultados reais.',
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
          'Stack moderna: n8n, ManyChat, CRM integrado',
          'Suporte contínuo e acompanhamento'
        ]
      }
    },
    
    // Services
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções completas para acelerar seu crescimento digital',
      items: [
        {
          title: 'Tunning Business',
          desc: 'União dos nossos serviços conforme o foco da sua empresa. "Tunamos" empresas ao máximo potencial.',
          bullets: ['Diagnóstico 360°', 'Plano de upgrades', 'Execução ágil', 'Métricas claras']
        },
        {
          title: 'Gestão de Automação',
          desc: 'Automatize processos e vendas com inteligência.',
          bullets: ['Bots WhatsApp e e-mail', 'Funis de conversão', 'Integrações CRM', 'Contratos e cobrança']
        },
        {
          title: 'Gestão de Tráfego',
          desc: 'Atraia visitantes qualificados e converta mais.',
          bullets: ['Planejamento estratégico', 'Criativos de alta conversão', 'Testes A/B', 'Relatórios detalhados']
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
      title: 'Nossos Produtos',
      subtitle: 'Ferramentas proprietárias para potencializar seu negócio',
      items: [
        {
          title: 'NewtMind',
          desc: 'Criador de conteúdo 24h com IA.',
          features: ['Roteiros automáticos', 'Thumbnails personalizadas', 'Ideias no hype', 'Calendário editorial']
        },
        {
          title: 'NewtFlows',
          desc: 'Automações de processos empresariais.',
          features: ['Atendimento automático', 'Suporte inteligente', 'CRM integrado', 'Vendas automatizadas']
        },
        {
          title: 'SaaS #1',
          desc: 'Em breve - Revolucione sua gestão.',
          features: ['Coming soon'],
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
      tagline: 'Sites e automações que aceleram resultados',
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
      headline: 'Sites e automações que vendem todos os dias.',
      subheadline: 'Estúdio criativo que une web design premium, automação inteligente e tráfego qualificado para acelerar os seus resultados.',
      cta1: 'Falar no WhatsApp',
      cta2: 'Ver Serviços'
    },
    
    // About
    about: {
      title: 'Newt Company',
      subtitle: 'Estúdio criativo especializado em sites e automações que geram resultados reais.',
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
          title: 'NewtMind',
          desc: 'Criador de conteúdo 24h com IA.',
          features: ['Roteiros automáticos', 'Thumbnails personalizadas', 'Ideias no hype', 'Calendário editorial']
        },
        {
          title: 'NewtFlows',
          desc: 'Automações de processos empresariais.',
          features: ['Atendimento automático', 'Suporte inteligente', 'CRM integrado', 'Vendas automatizadas']
        },
        {
          title: 'SaaS #1',
          desc: 'Em breve - Revolucione a sua gestão.',
          features: ['Coming soon'],
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
      subtitle: 'Esclareça as suas dúvidas sobre os nossos serviços',
      items: [
        {
          question: 'Qual o prazo médio de entrega?',
          answer: 'Sites: 7-15 dias úteis. Automações: 5-10 dias. Consultoria: 2-5 dias. Os prazos podem variar conforme a complexidade.'
        },
        {
          question: 'Quantas revisões estão incluídas?',
          answer: 'Incluímos até 3 rondas de revisões sem custo adicional. Mudanças estruturais são avaliadas separadamente.'
        },
        {
          question: 'Como começamos o projeto?',
          answer: 'Conversamos via WhatsApp, fazemos o diagnóstico inicial, apresentamos a proposta e, aprovada, iniciamos o desenvolvimento.'
        },
        {
          question: 'Que formas de pagamento aceitam?',
          answer: 'Transferência bancária, cartão de crédito e parcelamos projectos maiores. Entrada de 50% para iniciar.'
        },
        {
          question: 'Oferecem suporte pós-entrega?',
          answer: 'Sim! Incluímos 30 dias de suporte gratuito. Depois, oferecemos planos mensais de manutenção.'
        },
        {
          question: 'Como garantem a segurança dos meus dados?',
          answer: 'Seguimos o RGPD rigorosamente. Dados encriptados, acesso restrito e políticas claras de privacidade.'
        }
      ]
    },
    
    // Contact
    contact: {
      title: 'Entre em Contacto',
      subtitle: 'Vamos conversar sobre como podemos acelerar os seus resultados',
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
          'Até € 1.000',
          'Entre € 1.000 e € 3.000',
          'Acima de € 3.000'
        ],
        submit: 'Fale com um Consultor',
        consent: 'Ao submeter, aceita a nossa Política de Privacidade (RGPD).',
        required: 'Campo obrigatório'
      }
    },
    
    // Footer
    footer: {
      tagline: 'Sites e automações que aceleram resultados',
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
      headline: 'Websites and automations that sell every day.',
      subheadline: 'Creative studio that combines premium web design, intelligent automation and qualified traffic to accelerate your results.',
      cta1: 'Chat on WhatsApp',
      cta2: 'See Services'
    },
    
    // About
    about: {
      title: 'Newt Company',
      subtitle: 'Creative studio specialized in websites and automations that generate real results.',
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
          title: 'Automation Management',
          desc: 'Automate processes and sales with intelligence.',
          bullets: ['WhatsApp & email bots', 'Conversion funnels', 'CRM integrations', 'Contracts & billing']
        },
        {
          title: 'Traffic Management',
          desc: 'Attract qualified visitors and convert more.',
          bullets: ['Strategic planning', 'High-conversion creatives', 'A/B testing', 'Detailed reports']
        },
        {
          title: 'Web Design',
          desc: 'Websites that impress and convert visitors into customers.',
          bullets: ['Premium UX/UI', 'SEO optimized', 'Maximum performance', 'Fully responsive']
        },
        {
          title: 'Strategic Consulting',
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
          title: 'SaaS #1',
          desc: 'Coming soon - Revolutionize your management.',
          features: ['Coming soon'],
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
      title: 'Entre em Contacto',
      subtitle: 'Vamos conversar sobre como podemos acelerar os seus resultados',
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
          'Até € 1.000',
          'Entre € 1.000 e € 3.000',
          'Acima de € 3.000'
        ],
        submit: 'Fale com um Consultor',
        consent: 'Ao submeter, aceita a nossa Política de Privacidade (RGPD).',
        required: 'Campo obrigatório'
      }
    },
    
    // Footer
    footer: {
      tagline: 'Sites e automações que aceleram resultados',
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
      headline: 'Websites and automations that sell every day.',
      subheadline: 'Creative studio that combines premium web design, intelligent automation and qualified traffic to accelerate your results.',
      cta1: 'Chat on WhatsApp',
      cta2: 'See Services'
    },
    
    // About
    about: {
      title: 'Newt Company',
      subtitle: 'Creative studio specialized in websites and automations that generate real results.',
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
          title: 'Automation Management',
          desc: 'Automate processes and sales with intelligence.',
          bullets: ['WhatsApp & email bots', 'Conversion funnels', 'CRM integrations', 'Contracts & billing']
        },
        {
          title: 'Traffic Management',
          desc: 'Attract qualified visitors and convert more.',
          bullets: ['Strategic planning', 'High-conversion creatives', 'A/B testing', 'Detailed reports']
        },
        {
          title: 'Web Design',
          desc: 'Websites that impress and convert visitors into customers.',
          bullets: ['Premium UX/UI', 'SEO optimized', 'Maximum performance', 'Fully responsive']
        },
        {
          title: 'Strategic Consulting',
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
          title: 'SaaS #1',
          desc: 'Coming soon - Revolutionize your management.',
          features: ['Coming soon'],
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
        budget: 'What\'s your budget range?',
        budgetOptions: [
          'Up to $1,000',
          'Between $1,000 and $3,000',
          'Above $3,000'
        ],
        submit: 'Talk to a Consultant',
        consent: 'By submitting, you agree to our Privacy Policy (GDPR/LGPD).',
        required: 'Required field'
      }
    },
    
    // Footer
    footer: {
      tagline: 'Websites and automations that accelerate results',
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