'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users, Calendar, MapPin, Award, Star, ChevronRight } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      level: "COLLEGE",
      degree: "Bachelor of Science in Information Technology",
      school: "University of Batangas- The National Engineering University",
      period: "2023 - Present",
      location: "Mabini, Batangas, Philippines",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's Lister"
      ],
      organizations: [
        {
          name: "Supreme Student Council",
          position: "Committee Chairperson on Student Services",
          period: "2024 - 2025"
        },
        {
          name: "CICS Student Council",
          position: "Third Year Representative",
          period: "2025 - 2026"
        }
      ]
    },
    {
      level: "SENIOR HIGH SCHOOL",
      strand: "Technical-Vocational-Livelihood in Information and Communications Technology",
      school: "Anselmo A. Sandoval Memorial National High School",
      period: "2021 - 2023",
      location: "Mabini, Batangas, Philippines",
      gpa: "91.2%",
      achievements: [
        "With Honors",
        "4th Place - Best in Oral Presentation (Research Paper)"
      ],
      organizations: [
        {
          name: "Programming Club",
          position: "Team Member",
          period: "2021 - 2023"
        }
      ]
    },
    {
      level: "HIGH SCHOOL",
      school: "Mabini National High School",
      period: "2017 - 2021",
      location: "Solo, Mabini, Philippines",
      achievements: [
        "Achiever"
      ],
      organizations: [
        {
          name: "English Club",
          position: "Secretary",
          period: "2020 - 2021",
        }
      ]
    },
    {
      level: "ELEMENTARY",
      school: "San Teodoro Elementary School",
      period: "2011 - 2017",
      location: "San Teodoro, Mabini, Philippines",
      achievements: [
        "Achiever",
        "Regional Schools Press Conference - Photojournalism Participant"
      ],
      organizations: [
        {
          name: "Supreme Student Government",
          position: "Vice President",
          period: "2016 - 2017"
        },
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-[#eee8df]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-[#212842] font-semibold text-sm uppercase tracking-wider mb-2 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1f36] mb-4">
            Education & <span className="text-[#212842]">Leadership</span>
          </h2>
        </motion.div>

        {/* Vertical Rectangle Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#212842] via-[#1a1f36] to-transparent"></div>

          {educationData.map((education, index) => (
            <motion.div
              key={education.level}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 top-10 transform -translate-x-1/2 w-4 h-4 bg-[#212842] rounded-full border-4 border-[#eee8df] z-10"></div>

              {/* Vertical Rectangle Card */}
              <div className="ml-16">
                <div className="bg-white rounded-xl border border-[#212842]/20 p-6 hover:border-[#212842]/40 transition-all duration-300 shadow-lg">
                  
                  {/* Education Level Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#212842] rounded-full"></div>
                      <h3 className="text-lg font-bold text-[#212842] uppercase tracking-wider">
                        {education.level}
                      </h3>
                    </div>
                    <div className="text-sm text-[#4a5568] font-medium">
                      {education.period}
                    </div>
                  </div>

                  {/* Degree/School Info */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-[#1a1f36] mb-2">
                      {education.degree || education.strand || education.school}
                    </h4>
                    <p className="text-[#4a5568]">
                      {education.school}
                    </p>
                  </div>

                  {/* Location & GPA Row */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-[#4a5568]">
                      <MapPin size={16} className="text-[#212842]" />
                      <span>{education.location}</span>
                    </div>
                    {education.gpa && (
                      <div className="flex items-center gap-2 text-[#4a5568]">
                        <Award size={16} className="text-[#212842]" />
                        <span>GPA: {education.gpa}</span>
                      </div>
                    )}
                  </div>

                  {/* Achievements Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Star size={16} className="text-[#212842]" />
                      <h5 className="font-semibold text-[#1a1f36]">Achievements</h5>
                    </div>
                    <div className="space-y-2">
                      {education.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRight size={14} className="text-[#212842] mt-1 flex-shrink-0" />
                          <span className="text-[#4a5568] text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Organizations Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users size={16} className="text-[#212842]" />
                      <h5 className="font-semibold text-[#1a1f36]">Organizations</h5>
                    </div>
                    <div className="space-y-3">
                      {education.organizations.map((org, idx) => (
                        <div 
                          key={idx} 
                          className="bg-[#eee8df] rounded-lg p-3 border border-[#212842]/10"
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h6 className="font-medium text-[#1a1f36] text-sm">{org.name}</h6>
                            <span className="text-xs text-[#212842] bg-[#212842]/10 px-2 py-0.5 rounded-full">
                              {org.period}
                            </span>
                          </div>
                          <p className="text-[#4a5568] text-xs">{org.position}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1a1f36] mb-2">
              Skills Developed
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Fast Learner",
              "Front-end Development",
              "Problem Solving",
              "Task Prioritazation"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-4 border border-[#212842]/10 hover:border-[#212842]/30 transition-all duration-300 shadow-sm"
              >
                <p className="text-[#1a1f36] text-sm font-medium text-center">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#212842]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#1a1f36]/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Education;