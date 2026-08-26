export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  fullDetails: string;
  category: 'AI / RAG' | '3D & WebGL' | 'Backend & DevTools' | 'Education';
  tags: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  gradient: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate';
    highlight?: string;
    icon?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'AI & Generative AI' | 'Cloud & Systems' | 'Programming & DSA' | 'Practical & Internship';
  description?: string;
  badgeColor?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  timeline: string;
  details: string;
  status: 'In Progress' | 'Completed';
  highlights: string[];
}

export interface HackathonImpact {
  eventName: string;
  teamName: string;
  projectTitle: string;
  location: string;
  objective: string;
  sdgGoals: { number: number; title: string }[];
  technologies: string[];
  impactPoints: string[];
}

export interface PortfolioData {
  personal: {
    fullName: string;
    shortName: string;
    roleTitles: string[];
    email: string;
    phone: string;
    location: string;
    linkedIn: string;
    github: string;
    resumeFileName: string;
    resumePath: string;
    summary: string;
    status: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  projects: Project[];
  skills: SkillCategory[];
  certifications: Certification[];
  education: EducationItem[];
  leadership: HackathonImpact;
  languages: { name: string; proficiency: string }[];
  interests: string[];
}
