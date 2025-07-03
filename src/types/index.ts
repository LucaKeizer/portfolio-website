export type Language = 'en' | 'nl'

export type ViewMode = 'freelance' | 'professional'

export interface Project {
  id: string
  title: LocalizedContent
  description: LocalizedContent
  longDescription?: LocalizedContent
  technologies: string[]
  category: 'web' | 'data' | 'mobile' | 'automation' | 'ml' | 'backend' | 'other'
  status: 'completed' | 'in-progress' | 'concept'
  githubUrl?: string
  liveUrl?: string
  caseStudyUrl?: string
  images: string[]
  client?: string
  role?: string
  team?: string[]
  challenges?: {
    en: string[]
    nl: string[]
  }
  solutions?: {
    en: string[]
    nl: string[]
  }
  results?: {
    en: string[]
    nl: string[]
  }
  // Dual perspective content
  freelanceDescription?: LocalizedContent
  professionalDescription?: LocalizedContent
  businessImpact?: LocalizedContent
  technicalDetails?: LocalizedContent
  // For all projects page
  showInFreelance?: boolean
  showInProfessional?: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: Date
  endDate?: Date
  description: LocalizedContent
  achievements: {
    en: string[]
    nl: string[]
  }
  technologies: string[]
  type: 'full-time' | 'part-time' | 'internship' | 'freelance'
}

export interface Education {
  id: string
  institution: string
  degree: LocalizedContent | string
  field?: LocalizedContent | string
  location: string
  startDate: Date
  endDate?: Date
  description?: LocalizedContent
  achievements?: {
    en: string[]
    nl: string[]
  }
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
  title: LocalizedContent
  description: LocalizedContent
  features: {
    en: string[]
    nl: string[]
  }
  price?: {
    from: number
    to?: number
    currency: 'EUR'
    period?: 'project' | 'month' | 'hour'
  }
  originalPrice?: {
    from: number
    to?: number
    currency: 'EUR'
  }
  timeline: LocalizedContent
  category: 'web-development' | 'automation' | 'data-analysis' | 'consultation'
  complexity?: 'simple' | 'medium' | 'complex'
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