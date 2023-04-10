import React from 'react';
import externalLinkProps from '../utils/external-link-props';
import { FaInstagram } from 'react-icons/fa';

export default function InstagramCTA() {
  return (
    <a
      className='inline-flex items-center px-3 py-1 mr-4 bg-white rounded-xl text-manaca'
      href="https://www.instagram.com/manaca.consultoria"
      {...externalLinkProps}
    >
      <span>
        Instagram
      </span>

      <FaInstagram className='ml-2 text-manaca' />
    </a>
  )
}