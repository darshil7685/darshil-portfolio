'use client';

import { motion } from 'framer-motion';
import { Download, Linkedin } from 'lucide-react';

const About = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Darshil(Resume).pdf';
    link.download = 'Darshil_Resume.pdf';
    link.click();
  };

  const stats = [
    { number: '3.5+', label: 'Years Experience', color: 'text-primary-600' },
    { number: '4+', label: 'Major Projects', color: 'text-secondary-600' },
    { number: 'Node.js', label: 'Expert', color: 'text-accent-600' },
    { number: 'RESTful APIs', label: 'Specialization', color: 'text-primary-600' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable and efficient back-end solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experienced Node.js Developer with over 3.5+ years of expertise in designing, developing, and maintaining 
                scalable back-end systems and RESTful APIs. Skilled in Node.js, Express.js, and database technologies such as 
                MS-SQL Server, MongoDB and RedisDB. Proven ability to collaborate effectively with cross-functional teams to 
                deliver robust, high-performance solutions within tight deadlines.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Dedicated to continuous learning and staying current with emerging technologies to enhance system efficiency 
                and overall project outcomes. Based in Surat, Gujarat, India - 394101.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={downloadResume}
                  className="btn btn-primary flex-1 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.button>
                
                <motion.a
                  href="https://www.linkedin.com/in/darsil-pansuriya-756453194/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex-1 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </motion.a>
                
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;