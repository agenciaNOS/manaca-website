import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
