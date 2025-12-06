'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'R. N. G. Patel Institute Of Technology',
      duration: 'June 2018 - May 2022',
      location: 'Bardoli, Gujarat - 394350',
      description: 'Focused on software engineering, algorithms, and back-end system development. Graduated with a strong foundation in computer science principles and practical programming skills.',
      achievements: [
        'CGPA: 8.35',
        'Strong foundation in programming and software development',
        'Completed coursework in data structures, algorithms, and software engineering',
        'Developed problem-solving skills and technical expertise'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-start space-x-6">
                {/* Education icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  <GraduationCap className="w-8 h-8 text-primary-600" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="card">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{edu.degree}</h3>
                        <p className="text-primary-600 font-medium text-lg">{edu.field}</p>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2 md:mt-0">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;