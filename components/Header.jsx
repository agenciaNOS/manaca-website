import React from 'react'
import DrawerMenu from './DrawerMenu';
import Image from 'next/image'
import useDevice from '../hooks/use-device';
import InstagramCTA from './InstagramCTA';

export default function Header() {
  const device = useDevice();

  const isMobile = () => device === 'mobile';

  return (
    <nav className='flex items-center flex-wrap p-1 justify-between bg-manaca top-0 z-50'>
      <a className='inline-flex items-center'>
        <Image src="/manaca-logo-white.svg"
          alt="Manacá"
          width={180}
          height="100%"
          objectFit="cover"
        />
      </a>

      {isMobile() ? <DrawerMenu /> : <InstagramCTA />}
    </nav>
  )
}
