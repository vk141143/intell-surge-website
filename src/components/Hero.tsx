
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="heading-xl">
                <span className="block text-gray-900">Transform Your Ideas into</span>
                <span className="block text-intell-blue">Intelligent Solutions</span>
              </h1>
              <p className="mt-3 paragraph max-w-md mx-auto lg:mx-0 md:mt-5">
                Accelerate your business with cutting-edge technology. We build custom software, automate workflows, and create innovative solutions that grow with your business.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#contact" className="btn-primary flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#process" className="btn-secondary flex items-center justify-center">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-intell-blue/10 sm:h-72 md:h-96 lg:h-full lg:w-full">
          <div className="flex h-full items-center justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80 animate-fade-in">
              <div className="absolute h-full w-full rounded-full bg-intell-blue/20"></div>
              <div className="absolute top-8 left-8 h-3/4 w-3/4 rounded-full bg-intell-blue/30"></div>
              <div className="absolute top-16 left-16 h-1/2 w-1/2 rounded-full bg-intell-blue/40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
