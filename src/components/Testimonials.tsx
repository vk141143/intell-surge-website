<<<<<<< HEAD

import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
=======
import React, { useEffect, useRef } from 'react';
>>>>>>> 2cc58a3 (Initial commit)
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

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
  {
    content: "The custom software IntellSurge built has completely revolutionized our workflow. Their team's expertise and attention to detail was outstanding.",
    author: "Robert Thompson", 
    position: "COO, InnovateNow"
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
<<<<<<< HEAD
            // Add animation classes when section is visible
=======
>>>>>>> 2cc58a3 (Initial commit)
            document.querySelectorAll('.testimonials-title').forEach(el => {
              el.classList.add('animate-text-reveal');
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
    <section id="testimonials" className="section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg testimonials-title opacity-0">What Our Clients Say</h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto testimonials-title opacity-0">
=======
    <section id="testimonials" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg testimonials-title opacity-0 text-[#0D3B66]">What Our Clients Say</h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto testimonials-title opacity-0 text-[#11B5E4]">
>>>>>>> 2cc58a3 (Initial commit)
            We've helped organizations across industries transform their technology infrastructure and achieve remarkable results.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
<<<<<<< HEAD
                <Card className="glass-morphism border-intell-green/20">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-intell-green" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
=======
                <Card className="glass-morphism border-[#11B5E4]/20">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-[#dc3545] text-lg"></i>
                      ))}
                    </div>
                    <p className="text-[#0D3B66] italic mb-6">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-semibold text-[#11B5E4]">{testimonial.author}</h4>
                      <p className="text-sm text-[#dc3545]">{testimonial.position}</p>
>>>>>>> 2cc58a3 (Initial commit)
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
<<<<<<< HEAD
            <CarouselPrevious className="border-intell-green/20 text-intell-green hover:bg-intell-green/20 hover:text-intell-lightGreen" />
            <CarouselNext className="border-intell-green/20 text-intell-green hover:bg-intell-green/20 hover:text-intell-lightGreen" />
          </div>
        </Carousel>
      </div>
=======
            <CarouselPrevious className="border-[#11B5E4]/20 text-[#11B5E4] hover:bg-[#11B5E4]/20 hover:text-[#0D3B66]" />
            <CarouselNext className="border-[#11B5E4]/20 text-[#11B5E4] hover:bg-[#11B5E4]/20 hover:text-[#0D3B66]" />
          </div>
        </Carousel>
      </div>

      {/* Floating Icons for WhatsApp and Chat */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/918886777107"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
        >
          <i className="fab fa-whatsapp text-2xl"></i> {/* Corrected WhatsApp icon */}
        </a>

        {/* Chat Icon */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all">
          <i className="fas fa-comment-dots text-2xl"></i>
        </button>
      </div>
>>>>>>> 2cc58a3 (Initial commit)
    </section>
  );
};

export default Testimonials;
