import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function Contact() {
  const { t, locale } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    budget: '',
    source: '',
    sourceOther: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name?.trim()) {
      newErrors.name = locale === 'pt-BR' ? 'Precisamos do seu nome.' : 
                      locale === 'pt-PT' ? 'Precisamos do seu nome.' : 
                      'We need your name.';
    }
    if (!formData.company?.trim()) {
      newErrors.company = locale === 'pt-BR' ? 'Informe o nome da empresa (ou "Profissional Autônomo").' :
                         locale === 'pt-PT' ? 'Informe o nome da empresa (ou "Profissional Autónomo").' :
                         'Please provide company name (or "Freelancer").';
    }
    if (!formData.phone?.trim()) {
      newErrors.phone = locale === 'pt-BR' ? 'Coloque um número válido com DDD.' :
                       locale === 'pt-PT' ? 'Coloque um número válido.' :
                       'Please provide a valid phone number.';
    }
    if (!formData.email?.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = locale === 'pt-BR' ? 'Digite um e‑mail válido.' :
                       locale === 'pt-PT' ? 'Digite um email válido.' :
                       'Please enter a valid email.';
    }
    if (!formData.budget) {
      newErrors.budget = t.contact.form.required;
    }
    if (!formData.source) {
      newErrors.source = locale === 'pt-BR' ? 'Selecione como nos conheceu.' :
                        locale === 'pt-PT' ? 'Selecione como nos conheceu.' :
                        'Please select how you heard about us.';
    }
    if ((formData.source === 'Outro (vou explicar)' || formData.source === 'Other (will explain)') && !formData.sourceOther?.trim()) {
      newErrors.sourceOther = locale === 'pt-BR' ? 'Por favor, explique como nos conheceu.' :
                             locale === 'pt-PT' ? 'Por favor, explique como nos conheceu.' :
                             'Please explain how you heard about us.';
    }
    if (!formData.consent) {
      newErrors.consent = t.contact.form.required;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Focus on first error field for better UX
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    // Create WhatsApp message
    const sourceText = formData.source === 'Outro (vou explicar)' ? 
      `${formData.source}: ${formData.sourceOther}` : formData.source;

    const message = `*Nova solicitação de proposta*

*Nome:* ${formData.name}
*Empresa:* ${formData.company}
*WhatsApp:* ${formData.phone}
*E-mail:* ${formData.email}
*Orçamento:* ${formData.budget}
*Como nos conheceu:* ${sourceText}

${formData.message ? `*Mensagem:* ${formData.message}` : ''}

Enviado através do site (${locale})`;

    const whatsappUrl = `https://wa.me/5591998382662?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const getSourceOptions = () => {
    if (locale === 'pt-BR' || locale === 'pt-PT') {
      return [
        'Indicação / Amigos',
        'Instagram',
        'LinkedIn', 
        'YouTube',
        'Google',
        'TikTok',
        'WhatsApp',
        'Outro (vou explicar)'
      ];
    } else {
      return [
        'Friends/Referral',
        'Instagram',
        'LinkedIn',
        'YouTube', 
        'Google',
        'TikTok',
        'WhatsApp',
        'Other (will explain)'
      ];
    }
  };

  const getSourceLabel = () => {
    if (locale === 'pt-BR' || locale === 'pt-PT') {
      return 'Como nos conheceu?';
    } else {
      return 'How did you hear about us?';
    }
  };

  const getSourcePlaceholder = () => {
    if (locale === 'pt-BR' || locale === 'pt-PT') {
      return 'Selecione uma opção';
    } else {
      return 'Select an option';
    }
  };

  const getOtherLabel = () => {
    if (locale === 'pt-BR' || locale === 'pt-PT') {
      return 'Conte em uma frase';
    } else {
      return 'Tell us in one sentence';
    }
  };

  const getOtherPlaceholder = () => {
    if (locale === 'pt-BR' || locale === 'pt-PT') {
      return 'Ex.: Vi um post no fórum X';
    } else {
      return 'Ex.: Saw a post on forum X';
    }
  };

  return (
    <div id="contact" className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-newt-black mb-2 sm:mb-3 md:mb-4 font-poppins leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-inter">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 font-inter">
                  {locale === 'pt-BR' || locale === 'pt-PT' ? 'Nome' : 'Name'} *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`mobile-input w-full px-4 py-3 border rounded-lg transition-colors duration-300 font-inter text-base min-h-[48px] ${
                    errors.name ? 'border-newt-red' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2`}
                  placeholder={locale === 'pt-BR' || locale === 'pt-PT' ? 'Como devemos te chamar?' : 'What should we call you?'}
                  autoComplete="given-name"
                />
                {errors.name && <p className="text-newt-red text-sm mt-1 font-inter">{errors.name}</p>}
                <p className="text-sm text-gray-500 mt-1 font-inter">
                  {locale === 'pt-BR' || locale === 'pt-PT' ? 'Pode ser só o primeiro nome.' : 'First name is fine.'}
                </p>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 font-inter">
                  {locale === 'pt-BR' || locale === 'pt-PT' ? 'Nome da empresa' : 'Company name'} *
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={`mobile-input w-full px-4 py-3 border rounded-lg transition-colors duration-300 font-inter text-base min-h-[48px] ${
                    errors.company ? 'border-newt-red' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2`}
                  placeholder={locale === 'pt-BR' || locale === 'pt-PT' ? 'Qual é o nome da sua empresa?' : 'What is your company name?'}
                  autoComplete="organization"
                />
                {errors.company && <p className="text-newt-red text-sm mt-1 font-inter">{errors.company}</p>}
                <p className="text-sm text-gray-500 mt-1 font-inter">
                  {locale === 'pt-BR' ? 'Se for MEI, use o nome fantasia.' : 
                   locale === 'pt-PT' ? 'Se for freelancer, use o nome comercial.' :
                   'If freelancer, use your business name.'}
                </p>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 font-inter">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`mobile-input w-full px-4 py-3 border rounded-lg transition-colors duration-300 font-inter text-base min-h-[48px] ${
                    errors.phone ? 'border-newt-red' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2`}
                  placeholder={locale === 'pt-BR' ? '(DDD) 90000‑0000' : 
                              locale === 'pt-PT' ? '+351 912 345 678' :
                              '+1 (555) 123-4567'}
                  autoComplete="tel"
                />
                {errors.phone && <p className="text-newt-red text-sm mt-1 font-inter">{errors.phone}</p>}
                <p className="text-sm text-gray-500 mt-1 font-inter">
                  {locale === 'pt-BR' || locale === 'pt-PT' ? 'Prometemos não te colocar em grupos.' : 'We promise not to add you to groups.'}
                </p>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 font-inter">
                  E‑mail *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`mobile-input w-full px-4 py-3 border rounded-lg transition-colors duration-300 font-inter text-base min-h-[48px] ${
                    errors.email ? 'border-newt-red' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2`}
                  placeholder={locale === 'pt-BR' || locale === 'pt-PT' ? 'Onde você quer receber o plano de ação?' : 'Where should we send the action plan?'}
                  autoComplete="email"
                />
                {errors.email && <p className="text-newt-red text-sm mt-1 font-inter">{errors.email}</p>}
                <p className="text-sm text-gray-500 mt-1 font-inter">
                  {locale === 'pt-BR' || locale === 'pt-PT' ? 'Nada de spam. Só o que move a agulha.' : 'No spam. Only what moves the needle.'}
                </p>
              </div>
            </div>

            {/* Message */}
            <div className="mb-4 sm:mb-6">
              <label htmlFor="message" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 font-inter">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows={2}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 transition-colors duration-200 resize-none font-inter text-base"
                placeholder={t.contact.form.messagePlaceholder}
              ></textarea>
            </div>

            {/* Budget */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-3 font-inter">
                {t.contact.form.budget} *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {t.contact.form.budgetOptions.map((option, index) => (
                  <label
                    key={index}
                    className={`relative flex items-center p-3 sm:p-4 border rounded-lg cursor-pointer hover:bg-red-50 hover:border-newt-red transition-colors duration-200 min-h-[48px] focus-within:ring-2 focus-within:ring-newt-red focus-within:ring-offset-2 ${
                      formData.budget === option ? 'bg-red-50 border-newt-red' : 'border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="budget"
                      value={option}
                      checked={formData.budget === option}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 border-2 rounded-full mr-3 flex items-center justify-center flex-shrink-0 ${
                      formData.budget === option ? 'border-newt-red' : 'border-gray-300'
                    }`}>
                      {formData.budget === option && (
                        <div className="w-2.5 h-2.5 bg-newt-red rounded-full"></div>
                      )}
                    </div>
                    <span className="text-sm sm:text-base text-gray-900 font-medium font-inter">{option}</span>
                  </label>
                ))}
              </div>
              {errors.budget && <p className="text-newt-red text-sm mt-2 font-inter">{errors.budget}</p>}
            </div>

            {/* How did you hear about us */}
            <div className="mb-3 sm:mb-4 md:mb-6">
              <label htmlFor="source" className="block text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1 sm:mb-2 font-inter">
                {getSourceLabel()} *
              </label>
              <select
                id="source"
                value={formData.source}
                onChange={(e) => handleInputChange('source', e.target.value)}
                className={`mobile-input w-full px-3 sm:px-4 py-3 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 transition-colors duration-200 font-inter text-sm sm:text-base min-h-[48px] bg-white ${
                  errors.source ? 'border-newt-red' : 'border-gray-300'
                }`}
              >
                <option value="">{getSourcePlaceholder()}</option>
                {getSourceOptions().map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.source && <p className="text-newt-red text-xs sm:text-sm mt-1 font-inter">{errors.source}</p>}
            </div>

            {/* Conditional field for "Other" */}
            {(formData.source === 'Outro (vou explicar)' || formData.source === 'Other (will explain)') && (
              <div className="mb-3 sm:mb-4 md:mb-6">
                <label htmlFor="sourceOther" className="block text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1 sm:mb-2 font-inter">
                  {getOtherLabel()} *
                </label>
                <input
                  type="text"
                  id="sourceOther"
                  value={formData.sourceOther}
                  onChange={(e) => handleInputChange('sourceOther', e.target.value)}
                  className={`mobile-input w-full px-3 sm:px-4 py-3 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 transition-colors duration-200 font-inter text-sm sm:text-base min-h-[48px] ${
                    errors.sourceOther ? 'border-newt-red' : 'border-gray-300'
                  }`}
                  placeholder={getOtherPlaceholder()}
                />
                {errors.sourceOther && <p className="text-newt-red text-xs sm:text-sm mt-1 font-inter">{errors.sourceOther}</p>}
              </div>
            )}

            {/* Consent */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <label className="flex items-start space-x-2 sm:space-x-3 cursor-pointer group focus-within:ring-2 focus-within:ring-newt-red focus-within:ring-offset-2 rounded">
                <div className="relative mt-0.5 sm:mt-1 flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => handleInputChange('consent', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 rounded flex items-center justify-center transition-colors duration-200 ${
                    formData.consent ? 'bg-newt-red border-newt-red' : 'border-gray-300 group-hover:border-newt-red'
                  }`}>
                    {formData.consent && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />}
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-gray-700 leading-body font-inter">
                  {t.contact.form.consent}
                </span>
              </label>
              {errors.consent && <p className="text-newt-red text-xs sm:text-sm mt-1 sm:mt-2 font-inter">{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mobile-btn group w-full bg-newt-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-colors duration-200 flex items-center justify-center space-x-3 focus:outline-none focus:ring-2 focus:ring-newt-red focus:ring-offset-2 font-inter min-h-[56px]"
            >
              <span>{t.contact.form.submit}</span>
                <Send className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
    </div>
  );
}