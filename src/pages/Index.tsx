
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Process from "../components/Process";
import AboutUs from "../components/AboutUs";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Process />
      <Features />
      <AboutUs />
      <StatsSection />
      <Testimonials />
      <CallToAction />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
