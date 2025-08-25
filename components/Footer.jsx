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
    <>Desenvolvido por <a className="font-bold text-white hover:text-darkestgreen transition-colors" href="https://surfe.tech">Surfe Software Solutions</a></>
  )

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <Image 
              src={logoDefault.src}
              alt={logoDefault.alt}
              width={160}
              height={50}
              className="object-contain filter brightness-0 invert mb-4"
            />
            <p className="text-sm text-gray-300">© Manacá Consultoria Ambiental</p>
            <p className="text-sm text-gray-300">{currentYear} - Todos os direitos reservados</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg text-white font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
                href="https://ne-np.facebook.com/manaca.consultoriamg/"
                {...externalLinkProps}
              >
                <FaFacebook className="text-white" size={isMobile() ? 20 : 24} />
              </a>

              <a
                className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
                href="https://br.linkedin.com/company/manac%C3%A1-consultoria-ambiental"
                {...externalLinkProps}
              >
                <FaLinkedin className="text-white" size={isMobile() ? 20 : 24} />
              </a>

              <a
                className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
                href="https://www.instagram.com/manaca.consultoria"
                {...externalLinkProps}
              >
                <FaInstagram className="text-white" size={isMobile() ? 20 : 24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-6 text-center">
          <p className="text-sm text-gray-300">
            {developedByLink}
          </p>
        </div>
      </div>
    </footer>
  )
}