// Color constants
export const COLORS = {
  primary: "#0551FA",
  accent: "#FAAE05",
  white: "#FFFFFF",
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
} as const;

// Navigation items
export const NAVIGATION_ITEMS = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Projects", section: "projects" },
  { name: "Skills", section: "skills" },
  { name: "Contact", section: "contact" },
] as const;

// Social media links
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "mailto:alex@example.com",
} as const;

// Contact information
export const CONTACT_INFO = {
  email: "alex@example.com",
  phone: "(123) 456-7890",
  location: "San Francisco, CA",
} as const;

// Animation delays
export const ANIMATION_DELAYS = {
  short: 200,
  medium: 300,
  long: 500,
} as const;
