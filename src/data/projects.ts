import type { Project, LocalizedContent } from '@/types'

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
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Resend API', 'Vercel'],
    category: 'web',
    status: 'completed',
    startDate: new Date('2024-10-01'),
    endDate: new Date('2024-11-15'),
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
    id: 'restaurant-website',
    title: {
      en: 'Local Restaurant - Menu & Ordering System',
      nl: 'Lokaal Restaurant - Menu & Bestelsysteem'
    } as LocalizedContent,
    description: {
      en: 'Modern restaurant website with online menu and ordering capabilities',
      nl: 'Moderne restaurantwebsite met online menu en bestelmogelijkheden'
    } as LocalizedContent,
    longDescription: {
      en: 'Professional website for a local restaurant featuring digital menu, online ordering, and table reservation system.',
      nl: 'Professionele website voor een lokaal restaurant met digitaal menu, online bestellen en tafelreserveringssysteem.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'Built a modern website for a family restaurant in North Holland. Features include interactive digital menu, online ordering system, table reservations, and customer reviews. The solution increased online orders by 80% and improved customer experience significantly.',
      nl: 'Bouwde een moderne website voor een familierestaurant in Noord-Holland. Functies omvatten interactief digitaal menu, online bestelsysteem, tafelreserveringen en klantbeoordelingen. De oplossing verhoogde online bestellingen met 80% en verbeterde de klantervaring aanzienlijk.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'React-based web application with Stripe payment integration, real-time order management, and responsive design optimized for mobile ordering.',
      nl: 'React-gebaseerde webapplicatie met Stripe betalingsintegratie, real-time orderbeheer, en responsief ontwerp geoptimaliseerd voor mobiel bestellen.'
    } as LocalizedContent,
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Express', 'Socket.io'],
    category: 'web',
    status: 'completed',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-08-30'),
    liveUrl: 'https://restaurant-demo.vercel.app',
    images: ['/projects/restaurant/hero.jpg', '/projects/restaurant/menu.jpg'],
    client: 'Local Family Restaurant',
    role: 'Web Developer',
    challenges: {
      en: [
        'Replace outdated website',
        'Enable online ordering',
        'Mobile-friendly menu browsing',
        'Payment processing integration'
      ],
      nl: [
        'Vervang verouderde website',
        'Online bestellen mogelijk maken',
        'Mobiel-vriendelijk menu browsen',
        'Betalingsverwerking integratie'
      ]
    },
    solutions: {
      en: [
        'Modern responsive website design',
        'Stripe payment integration',
        'Real-time order tracking',
        'Mobile-optimized user experience'
      ],
      nl: [
        'Modern responsief website ontwerp',
        'Stripe betalingsintegratie',
        'Real-time order tracking',
        'Mobiel-geoptimaliseerde gebruikerservaring'
      ]
    },
    results: {
      en: [
        '80% increase in online orders',
        '50% reduction in phone orders',
        '90% mobile user satisfaction',
        'Average order value increased by 25%'
      ],
      nl: [
        '80% toename in online bestellingen',
        '50% vermindering in telefoonbestellingen',
        '90% mobiele gebruikerstevredenheid',
        'Gemiddelde bestelwaarde steeg met 25%'
      ]
    },
    businessImpact: {
      en: 'Modernized restaurant\'s digital presence and enabled contactless ordering, crucial during post-pandemic recovery.',
      nl: 'Moderniseerde digitale aanwezigheid van restaurant en maakte contactloos bestellen mogelijk, cruciaal tijdens post-pandemie herstel.'
    } as LocalizedContent,
    technicalDetails: {
      en: 'Implemented real-time order processing, secure payment handling, and optimized performance for mobile devices.',
      nl: 'Implementeerde real-time orderverwerking, veilige betalingsafhandeling, en geoptimaliseerde prestaties voor mobiele apparaten.'
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
    technologies: ['Python', 'APIs', 'Email Automation', 'CSV Processing', 'Scheduling'],
    category: 'automation',
    status: 'completed',
    startDate: new Date('2024-05-01'),
    endDate: new Date('2024-09-30'),
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
    technologies: ['Python', '3D Algorithms', 'Mathematical Optimization', 'REST API', 'Data Visualization', 'Performance Optimization'],
    category: 'automation',
    status: 'completed',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2024-01-31'),
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
    id: 'ml-data-pipeline',
    title: {
      en: 'Machine Learning Data Analysis Pipeline',
      nl: 'Machine Learning Data Analyse Pipeline'
    } as LocalizedContent,
    description: {
      en: 'Automated data processing pipeline with ML predictions and real-time analytics',
      nl: 'Geautomatiseerde gegevensverwerkingspipeline met ML voorspellingen en real-time analytics'
    } as LocalizedContent,
    longDescription: {
      en: 'End-to-end machine learning pipeline for processing industrial sensor data, generating predictions, and providing real-time business insights.',
      nl: 'End-to-end machine learning pipeline voor het verwerken van industriële sensorgegevens, het genereren van voorspellingen, en het verstrekken van real-time bedrijfsinzichten.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'Business intelligence solution providing automated reports and insights, reducing manual analysis time by 70%.',
      nl: 'Business intelligence oplossing die geautomatiseerde rapporten en inzichten biedt, verminderde handmatige analysetijd met 70%.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'Built scalable ML pipeline using Python, scikit-learn, and Azure Functions. Implemented automated feature engineering, model training/validation, and real-time prediction serving. Achieved 95% accuracy in predictive maintenance models.',
      nl: 'Bouwde schaalbare ML pipeline met Python, scikit-learn, en Azure Functions. Implementeerde geautomatiseerde feature engineering, model training/validatie, en real-time voorspelling serving. Behaalde 95% nauwkeurigheid in predictive maintenance modellen.'
    } as LocalizedContent,
    technologies: ['Python', 'Machine Learning', 'scikit-learn', 'Azure Functions', 'Pandas', 'NumPy', 'Real-time Processing'],
    category: 'data',
    status: 'completed',
    startDate: new Date('2023-08-01'),
    endDate: new Date('2024-06-30'),
    githubUrl: 'https://github.com/lucakeizer/ml-data-pipeline',
    images: ['/projects/ml-pipeline/architecture.jpg', '/projects/ml-pipeline/dashboard.jpg'],
    client: 'Sonic Equipment B.V.',
    role: 'Data Solutions Engineer',
    challenges: {
      en: [
        'Processing high-volume sensor data in real-time',
        'Building robust ML models for industrial environments',
        'Automated model retraining and deployment',
        'Integration with existing monitoring systems'
      ],
      nl: [
        'Verwerken van hoog-volume sensorgegevens in real-time',
        'Bouwen van robuuste ML modellen voor industriële omgevingen',
        'Geautomatiseerde model hertraining en deployment',
        'Integratie met bestaande monitoring systemen'
      ]
    },
    solutions: {
      en: [
        'Implemented serverless architecture with Azure Functions',
        'Created automated feature engineering pipeline',
        'Built CI/CD pipeline for model deployment',
        'Developed real-time monitoring and alerting system'
      ],
      nl: [
        'Implementeerde serverless architectuur met Azure Functions',
        'Creëerde geautomatiseerde feature engineering pipeline',
        'Bouwde CI/CD pipeline voor model deployment',
        'Ontwikkelde real-time monitoring en alerting systeem'
      ]
    },
    results: {
      en: [
        '95% accuracy in predictive maintenance models',
        '70% reduction in manual data analysis time',
        'Real-time processing of 10,000+ data points per hour',
        'Prevented 12 equipment failures through early detection'
      ],
      nl: [
        '95% nauwkeurigheid in predictive maintenance modellen',
        '70% vermindering in handmatige data analyse tijd',
        'Real-time verwerking van 10.000+ datapunten per uur',
        'Voorkwam 12 apparatuur storingen door vroege detectie'
      ]
    },
    businessImpact: {
      en: 'Transformed reactive maintenance to predictive maintenance, reducing downtime and maintenance costs.',
      nl: 'Transformeerde reactief onderhoud naar predictief onderhoud, verminderde downtime en onderhoudskosten.'
    } as LocalizedContent,
    technicalDetails: {
      en: 'Microservices architecture with containerized ML models, event-driven processing, comprehensive logging and monitoring, and automated model versioning.',
      nl: 'Microservices architectuur met gecontaineriseerde ML modellen, event-driven processing, uitgebreide logging en monitoring, en geautomatiseerde model versioning.'
    } as LocalizedContent
  },
  {
    id: 'cad-automation-suite',
    title: {
      en: 'CAD Automation Framework',
      nl: 'CAD Automatisering Framework'
    } as LocalizedContent,
    description: {
      en: 'Comprehensive automation framework for electrical engineering CAD workflows',
      nl: 'Uitgebreid automatiseringsframework voor elektrotechnische CAD workflows'
    } as LocalizedContent,
    longDescription: {
      en: 'Advanced automation suite for Revit and Dynamo workflows, featuring 50+ custom scripts and tools for electrical engineering teams.',
      nl: 'Geavanceerde automatiseringssuite voor Revit en Dynamo workflows, met 50+ aangepaste scripts en tools voor elektrotechnische teams.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'Custom automation solution that saved 10+ hours per project for electrical engineering team.',
      nl: 'Aangepaste automatiseringsoplossing die 10+ uur per project bespaarde voor elektrotechnisch team.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'Developed comprehensive automation framework using Python, C#, and Revit API. Created custom Dynamo nodes, automated drawing generation, and implemented robust error handling. Built testing framework for CAD script reliability.',
      nl: 'Ontwikkelde uitgebreid automatiseringsframework met Python, C#, en Revit API. Creëerde aangepaste Dynamo nodes, geautomatiseerde tekening generatie, en implementeerde robuuste error handling. Bouwde test framework voor CAD script betrouwbaarheid.'
    } as LocalizedContent,
    technologies: ['Python', 'C#', 'Revit API', 'Dynamo', '.NET Framework', 'CAD Integration', 'Automated Testing'],
    category: 'automation',
    status: 'completed',
    startDate: new Date('2022-04-01'),
    endDate: new Date('2022-08-31'),
    githubUrl: 'https://github.com/lucakeizer/cad-automation',
    images: ['/projects/cad-automation/dynamo.jpg', '/projects/cad-automation/revit.jpg'],
    client: 'Smit Elektra',
    role: 'Software Developer Intern',
    challenges: {
      en: [
        'Complex CAD software API integration',
        'Maintaining script reliability across software versions',
        'Creating user-friendly interfaces for non-programmers',
        'Performance optimization for large CAD models'
      ],
      nl: [
        'Complexe CAD software API integratie',
        'Behouden van script betrouwbaarheid over software versies',
        'Creëren van gebruiksvriendelijke interfaces voor niet-programmeurs',
        'Prestatie optimalisatie voor grote CAD modellen'
      ]
    },
    solutions: {
      en: [
        'Built robust error handling and logging system',
        'Created comprehensive unit and integration testing suite',
        'Developed intuitive GUI interfaces using WPF',
        'Implemented efficient algorithms for large dataset processing'
      ],
      nl: [
        'Bouwde robuust error handling en logging systeem',
        'Creëerde uitgebreide unit en integratie test suite',
        'Ontwikkelde intuïtieve GUI interfaces met WPF',
        'Implementeerde efficiënte algoritmes voor grote dataset verwerking'
      ]
    },
    results: {
      en: [
        '10+ hours saved per project (50+ scripts deployed)',
        '90% reduction in manual CAD work',
        'Zero critical errors in production environment',
        '100% team adoption rate'
      ],
      nl: [
        '10+ uur bespaard per project (50+ scripts gedeployed)',
        '90% vermindering in handmatig CAD werk',
        'Nul kritieke fouten in productie omgeving',
        '100% team adoptie rate'
      ]
    },
    businessImpact: {
      en: 'Dramatically improved productivity for electrical engineering team, allowing focus on design rather than repetitive tasks.',
      nl: 'Dramatisch verbeterde productiviteit voor elektrotechnisch team, waardoor focus op ontwerp mogelijk werd in plaats van repetitieve taken.'
    } as LocalizedContent,
    technicalDetails: {
      en: 'Deep integration with Revit and Dynamo APIs, custom node development, comprehensive error handling, automated testing framework, and version control integration.',
      nl: 'Diepe integratie met Revit en Dynamo APIs, aangepaste node ontwikkeling, uitgebreide error handling, geautomatiseerd test framework, en version control integratie.'
    } as LocalizedContent
  },
  {
    id: 'distributed-system',
    title: {
      en: 'Distributed Computing Framework',
      nl: 'Gedistribueerd Computing Framework'
    } as LocalizedContent,
    description: {
      en: 'Scalable distributed system for parallel data processing and analysis',
      nl: 'Schaalbaar gedistribueerd systeem voor parallelle gegevensverwerking en analyse'
    } as LocalizedContent,
    longDescription: {
      en: 'Custom distributed computing framework built with Go and Docker for processing large-scale datasets across multiple nodes.',
      nl: 'Aangepast gedistribueerd computing framework gebouwd met Go en Docker voor het verwerken van grootschalige datasets over meerdere nodes.'
    } as LocalizedContent,
    freelanceDescription: {
      en: 'High-performance system for processing large datasets efficiently.',
      nl: 'High-performance systeem voor het efficiënt verwerken van grote datasets.'
    } as LocalizedContent,
    professionalDescription: {
      en: 'Built from scratch using Go and Docker, implementing distributed task scheduling, fault tolerance, and automatic load balancing. Designed for horizontal scaling and achieved 10x performance improvement over single-node processing.',
      nl: 'Vanaf nul gebouwd met Go en Docker, implementeerde gedistribueerde taak scheduling, fault tolerance, en automatische load balancing. Ontworpen voor horizontale schaling en behaalde 10x prestatie verbetering over single-node verwerking.'
    } as LocalizedContent,
    technologies: ['Go', 'Docker', 'Kubernetes', 'Distributed Systems', 'Message Queues', 'Load Balancing'],
    category: 'automation',
    status: 'completed',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-05-31'),
    githubUrl: 'https://github.com/lucakeizer/distributed-framework',
    images: ['/projects/distributed/architecture.jpg', '/projects/distributed/monitoring.jpg'],
    client: 'Personal Project',
    role: 'Software Engineer',
    challenges: {
      en: [
        'Designing fault-tolerant distributed architecture',
        'Implementing efficient task scheduling algorithms',
        'Managing inter-node communication and state synchronization',
        'Optimizing performance for different workload types'
      ],
      nl: [
        'Ontwerpen van fault-tolerante gedistribueerde architectuur',
        'Implementeren van efficiënte taak scheduling algoritmes',
        'Beheren van inter-node communicatie en state synchronisatie',
        'Optimaliseren van prestaties voor verschillende workload types'
      ]
    },
    solutions: {
      en: [
        'Implemented consensus algorithm for distributed coordination',
        'Built custom message queue system for reliable communication',
        'Created dynamic load balancing with health checking',
        'Developed comprehensive monitoring and alerting system'
      ],
      nl: [
        'Implementeerde consensus algoritme voor gedistribueerde coördinatie',
        'Bouwde aangepast message queue systeem voor betrouwbare communicatie',
        'Creëerde dynamische load balancing met health checking',
        'Ontwikkelde uitgebreid monitoring en alerting systeem'
      ]
    },
    results: {
      en: [
        '10x performance improvement over single-node processing',
        '99.9% system uptime with automatic failover',
        'Linear scaling performance up to 20 nodes',
        'Processed 1TB+ datasets efficiently'
      ],
      nl: [
        '10x prestatie verbetering over single-node verwerking',
        '99.9% systeem uptime met automatische failover',
        'Lineaire schaling prestaties tot 20 nodes',
        'Verwerkte 1TB+ datasets efficiënt'
      ]
    },
    businessImpact: {
      en: 'Demonstrated ability to design and implement complex distributed systems for enterprise-scale data processing.',
      nl: 'Toonde het vermogen aan om complexe gedistribueerde systemen te ontwerpen en implementeren voor enterprise-schaal gegevensverwerking.'
    } as LocalizedContent,
    technicalDetails: {
      en: 'Implemented using Go for performance, containerized with Docker, orchestrated with Kubernetes, featuring custom consensus algorithms and comprehensive observability.',
      nl: 'Geïmplementeerd met Go voor prestaties, gecontaineriseerd met Docker, georkestreerd met Kubernetes, met aangepaste consensus algoritmes en uitgebreide observeerbaarheid.'
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