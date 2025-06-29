import type { Experience, Education } from '@/types'

export const workExperience: Experience[] = [
  {
    id: 'sonic-equipment',
    company: 'Sonic Equipment B.V.',
    position: 'Data Solutions Engineer',
    location: 'Purmerend, Nederland',
    type: 'full-time',
    startDate: new Date('2023-08-01'),
    description: 'Ontwikkeling van geautomatiseerde data-analyse dashboards en complexe applicaties voor industriële toepassingen.',
    achievements: [
      'Ontwikkelde geautomatiseerde data-analyse dashboards met Python, GitHub Actions en Azure Functions',
      'Bouwde complexe applicaties zoals een 3D containerlaad-systeem in Python',
      'Implementeerde machine learning modellen en web scraping voor data-acquisitie',
      'Verbeterde data processing workflows met 40% efficiency verbetering'
    ],
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
    description: 'Automatisering van workflows voor elektrotechnische projecten met focus op Dynamo en Revit integraties.',
    achievements: [
      'Creëerde 50+ geautomatiseerde scripts voor Dynamo en Revit',
      'Verhoogde teamproductiviteit met 10+ uur tijdsbesparing per project',
      'Ontwikkelde custom tools voor elektrotechnische berekeningen',
      'Implementeerde automated testing voor script reliability'
    ],
    technologies: ['Python', 'Dynamo', 'Revit API', 'C#', '.NET', 'Automation', 'CAD Integration']
  }
]

export const education: Education[] = [
  {
    id: 'junten-japan',
    institution: 'Junten',
    degree: 'Studeren in het buitenland',
    field: 'Japanse taal en cultuur',
    location: 'Tokyo, Japan',
    startDate: new Date('2022-08-01'),
    endDate: new Date('2023-06-30'),
    description: 'Intensief taal- en cultuurprogramma met focus op Japanse taalvaardigheid en internationale ervaring',
    achievements: [
      'Bereikte vloeiend niveau in gesproken en geschreven Japans',
      'Ontwikkelde interculturele communicatievaardigheden',
      'Voltooide stage bij Japans tech bedrijf',
      'Leidde internationale studentenprojecten'
    ]
  },
  {
    id: 'life-vwo',
    institution: 'Life College',
    degree: 'VWO',
    field: 'Economie & Maatschappij',
    location: 'Landsmeer, Nederland',
    startDate: new Date('2015-09-01'),
    endDate: new Date('2021-07-31'),
    description: 'VWO diploma met focus op Economie & Maatschappij, aangevuld met IT en Bedrijfseconomie als keuzevakken.',
    achievements: [
      'Afgestudeerd met profiel Economie & Maatschappij',
      'Keuzevakken: IT en Bedrijfseconomie',
      'Deelgenomen aan programmeer wedstrijden',
      'Leiderschapsrollen in studentenorganisaties'
    ]
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
    { name: 'Linux', level: 'intermediate', years: 2 }
  ]
}