import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Update document class when dark mode changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="transition-colors duration-300 bg-white dark:bg-gray-900">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;