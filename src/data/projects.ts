import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'barbershop-website',
    title: 'Jan\'s Barbershop - Complete Booking Platform',
    description: 'Full-stack booking website with admin panel for a local barbershop',
    longDescription: 'A comprehensive web application built for a barbershop in Volendam, featuring online booking, customer management, and administrative tools.',
    freelanceDescription: 'Professional website with online booking system that increased client bookings by 60% and reduced phone calls by 40%. Complete solution including customer management and automated email notifications.',
    professionalDescription: 'Full-stack Next.js application with TypeScript, Prisma ORM, PostgreSQL database, email automation using Resend API, and responsive design with Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Resend API', 'Vercel'],
    category: 'web',
    status: 'completed',
    startDate: new Date('2024-10-01'),
    endDate: new Date('2024-11-15'),
    liveUrl: 'https://barber-booking-website.vercel.app',
    githubUrl: 'https://github.com/LucaKeizer/barber-booking-website',
    images: ['/projects/barbershop/hero.jpg', '/projects/barbershop/booking.jpg', '/projects/barbershop/admin.jpg'],
    client: 'Jan\'s Barbershop, Volendam',
    role: 'Full-Stack Developer',
    challenges: [
      'Complex booking time slot management',
      'Email automation integration',
      'Mobile-responsive admin interface',
      'Multi-language support (Dutch/English)'
    ],
    solutions: [
      'Custom time slot algorithm with conflict detection',
      'Integrated Resend API for automated notifications',
      'Mobile-first responsive design approach',
      'React Context for language state management'
    ],
    results: [
      '60% increase in online bookings',
      '40% reduction in phone call volume',
      '95% customer satisfaction with booking system',
      'Zero downtime since launch'
    ],
    businessImpact: 'Transformed manual booking process into automated system, allowing the barber to focus on customers instead of administration.',
    technicalDetails: 'Built with modern React patterns, server-side rendering, type-safe database queries, and comprehensive error handling.'
  },
  {
    id: '3d-container-system',
    title: '3D Container Loading Optimization',
    description: 'Python application for optimizing container loading using 3D algorithms',
    longDescription: 'Advanced 3D optimization system for maximizing container space utilization in shipping and logistics.',
    freelanceDescription: 'Custom automation solution that optimized shipping costs by 25% through intelligent 3D container packing algorithms.',
    professionalDescription: 'Complex Python application implementing 3D bin packing algorithms with visual simulation capabilities and REST API integration.',
    technologies: ['Python', '3D Modeling', 'Algorithm Optimization', 'REST API', 'Data Visualization'],
    category: 'automation',
    status: 'completed',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2024-01-31'),
    images: ['/projects/container/3d-view.jpg', '/projects/container/algorithm.jpg'],
    client: 'Sonic Equipment B.V.',
    role: 'Data Solutions Engineer',
    challenges: [
      'Complex 3D space optimization',
      'Real-time visualization requirements',
      'Integration with existing logistics systems',
      'Performance optimization for large datasets'
    ],
    solutions: [
      'Implemented advanced bin packing algorithms',
      'Created real-time 3D visualization engine',
      'Built RESTful API for system integration',
      'Optimized algorithms for O(n log n) performance'
    ],
    results: [
      '25% improvement in container space utilization',
      '15% reduction in shipping costs',
      '80% faster calculation times vs manual planning',
      'Successfully processed 1000+ containers'
    ],
    businessImpact: 'Significantly reduced shipping costs and improved logistics efficiency for industrial equipment transport.',
    technicalDetails: 'Utilized advanced mathematical algorithms, 3D geometric calculations, and performance-optimized Python libraries.'
  },
  {
    id: 'data-analysis-dashboard',
    title: 'Automated Data Analysis Dashboard',
    description: 'Real-time dashboard with automated data processing and machine learning insights',
    longDescription: 'Comprehensive data analysis platform with automated reporting, machine learning predictions, and real-time visualization.',
    freelanceDescription: 'Business intelligence solution providing automated reports and insights, reducing manual analysis time by 70%.',
    professionalDescription: 'Full-stack dashboard application with Python backend, Azure Functions for data processing, and React frontend with real-time updates.',
    technologies: ['Python', 'Azure Functions', 'React', 'Machine Learning', 'GitHub Actions', 'Power BI'],
    category: 'data',
    status: 'completed',
    startDate: new Date('2023-08-01'),
    endDate: new Date('2024-06-30'),
    images: ['/projects/dashboard/overview.jpg', '/projects/dashboard/analytics.jpg'],
    client: 'Sonic Equipment B.V.',
    role: 'Data Solutions Engineer',
    challenges: [
      'Real-time data processing at scale',
      'Machine learning model integration',
      'Automated report generation',
      'Cross-platform compatibility'
    ],
    solutions: [
      'Implemented Azure Functions for serverless processing',
      'Integrated scikit-learn ML models',
      'Created automated PDF report generation',
      'Built responsive web interface'
    ],
    results: [
      '70% reduction in manual analysis time',
      '95% accuracy in predictive models',
      'Real-time processing of 10,000+ data points',
      'Automated generation of 50+ weekly reports'
    ],
    businessImpact: 'Transformed data analysis from manual weekly reports to real-time automated insights.',
    technicalDetails: 'Microservices architecture with event-driven processing, containerized deployment, and comprehensive monitoring.'
  },
  {
    id: 'automation-scripts',
    title: 'CAD Automation Suite',
    description: '50+ automation scripts for Dynamo and Revit workflows',
    longDescription: 'Comprehensive automation suite for electrical engineering workflows in CAD software.',
    freelanceDescription: 'Custom automation solution that saved 10+ hours per project for electrical engineering team.',
    professionalDescription: 'Python and C# scripts for Dynamo and Revit API automation, including custom node development and workflow optimization.',
    technologies: ['Python', 'C#', 'Dynamo', 'Revit API', '.NET', 'CAD Integration'],
    category: 'automation',
    status: 'completed',
    startDate: new Date('2022-04-01'),
    endDate: new Date('2022-08-31'),
    images: ['/projects/automation/dynamo.jpg', '/projects/automation/revit.jpg'],
    client: 'Smit Elektra',
    role: 'Software Developer Intern',
    challenges: [
      'Complex CAD software integration',
      'Maintaining script reliability',
      'User-friendly interface design',
      'Performance optimization'
    ],
    solutions: [
      'Developed robust error handling systems',
      'Created comprehensive testing suite',
      'Built intuitive user interfaces',
      'Optimized algorithms for large models'
    ],
    results: [
      '10+ hours saved per project',
      '50+ automated scripts delivered',
      '90% reduction in manual CAD work',
      'Zero critical errors in production'
    ],
    businessImpact: 'Dramatically improved productivity for electrical engineering team, allowing focus on design rather than repetitive tasks.',
    technicalDetails: 'Deep integration with Revit and Dynamo APIs, custom node development, and comprehensive error handling.'
  }
]

export const featuredProjects = projects.filter(p => 
  ['barbershop-website', '3d-container-system', 'data-analysis-dashboard'].includes(p.id)
)