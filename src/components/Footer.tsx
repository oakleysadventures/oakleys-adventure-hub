
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-oakley-blue py-8">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-white">
              Oakley's Adventures
            </div>
            <p className="text-white/80 mt-2">
              A delightful children's book by Caroline Fallin
            </p>
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/colorwithcaroline" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white px-3 py-2 rounded-full hover:bg-oakley-orange hover:text-white transition-colors"
              aria-label="Instagram @colorwithcaroline"
            >
              <Instagram size={24} className="mr-2" />
              <span>@colorwithcaroline</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-white/60 text-sm">
          &copy; {new Date().getFullYear()} Oakley's Adventures. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
