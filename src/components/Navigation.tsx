'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect current section for color adjustment
      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setCurrentSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Determine text color based on current section
  const getTextColor = () => {
    const darkSections = ['about', 'projects']; // Sections with dark blue background
    return darkSections.includes(currentSection) ? 'text-[#eee8df]' : 'text-[#212842]';
  };

  const getHoverColor = () => {
    const darkSections = ['about', 'projects']; // Sections with dark blue background
    return darkSections.includes(currentSection) ? 'hover:text-[#eee8df]' : 'hover:text-[#212842]';
  };

  const getNavBg = () => {
    const darkSections = ['about', 'projects'];
    if (scrolled) {
      return darkSections.includes(currentSection) 
        ? 'bg-[#212842]/90 backdrop-blur-lg border-b border-[#eee8df]/20' 
        : 'bg-[#eee8df]/90 backdrop-blur-lg border-b border-[#212842]/20';
    }
    return 'bg-transparent';
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 ${getNavBg()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold ${getTextColor()}`}
          >
            Heart
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                }}
                className={`${getTextColor()} ${getHoverColor()} font-medium transition-colors duration-300 relative group`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${getTextColor()} transition-all duration-300 group-hover:w-full`}></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${getTextColor()}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden backdrop-blur-lg rounded-2xl mt-4 overflow-hidden border ${currentSection === 'about' || currentSection === 'projects' ? 'bg-[#212842]/95 border-[#eee8df]/20' : 'bg-[#eee8df]/95 border-[#212842]/20'} shadow-lg`}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className={`block py-4 px-6 ${currentSection === 'about' || currentSection === 'projects' ? 'text-[#c1c9d6] hover:bg-[#eee8df]/20 hover:text-[#eee8df]' : 'text-[#4a5568] hover:bg-[#212842]/10 hover:text-[#212842]'} transition-colors border-b ${currentSection === 'about' || currentSection === 'projects' ? 'border-[#eee8df]/20' : 'border-[#212842]/20'} last:border-b-0`}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;