import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBuilding, FaIndustry } from 'react-icons/fa'
import React from 'react'

const properIcon = (area) => {
    switch (area.title) {
        case 'Indústrias':
        return <FaIndustry className='text-4xl bg-manaca text-white rounded-full p-2' />
        case 'Empreendimentos urbanos':
        return <FaBuilding className='text-4xl bg-manaca text-white rounded-full p-2' />
        case 'Empreendimentos rurais':
        return <FaBuilding className='text-4xl bg-manaca text-white rounded-full p-2' />
}
}

function Services({ servicesSection }) {
return (
<>
    <div className="container mx-auto px-4">
        <p className="md:text-3xl text-xl text-center font-bold py-10">
            {servicesSection.introText}
        </p>
    </div>
    <div className="container mx-auto px-4">
        {servicesSection.areas.map((area, index) => (
        <div key={index} className="justify-center items-center my-12">
            <div>
                {properIcon(area)}
                <h1>
                    {area.title}
                </h1>
                <p>
                    {area.description}
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-start my-4 flex-wrap">
                {area.services.map((service, index) => (
                <div key={index}
                    className="flex flex-col md:flex-row justify-center items-center mx-4 m-2 rounded p-4 w-1/2 md:w-1/4 shadow-xl hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                    <div>
                        <h2>
                            {service.title}
                        </h2>
                        <ul className="list-disc">
                            {service.list.map((item, index) => (
                            <li key={index}>
                                {item}
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
</>
)
}

export default Services