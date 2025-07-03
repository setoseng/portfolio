// Project types
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
  challenges: string;
  outcome: string;
}

// Experience types
export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
}

// Education types
export interface Education {
  degree: string;
  school: string;
  year: string;
  details: string;
}

// Skills types
export interface Skills {
  frontend: string[];
  backend: string[];
  tools: string[];
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

// Navigation types
export interface NavigationItem {
  name: string;
  section: string;
}
