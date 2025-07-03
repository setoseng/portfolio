# 🚀 Setya Seng - Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-green?style=for-the-badge&logo=framer)

A modern, responsive portfolio website showcasing **Setya Seng's** expertise as a Senior Software Engineer with over 5 years of experience in full-stack development.

[🌐 Live Demo](#) • [📧 Contact](#) • [💼 LinkedIn](#)

</div>

---

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with smooth animations and modern UI/UX
- **📱 Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **⚡ Performance Optimized**: Built with Next.js 15 and Turbopack for lightning-fast performance
- **🔍 SEO Friendly**: Proper meta tags, structured data, and semantic HTML
- **♿ Accessible**: WCAG 2.1 compliant design patterns and keyboard navigation
- **🎭 Interactive**: Smooth scroll animations, hover effects, and micro-interactions
- **🌙 Dark Mode Ready**: Built with dark mode support (easily configurable)
- **📊 Analytics Ready**: Google Analytics and other tracking tools integration ready

## 🛠️ Tech Stack

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework

### Animations & UI

- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Prettier](https://prettier.io/)** - Code formatter
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page component
│   │   ├── globals.css        # Global styles and Tailwind imports
│   │   └── favicon.ico        # Site favicon
│   ├── components/            # Reusable React components
│   │   ├── HomeSection.tsx    # Hero section with stats
│   │   ├── AboutSection.tsx   # About me and experience
│   │   ├── ProjectsSection.tsx # Portfolio projects showcase
│   │   ├── SkillsSection.tsx  # Technical skills display
│   │   ├── ContactSection.tsx # Contact form and info
│   │   ├── FooterSection.tsx  # Footer with links
│   │   ├── Navigation.tsx     # Navigation component
│   │   ├── ScrollAnimation.tsx # Reusable scroll animations
│   │   └── ui/               # UI components
│   │       └── Button.tsx    # Reusable button component
│   ├── lib/                  # Utility functions and constants
│   │   ├── constants.ts      # App constants and data
│   │   └── utils.ts          # Helper functions
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Global type definitions
│   └── public/              # Static assets
│       ├── resume.pdf       # Resume file
│       └── *.svg           # SVG icons and graphics
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Customization

### Personal Information

Update your personal details in `src/app/page.tsx`:

```typescript
const personalInfo = {
  name: "Setya Seng",
  title: "Senior Software Engineer",
  email: "your.email@example.com",
  // ... other details
};
```

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Typography**: Update font families and sizes in `tailwind.config.js`
- **Animations**: Customize Framer Motion animations in components

### Content

- **Projects**: Add your projects to the `projects` array in `src/lib/constants.ts`
- **Skills**: Update the `skills` array with your technical expertise
- **Experience**: Modify the `experience` array with your work history

### Metadata

Update SEO metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Setya Seng - Senior Software Engineer",
  description: "Portfolio of Setya Seng, a Senior Software Engineer...",
  // ... other metadata
};
```

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking

# Analysis
npm run analyze      # Analyze bundle size (if configured)
```

## 🌐 Deployment

This portfolio is optimized for deployment on **Vercel**:

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Other Platforms

- **Netlify**: Use the `npm run build` command
- **Railway**: Deploy with Node.js environment
- **DigitalOcean App Platform**: Configure as a Node.js app

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Optional: Contact form (if using a service)
CONTACT_FORM_ENDPOINT=your-endpoint
```

## 📈 Performance

This portfolio is built with performance in mind:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Minimal JavaScript bundle
- **Images**: Optimized with Next.js Image component
- **Fonts**: Optimized font loading with `next/font`

## 🤝 Contributing

While this is a personal portfolio, contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for seamless deployment

---

<div align="center">

**Made with ❤️ by Setya Seng**

[🌐 Website](#) • [📧 Email](#) • [💼 LinkedIn](#) • [🐙 GitHub](#)

</div>
