
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Code, Database, Globe, Layers, Users } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for a Senior Frontend Developer who is passionate about building user interfaces with modern web technologies like React and TypeScript.",
    icon: Code
  },
  {
    id: 2,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our backend team to build scalable APIs and services that power our applications using Node.js, Python, or Java.",
    icon: Database
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    description: "Help us build and maintain our cloud infrastructure, CI/CD pipelines, and automation tools.",
    icon: Layers
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Work closely with engineering, design, and business teams to define and deliver product features.",
    icon: Building2
  },
  {
    id: 5,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful, intuitive user interfaces and experiences for our web and mobile applications.",
    icon: Globe
  },
  {
    id: 6,
    title: "Sales Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    description: "Join our sales team to help grow our customer base and drive revenue through consultative selling.",
    icon: Users
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-lg mb-6">Join Our Team</h1>
            <p className="paragraph max-w-3xl mx-auto">
              At IntellSurge, we're building the future of technology. Join us on our mission to create innovative solutions that transform businesses and improve lives.
            </p>
          </div>
        </div>
      </div>
      
      {/* Why Work With Us */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-6">Why Work With Us</h2>
            <p className="paragraph max-w-3xl mx-auto">
              We offer a supportive environment where you can grow professionally while working on challenging problems with talented colleagues.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-morphism p-8 rounded-xl text-center">
              <div className="bg-intell-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-intell-green w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Collaborative Culture</h3>
              <p className="text-gray-300">Work in a supportive team environment focused on shared success and innovation.</p>
            </div>
            
            <div className="glass-morphism p-8 rounded-xl text-center">
              <div className="bg-intell-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="text-intell-green w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Remote-First</h3>
              <p className="text-gray-300">Enjoy the flexibility of working remotely while staying connected with our global team.</p>
            </div>
            
            <div className="glass-morphism p-8 rounded-xl text-center">
              <div className="bg-intell-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Layers className="text-intell-green w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Continuous Growth</h3>
              <p className="text-gray-300">Access learning resources, mentorship, and opportunities to advance your career.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-6">Open Positions</h2>
            <p className="paragraph max-w-3xl mx-auto">
              Browse our current openings and find your next career opportunity with IntellSurge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="bg-secondary/30 border-gray-700 hover:border-intell-green transition-colors duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="bg-intell-green/20 p-2 rounded-lg">
                      <job.icon className="text-intell-green h-5 w-5" />
                    </div>
                    <div className="flex space-x-2">
                      <span className="bg-secondary/50 px-2 py-1 rounded text-xs font-medium text-white">{job.location}</span>
                      <span className="bg-intell-green/30 text-intell-green px-2 py-1 rounded text-xs font-medium">{job.type}</span>
                    </div>
                  </div>
                  <CardTitle className="mt-3 text-white">{job.title}</CardTitle>
                  <CardDescription className="text-intell-green font-medium">{job.department}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{job.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full mt-2 border-intell-green text-intell-green hover:bg-intell-green hover:text-black">
                    Apply Now <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-secondary/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-morphism p-8 md:p-12 rounded-xl">
            <div className="text-center">
              <h2 className="heading-md mb-6">Don't See Your Perfect Role?</h2>
              <p className="paragraph max-w-2xl mx-auto mb-8">
                We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button className="bg-intell-green hover:bg-intell-lightGreen text-black px-8 py-6 text-lg">
                Send Open Application
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;
