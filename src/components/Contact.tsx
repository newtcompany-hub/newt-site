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
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.required;
    }
    if (!formData.company.trim()) {
      newErrors.company = t.contact.form.required;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.form.required;
    }
    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.required;
    }
    if (!formData.budget) {
      newErrors.budget = t.contact.form.required;
    }
    if (!formData.source) {
      newErrors.source = t.contact.form.required;
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
      return;
    }

    // Create WhatsApp message
    const message = `*Nova solicitação de proposta*

*Nome:* ${formData.name}
*Empresa:* ${formData.company}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}
*Orçamento:* ${formData.budget}
*Como nos conheceu:* ${formData.source}

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

  const sourceOptions = ['WhatsApp', 'YouTube', 'Instagram', 'TikTok', 'LinkedIn', 'Friends/Referral'];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-newt-black mb-4 sm:mb-6 font-poppins leading-heading">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-body font-inter">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 font-inter">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-3 sm:px-4 py-3 sm:py-3 border rounded-lg custom-focus transition-colors duration-200 font-inter text-sm sm:text-base min-h-[48px] ${
                    errors.name ? 'border-newt-red' : 'border-gray-300'
                  }`}
                  placeholder={t.contact.form.name}
                />
                {errors.name && <p className="text-newt-red text-sm mt-1 font-inter">{errors.name}</p>}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 font-inter">
                  {t.contact.form.company} *
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={`w-full px-3 sm:px-4 py-3 sm:py-3 border rounded-lg custom-focus transition-colors duration-200 font-inter text-sm sm:text-base min-h-[48px] ${
                    errors.company ? 'border-newt-red' : 'border-gray-300'
                  }`}
                  placeholder={t.contact.form.company}
                />
                {errors.company && <p className="text-newt-red text-sm mt-1 font-inter">{errors.company}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 font-inter">
                  {t.contact.form.phone} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-3 sm:px-4 py-3 sm:py-3 border rounded-lg custom-focus transition-colors duration-200 font-inter text-sm sm:text-base min-h-[48px] ${
                    errors.phone ? 'border-newt-red' : 'border-gray-300'
                  }`}
                  placeholder={t.contact.form.phonePlaceholder}
                />
                {errors.phone && <p className="text-newt-red text-sm mt-1 font-inter">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 font-inter">
                  {t.contact.form.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 sm:px-4 py-3 sm:py-3 border rounded-lg custom-focus transition-colors duration-200 font-inter text-sm sm:text-base min-h-[48px] ${
                    errors.email ? 'border-newt-red' : 'border-gray-300'
                  }`}
                  placeholder={t.contact.form.emailPlaceholder}
                />
                {errors.email && <p className="text-newt-red text-sm mt-1 font-inter">{errors.email}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="mb-4 sm:mb-6">
              <label htmlFor="message" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 font-inter">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg custom-focus transition-colors duration-200 resize-none font-inter text-sm sm:text-base sm:rows-4"
                placeholder={t.contact.form.messagePlaceholder}
              ></textarea>
            </div>

            {/* Budget */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4 font-inter">
                {t.contact.form.budget} *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {t.contact.form.budgetOptions.map((option, index) => (
                  <label
                    key={index}
                    className={`relative flex items-center p-3 sm:p-4 border rounded-lg cursor-pointer hover:bg-red-50 hover:border-newt-red transition-all duration-200 min-h-[48px] custom-focus ${
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
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 rounded-full mr-2 sm:mr-3 flex items-center justify-center flex-shrink-0 ${
                      formData.budget === option ? 'border-newt-red' : 'border-gray-300'
                    }`}>
                      {formData.budget === option && (
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-newt-red rounded-full"></div>
                      )}
                    </div>
                    <span className="text-sm sm:text-base text-gray-900 font-medium font-inter">{option}</span>
                  </label>
                ))}
              </div>
              {errors.budget && <p className="text-newt-red text-sm mt-2 font-inter">{errors.budget}</p>}
            </div>

            {/* How did you hear about us */}
            <div className="mb-4 sm:mb-6">
              <label htmlFor="source" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 font-inter">
                How did you hear about us? *
              </label>
              <select
                id="source"
                value={formData.source}
                onChange={(e) => handleInputChange('source', e.target.value)}
                className={`w-full px-3 sm:px-4 py-3 sm:py-3 border rounded-lg custom-focus transition-colors duration-200 font-inter text-sm sm:text-base min-h-[48px] bg-white ${
                  errors.source ? 'border-newt-red' : 'border-gray-300'
                }`}
              >
                <option value="">Select an option</option>
                {sourceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.source && <p className="text-newt-red text-sm mt-1 font-inter">{errors.source}</p>}
            </div>

            {/* Consent */}
            <div className="mb-6 sm:mb-8">
              <label className="flex items-start space-x-2 sm:space-x-3 cursor-pointer group custom-focus">
                <div className="relative mt-0.5 sm:mt-1 flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => handleInputChange('consent', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${
                    formData.consent ? 'bg-newt-red border-newt-red' : 'border-gray-300 group-hover:border-newt-red'
                  }`}>
                    {formData.consent && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />}
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-gray-700 leading-body font-inter">
                  {t.contact.form.consent}
                </span>
              </label>
              {errors.consent && <p className="text-newt-red text-sm mt-2 font-inter">{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full bg-newt-red hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2 custom-focus font-inter min-h-[52px] sm:min-h-[56px]"
            >
              <span>{t.contact.form.submit}</span>
              <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}