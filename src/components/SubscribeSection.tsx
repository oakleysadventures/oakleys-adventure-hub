
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Oops!",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      toast({
        title: "Hooray!",
        description: "You're now subscribed to Oakley's Adventures updates!",
        variant: "default",
      });
    }, 1500);
  };
  
  return (
    <section id="subscribe" className="py-16 bg-gradient-to-r from-oakley-pink/20 to-oakley-purple/20">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 wavy-underline inline-block mx-auto">
          Join Oakley's Friends!
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-xl border-4 border-oakley-yellow">
          <div className="text-center mb-8">
            <div className="inline-block p-4 rounded-full bg-oakley-orange/20 mb-4">
              <Mail size={40} className="text-oakley-orange" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Subscribe for Updates!</h3>
            <p className="text-lg text-gray-600">
              Be the first to know about new Oakley books, events, and special offers!
            </p>
          </div>
          
          {isSubscribed ? (
            <div className="flex flex-col items-center gap-4 py-6">
              <div className="p-3 rounded-full bg-green-100">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <p className="text-lg font-medium text-center">
                Thank you for subscribing to Oakley's Adventures updates!
              </p>
              <Button 
                onClick={() => setIsSubscribed(false)} 
                variant="outline"
                className="mt-2"
              >
                Subscribe another email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow text-lg py-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                  type="submit" 
                  className="bg-oakley-orange hover:bg-oakley-orange/90 font-bold text-lg py-6 px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center pt-2">
                We'll never share your email with anyone else. No spam, promise!
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
