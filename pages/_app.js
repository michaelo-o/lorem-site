import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {AuthContextProvider} from '../stores/authContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AuthContextProvider>
  )
}

export default MyApp
