import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBuilding, FaIndustry } from 'react-icons/fa'
import React from 'react'

const properIcon = (area) => {
    switch (area.title) {
        case 'Indústrias':
        return <FaIndustry />
        case 'Empreendimentos urbanos':
        return <FaBuilding />
        case 'Empreendimentos rurais':
        return <FaBuilding />
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
        <div key={index} className="justify-center items-center my-5">
            <div>
                {properIcon(area)}
                <h1>
                    {area.title}
                </h1>
                <p>
                    {area.description}
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start my-5 flex-wrap">
                {area.services.map((service, index) => (
                <div key={index}
                    className="flex flex-col md:flex-row justify-center items-center my-5 mx-5 rounded py-4 px-4 w-1/2 md:w-1/4">
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