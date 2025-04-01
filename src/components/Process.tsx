
import React from 'react';
import { MessageSquare, FileSearch, Code, BarChart4 } from 'lucide-react';

const steps = [
  {
    id: '01',
    name: 'Consultation',
    description: 'We start by understanding your business goals, challenges, and technical requirements.',
    icon: MessageSquare,
  },
  {
    id: '02',
    name: 'Analysis & Planning',
    description: 'Our experts analyze your needs and create a comprehensive roadmap for your solution.',
    icon: FileSearch,
  },
  {
    id: '03',
    name: 'Development & Testing',
    description: 'We build your solution with modern technologies and rigorous quality assurance.',
    icon: Code,
  },
  {
    id: '04',
    name: 'Deployment & Optimization',
    description: 'We launch your solution and provide ongoing support for continuous improvement.',
    icon: BarChart4,
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">How We Work</h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto">
            Our structured approach ensures we deliver high-quality solutions that address your unique business needs.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-intell-blue/20 -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className={`relative ${index % 2 === 1 ? 'md:mt-16' : ''}`}>
                {/* Dot connector */}
                <div className="hidden md:block absolute left-1/2 top-5 w-4 h-4 rounded-full bg-intell-blue -translate-x-1/2 md:-ml-[42px]" />

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-intell-blue text-white">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-intell-blue font-semibold">{step.id}</p>
                      <h3 className="text-lg font-medium text-gray-900">{step.name}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
