import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Layers,
  Zap,
  Users,
  Code,
} from "lucide-react";

interface HomeSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ scrollToSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="home"
      className="pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="min-h-screen flex items-center">
          <motion.div
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center">
              <motion.div
                className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 shadow-sm"
                style={{ borderColor: "#FAAE05", backgroundColor: "#FFF9E6" }}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <span className="text-gray-700 text-xs sm:text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-4 sm:mb-6 leading-tight text-gray-900 tracking-tight"
                variants={itemVariants}
              >
                <span className="block">Setya Seng</span>
                <motion.span
                  className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4 font-bold"
                  style={{ color: "#FAAE05" }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  Senior Software Engineer
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-gray-600 font-medium px-2"
                variants={itemVariants}
              >
                I deliver robust, performant, and accessible full-stack
                applications using React, Node.js, and modern technologies.
                Proven ability to build scalable systems from frontend to
                backend with a focus on user experience and business impact.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => scrollToSection("projects")}
                  className="group text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center shadow-lg cursor-pointer text-sm sm:text-base"
                  style={{ backgroundColor: "#0551FA" }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <ChevronRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300 sm:w-5 sm:h-5"
                  />
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="group border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold cursor-pointer text-sm sm:text-base"
                  style={{ borderColor: "#0551FA", color: "#0551FA" }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#0551FA",
                    color: "white",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto"
                variants={statsVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  {
                    number: "Scalable",
                    label: "Solutions",
                    icon: Layers,
                    color: "#10B981",
                  },
                  {
                    number: "Performance",
                    label: "Optimized",
                    icon: Zap,
                    color: "#F59E0B",
                  },
                  {
                    number: "Customer",
                    label: "Focus",
                    icon: Users,
                    color: "#3B82F6",
                  },
                  {
                    number: "Full-Stack",
                    label: "Expert",
                    icon: Code,
                    color: "#8B5CF6",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    variants={statVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <div className="flex justify-center mb-2 sm:mb-3">
                        <stat.icon
                          size={24}
                          className="sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300"
                          style={{ color: stat.color }}
                        />
                      </div>
                      <motion.div
                        className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 leading-tight"
                        style={{ color: "#0551FA" }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-gray-600 text-xs sm:text-sm font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>

                    {/* Subtle border accent */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{ backgroundColor: stat.color }}
                    ></div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="mt-12 sm:mt-16"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown
                  size={20}
                  className="mx-auto text-gray-400 sm:w-6 sm:h-6"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
