import { ExperienceItem, NavItem, SkillCategory, Project } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Lambda Logics',
    position: 'Senior Quality Assurance Engineer',
    duration: 'July 2024 - Present',
    responsibilities: [
      'Testing and validating XML-based invoices for accuracy and structure',
      'Performing functional, regression, and localization testing for German, French, Romansh, and Polish languages',
      'Maintaining detailed test plans and defect logs',
      'Working closely with developers to ensure software quality and timely releases'
    ],
    projects: [
      'MonteurzimmerKING', 'AirKorp', 'IntelliStock', 'IntelliRep', 
      'Jazzba', 'HRMS', 'Odoo ERP', 'HrSuit'
    ]
  },
  {
    company: 'Terminus Technologies',
    position: 'Project Coordinator & Software Quality Assurance Engineer',
    duration: 'February 2023 - Present',
    responsibilities: [
      'Managing Agile sprint cycles, team coordination, and stakeholder communication',
      'Writing and executing manual test cases for web and mobile applications',
      'Logging bugs using Jira and collaborating with developers for timely fixes',
      'Handling project tracking, timelines, and documentation in Confluence',
      'Participating in sprint planning, daily standups, and retrospectives'
    ],
    projects: ['Howick', 'IVS', 'I-CERT', 'Customer Portal', 'WordPress Websites']
  },
  {
    company: 'ZIMO Group',
    position: 'Software Quality Assurance Engineer (Remote)',
    duration: 'June 2023 - October 2023',
    responsibilities: [
      'Performed comprehensive quality assurance testing for multiple applications',
      'Documented and tracked software defects',
      'Collaborated with remote development teams to ensure product quality'
    ],
    projects: [
      'Zimo Pro', 'Zimo Meet', 'ZiTransfer', 'Zimo Group', 'Zimo Team'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'QA & Testing',
    icon: 'check-circle',
    skills: [
      'Manual Testing',
      'Functional & Regression Testing',
      'Test Case Design',
      'XML Invoice Testing',
      'Localization Testing',
      'Jira, Trello, ClickUp',
      'SDLC & STLC'
    ]
  },
  {
    name: 'Tools & Team Management',
    icon: 'users',
    skills: [
      'Agile & Scrum Methodologies',
      'Sprint Planning',
      'Retrospectives',
      'Confluence, Notion',
      'Task Coordination'
    ]
  },
  {
    name: 'Technical',
    icon: 'code',
    skills: [
      'Selenium (Basic Automation)',
      'HTML, CSS',
      'React.js (Basic)',
      'WordPress CMS'
    ]
  }
];

export const projects: Project[] = [
  {
    name: 'Client Dashboard – QA & Project Coordination',
    description: 'Led both QA and project coordination efforts for a client-facing dashboard. Ensured timely feature rollouts, seamless user experience, and cross-functional alignment. Collaborated with developers and stakeholders to manage timelines, track issues, and deliver a stable product in agile sprints.',
    technologies: ['Manual Testing', 'Project Coordination', 'Jira', 'Test Documentation', 'User Acceptance Testing', 'Agile QA']
  },
  {
    name: 'Localization Testing Framework',
    description: 'Developed a comprehensive testing framework for multi-language applications supporting German, French, Romansh, and Polish languages.',
    technologies: ['Jira', 'Localization Testing', 'Documentation']
  },
  {
    name: 'XML Invoice Validation System',
    description: 'Created structured test cases for validating XML-based invoices, ensuring accuracy across multiple data points and structures.',
    technologies: ['XML', 'Test Planning', 'Validation Techniques']
  },
  {
    name: 'Agile Project Management Implementation',
    description: 'Led the implementation of Agile methodologies for a cross-functional team, resulting in improved delivery timelines and team collaboration.',
    technologies: ['Agile', 'Scrum', 'Jira', 'Confluence']
  }
];

export const personalInfo = {
  name: 'Muzna Farooq',
  title: 'Software Quality Assurance Engineer & Project Coordinator',
  phone: '+92 313 4808987',
  email: 'muznafarooq21@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muzna-farooq/',
  languages: ['English (Fluent)', 'Urdu (Native)'],
  education: {
    degree: 'BS Computer Science',
    institution: 'National College of Business Administration & Economics (NCBA&E), Main Campus',
    cgpa: '3.24',
    duration: 'November 2021 – February 2025 '
  },
  bio: 'A passionate and detail-oriented Software Quality Assurance Engineer and Project Coordinator with hands-on experience in Agile environments. I aim to grow my career by contributing to high-impact projects, enhancing product quality, and driving team collaboration. Seeking a challenging opportunity where I can apply my QA expertise and coordination skills to deliver exceptional software solutions.'
};