
import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-sm text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-intell-green rounded-md flex items-center justify-center text-black mr-2">IS</div>
              <h2 className="text-2xl font-bold text-white">IntellSurge</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-intell-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-intell-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-intell-green transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-intell-green" />
                <span className="text-gray-400">info@intellsurge.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-intell-green" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-intell-green" />
                <span className="text-gray-400">123 Tech Lane, Innovation District, Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} IntellSurge Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-intell-green transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-intell-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
