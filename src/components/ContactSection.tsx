import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface ContactSectionProps {
  isVisible: Record<string, boolean>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isVisible }) => (
  <section id="contact" className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16" data-animate="contact-title">
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          style={{ color: "#0551FA" }}
        >
          Let&apos;s Connect
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
          Ready to start your next project? I&apos;d love to hear about your
          ideas and discuss how we can work together.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div
          className={`bg-gray-50 rounded-3xl p-8 shadow-lg transition-all duration-1000 ${
            isVisible["contact-info"]
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
          data-animate="contact-info"
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#0551FA" }}>
            Get In Touch
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-4" size={20} style={{ color: "#FAAE05" }} />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a
                  href="mailto:setoseng@gmail.com"
                  className="hover:underline"
                  style={{ color: "#0551FA" }}
                >
                  setoseng@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4" size={20} style={{ color: "#FAAE05" }} />
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <a
                  href="tel:+12817404312"
                  className="hover:underline"
                  style={{ color: "#0551FA" }}
                >
                  +1 (281) 740-4312
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-4" size={20} style={{ color: "#FAAE05" }} />
              <div>
                <p className="font-medium text-gray-900">Location</p>
                <p className="text-gray-600">Remote / Houston Area</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="font-bold text-gray-900 mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="p-3 rounded-lg bg-white shadow-sm cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Github style={{ color: "#0551FA" }} size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 rounded-lg bg-white shadow-sm cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin style={{ color: "#0551FA" }} size={20} />
              </motion.a>
              <motion.a
                href="mailto:setoseng@gmail.com"
                className="p-3 rounded-lg bg-white shadow-sm cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Mail style={{ color: "#0551FA" }} size={20} />
              </motion.a>
            </div>
          </div>
        </div>
        <div
          className={`bg-gray-50 rounded-3xl p-8 shadow-lg transition-all duration-1000 delay-300 ${
            isVisible["contact-form"]
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
          data-animate="contact-form"
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#0551FA" }}>
            Send a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none bg-white"
                style={{ "--tw-ring-color": "#0551FA" } as React.CSSProperties}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none bg-white"
                style={{ "--tw-ring-color": "#0551FA" } as React.CSSProperties}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Type
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none bg-white"
                style={{ "--tw-ring-color": "#0551FA" } as React.CSSProperties}
              >
                <option>Web Application</option>
                <option>E-commerce Platform</option>
                <option>React/Next.js Development</option>
                <option>UI/UX Design</option>
                <option>API Development</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none bg-white"
                style={{ "--tw-ring-color": "#0551FA" } as React.CSSProperties}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full text-white py-3 px-6 rounded-lg font-semibold cursor-pointer"
              style={{ backgroundColor: "#0551FA" }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
      {/* Availability */}
      <div
        className={`bg-gray-50 rounded-3xl p-8 shadow-lg text-center transition-all duration-1000 delay-500 ${
          isVisible["availability"]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
        data-animate="availability"
      >
        <h3 className="text-2xl font-bold mb-4" style={{ color: "#0551FA" }}>
          Current Availability
        </h3>
        <div
          className="inline-flex items-center text-blue-900 px-6 py-3 rounded-full font-medium shadow-sm"
          style={{ backgroundColor: "#FAAE05" }}
        >
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Available for new projects
        </div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          I&apos;m currently accepting new freelance projects and full-time
          opportunities. Let&apos;s discuss how I can help bring your vision to
          life.
        </p>
      </div>
    </div>
  </section>
);

export default ContactSection;
