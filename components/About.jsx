import React from 'react'
import Image from 'next/image'

function About({ aboutSection }) {
    const { introText, partnerOne, partnerTwo } = aboutSection
    return (
        <div className="bg-secondary bg-cover bg-center py-20" id="about">
            <p className="text-center">
            <Image src="/manaca-logo-white.svg" alt="Manacá" width={400} height={200} display="block" className="mx-auto block text-center w-full" />
                </p>
            <div className="container px-4">
                <p className="md:text-2xl text-xl text-center text-white font-bold py-10">
                    {introText}
                </p>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center my-10">
                    <div className="md:mr-10 flex flex-col justify-center items-center mb-10 md:mb-0">
                        <Image src={partnerOne.image} alt={partnerOne.name} width={200} height={200} className="rounded-full" />
                        <p className="text-center text-white">
                            {partnerOne.name}
                        </p>
                        <p className="text-center text-white mb-5">
                            {partnerOne.role}
                        </p>
                        <p className="text-center text-white text-sm">
                            {partnerOne.about}
                        </p>
                    </div>
                    <div className="md:mr-10 flex flex-col justify-center items-center">
                    <Image src={partnerOne.image} alt={partnerOne.name} width={200} height={200} className="rounded-full" />
                    <p className="text-center text-white">
                            {partnerTwo.name}
                        </p>
                        <p className="text-center text-white mb-5">
                            {partnerTwo.role}
                        </p>
                        <p className="text-center text-white text-sm">
                            {partnerOne.about}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About