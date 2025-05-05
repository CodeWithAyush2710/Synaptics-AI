import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (servicesOpen) setServicesOpen(false);
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setServicesOpen(!servicesOpen);
  };

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' 
      : 'bg-transparent py-4'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Logo size={32} />
          <span className="text-xl font-bold text-primary-800">Synaptic AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-neutral-700 hover:text-primary-600 transition-colors">Home</Link>
          
          <div className="relative group">
            <button 
              className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors"
              onClick={toggleServices}
            >
              Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            
            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                >
                  <div className="py-1">
                    <Link 
                      to="/services/code-reviewer" 
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                      onClick={() => setServicesOpen(false)}
                    >
                      Code Reviewer
                    </Link>
                    <Link 
                      to="/services/email-generator" 
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                      onClick={() => setServicesOpen(false)}
                    >
                      Cold Email Generator
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* <Link to="/documentation" className="text-neutral-700 hover:text-primary-600 transition-colors">Documentation</Link> */}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="btn-outline btn-md">Sign In</Link>
          <Link to="/signup" className="btn-primary btn-md">Get Started</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-neutral-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={isOpen ? "hidden" : "block"}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={isOpen ? "block" : "hidden"}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-neutral-700 hover:text-primary-600 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              
              <div>
                <button 
                  className="flex w-full items-center justify-between text-neutral-700"
                  onClick={toggleServices}
                >
                  <span>Services</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-2"
                    >
                      <Link 
                        to="/services/code-reviewer" 
                        className="block text-neutral-600 hover:text-primary-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        Code Reviewer
                      </Link>
                      <Link 
                        to="/services/email-generator" 
                        className="block text-neutral-600 hover:text-primary-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        Cold Email Generator
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link 
                to="/documentation" 
                className="block text-neutral-700 hover:text-primary-600 transition-colors"
                onClick={toggleMenu}
              >
                Documentation
              </Link>
              
              <div className="pt-2 grid grid-cols-2 gap-4">
                <Link 
                  to="/login" 
                  className="btn-outline btn-md text-center"
                  onClick={toggleMenu}
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup" 
                  className="btn-primary btn-md text-center"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;