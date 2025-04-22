import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import EventsSection from '../components/home/EventsSection';
import TeamSection from '../components/home/TeamSection';
import JoinSection from '../components/home/JoinSection';
import ContactSection from '../components/home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <TeamSection />
      <JoinSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;