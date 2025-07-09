import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Setya Seng - Full-Stack Software Engineer Portfolio",
  description:
    "Professional portfolio of Setya Seng, a full-stack software engineer specializing in full-stack applications with React, Node.js, TypeScript, and modern web technologies. View projects, skills, and contact information.",
  keywords: [
    "Setya Seng",
    "Software Engineer",
    "Full-Stack Developer",
    "Full-Stack Software Engineer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "Houston Developer",
    "Remote Developer",
  ],
  authors: [{ name: "Setya Seng" }],
  creator: "Setya Seng",
  publisher: "Setya Seng",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sseng.dev",
  },
  openGraph: {
    title: "Setya Seng - Full-Stack Software Engineer",
    description:
      "Full-stack software engineer specializing in React, Node.js, TypeScript, and modern web technologies. Available for new opportunities and collaborations.",
    type: "website",
    url: "https://sseng.dev",
    siteName: "Setya Seng Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://sseng.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Setya Seng - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Setya Seng - Full-Stack Software Engineer",
    description:
      "Full-stack software engineer specializing in React, Node.js, TypeScript, and modern web technologies",
    creator: "@setoseng",
    images: ["https://sseng.dev/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "theme-color": "#0551FA",
    "msapplication-TileColor": "#0551FA",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Setya Seng Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://sseng.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0551FA" />
        <meta name="msapplication-TileColor" content="#0551FA" />

        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Setya Seng",
              jobTitle: "Full-Stack Software Engineer",
              description:
                "Full-stack software engineer specializing in React, Node.js, TypeScript, and modern web technologies",
              url: "https://sseng.dev",
              sameAs: [
                "https://github.com/setoseng",
                "https://www.linkedin.com/in/setya-seng/",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance/Contract",
              },
              knowsAbout: [
                "React",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "Next.js",
                "Full-Stack Development",
                "Web Development",
                "Software Engineering",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Houston",
                addressRegion: "TX",
                addressCountry: "US",
              },
              email: "setoseng@gmail.com",
            }),
          }}
        />

        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Setya Seng Portfolio",
              url: "https://sseng.dev",
              description:
                "Professional portfolio of Setya Seng, a senior software engineer",
              author: {
                "@type": "Person",
                name: "Setya Seng",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://sseng.dev?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
