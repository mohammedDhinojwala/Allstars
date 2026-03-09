import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MusicPlayer from '../components/MusicPlayer'

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full">
      <MusicPlayer />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
} 