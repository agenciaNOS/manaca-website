import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import { copyData } from '../content/copy'
import notion from '../notion'


const { heroSection, aboutSection, servicesSection, clientsSection, contactSection } = copyData


export default function Home() {

  return (
    <>
      <div>
        <Head>
          <title>Manacá – Consultoria Ambiental</title>
          <meta name="description" content="feito por agência NÓS usando next app" />
          <link rel="icon" href="/favicon.ico" />
          <style>
            @import url(&quot;https://fonts.googleapis.com/css2?family=Dosis&display=swap&quot;);
          </style>
        </Head>
        <main>
          <Header />
          <Hero heroSection={heroSection} />
          <About aboutSection={aboutSection} />
          <Services servicesSection={servicesSection} />
          <Clients clientsSection={clientsSection} />
          <Contact contactSection={contactSection} />
        </main>
        <footer className="container mx-auto px-4">
          <p>Criado com NextJS - Desenvolvido por <a href="https://agencianos.com.br">agência NÓS</a></p>
        </footer>
      </div>
    </>
  )
}
