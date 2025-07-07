import type { Project, LocalizedContent } from '@/types'
import { clientProjects, technicalProjects } from './projects'

// Extended project type for the all projects page
export interface ExtendedProject extends Project {
  showInFreelance: boolean
  showInProfessional: boolean
}

// Additional client projects to fill out the portfolio
const additionalClientProjects: ExtendedProject[] = [
  {
    id: 'dental-clinic-website',
    title: {
      en: 'Dental Clinic - Appointment Platform',
      nl: 'Tandartspraktijk - Afsprakenplatform'
    } as LocalizedContent,
    description: {
      en: 'Modern website for dental practice with online appointment booking and patient portal.',
      nl: 'Moderne website voor tandartspraktijk met online afspraak boeken en patiëntenportaal.'
    } as LocalizedContent,
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Calendar API'],
    category: 'web',
    status: 'completed',
    images: ['/projects/dental/homepage.jpg'],
    client: 'Dental Care Volendam',
    showInFreelance: true,
    showInProfessional: false
  }
]

// Combine all projects
export const allProjects: ExtendedProject[] = [
  // Featured projects (from main portfolio) - explicitly add the missing properties
  ...clientProjects.map(p => ({ 
    ...p, 
    showInFreelance: true, 
    showInProfessional: false 
  })),
  ...technicalProjects.map(p => ({ 
    ...p, 
    showInFreelance: false, 
    showInProfessional: true 
  })),
  
  // Additional projects
  ...additionalClientProjects,
]

// Project categories for filtering
export const projectCategories = [
  {
    id: 'all',
    label: {
      en: 'All Projects',
      nl: 'Alle Projecten'
    } as LocalizedContent
  },
  {
    id: 'web',
    label: {
      en: 'Websites',
      nl: 'Websites'
    } as LocalizedContent
  },
  {
    id: 'automation',
    label: {
      en: 'Automation',
      nl: 'Automatisering'
    } as LocalizedContent
  },
  {
    id: 'data',
    label: {
      en: 'Data & ML',
      nl: 'Data & ML'
    } as LocalizedContent
  },
  {
    id: 'ml',
    label: {
      en: 'Machine Learning',
      nl: 'Machine Learning'
    } as LocalizedContent
  }
]