import React, { useState } from 'react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';

import { externalLinkProps } from '../../content/cta';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact({ contactSection }) {
  const [, setFormData] = useState({
    Name: '',
    Email: '',
    telephone: '',
    message: '',
  });

  const handleSubmit = (event) => {
    let submitedData = {};

    event.target.parentNode.childNodes.forEach((child) => {
      if (child.id) {
        submitedData = {
          ...submitedData,
          [child.id]: child.value,
        };
      }
    });

    // validate data
    if (
      !submitedData.Name ||
      !submitedData.Email ||
      !submitedData.telephone ||
      !submitedData.serviceType
    ) {
      toast.error('Por favor, preencha todos os campos!');

      return;
    }

    setFormData(submitedData);

    // send data to Notion API
    fetch('/api/notion', {
      method: 'POST',
      body: JSON.stringify(submitedData),
    });

    // clear form
    event.target.parentNode.childNodes.forEach((child) => {
      if (child.id) {
        child.value = '';
      }
    });

    toast.success('Mensagem enviada com sucesso! Você será redirecionado em 1 segundo.');

    setTimeout(() => {
      window.location.href = '/'
    }, 1000);

  };

  return (
    <section
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-32"
      id="contact"
    >
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
            {contactSection.title}
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light px-2">
            {contactSection.description}
          </p>
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 mb-12 sm:mb-16 md:mb-20">
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="space-y-4 sm:space-y-6 md:-full">
                <div className="form-group">
                  <label htmlFor="Name" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200">Nome Completo *</label>
                  <input
                    id="Name"
                    className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-white hover:border-gray-400 text-base placeholder-gray-500 shadow-sm focus:shadow-md"
                    type="text"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Email" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200">E-mail *</label>
                  <input
                    id="Email"
                    className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-white hover:border-gray-400 text-base placeholder-gray-500 shadow-sm focus:shadow-md"
                    type="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200">Telefone *</label>
                  <input
                    id="telephone"
                    className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-white hover:border-gray-400 text-base placeholder-gray-500 shadow-sm focus:shadow-md"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="form-group">
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200">Tipo de Serviço *</label>
                  <div className="relative">
                    <select
                      id="serviceType"
                      className="w-full px-4 py-3.5 pr-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 appearance-none bg-white hover:border-gray-400 text-base shadow-sm focus:shadow-md cursor-pointer"
                      required
                    >
                    <option value="Nenhum">Selecione o tipo de serviço</option>
                    <option value="Planejamento e Licenciamento Ambiental">Planejamento e Licenciamento Ambiental</option>
                    <option value="Documentações Ambientais">Documentações Ambientais</option>
                    <option value="Controle Ambiental e gestão de condicionantes">Controle Ambiental e gestão de condicionantes</option>
                    <option value="Regulizaricação de Empreendimentos urbanos">Empreendimentos urbanos</option>
                    <option value="Regulizaricação de Empreendimentos rurais">Empreendimentos rurais</option>
                    <option value="Regulizaricação de Loteamentos">Loteamentos</option>
                    <option value="Outros">Outros</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200">Mensagem</label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-white hover:border-gray-400 resize-none text-base placeholder-gray-500 shadow-sm focus:shadow-md"
                    rows="5"
                    placeholder="Descreva sua necessidade em detalhes..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 text-base min-h-[52px] focus:ring-4 focus:ring-primary/30 focus:outline-none"
                type="submit"
                onClick={handleSubmit}
                aria-label="Enviar formulário de contato"
              >
                <span>Enviar Mensagem</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-full md:w-72 md:h-72 aspect-square flex flex-col justify-center items-center">
              <a
                className="flex justify-center items-center mb-4 sm:mb-6 p-4 sm:p-5 bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 sm:w-20 sm:h-20 shadow-lg transition-transform duration-300 hover:scale-110"
                href={contactSection.addressLink}
                {...externalLinkProps}
              >
                <FaMapMarkerAlt className="text-2xl text-white" />
              </a>
              <h2 className="text-base sm:text-lg font-bold text-primary text-center mb-3 sm:mb-4">
                {contactSection.address}
              </h2>
              <p className="text-gray-600 text-center text-xs sm:text-sm leading-relaxed px-2">{contactSection.addressText}</p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-full md:w-72 md:h-72 aspect-square flex flex-col justify-center items-center">
              <a
                className="flex justify-center items-center mb-6 p-5 bg-gradient-to-br from-primary to-accent rounded-full w-20 h-20 shadow-lg transition-transform duration-300 hover:scale-110"
                href={contactSection.phoneCallLink}
                {...externalLinkProps}
              >
                <FaPhoneAlt className="text-2xl text-white" />
              </a>
              <h2 className="text-base sm:text-lg font-bold text-primary text-center mb-3 sm:mb-4">Telefone</h2>
              <p className="text-gray-600 text-center text-xs sm:text-sm">{contactSection.phone}</p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-full md:w-72 md:h-72 aspect-square flex flex-col justify-center items-center">
              <a
                className="flex justify-center items-center mb-6 p-5 bg-gradient-to-br from-primary to-accent rounded-full w-20 h-20 shadow-lg transition-transform duration-300 hover:scale-110"
                href={contactSection.whatsappLink}
                {...externalLinkProps}
              >
                <FaWhatsapp className="text-2xl text-white" />
              </a>
              <h2 className="text-base sm:text-lg font-bold text-primary text-center mb-3 sm:mb-4">WhatsApp</h2>
              <p className="text-gray-600 text-center text-xs sm:text-sm">{contactSection.phone}</p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-full md:w-72 md:h-72 aspect-square flex flex-col justify-center items-center">
              <a
                className="flex justify-center items-center mb-6 p-5 bg-gradient-to-br from-primary to-accent rounded-full w-20 h-20 shadow-lg transition-transform duration-300 hover:scale-110"
                href={contactSection.emailLink}
                {...externalLinkProps}
              >
                <FaEnvelope className="text-2xl text-white" />
              </a>
              <h2 className="text-base sm:text-lg font-bold text-primary text-center mb-3 sm:mb-4">E-mail</h2>
              <div className="text-center">
                {contactSection.emails.map((email) => (
                  <p className="text-gray-600 text-xs sm:text-sm" key={email}>
                    {email}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
