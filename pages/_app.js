import '../styles/globals.css';
import '../styles/whatsapp-float.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import WhatsAppFloat from '../components/WhatsAppFloat';

library.add(fas);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppFloat />
    </>
  );
}

export default MyApp;
