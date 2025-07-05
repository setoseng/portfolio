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
  <section
    id="skills"
    className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50"
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16" data-animate="skills-title">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight"
          style={{ color: "#0551FA" }}
        >
          Technical Skills
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium px-2">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        <div
          className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-1000 ${
            isVisible["skill-0"]
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
          data-animate="skill-0"
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <div
              className="p-2 sm:p-3 rounded-xl mr-3 sm:mr-4"
              style={{ backgroundColor: "#E3F2FD" }}
            >
              <Code
                style={{ color: "#0551FA" }}
                size={20}
                className="sm:w-6 sm:h-6"
              />
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "#0551FA" }}
            >
              Frontend
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {skills.frontend.map((skill, index) => (
              <div
                key={index}
                className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-center transition-colors duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-1000 delay-200 ${
            isVisible["skill-1"]
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
          data-animate="skill-1"
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <div
              className="p-2 sm:p-3 rounded-xl mr-3 sm:mr-4"
              style={{ backgroundColor: "#FFF3E0" }}
            >
              <Database
                style={{ color: "#FAAE05" }}
                size={20}
                className="sm:w-6 sm:h-6"
              />
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "#0551FA" }}
            >
              Backend
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {skills.backend.map((skill, index) => (
              <div
                key={index}
                className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-center transition-colors duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-1000 delay-400 ${
            isVisible["skill-2"]
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
          data-animate="skill-2"
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <div
              className="p-2 sm:p-3 rounded-xl mr-3 sm:mr-4"
              style={{ backgroundColor: "#E3F2FD" }}
            >
              <Cloud
                style={{ color: "#0551FA" }}
                size={20}
                className="sm:w-6 sm:h-6"
              />
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "#0551FA" }}
            >
              Tools & Cloud
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {skills.tools.map((skill, index) => (
              <div
                key={index}
                className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-center transition-colors duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Additional Info */}
      <div
        className={`mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-br from-white to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-blue-100 transition-all duration-1000 ${
          isVisible["skills-info"]
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
        data-animate="skills-info"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 tracking-tight"
            style={{ color: "#0551FA" }}
          >
            What I Bring to Every Project
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-medium px-2">
            Beyond technical skills, here&apos;s what makes me a valuable team
            member
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              title: "Clean Code",
              description:
                "Writing maintainable, well-documented code that follows industry best practices and SOLID principles",
              icon: (
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              ),
            },
            {
              title: "Performance",
              description:
                "Optimizing applications for speed, efficiency, and excellent user experience with modern techniques",
              icon: (
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              title: "Scalability",
              description:
                "Building robust, scalable architectures that grow with your business needs and handle increasing demands",
              icon: (
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              ),
            },
            {
              title: "Collaboration",
              description:
                "Working effectively with teams, clients, and stakeholders using Agile methodologies and clear communication",
              icon: (
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-blue-200 ${
                isVisible[`skills-item-${index}`]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              data-animate={`skills-item-${index}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className="flex justify-center mb-3 sm:mb-4 p-3 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 mx-auto w-fit"
                style={{ color: "#0551FA" }}
              >
                {item.icon}
              </div>
              <h4
                className="font-bold text-lg sm:text-xl mb-2 sm:mb-3"
                style={{ color: "#0551FA" }}
              >
                {item.title}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
