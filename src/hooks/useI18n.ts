import { useState, useEffect } from 'react';
import { translations, type Locale } from '../i18n/translations';

export function useI18n() {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('newt-locale');
    if (saved && (saved === 'pt-BR' || saved === 'pt-PT' || saved === 'en')) {
      return saved as Locale;
    }
    return 'pt-BR';
  });

  useEffect(() => {
    localStorage.setItem('newt-locale', locale);
    document.documentElement.lang = locale;
    
    // Update page title and meta description
    const t = translations[locale];
    document.title = locale === 'pt-BR' 
      ? 'Newt Company - Sites e Automações que Vendem'
      : locale === 'pt-PT'
      ? 'Newt Company - Sites e Automações que Vendem'
      : 'Newt Company - Websites and Automations that Sell';
      
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 
        locale === 'pt-BR' 
          ? 'Estúdio criativo especializado em sites e automações que geram resultados. União perfeita de web design, automação e tráfego pago.'
          : locale === 'pt-PT'
          ? 'Estúdio criativo especializado em sites e automações que geram resultados. União perfeita de web design, automação e tráfego pago.'
          : 'Creative studio specialized in websites and automations that generate results. Perfect union of web design, automation and paid traffic.'
      );
    }
  }, [locale]);

  const t = translations[locale];
  
  return { locale, setLocale, t };
}