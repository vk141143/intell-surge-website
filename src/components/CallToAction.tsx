<<<<<<< HEAD

=======
>>>>>>> 2cc58a3 (Initial commit)
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when section is visible
            document.querySelectorAll('.cta-element').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-text-reveal');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
<<<<<<< HEAD
=======
        // eslint-disable-next-line react-hooks/exhaustive-deps
>>>>>>> 2cc58a3 (Initial commit)
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
<<<<<<< HEAD
    <section id="contact" className="section-padding relative" ref={sectionRef}>
=======
    <section id="contact" className="section-padding relative bg-white" ref={sectionRef}>
>>>>>>> 2cc58a3 (Initial commit)
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-intell-green/20 animate-glow opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
<<<<<<< HEAD
          <h2 className="heading-lg cta-element opacity-0">Ready to Transform Your Business?</h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto cta-element opacity-0">
=======
          <h2 className="heading-lg cta-element opacity-0 text-[#dc3545]">Ready to Transform Your Business?</h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto cta-element opacity-0 text-[#0D3B66]">
>>>>>>> 2cc58a3 (Initial commit)
            Get in touch today to schedule a consultation with our expert team and discover how IntellSurge can accelerate your digital transformation journey.
          </p>
          
          <div className="mt-10 glass-morphism p-8 rounded-lg max-w-3xl mx-auto border border-intell-green/20 cta-element opacity-0">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
<<<<<<< HEAD
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
=======
                  <label htmlFor="name" className="block text-sm font-medium text-[#11B5E4] mb-1">
>>>>>>> 2cc58a3 (Initial commit)
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
<<<<<<< HEAD
                    className="w-full bg-black/30 border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-intell-green focus:border-transparent"
=======
                    className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-intell-green focus:border-transparent"
>>>>>>> 2cc58a3 (Initial commit)
                    placeholder="John Smith"
                  />
                </div>
                <div>
<<<<<<< HEAD
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
=======
                  <label htmlFor="email" className="block text-sm font-medium text-[#11B5E4] mb-1">
>>>>>>> 2cc58a3 (Initial commit)
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
<<<<<<< HEAD
                    className="w-full bg-black/30 border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-intell-green focus:border-transparent"
=======
                    className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-intell-green focus:border-transparent"
>>>>>>> 2cc58a3 (Initial commit)
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
<<<<<<< HEAD
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
=======
                <label htmlFor="company" className="block text-sm font-medium text-[#11B5E4] mb-1">
>>>>>>> 2cc58a3 (Initial commit)
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
<<<<<<< HEAD
                  className="w-full bg-black/30 border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-intell-green focus:border-transparent"
=======
                  className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-intell-green focus:border-transparent"
>>>>>>> 2cc58a3 (Initial commit)
                  placeholder="Your Company"
                />
              </div>
              <div>
<<<<<<< HEAD
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
=======
                <label htmlFor="message" className="block text-sm font-medium text-[#11B5E4] mb-1">
>>>>>>> 2cc58a3 (Initial commit)
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
<<<<<<< HEAD
                  className="w-full bg-black/30 border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-intell-green focus:border-transparent"
=======
                  className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-intell-green focus:border-transparent"
>>>>>>> 2cc58a3 (Initial commit)
                  placeholder="Tell us about your project or inquiry"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn-primary w-full flex justify-center items-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
