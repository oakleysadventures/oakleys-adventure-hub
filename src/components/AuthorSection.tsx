
import React from 'react';

const AuthorSection = () => {
  return (
    <section id="author" className="py-16 bg-gradient-to-b from-oakley-blue/10 to-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 wavy-underline inline-block mx-auto">
          Meet The Author
        </h2>
        
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative scribble-border p-3">
              <img 
                src="/public/lovable-uploads/3c0865ab-abc2-4316-93fe-deb726985ade.png" 
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
              Caroline Fallin is a passionate children's book author and illustrator who brings imagination and joy 
              to young readers everywhere. With a background in early childhood education, Caroline creates stories 
              that both entertain and teach important life lessons.
            </p>
            <p className="text-lg">
              The Oakley's Adventures series was inspired by Caroline's own childhood experiences and her desire to 
              create characters that children can relate to and learn from. When not writing or illustrating, Caroline 
              enjoys hiking, painting, and visiting schools to share her stories with young readers.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">Fun Facts About Caroline:</h4>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Has a pet cat who sometimes inspires her stories</li>
                <li>Collects unique pencils from around the world</li>
                <li>Can recite all her books from memory</li>
                <li>Loves to bake cookies while brainstorming new stories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
