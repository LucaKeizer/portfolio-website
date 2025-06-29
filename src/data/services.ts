import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'simple-website',
    title: 'Simple Business Website',
    description: 'Perfect for small businesses wanting a professional online presence',
    features: [
      'Up to 5 pages (Home, About, Services, Contact)',
      'Mobile-responsive design',
      'Contact form',
      'Google Maps integration',
      'Social media links',
      'Basic SEO setup',
      'Professional hosting included',
      '1 month of free minor updates'
    ],
    price: {
      from: 150,
      to: 250,
      currency: 'EUR',
      period: 'project'
    },
    originalPrice: {
      from: 899,
      to: 1299,
      currency: 'EUR'
    },
    timeline: '1-2 weeks',
    category: 'web-development',
    complexity: 'simple'
  },
  {
    id: 'business-website',
    title: 'Professional Business Website',
    description: 'Complete website solution with booking system for service businesses',
    features: [
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
    price: {
      from: 300,
      to: 450,
      currency: 'EUR',
      period: 'project'
    },
    originalPrice: {
      from: 1799,
      to: 2499,
      currency: 'EUR'
    },
    timeline: '2-3 weeks',
    category: 'web-development',
    complexity: 'medium'
  },
  {
    id: 'custom-website',
    title: 'Custom Website Solution',
    description: 'Tailored website with special features for your unique business needs',
    features: [
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
    price: {
      from: 500,
      to: 750,
      currency: 'EUR',
      period: 'project'
    },
    originalPrice: {
      from: 2999,
      to: 4499,
      currency: 'EUR'
    },
    timeline: '3-4 weeks',
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
    duration: '1-2 days'
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
    duration: '2-4 days'
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
    duration: '1-6 weeks'
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
    duration: '1-2 days'
  }
]

export const discountInfo = {
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
  limitations: {
    en: 'Only 5 spots available - 2 already taken!',
    nl: 'Slechts 5 plekken beschikbaar - 2 al ingenomen!'
  }
}