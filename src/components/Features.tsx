<<<<<<< HEAD

=======
>>>>>>> 2cc58a3 (Initial commit)
import React, { useEffect, useRef } from 'react';
import { Code, Cpu, BarChart, Lock, Zap, Layers } from 'lucide-react';

const features = [
  {
    name: 'Custom Software Development',
    description: 'Tailored software solutions built specifically for your business needs and growth objectives.',
    icon: Code,
  },
  {
    name: 'AI & Machine Learning',
    description: 'Harness the power of intelligent algorithms to automate tasks and gain powerful insights.',
    icon: Cpu,
  },
  {
    name: 'Data Analytics',
    description: 'Transform your raw data into actionable insights with advanced analytics and visualization.',
    icon: BarChart,
  },
  {
    name: 'Cybersecurity Solutions',
    description: 'Protect your digital assets with enterprise-grade security measures and monitoring systems.',
    icon: Lock,
  },
  {
    name: 'Performance Optimization',
    description: 'Streamline your existing systems for maximum speed, efficiency, and reliability.',
    icon: Zap,
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions that grow with your business and minimize operational overhead.',
    icon: Layers,
  },
];

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
<<<<<<< HEAD
            // Add animation classes when section is visible
            document.querySelectorAll('.features-title').forEach(el => {
              el.classList.add('animate-text-reveal');
            });
            
            // Animate feature cards with delay
=======
            document.querySelectorAll('.features-title').forEach(el => {
              el.classList.add('animate-text-reveal');
            });
>>>>>>> 2cc58a3 (Initial commit)
            document.querySelectorAll('.feature-card').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, 100 + index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
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
    <section id="features" className="section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg features-title opacity-0">
            Comprehensive Tech Solutions
          </h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto features-title opacity-0">
=======
    <section id="features" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg features-title opacity-0 text-[#dc3545]">
            Comprehensive Tech Solutions
          </h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto features-title opacity-0 text-[#0D3B66]">
>>>>>>> 2cc58a3 (Initial commit)
            We offer a full spectrum of services to help organizations transform their technology infrastructure and drive business growth.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
<<<<<<< HEAD
              className="feature-card opacity-0 glass-morphism rounded-xl p-8 transition-all duration-300 hover:border-intell-green/50 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-md bg-intell-green/10 border border-intell-green/20">
                <feature.icon className="h-6 w-6 text-intell-green" />
              </div>
              <h3 className="mt-5 text-xl font-medium text-white">{feature.name}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
=======
              className="feature-card opacity-0 bg-[#11B5E4] p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-md bg-[#dc3545]/10 border border-[#dc3545]/20">
                <feature.icon className="h-6 w-6 text-[#dc3545]" />
              </div>
              <h3 className="mt-5 text-xl font-medium text-[#0D3B66]">{feature.name}</h3>
              <p className="mt-2 text-white">{feature.description}</p>
>>>>>>> 2cc58a3 (Initial commit)
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
