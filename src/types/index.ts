export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactLink {
  name: string;
  url: string;
  icon: string;
}