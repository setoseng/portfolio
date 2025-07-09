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
  title: "Setya Seng - Senior Software Engineer Portfolio",
  description:
    "Professional portfolio of Setya Seng, a senior software engineer specializing in full-stack applications with React, Node.js, and modern technologies.",
  keywords: [
    "Setya Seng",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Setya Seng" }],
  creator: "Setya Seng",
  openGraph: {
    title: "Setya Seng - Senior Software Engineer",
    description:
      "Full-stack software engineer specializing in React, Node.js, and modern web technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Setya Seng - Senior Software Engineer",
    description:
      "Full-stack software engineer specializing in React, Node.js, and modern web technologies",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
