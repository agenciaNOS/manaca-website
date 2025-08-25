import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import {
  Hero,
  About,
  Services,
  Clients,
  Contact,
  Testimonials,
} from '../components/page-components';
import { copyData } from '../content/copy';

const {
  heroSection,
  aboutSection,
  servicesSection,
  clientsSection,
  contactSection,
} = copyData;

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Manacá – Consultoria Ambiental Sustentável</title>
        <meta
          name="description"
          content="Soluções ambientais sustentáveis para o seu negócio - Camanducaia e região"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#34824E" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="w-full touch-pan-y">
        <Hero heroSection={heroSection} />
        
        <div className="py-12 sm:py-20">
          <About aboutSection={aboutSection} />
          <Services servicesSection={servicesSection} />
          <Clients clientsSection={clientsSection} />
          <Testimonials />
        </div>

        <Contact contactSection={contactSection} />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
