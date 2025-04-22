import React, { useState } from 'react';
import { ExternalLink, Search, Briefcase, Code, Cloud, Folder, Ticket, MapPin, Github, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { RESOURCES } from '../constants/resources-data';
import { Resource } from '../types';

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Extract unique categories from resources
  const categories = Array.from(new Set(RESOURCES.map(resource => resource.category)));
  
  // Filter resources based on search term and active category
  const filteredResources = RESOURCES.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory ? resource.category === activeCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-6 w-6" />;
      case 'code':
        return <Code className="h-6 w-6" />;
      case 'cloud':
        return <Cloud className="h-6 w-6" />;
      case 'folder':
        return <Folder className="h-6 w-6" />;
      case 'ticket':
        return <Ticket className="h-6 w-6" />;
      case 'briefcase':
        return <Briefcase className="h-6 w-6" />;
      case 'map-pin':
        return <MapPin className="h-6 w-6" />;
      case 'microscope':
        return <Microscope className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-white/80">
              Explore tools, learning materials, and opportunities to enhance your skills and career.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 block w-full"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === null
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setActiveCategory(null)}
              >
                All
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Resources List */}
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <motion.a
                  key={resource.id}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border border-neutral-100 hover:border-primary-200"
                >
                  <div className="flex items-start">
                    <div className="p-3 bg-primary-100 rounded-lg mr-4 text-primary-500 group-hover:bg-primary-200 transition-colors">
                      {getIcon(resource.icon)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-neutral-800 group-hover:text-primary-600 transition-colors">
                          {resource.title}
                        </h3>
                        <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-primary-500 transition-colors" />
                      </div>
                      <span className="inline-block px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full mt-2 mb-3">
                        {resource.category}
                      </span>
                      <p className="text-neutral-600">{resource.description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mb-4 text-neutral-400">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-neutral-600 mb-4">
                We couldn't find any resources matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Suggest a Resource Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Suggest a Resource</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Know of a great resource that's not listed here? Let us know and we'll add it to our collection!
            </p>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Resource Name"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="url"
                  placeholder="Resource URL"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Brief description of the resource"
                  rows={3}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              <Button variant="primary" type="submit">
                Submit Resource
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;