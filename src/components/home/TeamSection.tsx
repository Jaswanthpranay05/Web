import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { TEAM_MEMBERS, FACULTY_MEMBERS } from '../../constants/team-data';

const TeamSection: React.FC = () => {
  const studentMembers = TEAM_MEMBERS.slice(0, 3);
  const facultyMentors = FACULTY_MEMBERS;

  const renderMembers = (members: typeof TEAM_MEMBERS | typeof FACULTY_MEMBERS) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-64 overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-primary-300">{member.role}</p>
            </div>
          </div>

          <div className="p-6">
            <p className="text-neutral-600 mb-4 line-clamp-3">{member.bio}</p>

            <div className="flex space-x-3">
              {member.socialLinks?.github && (
                <a 
                  href={member.socialLinks.github} 
                  className="text-neutral-500 hover:text-primary-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {member.socialLinks?.linkedin && (
                <a 
                  href={member.socialLinks.linkedin} 
                  className="text-neutral-500 hover:text-primary-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.socialLinks?.email && (
                <a 
                  href={`mailto:${member.socialLinks.email}`} 
                  className="text-neutral-500 hover:text-primary-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet Our Team"
          subtitle="Get to know the dedicated students leading our ACM chapter and making amazing things happen."
        />

        {/* Student Members at the Top */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Student Members</h2>
          {renderMembers(studentMembers)}
        </div>

        {/* Faculty Mentors at the Bottom */}
        {facultyMentors.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Faculty Mentors</h2>
            {renderMembers(facultyMentors)}
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/team">
            <Button variant="outline">
              Meet the Full Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
