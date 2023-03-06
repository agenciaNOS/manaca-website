import React from 'react'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Hero({ heroSection }) {
  const { title, CTA } = heroSection
  return (
    // create a new layer to overlay
    <div className="background text-white flex flex-col justify-center items-center">
      <div className="bg-black bg-opacity-50 backdrop-filter w-screen h-screen flex flex-col justify-center items-center">
          <h1 className="md:text-6xl text-5xl text-center font-bold my-2 md:my-5 text-white">
            {title}
          </h1>

          <p className="md:text-xl text-2xl text-center text-white">
           {CTA}
          </p>

          <div className="flex flex-row md:flex-row justify-center items-center my-5">
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5535992266995&text=Ola%2C%20Manaca!" className='card bg-manaca flex items-center'>
              <FaWhatsapp className="inline-flex" />
            </a>
            <a target="_blank" rel="noreferrer" href="mailto:manaca.camanducaia@gmail.com" className='card bg-manaca flex items-center'>
              <FaEnvelope className="inline-flex " />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-white my-8">Saiba mais sobre nós</p>
            <a href="#about" className="text-white border-2 border-white rounded-full p-2 hover:bg-manaca hover:border-manaca transition duration-500 ease-in-out animate-bounce">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
            </div>
            </div>
        </div>
  )
}

export default Hero