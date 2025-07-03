import type { Project, LocalizedContent } from '@/types'

// Technology translation helper
const createTech = (name: string, dutchName?: string) => {
  return dutchName ? { en: name, nl: dutchName } : name
}

// CLIENT PROJECTS - For Freelance Mode (Business-focused)
export const clientProjects: Project[] = [
  {
    id: 'barbershop-website',
    title: {
      en: 'Jan\'s Barbershop - Complete Booking Platform',
      nl: 'Jan\'s Barbershop - Complete Boekingsplatform'
    } as LocalizedContent,
    description: {
      en: 'Professional website with online booking system that transformed a local business',
      nl: 'Professionele website met online boekingssysteem dat een lokaal bedrijf transformeerde'
    } as LocalizedContent,
    longDescription: {
      en: 'A comprehensive web solution built for a barbershop in Volendam, featuring online booking, customer management, and automated business processes.',
      nl: 'Een uitgebreide weboplossing gebouwd voor een kapsalon in Volendam, met online boeken, klantbeheer en geautomatiseerde bedrijfsprocessen.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'Complete digital transformation for a local barbershop. Built a professional website with online booking system that increased bookings by 60% and reduced administrative work by 40%. Includes customer management, automated email notifications, and mobile-responsive design.',
      nl: 'Complete digitale transformatie voor een lokale kapsalon. Bouwde een professionele website met online boekingssysteem dat boekingen met 60% verhoogde en administratief werk met 40% verminderde. Inclusief klantbeheer, geautomatiseerde e-mailnotificaties en mobiel-responsief ontwerp.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'Full-stack Next.js application with TypeScript, Prisma ORM, PostgreSQL database, email automation using Resend API, and responsive design with Tailwind CSS.',
      nl: 'Full-stack Next.js applicatie met TypeScript, Prisma ORM, PostgreSQL database, e-mail automatisering met Resend API, en responsief ontwerp met Tailwind CSS.'
    } as LocalizedContent,
    technologies: [
      'Next.js',
      'TypeScript', 
      'Prisma', 
      createTech('PostgreSQL', 'PostgreSQL Database') as string,
      'Tailwind CSS', 
      createTech('Resend API', 'E-mail API') as string, 
      createTech('Vercel', 'Cloud Hosting') as string
    ],
    category: 'web',
    status: 'completed',
    liveUrl: 'https://barber-booking-website.vercel.app/',
    githubUrl: 'https://github.com/lucakeizer/barbershop-website',
    images: ['/projects/barbershop/homepage.png'],
    client: 'Jan\'s Barbershop, Volendam',
    role: 'Full-Stack Developer',
    challenges: {
      en: [
        'Replace manual phone booking system',
        'Reduce administrative overhead',
        'Mobile-friendly customer experience',
        'Automated customer communications'
      ],
      nl: [
        'Vervang handmatig telefoonboekingssysteem',
        'Verminder administratieve overhead',
        'Mobiel-vriendelijke klantervaring',
        'Geautomatiseerde klantcommunicatie'
      ]
    },
    solutions: {
      en: [
        'Online booking calendar with conflict detection',
        'Automated email confirmations and reminders',
        'Mobile-first responsive design',
        'Simple admin dashboard for appointment management'
      ],
      nl: [
        'Online boekingskalender met conflictdetectie',
        'Geautomatiseerde e-mailbevestigingen en herinneringen',
        'Mobiel-eerst responsief ontwerp',
        'Eenvoudig admin dashboard voor afspraakbeheer'
      ]
    },
    results: {
      en: [
        '60% increase in online bookings',
        '40% reduction in phone call volume',
        '95% customer satisfaction with booking system',
        '3 hours saved per week on administration'
      ],
      nl: [
        '60% toename in online boekingen',
        '40% vermindering in telefoonvolume',
        '95% klanttevredenheid met boekingssysteem',
        '3 uur per week bespaard op administratie'
      ]
    },
    businessImpact: {
      en: 'Transformed manual booking process into automated system, allowing the barber to focus on customers instead of administration while increasing revenue through improved booking convenience.',
      nl: 'Transformeerde handmatig boekingsproces naar geautomatiseerd systeem, waardoor de kapper zich kon richten op klanten in plaats van administratie terwijl de omzet steeg door verbeterd boekingsgemak.'
    } as LocalizedContent,
    technicalDetails: {
      en: 'Built with modern React patterns, server-side rendering, type-safe database queries, and comprehensive error handling.',
      nl: 'Gebouwd met moderne React patronen, server-side rendering, type-veilige database queries, en uitgebreide error handling.'
    } as LocalizedContent
  },
  {
  id: 'empathys-website',
  title: {
    en: 'Empathys - Therapeutic Children\'s Services',
    nl: 'Empathys - Therapeutische Kinderdiensten'
  } as LocalizedContent,
  description: {
    en: 'Professional website for child therapy practice with e-commerce capabilities',
    nl: 'Professionele website voor kindertherapiepraktijk met e-commerce mogelijkheden'
  } as LocalizedContent,
  longDescription: {
    en: 'Comprehensive website for Empathys, featuring therapeutic services, online book sales, and course management system.',
    nl: 'Uitgebreide website voor Empathys, met therapeutische diensten, online boekenverkoop en cursusbeheersysteem.'
  } as LocalizedContent,
  freelanceDescription: {
    en: 'Built a comprehensive website for Empathys, a child therapy practice in Volendam. Features include therapeutic book sales, course registration, appointment booking, and educational content. The solution increased book sales by 150% and streamlined client intake processes.',
    nl: 'Bouwde een uitgebreide website voor Empathys, een kindertherapiepraktijk in Volendam. Functies omvatten therapeutische boekenverkoop, cursusregistratie, afspraak boeken en educatieve content. De oplossing verhoogde boekenverkoop met 150% en stroomlijnde cliënt intake processen.'
  } as LocalizedContent,
  professionalDescription: {
    en: 'Next.js application with Stripe integration, shopping cart functionality, and responsive design optimized for therapeutic content and e-commerce.',
    nl: 'Next.js applicatie met Stripe integratie, winkelwagen functionaliteit, en responsief ontwerp geoptimaliseerd voor therapeutische content en e-commerce.'
  } as LocalizedContent,
  technologies: [
    'Next.js', 
    'TypeScript', 
    createTech('Stripe', 'Betalingssysteem') as string, 
    createTech('Tailwind CSS', 'Styling Framework') as string, 
    'React', 
    createTech('Resend', 'E-mail Service') as string
  ],
  category: 'web',
  status: 'completed',
  liveUrl: 'https://empathys.nl',
  images: ['/projects/empathys/hero.png'],
  client: 'Empathys Child Therapy Practice',
  role: 'Full-Stack Developer',
  challenges: {
    en: [
      'Create professional therapy practice website',
      'Implement e-commerce for therapeutic books',
      'Build course registration system',
      'Integrate appointment scheduling'
    ],
    nl: [
      'Professionele therapiepraktijk website creëren',
      'E-commerce implementeren voor therapeutische boeken',
      'Cursusregistratiesysteem bouwen',
      'Afspraakplanning integreren'
    ]
  },
  solutions: {
    en: [
      'Modern, trustworthy design reflecting therapeutic values',
      'Integrated Stripe payment system',
      'Dynamic course content management',
      'Location-based shipping (free delivery in Volendam)'
    ],
    nl: [
      'Modern, betrouwbaar ontwerp dat therapeutische waarden weergeeft',
      'Geïntegreerd Stripe betalingssysteem',
      'Dynamisch cursuscontentbeheer',
      'Locatie-gebaseerde verzending (gratis bezorging in Volendam)'
    ]
  },
  results: {
    en: [
      '150% increase in therapeutic book sales',
      '75% of course registrations now online',
      '95% mobile user engagement',
      '60% reduction in administrative phone calls'
    ],
    nl: [
      '150% toename in therapeutische boekenverkoop',
      '75% van cursusregistraties nu online',
      '95% mobiele gebruikersbetrokkenheid',
      '60% vermindering in administratieve telefoontjes'
    ]
  },
  businessImpact: {
    en: 'Transformed traditional therapy practice into modern digital presence, enabling scalable service delivery and expanding reach beyond local area.',
    nl: 'Transformeerde traditionele therapiepraktijk naar moderne digitale aanwezigheid, waardoor schaalbare dienstverlening mogelijk werd en bereik uitbreidde buiten lokale gebied.'
  } as LocalizedContent,
  technicalDetails: {
    en: 'Implemented secure payment processing, cart persistence, email automation, and mobile-first responsive design with accessibility considerations.',
    nl: 'Implementeerde veilige betalingsverwerking, winkelwagen persistentie, e-mail automatisering, en mobile-first responsief ontwerp met toegankelijkheidsoverwegingen.'
  } as LocalizedContent
  },
  {
    id: 'business-automation',
    title: {
      en: 'Small Business Process Automation',
      nl: 'Kleine Bedrijf Procesautomatisering'
    } as LocalizedContent,
    description: {
      en: 'Custom automation solutions for local businesses to streamline operations',
      nl: 'Aangepaste automatiseringsoplossingen voor lokale bedrijven om operaties te stroomlijnen'
    } as LocalizedContent,
    longDescription: {
      en: 'Automated repetitive business processes for multiple small businesses using custom Python scripts and integrations.',
      nl: 'Geautomatiseerde repetitieve bedrijfsprocessen voor meerdere kleine bedrijven met aangepaste Python scripts en integraties.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'Helped 3 local businesses automate their manual processes. Created custom solutions for invoice generation, customer follow-ups, and inventory management. Saved each business 5-10 hours per week and reduced human errors by 90%.',
      nl: 'Hielp 3 lokale bedrijven hun handmatige processen automatiseren. Creëerde aangepaste oplossingen voor factuurgenerate, klant follow-ups, en voorraadbeher. Bespaarde elk bedrijf 5-10 uur per week en verminderde menselijke fouten met 90%.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'Python automation scripts with API integrations, automated email workflows, and custom business logic implementation.',
      nl: 'Python automatiseringsscripts met API integraties, geautomatiseerde e-mail workflows, en aangepaste bedrijfslogica implementatie.'
    } as LocalizedContent,
    technologies: [
      'Python', 
      createTech('APIs', 'API Integraties') as string, 
      createTech('Email Automation', 'E-mail Automatisering') as string, 
      createTech('CSV Processing', 'Bestandsverwerking') as string, 
      createTech('Scheduling', 'Taakplanning') as string
    ],
    category: 'automation',
    status: 'completed',
    images: ['/projects/automation/dashboard.jpg'],
    client: 'Multiple Small Businesses',
    role: 'Automation Consultant',
    challenges: {
      en: [
        'Manual, time-consuming processes',
        'Frequent human errors',
        'No technical expertise in-house',
        'Limited budget for solutions'
      ],
      nl: [
        'Handmatige, tijdrovende processen',
        'Frequente menselijke fouten',
        'Geen technische expertise in huis',
        'Beperkt budget voor oplossingen'
      ]
    },
    solutions: {
      en: [
        'Custom Python automation scripts',
        'Simple web interfaces for non-technical users',
        'Automated email and SMS notifications',
        'Cost-effective cloud deployment'
      ],
      nl: [
        'Aangepaste Python automatiseringsscripts',
        'Eenvoudige webinterfaces voor niet-technische gebruikers',
        'Geautomatiseerde e-mail en SMS notificaties',
        'Kosteneffectieve cloud deployment'
      ]
    },
    results: {
      en: [
        '5-10 hours saved per week per business',
        '90% reduction in manual errors',
        '100% client satisfaction',
        'ROI achieved within 2 months'
      ],
      nl: [
        '5-10 uur per week bespaard per bedrijf',
        '90% vermindering in handmatige fouten',
        '100% klanttevredenheid',
        'ROI behaald binnen 2 maanden'
      ]
    },
    businessImpact: {
      en: 'Enabled small businesses to scale operations without hiring additional staff, improving efficiency and reducing costs.',
      nl: 'Stelde kleine bedrijven in staat operaties op te schalen zonder extra personeel aan te nemen, verbeterde efficiëntie en verminderde kosten.'
    } as LocalizedContent,
    technicalDetails: {
      en: 'Developed modular Python scripts with error handling, logging, and easy configuration for non-technical users.',
      nl: 'Ontwikkelde modulaire Python scripts met error handling, logging, en eenvoudige configuratie voor niet-technische gebruikers.'
    } as LocalizedContent
  }
]

// TECHNICAL PROJECTS - For Professional Mode (Engineering-focused)
export const technicalProjects: Project[] = [
  {
    id: '3d-container-system',
    title: {
      en: '3D Container Loading Optimization System',
      nl: '3D Container Laad Optimalisatiesysteem'
    } as LocalizedContent,
    description: {
      en: 'Advanced Python application implementing 3D bin packing algorithms for logistics optimization',
      nl: 'Geavanceerde Python applicatie die 3D bin packing algoritmes implementeert voor logistieke optimalisatie'
    } as LocalizedContent,
    longDescription: {
      en: 'Complex 3D optimization system for maximizing container space utilization in industrial shipping and logistics operations.',
      nl: 'Complex 3D optimalisatiesysteem voor het maximaliseren van containerruimte-gebruik in industriële verzending en logistieke operaties.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'Custom automation solution that optimized shipping costs by 25% through intelligent 3D container packing algorithms.',
      nl: 'Aangepaste automatiseringsoplossing die verzendkosten met 25% optimaliseerde door intelligente 3D container packing algoritmes.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'Implemented advanced 3D bin packing algorithms with real-time visualization capabilities. Built using Python with custom mathematical optimization, REST API integration, and performance-optimized data structures. Achieved O(n log n) complexity for large dataset processing.',
      nl: 'Implementeerde geavanceerde 3D bin packing algoritmes met real-time visualisatiemogelijkheden. Gebouwd met Python met aangepaste wiskundige optimalisatie, REST API integratie, en prestatie-geoptimaliseerde datastructuren. Behaalde O(n log n) complexiteit voor grote dataset verwerking.'
    } as LocalizedContent,
    technologies: [
      'Python', 
      createTech('3D Algorithms', '3D Algoritmes') as string, 
      createTech('Mathematical Optimization', 'Wiskundige Optimalisatie') as string, 
      'REST API', 
      createTech('Data Visualization', 'Data Visualisatie') as string, 
      createTech('Performance Optimization', 'Prestatie Optimalisatie') as string
    ],
    category: 'automation',
    status: 'completed',
    images: ['/projects/container/3d-view.png'],
    client: 'Sonic Equipment B.V.',
    role: 'Data Solutions Engineer',
    challenges: {
      en: [
        'Complex 3D space optimization with irregular shapes',
        'Real-time calculation requirements for large datasets',
        'Integration with existing ERP systems',
        'Performance optimization for industrial-scale usage'
      ],
      nl: [
        'Complexe 3D ruimte optimalisatie met onregelmatige vormen',
        'Real-time berekeningsvereisten voor grote datasets',
        'Integratie met bestaande ERP systemen',
        'Prestatie optimalisatie voor industriële schaal gebruik'
      ]
    },
    solutions: {
      en: [
        'Implemented advanced bin packing algorithms (First Fit Decreasing, Best Fit)',
        'Created custom 3D visualization engine using Python libraries',
        'Built RESTful API with optimized data structures',
        'Developed efficient caching and memoization strategies'
      ],
      nl: [
        'Implementeerde geavanceerde bin packing algoritmes (First Fit Decreasing, Best Fit)',
        'Creëerde aangepaste 3D visualisatie engine met Python libraries',
        'Bouwde RESTful API met geoptimaliseerde datastructuren',
        'Ontwikkelde efficiënte caching en memoization strategieën'
      ]
    },
    results: {
      en: [
        '25% improvement in container space utilization',
        '15% reduction in shipping costs',
        '80% faster calculation times vs manual planning',
        'Successfully processed 1000+ containers daily'
      ],
      nl: [
        '25% verbetering in containerruimte-gebruik',
        '15% vermindering in verzendkosten',
        '80% snellere berekeningtijden vs handmatige planning',
        'Succesvol 1000+ containers dagelijks verwerkt'
      ]
    },
    businessImpact: {
      en: 'Significantly reduced shipping costs and improved logistics efficiency for industrial equipment transport.',
      nl: 'Aanzienlijk verminderde verzendkosten en verbeterde logistieke efficiëntie voor industriële apparatuur transport.'
    } as LocalizedContent,
    technicalDetails: {
      en: 'Utilized advanced mathematical algorithms, 3D geometric calculations, NumPy for matrix operations, and custom optimization heuristics. Implemented comprehensive unit testing and performance benchmarking.',
      nl: 'Gebruikte geavanceerde wiskundige algoritmes, 3D geometrische berekeningen, NumPy voor matrix operaties, en aangepaste optimalisatie heuristieken. Implementeerde uitgebreide unit testing en prestatie benchmarking.'
    } as LocalizedContent
  },
  {
    id: 'taskflow-distributed-queue',
    title: {
      en: 'TaskFlow - Distributed Task Queue System',
      nl: 'TaskFlow - Gedistribueerd Taak Queue Systeem'
    } as LocalizedContent,
    description: {
      en: 'High-performance distributed task processing system with Redis queuing and PostgreSQL persistence',
      nl: 'Hoogperformante gedistribueerde taakverwerking systeem met Redis queuing en PostgreSQL persistentie'
    } as LocalizedContent,
    longDescription: {
      en: 'Production-ready distributed task queue system built with Go, featuring horizontal scaling, automatic retries, real-time monitoring, and comprehensive observability.',
      nl: 'Productie-klare gedistribueerde taak queue systeem gebouwd met Go, met horizontale schaalbaarheid, automatische retries, real-time monitoring, en uitgebreide observability.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'Scalable background job processing solution enabling asynchronous task execution with 99.5% reliability and sub-100ms latency.',
      nl: 'Schaalbare achtergrond job verwerking oplossing die asynchrone taak uitvoering mogelijk maakt met 99.5% betrouwbaarheid en sub-100ms latentie.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'Built enterprise-grade task queue system using Go, Redis, and PostgreSQL. Implemented concurrent worker pools, atomic job state management, Prometheus metrics, and comprehensive testing. Handles 1,200+ jobs/minute with horizontal scaling capabilities.',
      nl: 'Bouwde enterprise-grade taak queue systeem met Go, Redis, en PostgreSQL. Implementeerde concurrent worker pools, atomaire job state management, Prometheus metrics, en uitgebreide testing. Verwerkt 1.200+ jobs/minuut met horizontale schaalbaarheid.'
    } as LocalizedContent,
    technologies: [
      'Go',
      'Redis', 
      'PostgreSQL',
      'Docker',
      'Prometheus',
      'GitHub Actions',
      createTech('Distributed Systems', 'Gedistribueerde Systemen') as string,
      createTech('Microservices', 'Microservices') as string
    ],
    category: 'backend',
    status: 'completed',
    githubUrl: 'https://github.com/lucakeizer/taskflow',
    images: ['/projects/taskflow/architecture.jpg'],
    client: 'Personal Project',
    role: 'Backend Engineer',
    challenges: {
      en: [
        'Ensuring atomic job state transitions across distributed workers',
        'Implementing efficient job queuing with Redis at scale',
        'Building robust retry mechanisms with exponential backoff',
        'Creating comprehensive monitoring and observability'
      ],
      nl: [
        'Zorgen voor atomaire job state transities over gedistribueerde workers',
        'Implementeren van efficiënte job queuing met Redis op schaal',
        'Bouwen van robuuste retry mechanismen met exponential backoff',
        'Creëren van uitgebreide monitoring en observability'
      ]
    },
    solutions: {
      en: [
        'Implemented Redis pipeline operations for atomic job transitions',
        'Built concurrent worker pools with goroutines and channels',
        'Created pluggable job processor architecture',
        'Added Prometheus metrics and structured logging'
      ],
      nl: [
        'Implementeerde Redis pipeline operaties voor atomaire job transities',
        'Bouwde concurrent worker pools met goroutines en channels',
        'Creëerde pluggable job processor architectuur',
        'Voegde Prometheus metrics en gestructureerde logging toe'
      ]
    },
    results: {
      en: [
        '1,200+ jobs processed per minute on modest hardware',
        '99.5% job completion reliability with automatic retries',
        'Sub-100ms average job pickup latency',
        'Horizontal scaling with multiple worker instances'
      ],
      nl: [
        '1.200+ jobs verwerkt per minuut op bescheiden hardware',
        '99.5% job voltooiing betrouwbaarheid met automatische retries',
        'Sub-100ms gemiddelde job pickup latentie',
        'Horizontale schaalbaarheid met meerdere worker instanties'
      ]
    },
    businessImpact: {
      en: 'Enables reliable asynchronous processing for high-throughput applications, reducing system coupling and improving user experience.',
      nl: 'Maakt betrouwbare asynchrone verwerking mogelijk voor high-throughput applicaties, vermindert systeem koppeling en verbetert gebruikerservaring.'
    } as LocalizedContent,
    technicalDetails: {
      en: 'Built with Go using Redis for job queuing and PostgreSQL for persistence. Features include atomic job state management, concurrent processing with worker pools, comprehensive testing with 95%+ coverage, CI/CD pipeline with GitHub Actions, and production-ready monitoring.',
      nl: 'Gebouwd met Go met Redis voor job queuing en PostgreSQL voor persistentie. Features omvatten atomaire job state management, concurrent verwerking met worker pools, uitgebreide testing met 95%+ coverage, CI/CD pipeline met GitHub Actions, en productie-klare monitoring.'
    } as LocalizedContent
  },
  {
    id: 'nutriparse-app',
    title: {
      en: 'NutriParse Recipe Analyzer',
      nl: 'NutriParse Recept Analyzer'
    } as LocalizedContent,
    description: {
      en: 'AI-powered web application that transforms recipe text into detailed nutritional information',
      nl: 'AI-gedreven webapplicatie die recepttekst omzet naar gedetailleerde voedingswaarde informatie'
    } as LocalizedContent,
    longDescription: {
      en: 'Full-stack web application using React, Django, and Natural Language Processing to parse recipe text and calculate comprehensive nutritional information.',
      nl: 'Full-stack webapplicatie met React, Django, en Natural Language Processing om recepttekst te parseren en uitgebreide voedingswaarde informatie te berekenen.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'Advanced recipe parsing application demonstrating full-stack development and NLP integration capabilities.',
      nl: 'Geavanceerde recept parsing applicatie die full-stack ontwikkeling en NLP integratie mogelijkheden demonstreert.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'Developed comprehensive recipe analysis platform using React with TypeScript, Django REST Framework, and spaCy NLP. Implemented intelligent ingredient parsing, nutrition database integration, and interactive data visualization. Built robust authentication system and responsive UI components.',
      nl: 'Ontwikkelde uitgebreid recept analyse platform met React met TypeScript, Django REST Framework, en spaCy NLP. Implementeerde intelligente ingrediënt parsing, voedingswaarde database integratie, en interactieve data visualisatie. Bouwde robuust authenticatie systeem en responsieve UI componenten.'
    } as LocalizedContent,
    technologies: [
      'React', 
      'TypeScript', 
      'Django', 
      'Django REST Framework', 
      'PostgreSQL', 
      'spaCy', 
      'Material-UI', 
      createTech('Natural Language Processing', 'Natural Language Processing') as string, 
      createTech('Chart.js', 'Chart.js') as string
    ],
    category: 'automation',
    status: 'completed',
    githubUrl: 'https://github.com/LucaKeizer/nutriparse',
    images: ['/projects/nutriparse/parser.jpg'],
    client: 'Personal Project',
    role: 'Full-Stack Developer',
    challenges: {
      en: [
        'Complex NLP parsing of unstructured recipe text',
        'Accurate ingredient matching to nutrition database',
        'Unit conversion between different measurement systems',
        'Real-time nutrition calculation and visualization'
      ],
      nl: [
        'Complexe NLP parsing van ongestructureerde recepttekst',
        'Accurate ingrediënt matching naar voedingswaarde database',
        'Eenheid conversie tussen verschillende meetsystemen',
        'Real-time voedingswaarde berekening en visualisatie'
      ]
    },
    solutions: {
      en: [
        'Built advanced NLP pipeline using spaCy for ingredient extraction',
        'Created comprehensive nutrition database with fuzzy matching',
        'Developed robust unit conversion system with measurement standardization',
        'Implemented interactive charts and responsive data visualization'
      ],
      nl: [
        'Bouwde geavanceerde NLP pipeline met spaCy voor ingrediënt extractie',
        'Creëerde uitgebreide voedingswaarde database met fuzzy matching',
        'Ontwikkelde robuust eenheid conversie systeem met meting standaardisatie',
        'Implementeerde interactieve grafieken en responsieve data visualisatie'
      ]
    },
    results: {
      en: [
        '95%+ ingredient parsing accuracy achieved',
        'Comprehensive nutrition analysis for 1000+ food items',
        'Sub-second recipe processing time',
        'Fully responsive design across all devices'
      ],
      nl: [
        '95%+ ingrediënt parsing accuratesse behaald',
        'Uitgebreide voedingswaarde analyse voor 1000+ voedingsproducten',
        'Sub-seconde recept verwerkingstijd',
        'Volledig responsief ontwerp op alle apparaten'
      ]
    },
    businessImpact: {
      en: 'Demonstrates advanced full-stack development skills with cutting-edge NLP integration, showcasing ability to build complex data processing applications.',
      nl: 'Demonstreert geavanceerde full-stack ontwikkeling vaardigheden met cutting-edge NLP integratie, toont vermogen om complexe data verwerkings applicaties te bouwen.'
    } as LocalizedContent,
    technicalDetails: {
      en: 'Advanced TypeScript React frontend with Material-UI, Django backend with REST API, PostgreSQL database design, spaCy NLP integration, comprehensive testing strategy, and Docker containerization.',
      nl: 'Geavanceerde TypeScript React frontend met Material-UI, Django backend met REST API, PostgreSQL database ontwerp, spaCy NLP integratie, uitgebreide test strategie, en Docker containerisatie.'
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

// LEGACY: Keep for backward compatibility, but will be replaced
export const projects = [...clientProjects, ...technicalProjects]
export const featuredProjects = [...clientProjects.slice(0, 2), ...technicalProjects.slice(0, 1)]