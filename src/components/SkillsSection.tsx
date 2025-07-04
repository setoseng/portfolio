import React from "react";
import { Code, Database, Cloud } from "lucide-react";
import { motion } from "framer-motion";

interface SkillsSectionProps {
  isVisible: Record<string, boolean>;
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible, skills }) => (
  <section id="skills" className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16" data-animate="skills-title">
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          style={{ color: "#0551FA" }}
        >
          Technical Skills
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg"
          data-animate="skill-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{
            y: -5,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="flex items-center mb-6">
            <div
              className="p-3 rounded-xl mr-4"
              style={{ backgroundColor: "#E3F2FD" }}
            >
              <Code style={{ color: "#0551FA" }} size={24} />
            </div>
            <h3 className="text-2xl font-bold" style={{ color: "#0551FA" }}>
              Frontend
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {skills.frontend.map((skill, index) => (
              <motion.div
                key={index}
                className="px-3 py-2 rounded-lg text-sm font-medium text-center bg-gray-100 text-gray-700"
                whileHover={{ backgroundColor: "#e5e7eb", scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg"
          data-animate="skill-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            y: -5,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="flex items-center mb-6">
            <div
              className="p-3 rounded-xl mr-4"
              style={{ backgroundColor: "#FFF3E0" }}
            >
              <Database style={{ color: "#FAAE05" }} size={24} />
            </div>
            <h3 className="text-2xl font-bold" style={{ color: "#0551FA" }}>
              Backend
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {skills.backend.map((skill, index) => (
              <motion.div
                key={index}
                className="px-3 py-2 rounded-lg text-sm font-medium text-center bg-gray-100 text-gray-700"
                whileHover={{ backgroundColor: "#e5e7eb", scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg"
          data-animate="skill-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{
            y: -5,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="flex items-center mb-6">
            <div
              className="p-3 rounded-xl mr-4"
              style={{ backgroundColor: "#E3F2FD" }}
            >
              <Cloud style={{ color: "#0551FA" }} size={24} />
            </div>
            <h3 className="text-2xl font-bold" style={{ color: "#0551FA" }}>
              Tools & Cloud
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {skills.tools.map((skill, index) => (
              <motion.div
                key={index}
                className="px-3 py-2 rounded-lg text-sm font-medium text-center bg-gray-100 text-gray-700"
                whileHover={{ backgroundColor: "#e5e7eb", scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Additional Info */}
      <motion.div
        className="mt-20 bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-xl border border-blue-100"
        data-animate="skills-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="text-center mb-12">
          <h3
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            style={{ color: "#0551FA" }}
          >
            What I Bring to Every Project
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Beyond technical skills, here's what makes me a valuable team member
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Clean Code",
              description:
                "Writing maintainable, well-documented code that follows industry best practices",
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              ),
            },
            {
              title: "Performance",
              description:
                "Optimizing applications for speed, efficiency, and excellent user experience",
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.5 2.54l2.6 1.53c.56-1.24.9-2.62.9-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
                </svg>
              ),
            },
            {
              title: "Testing",
              description:
                "Comprehensive testing strategies to ensure reliability and prevent bugs",
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              title: "Collaboration",
              description:
                "Working effectively with teams, clients, and stakeholders to deliver results",
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-white shadow-lg"
              data-animate={`skills-item-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5,
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                style={{ color: "#0551FA" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {item.icon}
              </motion.div>
              <h4
                className="font-bold text-xl mb-3"
                style={{ color: "#0551FA" }}
              >
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
