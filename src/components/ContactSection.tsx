import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, Loader2 } from "lucide-react";

interface ContactSectionProps {
  isVisible: Record<string, boolean>;
}

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    inquiryType: "Full-time Position",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Load reCAPTCHA v3 script early to analyze user behavior
  useEffect(() => {
    // Check if script is already loaded
    if (
      typeof window !== "undefined" &&
      (window as unknown as { grecaptcha?: unknown }).grecaptcha
    ) {
      return;
    }

    // Check if script is already being loaded
    if (document.querySelector('script[src*="recaptcha/api.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);
  }, []);

  // Execute reCAPTCHA v3
  const executeRecaptcha = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (
        typeof window !== "undefined" &&
        (window as unknown as { grecaptcha?: unknown }).grecaptcha
      ) {
        (
          window as unknown as {
            grecaptcha: {
              ready: (callback: () => void) => void;
              execute: (
                siteKey: string,
                options: { action: string }
              ) => Promise<string>;
            };
          }
        ).grecaptcha.ready(() => {
          (
            window as unknown as {
              grecaptcha: {
                ready: (callback: () => void) => void;
                execute: (
                  siteKey: string,
                  options: { action: string }
                ) => Promise<string>;
              };
            }
          ).grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "", {
              action: "contact_form",
            })
            .then((token: string) => {
              resolve(token);
            })
            .catch((error: unknown) => {
              reject(error);
            });
        });
      } else {
        reject(new Error("reCAPTCHA not loaded"));
      }
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Execute reCAPTCHA v3
      const token = await executeRecaptcha();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          inquiryType: "Full-time Position",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="text-center mb-12 sm:mb-16"
          data-animate="contact-title"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight"
            style={{ color: "#0551FA" }}
          >
            Let&apos;s Connect
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium px-2">
            Ready to start your next project? I&apos;d love to hear about your
            ideas and discuss how we can work together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div
            className={`bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-1000 ${
              isVisible["contact-info"]
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
            data-animate="contact-info"
          >
            <h3
              className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
              style={{ color: "#0551FA" }}
            >
              Get In Touch
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <Mail
                  className="mr-3 sm:mr-4 sm:w-5 sm:h-5"
                  size={18}
                  style={{ color: "#FAAE05" }}
                />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    Email
                  </p>
                  <a
                    href="mailto:setoseng@gmail.com"
                    className="hover:underline text-sm sm:text-base"
                    style={{ color: "#0551FA" }}
                  >
                    setoseng@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin
                  className="mr-3 sm:mr-4 sm:w-5 sm:h-5"
                  size={18}
                  style={{ color: "#FAAE05" }}
                />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    Location
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Remote / Houston Area
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-8">
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                Follow Me
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="#"
                  className="p-2 sm:p-3 rounded-lg transition-colors duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Github
                    style={{ color: "#0551FA" }}
                    size={18}
                    className="sm:w-5 sm:h-5"
                  />
                </a>
                <a
                  href="#"
                  className="p-2 sm:p-3 rounded-lg transition-colors duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Linkedin
                    style={{ color: "#0551FA" }}
                    size={18}
                    className="sm:w-5 sm:h-5"
                  />
                </a>
                <a
                  href="mailto:setoseng@gmail.com"
                  className="p-2 sm:p-3 rounded-lg transition-colors duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Mail
                    style={{ color: "#0551FA" }}
                    size={18}
                    className="sm:w-5 sm:h-5"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-1000 delay-300 ${
              isVisible["contact-form"]
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
            data-animate="contact-form"
          >
            <h3
              className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
              style={{ color: "#0551FA" }}
            >
              Send a Message
            </h3>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mb-4 p-3 rounded-lg text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none bg-white text-sm sm:text-base text-gray-900"
                  style={
                    { "--tw-ring-color": "#0551FA" } as React.CSSProperties
                  }
                  placeholder="Your full name"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none bg-white text-sm sm:text-base text-gray-900"
                  style={
                    { "--tw-ring-color": "#0551FA" } as React.CSSProperties
                  }
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none bg-white text-sm sm:text-base text-gray-900"
                  style={
                    { "--tw-ring-color": "#0551FA" } as React.CSSProperties
                  }
                  disabled={isSubmitting}
                >
                  <option>Full-time Position</option>
                  <option>Contract/Freelance</option>
                  <option>Part-time Role</option>
                  <option>Internship</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none bg-white text-sm sm:text-base text-gray-900"
                  style={
                    { "--tw-ring-color": "#0551FA" } as React.CSSProperties
                  }
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105 cursor-pointer text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{ backgroundColor: "#0551FA" }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="animate-spin mr-2 w-4 h-4" />
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
        {/* Availability */}
        <div
          className={`bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg text-center transition-all duration-1000 delay-500 ${
            isVisible["availability"]
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          data-animate="availability"
        >
          <h3
            className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
            style={{ color: "#0551FA" }}
          >
            Current Status
          </h3>
          <div
            className="inline-flex items-center text-blue-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium shadow-sm text-sm sm:text-base"
            style={{ backgroundColor: "#FAAE05" }}
          >
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Open to New Opportunities
          </div>
          <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
            I&apos;m open to discussing exciting career opportunities and
            interesting projects. I&apos;m passionate about building innovative
            web applications and would love to hear about potential
            collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
