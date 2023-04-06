import { FaBuilding, FaIndustry, FaTractor } from 'react-icons/fa'
import React from 'react'

const properIcon = (area) => {
    switch (area.title) {
        case 'Indústrias':
            return <FaIndustry className="text-3xl text-white" />
        case 'Empreendimentos urbanos':
            return <FaBuilding className="text-3xl text-white" />
        case 'Empreendimentos rurais':
            return <FaTractor className="text-3xl text-white" />
    }
}

function Services({ servicesSection }) {
    return (
        <div>
            <div className="container mx-auto">
                <p className="md:text-3xl text-xl font-bold mt-8">
                    {servicesSection.introText}
                </p>
            </div>
            <div className="container mx-auto px-4">
                {servicesSection.areas.map((area) => (
                    <div key={area.id} className="justify-center items-center">
                        <div>
                            <div className="flex justify-center items-center m-4 p-5 bg-secondary rounded-full mx-2 w-16 h-16">
                                {properIcon(area)}
                            </div>
                            <h1>
                                {area.title}
                            </h1>
                            <p>
                                {area.description}
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-start items-start my-8 flex-wrap">
                            {area.services.map((service) => (
                                <div key={service.id}
                                    className="flex flex-col md:flex-row justify-center items-center mb-8 mr-6 rounded p-4 sm:w-1/4 w-1/1 shadow-xl hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                                    <div>
                                        <h2>
                                            {service.title}
                                        </h2>
                                        <ul className="list-disc">
                                            {service.list.map((item) => (
                                                <li key={item.id}>
                                                    {item.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services