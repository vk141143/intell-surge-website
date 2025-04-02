<<<<<<< HEAD

=======
>>>>>>> 2cc58a3 (Initial commit)
import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<<<<<<< HEAD
    <footer className="bg-black/50 backdrop-blur-sm text-white border-t border-gray-800">
=======
    <footer className="bg-white text-black border-t border-gray-300">
>>>>>>> 2cc58a3 (Initial commit)
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
<<<<<<< HEAD
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
=======
              <img src="https://www.intellisurgetechnologies.com/images/logo-final.svg" alt="IntelliSurge Logo" className="w-24" />
            </div>
            <p className="text-gray-600 mb-4">
              Transforming businesses through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
>>>>>>> 2cc58a3 (Initial commit)
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Cybersecurity</a></li>
=======
            <h3 className="text-lg font-semibold mb-4 text-black">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Cybersecurity</a></li>
>>>>>>> 2cc58a3 (Initial commit)
            </ul>
          </div>

          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-intell-green transition-colors">Contact</a></li>
=======
            <h3 className="text-lg font-semibold mb-4 text-black">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a></li>
>>>>>>> 2cc58a3 (Initial commit)
            </ul>
          </div>

          <div>
<<<<<<< HEAD
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
=======
            <h3 className="text-lg font-semibold mb-4 text-black">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-500" />
                <span className="text-gray-600">info@intellsurge.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-500" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-blue-500" />
                <a href="https://www.google.com/maps/place/IntelliSurge+Technologies+Pvt.+Ltd./@17.4580943,78.3705127,799m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb930050df72ff:0xc8c72b35895e2771!8m2!3d17.4580943!4d78.3730876!16s%2Fg%2F11wwz6j_kt?entry=ttu" className="text-gray-600 hover:text-blue-500 transition-colors">
                  View Location on Google Maps
                </a>
>>>>>>> 2cc58a3 (Initial commit)
              </li>
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} IntellSurge Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-intell-green transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-intell-green transition-colors">Terms of Service</a>
=======
        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} IntelliSurge Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">Terms of Service</a>
>>>>>>> 2cc58a3 (Initial commit)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
<<<<<<< HEAD
=======


//  {/* Embedded Google Map */}
//  <div className="mt-8">
//  <h3 className="text-lg font-semibold text-black mb-4">Our Location</h3>
//  <div className="w-full h-48 border border-gray-300 rounded-lg overflow-hidden">
//    <iframe
//      title="Google Map"
//      className="w-full h-full"
//      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31110.774687328986!2d78.3705127!3d17.4580943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930050df72ff%3A0xc8c72b35895e2771!2sIntelliSurge%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1711920608367!5m2!1sen!2sin"
//      allowFullScreen
//      loading="lazy"
//      referrerPolicy="no-referrer-when-downgrade"
//    ></iframe>
//  </div>
// </div>
>>>>>>> 2cc58a3 (Initial commit)
