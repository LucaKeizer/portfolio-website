import type { LocalizedContent } from '@/types'

export const personalInfo = {
  name: 'Luca Keizer',
  title: {
    en: 'Software Engineer',
    nl: 'Software Engineer'
  } as LocalizedContent,
  email: 'keizerluca@gmail.com',
  phone: '+31-06-1994-8201',
  location: {
    en: 'Volendam, Netherlands',
    nl: 'Volendam, Nederland'
  } as LocalizedContent,
  birthDate: new Date('2004-11-06'),
  
  bio: {
    freelance: {
      en: 'Experienced software engineer offering professional web development services to businesses in North Holland. Specialized in modern React applications, Python automation, and cloud-based solutions.',
      nl: 'Ervaren software engineer die professionele webontwikkelingsdiensten aanbiedt aan bedrijven in Noord-Holland. Gespecialiseerd in moderne React-applicaties, Python-automatisering en cloud-gebaseerde oplossingen.'
    },
    professional: {
      en: 'Passionate Software Engineer with 2+ years of experience in full-stack development, data analysis, and modern cloud technologies. Specialized in Python, TypeScript, and Azure for scalable, efficient solutions.',
      nl: 'Gepassioneerde Software Engineer met 2+ jaar ervaring in full-stack ontwikkeling, data-analyse en moderne cloud technologieën. Gespecialiseerd in Python, TypeScript en Azure voor schaalbare, efficiënte oplossingen.'
    }
  },

  careerStart: new Date('2022-04-01'),
  
  availability: {
    freelance: {
      en: 'Available for new projects',
      nl: 'Beschikbaar voor nieuwe projecten'
    },
    professional: {
      en: 'Open to opportunities',
      nl: 'Open voor kansen'
    }
  },

  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/lucakeizer',
      icon: 'github'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/lucakeizer',
      icon: 'linkedin'
    }
  ],

  languages: [
    {
      language: 'Nederlands',
      level: {
        en: 'Native',
        nl: 'Moedertaal'
      } as LocalizedContent
    },
    {
      language: 'English',
      level: {
        en: 'Fluent',
        nl: 'Vloeiend'
      } as LocalizedContent
    },
    {
      language: 'Deutsch',
      level: {
        en: 'Fluent',
        nl: 'Vloeiend'
      } as LocalizedContent
    },
    {
      language: '日本語',
      level: {
        en: 'Fluent',
        nl: 'Vloeiend'
      } as LocalizedContent
    }
  ]
}