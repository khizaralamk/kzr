import 'custom-cursor-react/dist/index.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import GallerySection from './components/GallerySection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import VideoSection from './components/VideoSection'
import './index.css'

export default function App() {
  return (
    <div className='scroll-smooth'>
    
      <header>
        <Navbar />
      </header>

      <main className="w-full ">
        <HeroSection />
        <GallerySection />
        <AboutSection />
        <VideoSection />
        <ContactSection />
      </main>

      <footer className=""></footer>
    </div>
  )
}
