
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BookSection from '@/components/BookSection';
import AuthorSection from '@/components/AuthorSection';
import SubscribeSection from '@/components/SubscribeSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <main>
        <Hero />
        <AuthorSection />
        <BookSection />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
