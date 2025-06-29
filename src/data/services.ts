import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with the latest technologies',
    features: [
      'Custom React/Next.js applications',
      'Responsive design for all devices', 
      'SEO optimization and performance',
      'Content management systems',
      'E-commerce functionality',
      'Database integration',
      'API development and integration',
      'Hosting and deployment setup'
    ],
    price: {
      from: 2500,
      to: 8000,
      currency: 'EUR',
      period: 'project'
    },
    timeline: '2-8 weeks',
    category: 'web-development'
  },
  {
    id: 'booking-systems',
    title: 'Booking & Scheduling Systems',
    description: 'Complete booking platforms with calendar integration and automated notifications',
    features: [
      'Online appointment booking',
      'Calendar integration',
      'Automated email notifications',
      'Customer management',
      'Payment processing integration',
      'Admin dashboard',
      'Mobile-responsive design',
      'Multi-language support'
    ],
    price: {
      from: 3500,
      to: 6000,
      currency: 'EUR',
      period: 'project'
    },
    timeline: '3-6 weeks',
    category: 'web-development'
  },
  {
    id: 'automation',
    title: 'Business Process Automation',
    description: 'Custom automation solutions to streamline your business operations',
    features: [
      'Custom Python scripts',
      'Data processing automation',
      'Report generation',
      'API integrations',
      'Workflow optimization',
      'Email automation',
      'File processing systems',
      'Cloud deployment'
    ],
    price: {
      from: 1500,
      to: 5000,
      currency: 'EUR',
      period: 'project'
    },
    timeline: '1-4 weeks',
    category: 'automation'
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Dashboards',
    description: 'Transform your data into actionable insights with custom dashboards',
    features: [
      'Interactive data dashboards',
      'Automated reporting',
      'Data visualization',
      'Machine learning insights',
      'Real-time data processing',
      'Excel/CSV integration',
      'Cloud-based solutions',
      'Custom analytics'
    ],
    price: {
      from: 2000,
      to: 7000,
      currency: 'EUR',
      period: 'project'
    },
    timeline: '2-6 weeks',
    category: 'data-analysis'
  },
  {
    id: 'consultation',
    title: 'Technical Consultation',
    description: 'Expert advice on technology decisions and software architecture',
    features: [
      'Technology stack recommendations',
      'Code review and optimization',
      'Architecture planning',
      'Performance analysis',
      'Security assessment',
      'Scalability planning',
      'Team training',
      'Project planning'
    ],
    price: {
      from: 75,
      to: 125,
      currency: 'EUR',
      period: 'hour'
    },
    timeline: 'Flexible',
    category: 'consultation'
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance & Support',
    description: 'Ongoing maintenance and support for your web applications',
    features: [
      'Regular updates and security patches',
      'Performance monitoring',
      'Backup management',
      'Bug fixes and improvements',
      'Content updates',
      'Technical support',
      'Analytics reporting',
      'Hosting management'
    ],
    price: {
      from: 150,
      to: 500,
      currency: 'EUR',
      period: 'month'
    },
    timeline: 'Ongoing',
    category: 'web-development'
  }
]

export const processSteps = [
  {
    step: 1,
    title: {
      en: 'Discovery & Planning',
      nl: 'Ontdekking & Planning'
    },
    description: {
      en: 'We discuss your requirements, goals, and create a detailed project plan',
      nl: 'We bespreken je vereisten, doelen en maken een gedetailleerd projectplan'
    },
    duration: '1-2 days'
  },
  {
    step: 2,
    title: {
      en: 'Design & Architecture',
      nl: 'Ontwerp & Architectuur'
    },
    description: {
      en: 'Design the user interface and plan the technical architecture',
      nl: 'Ontwerp de gebruikersinterface en plan de technische architectuur'
    },
    duration: '2-5 days'
  },
  {
    step: 3,
    title: {
      en: 'Development',
      nl: 'Ontwikkeling'
    },
    description: {
      en: 'Build your application with regular progress updates',
      nl: 'Bouw je applicatie met regelmatige voortgangsupdates'
    },
    duration: '1-6 weeks'
  },
  {
    step: 4,
    title: {
      en: 'Testing & Deployment',
      nl: 'Testen & Deployment'
    },
    description: {
      en: 'Thorough testing, deployment, and training on the final system',
      nl: 'Grondig testen, deployment en training op het eindresultaat'
    },
    duration: '2-3 days'
  }
]