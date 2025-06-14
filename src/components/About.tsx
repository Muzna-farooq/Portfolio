import React from 'react';
import { Briefcase, GraduationCap, Languages } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-teal-600 dark:text-teal-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 mr-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h3>
            </div>
                      <p className="text-gray-700 dark:text-gray-300">
          Quality Assurance Professional and Project Coordinator with hands-on experience in manual testing, Agile methodologies, and cross-functional team coordination. Familiar with Selenium automation, SQL queries, and basic coding concepts. Proficient in using tools like Jira and Confluence for efficient test management and project tracking.   </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 mr-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {personalInfo.education.degree}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {personalInfo.education.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                CGPA: {personalInfo.education.cgpa}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {personalInfo.education.duration}
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 mr-4">
                <Languages size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Languages</h3>
            </div>
            <ul className="space-y-2">
              {personalInfo.languages.map((language, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md">
  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
  My Journey
</h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I am a <span className="text-teal-600">detail-oriented Software Quality Assurance Engineer</span> and 
        <span className="text-teal-600"> Project Coordinator</span> with hands-on experience working in 
        <span className="text-teal-600"> Agile environments</span>. My professional journey has equipped me with 
        expertise in <span className="text-teal-600">manual testing</span>, <span className="text-teal-600">bug tracking</span>, and 
        <span className="text-teal-600"> team coordination</span>.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        With experience at companies like <span className="text-teal-600">Lambda Logics</span>, 
        <span className="text-teal-600"> Terminus Technologies</span>, and <span className="text-teal-600">ZIMO Group</span>, I've had the 
        opportunity to work on diverse projects and develop a comprehensive skill set that 
        encompasses both <span className="text-teal-600">technical testing abilities</span> and 
        <span className="text-teal-600"> project management competencies</span>.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        I'm particularly proficient in <span className="text-teal-600">localization testing</span> across 
        <span className="text-teal-600"> multiple languages</span>, <span className="text-teal-600">XML invoice validation</span>, and 
        implementing <span className="text-teal-600">Agile methodologies</span> to enhance team productivity and 
        product quality.
      </p>


      </div>
      </div>
    </section>
  );
};

export default About;