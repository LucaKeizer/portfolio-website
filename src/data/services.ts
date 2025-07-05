// Simplified services data - keeping minimal for potential future use
// Most service/pricing complexity has been removed from the main site

import type { LocalizedContent } from '@/types'

// Simple service types for basic reference
export const serviceTypes = [
  {
    id: 'website',
    name: {
      en: 'Website Development',
      nl: 'Website Ontwikkeling'
    } as LocalizedContent
  },
  {
    id: 'automation',
    name: {
      en: 'Process Automation', 
      nl: 'Proces Automatisering'
    } as LocalizedContent
  }
]

// Basic contact preferences
export const contactPreferences = [
  { value: 'email', label: { en: 'Email', nl: 'Email' } as LocalizedContent },
  { value: 'phone', label: { en: 'Phone', nl: 'Telefoon' } as LocalizedContent },
  { value: 'either', label: { en: 'Either', nl: 'Beide' } as LocalizedContent }
]

// Simple project timelines
export const projectTimelines = [
  { value: 'asap', label: { en: 'As soon as possible', nl: 'Zo snel mogelijk' } as LocalizedContent },
  { value: '1-month', label: { en: 'Within 1 month', nl: 'Binnen 1 maand' } as LocalizedContent },
  { value: '2-3-months', label: { en: '2-3 months', nl: '2-3 maanden' } as LocalizedContent },
  { value: 'flexible', label: { en: 'Flexible', nl: 'Flexibel' } as LocalizedContent }
]

// Legacy exports for backward compatibility (empty)
export const services: any[] = []
export const processSteps: any[] = []
export const discountInfo = { showBanner: false }

// Simplified helper functions
export function shouldShowDiscountBanner(): boolean {
  return false // No more discount banners
}

export function getDiscountPercentage(): number {
  return 0 // No more discounts on main site
}

export function getCurrentDiscount() {
  return {
    percentage: 0,
    bannerInfo: {
      title: { en: '', nl: '' },
      subtitle: { en: '', nl: '' },
      description: { en: '', nl: '' },
      limitations: { en: '', nl: '' },
      features: [],
      showBanner: false,
      bannerColor: 'blue' as const
    }
  }
}