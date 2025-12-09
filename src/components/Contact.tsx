'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a service like Formspree or send to your API
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      text: 'heartgwynethc@gmail.com',
      href: 'mailto:heartgwynethc@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      text: '09937573628',
      href: 'tel:09937573628'
    },
    {
      icon: <MapPin size={20} />,
      text: 'Mabini, Batangas, Philippines',
      href: '#'
    }
  ];

  // Prevent hydration mismatch by not rendering form until mounted
  if (!isMounted) {
    return (
      <section id="contact" className="py-20 bg-[#eee8df]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1f36] mb-4">
              Get In Touch
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-[#eee8df]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1f36] mb-4">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information - Cleaner Layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-[#1a1f36] mb-6">Let&apos;s Connect</h3>
            <p className="text-[#4a5568] mb-8">
              I&apos;m always open to discussing new opportunities, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-[#4a5568] hover:text-[#212842] transition-colors group"
                >
                  <div className="w-10 h-10 flex items-center justify-center mr-4">
                    <div className="text-[#212842]">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-lg font-medium">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form - Cleaner Design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#1a1f36] font-medium mb-3 text-sm">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#212842]/20 focus:border-[#212842] focus:ring-0 outline-none transition-colors bg-white text-[#1a1f36] placeholder-[#4a5568]/50 shadow-sm"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#1a1f36] font-medium mb-3 text-sm">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#212842]/20 focus:border-[#212842] focus:ring-0 outline-none transition-colors bg-white text-[#1a1f36] placeholder-[#4a5568]/50 shadow-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#1a1f36] font-medium mb-3 text-sm">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[#212842]/20 focus:border-[#212842] focus:ring-0 outline-none transition-colors bg-white text-[#1a1f36] placeholder-[#4a5568]/50 shadow-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#212842] text-[#eee8df] py-4 px-8 rounded-lg font-bold text-lg hover:bg-[#1a1f36] transition-colors flex items-center justify-center gap-3 mt-2 shadow-lg"
              >
                <Send size={20} />
                <span>SEND MESSAGE</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;