import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0060AF] text-white py-5">
      <div className="container mx-auto max-w-[1320px] px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold flex-shrink-0 mr-16">
          <img src="images/logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Nav Links */}
        <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/about" className="block py-2 px-4">About</Link>
          <Link to="/category" className="block py-2 px-4">Category</Link>
          <Link to="/services" className="block py-2 px-4">Services</Link>
          <Link to="/colours" className="block py-2 px-4">Colours</Link>
          <Link to="/downloads" className="block py-2 px-4">Downloads</Link>
          <Link to="/become-a-dealer" className="block py-2 px-4">Become a Dealer</Link>
          <Link to="/blogs" className="block py-2 px-4">Blogs</Link>
          <Link to="/contact" className="block py-2 px-4">Contact</Link>
          <Link to="/enquire" className="hidden lg:block bg-white text-[#0060AF] py-2 px-4 rounded-[20px] hover:bg-[#0060AF] hover:text-white hover:outline hover:outline-white hover:outline-2 ml-8 transition-all">Enquire Now</Link>
        </div>


        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
