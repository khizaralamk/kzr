import  { useState } from 'react';
import { FaGithub, FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import VectorIcon from '../assets/icons/Vector.svg';

export default function NavBar() {
  const [toggleOn, setToggleOn] = useState(false);

  return (
    <div className="w-full mt-6 sm:mt-10 px-9 sm:px-4 md:px-20 lg:px-56">
      <div className="flex flex-row justify-between w-full h-10 sm:h-12 md:h-14 items-center">
        {/* Left Section: Toggle, Divider, Social Icons */}
        <div className="flex items-center w-auto">
          {/* Toggle Switch */}
          <button
            className={
              `relative w-12 h-7 sm:w-14 sm:h-9 flex items-center bg-white rounded-full shadow focus:outline-none transition-colors border border-gray-300 mr-2 pl-1 pr-1 py-1`
            }
            onClick={() => setToggleOn((prev) => !prev)}
            aria-pressed={toggleOn}
            style={{ minWidth: 48 }}
          >
            <span
              className={
                `absolute top-1 left-1 w-5 h-5 sm:w-7 sm:h-7 rounded-full transition-transform duration-200 shadow-md ${toggleOn ? 'bg-[#1e1e1e] translate-x-4 sm:translate-x-5' : 'bg-gray-300 translate-x-0'}`
              }
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
            />
          </button>
          {/* Divider */}
          <span className="mx-2 sm:mx-4 h-6 sm:h-8 w-px bg-gray-300" />
          {/* Social Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a href="#" aria-label="GitHub" className="hover:opacity-70">
              <FaGithub size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="#" aria-label="X" className="hover:opacity-70">
              <FaXTwitter size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
              <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70">
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
