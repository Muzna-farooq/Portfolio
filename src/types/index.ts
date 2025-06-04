export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  projects?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
}