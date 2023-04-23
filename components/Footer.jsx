import React from 'react';
import Image from 'next/image';
import externalLinkProps from '../utils/external-link-props';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { logoDefault } from '../content/logo';

import useDevice from '../hooks/use-device';

export default function Footer() {
  const device = useDevice();

  const isMobile = () => device === 'mobile';

  const developedByLink = (
    <>Desenvolvido por <a className="font-bold" href="https://agencianos.com.br">agência NÓS</a></>
  )

  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center p-4">
      <div className="flex justify-around flex-col sm:flex-row w-[100%] items-center">
        <span className="max-w-[180px]">
          <Image src={logoDefault.src}
            alt={logoDefault.alt}
            width={180}
            height="100%"
            objectFit="cover"
          />

          <p className="ml-8 text-sm">Manacá. 2022 - {currentYear}</p>
        </span>

        <span className="flex mt-6 sm:mt-0">
          <a
            className="mr-6"
            href="https://ne-np.facebook.com/manaca.consultoriamg/"
            {...externalLinkProps}
          >
            <FaFacebook className="text-blue-800" size={isMobile() ? 32 : 48} />
          </a>

          <a
            className="mr-6"
            href="https://br.linkedin.com/company/manac%C3%A1-consultoria-ambiental"
            {...externalLinkProps}
          >
            <FaLinkedin className="text-blue-600" size={isMobile() ? 32 : 48} />
          </a>

          <a
            href="https://www.instagram.com/manaca.consultoria"
            {...externalLinkProps}
          >
            <FaInstagram className="text-red-400" size={isMobile() ? 32 : 48} />
          </a>
        </span>
      </div>

      <p className="mt-4">
        {developedByLink}
      </p>
    </footer>
  )
}