
import React from 'react';
import { Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-oakley-blue py-12">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Oakley's Adventures
            </h3>
            <p className="text-white/80 max-w-md">
              Join Oakley on a journey of friendship, courage, and fun in this delightful children's book series.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/driftanddoodleco" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors flex items-center gap-2" 
                aria-label="Instagram @driftanddoodleco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white">
                  <Instagram size={24} />
                </span>
                <span className="text-white text-sm hidden sm:inline">@driftanddoodleco</span>
              </a>
            </div>
            
            <div className="text-white/80 text-sm">
              &copy; {currentYear} Caroline Fallin. All rights reserved.
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 flex justify-center">
          <p className="text-white/80 text-center flex items-center gap-1 text-sm">
            Made with <Heart size={16} className="fill-oakley-pink text-oakley-pink" /> at oakleysadventures.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
