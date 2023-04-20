import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

function Contact({ contactSection }) {
    const [, setFormData] = React.useState({
        Name: '',
        Email: '',
        telephone: '',
        message: ''
    })
    const handleSubmit = event => {
        let submitedData = {}
        event.target.parentNode.childNodes.forEach(child => {
            if (child.id) {
                submitedData = {
                    ...submitedData,
                    [child.id]: child.value
                }
            }
        })
        setFormData(submitedData)

        // send data to Notion API
        fetch('/api/notion', {
            method: 'POST',
            body: JSON.stringify(submitedData)
        })
    }
    return (
        <div className="mx-auto px-4 bg-secondary bg-cover bg-center py-20" id="contact">
            <h1 className="text-center text-2xl md:text-4xl font-bold text-white">
                {contactSection.title}
            </h1>
            <p className="text-center text-xl md:text-2xl font-bold py-10 text-white">
                {contactSection.description}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center my-5">
                <div className="flex flex-col md:flex-row justify-center items-stretch my-5 rounded py-4 px-4 w-1/1">
                    <form className="w-82 block" onSubmit={e => e.preventDefault()}>
                        <input id="Name" className="border-2 border-gray-300 p-2 my-2 rounded w-full" type="text" placeholder="Nome" />
                        <input id="Email" className="border-2 border-gray-300 p-2 my-2 rounded w-full" type="text" placeholder="E-mail" />
                        <input id="telephone" className="border-2 border-gray-300 p-2 my-2 rounded w-full" type="text" placeholder="Telefone" />
                        <select id="serviceType" className="border-2 border-gray-300 p-2 my-2 rounded w-full">
                            <option value="Nenhum">Selecione o tipo de serviço</option>
                            <option value="Planejamento e Licenciamento Ambiental">Planejamento e Licenciamento Ambiental</option>
                            <option value="Documentações Ambientais">Documentações Ambientais</option>
                            <option value="Controle Ambiental e gestão de condicionantes">Controle Ambiental e gestão de condicionantes</option>
                            <option value='Regulizaricação de Empreendimentos urbanos'>Empreendimentos urbanos</option>
                            <option value='Regulizaricação de Empreendimentos rurais'>Empreendimentos rurais</option>
                            <option value='Regulizaricação de Loteamentos'>Loteamentos</option>
                            <option value='Outros'>Outros</option>
                        </select>
                        <button className="bg-white text-secondary p-2 my-2 rounded w-full" type="submit" onClick={handleSubmit}>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center my-5 mx-5 rounded py-4 md:px-4 md:w-full md:items-baseline">
                <div className="w-80 my-5">
                    <div className="flex justify-center items-center m-4 p-5 bg-white rounded-full mx-2 w-16 h-16">
                        <FaMapMarkerAlt className="text-3xl text-secondary" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white">
                            {contactSection.address}
                        </h2>
                        <p className="text-white">
                            {contactSection.addressText}
                        </p>
                    </div>
                </div>
                <div className="w-80 my-5">
                    <div className="flex justify-center items-center m-4 p-5 bg-white rounded-full mx-2 w-16 h-16">
                        <FaPhoneAlt className="text-3xl text-secondary" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white">
                            Telefone
                        </h2>
                        <p className="text-white">
                            {contactSection.phone}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact