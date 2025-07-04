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
    <section id="home" className="pt-20 pb-16 px-6 bg-white">
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
                className="inline-block mb-6 px-6 py-3 rounded-full border-2 shadow-sm"
                style={{ borderColor: "#FAAE05", backgroundColor: "#FFF9E6" }}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-gray-700 text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight text-gray-900 tracking-tight"
                variants={itemVariants}
              >
                <span className="block">Setya Seng</span>
                <motion.span
                  className="block text-4xl md:text-5xl mt-4 font-bold"
                  style={{ color: "#FAAE05" }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  Senior Software Engineer
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-600 font-medium"
                variants={itemVariants}
              >
                I deliver robust, performant, and accessible full-stack
                applications using React, Node.js, and modern technologies.
                Proven ability to build scalable systems from frontend to
                backend with a focus on user experience and business impact.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => scrollToSection("projects")}
                  className="group text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center shadow-lg cursor-pointer"
                  style={{ backgroundColor: "#0551FA" }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  View My Work
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="group border-2 px-8 py-4 rounded-full font-semibold cursor-pointer"
                  style={{ borderColor: "#0551FA", color: "#0551FA" }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#0551FA",
                    color: "white",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
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
                    className="group relative overflow-hidden bg-white rounded-2xl p-6 shadow-sm border border-gray-100 cursor-pointer"
                    variants={statVariants}
                    whileHover={{
                      scale: 1.02,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <motion.div
                        className="flex justify-center mb-3"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <stat.icon size={32} style={{ color: stat.color }} />
                      </motion.div>
                      <motion.div
                        className="text-2xl font-bold mb-2 leading-tight"
                        style={{ color: "#0551FA" }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>

                    {/* Subtle border accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ backgroundColor: stat.color }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="mt-16"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown size={24} className="mx-auto text-gray-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
