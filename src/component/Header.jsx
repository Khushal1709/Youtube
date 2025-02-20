import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import img1 from "../image/logo.png";
import img2 from "../image/R.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={img1} alt="R" className="h-6 md:h-7 mb-3 mr-2 md:mr-4" />
            <img src={img2} alt="RIYANSH" className="h-6 md:h-8" />
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <FontAwesomeIcon icon={faSearch} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            <FontAwesomeIcon icon={faShoppingBag} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="##" className="text-gray-600 hover:text-gray-800">Search</a>
              <a href="##" className="text-gray-600 hover:text-gray-800">Cart</a>
              {/* Add more menu items as needed */}
            </div>
          </div>
        )}
      </div>
      <hr className="border-gray-200 mt-4" />
    </header>
  );
};

export default Header;
