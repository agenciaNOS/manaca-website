import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsAppUser } from '../content/whatsapp';

const whatsappHref = `https://api.whatsapp.com/send?phone=${whatsAppUser}&text=Olá%2C%20Manaca!`;

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      className="bg-primary fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out group animate-pulse hover:animate-none touch-manipulation"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp 
        size={24} 
        className="sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" 
      />
      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-ping"></div>
    </a>
  );
}
