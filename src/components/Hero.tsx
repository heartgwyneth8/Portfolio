'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[145vh] flex items-center justify-center relative overflow-hidden bg-[#eee8df]">
      {/* Minimal background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#212842]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#212842]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex-shrink-0"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-[#212842]/30">
                <img 
                  src="/images/realpfp.JPG" 
                  alt="Heart Gwyneth"
                  className="w-full h-full object-cover"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#eee8df]/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#212842] to-[#1a1f36] rounded-lg -rotate-12 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#1a1f36] to-[#212842] rounded-lg rotate-12 opacity-20"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 flex-1 text-center lg:text-left">

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#212842] leading-tight mb-4"
            >
              Heart
              <br />
              <span className="text-[#212842] px-4 rounded-lg">Gwyneth</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl text-[#4a5568] font-light">
                Front-end Developer & Designer
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-8 max-w-2xl"
            >
              <p className="text-lg text-[#4a5568] leading-relaxed">
                Crafting digital experiences through clean code and thoughtful design. 
                Passionate about creating interfaces that are both beautiful and functional.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#212842] text-[#eee8df] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1a1f36] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#212842]/20"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="/cv/heartgc_cv.pdf"
                download="heartgc.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#212842] text-[#212842] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#212842]/10 transition-colors flex items-center justify-center gap-2"
              >
                Download CV
                <Download size={20} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                { icon: <Github size={20} />, href: 'https://github.com/heartgwyneth8', label: 'GitHub' },
                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/heartgwynethc', label: 'LinkedIn' },
                { icon: <Mail size={20} />, href: 'mailto:heartgwynethc@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-[#4a5568] hover:text-[#212842] transition-colors group"
                >
                  <div className="p-2 bg-white rounded-lg border border-[#212842]/20 group-hover:border-[#212842]/40 transition-colors shadow-sm">
                    {social.icon}
                  </div>
                  <span className="text-sm font-medium">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;