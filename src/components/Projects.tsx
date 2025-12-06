'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'HCIS (Human Capital Information System)',
      description: 'An HRMS platform designed to streamline workforce management processes, including attendance tracking, leave management, broadcasts, surveys, and centralized control through an admin control center.',
      tech: ['Express.js', 'MS-SQL Server', 'RedisDB', 'JWT', 'WebSocket'],
      playStore: '#',
      appStore: '#',
      emoji: '👥',
      details: 'Built RESTful APIs in Node.js/Express with JWT-based authentication and role-based access control, storing tokens and permissions in Redis for fast, scalable session management. Implemented real-time web notifications using WebSocket for browser users and integrated Firebase Cloud Messaging (FCM) for push notifications on mobile apps.'
    },
    {
      title: 'SRK Travel App',
      description: 'A multi-tenant travel management platform for organizations and their employees.',
      tech: ['Express.js', 'MS-SQL Server', 'Passport.js', 'node-cron'],
      playStore: '#',
      appStore: '#',
      emoji: '✈️',
      details: 'Implemented role-based access control with user categories - Super Admin, Admin, User, Guest — using JWT tokens and Passport.js for secure authentication and authorization. Developed modules for employees to create and manage passports, visas, and domestic/international trips with different mode of travel. Automated visa-expiry reminders by implementing a Node.js Cron job scheduler.'
    },
    {
      title: 'SRK PURE',
      description: 'A comprehensive platform for managing diamond inventory, grading, and sales processes, enabling efficient tracking, valuation, and streamlined transactions from stock to client delivery.',
      tech: ['Sails.js', 'MS-SQL Server', 'WebSocket'],
      playStore: '#',
      appStore: '#',
      emoji: '💎',
      details: 'Built dynamic pricing algorithms that calculate stones prices based on grading parameters and market indexes, improving accuracy and consistency of valuations. Developed real-time dashboards and reports for stock levels, grading status, and pricing trends using WebSocket, enabling instant data updates and faster decision-making.'
    },
    {
      title: 'Control Center',
      description: 'Module for Managing Permissions, Access, and Search Restrictions in a Diamond Trading Platform.',
      tech: ['Sails.js', 'MongoDB', 'MS-SQL Server'],
      playStore: '#',
      appStore: '#',
      emoji: '⚙️',
      details: 'Developed a Control Center module to manage permissions, access controls, and specific features for users of the SRK PURE and SRK .ONE platforms. Implemented advanced user-specific permissions, including login limits, category-based access, and daily/weekly restrictions on diamond search and appointments.'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent back-end projects and development work
          </p>
        </motion.div>

        <div className="grid-responsive">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-lg mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="text-6xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {project.emoji}
                  </motion.div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Details */}
                {project.details && (
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.details}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;