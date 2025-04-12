
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const SubscribeSection = () => {
  return (
    <section id="subscribe" className="py-16 bg-gradient-to-r from-oakley-pink/20 to-oakley-purple/20">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 wavy-underline inline-block mx-auto">
          Join Oakley's Friends!
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-xl border-4 border-oakley-yellow">
          <div className="text-center mb-6">
            <div className="inline-block p-4 rounded-full bg-oakley-orange/20 mb-4">
              <Mail size={40} className="text-oakley-orange" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Subscribe for Updates!</h3>
            <p className="text-lg text-gray-600 mb-8">
              Be the first to know about new Oakley books, events, and special offers!
            </p>
          </div>
          
          <div className="w-full overflow-hidden rounded-xl border-4 border-oakley-green">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdvaneiRplJCgVDBHLaTBInWq4sd41n5zmlrV8GyPF0JM544g/viewform?embedded=true" 
              width="100%" 
              height="500" 
              className="border-0"
              title="Oakley's Adventures Subscription Form"
            >
              Loading...
            </iframe>
          </div>
          
          <p className="text-sm text-gray-500 text-center mt-6">
            Fill out the form above to join Oakley's adventure updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
