export interface NavItem {
  title: string;
  path: string;
}
export interface Faculty {
  id: number;
  name:string;
  role: string;
  image: string;
  bio: string;
   socialLinks?: {
    linkedin?: string;
    email?: string;
  };
}
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    email?: string;
  };
}

export interface Event {
  id: number;
  title: string;
  Organizers: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  registrationLink?: string;
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  category: string;
  icon: string;
}