
import React from 'react';
import { Book, Home, Info, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative py-4 bg-gradient-to-r from-oakley-blue to-oakley-green rounded-b-3xl shadow-lg">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="text-4xl font-bold text-white animate-wiggle">
              Oakley's Adventures
            </div>
          </div>
          
          <nav className="flex items-center space-x-2 md:space-x-6">
            <NavLink href="#home">
              <Home size={20} className="mr-1" />
              <span>Home</span>
            </NavLink>
            <NavLink href="#book">
              <Book size={20} className="mr-1" />
              <span>Book</span>
            </NavLink>
            <NavLink href="#author">
              <Info size={20} className="mr-1" />
              <span>Author</span>
            </NavLink>
            <NavLink href="#subscribe">
              <Mail size={20} className="mr-1" />
              <span>Subscribe</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <a 
      href={href}
      className="flex items-center px-3 py-2 rounded-full text-white font-bold bg-oakley-orange bg-opacity-80 hover:bg-opacity-100 transition-all hover:scale-105"
    >
      {children}
    </a>
  );
};

export default Header;
