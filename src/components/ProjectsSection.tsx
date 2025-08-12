import React from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  isVisible: Record<string, boolean>;
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
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
  <section
    id="projects"
    className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16" data-animate="projects-title">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight"
          style={{ color: "#0551FA" }}
        >
          Featured Projects
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium px-2">
          A showcase of applications I&apos;ve built using modern technologies
          and best practices
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            isVisible={isVisible[`project-${index}`]}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
