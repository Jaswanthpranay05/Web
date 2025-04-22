import { Resource } from '../types';

export const RESOURCES: Resource[] = [
  {
    id: 1,
    title: 'GitHub Student Developer Pack',
    description: 'Access to developer tools, cloud services, and training—all for free with your student email.',
    link: 'https://education.github.com/pack',
    category: 'Tools',
    icon: 'github',
  },
  {
    id: 2,
    title: 'LeetCode Premium',
    description: 'ACM members get discounted access to LeetCode Premium for interview preparation.',
    link: '#',
    category: 'Learning',
    icon: 'code',
  },
  {
    id: 3,
    title: 'AWS Educate',
    description: 'Free cloud computing resources and training for students.',
    link: 'https://aws.amazon.com/education/awseducate/',
    category: 'Cloud',
    icon: 'cloud',
  },
  {
    id: 4,
    title: 'Workshop Materials',
    description: 'Slides and code samples from all our past workshops and events.',
    link: '#',
    category: 'Learning',
    icon: 'folder',
  },
  {
    id: 5,
    title: 'Tech Conference Scholarships',
    description: 'Information on scholarships for attending major tech conferences.',
    link: '#',
    category: 'Opportunities',
    icon: 'ticket',
  },
  {
    id: 6,
    title: 'Internship Database',
    description: 'Curated list of tech internships with application deadlines and requirements.',
    link: '#',
    category: 'Careers',
    icon: 'briefcase',
  },
  {
    id: 7,
    title: 'Local Tech Meetups',
    description: 'Calendar of tech events and meetups in the area.',
    link: '#',
    category: 'Community',
    icon: 'map-pin',
  },
  {
    id: 8,
    title: 'Research Opportunities',
    description: 'On-campus research positions in computer science and related fields.',
    link: '#',
    category: 'Academic',
    icon: 'microscope',
  }
];