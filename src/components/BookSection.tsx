
import React from 'react';
import { Star } from 'lucide-react';

const BookSection = () => {
  return (
    <section id="book" className="py-16 bg-gradient-to-b from-white to-oakley-blue/10">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 wavy-underline inline-block mx-auto">
          About The Book
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative scribble-border p-3">
              <img 
                src="/public/lovable-uploads/e6de17c4-ea68-4e27-9823-5ee3a5a39984.png" 
                alt="Oakley's Adventures Book Cover" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-4 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="fill-oakley-yellow text-oakley-yellow" size={24} />
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-oakley-orange">
              Oakley's Adventures
            </h3>
            <p className="text-lg">
              The Oakley's Adventures series is about a squirrel named Oakley who finds something surprising 
              after tripping over a rock one day. Throughout the story, kids will get to color, draw, and solve 
              problems to help Oakley on his adventure. The book is interactive, designed to spark creativity 
              and help kids think outside the box while having fun!
            </p>
            <p className="text-lg">
              Through colorful illustrations and engaging storytelling, children will learn important 
              values while having fun with Oakley and friends. Perfect for ages 4-8, but enjoyable for readers of all ages!
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">Book Details:</h4>
              <ul className="space-y-2">
                <li><span className="font-bold">Age Range:</span> 4-8 years</li>
                <li><span className="font-bold">Author & Illustrator:</span> Caroline Fallin</li>
                <li><span className="font-bold">Pages:</span> 40 pages</li>
                <li><span className="font-bold">Published:</span> Coming Soon 2025</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
