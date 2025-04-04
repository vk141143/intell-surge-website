
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-morphism' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="https://www.intellisurgetechnologies.com/images/logo-final.svg" alt="IntellSurge Logo" className="h-10 w-auto mr-2" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#process" className="text-gray-400 hover:text-intell-green font-medium transition-colors duration-200">
              Process
            </a>
            <a href="#about" className="text-gray-400 hover:text-intell-green font-medium transition-colors duration-200">
              About Us
            </a>
            <Link to="/careers" className="text-gray-400 hover:text-intell-green font-medium transition-colors duration-200">
              Careers
            </Link>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-400 hover:text-intell-green focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-morphism border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#process" className="block px-3 py-2 text-gray-400 hover:text-intell-green font-medium">
              Process
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-400 hover:text-intell-green font-medium">
              About Us
            </a>
            <Link to="/careers" className="block px-3 py-2 text-gray-400 hover:text-intell-green font-medium">
              Careers
            </Link>
            <a href="#contact" className="block px-3 py-2 btn-primary text-center mt-4">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
