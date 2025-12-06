'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// Using original web icons instead of Lucide React icons

const Skills = () => {
  const skills = [
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      description: 'Server-side JavaScript runtime',
      bgColor: 'bg-gradient-to-br from-green-500 via-green-600 to-teal-500'
    },
    {
      name: 'Express.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      description: 'Web application framework',
      bgColor: 'bg-gradient-to-br from-gray-500 via-gray-600 to-slate-500'
    },
    { 
      name: 'Sails.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sails/sails-original.svg',
      description: 'MVC framework for Node.js',
      bgColor: 'bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500'
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      description: 'Modern ES6+ development',
      bgColor: 'bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-500'
    },
    { 
      name: 'MS-SQL Server', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      description: 'Relational database management',
      bgColor: 'bg-gradient-to-br from-red-500 via-red-600 to-rose-500'
    },
    { 
      name: 'MongoDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      description: 'NoSQL database',
      bgColor: 'bg-gradient-to-br from-green-600 via-green-700 to-emerald-600'
    },
    { 
      name: 'RedisDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
      description: 'In-memory data store',
      bgColor: 'bg-gradient-to-br from-red-600 via-red-700 to-rose-600'
    },
    { 
      name: 'WebSocket', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      description: 'Real-time communication',
      bgColor: 'bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500'
    },
    { 
      name: 'Passport.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      description: 'Authentication middleware',
      bgColor: 'bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-500'
    },
    { 
      name: 'JWT', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg',
      description: 'JSON Web Tokens',
      bgColor: 'bg-gradient-to-br from-pink-500 via-pink-600 to-rose-500'
    },
    { 
      name: 'LDAP', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
      description: 'Directory services protocol',
      bgColor: 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-500'
    },
    {
      name: 'Git/GitLab',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
      description: 'Version control system',
      bgColor: 'bg-gradient-to-br from-orange-600 via-orange-700 to-red-600'
    },
    {
      name: 'Postman',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
      description: 'API testing tool',
      bgColor: 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-500'
    },
    {
      name: 'Jenkins',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
      description: 'CI/CD automation',
      bgColor: 'bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500'
    },
    {
      name: 'Jira',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
      description: 'Project management tool',
      bgColor: 'bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500'
    },
  ];
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build scalable back-end systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative card h-64 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Icon Container */}
                <div className="relative mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-100 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-200 dark:border-gray-300">
                    <Image 
                      src={skill.icon} 
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-white dark:bg-gray-100 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-center leading-tight">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center px-2">
                    {skill.description}
                  </p>
                </div>
                
                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;