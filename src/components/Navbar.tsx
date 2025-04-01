
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-intell-blue font-bold text-2xl">
              IntellSurge
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-gray-600 hover:text-intell-blue font-medium transition-colors duration-200">
              Services
            </a>
            <a href="#process" className="text-gray-600 hover:text-intell-blue font-medium transition-colors duration-200">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-intell-blue font-medium transition-colors duration-200">
              Testimonials
            </a>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-intell-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-intell-blue font-medium">
              Services
            </a>
            <a href="#process" className="block px-3 py-2 text-gray-600 hover:text-intell-blue font-medium">
              How It Works
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-intell-blue font-medium">
              Testimonials
            </a>
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
