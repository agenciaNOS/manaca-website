import { instagramUser } from './instagram';
import { whatsAppUser } from './whatsapp';

export const externalLinkProps = { target: '_blank', rel: 'noopener nofollow noreferrer external' }

const instagramHref = `https://www.instagram.com/${instagramUser}`;

// Text can be customized through process.env, or a back-end (preferred)
const whatsAppText = 'Ola%2C%20Manaca!';
const whatsAppHref = `https://api.whatsapp.com/send?phone=${whatsAppUser}&text=${whatsAppText}`;

export const ctaItems = [
  { key: 'home', href: '/#', text: 'Home' },
  { key: 'about', href: '/#about', text: 'Sobre nós' },
  { key: 'contact', href: '/#contact', text: 'Contato' },
  { key: 'instagram', href: instagramHref, text: 'Instagram', ...externalLinkProps },
  { key: 'whats-app', href: whatsAppHref, text: 'WhatsApp', ...externalLinkProps }
];
