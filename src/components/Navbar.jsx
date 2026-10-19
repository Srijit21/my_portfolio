import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0b0e]/90 backdrop-blur-md border-b border-amber-500/10 text-slate-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand / Logo with Circular Monogram */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 p-[1px] shadow-lg shadow-amber-500/10 group-hover:scale-105 transition duration-300">
              <div className="w-full h-full rounded-full bg-[#0a0b0e] flex items-center justify-center">
                <span className="text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent tracking-wider">
                  SP
                </span>
              </div>
            </div>
            <div>
              <span className="text-base sm:text-lg font-semibold tracking-wide text-slate-100 group-hover:text-amber-400 transition-colors">
                Srijit Priyanshu
              </span>
              <span className="block text-[11px] text-amber-500/80 font-medium tracking-widest uppercase">
                Software Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-200">Home</Link>
            <Link to="/about" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-200">About</Link>
            <Link to="/skills" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-200">Skills</Link>
            <Link to="/projects" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-200">Projects</Link>
            <Link to="/contact" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-200">Contact</Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-amber-400 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0e1015] border-b border-amber-500/10 px-4 pt-3 pb-5 space-y-2">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900 transition"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900 transition"
          >
            About
          </Link>
          <Link 
            to="/skills" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900 transition"
          >
            Skills
          </Link>
          <Link 
            to="/projects" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900 transition"
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900 transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;