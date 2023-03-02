import React from 'react'

function Contact({ contactSection }) {
    return (
        <div className="mx-auto px-4 bg-secondary bg-cover bg-center py-20 text-white" id="contact">
            <h1 className="text-center text-2xl md:text-4xl font-bold text-white">
                {contactSection.title}
            </h1>
            <p className="text-center text-xl md:text-2xl font-bold py-10 text-white">
                {contactSection.description}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center my-5">
                <div className="flex flex-col md:flex-row justify-center items-center my-5 rounded py-4 px-4 w-1/1">
                    <form className="flex flex-col justify-center items-center w-96">
                        <input className="border-2 border-gray-300 p-2 my-2 rounded w-full" type="text" placeholder="Nome" />
                        <input className="border-2 border-gray-300 p-2 my-2 rounded w-full" type="text" placeholder="E-mail" />
                        <input className="border-2 border-gray-300 p-2 my-2 rounded w-full" type="text" placeholder="Telefone" />
                        <textarea className="border-2 border-gray-300 p-2 my-2 rounded w-full" type="text" placeholder="Mensagem" />
                        <button className="bg-blue-500 text-white p-2 my-2 rounded">Enviar</button>
                    </form>
                </div>
            </div>
                <div className="flex flex-col md:flex-row justify-center items-center my-5 mx-5 rounded py-4 px-4 w-1/2 md:w-1/4">
                    <div>
                        <h2 className="text-xl font-bold text-white">
                            {contactSection.address}
                        </h2>
                        <p className="text-white">
                            {contactSection.addressText}
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Contact