import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Briefcase, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      title: 'Community',
      description: 'Connect with like-minded students passionate about computing and technology.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary-500" />,
      title: 'Learning',
      description: 'Expand your knowledge through workshops, tech talks, and hands-on projects.'
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary-500" />,
      title: 'Career Development',
      description: 'Build your resume, prepare for interviews, and connect with industry professionals.'
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary-500" />,
      title: 'Innovation',
      description: 'Participate in hackathons and collaborative projects to create real-world solutions.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About ACM Student Chapter"
          subtitle="We're dedicated to advancing computing as a science and profession, connecting students with opportunities in technology."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-neutral-700 mb-6">
              The Association for Computing Machinery (ACM) Student Chapter at our college is part of the world's largest educational and scientific computing society. We bring together students interested in computer science and related fields to foster learning, networking, and career development.
            </p>
            <p className="text-neutral-700 mb-6">
              Founded in 2024, our chapter has grown to over 50 active members across various computing disciplines. We host events ranging from technical workshops and coding competitions to industry mixers and social gatherings.
            </p>
            <Link to="/about">
              <Button 
                variant="outline" 
                rightIcon={<span>&rarr;</span>}
              >
                Learn More About Us
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
  src="dist/assets/Eventphotos/inauguralevent.jpg" 
  alt="ACM Students working together" 
  className="w-full h-auto"
/>

            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-50 rounded-lg -z-10"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-neutral-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;