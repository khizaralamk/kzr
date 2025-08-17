import { FaGithub, FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import VectorIcon from '../assets/icons/Vector.svg';

export default function NavBar() {

  return (
    <div className="w-full mt-6 sm:mt-10 px-9 sm:px-4 md:px-20 lg:px-56">
      <div className="flex flex-row justify-between w-full h-10 sm:h-12 md:h-14 items-center">
        {/* Left Section: Social Icons */}
        <div className="flex items-center w-auto">
          {/* Social Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a href="https://github.com/KhizarAlam20" target='_blank' aria-label="GitHub" className="hover:opacity-70">
              <FaGithub size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="#" aria-label="X" className="hover:opacity-70">
              <FaXTwitter size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
              <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://instagram.com/khizaralam09" target='_blank' aria-label="Instagram" className="hover:opacity-70">
              <FaInstagram size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
        {/* Right Section: Hamburger Menu */}
        <div className="flex items-center justify-end w-auto">
          <button className="p-1 sm:p-2 rounded focus:outline-none" aria-label="Menu">
            <img src={VectorIcon} alt="Menu" className="w-6 h-2 sm:w-7 sm:h-3" />
          </button>
        </div>
      </div>
    </div>
  )
}
