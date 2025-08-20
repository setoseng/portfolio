import React from "react";
import { ExternalLink, Award } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    demo: string;
    featured: boolean;
    challenges: string;
    outcome: string;
  };
  index: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isVisible,
}) => {
  // Function to get the appropriate screenshot for each project
  const getProjectScreenshot = (title: string): string | null => {
    const screenshotMap: Record<string, string> = {
      "First Dental Website": "/project-screenshots/first-dental.png",
      "SoSilk Premium Haircare E-commerce": "/project-screenshots/sosilk.png",
      "Scruples Hair Care E-commerce Platform":
        "/project-screenshots/scruples-haircare.png",
      "E-commerce Education Platform":
        "/project-screenshots/education-platform.png",
      "Donut World Online Ordering Platform":
        "/project-screenshots/donut-world.png",
    };

    return screenshotMap[title] || null;
  };

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] flex flex-col h-full ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      data-animate={`project-${index}`}
    >
      {/* Project Visual */}
      <div
        className="relative h-48 sm:h-56 flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0551FA 0%, #0441D1 100%)",
        }}
      >
        {project.featured && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
            <span
              className="text-blue-900 px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center"
              style={{ backgroundColor: "#FAAE05" }}
            >
              <Award size={10} className="mr-1 sm:w-3 sm:h-3" />
              Featured
            </span>
          </div>
        )}

        {/* Project Screenshot */}
        {getProjectScreenshot(project.title) && (
          <img
            src={getProjectScreenshot(project.title)!}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        )}
        {!getProjectScreenshot(project.title) && (
          <div className="text-4xl sm:text-5xl text-white/30">🚀</div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-1 gap-2">
        <h3
          className="text-xl sm:text-2xl font-bold"
          style={{ color: "#0551FA" }}
        >
          {project.title}
        </h3>
        <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base break-words">
          {project.description}
        </p>

        <div className="mb-3 sm:mb-4">
          <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
            Key Challenge:
          </h4>
          <p className="text-gray-600 text-xs sm:text-sm break-words">
            {project.challenges}
          </p>
        </div>

        <div className="mb-4 sm:mb-6">
          <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
            Outcome:
          </h4>
          <p className="text-xs sm:text-sm font-medium text-gray-600 break-words">
            {project.outcome}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white break-words bg-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center mt-auto">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-accent sm:w-auto text-white hover:scale-105 transition duration-300 font-medium text-sm sm:text-base px-4 py-2 rounded-lg"
          >
            <ExternalLink size={16} className="mr-2 sm:w-4 sm:h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
