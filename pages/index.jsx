import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import { copyData } from '../content/copy';
import Carousel from '../components/Carousel';
import { formattedTestimonials, testimonials } from '../content/testimonials';

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
        <Contact contactSection={contactSection} />
        <Carousel>
          {formattedTestimonials().map((testimonials) => (
            JSON.stringify(testimonials)
            <div className="flex flex-col md:flex-row justify-center items-center mb-8 mr-6 rounded p-4 sm:w-1/4 w-1/1 shadow-xl hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            </div>
          ))}
        </ Carousel>
      </main>
      <Footer />
    </>
  )
}
