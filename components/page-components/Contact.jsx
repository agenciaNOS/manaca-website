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
    <div
      className="mx-auto px-4 bg-secondary bg-cover bg-center py-20"
      id="contact"
    >
      <ToastContainer />
      <h1 className="text-center text-2xl md:text-4xl font-bold text-white">
        {contactSection.title}
      </h1>
      <p className="text-center text-xl md:text-2xl font-bold py-10 text-white">
        {contactSection.description}
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center my-5">
        <div className="flex flex-col md:flex-row justify-center items-stretch my-5 rounded py-4 px-4 w-1/1">
          <form className="w-82 block" onSubmit={(e) => e.preventDefault()}>
            <input
              id="Name"
              className="border-2 border-gray-300 p-2 my-2 rounded w-full"
              type="text"
              placeholder="Nome"
            />
            <input
              id="Email"
              className="border-2 border-gray-300 p-2 my-2 rounded w-full"
              type="text"
              placeholder="E-mail"
            />
            <input
              id="telephone"
              className="border-2 border-gray-300 p-2 my-2 rounded w-full"
              type="text"
              placeholder="Telefone"
            />
            <select
              id="serviceType"
              className="border-2 border-gray-300 p-2 my-2 rounded w-full"
            >
              <option value="Nenhum">Selecione o tipo de serviço</option>
              <option value="Planejamento e Licenciamento Ambiental">
                Planejamento e Licenciamento Ambiental
              </option>
              <option value="Documentações Ambientais">
                Documentações Ambientais
              </option>
              <option value="Controle Ambiental e gestão de condicionantes">
                Controle Ambiental e gestão de condicionantes
              </option>
              <option value="Regulizaricação de Empreendimentos urbanos">
                Empreendimentos urbanos
              </option>
              <option value="Regulizaricação de Empreendimentos rurais">
                Empreendimentos rurais
              </option>
              <option value="Regulizaricação de Loteamentos">
                Loteamentos
              </option>
              <option value="Outros">Outros</option>
            </select>
            <button
              className="bg-white text-secondary p-2 my-2 rounded w-full"
              type="submit"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center my-5 mx-5 rounded py-md:w-full md:items-baseline">
        <div className="w-64 my-5 flex flex-col items-center">
          <a
            className="flex justify-center items-center m-4 p-5 bg-white rounded-full mx-2 w-16 h-16"
            href={contactSection.addressLink}
            {...externalLinkProps}
          >
            <FaMapMarkerAlt className="text-3xl text-secondary" />
          </a>
          <h2 className="text-xl font-bold text-white">
            {contactSection.address}
          </h2>
          <p className="text-white text-center">{contactSection.addressText}</p>
        </div>
        <div className="w-64 my-5 flex flex-col items-center">
          <a
            className="flex justify-center items-center m-4 p-5 bg-white rounded-full mx-2 w-16 h-16"
            href={contactSection.phoneCallLink}
            {...externalLinkProps}
          >
            <FaPhoneAlt className="text-3xl text-secondary" />
          </a>
          <h2 className="text-xl font-bold text-white">Telefone</h2>
          <p className="text-white text-center">{contactSection.phone}</p>
        </div>
        <div className="w-64 my-5 flex flex-col items-center">
          <a
            className="flex justify-center items-center m-4 p-5 bg-white rounded-full mx-2 w-16 h-16"
            href={contactSection.whatsappLink}
            {...externalLinkProps}
          >
            <FaWhatsapp className="text-3xl text-secondary" />
          </a>
          <h2 className="text-xl font-bold text-white">WhatsApp</h2>
          <p className="text-white text-center">{contactSection.phone}</p>
        </div>
        <div className="w-64 my-5 flex flex-col items-center">
          <a
            className="flex justify-center items-center m-4 p-5 bg-white rounded-full mx-2 w-16 h-16"
            href={contactSection.emailLink}
            {...externalLinkProps}
          >
            <FaEnvelope className="text-3xl text-secondary" />
          </a>
          <h2 className="text-xl font-bold text-white">E-mail</h2>
          {contactSection.emails.map((email) => (
            <p className="text-white text-center" key={email}>
              {email}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Contact;
