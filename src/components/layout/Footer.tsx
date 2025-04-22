import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Laptop as LaptopCode, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <LaptopCode className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold">ACM</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Empowering students through technology, innovation, and community.
            </p>
            <div className="flex space-x-3">

              <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/acm_lendi?igsh=bDFvcXRzdGNtYzFw" className="text-neutral-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-neutral-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-neutral-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-neutral-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
                <a href="https://india.acm.org/membership" className="text-neutral-300 hover:text-white transition-colors">
                  Join ACM National
                </a>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-neutral-300 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">
                  Lendi Institute of Engineering and Technology<br />
                  Jonnada,Vizianagaram.
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-neutral-300 mr-2 flex-shrink-0" />
                <a href="mailto:acm@lendi.edu.in" className="text-neutral-300 hover:text-white transition-colors">
                  acm@lendi.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              &copy; {currentYear}  ACM Student Chapter. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 text-sm text-neutral-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>{' '}
              ·{' '}
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;