import 'custom-cursor-react/dist/index.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import GallerySection from './components/GallerySection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PagingContainer from './components/PagingContainer'
import SkillsSection from './components/SkillsSection'
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
        <PagingContainer sectionNames={['About', 'Video', 'Skills', 'Contact']}>
          <AboutSection />
          <VideoSection />
          <SkillsSection />
          <ContactSection />
        </PagingContainer>
      </main>

      <footer className="border-t-4 border-blue-500"></footer>
    </div>
  )
}
