'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Server,
  Cloud,
  Palette,
  Terminal
} from 'lucide-react';

// React Icons imports
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiDocker,
  SiVercel,
} from 'react-icons/si';

// Additional icons from other sets
import { FaJava } from 'react-icons/fa';
import { SiC } from 'react-icons/si';

// Define Tech type
interface Tech {
  name: string;
  icon: React.ReactElement;
  level: number;
  category: string;
  color: string;
}

const About = () => {
  const techStacks: Tech[] = [
    // Frontend Technologies
    { 
      name: "HTML", 
      icon: <SiHtml5 className="w-6 h-6" />, 
      level: 95, 
      category: "frontend", 
      color: "#eee8df" 
    },
    { 
      name: "CSS", 
      icon: <SiCss3 className="w-6 h-6" />, 
      level: 90, 
      category: "frontend", 
      color: "#eee8df" 
    },
    { 
      name: "JavaScript", 
      icon: <SiJavascript className="w-6 h-6" />, 
      level: 80, 
      category: "frontend", 
      color: "#eee8df" 
    },
    { 
      name: "Next.js", 
      icon: <SiNextdotjs className="w-6 h-6" />, 
      level: 20, 
      category: "frontend", 
      color: "#eee8df" 
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss className="w-6 h-6" />, 
      level: 20, 
      category: "frontend", 
      color: "#eee8df" 
    },

    // Backend Technologies
    { 
      name: "Node.js", 
      icon: <SiNodedotjs className="w-6 h-6" />, 
      level: 10, 
      category: "backend", 
      color: "#d8d1c7" 
    },
    { 
      name: "Python", 
      icon: <SiPython className="w-6 h-6" />, 
      level: 40, 
      category: "backend", 
      color: "#d8d1c7" 
    },
    { 
      name: "Java", 
      icon: <FaJava className="w-6 h-6" />, 
      level: 10, 
      category: "backend", 
      color: "#d8d1c7" 
    },

    // Tools & DevOps
    { 
      name: "Git", 
      icon: <SiGit className="w-6 h-6" />, 
      level: 68, 
      category: "tools", 
      color: "#eee8df" 
    },
    { 
      name: "Vercel", 
      icon: <SiVercel className="w-6 h-6" />, 
      level: 85, 
      category: "tools", 
      color: "#eee8df" 
    },
  ];

  const expertiseAreas = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Architecture",
      description: "Building scalable, responsive, and accessible user interfaces with modern frameworks and best practices.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Designing robust server-side solutions, RESTful APIs, and database architectures for high-performance applications.",
      technologies: ["C++", "Python"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps & Deployment",
      description: "Implementing CI/CD pipelines, containerization, and cloud infrastructure for seamless deployment and scaling.",
      technologies: ["Vercel", "Git"]
    },
  ];

  const stats = [
    { number: "4", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "99.99%", label: "Client Satisfaction" }
  ];

  // Group tech stacks by category for better organization
  const frontendTechs = techStacks.filter(tech => tech.category === 'frontend');
  const backendTechs = techStacks.filter(tech => tech.category === 'backend');
  const toolsTechs = techStacks.filter(tech => tech.category === 'tools');

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#212842]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#eee8df] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d8d1c7] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-[#eee8df] font-semibold text-lg mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#d8d1c7] mb-6">
            About <span className="text-[#eee8df]">Me</span>
          </h2>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              className="text-center p-8 bg-[#1a1f36] backdrop-blur-sm rounded-3xl shadow-xl border border-[#eee8df]/20 hover:border-[#eee8df]/40 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#eee8df] mb-3">
                {stat.number}
              </div>
              <div className="text-[#d8d1c7] font-semibold text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-[#d8d1c7] mb-8">Areas of Expertise</h3>
            <div className="space-y-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1a1f36] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#eee8df]/20 hover:border-[#eee8df]/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#eee8df] to-[#d8d1c7] rounded-xl flex items-center justify-center text-[#212842]">
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#d8d1c7] mb-2">{area.title}</h4>
                      <p className="text-[#c1c9d6] mb-3 leading-relaxed">{area.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-[#eee8df]/20 text-[#eee8df] rounded-full text-sm font-medium border border-[#eee8df]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-[#d8d1c7] mb-8">Technical Stack</h3>
            
            {/* Frontend Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-[#c1c9d6] mb-4 flex items-center">
                <Palette className="w-5 h-5 mr-2 text-[#eee8df]" />
                Frontend Technologies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {frontendTechs.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-[#c1c9d6] mb-4 flex items-center">
                <Server className="w-5 h-5 mr-2 text-[#eee8df]" />
                Backend Technologies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {backendTechs.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>

            {/* Tools & DevOps */}
            <div>
              <h4 className="text-lg font-semibold text-[#c1c9d6] mb-4 flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-[#eee8df]" />
                Tools & DevOps
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {toolsTechs.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Tech Card Component
interface TechCardProps {
  tech: Tech;
  index: number;
}

const TechCard = ({ tech, index }: TechCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ 
      scale: 1.05,
      y: -5
    }}
    className="bg-[#1a1f36] backdrop-blur-sm p-3 rounded-xl shadow-lg border border-[#eee8df]/20 group cursor-pointer hover:border-[#eee8df]/40 transition-all duration-300"
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <div 
          className="flex items-center justify-center w-6 h-6 rounded"
          style={{ color: tech.color }}
        >
          {tech.icon}
        </div>
        <span className="font-semibold text-[#d8d1c7] text-sm">{tech.name}</span>
      </div>
      <span className="text-xs font-bold text-[#eee8df]">{tech.level}%</span>
    </div>
    <div className="w-full bg-[#2a3152] rounded-full h-1.5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${tech.level}%` }}
        transition={{ delay: index * 0.05 + 0.5, duration: 1 }}
        className="h-1.5 rounded-full"
        style={{ backgroundColor: tech.color }}
      />
    </div>
  </motion.div>
);

export default About;