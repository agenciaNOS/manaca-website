import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { FaPagelines, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="background">    
      <Head>
        <title>Manacá – Consultoria Ambiental</title>
        <meta name="description" content="feito por agência NÓS usando next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
        </style>
      </Head>
      <Header/>
      <div className="container">
      <main className='main backdrop-blur-lg rounded-lg'>
      <h1 className="md:text-5xl text-2xl text-center font-bold my-2 md:my-5">
      Precisando de soluções <br/> ambientais?
    </h1>

        <p className="md:text-4xl font-bold text-2xl my-2 md:my-5 underline decoration-4 decoration-manaca">
          Nós podemos lhe ajudar!
        </p>

        <div className="my-10 grid">
          <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5535992266995&text=Ola%2C%20Manaca!" className='card bg-manaca flex items-center'>
          <FaWhatsapp className="mr-3 inline-flex"/><h2>         
WhatsApp</h2>
          </a>

          <a target="_blank" rel="noreferrer" href="mailto:manaca.camanducaia@gmail.com" className='card bg-manaca flex items-center'>
          <FaEnvelope className="mr-3 inline-flex "/>
<h2>Envie um e-mail</h2>
          </a>

          {/* <a href="https://nextjs.org/docs" className='card backdrop-blur-sm bg-white/30'>
            <h2>WhatsApp</h2>
          </a>

          <a href="https://nextjs.org/docs" className='card backdrop-blur-sm bg-white/30'>
            <h2>WhatsApp</h2>
          </a> */}
          <div className="main-footer">
          <p className="md:text-xs text-xs text-center">
            <span className="text-manaca font-bold text-center">Manacá</span><br/> há mais de 5 anos conciliando projetos e meio ambiente em Minas Gerais</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
       <p>Criado com NextJS - Desenvolvido por <a href="https://agencianos.com.br">agência NÓS</a></p>
      </footer>
    </div>
  </div>

  )
}
