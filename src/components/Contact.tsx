'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Github, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create email content
      const emailContent = {
        to: 'djpansuriya6555@gmail.com',
        subject: `Portfolio Contact: ${formData.subject}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Portfolio Contact Form
        `
      };

      // Try multiple methods to send email
      
      // Method 1: Use Web Share API if available
      if (navigator.share) {
        await navigator.share({
          title: emailContent.subject,
          text: emailContent.body,
          url: `mailto:${emailContent.to}?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`
        });
      } else {
        // Method 2: Fallback to mailto
        const mailtoLink = `mailto:${emailContent.to}?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`;
        window.open(mailtoLink, '_blank');
      }
      
      // Show confirmation modal
      setShowModal(true);
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Error sending email:', error);
      // Still show modal even if there's an error
      setShowModal(true);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'djpansuriya6555@gmail.com',
      href: 'mailto:djpansuriya6555@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Surat, Gujarat, India - 394101',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? Let&apos;s discuss your next back-end development project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Let&apos;s work together</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you need a scalable back-end system, RESTful APIs, or help with an existing project, 
                I&apos;d love to hear from you.
              </p>
              
              {/* Contact Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/darshil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </motion.a>
                
                <motion.a
                  href="https://github.com/darshil7685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.a>
                
                <motion.a
                  href="https://wa.me/919265933537?text=Hey%20Darsil,%20I%20want%20to%20connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </motion.a>
                
                <motion.a
                  href="mailto:djpansuriya6555@gmail.com?subject=Let's%20Connect&body=Hey%20Darsil,%20I%20want%20to%20connect"
                  className="btn btn-outline flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4" />
                  Email
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for reaching out! Your email client should have opened with a pre-filled message. 
              Please send the email, and I&apos;ll get back to you within 24 hours.
            </p>
            
            <motion.button
              onClick={() => setShowModal(false)}
              className="btn btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Got it!
            </motion.button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;