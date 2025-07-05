import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  MapPin,
  Briefcase,
  Code,
  Zap,
  Shield,
  Users,
} from "lucide-react";

interface AboutSectionProps {
  isVisible: Record<string, boolean>;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
  }>;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  isVisible,
  experience,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible["about-title"] ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight"
            style={{ color: "#0551FA" }}
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed px-2"
            variants={itemVariants}
          >
            Senior Software Engineer with over 5 years of experience delivering
            robust, performant, and accessible full-stack applications using
            React, Node.js, and modern technologies
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {/* Personal Story & Philosophy */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg"
            variants={itemVariants}
            initial="hidden"
            animate={isVisible["about-content"] ? "visible" : "hidden"}
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <div
                className="p-2 sm:p-3 rounded-xl mr-3 sm:mr-4"
                style={{ backgroundColor: "#E3F2FD" }}
              >
                <Users
                  style={{ color: "#0551FA" }}
                  size={20}
                  className="sm:w-6 sm:h-6"
                />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold tracking-tight"
                style={{ color: "#0551FA" }}
              >
                My Journey
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                I&apos;m a Senior Software Engineer with a proven track record
                of delivering exceptional user experiences and scalable
                solutions. My journey in software development began with a
                passion for creating intuitive interfaces that solve real-world
                problems.
              </p>
              <p className="text-base sm:text-lg">
                Over the past 5+ years, I&apos;ve specialized in React and
                modern front-end technologies, working across diverse industries
                from healthcare to e-commerce. I&apos;ve proven ability to
                collaborate across product, design, and engineering teams to
                build component-based UI systems with a focus on scalability,
                reusability, and user experience.
              </p>
              <p className="text-base sm:text-lg">
                My experience spans from building real-time healthcare
                applications to developing high-performance e-commerce
                platforms. I thrive in fast-paced agile environments and have
                extensive experience with AWS infrastructure, Figma-based design
                systems, and leading UI architecture.
              </p>
            </div>

            {/* Technical Philosophy */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
              <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                Technical Philosophy
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: Code,
                    text: "Component-based architecture for scalability and reusability",
                  },
                  {
                    icon: Zap,
                    text: "Performance optimization and accessibility as core principles",
                  },
                  {
                    icon: Shield,
                    text: "Robust, maintainable code with comprehensive testing",
                  },
                  {
                    icon: Award,
                    text: "Continuous learning and adaptation",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 sm:p-4 rounded-lg bg-gray-50"
                  >
                    <item.icon
                      className="mr-2 sm:mr-3 flex-shrink-0 mt-1 sm:w-5 sm:h-5"
                      size={18}
                      style={{ color: "#FAAE05" }}
                    />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg"
          variants={itemVariants}
          initial="hidden"
          animate={isVisible["experience"] ? "visible" : "hidden"}
        >
          <div className="flex items-center mb-8 sm:mb-10">
            <div
              className="p-2 sm:p-3 rounded-xl mr-3 sm:mr-4"
              style={{ backgroundColor: "#FFF3E0" }}
            >
              <Briefcase
                style={{ color: "#FAAE05" }}
                size={20}
                className="sm:w-6 sm:h-6"
              />
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              style={{ color: "#0551FA" }}
            >
              Professional Experience
            </h3>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
                initial="hidden"
                animate={
                  isVisible[`experience-${index}`] ? "visible" : "hidden"
                }
              >
                {/* Mobile: Stack layout, Desktop: Timeline layout */}
                <div className="sm:hidden">
                  {/* Mobile Layout */}
                  <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
                    <div className="flex items-center mb-3">
                      <div
                        className="w-8 h-8 rounded-full mr-3 flex items-center justify-center"
                        style={{ backgroundColor: "#FAAE05" }}
                      >
                        <Briefcase size={14} className="text-white" />
                      </div>
                      <span
                        className="px-2 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: "#0551FA" }}
                      >
                        {exp.company}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {exp.position}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0"
                            style={{ backgroundColor: "#FAAE05" }}
                          ></div>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Timeline Layout */}
                <div className="hidden sm:block relative">
                  {/* Timeline connector */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                  <div className="relative pl-16">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-2 w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                      style={{ backgroundColor: "#FAAE05" }}
                    >
                      <Briefcase size={16} className="text-white" />
                    </div>

                    {/* Content */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h4 className="text-xl font-bold text-gray-900">
                          {exp.position}
                        </h4>
                        <span
                          className="px-3 py-1 rounded-full text-sm font-medium text-white"
                          style={{ backgroundColor: "#0551FA" }}
                        >
                          {exp.company}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start">
                            <div
                              className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                              style={{ backgroundColor: "#FAAE05" }}
                            ></div>
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
