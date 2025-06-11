import React from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-teal-600 dark:text-teal-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200 dark:bg-teal-900"></div>
          
          {/* Experience items */}
          {experiences.map((experience, index) => (
            <div key={index} className={`mb-12 md:mb-0 md:flex relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-16 z-10">
                <div className="w-10 h-10 rounded-full bg-teal-600 dark:bg-teal-500 flex items-center justify-center shadow-lg">
                  <Briefcase size={20} className="text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-1/2 p-6 md:p-8">
                <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg 
                  ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="md:hidden flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-teal-600 dark:bg-teal-500 flex items-center justify-center mr-4 shadow-md">
                      <Briefcase size={20} className="text-white" />
                    </div>
                    <div className="text-sm font-medium text-teal-600 dark:text-teal-400">
                      {experience.duration}
                    </div>
                  </div>
                  
                  <div className="hidden md:block text-sm font-medium text-teal-600 dark:text-teal-400 mb-2">
                    {experience.duration}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {experience.position}
                  </h3>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                    {experience.company}
                  </h4>
                  
                  <h5 className="text-gray-800 dark:text-gray-200 font-medium mb-2">Responsibilities:</h5>
                  <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700 dark:text-gray-400">
                    {experience.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  {experience.projects && (
                    <>
                      <h5 className="text-gray-800 dark:text-gray-200 font-medium mb-2">Projects:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.projects.map((project, i) => (
                          <span 
                            key={i} 
                            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Spacer div for alternating layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;