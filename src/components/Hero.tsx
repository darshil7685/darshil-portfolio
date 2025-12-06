'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, Eye, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Darshil(Resume).pdf';
    link.download = 'Darshil_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Sparkling Stars */}
      <div className="absolute inset-0">
        {[
          { left: 10, top: 20, delay: 0, duration: 2.5 },
          { left: 25, top: 15, delay: 0.5, duration: 3.2 },
          { left: 40, top: 30, delay: 1, duration: 2.8 },
          { left: 60, top: 25, delay: 1.5, duration: 3.5 },
          { left: 80, top: 35, delay: 2, duration: 2.2 },
          { left: 15, top: 45, delay: 2.5, duration: 3.8 },
          { left: 35, top: 50, delay: 3, duration: 2.7 },
          { left: 55, top: 60, delay: 3.5, duration: 3.1 },
          { left: 75, top: 55, delay: 4, duration: 2.9 },
          { left: 90, top: 65, delay: 4.5, duration: 3.3 },
          { left: 20, top: 70, delay: 0.2, duration: 2.6 },
          { left: 45, top: 75, delay: 0.7, duration: 3.4 },
          { left: 65, top: 80, delay: 1.2, duration: 2.4 },
          { left: 85, top: 85, delay: 1.7, duration: 3.6 },
          { left: 5, top: 90, delay: 2.2, duration: 2.8 },
          { left: 30, top: 10, delay: 2.7, duration: 3.2 },
          { left: 50, top: 5, delay: 3.2, duration: 2.5 },
          { left: 70, top: 15, delay: 3.7, duration: 3.7 },
          { left: 95, top: 12, delay: 4.2, duration: 2.3 },
          { left: 12, top: 40, delay: 0.3, duration: 3.1 },
          { left: 38, top: 35, delay: 0.8, duration: 2.7 },
          { left: 58, top: 45, delay: 1.3, duration: 3.4 },
          { left: 78, top: 40, delay: 1.8, duration: 2.6 },
          { left: 98, top: 50, delay: 2.3, duration: 3.5 },
          { left: 8, top: 60, delay: 2.8, duration: 2.9 },
          { left: 28, top: 65, delay: 3.3, duration: 3.3 },
          { left: 48, top: 70, delay: 3.8, duration: 2.4 },
          { left: 68, top: 75, delay: 4.3, duration: 3.6 },
          { left: 88, top: 80, delay: 0.1, duration: 2.8 },
          { left: 18, top: 85, delay: 0.6, duration: 3.2 },
          { left: 42, top: 90, delay: 1.1, duration: 2.5 },
          { left: 62, top: 95, delay: 1.6, duration: 3.7 },
          { left: 82, top: 90, delay: 2.1, duration: 2.7 },
          { left: 2, top: 95, delay: 2.6, duration: 3.4 },
          { left: 22, top: 5, delay: 3.1, duration: 2.6 },
          { left: 52, top: 10, delay: 3.6, duration: 3.3 },
          { left: 72, top: 8, delay: 4.1, duration: 2.8 },
          { left: 92, top: 18, delay: 0.4, duration: 3.5 },
          { left: 6, top: 30, delay: 0.9, duration: 2.4 },
          { left: 32, top: 28, delay: 1.4, duration: 3.6 },
          { left: 56, top: 32, delay: 1.9, duration: 2.9 },
          { left: 76, top: 38, delay: 2.4, duration: 3.1 },
          { left: 96, top: 42, delay: 2.9, duration: 2.7 },
          { left: 16, top: 48, delay: 3.4, duration: 3.4 },
          { left: 36, top: 52, delay: 3.9, duration: 2.5 },
          { left: 66, top: 58, delay: 0.2, duration: 3.2 },
          { left: 86, top: 62, delay: 0.7, duration: 2.8 },
          { left: 4, top: 68, delay: 1.2, duration: 3.5 },
          { left: 24, top: 72, delay: 1.7, duration: 2.6 },
          { left: 44, top: 78, delay: 2.2, duration: 3.3 },
          { left: 64, top: 82, delay: 2.7, duration: 2.9 },
          { left: 84, top: 88, delay: 3.2, duration: 3.6 },
        ].map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0">
        {[
          { startX: 0, startY: 0, delay: 0 },
          { startX: 20, startY: 10, delay: 2 },
          { startX: 40, startY: 5, delay: 4 },
          { startX: 60, startY: 15, delay: 6 },
          { startX: 80, startY: 8, delay: 8 },
          { startX: 10, startY: 25, delay: 1 },
          { startX: 30, startY: 20, delay: 3 },
          { startX: 50, startY: 30, delay: 5 },
        ].map((star, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
            }}
            animate={{
              x: [0, 300],
              y: [0, 300],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative w-48 h-48 mx-auto mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-2xl opacity-40"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <Image
                src="/darshil.png"
                alt="Darsil Pansuriya"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20"></div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Darsil Pansuriya
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-purple-200 mb-8 font-medium"
          >
            Back-End Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Experienced Node.js Developer with over 3.5+ years of expertise in designing, developing, and maintaining scalable back-end systems and RESTful APIs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToProjects}
              className="btn btn-primary btn-lg bg-primary-600 text-white hover:bg-primary-700 shadow-xl border-2 border-primary-600 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5" />
              View Projects
            </motion.button>

            <motion.button
              onClick={downloadResume}
              className="btn btn-primary btn-lg bg-gradient-to-r from-secondary-500 to-accent-500 hover:from-secondary-600 hover:to-accent-600 shadow-xl text-white border-2 border-secondary-400 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="btn btn-primary btn-lg bg-primary-600 text-white hover:bg-primary-700 shadow-xl border-2 border-primary-600 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;