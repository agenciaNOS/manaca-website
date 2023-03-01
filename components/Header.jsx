import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image' 

export default function Header() {
  return (
    <>
      <nav className='flex items-center flex-wrap p-1 justify-between bg-manaca top-0 z-50'>
          <a className='inline-flex items-center'>
            <Image src="/manaca-logo-white.svg"
            alt="Manacá"
            width={180}
            height="100%"
            objectFit="cover"
            />
            </a>
            <a href="https://www.instagram.com/manaca.consultoria" target="_blank" rel="noreferrer" className='inline-flex items-center px-3 py-1 mr-4 bg-white rounded-xl text-manaca'>
            <span>
                Instagram
            </span>
            <FaInstagram className='ml-2 text-manaca' />
            </a>
      </nav>
    </> 
  )
    
}
