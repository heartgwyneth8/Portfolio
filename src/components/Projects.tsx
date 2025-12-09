'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Palette, Layout } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mabini Tourism",
      description: "A website dedicated to promoting tourism in Mabini, Batangas, showcasing its attractions, accommodations, and activities.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/heartgwyneth8/Mabini-Tourism.git",
      live: "https://mabini-tourism-two.vercel.app/",
      category: "Frontend",
      icon: <Layout size={24} />
    },
    {
      id: 2,
      title: "Saladaze",
      description: "An online food ordering and delivery system with real-time order tracking, menu management, and payment integration.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/heartgwyneth8/Saladaze.git",
      live: "https://saladaze.vercel.app/",
      category: "Frontend",
      icon: <Code size={24} />
    },
    {
      id: 3,
      title: "Lumière",
      description: "A feature-rich e-commerce platform with product catalog, shopping cart, and payment gateway integration.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/heartgwyneth8/Lumiere-Skincare.git",
      live: "https://lumiere-skincare-iota.vercel.app/",
      category: "Frontend",
      icon: <Palette size={24} />
    },
    {
      id: 4,
      title: "Sudoku",
      description: "An interactive Sudoku game with puzzle generation, solving algorithms, difficulty levels, and progress tracking.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/heartgwyneth8/Sudoku.git",
      live: "https://sudoku-five-eosin.vercel.app/",
      category: "Frontend",
      icon: <Layout size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#212842]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#eee8df] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#d8d1c7] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-[#eee8df] font-semibold text-lg mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#d8d1c7] mb-6">
            Featured <span className="text-[#eee8df]">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-[#1a1f36] rounded-2xl overflow-hidden border border-[#eee8df]/20 hover:border-[#eee8df]/40 transition-all duration-300 shadow-xl"
            >
              {/* Project Header with Icon */}
              <div className="p-6 border-b border-[#eee8df]/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#eee8df] to-[#d8d1c7] rounded-xl flex items-center justify-center text-[#212842]">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#d8d1c7] group-hover:text-[#eee8df] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm bg-[#eee8df]/20 text-[#eee8df] px-3 py-1 rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-2">
                    {project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-[#2a3152] rounded-lg border border-[#eee8df]/20 text-[#eee8df] hover:bg-[#eee8df] hover:text-[#212842] transition-colors"
                        title="View Code"
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-[#2a3152] rounded-lg border border-[#eee8df]/20 text-[#eee8df] hover:bg-[#eee8df] hover:text-[#212842] transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="text-[#c1c9d6] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technology Stack */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#c1c9d6] mb-3 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-[#eee8df]/10 text-[#eee8df] rounded-lg text-sm font-medium border border-[#eee8df]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#1a1f36] rounded-xl border border-[#eee8df]/20 p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-xl font-bold text-[#d8d1c7] mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-[#c1c9d6]">
              I'm continuously working on new projects and improving my skills. 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;