import type { LocalizedContent } from '@/types'

// FREELANCE ABOUT - For potential clients (barbers, restaurants, small businesses)
export const freelanceAbout = {
  title: {
    en: 'Your Web Development Partner in North Holland',
    nl: 'Jouw Webontwikkelingspartner in Noord-Holland'
  } as LocalizedContent,
  
  bio: {
    en: 'I help local businesses in North Holland establish a strong online presence and streamline their operations. With a background in professional software engineering, I bring enterprise-level quality to small business solutions.',
    nl: 'Ik help lokale bedrijven in Noord-Holland een sterke online aanwezigheid op te bouwen en hun bedrijfsvoering te stroomlijnen. Met een achtergrond in professionele software engineering breng ik enterprise-level kwaliteit naar kleine bedrijfsoplossingen.'
  } as LocalizedContent,

  secondParagraph: {
    en: 'Every business is unique, which is why I take the time to understand your specific needs and goals. Whether you need a professional website, online booking system, or business automation, I create solutions that actually work for your customers and save you time.',
    nl: 'Elk bedrijf is uniek, daarom neem ik de tijd om je specifieke behoeften en doelen te begrijpen. Of je nu een professionele website, online boekingssysteem of bedrijfsautomatisering nodig hebt, ik creëer oplossingen die echt werken voor je klanten en je tijd besparen.'
  } as LocalizedContent,

  businessFacts: [
    {
      label: { en: 'Based in', nl: 'Gevestigd in' } as LocalizedContent,
      value: { en: 'Volendam, Netherlands', nl: 'Volendam, Nederland' } as LocalizedContent,
      icon: 'MapPin'
    },
    {
      label: { en: 'Experience', nl: 'Ervaring' } as LocalizedContent,
      value: { en: '2+ years professional development', nl: '2+ jaar professionele ontwikkeling' } as LocalizedContent,
      icon: 'Calendar'
    },
    {
      label: { en: 'Focus Area', nl: 'Focus Gebied' } as LocalizedContent,
      value: { en: 'North Holland businesses', nl: 'Noord-Holland bedrijven' } as LocalizedContent,
      icon: 'Building'
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
        en: 'Websites I Build',
        nl: 'Websites Die Ik Bouw'
      } as LocalizedContent,
      skills: [
        { name: { en: 'Business Websites', nl: 'Bedrijfswebsites' } as LocalizedContent, description: { en: 'Professional sites that represent your brand', nl: 'Professionele sites die je merk vertegenwoordigen' } as LocalizedContent },
        { name: { en: 'Online Booking Systems', nl: 'Online Boekingssystemen' } as LocalizedContent, description: { en: 'Let customers book appointments 24/7', nl: 'Laat klanten 24/7 afspraken boeken' } as LocalizedContent },
        { name: { en: 'E-commerce Stores', nl: 'E-commerce Winkels' } as LocalizedContent, description: { en: 'Sell your products online', nl: 'Verkoop je producten online' } as LocalizedContent },
        { name: { en: 'Restaurant Menus', nl: 'Restaurant Menu\'s' } as LocalizedContent, description: { en: 'Digital menus with online ordering', nl: 'Digitale menu\'s met online bestellen' } as LocalizedContent }
      ]
    },
    {
      category: {
        en: 'Business Solutions',
        nl: 'Bedrijfsoplossingen'
      } as LocalizedContent,
      skills: [
        { name: { en: 'Process Automation', nl: 'Procesautomatisering' } as LocalizedContent, description: { en: 'Automate repetitive tasks to save time', nl: 'Automatiseer repetitieve taken om tijd te besparen' } as LocalizedContent },
        { name: { en: 'Customer Management', nl: 'Klantbeheer' } as LocalizedContent, description: { en: 'Keep track of your customers easily', nl: 'Houd je klanten eenvoudig bij' } as LocalizedContent },
        { name: { en: 'Email Marketing', nl: 'E-mail Marketing' } as LocalizedContent, description: { en: 'Automated follow-ups and newsletters', nl: 'Geautomatiseerde follow-ups en nieuwsbrieven' } as LocalizedContent },
        { name: { en: 'Analytics & Reports', nl: 'Analytics & Rapporten' } as LocalizedContent, description: { en: 'Understand your business performance', nl: 'Begrijp je bedrijfsprestaties' } as LocalizedContent }
      ]
    }
  ],

  whyChooseMe: [
    {
      title: { en: 'Local & Reliable', nl: 'Lokaal & Betrouwbaar' } as LocalizedContent,
      description: { en: 'Based in Volendam, I understand North Holland businesses and provide ongoing support.', nl: 'Gevestigd in Volendam, ik begrijp Noord-Holland bedrijven en bied doorlopende ondersteuning.' } as LocalizedContent
    },
    {
      title: { en: 'Professional Quality', nl: 'Professionele Kwaliteit' } as LocalizedContent,
      description: { en: 'Enterprise-level development experience ensures your website is built to last.', nl: 'Enterprise-level ontwikkelingservaring zorgt ervoor dat je website gebouwd is om te blijven.' } as LocalizedContent
    },
    {
      title: { en: 'Results-Focused', nl: 'Resultaatgericht' } as LocalizedContent,
      description: { en: 'Every solution is designed to help your business grow and save you time.', nl: 'Elke oplossing is ontworpen om je bedrijf te laten groeien en je tijd te besparen.' } as LocalizedContent
    },
    {
      title: { en: 'Fair Pricing', nl: 'Eerlijke Prijzen' } as LocalizedContent,
      description: { en: 'Transparent pricing with no hidden costs. Perfect for small to medium businesses.', nl: 'Transparante prijzen zonder verborgen kosten. Perfect voor kleine tot middelgrote bedrijven.' } as LocalizedContent
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