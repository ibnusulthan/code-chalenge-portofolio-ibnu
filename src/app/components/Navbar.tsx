"use client";

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-slate-800/90 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-purple-400">
            Portofolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-purple-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-purple-400 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-purple-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-purple-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-purple-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 hover:text-purple-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 hover:text-purple-400 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-purple-400 transition-colors">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;