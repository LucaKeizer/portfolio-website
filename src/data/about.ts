import type { LocalizedContent } from '@/types'

// FREELANCE ABOUT - For potential clients (barbers, restaurants, small businesses)
export const freelanceAbout = {
  title: {
    en: 'Your Custom Web Development Partner in North Holland',
    nl: 'Jouw Custom Webontwikkelingspartner in Noord-Holland'
  } as LocalizedContent,
  
  bio: {
    en: 'I help local businesses in North Holland establish a strong online presence with professional custom-coded websites. With a background in professional software engineering, I bring enterprise-level quality to small business solutions.',
    nl: 'Ik help lokale bedrijven in Noord-Holland een sterke online aanwezigheid op te bouwen met professionele custom-gecodeerde websites. Met een achtergrond in professionele software engineering breng ik enterprise-level kwaliteit naar kleine bedrijfsoplossingen.'
  } as LocalizedContent,

  secondParagraph: {
    en: 'Every business is unique, which is why I build every website from scratch using modern programming languages like React and TypeScript - the same technologies used by companies like Netflix and Facebook. No templates, just fast, secure, custom-coded websites.',
    nl: 'Elk bedrijf is uniek, daarom bouw ik elke website vanaf nul met moderne programmeertalen zoals React en TypeScript - dezelfde technologieën gebruikt door bedrijven zoals Netflix en Facebook. Geen templates, alleen snelle, veilige, custom-gecodeerde websites.'
  } as LocalizedContent,

  businessFacts: [
    {
      label: { en: 'Based in', nl: 'Gevestigd in' } as LocalizedContent,
      value: { en: 'Volendam, Netherlands', nl: 'Volendam, Nederland' } as LocalizedContent,
      icon: 'MapPin'
    },
    {
      label: { en: 'Development Method', nl: 'Ontwikkelmethode' } as LocalizedContent,
      value: { en: 'Custom-coded from scratch', nl: 'Custom-gecodeerd vanaf nul' } as LocalizedContent,
      icon: 'Building'
    },
    {
      label: { en: 'Experience', nl: 'Ervaring' } as LocalizedContent,
      value: { en: '2+ years professional software engineering', nl: '2+ jaar professionele software engineering' } as LocalizedContent,
      icon: 'Calendar'
    },
    {
      label: { en: 'Response Time', nl: 'Reactietijd' } as LocalizedContent,
      value: { en: 'Usually within 24 hours', nl: 'Meestal binnen 24 uur' } as LocalizedContent,
      icon: 'Clock'
    }
  ],

  businessSkills: [
    {
      category: {
        en: 'Custom Websites I Build',
        nl: 'Custom Websites Die Ik Bouw'
      } as LocalizedContent,
      skills: [
        { 
          name: { en: 'Hand-Coded Business Websites', nl: 'Handgecodeerde Bedrijfswebsites' } as LocalizedContent, 
          description: { en: 'Professional sites built from scratch with modern technologies', nl: 'Professionele sites vanaf nul gebouwd met moderne technologieën' } as LocalizedContent 
        },
        { 
          name: { en: 'Custom Booking Systems', nl: 'Custom Boekingssystemen' } as LocalizedContent, 
          description: { en: 'Let customers book appointments 24/7 with custom-built systems', nl: 'Laat klanten 24/7 afspraken boeken met custom-gebouwde systemen' } as LocalizedContent 
        },
        { 
          name: { en: 'Custom E-commerce Solutions', nl: 'Custom E-commerce Oplossingen' } as LocalizedContent, 
          description: { en: 'Sell products online with fast, secure custom stores', nl: 'Verkoop producten online met snelle, veilige custom winkels' } as LocalizedContent 
        },
        { 
          name: { en: 'Restaurant Ordering Systems', nl: 'Restaurant Bestelsystemen' } as LocalizedContent, 
          description: { en: 'Custom-coded digital menus with online ordering capabilities', nl: 'Custom-gecodeerde digitale menu\'s met online bestelmogelijkheden' } as LocalizedContent 
        }
      ]
    },
    {
      category: {
        en: 'Why Custom Development',
        nl: 'Waarom Custom Ontwikkeling'
      } as LocalizedContent,
      skills: [
        { 
          name: { en: 'Lightning Fast Speed', nl: 'Bliksem Snelle Snelheid' } as LocalizedContent, 
          description: { en: 'Custom code loads much faster than template-based solutions', nl: 'Custom code laadt veel sneller dan template-gebaseerde oplossingen' } as LocalizedContent 
        },
        { 
          name: { en: 'Maximum Security', nl: 'Maximale Veiligheid' } as LocalizedContent, 
          description: { en: 'Custom-built sites are much more secure than popular platforms', nl: 'Custom-gebouwde sites zijn veel veiliger dan populaire platforms' } as LocalizedContent 
        },
        { 
          name: { en: 'Perfect for Your Business', nl: 'Perfect Voor Je Bedrijf' } as LocalizedContent, 
          description: { en: 'Built exactly for your needs, not forced into a template', nl: 'Gebouwd precies voor jouw behoeften, niet gedwongen in een template' } as LocalizedContent 
        },
        { 
          name: { en: 'Future-Proof Technology', nl: 'Toekomstbestendige Technologie' } as LocalizedContent, 
          description: { en: 'Built with React/TypeScript - same tech as Netflix, Facebook, Airbnb', nl: 'Gebouwd met React/TypeScript - dezelfde tech als Netflix, Facebook, Airbnb' } as LocalizedContent 
        }
      ]
    }
  ],

  whyChooseMe: [
    {
      title: { en: 'Local & Reliable', nl: 'Lokaal & Betrouwbaar' } as LocalizedContent,
      description: { en: 'Based in Volendam, I understand North Holland businesses and provide ongoing support.', nl: 'Gevestigd in Volendam, ik begrijp Noord-Holland bedrijven en bied doorlopende ondersteuning.' } as LocalizedContent
    },
    {
      title: { en: 'Real Developer Quality', nl: 'Echte Developer Kwaliteit' } as LocalizedContent,
      description: { en: 'Professional software engineer with 2+ years experience building enterprise-level applications.', nl: 'Professionele software engineer met 2+ jaar ervaring in het bouwen van enterprise-level applicaties.' } as LocalizedContent
    },
    {
      title: { en: 'Custom-Built Solutions', nl: 'Custom-Gebouwde Oplossingen' } as LocalizedContent,
      description: { en: 'Hand-coded from scratch means your website does exactly what you need, fast and secure.', nl: 'Handgecodeerd vanaf nul betekent dat je website precies doet wat je nodig hebt, snel en veilig.' } as LocalizedContent
    },
    {
      title: { en: 'Unbeatable Portfolio Prices', nl: 'Onverslaanbare Portfolio Prijzen' } as LocalizedContent,
      description: { en: 'Professional quality at incredible prices while I build my freelance portfolio.', nl: 'Professionele kwaliteit tegen ongelooflijke prijzen terwijl ik mijn freelance portfolio opbouw.' } as LocalizedContent
    }
  ]
}

// PROFESSIONAL ABOUT - For recruiters and potential employers
export const professionalAbout = {
  title: {
    en: 'Software Engineer & Full-Stack Developer',
    nl: 'Software Engineer & Full-Stack Developer'
  } as LocalizedContent,
  
  bio: {
    en: 'Passionate software engineer with 2+ years of professional experience in full-stack development, data analysis, and modern cloud technologies. I specialize in building scalable, efficient solutions using Python, TypeScript, and Azure.',
    nl: 'Gepassioneerde software engineer met 2+ jaar professionele ervaring in full-stack ontwikkeling, data-analyse en moderne cloud technologieën. Ik specialiseer me in het bouwen van schaalbare, efficiënte oplossingen met Python, TypeScript en Azure.'
  } as LocalizedContent,

  secondParagraph: {
    en: 'My experience spans from automating complex industrial workflows to building modern web applications. I thrive on solving challenging technical problems and have a proven track record of delivering high-impact solutions in fast-paced environments.',
    nl: 'Mijn ervaring strekt zich uit van het automatiseren van complexe industriële workflows tot het bouwen van moderne webapplicaties. Ik floreer bij het oplossen van uitdagende technische problemen en heb een bewezen track record van het leveren van high-impact oplossingen in snelle omgevingen.'
  } as LocalizedContent,

  professionalFacts: [
    {
      label: { en: 'Current Role', nl: 'Huidige Rol' } as LocalizedContent,
      value: { en: 'Data Solutions Engineer', nl: 'Data Solutions Engineer' } as LocalizedContent,
      icon: 'Briefcase'
    },
    {
      label: { en: 'Experience', nl: 'Ervaring' } as LocalizedContent,
      value: { en: '2+ years professional', nl: '2+ jaar professioneel' } as LocalizedContent,
      icon: 'Calendar'
    },
    {
      label: { en: 'Education', nl: 'Opleiding' } as LocalizedContent,
      value: { en: 'VWO + Japan Study Abroad', nl: 'VWO + Japan Studie in Buitenland' } as LocalizedContent,
      icon: 'GraduationCap'
    },
    {
      label: { en: 'Languages', nl: 'Talen' } as LocalizedContent,
      value: { en: 'Dutch, English, German, Japanese', nl: 'Nederlands, Engels, Duits, Japans' } as LocalizedContent,
      icon: 'Languages'
    }
  ],

  technicalSkills: [
    {
      category: {
        en: 'Backend & Data',
        nl: 'Backend & Data'
      } as LocalizedContent,
      skills: [
        { 
          name: 'Python', 
          level: 'expert', 
          years: 3, 
          description: {
            en: 'Main language for automation, data analysis, and backend development',
            nl: 'Hoofdtaal voor automatisering, data-analyse en backend ontwikkeling'
          } as LocalizedContent
        },
        { 
          name: 'Go', 
          level: 'intermediate', 
          years: 1, 
          description: {
            en: 'Used for high-performance distributed systems',
            nl: 'Gebruikt voor high-performance gedistribueerde systemen'
          } as LocalizedContent
        },
        { 
          name: 'Machine Learning', 
          level: 'intermediate', 
          years: 1, 
          description: {
            en: 'scikit-learn, pandas, data pipeline development',
            nl: 'scikit-learn, pandas, data pipeline ontwikkeling'
          } as LocalizedContent
        },
        { 
          name: 'SQL', 
          level: 'advanced', 
          years: 2, 
          description: {
            en: 'PostgreSQL, MySQL, complex query optimization',
            nl: 'PostgreSQL, MySQL, complexe query optimalisatie'
          } as LocalizedContent
        }
      ]
    },
    {
      category: {
        en: 'Frontend & Web',
        nl: 'Frontend & Web'
      } as LocalizedContent,
      skills: [
        { 
          name: 'TypeScript', 
          level: 'advanced', 
          years: 2, 
          description: {
            en: 'Type-safe application development',
            nl: 'Type-veilige applicatie ontwikkeling'
          } as LocalizedContent
        },
        { 
          name: 'React/Next.js', 
          level: 'advanced', 
          years: 2, 
          description: {
            en: 'Modern web application development',
            nl: 'Moderne webapplicatie ontwikkeling'
          } as LocalizedContent
        },
        { 
          name: 'Node.js', 
          level: 'intermediate', 
          years: 2, 
          description: {
            en: 'Backend development and API creation',
            nl: 'Backend ontwikkeling en API creatie'
          } as LocalizedContent
        },
        { 
          name: 'CSS/Tailwind', 
          level: 'advanced', 
          years: 2, 
          description: {
            en: 'Responsive design and component styling',
            nl: 'Responsief ontwerp en component styling'
          } as LocalizedContent
        }
      ]
    },
    {
      category: {
        en: 'Cloud & DevOps',
        nl: 'Cloud & DevOps'
      } as LocalizedContent,
      skills: [
        { 
          name: 'Azure', 
          level: 'intermediate', 
          years: 1, 
          description: {
            en: 'Functions, storage, deployment pipelines',
            nl: 'Functions, storage, deployment pipelines'
          } as LocalizedContent
        },
        { 
          name: 'Docker', 
          level: 'intermediate', 
          years: 1, 
          description: {
            en: 'Containerization and deployment',
            nl: 'Containerisatie en deployment'
          } as LocalizedContent
        },
        { 
          name: 'Git/GitHub Actions', 
          level: 'advanced', 
          years: 3, 
          description: {
            en: 'Version control and CI/CD automation',
            nl: 'Version control en CI/CD automatisering'
          } as LocalizedContent
        },
        { 
          name: 'Linux', 
          level: 'intermediate', 
          years: 2, 
          description: {
            en: 'Server management and shell scripting',
            nl: 'Server beheer en shell scripting'
          } as LocalizedContent
        }
      ]
    }
  ],

  careerHighlights: [
    {
      title: { en: 'Industrial Automation', nl: 'Industriële Automatisering' } as LocalizedContent,
      description: { en: 'Built 3D optimization algorithms that reduced shipping costs by 25% for industrial equipment.', nl: 'Bouwde 3D optimalisatie algoritmes die verzendkosten met 25% verminderden voor industriële apparatuur.' } as LocalizedContent
    },
    {
      title: { en: 'ML Pipeline Development', nl: 'ML Pipeline Ontwikkeling' } as LocalizedContent,
      description: { en: 'Designed and implemented machine learning pipelines achieving 95% accuracy in predictive maintenance.', nl: 'Ontwierp en implementeerde machine learning pipelines met 95% nauwkeurigheid in voorspellend onderhoud.' } as LocalizedContent
    },
    {
      title: { en: 'CAD Integration', nl: 'CAD Integratie' } as LocalizedContent,
      description: { en: 'Created 50+ automation scripts for Revit/Dynamo, saving engineering teams 10+ hours per project.', nl: 'Creëerde 50+ automatiseringsscripts voor Revit/Dynamo, bespaarde engineering teams 10+ uur per project.' } as LocalizedContent
    },
    {
      title: { en: 'International Experience', nl: 'Internationale Ervaring' } as LocalizedContent,
      description: { en: 'Lived and studied in Japan for a year, developing cross-cultural communication skills.', nl: 'Woonde en studeerde een jaar in Japan, ontwikkelde interculturele communicatievaardigheden.' } as LocalizedContent
    }
  ]
}