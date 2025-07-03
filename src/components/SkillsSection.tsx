import React from "react";
import { Code, Database, Cloud } from "lucide-react";

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
        <div
          className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-1000 ${
            isVisible["skill-0"]
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
          data-animate="skill-0"
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
              <div
                key={index}
                className="px-3 py-2 rounded-lg text-sm font-medium text-center transition-colors duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-1000 delay-200 ${
            isVisible["skill-1"]
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
          data-animate="skill-1"
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
              <div
                key={index}
                className="px-3 py-2 rounded-lg text-sm font-medium text-center transition-colors duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-1000 delay-400 ${
            isVisible["skill-2"]
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
          data-animate="skill-2"
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
              <div
                key={index}
                className="px-3 py-2 rounded-lg text-sm font-medium text-center transition-colors duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Additional Info */}
      <div
        className="mt-16 bg-white rounded-3xl p-8 shadow-lg"
        data-animate="skills-info"
      >
        <h3
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: "#0551FA" }}
        >
          What I Bring to Every Project
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Clean Code",
              description:
                "Writing maintainable, well-documented code that follows industry best practices",
            },
            {
              title: "Performance",
              description:
                "Optimizing applications for speed, efficiency, and excellent user experience",
            },
            {
              title: "Testing",
              description:
                "Comprehensive testing strategies to ensure reliability and prevent bugs",
            },
            {
              title: "Collaboration",
              description:
                "Working effectively with teams, clients, and stakeholders to deliver results",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h4 className="font-bold mb-2" style={{ color: "#0551FA" }}>
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
