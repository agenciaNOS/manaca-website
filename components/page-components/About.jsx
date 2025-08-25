import React from 'react';
import Image from 'next/image';

function About({ aboutSection }) {
  const { introText, teamText, partnerOne, partnerTwo } = aboutSection;

  return (
    <div className="bg-gray bg-cover bg-center py-20" id="about">
      <p className="text-center">
        <Image
          src="/manaca-logo.svg"
          alt="Manacá"
          width={400}
          height={200}
          display="block"
          className="mx-auto block text-center w-full"
        />
      </p>
      <div className="container px-4">
        <p className="md:text-2xl text-xl text-center text-secondary font-bold py-10">
          {introText}
        </p>
        <div className="text-center py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">SOBRE NÓS E EQUIPE</h2>
          <div className="max-w-4xl mx-auto">
            {teamText.split('\n').map((line, index) => (
              <p key={index} className="md:text-xl text-lg text-secondary font-semibold mb-3">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-baseline my-10">
          <div className="flex flex-col md:flex-row justify-center items-center mb-10 md:mr-10 f md:mb-0 w-100">
            <Image
              src={partnerOne.image}
              alt={partnerOne.name}
              width={350}
              height={350}
              className="rounded-full mb-5 md:mb-0 transform hover:rotate-6 transition duration-500 ease-in-out"
            />
            <span className="ml-6 w-72">
              <p className="text-center md:text-left text-secondary font-bold text-2xl mb-5">
                {partnerOne.name}
              </p>
              <p className="text-center md:text-left text-secondary mb-5">
                {partnerOne.role}
              </p>
              <p className="text-center md:text-left text-secondary text-sm">
                {partnerOne.about}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
