export type Language = 'en' | 'nl'

export type ViewMode = 'freelance' | 'professional'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  category: 'web' | 'data' | 'mobile' | 'automation' | 'ml'
  status: 'completed' | 'in-progress' | 'concept'
  startDate: Date
  endDate?: Date
  githubUrl?: string
  liveUrl?: string
  caseStudyUrl?: string
  images: string[]
  client?: string
  role?: string
  team?: string[]
  challenges?: string[]
  solutions?: string[]
  results?: string[]
  // Dual perspective content
  freelanceDescription?: string
  professionalDescription?: string
  businessImpact?: string
  technicalDetails?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: Date
  endDate?: Date
  description: string
  achievements: string[]
  technologies: string[]
  type: 'full-time' | 'part-time' | 'internship' | 'freelance'
}

export interface Education {
  id: string
  institution: string
  degree: string
  field?: string
  location: string
  startDate: Date
  endDate?: Date
  description?: string
  achievements?: string[]
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'data' | 'cloud' | 'tools' | 'languages'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
  projects?: string[] // Project IDs where this skill was used
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  price?: {
    from: number
    to?: number
    currency: 'EUR'
    period?: 'project' | 'month' | 'hour'
  }
  timeline: string
  category: 'web-development' | 'automation' | 'data-analysis' | 'consultation'
    complexity: 'simple' | 'medium' | 'complex'
    originalPrice?: {
      from: number
      to?: number
      currency: 'EUR'
      period?: 'project' | 'month' | 'hour'
    }
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  subject: string
  preferredContact: 'email' | 'phone' | 'either'
  projectType?: string
  budget?: string
  timeline?: string
}

export interface LocalizedContent {
  en: string
  nl: string
}

export interface SectionProps {
  language: Language
  viewMode: ViewMode
}

export interface NavItem {
  label: LocalizedContent
  href: string
  external?: boolean
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}