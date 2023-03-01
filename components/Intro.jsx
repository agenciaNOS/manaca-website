import React from 'react'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Intro({ heroSection }) {
  const { title, CTA } = heroSection
  return (
    <div className="container mx-auto px-4">
          <h1 className="md:text-5xl text-2xl text-center font-bold my-2 md:my-5">
            {title}
          </h1>

          <p className="md:text-2xl text-xl text-center">
           {CTA}
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center my-5">
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5535992266995&text=Ola%2C%20Manaca!" className='card bg-manaca flex items-center'>
              <FaWhatsapp className="mr-3 inline-flex" /><h2>
                WhatsApp</h2>
            </a>

            <a target="_blank" rel="noreferrer" href="mailto:manaca.camanducaia@gmail.com" className='card bg-manaca flex items-center'>
              <FaEnvelope className="mr-3 inline-flex " />
              <h2>Envie um e-mail</h2>
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center my-5">
            <p className="md:text-xs text-xs text-center">
              <span className="text-manaca font-bold text-center">Manacá</span><br /></p>
          </div>
        </div>
  )
}

export default Intro