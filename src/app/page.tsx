"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Update visibility for animations
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.8;

      // Check for data-animate elements (legacy support)
      const animateElements = document.querySelectorAll("[data-animate]");
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementId = element.getAttribute("data-animate");
        if (elementId && elementTop < triggerPoint) {
          setIsVisible((prev) => ({ ...prev, [elementId]: true }));
        }
      });

      // Check for section-based animations
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          if (elementTop < triggerPoint) {
            setIsVisible((prev) => ({ ...prev, [section]: true }));

            // Add specific keys for About section components
            if (section === "about") {
              setIsVisible((prev) => ({
                ...prev,
                "about-title": true,
                "about-content": true,
                "about-visual": true,
                experience: true,
                "experience-0": true,
                "experience-1": true,
                "experience-2": true,
              }));
            }

            // Add specific keys for Skills section components
            if (section === "skills") {
              setIsVisible((prev) => ({
                ...prev,
                "skills-title": true,
                "skill-0": true,
                "skill-1": true,
                "skill-2": true,
                "skills-info": true,
                "skills-item-0": true,
                "skills-item-1": true,
                "skills-item-2": true,
                "skills-item-3": true,
              }));
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Setya's real projects from resume
  const projects = [
    {
      title: "Scruples Hair Care E-commerce Platform",
      description:
        "Designed and implemented scalable web applications using React and Remix, directly improving user engagement and reducing page load times across e-commerce platforms. Integrated marketing and analytics tools (Klaviyo, Google, Meta) to deliver actionable insights.",
      tech: [
        "React",
        "Remix",
        "AWS",
        "Klaviyo",
        "Google Analytics",
        "Meta Ads",
      ],
      github: "#",
      demo: "https://scrupleshaircare.com",
      featured: true,
      challenges:
        "Optimizing page load times and integrating multiple third-party analytics platforms",
      outcome: "Boosted engagement and conversion rates by 18%",
    },
    {
      title: "E-commerce Education Platform",
      description:
        "Built an e-commerce education platform using Next.js with secure Stripe payment integration and a highly optimized user experience, increasing ticket sales for educational content.",
      tech: ["Next.js", "Stripe", "React", "TypeScript", "AWS"],
      github: "#",
      demo: "https://education.scrupleshaircare.com",
      featured: true,
      challenges:
        "Implementing secure payment processing and optimizing user experience for educational content",
      outcome: "Significantly increased ticket sales and user engagement",
    },
    {
      title: "Donut World Online Ordering Platform",
      description:
        "Developed and deployed an online ordering platform using React, Node.js, and AWS EC2, driving a significant increase in transactions and revenue. Created a lightweight in-house task management app for internal use.",
      tech: ["React", "Node.js", "AWS EC2", "JavaScript", "Express"],
      github: "#",
      demo: "https://donutworld.net",
      featured: true,
      challenges:
        "Building a user-friendly ordering system and internal task management tools",
      outcome: "Significant increase in transactions and revenue",
    },
    {
      title: "RiverKids Pediatrics Real-time Applications",
      description:
        "Built and maintained real-time applications for therapists using React Native, Redux, and Socket.IO, improving patient management efficiency. Developed new features and fixed bugs for in-house web applications.",
      tech: ["React Native", "Redux", "Socket.IO", "JavaScript", "Node.js"],
      github: "#",
      demo: "#",
      featured: false,
      challenges:
        "Implementing real-time communication and patient management features",
      outcome:
        "Improved patient management efficiency and streamlined operations",
    },
  ];

  // Setya's real skills from resume
  const skills = {
    frontend: [
      "React",
      "React Native",
      "Next.js",
      "Remix",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Redux",
      "Responsive Design",
      "Component-based UI Systems",
      "Figma Design Systems",
      "User Experience (UX)",
      "Accessibility",
      "Progressive Web Apps",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "PostgreSQL",
      "MariaDB",
      "MongoDB",
      "Socket.IO",
      "JWT Authentication",
      "API Design",
      "Database Design",
      "Server Architecture",
      "Microservices",
    ],
    tools: [
      "AWS (EC2, S3, LightSail, RDS)",
      "Git",
      "Jira",
      "Agile Development",
      "DevOps",
      "CI/CD",
      "TDD",
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Stripe Integration",
      "Klaviyo",
      "Google Analytics",
      "Meta Ads",
    ],
  };

  // Setya's real experience from resume
  const experience = [
    {
      company: "Beauty Elite Group",
      position: "Full-Stack Software Developer",
      duration: "April 2023 - Current",
      location: "Remote",
      description:
        "Senior Software Engineer delivering robust, performant, and accessible user interfaces using React and modern front-end technologies. Proven ability to collaborate across product, design, and engineering teams to build component-based UI systems.",
      achievements: [
        "Designed and implemented scalable web applications using React and Remix, improving user engagement",
        "Replaced third-party tools with in-house solutions, resulting in 60% reduction in operational costs",
        "Integrated marketing and analytics tools (Klaviyo, Google, Meta) boosting engagement by 18%",
        "Built e-commerce education platform with Stripe integration, increasing ticket sales",
      ],
    },
    {
      company: "Donut World",
      position: "Co-Owner & Developer",
      duration: "July 2021 - February 2023",
      location: "Local Business",
      description:
        "Co-owned and operated business while developing technical solutions to improve operations and customer experience. Built and deployed online ordering platform and internal management tools.",
      achievements: [
        "Developed and deployed online ordering platform using React, Node.js, and AWS EC2",
        "Created lightweight in-house task management app for internal use by managers",
        "Streamlined daily operations and improved task tracking efficiency",
        "Drove significant increase in transactions and revenue through digital transformation",
      ],
    },
    {
      company: "RiverKids Pediatrics",
      position: "Full-Stack Software Developer",
      duration: "January 2019 - July 2021",
      description:
        "Built and maintained real-time applications for healthcare professionals, focusing on patient management efficiency and cross-functional collaboration in an Agile environment.",
      location: "Healthcare",
      achievements: [
        "Built and maintained real-time applications for therapists using React Native, Redux, and Socket.IO",
        "Developed new features and fixed bugs for in-house web applications using JavaScript and Node.js",
        "Collaborated with cross-functional teams in an Agile environment using Jira for sprint planning",
        "Improved patient management efficiency through technology solutions",
      ],
    },
  ];

  // Setya's education (inferred from experience level)
  const education = [
    {
      degree: "Computer Science or Related Field",
      school: "University Degree",
      year: "2018",
      details:
        "Bachelor's degree in Computer Science, Software Engineering, or related field",
    },
    {
      degree: "AWS Certified Solutions Architect",
      school: "Amazon Web Services",
      year: "2022",
      details:
        "Professional certification in cloud architecture and deployment",
    },
  ];

  // Show loading state during hydration
  if (!isClient) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <HomeSection scrollToSection={scrollToSection} />
      <AboutSection
        isVisible={isVisible}
        education={education}
        experience={experience}
      />
      <ProjectsSection isVisible={isVisible} projects={projects} />
      <SkillsSection isVisible={isVisible} skills={skills} />
      <ContactSection isVisible={isVisible} />
      <FooterSection />
    </div>
  );
}
