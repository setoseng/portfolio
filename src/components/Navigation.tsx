import React from "react";
import { Menu, X } from "lucide-react";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        <div
          className="text-xl sm:text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity duration-200"
          style={{ color: "#0551FA" }}
          onClick={() => scrollToSection("home")}
        >
          Setya.dev
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className={`relative text-sm font-medium transition-all duration-300 px-3 sm:px-4 py-2 rounded-full overflow-hidden cursor-pointer group ${
                activeSection === item.section
                  ? "text-white shadow-lg"
                  : "text-gray-600 hover:text-white"
              }`}
              style={
                activeSection === item.section
                  ? { backgroundColor: "#0551FA" }
                  : {}
              }
            >
              {/* Hover background fill */}
              <div
                className={`absolute inset-0 transition-all duration-300 rounded-full ${
                  activeSection === item.section
                    ? "bg-blue-600"
                    : "bg-blue-600 scale-0 group-hover:scale-100"
                }`}
                style={
                  activeSection === item.section
                    ? { backgroundColor: "#0551FA" }
                    : { backgroundColor: "#0551FA" }
                }
              />
              {/* Text content */}
              <span className="relative z-10">{item.name}</span>
            </button>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-gray-100 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={20} className="sm:w-6 sm:h-6" />
          ) : (
            <Menu size={20} className="sm:w-6 sm:h-6" />
          )}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-1 sm:space-y-2 pt-3 sm:pt-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`relative text-left py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 overflow-hidden group text-sm sm:text-base ${
                  activeSection === item.section
                    ? "text-white"
                    : "text-gray-600 hover:text-white"
                }`}
                style={
                  activeSection === item.section
                    ? { backgroundColor: "#0551FA" }
                    : {}
                }
              >
                {/* Hover background fill for mobile */}
                <div
                  className={`absolute inset-0 transition-all duration-300 rounded-lg ${
                    activeSection === item.section
                      ? "bg-blue-600"
                      : "bg-blue-600 scale-0 group-hover:scale-100"
                  }`}
                  style={
                    activeSection === item.section
                      ? { backgroundColor: "#0551FA" }
                      : { backgroundColor: "#0551FA" }
                  }
                />
                {/* Text content */}
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  </nav>
);

export default Navigation;
