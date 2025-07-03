import type { Project, LocalizedContent } from '@/types'
import { clientProjects, technicalProjects } from './projects'

// Extended project type for the all projects page
export interface ExtendedProject extends Project {
  showInFreelance: boolean
  showInProfessional: boolean
}

// Additional client projects to fill out the portfolio
const additionalClientProjects: ExtendedProject[] = [
  {
    id: 'dental-clinic-website',
    title: {
      en: 'Dental Clinic - Appointment Platform',
      nl: 'Tandartspraktijk - Afspraak Platform'
    } as LocalizedContent,
    description: {
      en: 'Modern website for dental practice with online appointment booking and patient portal',
      nl: 'Moderne website voor tandartspraktijk met online afspraak boeken en patiëntenportaal'
    } as LocalizedContent,
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Calendar API'],
    category: 'web',
    status: 'completed',
    images: ['/projects/dental/homepage.jpg'],
    client: 'Dental Care Volendam',
    showInFreelance: true,
    showInProfessional: false
  },
  {
    id: 'fitness-studio-website',
    title: {
      en: 'Fitness Studio - Class Booking System',
      nl: 'Fitness Studio - Les Boekingssysteem'
    } as LocalizedContent,
    description: {
      en: 'Dynamic website with class schedules, membership management, and online payments',
      nl: 'Dynamische website met lesroosters, lidmaatschapbeheer en online betalingen'
    } as LocalizedContent,
    technologies: ['React', 'Node.js', 'MongoDB', 'PayPal API'],
    category: 'web',
    status: 'completed',
    images: ['/projects/fitness/homepage.jpg'],
    client: 'FitZone Edam',
    showInFreelance: true,
    showInProfessional: false
  },
  {
    id: 'real-estate-website',
    title: {
      en: 'Real Estate Agency - Property Portal',
      nl: 'Makelaar - Vastgoed Portaal'
    } as LocalizedContent,
    description: {
      en: 'Professional real estate website with property listings and search functionality',
      nl: 'Professionele makelaar website met vastgoed aanbod en zoekfunctionaliteit'
    } as LocalizedContent,
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
    category: 'web',
    status: 'completed',
    images: ['/projects/realestate/homepage.jpg'],
    client: 'Noord-Holland Makelaars',
    showInFreelance: true,
    showInProfessional: false
  },
  {
    id: 'bakery-website',
    title: {
      en: 'Artisan Bakery - Online Ordering',
      nl: 'Ambachtelijke Bakkerij - Online Bestellen'
    } as LocalizedContent,
    description: {
      en: 'Charming bakery website with daily menu updates and pre-order system',
      nl: 'Charmante bakkerij website met dagelijkse menu updates en voorbestelsysteem'
    } as LocalizedContent,
    technologies: ['WordPress', 'WooCommerce', 'Custom PHP'],
    category: 'web',
    status: 'completed',
    images: ['/projects/bakery/homepage.jpg'],
    client: 'Bakkerij De Koning',
    showInFreelance: true,
    showInProfessional: false
  },
  {
    id: 'law-firm-website',
    title: {
      en: 'Law Firm - Professional Portal',
      nl: 'Advocatenkantoor - Professioneel Portaal'
    } as LocalizedContent,
    description: {
      en: 'Sophisticated website for law firm with case management and client portal',
      nl: 'Geavanceerde website voor advocatenkantoor met zaakbeheer en cliëntenportaal'
    } as LocalizedContent,
    technologies: ['Next.js', 'TypeScript', 'Auth0', 'Tailwind CSS'],
    category: 'web',
    status: 'completed',
    images: ['/projects/lawfirm/homepage.jpg'],
    client: 'Advocaten Noord',
    showInFreelance: true,
    showInProfessional: false
  }
]

// Additional technical projects
const additionalTechnicalProjects: ExtendedProject[] = [
  {
    id: 'api-gateway',
    title: {
      en: 'Microservices API Gateway',
      nl: 'Microservices API Gateway'
    } as LocalizedContent,
    description: {
      en: 'High-performance API gateway with rate limiting, authentication, and load balancing',
      nl: 'High-performance API gateway met rate limiting, authenticatie en load balancing'
    } as LocalizedContent,
    technologies: ['Go', 'Redis', 'Docker', 'Kubernetes', 'gRPC'],
    category: 'automation',
    status: 'completed',
    images: ['/projects/gateway/architecture.jpg'],
    githubUrl: 'https://github.com/lucakeizer/api-gateway',
    showInFreelance: false,
    showInProfessional: true
  },
  {
    id: 'blockchain-indexer',
    title: {
      en: 'Blockchain Data Indexer',
      nl: 'Blockchain Data Indexer'
    } as LocalizedContent,
    description: {
      en: 'Real-time blockchain transaction indexer with GraphQL API and analytics dashboard',
      nl: 'Real-time blockchain transactie indexer met GraphQL API en analytics dashboard'
    } as LocalizedContent,
    technologies: ['Python', 'PostgreSQL', 'GraphQL', 'Redis', 'Web3'],
    category: 'data',
    status: 'completed',
    images: ['/projects/blockchain/dashboard.jpg'],
    githubUrl: 'https://github.com/lucakeizer/blockchain-indexer',
    showInFreelance: false,
    showInProfessional: true
  },
  {
    id: 'monitoring-system',
    title: {
      en: 'Infrastructure Monitoring System',
      nl: 'Infrastructuur Monitoring Systeem'
    } as LocalizedContent,
    description: {
      en: 'Complete monitoring solution with custom metrics, alerting, and visualization',
      nl: 'Complete monitoring oplossing met aangepaste metrics, alerting en visualisatie'
    } as LocalizedContent,
    technologies: ['Prometheus', 'Grafana', 'Go', 'Kubernetes', 'Alertmanager'],
    category: 'automation',
    status: 'completed',
    images: ['/projects/monitoring/dashboard.jpg'],
    githubUrl: 'https://github.com/lucakeizer/monitoring-system',
    showInFreelance: false,
    showInProfessional: true
  },
  {
    id: 'ai-content-generator',
    title: {
      en: 'AI Content Generation API',
      nl: 'AI Content Generatie API'
    } as LocalizedContent,
    description: {
      en: 'Machine learning powered content generation service with REST API and rate limiting',
      nl: 'Machine learning powered content generatie service met REST API en rate limiting'
    } as LocalizedContent,
    technologies: ['Python', 'FastAPI', 'OpenAI', 'Redis', 'Docker'],
    category: 'ml',
    status: 'completed',
    images: ['/projects/ai-content/api.jpg'],
    githubUrl: 'https://github.com/lucakeizer/ai-content-api',
    showInFreelance: false,
    showInProfessional: true
  },
  {
    id: 'log-aggregation',
    title: {
      en: 'Distributed Log Aggregation System',
      nl: 'Gedistribueerd Log Aggregatie Systeem'
    } as LocalizedContent,
    description: {
      en: 'Scalable log collection and analysis system for microservices architecture',
      nl: 'Schaalbaar log collectie en analyse systeem voor microservices architectuur'
    } as LocalizedContent,
    technologies: ['Elasticsearch', 'Logstash', 'Kibana', 'Beats', 'Docker'],
    category: 'automation',
    status: 'completed',
    images: ['/projects/logs/kibana.jpg'],
    githubUrl: 'https://github.com/lucakeizer/log-aggregation',
    showInFreelance: false,
    showInProfessional: true
  }
]

// Combine all projects
export const allProjects: ExtendedProject[] = [
  // Featured projects (from main portfolio) - explicitly add the missing properties
  ...clientProjects.map(p => ({ 
    ...p, 
    showInFreelance: true, 
    showInProfessional: false 
  })),
  ...technicalProjects.map(p => ({ 
    ...p, 
    showInFreelance: false, 
    showInProfessional: true 
  })),
  
  // Additional projects
  ...additionalClientProjects,
  ...additionalTechnicalProjects
]

// Project categories for filtering
export const projectCategories = [
  {
    id: 'all',
    label: {
      en: 'All Projects',
      nl: 'Alle Projecten'
    } as LocalizedContent
  },
  {
    id: 'web',
    label: {
      en: 'Websites',
      nl: 'Websites'
    } as LocalizedContent
  },
  {
    id: 'automation',
    label: {
      en: 'Automation',
      nl: 'Automatisering'
    } as LocalizedContent
  },
  {
    id: 'data',
    label: {
      en: 'Data & ML',
      nl: 'Data & ML'
    } as LocalizedContent
  },
  {
    id: 'ml',
    label: {
      en: 'Machine Learning',
      nl: 'Machine Learning'
    } as LocalizedContent
  }
]