<<<<<<< HEAD

=======
>>>>>>> 2cc58a3 (Initial commit)
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'JayaSri Krishna Nelluri',
    role: 'Founder & Chief Executive Officer',
<<<<<<< HEAD
    image: '/lovable-uploads/8f311d75-5ff2-4880-af3f-20d19f4ef9ed.png',
=======
    image: 'https://www.intellisurgetechnologies.com/images/jaya.png',
>>>>>>> 2cc58a3 (Initial commit)
    initials: 'JN',
  },
  {
    name: 'Surendra Nelluri',
    role: 'Chief Strategy Officer',
<<<<<<< HEAD
    image: '/lovable-uploads/8f311d75-5ff2-4880-af3f-20d19f4ef9ed.png',
=======
    image: 'https://www.intellisurgetechnologies.com/images/surendra.png',
>>>>>>> 2cc58a3 (Initial commit)
    initials: 'SN',
  },
  {
    name: 'Naresh Kumar',
    role: 'VP – People and Client Success',
    initials: 'NK',
  },
  {
    name: 'Joseph Ahamba',
    role: 'Manager – IT Operations',
    initials: 'JA',
  },
  {
    name: 'Akanksha Mohile',
    role: 'Business Development Manager',
<<<<<<< HEAD
    image: '/lovable-uploads/8f311d75-5ff2-4880-af3f-20d19f4ef9ed.png',
=======
    image: 'https://www.intellisurgetechnologies.com/images/akanksha_pic.png',
>>>>>>> 2cc58a3 (Initial commit)
    initials: 'AM',
  },
];

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
<<<<<<< HEAD
            // Animate title and description
            document.querySelectorAll('.about-title').forEach((el) => {
              el.classList.add('animate-text-reveal');
            });
            
            // Animate team members with delay
=======
            document.querySelectorAll('.about-title').forEach((el) => {
              el.classList.add('animate-text-reveal');
            });
>>>>>>> 2cc58a3 (Initial commit)
            document.querySelectorAll('.team-member').forEach((el, index) => {
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
    <section id="about" className="section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg about-title opacity-0 mb-4">
            Meet Our <span className="text-gradient-primary">Brilliant</span> Team
          </h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto about-title opacity-0">
=======
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg about-title opacity-0 mb-4">
            Meet Our <span className="text-[#dc3545]">Brilliant</span> Team
          </h2>
          <p className="paragraph mt-4 max-w-3xl mx-auto about-title opacity-0 text-[#0D3B66]">
>>>>>>> 2cc58a3 (Initial commit)
            Innovative minds driving data solutions that empower your business to soar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
<<<<<<< HEAD
              className="team-member opacity-0 glass-morphism p-8 rounded-xl flex flex-col items-center text-center"
            >
              <Avatar className="w-32 h-32 mb-4">
                {member.image ? (
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                ) : (
                  <AvatarFallback className="bg-intell-green/20 text-intell-green text-2xl">
=======
              className="team-member opacity-0 p-8 rounded-xl flex flex-col items-center text-center border border-[#11B5E4] shadow-lg"
            >
              <Avatar className="w-32 h-32 mb-4">
                {member.image ? (
                  <AvatarImage src={member.image} alt={member.name} className="object-cover rounded-full" />
                ) : (
                  <AvatarFallback className="bg-[#11B5E4] text-white text-2xl">
>>>>>>> 2cc58a3 (Initial commit)
                    {member.initials}
                  </AvatarFallback>
                )}
              </Avatar>
<<<<<<< HEAD
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
=======
              <h3 className="text-xl font-bold text-[#dc3545] mb-1">{member.name}</h3>
              <p className="text-[#0D3B66]">{member.role}</p>
>>>>>>> 2cc58a3 (Initial commit)
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default AboutUs;
=======
export default AboutUs;
>>>>>>> 2cc58a3 (Initial commit)
