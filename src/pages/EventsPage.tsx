import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ChevronRight, Filter, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { UPCOMING_EVENTS, PAST_EVENTS } from '../constants/events-data';
import { Event } from '../types';

const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const filteredEvents = activeTab === 'upcoming' 
    ? UPCOMING_EVENTS.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : PAST_EVENTS.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ACM Events</h1>
            <p className="text-xl text-white/80">
              Dive into our upcoming events, workshops, and activities that you won't want to miss.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 block w-full"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeTab === 'upcoming'
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => setActiveTab('upcoming')}
                >
                  Upcoming
                </button>
                <button
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeTab === 'past'
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => setActiveTab('past')}
                >
                  Past
                </button>
              </div>
            </div>
          </div>

          {/* Events List */}
          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
                        <span className="text-blue-600">{event.time}</span>
                      </div>
                      <div className="flex items-center text-neutral-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-blue-600">{event.location}</span>
                      </div>
                      <div> 
                      <h4 className="text-xl font-bold mb-2">Event Organizers: {event.Organizers}</h4>
                      </div>
                    </div>
                    <p className="text-neutral-600 mb-4">{event.description}</p>
                    
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
          ) : (
            <div className="text-center py-12">
              <div className="mb-4 text-neutral-400">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l.77-.77m0 0a7 7 0 101.7-9.7 7 7 0 00-9.7 1.7 7 7 0 001.7 9.7c.53.53 1.14.97 1.8 1.3m12.4-10.4C15.78 3.6 11.23 3.3 8.4 5.4m10.8 10.5c.4.38.8.75 1.2 1.1l3.6 3.6m-16-18l3 3m7.8 11.7L21 21" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No events found</h3>
              <p className="text-neutral-600 mb-4">
                We couldn't find any events matching your search criteria.
              </p>
              <Button variant="outline" onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;