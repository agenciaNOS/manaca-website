import React from 'react'

function Clients({ clientsSection }) {
    return (
        <div>
            <ul className="flex flex-row justify-center items-center my-5 flex-wrap">
                {clientsSection.map((client, index) => (
                    <li key={index} className="mx-5">
                        <p className="text-center">{client}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Clients