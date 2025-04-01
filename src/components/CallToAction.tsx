
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="section-padding bg-intell-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="heading-lg text-white">Ready to Transform Your Business?</h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto text-white/80">
            Get in touch today to schedule a consultation with our expert team and discover how IntellSurge can accelerate your digital transformation journey.
          </p>
          
          <div className="mt-8 bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-intell-blue focus:ring-intell-blue p-2 border"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-intell-blue focus:ring-intell-blue p-2 border"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-intell-blue focus:ring-intell-blue p-2 border"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-intell-blue focus:ring-intell-blue p-2 border"
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
