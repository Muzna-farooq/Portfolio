import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Linkedin, Mail, Phone } from 'lucide-react';
import { navItems, personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Muzna Farooq</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate and detail-oriented Software Quality Assurance Engineer and 
              Project Coordinator with hands-on experience in Agile environments.
            </p>
            <div className="flex space-x-4">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-teal-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-teal-600 transition-colors duration-200"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-teal-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Lahore, Pakistan</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.email}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Muzna Farooq. All rights reserved.
          </p>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-teal-600 transition-colors duration-200 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;