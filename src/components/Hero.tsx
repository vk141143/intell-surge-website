<<<<<<< HEAD

=======
>>>>>>> 2cc58a3 (Initial commit)
import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Trigger animations after component mount
    const animateElements = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('animate-text-reveal');
      });
      document.querySelectorAll('.animate-glow-element').forEach(el => {
        el.classList.add('glow-effect');
      });
    };
    
    // Small delay to ensure DOM is ready
    setTimeout(animateElements, 100);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
<<<<<<< HEAD
      {/* Background glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-intell-green animate-glow opacity-20"></div>
      
=======
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/cloud_new.mp4" type="video/mp4" />
      </video>
      
      {/* Content Section */}
>>>>>>> 2cc58a3 (Initial commit)
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-intell-green"></div>
              <div className="flex">
<<<<<<< HEAD
                <span className="text-gray-200 text-sm">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <div className="ml-3 text-gray-300">300+ intelligent solutions delivered</div>
          </div>
          
          <h1 className="heading-lg mb-6">
=======
                <span className="text-gray-800 text-sm">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <div className="ml-3 text-gray-700">300+ intelligent solutions delivered</div>
          </div>
          
          <h1 className="heading-lg mb-6 text-white">
>>>>>>> 2cc58a3 (Initial commit)
            <span className="block animate-on-scroll opacity-0">Launch your</span>
            <span className="block text-gradient-primary animate-on-scroll opacity-0 animate-delay-200">intelligent solution</span>
            <span className="block animate-on-scroll opacity-0 animate-delay-300">with confidence</span>
          </h1>
          
<<<<<<< HEAD
          <p className="paragraph max-w-3xl mx-auto animate-on-scroll opacity-0 animate-delay-400">
=======
          <p className="paragraph max-w-3xl mx-auto animate-on-scroll opacity-0 animate-delay-400 text-white">
>>>>>>> 2cc58a3 (Initial commit)
            We provide high-quality technology development services for businesses.
            Validate your idea with a custom intelligent solution—fast, scalable, and investor-ready.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a href="#contact" className="btn-primary animate-on-scroll opacity-0 animate-delay-500">
              Get Started
            </a>
            <a href="#process" className="btn-secondary animate-on-scroll opacity-0 animate-delay-500">
              Learn More
            </a>
          </div>
        </div>
<<<<<<< HEAD
        
        {/* Client logos */}
        <div className="mt-20 pt-10 border-t border-gray-800">
          <p className="text-center text-gray-400 mb-8">
            See where our clients have gone after developing their solutions with us:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="w-24 h-8 bg-white/10 rounded-md"></div>
            <div className="w-24 h-8 bg-white/10 rounded-md"></div>
            <div className="w-24 h-8 bg-white/10 rounded-md"></div>
            <div className="w-24 h-8 bg-white/10 rounded-md"></div>
            <div className="w-24 h-8 bg-white/10 rounded-md"></div>
          </div>
        </div>
=======
>>>>>>> 2cc58a3 (Initial commit)
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Hero;
=======
export default Hero;
>>>>>>> 2cc58a3 (Initial commit)
