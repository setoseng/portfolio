import React from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Projects", section: "projects" },
  { name: "Skills", section: "skills" },
  { name: "Contact", section: "contact" },
];

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}) => (
  <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl z-50 border-b border-gray-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold cursor-pointer"
          style={{ color: "#0551FA" }}
          onClick={() => scrollToSection("home")}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          Setya.dev
        </motion.div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className={`relative text-sm font-medium px-4 py-2 rounded-full overflow-hidden group ${
                activeSection === item.section
                  ? "text-white shadow-lg"
                  : "text-gray-600 hover:text-white"
              }`}
              style={
                activeSection === item.section
                  ? { backgroundColor: "#0551FA" }
                  : {}
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Hover background fill */}
              <motion.div
                className={`absolute inset-0 rounded-full ${
                  activeSection === item.section ? "bg-blue-600" : "bg-blue-600"
                }`}
                style={
                  activeSection === item.section
                    ? { backgroundColor: "#0551FA" }
                    : { backgroundColor: "#0551FA" }
                }
                initial={{ scale: activeSection === item.section ? 1 : 0 }}
                animate={{ scale: activeSection === item.section ? 1 : 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Text content */}
              <span className="relative z-10">{item.name}</span>
            </motion.button>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg bg-gray-100 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden mt-4 pb-4 border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-2 pt-4">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`relative text-left py-3 px-4 rounded-lg overflow-hidden group ${
                  activeSection === item.section
                    ? "text-white"
                    : "text-gray-600 hover:text-white"
                }`}
                style={
                  activeSection === item.section
                    ? { backgroundColor: "#0551FA" }
                    : {}
                }
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover background fill for mobile */}
                <motion.div
                  className={`absolute inset-0 rounded-lg ${
                    activeSection === item.section
                      ? "bg-blue-600"
                      : "bg-blue-600"
                  }`}
                  style={
                    activeSection === item.section
                      ? { backgroundColor: "#0551FA" }
                      : { backgroundColor: "#0551FA" }
                  }
                  initial={{ scale: activeSection === item.section ? 1 : 0 }}
                  animate={{ scale: activeSection === item.section ? 1 : 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Text content */}
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  </nav>
);

export default Navigation;
