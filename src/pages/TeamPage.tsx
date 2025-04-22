import React, { useState } from 'react';
import { Github, Linkedin, Mail, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { TEAM_MEMBERS, FACULTY_MEMBERS } from '../constants/team-data';
import { Faculty } from '../types';
import { TeamMember } from '../types';

const TeamPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = TEAM_MEMBERS.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFaculty = FACULTY_MEMBERS.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderMemberCard = (member: TeamMember | Faculty, index: number) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-primary-300">{member.role}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-neutral-600 mb-6">{member.bio}</p>
        <div className="flex space-x-4">
          {'socialLinks' in member && member.socialLinks?.github && (
            <a
              href={member.socialLinks.github}
              className="text-neutral-500 hover:text-primary-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {'socialLinks' in member && member.socialLinks?.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              className="text-neutral-500 hover:text-primary-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {'socialLinks' in member && member.socialLinks?.email && (
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
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-primary-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-white/80">
              Get to know the passionate faculty and students powering our ACM chapter.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 block w-full"
                placeholder="Search team or faculty members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Student Team First */}
          <SectionHeading title="Student Team" />
          {filteredMembers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {filteredMembers.map(renderMemberCard)}
            </div>
          ) : (
            <div className="text-center py-12 text-neutral-600">No student members found.</div>
          )}

          {/* Faculty Mentors Last */}
          <div className="mt-20">
            <SectionHeading title="Faculty Mentors" />
            {filteredFaculty.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {filteredFaculty.map(renderMemberCard)}
              </div>
            ) : (
              <div className="text-center py-12 text-neutral-600">No faculty members found.</div>
            )}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Joining Our Team?</h2>
            <p className="text-lg text-neutral-600 mb-8">
              We're always looking for passionate students to help lead our ACM chapter. Elections for officer positions are held at the end of each academic year, but there are plenty of ways to get involved throughout the year.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors"
            >
              Learn About Leadership Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
