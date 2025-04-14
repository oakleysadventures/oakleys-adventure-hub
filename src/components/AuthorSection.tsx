
import React from 'react';

const AuthorSection = () => {
  return (
    <section id="author" className="py-16 bg-gradient-to-b from-oakley-blue/10 to-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 custom-underline inline-block mx-auto">
          Meet The Author
        </h2>
        
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative scribble-border p-3">
              <img 
                src="/public/lovable-uploads/06bb11ab-7baf-44eb-a304-dd656004fc5e.png" 
                alt="Caroline Fallin - Author" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-oakley-orange">
              Caroline Fallin
            </h3>
            <p className="text-lg">
              Hi it's Caroline! I am a student at the University of Texas at Austin. I love camping, 
              going outside, and spending time in nature, and I have a huge passion for photography. I've always 
              loved being creative, and my experiences working as an art teacher in an afterschool program and 
              babysitting inspired me to create a book that encourages kids to think creatively and problem-solve.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">Fun facts about me:</h4>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Has a dog named Chili</li>
                <li>Carrots are one of her favorite snacks</li>
                <li>Loves to go backpacking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
