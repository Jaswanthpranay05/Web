import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { UPCOMING_EVENTS } from '../../constants/events-data';

const EventsSection: React.FC = () => {
  // Only show the next 3 upcoming events
  const displayedEvents = UPCOMING_EVENTS.slice(0, 3);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Upcoming Events"
          subtitle="Join us for workshops, tech talks, hackathons, and more. Check out what's happening next!"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all"
            >
              {event.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {formatDate(event.date)}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-neutral-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}<ChevronRight/></span>
                  </div>
                </div>
                <p  className="text-neutral-600 mb-4 line-clamp-2">{event.description}</p>
                
                {event.registrationLink && (
                  <a 
                    href={event.registrationLink} 
                    className="text-primary-500 font-medium hover:text-primary-600 flex items-center"
                  >
                    Register Now <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/events">
            <Button variant="outline">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;