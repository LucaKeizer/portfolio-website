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
        en: 'Professional websites at a great price',
        nl: 'Professionele websites tegen een geweldige prijs'
      },
      description: {
        en: 'Take advantage of our seasonal discount and get your business online with a professional website.',
        nl: 'Profiteer van onze seizoenskorting en breng je bedrijf online met een professionele website.'
      },
      limitations: {
        en: 'Valid until the end of this month!',
        nl: 'Geldig tot het einde van deze maand!'
      },
      features: [
        {
          en: 'Same professional quality',
          nl: 'Dezelfde professionele kwaliteit'
        },
        {
          en: 'All features included',
          nl: 'Alle functies inbegrepen'
        },
        {
          en: 'Full support included',
          nl: 'Volledige ondersteuning inbegrepen'
        },
        {
          en: 'Money-back guarantee',
          nl: 'Geld-terug garantie'
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
        en: 'Early Bird Special - 50% OFF!',
        nl: 'Early Bird Aanbieding - 50% KORTING!'
      },
      subtitle: {
        en: 'For the next 5 customers only',
        nl: 'Alleen voor de volgende 5 klanten'
      },
      description: {
        en: 'Join my growing client base and get an incredible discount on your professional website. Perfect for businesses ready to establish their online presence.',
        nl: 'Sluit je aan bij mijn groeiende klantenbestand en krijg een ongelooflijke korting op je professionele website. Perfect voor bedrijven die klaar zijn om hun online aanwezigheid te vestigen.'
      },
      limitations: {
        en: 'Only 5 spots available - 2 already taken!',
        nl: 'Slechts 5 plekken beschikbaar - 2 al ingenomen!'
      },
      features: [
        {
          en: 'Professional development experience',
          nl: 'Professionele ontwikkelingservaring'
        },
        {
          en: 'Extra attention to detail',
          nl: 'Extra aandacht voor detail'
        },
        {
          en: 'Priority support',
          nl: 'Prioriteitsondersteuning'
        },
        {
          en: 'Free consultation included',
          nl: 'Gratis consultatie inbegrepen'
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
        en: 'Portfolio Building Special - 80% OFF!',
        nl: 'Portfolio Opbouw Aanbieding - 80% KORTING!'
      },
      subtitle: {
        en: 'First 5 clients get incredible discounts',
        nl: 'Eerste 5 klanten krijgen ongelooflijke kortingen'
      },
      description: {
        en: 'I\'m building my freelance portfolio and offering amazing deals for my first clients. You get a professional website for less than the cost of a weekend trip!',
        nl: 'Ik bouw mijn freelance portfolio op en bied geweldige deals voor mijn eerste klanten. Je krijgt een professionele website voor minder dan de kosten van een weekendje weg!'
      },
      limitations: {
        en: 'Only 5 spots available - 2 already taken!',
        nl: 'Slechts 5 plekken beschikbaar - 2 al ingenomen!'
      },
      features: [
        {
          en: 'Same quality as full-price websites',
          nl: 'Dezelfde kwaliteit als full-price websites'
        },
        {
          en: '2+ years professional development experience',
          nl: '2+ jaar professionele ontwikkelingservaring'
        },
        {
          en: 'Extra care for portfolio projects',
          nl: 'Extra zorg voor portfolio projecten'
        },
        {
          en: 'Free updates included',
          nl: 'Gratis updates inbegrepen'
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
// Services with Dynamic Pricing
// ==========================================
export const services: Service[] = [
  {
    id: 'simple-website',
    title: {
      en: 'Simple Business Website',
      nl: 'Eenvoudige Bedrijfswebsite'
    } as LocalizedContent,
    description: {
      en: 'Perfect for small businesses wanting a professional online presence',
      nl: 'Perfect voor kleine bedrijven die een professionele online aanwezigheid willen'
    } as LocalizedContent,
    features: {
      en: [
        'Up to 5 pages (Home, About, Services, Contact)',
        'Mobile-responsive design',
        'Contact form',
        'Google Maps integration',
        'Social media links',
        'Basic SEO setup',
        'Professional hosting included',
        '1 month of free minor updates'
      ],
      nl: [
        'Tot 5 pagina\'s (Home, Over, Diensten, Contact)',
        'Mobiel-responsief ontwerp',
        'Contactformulier',
        'Google Maps integratie',
        'Social media links',
        'Basis SEO setup',
        'Professionele hosting inbegrepen',
        '1 maand gratis kleine updates'
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
      en: 'Complete website solution with booking system for service businesses',
      nl: 'Volledige websiteoplossing met reserveringssysteem voor dienstverleners'
    } as LocalizedContent,
    features: {
      en: [
        'Everything in Simple Website',
        'Up to 8 custom pages',
        'Online appointment booking calendar',
        'Automated email confirmations',
        'Image gallery/portfolio section',
        'Customer testimonials section',
        'Google Analytics integration',
        'Professional email setup',
        '2 months of free updates'
      ],
      nl: [
        'Alles van Eenvoudige Website',
        'Tot 8 aangepaste pagina\'s',
        'Online afspraak boekingskalender',
        'Geautomatiseerde e-mailbevestigingen',
        'Afbeeldingsgalerij/portfolio sectie',
        'Klantgetuigenissen sectie',
        'Google Analytics integratie',
        'Professionele e-mail setup',
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
      en: 'Custom Website Solution',
      nl: 'Aangepaste Website Oplossing'
    } as LocalizedContent,
    description: {
      en: 'Tailored website with special features for your unique business needs',
      nl: 'Op maat gemaakte website met speciale functies voor jouw unieke bedrijfsbehoeften'
    } as LocalizedContent,
    features: {
      en: [
        'Everything in Professional Website',
        'Custom functionality based on your needs',
        'E-commerce capabilities (if needed)',
        'Advanced forms and integrations',
        'Custom design matching your brand',
        'Performance optimization',
        'Advanced SEO setup',
        'Training on how to manage your site',
        '3 months of free updates'
      ],
      nl: [
        'Alles van Professionele Website',
        'Maatwerkfunctie op jouw wensen afgestemd',
        'E-commerce mogelijkheden (indien nodig)',
        'Geavanceerde formulieren en integraties',
        'Aangepast ontwerp passend bij jouw merk',
        'Prestatie optimalisatie',
        'Geavanceerde SEO setup',
        'Training over hoe je site te beheren',
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
      en: 'We discuss your business, goals, and plan your perfect website together',
      nl: 'We bespreken je bedrijf, doelen en plannen samen je perfecte website'
    },
    duration: {
      en: '1-2 days',
      nl: '1-2 dagen'
    } as LocalizedContent
  },
  {
    step: 2,
    title: {
      en: 'Design & Content',
      nl: 'Ontwerp & Inhoud'
    },
    description: {
      en: 'Create the visual design and prepare all content for your website',
      nl: 'Maak het visuele ontwerp en bereid alle inhoud voor je website voor'
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
      en: 'Build your website with regular updates on progress',
      nl: 'Bouw je website met regelmatige updates over de voortgang'
    },
    duration: {
      en: '1-6 weeks',
      nl: '1-6 weken'
    } as LocalizedContent
  },
  {
    step: 4,
    title: {
      en: 'Launch & Training',
      nl: 'Lancering & Training'
    },
    description: {
      en: 'Launch your website and learn how to manage it yourself',
      nl: 'Lanceer je website en leer hoe je deze zelf kunt beheren'
    },
    duration: {
      en: '1-2 days',
      nl: '1-2 dagen'
    } as LocalizedContent
  }
]

// Legacy export for backward compatibility
export const discountInfo = getCurrentDiscount().bannerInfo