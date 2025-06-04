import React from 'react';
import { CheckCircle, Users, Code } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Helper function to render the appropriate icon
const renderIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'check-circle':
      return <CheckCircle className={className} />;
    case 'users':
      return <Users className={className} />;
    case 'code':
      return <Code className={className} />;
    default:
      return <CheckCircle className={className} />;
  }
};

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-teal-600 dark:text-teal-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 mr-4">
                  {renderIcon(category.icon, "w-6 h-6")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">My Approach to Quality Assurance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium mb-3">Testing Philosophy</h4>
              <p className="text-white/90 leading-relaxed">
                I believe in thorough, methodical testing that considers not just functionality 
                but also user experience, accessibility, and cross-platform compatibility. 
                My goal is to catch issues before they reach production and ensure a seamless 
                experience for all users.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-3">Team Collaboration</h4>
              <p className="text-white/90 leading-relaxed">
                Quality is everyone's responsibility. I work closely with developers, designers, 
                and stakeholders to ensure quality is built into the product from the start. 
                Effective communication and documentation are key elements of my approach to QA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;