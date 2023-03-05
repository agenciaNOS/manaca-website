import React from 'react'
import Image from 'next/image'

function Clients({ clientsSection }) {
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-bold text-primary my-10">
                {clientsSection.title}
            </h1>
            <ul className="flex flex-row justify-center items-baseline my-5 flex-wrap">
                {clientsSection.clients.map((client, index) => (
                    <div key={index} className="mx-5 my-1 w-1/2 md:w-1/5 lg:w-1/6">
                        <p className="text-center">
                            {/* <Image src="https://via.placeholder.com/150" width={150} height={150} /> */}
                        </p>
                        <h3 className="text-center text-2xl font-bold text-secondary m-6">
                            {client}
                        </h3>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Clients