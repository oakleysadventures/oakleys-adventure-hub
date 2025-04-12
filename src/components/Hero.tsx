
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="cloud-bg py-16 md:py-24">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-oakley-orange mb-6">
            Welcome to Oakley's World!
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-700">
            Join Oakley on amazing adventures full of friendship, courage, and fun!
            Perfect for young readers who love excitement and imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-oakley-orange hover:bg-oakley-orange/90 font-bold text-lg py-6 px-8 rounded-full" size="lg">
              Explore The Book
            </Button>
            <Button variant="outline" className="border-oakley-blue hover:bg-oakley-blue/10 text-oakley-blue font-bold text-lg py-6 px-8 rounded-full" size="lg">
              Meet The Author
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto animate-float">
          <div className="absolute -top-3 -left-3 w-full h-full bg-oakley-green rounded-full rotate-3"></div>
          <div className="absolute -top-3 -right-3 w-full h-full bg-oakley-orange rounded-full -rotate-3"></div>
          <img 
            src="/public/lovable-uploads/3a9ef71c-6547-48fc-8241-42c2554b3b21.png" 
            alt="Oakley's Adventures Book Cover" 
            className="w-full relative z-10 rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
