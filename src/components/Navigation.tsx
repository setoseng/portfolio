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
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold" style={{ color: "#0551FA" }}>
          Alex.dev
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full ${
                activeSection === item.section
                  ? "text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              style={
                activeSection === item.section
                  ? { backgroundColor: "#0551FA" }
                  : {}
              }
            >
              {item.name}
            </button>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-2 pt-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.section
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                style={
                  activeSection === item.section
                    ? { backgroundColor: "#0551FA" }
                    : {}
                }
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  </nav>
);

export default Navigation;
