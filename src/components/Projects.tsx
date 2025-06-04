import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project tabs */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div 
                key={index}
                onClick={() => setActiveProject(index)}
                className={`cursor-pointer rounded-lg p-6 transition-all duration-300 ${
                  index === activeProject 
                    ? 'bg-teal-600 dark:bg-teal-700 shadow-md text-white'
                    : 'bg-white dark:bg-gray-900 shadow hover:shadow-md text-gray-900 dark:text-white'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full mr-4 ${
                    index === activeProject 
                      ? 'bg-white text-teal-600'
                      : 'bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400'
                  }`}>
                    <Layers size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Project details */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {projects[activeProject].name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {projects[activeProject].description}
            </p>
            
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
              Technologies & Skills:
            </h4>
            <div className="flex flex-wrap gap-2">
              {projects[activeProject].technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;