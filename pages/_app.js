import '../styles/globals.css';
import '../styles/whatsapp-float.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Script from 'next/script';

library.add(fas);

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-10988155330"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10988155330');
        `}
      </Script>
      <Component {...pageProps} />
      <WhatsAppFloat />
    </>
  );
}

export default MyApp;
