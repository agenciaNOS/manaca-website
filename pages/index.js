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
        @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
        </style>
      </Head>
      <Header/>
      <div className="container">
      <main className='bg-white main'>
      <FaPagelines className="mr-3 text-6xl text-color-emerald-500 inline-flex"/>       
      <h4 className="md:text-base text-sm text-center my-2 md:my-5">Manacá Engenharia e Meio Ambiente</h4>
      <h1 className="md:text-4xl text-xl text-center font-bold my-2 md:my-5">
      Precisando de alguma solução <br/>ou projeto ambiental?
    </h1>

        <p className="md:text-4xl text-xl my-2 md:my-5 underline decoration-4 decoration-emerald-500">
          Nós podemos lhe ajudar!
        </p>

        <div className="my-10 grid">
          <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5535992266995&text=Ola%2C%20Manaca!" className='card bg-emerald-400 flex items-center'>
          <FaWhatsapp className="mr-3 inline-flex"/><h2>         
WhatsApp</h2>
          </a>

          <a target="_blank" rel="noreferrer" href="mailto:manaca.camanducaia@gmail.com" className='card bg-emerald-400 flex items-center'>
          <FaEnvelope className="mr-3 inline-flex "/>
<h2>Envie um e-mail</h2>
          </a>

          {/* <a href="https://nextjs.org/docs" className='card backdrop-blur-sm bg-white/30'>
            <h2>WhatsApp</h2>
          </a>

          <a href="https://nextjs.org/docs" className='card backdrop-blur-sm bg-white/30'>
            <h2>WhatsApp</h2>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
       <p>Powered by Vercel - Desenvolvido por agência NÓS</p>
      </footer>
    </div>
  </div>

  )
}
