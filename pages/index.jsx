import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import { copyData } from '../content/copy'

const { heroSection, aboutSection, servicesSection, clientsSection, contactSection } = copyData


export default function Home() {

  return (
    <>
      <div className="">
        <Head>
          <title>Manacá – Consultoria Ambiental</title>
          <meta name="description" content="feito por agência NÓS usando next app" />
          <link rel="icon" href="/favicon.ico" />
          <style>
            @import url(&quot;https://fonts.googleapis.com/css2?family=Dosis&display=swap&quot;);
          </style>
        </Head>
        <main className={styles.main}>
          <Header />
          <Intro heroSection={heroSection} />
          <About aboutSection={aboutSection} />
          <Services servicesSection={servicesSection} />
          <Clients clientsSection={clientsSection} />
          <Contact contactSection={contactSection} />
        </main>
        <footer className={styles.footer}>
          <p>Criado com NextJS - Desenvolvido por <a href="https://agencianos.com.br">agência NÓS</a></p>
        </footer>
      </div>
    </>
  )
}
