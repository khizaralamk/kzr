import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function ContactSection() {

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-9 py-8 md:py-12 bg-black">
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        {/* Heading */}
        <div className="flex w-full justify-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-benne text-center text-white">get in touch</h2>
        </div>
        
        {/* Contact content - simplified layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-black text-lg" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">hello@yourdomain.com</p>
                  <p className="text-sm text-gray-400">Get in touch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Explore</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">Portfolio</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">About</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">Services</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">Blog</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Connect</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
              >
                <FaGithub className="text-black text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
              >
                <FaLinkedin className="text-black text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
              >
                <FaTwitter className="text-black text-lg" />
              </a>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Let's create something amazing together.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Your Name. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
} 