<<<<<<< HEAD

=======
>>>>>>> 2cc58a3 (Initial commit)
import React, { useEffect, useRef } from 'react';
import { MessageSquare, FileSearch, Code, BarChart4 } from 'lucide-react';

const steps = [
  {
    id: '01',
    name: 'Discovery',
    description: 'We start by understanding your vision and goals through detailed discussions and research.',
    icon: MessageSquare,
  },
  {
    id: '02',
    name: 'Design',
    description: 'We design prototypes to visualize your solution, incorporating feedback to perfect the UX.',
    icon: FileSearch,
  },
  {
    id: '03',
    name: 'Development',
    description: 'We build your solution with modern technologies and rigorous quality assurance.',
    icon: Code,
  },
  {
    id: '04',
    name: 'Deployment',
    description: 'We launch your solution and provide ongoing support for continuous improvement.',
    icon: BarChart4,
  },
];

const Process = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when section is visible
            document.querySelectorAll('.process-title').forEach(el => {
              el.classList.add('animate-text-reveal');
            });
            
            // Animate process steps with delay
            document.querySelectorAll('.process-step').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, index * 200);
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
    <section id="process" className="section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg process-title opacity-0 mb-4">
            Our simple 4-step process<br />to build your <span className="text-gradient-primary">solution</span>
          </h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto process-title opacity-0">
=======
    <section id="process" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg process-title opacity-0 mb-4 text-black">
            Our simple 4-step process<br />to build your <span className="text-gradient-primary">solution</span>
          </h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto process-title opacity-0 text-gray-700">
>>>>>>> 2cc58a3 (Initial commit)
            We follow a structured yet flexible process to ensure your solution's
            success, adapting to your unique needs and goals along the way.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
<<<<<<< HEAD
            <div key={step.id} className="process-step opacity-0 glass-morphism p-8 rounded-xl">
=======
            <div key={step.id} className="process-step opacity-0 glass-morphism p-8 rounded-xl bg-gray-100">
>>>>>>> 2cc58a3 (Initial commit)
              <div className="relative mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-intell-green/10 border border-intell-green/20">
                  <step.icon className="h-8 w-8 text-intell-green" />
                </div>
              </div>
              
<<<<<<< HEAD
              <h3 className="mb-2 text-2xl font-bold text-white">{step.name}</h3>
              <p className="text-gray-400">{step.description}</p>
=======
              <h3 className="mb-2 text-2xl font-bold text-black">{step.name}</h3>
              <p className="text-gray-700">{step.description}</p>
>>>>>>> 2cc58a3 (Initial commit)
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Process;
=======
export default Process;
>>>>>>> 2cc58a3 (Initial commit)
