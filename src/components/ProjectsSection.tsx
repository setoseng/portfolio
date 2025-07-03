import React from "react";
import { Github, ExternalLink, Award } from "lucide-react";

interface ProjectsSectionProps {
  isVisible: Record<string, boolean>;
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    featured: boolean;
    challenges: string;
    outcome: string;
  }>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  isVisible,
  projects,
}) => (
  <section id="projects" className="py-20 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16" data-animate="projects-title">
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          style={{ color: "#0551FA" }}
        >
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
          A showcase of applications I've built using modern technologies and
          best practices
        </p>
      </div>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01] ${
              isVisible[`project-${index}`]
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            data-animate={`project-${index}`}
          >
            <div
              className={`grid ${
                project.featured ? "lg:grid-cols-2" : "grid-cols-1"
              } gap-0`}
            >
              {/* Project Visual */}
              <div
                className="relative h-64 lg:h-80 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #0551FA 0%, #0441D1 100%)",
                }}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-blue-900 px-3 py-1 rounded-full text-xs font-bold flex items-center"
                      style={{ backgroundColor: "#FAAE05" }}
                    >
                      <Award size={12} className="mr-1" />
                      Featured
                    </span>
                  </div>
                )}
                <div className="text-6xl text-white/30">🚀</div>
              </div>
              {/* Project Content */}
              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#0551FA" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Challenge:
                  </h4>
                  <p className="text-gray-600 text-sm">{project.challenges}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Outcome:</h4>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#FAAE05" }}
                  >
                    {project.outcome}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: "#0551FA" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
