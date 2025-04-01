
import React from 'react';
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
  return (
    <section id="features" className="section-padding bg-intell-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">Comprehensive Tech Solutions</h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto">
            We offer a full spectrum of services to help organizations transform their technology infrastructure and drive business growth.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div 
              key={feature.name} 
              className="bg-white rounded-xl p-8 card-shadow"
            >
              <div className="inline-flex items-center justify-center p-3 bg-intell-lightBlue rounded-md">
                <feature.icon className="h-6 w-6 text-intell-blue" />
              </div>
              <h3 className="mt-5 text-xl font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
