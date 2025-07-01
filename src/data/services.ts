import type { Service, LocalizedContent } from '@/types'

// ==========================================
// 🎯 DISCOUNT CONTROL - Change this to switch promotions!
// ==========================================
export const CURRENT_DISCOUNT_LEVEL: DiscountLevel = 'PORTFOLIO_BUILDING'
// Options: 'NONE' | 'REGULAR_SALE' | 'EARLY_BIRD' | 'PORTFOLIO_BUILDING'

// ==========================================
// Discount Level Definitions
// ==========================================
export type DiscountLevel = 'NONE' | 'REGULAR_SALE' | 'EARLY_BIRD' | 'PORTFOLIO_BUILDING'

interface DiscountConfig {
  percentage: number
  bannerInfo: {
    title: LocalizedContent
    subtitle: LocalizedContent
    description: LocalizedContent
    limitations: LocalizedContent
    features: LocalizedContent[]
    showBanner: boolean
    bannerColor: 'orange' | 'blue' | 'green' | 'purple'
  }
}

export const DISCOUNT_CONFIGS: Record<DiscountLevel, DiscountConfig> = {
  NONE: {
    percentage: 0,
    bannerInfo: {
      title: { en: '', nl: '' },
      subtitle: { en: '', nl: '' },
      description: { en: '', nl: '' },
      limitations: { en: '', nl: '' },
      features: [],
      showBanner: false,
      bannerColor: 'blue'
    }
  },
  
  REGULAR_SALE: {
    percentage: 25,
    bannerInfo: {
      title: {
        en: 'Limited Time Sale - 25% OFF!',
        nl: 'Beperkte Tijd Aanbieding - 25% KORTING!'
      },
      subtitle: {
        en: 'Professional custom-coded websites at a great price',
        nl: 'Professionele custom-gecodeerde websites tegen een geweldige prijs'
      },
      description: {
        en: 'Take advantage of our seasonal discount and get your business online with a professional custom-coded website.',
        nl: 'Profiteer van onze seizoenskorting en breng je bedrijf online met een professionele custom-gecodeerde website.'
      },
      limitations: {
        en: 'Valid until the end of this month!',
        nl: 'Geldig tot het einde van deze maand!'
      },
      features: [
        {
          en: 'Hand-coded from scratch',
          nl: 'Handgecodeerd vanaf nul'
        },
        {
          en: 'Modern tech stack',
          nl: 'Moderne tech stack'
        },
        {
          en: 'Lightning fast performance',
          nl: 'Bliksem snelle prestaties'
        },
        {
          en: 'Professional development quality',
          nl: 'Professionele ontwikkelingskwaliteit'
        }
      ],
      showBanner: true,
      bannerColor: 'blue'
    }
  },
  
  EARLY_BIRD: {
    percentage: 50,
    bannerInfo: {
      title: {
        en: 'Early Bird Special - 50% OFF Custom Websites!',
        nl: 'Early Bird Aanbieding - 50% KORTING Custom Websites!'
      },
      subtitle: {
        en: 'Professional hand-coded websites for the next 5 customers',
        nl: 'Professionele handgecodeerde websites voor de volgende 5 klanten'
      },
      description: {
        en: 'Join my growing client base and get an incredible discount on your professional custom-coded website. Built from scratch with modern technologies.',
        nl: 'Sluit je aan bij mijn groeiende klantenbestand en krijg een ongelooflijke korting op je professionele custom-gecodeerde website. Vanaf nul gebouwd met moderne technologieën.'
      },
      limitations: {
        en: 'Only 5 spots available - 2 already taken!',
        nl: 'Slechts 5 plekken beschikbaar - 2 al ingenomen!'
      },
      features: [
        {
          en: 'Hand-coded from scratch',
          nl: 'Handgecodeerd vanaf nul'
        },
        {
          en: 'Professional software engineer quality',
          nl: 'Professionele software engineer kwaliteit'
        },
        {
          en: 'Modern React/TypeScript technology',
          nl: 'Moderne React/TypeScript technologie'
        },
        {
          en: 'Lightning fast performance guaranteed',
          nl: 'Bliksem snelle prestaties gegarandeerd'
        }
      ],
      showBanner: true,
      bannerColor: 'green'
    }
  },
  
  PORTFOLIO_BUILDING: {
    percentage: 80,
    bannerInfo: {
      title: {
        en: 'Portfolio Building Special - 80% OFF Custom Websites!',
        nl: 'Portfolio Opbouw Aanbieding - 80% KORTING Custom Websites!'
      },
      subtitle: {
        en: 'Professional custom-coded websites at unbeatable prices',
        nl: 'Professionele custom-gecodeerde websites tegen onverslaanbare prijzen'
      },
      description: {
        en: 'I\'m building my freelance portfolio and offering amazing deals for my first clients. Get a professional hand-coded website for less than the cost of a weekend trip. This is real custom development at portfolio prices.',
        nl: 'Ik bouw mijn freelance portfolio op en bied geweldige deals voor mijn eerste klanten. Krijg een professionele handgecodeerde website voor minder dan de kosten van een weekendje weg. Dit is echte custom ontwikkeling tegen portfolio prijzen.'
      },
      limitations: {
        en: 'Only 5 spots available - 2 already taken! Custom-coded quality guaranteed.',
        nl: 'Slechts 5 plekken beschikbaar - 2 al ingenomen! Custom-gecodeerde kwaliteit gegarandeerd.'
      },
      features: [
        {
          en: 'Built from scratch (no templates)',
          nl: 'Vanaf nul gebouwd (geen templates)'
        },
        {
          en: '2+ years professional software engineering',
          nl: '2+ jaar professionele software engineering'
        },
        {
          en: 'Same tech as major companies',
          nl: 'Dezelfde tech als grote bedrijven'
        },
        {
          en: 'Portfolio project = extra attention to detail',
          nl: 'Portfolio project = extra aandacht voor detail'
        }
      ],
      showBanner: true,
      bannerColor: 'orange'
    }
  }
}

// ==========================================
// Helper Functions
// ==========================================
export function getCurrentDiscount(): DiscountConfig {
  return DISCOUNT_CONFIGS[CURRENT_DISCOUNT_LEVEL]
}

export function calculateDiscountedPrice(originalPrice: number): number {
  const discount = getCurrentDiscount()
  return Math.round(originalPrice * (1 - discount.percentage / 100))
}

export function getDiscountPercentage(): number {
  return getCurrentDiscount().percentage
}

export function shouldShowDiscountBanner(): boolean {
  return getCurrentDiscount().bannerInfo.showBanner
}

// ==========================================
// Original Service Prices (before any discounts)
// ==========================================
const ORIGINAL_PRICES = {
  simple: { from: 899, to: 1299 },
  business: { from: 1799, to: 2499 },
  custom: { from: 2999, to: 4499 }
}

// ==========================================
// Services with Dynamic Pricing and Quality Emphasis
// ==========================================
export const services: Service[] = [
  {
    id: 'simple-website',
    title: {
      en: 'Simple Business Website',
      nl: 'Eenvoudige Bedrijfswebsite'
    } as LocalizedContent,
    description: {
      en: 'Professional hand-coded website for small businesses. Built from scratch with modern technologies.',
      nl: 'Professionele handgecodeerde website voor kleine bedrijven. Vanaf nul gebouwd met moderne technologieën.'
    } as LocalizedContent,
    features: {
      en: [
        'Up to 5 pages (Home, About, Services, Contact)',
        'Mobile-responsive design',
        'Lightning fast loading speeds',
        'Contact form with email integration',
        'Google Maps integration',
        'Social media links',
        'Professional SEO setup',
        'Secure hosting included',
        '1 month of free updates'
      ],
      nl: [
        'Tot 5 pagina\'s (Home, Over, Diensten, Contact)',
        'Mobiel-responsief ontwerp',
        'Bliksem snelle laadsnelheden',
        'Contactformulier met e-mail integratie',
        'Google Maps integratie',
        'Social media links',
        'Professionele SEO setup',
        'Veilige hosting inbegrepen',
        '1 maand gratis updates'
      ]
    },
    price: {
      from: calculateDiscountedPrice(ORIGINAL_PRICES.simple.from),
      to: calculateDiscountedPrice(ORIGINAL_PRICES.simple.to),
      currency: 'EUR',
      period: 'project'
    },
    originalPrice: getDiscountPercentage() > 0 ? {
      from: ORIGINAL_PRICES.simple.from,
      to: ORIGINAL_PRICES.simple.to,
      currency: 'EUR'
    } : undefined,
    timeline: {
      en: '1-2 weeks',
      nl: '1-2 weken'
    } as LocalizedContent,
    category: 'web-development',
    complexity: 'simple'
  },
  {
    id: 'business-website',
    title: {
      en: 'Professional Business Website',
      nl: 'Professionele Bedrijfswebsite'
    } as LocalizedContent,
    description: {
      en: 'Complete custom-coded website with booking system. Professional quality with modern technologies.',
      nl: 'Volledige custom-gecodeerde website met boekingssysteem. Professionele kwaliteit met moderne technologieën.'
    } as LocalizedContent,
    features: {
      en: [
        'Everything in Simple Website +',
        'Up to 8 custom pages',
        'Online appointment booking calendar',
        'Automated email confirmations',
        'Customer management system',
        'Image gallery/portfolio section',
        'Customer testimonials section',
        'Google Analytics integration',
        'Professional email setup (@yourdomain.com)',
        'Advanced security features',
        '2 months of free updates'
      ],
      nl: [
        'Alles van Eenvoudige Website +',
        'Tot 8 aangepaste pagina\'s',
        'Online afspraak boekingskalender',
        'Geautomatiseerde e-mailbevestigingen',
        'Klantmanagementsysteem',
        'Afbeeldingsgalerij/portfolio sectie',
        'Klantgetuigenissen sectie',
        'Google Analytics integratie',
        'Professionele e-mail setup (@jouwdomein.nl)',
        'Geavanceerde beveiligingsfeatures',
        '2 maanden gratis updates'
      ]
    },
    price: {
      from: calculateDiscountedPrice(ORIGINAL_PRICES.business.from),
      to: calculateDiscountedPrice(ORIGINAL_PRICES.business.to),
      currency: 'EUR',
      period: 'project'
    },
    originalPrice: getDiscountPercentage() > 0 ? {
      from: ORIGINAL_PRICES.business.from,
      to: ORIGINAL_PRICES.business.to,
      currency: 'EUR'
    } : undefined,
    timeline: {
      en: '2-3 weeks',
      nl: '2-3 weken'
    } as LocalizedContent,
    category: 'web-development',
    complexity: 'medium'
  },
  {
    id: 'custom-website',
    title: {
      en: 'Enterprise Custom Solution',
      nl: 'Enterprise Custom Oplossing'
    } as LocalizedContent,
    description: {
      en: 'Fully tailored custom-coded website with advanced features. Enterprise-level quality built from scratch.',
      nl: 'Volledig op maat gemaakte custom-gecodeerde website met geavanceerde functies. Enterprise-level kwaliteit vanaf nul gebouwd.'
    } as LocalizedContent,
    features: {
      en: [
        'Everything in Business Website +',
        'Unlimited custom pages',
        'Advanced custom functionality',
        'E-commerce capabilities (if needed)',
        'Complex forms and integrations',
        'Custom design matching your brand',
        'Database integration',
        'Performance optimization',
        'Advanced SEO and marketing tools',
        'Training on content management',
        'Priority support',
        '3 months of free updates'
      ],
      nl: [
        'Alles van Bedrijfswebsite +',
        'Onbeperkt aantal aangepaste pagina\'s',
        'Geavanceerde maatwerkfunctionaliteit',
        'E-commerce mogelijkheden (indien nodig)',
        'Complexe formulieren en integraties',
        'Aangepast ontwerp passend bij jouw merk',
        'Database integratie',
        'Prestatie optimalisatie',
        'Geavanceerde SEO en marketing tools',
        'Training over contentbeheer',
        'Prioriteitsondersteuning',
        '3 maanden gratis updates'
      ]
    },
    price: {
      from: calculateDiscountedPrice(ORIGINAL_PRICES.custom.from),
      to: calculateDiscountedPrice(ORIGINAL_PRICES.custom.to),
      currency: 'EUR',
      period: 'project'
    },
    originalPrice: getDiscountPercentage() > 0 ? {
      from: ORIGINAL_PRICES.custom.from,
      to: ORIGINAL_PRICES.custom.to,
      currency: 'EUR'
    } : undefined,
    timeline: {
      en: '3-4 weeks',
      nl: '3-4 weken'
    } as LocalizedContent,
    category: 'web-development',
    complexity: 'complex'
  }
]

export const processSteps = [
  {
    step: 1,
    title: {
      en: 'Discovery & Planning',
      nl: 'Ontdekking & Planning'
    },
    description: {
      en: 'We discuss your business, goals, and plan your perfect custom website together',
      nl: 'We bespreken je bedrijf, doelen en plannen samen je perfecte custom website'
    },
    duration: {
      en: '1-2 days',
      nl: '1-2 dagen'
    } as LocalizedContent
  },
  {
    step: 2,
    title: {
      en: 'Custom Design & Content',
      nl: 'Custom Ontwerp & Inhoud'
    },
    description: {
      en: 'Create unique visual design and prepare content specifically for your business',
      nl: 'Maak uniek visueel ontwerp en bereid inhoud specifiek voor je bedrijf voor'
    },
    duration: {
      en: '2-4 days',
      nl: '2-4 dagen'
    } as LocalizedContent
  },
  {
    step: 3,
    title: {
      en: 'Development',
      nl: 'Ontwikkeling'
    },
    description: {
      en: 'Build your website from scratch with modern code and regular progress updates',
      nl: 'Bouw je website vanaf nul met moderne code en regelmatige voortgangsupdates'
    },
    duration: {
      en: '1-3 weeks',
      nl: '1-3 weken'
    } as LocalizedContent
  },
  {
    step: 4,
    title: {
      en: 'Launch & Training',
      nl: 'Lancering & Training'
    },
    description: {
      en: 'Launch your custom website and learn how to manage content easily',
      nl: 'Lanceer je custom website en leer hoe je content eenvoudig kunt beheren'
    },
    duration: {
      en: '1-2 days',
      nl: '1-2 dagen'
    } as LocalizedContent
  }
]

// Legacy export for backward compatibility
export const discountInfo = getCurrentDiscount().bannerInfo