import React from 'react'
// import Image from 'next/image'

function Clients({ clientsSection }) {
    return (
        <div className="container bg-secondary mx-auto min-w-[100%]">
            <h1 className="text-center text-4xl font-bold text-white my-10">
                {clientsSection.title}
            </h1>
            <ul className="flex flex-row justify-center items-baseline my-5 flex-wrap">
                {clientsSection.clients.map((client, index) => (
                    <div key={client.id} className="mx-5 my-1 w-1/2 md:w-1/5 lg:w-1/6">
                        <p className="text-center">
                            {/* <Image src="https://via.placeholder.com/150" width={150} height={150} /> */}
                        </p>
                        <h3 className="text-center text-2xl font-bold text-white m-6">
                            {client.name}
                        </h3>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Clients