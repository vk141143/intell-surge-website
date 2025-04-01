
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "IntellSurge transformed our outdated systems into a streamlined digital platform. Our team productivity increased by 45% within the first month alone.",
    author: "Sarah Johnson",
    position: "CTO, GreenTech Solutions",
  },
  {
    content: "The AI solution developed by IntellSurge helped us analyze customer data with incredible accuracy. We're now able to predict trends and make better business decisions.",
    author: "Michael Chen",
    position: "Director of Operations, DataFlex",
  },
  {
    content: "Working with IntellSurge was a game-changer for our startup. Their team delivered a robust MVP that helped us secure our next round of funding.",
    author: "Jessica Patel",
    position: "Co-founder, NexStep Innovations",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-intell-lightBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">What Our Clients Say</h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto">
            We've helped organizations across industries transform their technology infrastructure and achieve remarkable results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl card-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
