import type { Experience, Education, LocalizedContent } from '@/types'

export const workExperience: Experience[] = [
  {
    id: 'sonic-equipment',
    company: 'Sonic Equipment B.V.',
    position: 'Data Solutions Engineer',
    location: 'Purmerend, Nederland',
    type: 'full-time',
    startDate: new Date('2023-08-01'),
    description: {
      en: 'As a Data Solutions Engineer, I develop automated solutions and tools to accelerate data analysis and deliver complex insights. I use Python, TypeScript, and Azure to build applications, apply machine learning, and optimize processes for greater efficiency.',
      nl: 'Ontwikkeling van geautomatiseerde data-analyse dashboards en complexe applicaties voor industriële toepassingen.'
    } as LocalizedContent,
    achievements: {
      en: [
        'Developed automated data analysis dashboards using Python, GitHub Actions, and Azure Functions',
        'Built complex applications such as a 3D container loading system in Python',
        'Implemented machine learning models and web scraping for data acquisition',
        'Improved data processing workflows with 40% efficiency improvement'
      ],
      nl: [
        'Ontwikkelde geautomatiseerde data-analyse dashboards met Python, GitHub Actions en Azure Functions',
        'Bouwde complexe applicaties zoals een 3D containerlaad-systeem in Python',
        'Implementeerde machine learning modellen en web scraping voor data-acquisitie',
        'Verbeterde data processing workflows met 40% efficiency verbetering'
      ]
    },
    technologies: ['Python', 'Azure Functions', 'GitHub Actions', 'Machine Learning', 'Data Analysis', '3D Modeling', 'Web Scraping']
  },
  {
    id: 'smit-elektra',
    company: 'Smit Elektra',
    position: 'Interim Software Developer',
    location: 'Volendam, Nederland',
    type: 'internship',
    startDate: new Date('2022-04-01'),
    endDate: new Date('2022-08-31'),
    description: {
      en: 'Created and documented a large number of scripts using Dynamo and Revit, significantly increasing team productivity and saving approximately 10 hours per project.',
      nl: 'Automatisering van workflows voor elektrotechnische projecten met focus op Dynamo en Revit integraties.'
    } as LocalizedContent,
    achievements: {
      en: [
        'Created 50+ automated scripts for Dynamo and Revit',
        'Increased team productivity with 10+ hours saved per project',
        'Developed custom tools for electrical engineering calculations',
        'Implemented automated testing for script reliability'
      ],
      nl: [
        'Creëerde 50+ geautomatiseerde scripts voor Dynamo en Revit',
        'Verhoogde teamproductiviteit met 10+ uur tijdsbesparing per project',
        'Ontwikkelde custom tools voor elektrotechnische berekeningen',
        'Implementeerde automated testing voor script reliability'
      ]
    },
    technologies: ['Python', 'Dynamo', 'Revit API', 'C#', '.NET', 'Automation', 'CAD Integration']
  }
]

export const education: Education[] = [
  {
    id: 'junten-japan',
    institution: 'Junten',
    degree: {
      en: 'Study Abroad',
      nl: 'Studeren in het buitenland'
    } as LocalizedContent,
    field: {
      en: 'Japanese language and culture',
      nl: 'Japanse taal en cultuur'
    } as LocalizedContent,
    location: 'Tokyo, Japan',
    startDate: new Date('2022-08-01'),
    endDate: new Date('2023-06-30'),
    description: {
      en: 'Participated in a one-year study program in Japan to deepen my language skills and cultural understanding through daily interaction with Japanese students and host families.',
      nl: 'Intensief taal- en cultuurprogramma met focus op Japanse taalvaardigheid en internationale ervaring'
    } as LocalizedContent,
    achievements: {
      en: [
        'Achieved business-level proficiency in spoken and written Japanese',
        'Developed cross-cultural communication skills',
        'Completed internship at Japanese tech company',
        'Led international student projects'
      ],
      nl: [
        'Bereikte vloeiend niveau in gesproken en geschreven Japans',
        'Ontwikkelde interculturele communicatievaardigheden',
        'Voltooide stage bij Japans tech bedrijf',
        'Leidde internationale studentenprojecten'
      ]
    }
  }
]

export const skills = {
  frontend: [
    { name: 'React', level: 'advanced', years: 2 },
    { name: 'Next.js', level: 'advanced', years: 2 },
    { name: 'TypeScript', level: 'advanced', years: 2 },
    { name: 'JavaScript', level: 'expert', years: 3 },
    { name: 'Tailwind CSS', level: 'advanced', years: 2 },
    { name: 'HTML/CSS', level: 'expert', years: 4 }
  ],
  backend: [
    { name: 'Python', level: 'expert', years: 3 },
    { name: 'Django', level: 'intermediate', years: 1 },
    { name: 'Go', level: 'intermediate', years: 1 },
    { name: 'REST APIs', level: 'advanced', years: 2 },
    { name: 'SQL', level: 'advanced', years: 2 }
  ],
  data: [
    { name: 'Machine Learning', level: 'intermediate', years: 1 },
    { name: 'Data Analysis', level: 'advanced', years: 2 },
    { name: 'Web Scraping', level: 'advanced', years: 2 },
    { name: 'MySQL', level: 'advanced', years: 2 },
    { name: 'PostgreSQL', level: 'intermediate', years: 1 }
  ],
  cloud: [
    { name: 'Azure', level: 'intermediate', years: 1 },
    { name: 'Azure Functions', level: 'intermediate', years: 1 },
    { name: 'AWS', level: 'beginner', years: 1 },
    { name: 'Docker', level: 'intermediate', years: 1 },
    { name: 'Kubernetes', level: 'beginner', years: 1 }
  ],
  tools: [
    { name: 'Git', level: 'advanced', years: 3 },
    { name: 'GitHub Actions', level: 'intermediate', years: 1 },
    { name: 'Testing (Jest, pytest)', level: 'intermediate', years: 1 },
    { name: 'VS Code', level: 'expert', years: 4 },
    { name: 'Kubernetes', level: 'intermediate', years: 2 }
  ]
}