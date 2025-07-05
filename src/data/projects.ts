import type { Project, LocalizedContent } from '@/types'

// CLIENT PROJECTS - For Freelance Mode (Short, business-focused descriptions)
export const clientProjects: Project[] = [
  {
    id: 'barbershop-website',
    title: {
      en: 'Barbershop Booking Platform',
      nl: 'Kapsalon Boekingsplatform'
    } as LocalizedContent,
    description: {
      en: 'Complete booking system with customer management and automated notifications.',
      nl: 'Compleet boekingssysteem met klantbeheer en geautomatiseerde notificaties.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'Modern booking platform that increased online appointments by 60% and reduced admin work.',
      nl: 'Modern boekingsplatform dat online afspraken met 60% verhoogde en admin werk verminderde.'
    } as LocalizedContent,
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    category: 'web',
    status: 'completed',
    liveUrl: 'https://barber-booking-website.vercel.app/',
    githubUrl: 'https://github.com/lucakeizer/barbershop-website',
    images: ['/projects/barbershop/homepage.png'],
    client: 'Jan\'s Barbershop, Volendam',
    businessImpact: {
      en: 'Automated booking system that eliminated double-bookings and reduced phone calls by 40%.',
      nl: 'Geautomatiseerd boekingssysteem dat dubbele boekingen elimineerde en telefoontjes met 40% verminderde.'
    } as LocalizedContent
  },
  {
    id: 'empathys-website',
    title: {
      en: 'Empathys Therapy Practice',
      nl: 'Empathys Therapiepraktijk'
    } as LocalizedContent,
    description: {
      en: 'Professional website with e-commerce for therapeutic books and course registration.',
      nl: 'Professionele website met e-commerce voor therapeutische boeken en cursusregistratie.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'Complete digital solution for therapy practice with integrated book sales and course management.',
      nl: 'Volledige digitale oplossing voor therapiepraktijk met geïntegreerde boekenverkoop en cursusbeheer.'
    } as LocalizedContent,
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    category: 'web',
    status: 'completed',
    liveUrl: 'https://empathys.nl',
    images: ['/projects/empathys/hero.png'],
    client: 'Empathys Child Therapy Practice',
    businessImpact: {
      en: 'Increased book sales by 150% and streamlined course registration process.',
      nl: 'Verhoogde boekenverkoop met 150% en stroomlijnde cursusregistratieproces.'
    } as LocalizedContent
  },
  {
    id: 'business-automation',
    title: {
      en: 'Business Process Automation',
      nl: 'Bedrijfsproces Automatisering'
    } as LocalizedContent,
    description: {
      en: 'Custom Python automation solutions for invoice generation and customer management.',
      nl: 'Aangepaste Python automatiseringsoplossingen voor factuurgenerate en klantbeheer.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'Automated manual processes for 3 local businesses, saving 5-10 hours per week each.',
      nl: 'Automatiseerde handmatige processen voor 3 lokale bedrijven, bespaarde 5-10 uur per week elk.'
    } as LocalizedContent,
    technologies: ['Python', 'APIs', 'Email Automation', 'CSV Processing'],
    category: 'automation',
    status: 'completed',
    images: ['/projects/automation/dashboard.jpg'],
    client: 'Multiple Small Businesses',
    businessImpact: {
      en: 'Reduced manual errors by 90% and saved 5-10 hours per week for each business.',
      nl: 'Verminderde handmatige fouten met 90% en bespaarde 5-10 uur per week voor elk bedrijf.'
    } as LocalizedContent
  }
]

// TECHNICAL PROJECTS - For Professional Mode (Tech-focused descriptions)
export const technicalProjects: Project[] = [
  {
    id: '3d-container-system',
    title: {
      en: '3D Container Optimization System',
      nl: '3D Container Optimalisatiesysteem'
    } as LocalizedContent,
    description: {
      en: 'Advanced Python application implementing 3D bin packing algorithms for logistics.',
      nl: 'Geavanceerde Python applicatie die 3D bin packing algoritmes implementeert voor logistiek.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'Complex optimization system using custom algorithms to reduce shipping costs by 25%.',
      nl: 'Complex optimalisatiesysteem met aangepaste algoritmes om verzendkosten met 25% te verminderen.'
    } as LocalizedContent,
    technologies: ['Python', '3D Algorithms', 'Mathematical Optimization', 'REST API'],
    category: 'automation',
    status: 'completed',
    images: ['/projects/container/3d-view.png'],
    client: 'Sonic Equipment B.V.',
    technicalDetails: {
      en: 'Implemented advanced bin packing algorithms with O(n log n) complexity for large dataset processing.',
      nl: 'Implementeerde geavanceerde bin packing algoritmes met O(n log n) complexiteit voor grote dataset verwerking.'
    } as LocalizedContent
  },
  {
    id: 'taskflow-distributed-queue',
    title: {
      en: 'TaskFlow Distributed Queue System',
      nl: 'TaskFlow Gedistribueerd Queue Systeem'
    } as LocalizedContent,
    description: {
      en: 'High-performance distributed task processing with Redis queuing and PostgreSQL.',
      nl: 'Hoogperformante gedistribueerde taakverwerking met Redis queuing en PostgreSQL.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'Enterprise-grade task queue handling 1,200+ jobs/minute with 99.5% reliability.',
      nl: 'Enterprise-grade taak queue die 1.200+ jobs/minuut verwerkt met 99.5% betrouwbaarheid.'
    } as LocalizedContent,
    technologies: ['Go', 'Redis', 'PostgreSQL', 'Docker'],
    category: 'backend',
    status: 'completed',
    githubUrl: 'https://github.com/lucakeizer/taskflow',
    images: ['/projects/taskflow/architecture.jpg'],
    client: 'Personal Project',
    technicalDetails: {
      en: 'Built with concurrent worker pools, atomic job state management, and comprehensive monitoring.',
      nl: 'Gebouwd met concurrent worker pools, atomaire job state management, en uitgebreide monitoring.'
    } as LocalizedContent
  },
  {
    id: 'nutriparse-app',
    title: {
      en: 'NutriParse Recipe Analyzer',
      nl: 'NutriParse Recept Analyzer'
    } as LocalizedContent,
    description: {
      en: 'AI-powered web app that transforms recipe text into detailed nutritional information.',
      nl: 'AI-gedreven web app die recepttekst omzet naar gedetailleerde voedingswaarde informatie.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'Full-stack application with React, Django, and NLP achieving 95% parsing accuracy.',
      nl: 'Full-stack applicatie met React, Django, en NLP die 95% parsing accuratesse behaalt.'
    } as LocalizedContent,
    technologies: ['React', 'TypeScript', 'Django', 'spaCy NLP'],
    category: 'automation',
    status: 'completed',
    githubUrl: 'https://github.com/LucaKeizer/nutriparse',
    images: ['/projects/nutriparse/parser.jpg'],
    client: 'Personal Project',
    technicalDetails: {
      en: 'Advanced NLP pipeline with fuzzy matching and real-time nutrition calculation for 1000+ food items.',
      nl: 'Geavanceerde NLP pipeline met fuzzy matching en real-time voedingswaarde berekening voor 1000+ voedingsproducten.'
    } as LocalizedContent
  }
]

// FEATURED PROJECTS - Dynamically selected based on mode
export const getFeaturedProjects = (viewMode: 'freelance' | 'professional') => {
  console.log('getFeaturedProjects called with mode:', viewMode)
  
  try {
    if (viewMode === 'freelance') {
      const projects = clientProjects.slice(0, 3)
      console.log('Returning client projects:', projects.length)
      return projects
    } else {
      const projects = technicalProjects.slice(0, 3)
      console.log('Returning technical projects:', projects.length)
      return projects
    }
  } catch (error) {
    console.error('Error in getFeaturedProjects:', error)
    return []
  }
}

// LEGACY: Keep for backward compatibility
export const projects = [...clientProjects, ...technicalProjects]
export const featuredProjects = [...clientProjects.slice(0, 2), ...technicalProjects.slice(0, 1)]