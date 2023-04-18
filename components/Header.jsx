import React from 'react'
import ctaItems from '../content/cta';
import DrawerMenu from './DrawerMenu';
import IconCTA from './IconCTA';
import Image from 'next/image'
import useDevice from '../hooks/use-device';
import { logo } from '../content/logo';

export default function Header() {
  const device = useDevice();

  const isMobile = () => device === 'mobile';

  const DesktopCTA = (
    <div className="flex">
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
    <nav className='flex items-center flex-wrap p-1 justify-between bg-manaca top-0 z-50'>
      <a className='inline-flex items-center'>
        <Image src={logo.src}
          alt={logo.alt}
          width={180}
          height="100%"
          objectFit="cover"
        />
      </a>

      {isMobile() ? <DrawerMenu /> : DesktopCTA}
    </nav>
  )
}
