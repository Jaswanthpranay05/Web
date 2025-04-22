import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const JoinSection: React.FC = () => {
  const benefits = [
    'Access to workshops, tech talks, and hands-on projects',
    'Networking opportunities with industry professionals',
    'Resume building and interview preparation',
    'Participation in hackathons and coding competitions',
    'Leadership and volunteer opportunities',
    'Social events and community building'
  ];

  return (
    <section className="py-20 bg-primary-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-white/80 mb-8">
              Become a member of ACM and unlock a world of opportunities in computing and technology. Whether you're a beginner or an experienced programmer, there's a place for you in our community.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="bg-white/20 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <a href="https://india.acm.org/membership" target="_blank">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-white/90"
              rightIcon={<ArrowRight size={20} />}
            >
              Become a Member
            </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6">Membership Options</h3>

            <div className="space-y-6">
              <div className="p-6 bg-white/10 rounded-lg border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 right-0">
                  <div className="bg-accent-500 text-white text-xs font-bold px-4 py-1 transform rotate-45 translate-x-2 translate-y-3">
                    POPULAR
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">Full Membership</h4>
                  <span className="text-2xl font-bold">$15<span className="text-sm font-normal">/year</span></span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="text-green-400 h-5 w-5 mr-2" />
                    <span>All Basic benefits</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-400 h-5 w-5 mr-2" />
                    <span>ACM National membership</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-400 h-5 w-5 mr-2" />
                    <span>Exclusive events access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-400 h-5 w-5 mr-2" />
                    <span>Leadership opportunities</span>
                  </li>
                </ul>
                <Button fullWidth>Join Now</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
