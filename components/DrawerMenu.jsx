import React, { useState } from 'react';
import { ctaItems } from '../content/cta';
import Image from 'next/image'
import { FaWindowClose, FaBars } from 'react-icons/fa';

export default function DrawerMenu() {
  const [hideDrawerMenu, setHideDrawerMenu] = useState(true);

  const handleToggleDrawerMenu = () => {
    setHideDrawerMenu(!hideDrawerMenu);
  }

  return (
    <>
      {/* Overlay */}
      {!hideDrawerMenu && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          onClick={handleToggleDrawerMenu}
        />
      )}

      <div className="relative z-50 flex items-center justify-center">
        {!hideDrawerMenu ? (
          <FaWindowClose
            className="mobile-menu-icon text-2xl text-primary hover:text-darkestgreen transition-all duration-200 cursor-pointer p-2 rounded-lg touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={handleToggleDrawerMenu}
            aria-label="Fechar menu"
            role="button"
            tabIndex={0}
          />
        ) : (
          <FaBars
            onClick={handleToggleDrawerMenu}
            className="mobile-menu-icon text-2xl text-primary hover:text-darkestgreen transition-all duration-200 cursor-pointer p-2 rounded-lg touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Abrir menu"
            role="button"
            tabIndex={0}
          />
        )}
      </div>

      <div
        className={`top-0 left-0 w-[90vw] max-w-xs bg-white shadow-2xl p-0 fixed h-full z-40 transform transition-transform duration-300 ease-out ${
          hideDrawerMenu ? "translate-x-[-100%]" : "translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="bg-primary p-4 border-b border-primary/20 flex items-center justify-center">
          <Image src="/manaca-logo-white.svg"
            alt="Manacá"
            width={120}
            height={38}
            style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            className="drop-shadow-lg"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-3 space-y-1 bg-white">
          {ctaItems.map(({ key, text, ...itemProps }, index) => (
            <a
              className={`text-base py-3 px-4 rounded-lg text-gray-800 hover:bg-primary/10 active:bg-primary/20 transition-all duration-200 border border-transparent hover:border-primary/20 touch-manipulation transform hover:translate-x-1 font-medium ${
                index === 0 ? 'mt-1' : ''
              }`}
              key={key}
              onClick={handleToggleDrawerMenu}
              style={{ animationDelay: `${index * 50}ms` }}
              {...itemProps}
            >
              <span className="font-medium">{text}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
