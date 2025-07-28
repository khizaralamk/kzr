import 'custom-cursor-react/dist/index.css'
import AboutSection from './components/AboutSection'
import GallerySection from './components/GallerySection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
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
       
      </main>

      <footer className="border-t-4 border-blue-500"></footer>
    </div>
  )
}
