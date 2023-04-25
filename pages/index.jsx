import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Hero,
  About,
  Services,
  Clients,
  Contact,
  Testimonials,
} from '../components/page-components';
import { copyData } from '../content/copy';

const { heroSection, aboutSection, servicesSection, clientsSection, contactSection } = copyData


export default function Home() {
  return (
    <>
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
        <Testimonials />
        <Contact contactSection={contactSection} />
      </main>
      <Footer />
    </>
  )
}
