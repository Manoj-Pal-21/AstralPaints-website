import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        className="relative text-white py-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-footer.png')" }}
      >
        {/* for semi-transparent background overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="relative z-10 container mx-auto px-4">
          {/* Footer top section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Group Company</h2>
            <div className="flex justify-center mb-4">
              <img src="images/Group.png" alt="Logo" className="h-12" />
            </div>
            <hr className="border-white-200 mb-4" />
          </div>

          {/* Footer middle section */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 p-4 md:p-8">
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <img src="images/logo.png" alt="Logo" className="h-12" />
            </div>
            <div className="flex-grow text-center mb-4 md:mb-0">
              <p className="text-sm md:text-base font-semibold" style={{ color: "#EEDCB2" }}>
                Sign up to our newsletter
              </p>
              <p className="text-white text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border text-black w-full md:w-64 rounded-[25px] focus:outline-none mb-4 md:mb-0"
                />
                <Link
                  to="/"
                  className="absolute right-[-40px] bg-[#0060AF] text-[#EEDCB2] py-2.5 px-4 rounded-[25px]"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>


          {/* Footer content section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-4">
            <div>
              <h3
                className="text-lg font-medium mb-4"
                style={{ color: "#EEDCB2" }}
              >
                Reach Us
              </h3>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-white mr-2" />
                <span className="text-white font-medium">
                  #417/418, 11th Cross, 4th Phase, Peenya Industrial Area,
                  Bangalore - 560 058
                </span>
              </div>
              <div className="flex items-center mb-2">
                <FaPhoneAlt className="text-white mr-2" />
                <span className="text-white font-medium">
                  +91 – 80 – 42552555
                </span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-white mr-2" />
                <span className="text-white font-medium">
                  info@gem-paints.com
                </span>
              </div>
            </div>

            <div>
              <h3
                className="text-lg font-medium mb-4"
                style={{ color: "#EEDCB2" }}
              >
                About
              </h3>
              <ul>
                <li className="text-white mb-2 font-medium">
                  <a href="#">About Astrals</a>
                </li>
                <li className="text-white mb-2 font-medium">
                  <a href="#">Paint Journey</a>
                </li>
                <li className="text-white mb-2 font-medium">
                  <a href="#">Group Companies</a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg font-medium mb-4"
                style={{ color: "#EEDCB2" }}
              >
                Category
              </h3>
              <ul>
                <li className="text-white mb-2 font-medium">
                  <a href="#">Interior Paints</a>
                </li>
                <li className="text-white mb-2 font-medium">
                  <a href="#">Exterior Paints</a>
                </li>
                <li className="text-white mb-2 font-medium">
                  <a href="#">Undercoats</a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg font-medium mb-4"
                style={{ color: "#EEDCB2" }}
              >
                Services
              </h3>
              <ul>
                <li className="text-white mb-2 font-medium">
                  <a href="#">Wall Painting</a>
                </li>
                <li className="text-white mb-2 font-medium">
                  <a href="#">Water Solution</a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg font-medium mb-4"
                style={{ color: "#EEDCB2" }}
              >
                Downloads
              </h3>
              <h3
                className="text-lg font-medium mb-4"
                style={{ color: "#EEDCB2" }}
              >
                Become a Dealer
              </h3>
              <h3
                className="text-lg font-medium mb-4"
                style={{ color: "#EEDCB2" }}
              >
                Blogs
              </h3>
              <h3
                className="text-lg font-medium mb-4"
                style={{ color: "#EEDCB2" }}
              >
                Contact
              </h3>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-gray font-medium">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white hover:text-gray font-medium">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white hover:text-gray font-medium">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white hover:text-gray font-medium">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* New flex container for footer links */}
      <div className="flex justify-around items-center py-4 bg-[#0060AF] text-white text-sm">
        <Link to="/terms" className="hover:underline">
          Terms & Conditions
        </Link>
        <span className="text-center">ALL RIGHTS RESERVED</span>
        <Link to="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
