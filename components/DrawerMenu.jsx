import React, { useState } from 'react';
import externalLinkProps from '../utils/external-link-props';
import Image from 'next/image'
import { FaWindowClose, FaBars } from 'react-icons/fa';

export default function DrawerMenu() {
  const [hideDrawerMenu, setHideDrawerMenu] = useState(true);

  const handleToggleDrawerMenu = () => {
    setHideDrawerMenu(!hideDrawerMenu);
  }

  const instagramHref = 'https://www.instagram.com/manaca.consultoria';
  const whatsAppHref = 'https://api.whatsapp.com/send?phone=5535992266995&text=Ola%2C%20Manaca!';

  const menuItems = [
    { key: 'home', href: '/#', text: 'Home' },
    { key: 'about', href: '/#about', text: 'Sobre nós' },
    { key: 'contact', href: '/#contact', text: 'Contato' },
    { key: 'instagram', href: instagramHref, text: 'Instagram', ...externalLinkProps },
    { key: 'whats-app', href: whatsAppHref, text: 'WhatsApp', ...externalLinkProps }
  ];

  return (
    <>
      {!hideDrawerMenu ? (
        <FaWindowClose
          className="flex text-3xl text-white items-center cursor-pointer left-10 top-6 mr-6 z-50"
          onClick={handleToggleDrawerMenu}
        />
      ) : (
        <FaBars
          onClick={handleToggleDrawerMenu}
          className="text-3xl text-white z-30 flex items-center cursor-pointer left-10 top-6 mr-6"
        />
      )}

      <div
        className={`top-0 left-0 w-[75vw] bg-manaca p-6 text-white fixed h-full z-40 shadow-2xl ease-in-out duration-300 ${
          hideDrawerMenu ? "translate-x-[-75vw]" : "translate-x-0"
        }`}
      >
        <Image src="/manaca-logo-white.svg"
          alt="Manacá"
          width={180}
          height="100%"
          objectFit="cover"
        />

        <div className="flex flex-col pl-4 pr-4 mt-6">
          {menuItems.map(({ key, text, ...itemProps }) => (
            <a
              className="text-2xl mb-4"
              key={key}
              onClick={handleToggleDrawerMenu}
              {...itemProps}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
