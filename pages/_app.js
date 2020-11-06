import '../styles/globals.css'
import '../styles/index.css'
import Header from "../components/sidenav"

function MyApp({ Component, pageProps }) {
  return (<><Component {...pageProps} />
     <Header /></>)
}

export default MyApp
