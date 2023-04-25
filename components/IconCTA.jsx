import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { hasExclusiveCTA } from '../utils/cta';

export default function IconCTA({ socialMedia = null, text, ...rest}) {
  const mappedCTA = {
    instagram: {
      component: <FaInstagram className='ml-2 text-manaca' />,
      title: 'Instagram',
    },
    'whats-app': {
      component: <FaWhatsapp className='ml-2 text-manaca' />,
      title: 'WhatsApp',
    },
  };

  const iconCTA = (
    <a
      className='inline-flex items-center px-3 py-1 mr-4 bg-white rounded-xl text-manaca'
      {...rest}
    >
      <span>
        {mappedCTA[socialMedia]?.title}
      </span>

      {mappedCTA[socialMedia]?.component}
    </a>
  )

  const defaultCTA = (
    <a
      className="inline-flex items-center px-3 py-1 mr-4 text-white"
      {...rest}
    >
      {text}
    </a>
  )

  return hasExclusiveCTA(socialMedia) ? iconCTA : defaultCTA;
}
