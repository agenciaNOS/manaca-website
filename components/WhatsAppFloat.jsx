import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsAppUser } from '../content/whatsapp';

const whatsappHref = `https://api.whatsapp.com/send?phone=${whatsAppUser}&text=Olá%2C%20Manaca!`;

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
