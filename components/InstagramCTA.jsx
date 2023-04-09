import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function InstagramCTA() {
  return (
    <a
      href="https://www.instagram.com/manaca.consultoria"
      target="_blank"
      rel="noopener nofollow noreferrer external"
      className='inline-flex items-center px-3 py-1 mr-4 bg-white rounded-xl text-manaca'
    >
      <span>
        Instagram
      </span>

      <FaInstagram className='ml-2 text-manaca' />
    </a>
  )
}