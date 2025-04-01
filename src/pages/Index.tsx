
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <CallToAction />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
