
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
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
            // Add animation classes when section is visible
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
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg testimonials-title opacity-0">What Our Clients Say</h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto testimonials-title opacity-0">
            We've helped organizations across industries transform their technology infrastructure and achieve remarkable results.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
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
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="border-intell-green/20 text-intell-green hover:bg-intell-green/20 hover:text-intell-lightGreen" />
            <CarouselNext className="border-intell-green/20 text-intell-green hover:bg-intell-green/20 hover:text-intell-lightGreen" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
