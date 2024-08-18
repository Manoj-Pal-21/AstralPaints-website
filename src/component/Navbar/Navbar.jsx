import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0060AF] text-white py-5 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto max-w-[1320px] px-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold flex-shrink-0 mr-16">
          <img src="images/logo.png" alt="Logo" className="h-8 md:h-10" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto mt-4 lg:mt-0`}>
          <Link to="/" className="block py-2 px-4 text-center lg:py-0 lg:px-2">About</Link>
          <Link to="/" className="block py-2 px-4 text-center lg:py-0 lg:px-2">Category</Link>
          <Link to="/" className="block py-2 px-4 text-center lg:py-0 lg:px-2">Services</Link>
          <Link to="/" className="block py-2 px-4 text-center lg:py-0 lg:px-2">Colours</Link>
          <Link to="/" className="block py-2 px-4 text-center lg:py-0 lg:px-2">Downloads</Link>
          <Link to="/" className="block py-2 px-4 text-center lg:py-0 lg:px-2">Become a Dealer</Link>
          <Link to="/" className="block py-2 px-4 text-center lg:py-0 lg:px-2">Blogs</Link>
          <Link to="/" className="block py-2 px-4 text-center lg:py-0 lg:px-2">Contact</Link>
          <Link to="/" className="block lg:hidden bg-white text-[#0060AF] py-2 px-4 rounded-[20px] hover:bg-[#0060AF] hover:text-white hover:outline hover:outline-white hover:outline-2 mt-4 transition-all">Enquire Now</Link>
          <Link to="/" className="hidden lg:block bg-white text-[#0060AF] py-2 px-4 rounded-[20px] hover:bg-[#0060AF] hover:text-white hover:outline hover:outline-white hover:outline-2 ml-8 transition-all">Enquire Now</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
