import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Laptop as LaptopCode } from 'lucide-react';
import { NAV_ITEMS } from '../../constants/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (windowWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeMenu}
          >
            <LaptopCode className="w-8 h-8 text-primary-500" />
            <span className="text-xl md:text-2xl font-bold text-primary-500">ACM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors ${
                    isActive
                      ? 'text-primary-500 font-semibold'
                      : 'text-neutral-700 hover:text-primary-500 hover:bg-primary-50'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
            <Link
              to="components/home/JoinSection.tsx"
              className="ml-2 px-4 py-2 rounded-md bg-primary-500 text-white text-sm lg:text-base font-medium hover:bg-primary-600 transition-colors"
            >
              Join Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-primary-500 hover:bg-primary-50 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? 'text-primary-500 bg-primary-50 font-semibold'
                          : 'text-neutral-700 hover:text-primary-500 hover:bg-primary-50'
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {item.title}
                  </NavLink>
                ))}
                <Link
                  to="/join"
                  className="px-3 py-2 rounded-md bg-primary-500 text-white text-base font-medium hover:bg-primary-600 transition-colors"
                  onClick={closeMenu}
                >
                  Join Us
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;