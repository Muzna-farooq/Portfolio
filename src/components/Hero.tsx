import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, FileDown, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-teal-600 dark:text-teal-400">Hello, I'm</span> <br />
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
                <span>{personalInfo.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                aria-label="Phone"
              >
                <Phone size={20} />
                <span>{personalInfo.phone}</span>
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {/* ✅ Resume Download Button with working file */}
              <a 
                href="/Muzna%20CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <FileDown size={20} />
                Download Resume
              </a>

              {/* Scroll to About Section */}
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 font-medium rounded-lg cursor-pointer transition-colors duration-200"
              >
                Explore Portfolio
                <ArrowDown size={20} />
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/81883d12-4a1f-4f6c-853f-c75fafc3cef9.jpg"
                alt="Muzna Farooq"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md cursor-pointer"
        >
          <ArrowDown size={20} className="text-teal-600 dark:text-teal-400" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
