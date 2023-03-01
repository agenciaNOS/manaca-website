import React from 'react'

function Contact({ contactSection }) {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-center text-2xl md:text-4xl font-bold">
                {contactSection.title}
            </h1>
            <p className="text-center text-xl md:text-2xl">
                {contactSection.description}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center my-5">
                <div className="flex flex-col md:flex-row justify-center items-center my-5 mx-5 rounded py-4 px-4 w-1/2 md:w-1/4">
                    <form className="flex flex-col justify-center items-center">
                        <input className="border-2 border-gray-300 p-2 my-2 rounded" type="text" placeholder="Nome" />
                        <input className="border-2 border-gray-300 p-2 my-2 rounded" type="text" placeholder="E-mail" />
                        <input className="border-2 border-gray-300 p-2 my-2 rounded" type="text" placeholder="Telefone" />
                        <textarea className="border-2 border-gray-300 p-2 my-2 rounded" type="text" placeholder="Mensagem" />
                        <button className="bg-blue-500 text-white p-2 my-2 rounded">Enviar</button>
                    </form>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center my-5 mx-5 rounded py-4 px-4 w-1/2 md:w-1/4">
                    <div>
                        <h2>
                            {contactSection.address}
                        </h2>
                        <p>
                            {contactSection.addressText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact