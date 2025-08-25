import React from 'react'
import { ctaItems } from '../content/cta';
import DrawerMenu from './DrawerMenu';
import IconCTA from './IconCTA';
import Image from 'next/image'
import useDevice from '../hooks/use-device';
import { logoColorful } from '../content/logo';

export default function Header() {
  const device = useDevice();

  const isMobile = () => device === 'mobile';

  const DesktopCTA = (
    <div className="flex items-center space-x-4 text-primary">
      {ctaItems.map(({ key, ...itemProps }) => (
        <IconCTA
          key={key}
          socialMedia={key}
          {...itemProps}
        />
      ))}
    </div>
  )

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8'>
        <Image
          priority
          src={logoColorful.src}
          alt={logoColorful.alt}
          width={80}
          height={80}
          className="object-contain rounded-md"
        />

        <div className='flex items-center'>
          {isMobile() ? <DrawerMenu /> : DesktopCTA}
        </div>
      </nav>
    </header>
  )
}
