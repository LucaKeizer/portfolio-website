import type { Project } from '@/types'

// CLIENT PROJECTS - For Freelance Mode (Business-focused)
export const clientProjects: Project[] = [
  {
    id: 'barbershop-website',
    title: 'Jan\'s Barbershop - Complete Booking Platform',
    description: 'Professional website with online booking system that transformed a local business',
    longDescription: 'A comprehensive web solution built for a barbershop in Volendam, featuring online booking, customer management, and automated business processes.',
    freelanceDescription: 'Complete digital transformation for a local barbershop. Built a professional website with online booking system that increased bookings by 60% and reduced administrative work by 40%. Includes customer management, automated email notifications, and mobile-responsive design.',
    professionalDescription: 'Full-stack Next.js application with TypeScript, Prisma ORM, PostgreSQL database, email automation using Resend API, and responsive design with Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Resend API', 'Vercel'],
    category: 'web',
    status: 'completed',
    startDate: new Date('2024-10-01'),
    endDate: new Date('2024-11-15'),
    liveUrl: 'https://barbershop-demo.vercel.app',
    githubUrl: 'https://github.com/lucakeizer/barbershop-website',
    images: ['/projects/barbershop/hero.jpg', '/projects/barbershop/booking.jpg', '/projects/barbershop/admin.jpg'],
    client: 'Jan\'s Barbershop, Volendam',
    role: 'Full-Stack Developer',
    challenges: [
      'Replace manual phone booking system',
      'Reduce administrative overhead',
      'Mobile-friendly customer experience',
      'Automated customer communications'
    ],
    solutions: [
      'Online booking calendar with conflict detection',
      'Automated email confirmations and reminders',
      'Mobile-first responsive design',
      'Simple admin dashboard for appointment management'
    ],
    results: [
      '60% increase in online bookings',
      '40% reduction in phone call volume',
      '95% customer satisfaction with booking system',
      '3 hours saved per week on administration'
    ],
    businessImpact: 'Transformed manual booking process into automated system, allowing the barber to focus on customers instead of administration while increasing revenue through improved booking convenience.',
    technicalDetails: 'Built with modern React patterns, server-side rendering, type-safe database queries, and comprehensive error handling.'
  },
  {
    id: 'restaurant-website',
    title: 'Local Restaurant - Menu & Ordering System',
    description: 'Modern restaurant website with online menu and ordering capabilities',
    longDescription: 'Professional website for a local restaurant featuring digital menu, online ordering, and table reservation system.',
    freelanceDescription: 'Built a modern website for a family restaurant in North Holland. Features include interactive digital menu, online ordering system, table reservations, and customer reviews. The solution increased online orders by 80% and improved customer experience significantly.',
    professionalDescription: 'React-based web application with Stripe payment integration, real-time order management, and responsive design optimized for mobile ordering.',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Express', 'Socket.io'],
    category: 'web',
    status: 'completed',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-08-30'),
    liveUrl: 'https://restaurant-demo.vercel.app',
    images: ['/projects/restaurant/hero.jpg', '/projects/restaurant/menu.jpg'],
    client: 'Local Family Restaurant',
    role: 'Web Developer',
    challenges: [
      'Replace outdated website',
      'Enable online ordering',
      'Mobile-friendly menu browsing',
      'Payment processing integration'
    ],
    solutions: [
      'Modern responsive website design',
      'Stripe payment integration',
      'Real-time order tracking',
      'Mobile-optimized user experience'
    ],
    results: [
      '80% increase in online orders',
      '50% reduction in phone orders',
      '90% mobile user satisfaction',
      'Average order value increased by 25%'
    ],
    businessImpact: 'Modernized restaurant\'s digital presence and enabled contactless ordering, crucial during post-pandemic recovery.',
    technicalDetails: 'Implemented real-time order processing, secure payment handling, and optimized performance for mobile devices.'
  },
  {
    id: 'business-automation',
    title: 'Small Business Process Automation',
    description: 'Custom automation solutions for local businesses to streamline operations',
    longDescription: 'Automated repetitive business processes for multiple small businesses using custom Python scripts and integrations.',
    freelanceDescription: 'Helped 3 local businesses automate their manual processes. Created custom solutions for invoice generation, customer follow-ups, and inventory management. Saved each business 5-10 hours per week and reduced human errors by 90%.',
    professionalDescription: 'Python automation scripts with API integrations, automated email workflows, and custom business logic implementation.',
    technologies: ['Python', 'APIs', 'Email Automation', 'CSV Processing', 'Scheduling'],
    category: 'automation',
    status: 'completed',
    startDate: new Date('2024-05-01'),
    endDate: new Date('2024-09-30'),
    images: ['/projects/automation/dashboard.jpg'],
    client: 'Multiple Small Businesses',
    role: 'Automation Consultant',
    challenges: [
      'Manual, time-consuming processes',
      'Frequent human errors',
      'No technical expertise in-house',
      'Limited budget for solutions'
    ],
    solutions: [
      'Custom Python automation scripts',
      'Simple web interfaces for non-technical users',
      'Automated email and SMS notifications',
      'Cost-effective cloud deployment'
    ],
    results: [
      '5-10 hours saved per week per business',
      '90% reduction in manual errors',
      '100% client satisfaction',
      'ROI achieved within 2 months'
    ],
    businessImpact: 'Enabled small businesses to scale operations without hiring additional staff, improving efficiency and reducing costs.',
    technicalDetails: 'Developed modular Python scripts with error handling, logging, and easy configuration for non-technical users.'
  }
]

// TECHNICAL PROJECTS - For Professional Mode (Engineering-focused)
export const technicalProjects: Project[] = [
  {
    id: '3d-container-system',
    title: '3D Container Loading Optimization System',
    description: 'Advanced Python application implementing 3D bin packing algorithms for logistics optimization',
    longDescription: 'Complex 3D optimization system for maximizing container space utilization in industrial shipping and logistics operations.',
    freelanceDescription: 'Custom automation solution that optimized shipping costs by 25% through intelligent 3D container packing algorithms.',
    professionalDescription: 'Implemented advanced 3D bin packing algorithms with real-time visualization capabilities. Built using Python with custom mathematical optimization, REST API integration, and performance-optimized data structures. Achieved O(n log n) complexity for large dataset processing.',
    technologies: ['Python', '3D Algorithms', 'Mathematical Optimization', 'REST API', 'Data Visualization', 'Performance Optimization'],
    category: 'automation',
    status: 'completed',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2024-01-31'),
    images: ['/projects/container/3d-view.jpg', '/projects/container/algorithm.jpg'],
    client: 'Sonic Equipment B.V.',
    role: 'Data Solutions Engineer',
    challenges: [
      'Complex 3D space optimization with irregular shapes',
      'Real-time calculation requirements for large datasets',
      'Integration with existing ERP systems',
      'Performance optimization for industrial-scale usage'
    ],
    solutions: [
      'Implemented advanced bin packing algorithms (First Fit Decreasing, Best Fit)',
      'Created custom 3D visualization engine using Python libraries',
      'Built RESTful API with optimized data structures',
      'Developed efficient caching and memoization strategies'
    ],
    results: [
      '25% improvement in container space utilization',
      '15% reduction in shipping costs',
      '80% faster calculation times vs manual planning',
      'Successfully processed 1000+ containers daily'
    ],
    businessImpact: 'Significantly reduced shipping costs and improved logistics efficiency for industrial equipment transport.',
    technicalDetails: 'Utilized advanced mathematical algorithms, 3D geometric calculations, NumPy for matrix operations, and custom optimization heuristics. Implemented comprehensive unit testing and performance benchmarking.'
  },
  {
    id: 'ml-data-pipeline',
    title: 'Machine Learning Data Analysis Pipeline',
    description: 'Automated data processing pipeline with ML predictions and real-time analytics',
    longDescription: 'End-to-end machine learning pipeline for processing industrial sensor data, generating predictions, and providing real-time business insights.',
    freelanceDescription: 'Business intelligence solution providing automated reports and insights, reducing manual analysis time by 70%.',
    professionalDescription: 'Built scalable ML pipeline using Python, scikit-learn, and Azure Functions. Implemented automated feature engineering, model training/validation, and real-time prediction serving. Achieved 95% accuracy in predictive maintenance models.',
    technologies: ['Python', 'Machine Learning', 'scikit-learn', 'Azure Functions', 'Pandas', 'NumPy', 'Real-time Processing'],
    category: 'data',
    status: 'completed',
    startDate: new Date('2023-08-01'),
    endDate: new Date('2024-06-30'),
    githubUrl: 'https://github.com/lucakeizer/ml-data-pipeline',
    images: ['/projects/ml-pipeline/architecture.jpg', '/projects/ml-pipeline/dashboard.jpg'],
    client: 'Sonic Equipment B.V.',
    role: 'Data Solutions Engineer',
    challenges: [
      'Processing high-volume sensor data in real-time',
      'Building robust ML models for industrial environments',
      'Automated model retraining and deployment',
      'Integration with existing monitoring systems'
    ],
    solutions: [
      'Implemented serverless architecture with Azure Functions',
      'Created automated feature engineering pipeline',
      'Built CI/CD pipeline for model deployment',
      'Developed real-time monitoring and alerting system'
    ],
    results: [
      '95% accuracy in predictive maintenance models',
      '70% reduction in manual data analysis time',
      'Real-time processing of 10,000+ data points per hour',
      'Prevented 12 equipment failures through early detection'
    ],
    businessImpact: 'Transformed reactive maintenance to predictive maintenance, reducing downtime and maintenance costs.',
    technicalDetails: 'Microservices architecture with containerized ML models, event-driven processing, comprehensive logging and monitoring, and automated model versioning.'
  },
  {
    id: 'cad-automation-suite',
    title: 'CAD Automation Framework',
    description: 'Comprehensive automation framework for electrical engineering CAD workflows',
    longDescription: 'Advanced automation suite for Revit and Dynamo workflows, featuring 50+ custom scripts and tools for electrical engineering teams.',
    freelanceDescription: 'Custom automation solution that saved 10+ hours per project for electrical engineering team.',
    professionalDescription: 'Developed comprehensive automation framework using Python, C#, and Revit API. Created custom Dynamo nodes, automated drawing generation, and implemented robust error handling. Built testing framework for CAD script reliability.',
    technologies: ['Python', 'C#', 'Revit API', 'Dynamo', '.NET Framework', 'CAD Integration', 'Automated Testing'],
    category: 'automation',
    status: 'completed',
    startDate: new Date('2022-04-01'),
    endDate: new Date('2022-08-31'),
    githubUrl: 'https://github.com/lucakeizer/cad-automation',
    images: ['/projects/cad-automation/dynamo.jpg', '/projects/cad-automation/revit.jpg'],
    client: 'Smit Elektra',
    role: 'Software Developer Intern',
    challenges: [
      'Complex CAD software API integration',
      'Maintaining script reliability across software versions',
      'Creating user-friendly interfaces for non-programmers',
      'Performance optimization for large CAD models'
    ],
    solutions: [
      'Built robust error handling and logging system',
      'Created comprehensive unit and integration testing suite',
      'Developed intuitive GUI interfaces using WPF',
      'Implemented efficient algorithms for large dataset processing'
    ],
    results: [
      '10+ hours saved per project (50+ scripts deployed)',
      '90% reduction in manual CAD work',
      'Zero critical errors in production environment',
      '100% team adoption rate'
    ],
    businessImpact: 'Dramatically improved productivity for electrical engineering team, allowing focus on design rather than repetitive tasks.',
    technicalDetails: 'Deep integration with Revit and Dynamo APIs, custom node development, comprehensive error handling, automated testing framework, and version control integration.'
  },
  {
    id: 'distributed-system',
    title: 'Distributed Computing Framework',
    description: 'Scalable distributed system for parallel data processing and analysis',
    longDescription: 'Custom distributed computing framework built with Go and Docker for processing large-scale datasets across multiple nodes.',
    freelanceDescription: 'High-performance system for processing large datasets efficiently.',
    professionalDescription: 'Built from scratch using Go and Docker, implementing distributed task scheduling, fault tolerance, and automatic load balancing. Designed for horizontal scaling and achieved 10x performance improvement over single-node processing.',
    technologies: ['Go', 'Docker', 'Kubernetes', 'Distributed Systems', 'Message Queues', 'Load Balancing'],
    category: 'automation',
    status: 'completed',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-05-31'),
    githubUrl: 'https://github.com/lucakeizer/distributed-framework',
    images: ['/projects/distributed/architecture.jpg', '/projects/distributed/monitoring.jpg'],
    client: 'Personal Project',
    role: 'Software Engineer',
    challenges: [
      'Designing fault-tolerant distributed architecture',
      'Implementing efficient task scheduling algorithms',
      'Managing inter-node communication and state synchronization',
      'Optimizing performance for different workload types'
    ],
    solutions: [
      'Implemented consensus algorithm for distributed coordination',
      'Built custom message queue system for reliable communication',
      'Created dynamic load balancing with health checking',
      'Developed comprehensive monitoring and alerting system'
    ],
    results: [
      '10x performance improvement over single-node processing',
      '99.9% system uptime with automatic failover',
      'Linear scaling performance up to 20 nodes',
      'Processed 1TB+ datasets efficiently'
    ],
    businessImpact: 'Demonstrated ability to design and implement complex distributed systems for enterprise-scale data processing.',
    technicalDetails: 'Implemented using Go for performance, containerized with Docker, orchestrated with Kubernetes, featuring custom consensus algorithms and comprehensive observability.'
  }
]

// FEATURED PROJECTS - Dynamically selected based on mode
export const getFeaturedProjects = (viewMode: 'freelance' | 'professional') => {
  if (viewMode === 'freelance') {
    return clientProjects.slice(0, 3)
  } else {
    return technicalProjects.slice(0, 3)
  }
}

// LEGACY: Keep for backward compatibility, but will be replaced
export const projects = [...clientProjects, ...technicalProjects]
export const featuredProjects = [...clientProjects.slice(0, 2), ...technicalProjects.slice(0, 1)]