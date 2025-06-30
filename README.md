# Luca Keizer - Portfolio Website

> Modern, dual-mode portfolio showcasing software engineering expertise and freelance web development services

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-pink?logo=framer)](https://www.framer.com/motion/)

## Features

### Dual-Mode Experience
- **Professional Mode**: Showcases software engineering skills for recruiters & employers
- **Freelance Mode**: Highlights web development services for North Holland businesses
- Intelligent welcome modal guides first-time visitors to the right experience

### Internationalization
- **Dutch & English** support throughout the entire application
- Localized content, UI elements, and technical terminology
- Automatic browser language detection with manual override

### Modern Design
- **Dark/Light mode** with system preference detection
- Smooth animations and micro-interactions using Framer Motion
- Responsive design optimized for all devices
- Professional gradient themes that adapt to each mode

### Smart Contact System
- Integrated contact form with **Resend API**
- Mode-aware email templates (freelance vs professional inquiries)
- LinkedIn integration for professional networking
- Multiple contact preferences and project-specific fields

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Smooth animations and page transitions

### Backend & Services
- **Resend API** - Reliable email delivery
- **Vercel** - Deployment and hosting
- **React Context** - Global state management for themes, language, and view modes

### Developer Experience
- **ESLint** - Code linting and formatting
- **TypeScript** - Compile-time error checking
- **Modular Architecture** - Clean separation of concerns

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Resend API key (for contact form)

### Installation

```bash
# Clone the repository
git clone https://github.com/lucakeizer/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your RESEND_API_KEY to .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Design System

### Color Palette
- **Primary**: Blue gradient (`#0ea5e9` to `#0284c7`) 
- **Professional**: Sophisticated blues and grays
- **Freelance**: Vibrant business-friendly colors
- **Dark Mode**: Carefully crafted contrast ratios

### Typography
- **Primary**: Inter (clean, professional)
- **Monospace**: JetBrains Mono (code snippets)
- Responsive font scaling and proper line heights

## Key Highlights

### Smart Mode Detection
The portfolio automatically adapts content, navigation, and CTAs based on the selected mode:

```typescript
// Professional Mode Features
- LinkedIn integration as primary CTA
- Technical project showcases
- Detailed skill breakdowns with experience levels
- Resume download functionality

// Freelance Mode Features  
- Business-focused project results
- Service pricing and packages
- Client testimonials and case studies
- Direct contact form for project inquiries
```

### Performance Optimizations
- **Image optimization** with Next.js Image component
- **Code splitting** for optimal bundle sizes
- **SEO optimization** with proper meta tags and structured data
- **Accessibility** with ARIA labels and semantic HTML

### Translation Architecture
- Centralized `LocalizedContent` type for type-safe translations
- Automatic fallbacks for missing translations
- Context-aware technical term translations

## Analytics & Insights

The portfolio includes:
- **Contact form analytics** to track inquiry types
- **Mode usage tracking** to understand visitor preferences  
- **Performance monitoring** for optimal user experience

## Deployment

The portfolio is optimized for **Vercel** deployment:

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

## Contributing

This is a personal portfolio project, but if you find bugs or have suggestions:

1. Open an issue describing the problem
2. Fork the repository
3. Create a feature branch
4. Submit a pull request

## License

This project is for personal use. The code structure and components can be referenced, but please don't copy the content or design directly.

---

## About the Developer

**Luca Keizer** - Software Engineer & Web Developer  
Based in Volendam, Netherlands  
LinkedIn: [linkedin.com/in/lucakeizer](https://www.linkedin.com/in/lucakeizer/)  
Email: keizerluca@gmail.com

*Building innovative software solutions with modern technologies and engineering excellence.*