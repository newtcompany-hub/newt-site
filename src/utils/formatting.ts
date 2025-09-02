import type { Locale } from '../i18n/translations';

export function formatPhone(phone: string, locale: Locale): string {
  if (locale === 'pt-BR') {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (locale === 'pt-PT') {
    return phone.replace(/(\d{3})(\d{3})(\d{3})/, '+351 $1 $2 $3');
  } else {
    return phone; // E.164 format
  }
}

export function formatCurrency(amount: number, locale: Locale): string {
  const formatters = {
    'pt-BR': new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }),
    'pt-PT': new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }),
    'en': new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
  };
  
  return formatters[locale].format(amount);
}

export function formatDate(date: Date, locale: Locale): string {
  const formatters = {
    'pt-BR': new Intl.DateTimeFormat('pt-BR'),
    'pt-PT': new Intl.DateTimeFormat('pt-PT'), 
    'en': new Intl.DateTimeFormat('en-US')
  };
  
  return formatters[locale].format(date);
}