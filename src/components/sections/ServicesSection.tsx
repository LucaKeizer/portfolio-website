'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code2, 
  Calendar, 
  ShoppingCart, 
  MessageSquare, 
  Wrench,
  Globe,
  Euro,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionProps, LocalizedContent } from '@/types'
import { 
  services, 
  processSteps, 
  getCurrentDiscount, 
  shouldShowDiscountBanner,
  getDiscountPercentage 
} from '@/data/services'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

// Smooth transition variants for mode switching
const modeContentVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const serviceIcons: Record<string, React.ReactNode> = {
  'simple-website': <Globe className="h-5 w-5 md:h-6 md:w-6" />,
  'business-website': <Calendar className="h-5 w-5 md:h-6 md:w-6" />,
  'custom-website': <Code2 className="h-5 w-5 md:h-6 md:w-6" />
}

const complexityColors = {
  simple: 'bg-green-100 text-green-700 border-green-300',
  medium: 'bg-blue-100 text-blue-700 border-blue-300', 
  complex: 'bg-purple-100 text-purple-700 border-purple-300'
}

// Banner color configurations
const bannerColors = {
  orange: {
    background: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
    border: 'border-orange-200 dark:border-orange-800',
    text: {
      title: 'text-orange-800 dark:text-orange-200',
      subtitle: 'text-orange-700 dark:text-orange-300',
      description: 'text-orange-600 dark:text-orange-400',
      features: 'text-orange-700 dark:text-orange-300',
      limitations: 'text-orange-800 dark:text-orange-200'
    },
    background2: 'bg-orange-100 dark:bg-orange-900/30',
    border2: 'border-orange-300 dark:border-orange-700',
    icon: 'text-orange-600'
  },
  blue: {
    background: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
    border: 'border-blue-200 dark:border-blue-800',
    text: {
      title: 'text-blue-800 dark:text-blue-200',
      subtitle: 'text-blue-700 dark:text-blue-300',
      description: 'text-blue-600 dark:text-blue-400',
      features: 'text-blue-700 dark:text-blue-300',
      limitations: 'text-blue-800 dark:text-blue-200'
    },
    background2: 'bg-blue-100 dark:bg-blue-900/30',
    border2: 'border-blue-300 dark:border-blue-700',
    icon: 'text-blue-600'
  },
  green: {
    background: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20',
    border: 'border-green-200 dark:border-green-800',
    text: {
      title: 'text-green-800 dark:text-green-200',
      subtitle: 'text-green-700 dark:text-green-300',
      description: 'text-green-600 dark:text-green-400',
      features: 'text-green-700 dark:text-green-300',
      limitations: 'text-green-800 dark:text-green-200'
    },
    background2: 'bg-green-100 dark:bg-green-900/30',
    border2: 'border-green-300 dark:border-green-700',
    icon: 'text-green-600'
  },
  purple: {
    background: 'from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20',
    border: 'border-purple-200 dark:border-purple-800',
    text: {
      title: 'text-purple-800 dark:text-purple-200',
      subtitle: 'text-purple-700 dark:text-purple-300',
      description: 'text-purple-600 dark:text-purple-400',
      features: 'text-purple-700 dark:text-purple-300',
      limitations: 'text-purple-800 dark:text-purple-200'
    },
    background2: 'bg-purple-100 dark:bg-purple-900/30',
    border2: 'border-purple-300 dark:border-purple-700',
    icon: 'text-purple-600'
  }
}

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

function ServicesContent({ language }: { language: 'en' | 'nl' }) {
  const [expandedService, setExpandedService] = useState<string | null>('business-website')
  const [showAllServices, setShowAllServices] = useState(false)

  // Helper function to get localized text
  const getText = (content: LocalizedContent): string => {
    return content[language]
  }

  // Helper function to get localized array
  const getArray = (content: { en: string[]; nl: string[] }): string[] => {
    return content[language]
  }

  // Get current discount configuration
  const currentDiscount = getCurrentDiscount()
  const discountPercentage = getDiscountPercentage()
  const showBanner = shouldShowDiscountBanner()
  
  // Get banner styling
  const bannerStyle = bannerColors[currentDiscount.bannerInfo.bannerColor]

  // Show only featured service on mobile initially
  const servicesToShow = showAllServices ? services : services.slice(1, 2) // Show only business website

  return (
    <motion.div
      variants={modeContentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Responsive Discount Banner */}
      {showBanner && (
        <motion.div 
          variants={itemVariants}
          className={`mb-6 md:mb-12 bg-gradient-to-r ${bannerStyle.background} p-3 md:p-6 rounded-lg md:rounded-xl border-2 ${bannerStyle.border}`}
        >
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 md:space-x-2 mb-2 md:mb-3">
              <Zap className={`h-4 w-4 md:h-5 md:w-5 ${bannerStyle.icon}`} />
              <span className={`text-sm md:text-lg font-bold ${bannerStyle.text.title}`}>
                {getText(currentDiscount.bannerInfo.title)}
              </span>
              <Zap className={`h-4 w-4 md:h-5 md:w-5 ${bannerStyle.icon}`} />
            </div>
            <p className={`text-xs md:text-sm font-medium mb-2 md:mb-3 ${bannerStyle.text.subtitle}`}>
              {getText(currentDiscount.bannerInfo.subtitle)}
            </p>
            
            {/* Mobile: Simplified description */}
            <div className="md:hidden">
              <p className={`text-xs max-w-2xl mx-auto ${bannerStyle.text.description}`}>
                {language === 'en' 
                  ? 'Professional custom-coded websites at unbeatable portfolio prices!'
                  : 'Professionele custom-gecodeerde websites tegen onverslaanbare portfolio prijzen!'
                }
              </p>
            </div>
            
            {/* Desktop: Full features */}
            <div className="hidden md:block">
              <p className={`text-sm max-w-2xl mx-auto mb-4 ${bannerStyle.text.description}`}>
                {getText(currentDiscount.bannerInfo.description)}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-3xl mx-auto mb-4">
                {currentDiscount.bannerInfo.features.map((feature, index) => (
                  <div key={index} className={`flex items-center space-x-2 text-sm ${bannerStyle.text.features}`}>
                    <CheckCircle className={`h-4 w-4 ${bannerStyle.icon} flex-shrink-0`} />
                    <span>{getText(feature)}</span>
                  </div>
                ))}
              </div>
              <div className={`${bannerStyle.background2} p-3 rounded-lg border ${bannerStyle.border2}`}>
                <p className={`text-sm font-medium ${bannerStyle.text.limitations}`}>
                  {getText(currentDiscount.bannerInfo.limitations)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* MOBILE ONLY: Compact Services Display */}
      <div className="block md:hidden space-y-4 mb-8">
        {servicesToShow.map((service, index) => (
          <motion.div 
            key={service.id}
            variants={itemVariants}
            className="bg-card p-4 rounded-lg border border-border card-hover group relative"
          >
            
            {/* Popular Badge */}
            {service.id === 'business-website' && (
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Star className="h-3 w-3" />
                <span>{language === 'en' ? 'Popular' : 'Populair'}</span>
              </div>
            )}

            {/* Mobile Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {serviceIcons[service.id] || <Code2 className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{getText(service.title)}</h3>
                  {service.complexity && (
                    <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border mt-1 ${
                      complexityColors[service.complexity]
                    }`}>
                      {service.complexity === 'simple' && (language === 'en' ? 'Simple' : 'Eenvoudig')}
                      {service.complexity === 'medium' && (language === 'en' ? 'Advanced' : 'Geavanceerd')}
                      {service.complexity === 'complex' && (language === 'en' ? 'Complex' : 'Complex')}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Price */}
              {service.price && (
                <div className="text-right">
                  {service.originalPrice && (
                    <div className="text-xs text-muted-foreground line-through mb-1">
                      {service.originalPrice.to 
                        ? `${formatPrice(service.originalPrice.from, service.originalPrice.currency)} - ${formatPrice(service.originalPrice.to, service.originalPrice.currency)}`
                        : `${formatPrice(service.originalPrice.from, service.originalPrice.currency)}+`
                      }
                    </div>
                  )}
                  <div className="font-bold text-sm text-green-600">
                    {service.price.to 
                      ? `${formatPrice(service.price.from, service.price.currency)} - ${formatPrice(service.price.to, service.price.currency)}`
                      : `${formatPrice(service.price.from, service.price.currency)}+`
                    }
                  </div>
                  {service.originalPrice && discountPercentage > 0 && (
                    <div className="text-xs text-green-600 font-medium">
                      {discountPercentage}% {language === 'en' ? 'OFF' : 'KORTING'}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
              {getText(service.description)}
            </p>

            {/* Timeline */}
            <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-3">
              <Clock className="h-3 w-3" />
              <span>{getText(service.timeline)}</span>
            </div>

            {/* Features */}
            <div className="space-y-1 mb-4">
              {getArray(service.features).slice(0, 3).map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start space-x-2 text-xs">
                  <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              
              <AnimatePresence>
                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-1"
                  >
                    {getArray(service.features).slice(3).map((feature, featureIndex) => (
                      <div key={featureIndex + 3} className="flex items-start space-x-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {getArray(service.features).length > 3 && (
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="flex items-center space-x-1 text-xs text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  <span>
                    {expandedService === service.id 
                      ? (language === 'en' ? 'Show Less' : 'Toon Minder')
                      : (language === 'en' ? `+${getArray(service.features).length - 3} More` : `+${getArray(service.features).length - 3} Meer`)
                    }
                  </span>
                  {expandedService === service.id ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                </button>
              )}
            </div>

            {/* CTA Button */}
            <Button 
              variant={service.id === 'business-website' ? 'gradient' : 'outline'}
              className="w-full transition-colors text-sm"
              asChild
            >
              <a href="#contact">
                {language === 'en' ? 'Get Started' : 'Begin Nu'}
                <ArrowRight className="h-3 w-3 ml-2" />
              </a>
            </Button>
          </motion.div>
        ))}

        {/* Show All Button */}
        {!showAllServices && (
          <motion.div variants={itemVariants} className="text-center">
            <Button 
              variant="outline" 
              onClick={() => setShowAllServices(true)}
              className="w-full"
            >
              {language === 'en' ? 'View All Services' : 'Bekijk Alle Diensten'}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>

      {/* DESKTOP ONLY: Original Grid Layout */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 mb-16">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            variants={itemVariants}
            className="bg-card p-6 rounded-xl border border-border card-hover group relative"
          >
            
            {/* Popular Badge */}
            {service.id === 'business-website' && (
              <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Star className="h-3 w-3" />
                <span>{language === 'en' ? 'Most Popular' : 'Meest Populair'}</span>
              </div>
            )}

            {/* Complexity Badge */}
            {service.complexity && (
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-3 border ${
                complexityColors[service.complexity]
              }`}>
                {service.complexity === 'simple' && (language === 'en' ? 'Simple' : 'Eenvoudig')}
                {service.complexity === 'medium' && (language === 'en' ? 'Advanced' : 'Geavanceerd')}
                {service.complexity === 'complex' && (language === 'en' ? 'Complex' : 'Complex')}
              </div>
            )}

            {/* Service Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                {serviceIcons[service.id] || <Code2 className="h-6 w-6" />}
              </div>
              
              {service.price && (
                <div className="text-right">
                  {service.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through mb-1">
                      {service.originalPrice.to 
                        ? `${formatPrice(service.originalPrice.from, service.originalPrice.currency)} - ${formatPrice(service.originalPrice.to, service.originalPrice.currency)}`
                        : `${formatPrice(service.originalPrice.from, service.originalPrice.currency)}+`
                      }
                    </div>
                  )}
                  
                  <div className="font-bold text-lg text-green-600">
                    {service.price.to 
                      ? `${formatPrice(service.price.from, service.price.currency)} - ${formatPrice(service.price.to, service.price.currency)}`
                      : `${formatPrice(service.price.from, service.price.currency)}+`
                    }
                  </div>
                  
                  {service.originalPrice && discountPercentage > 0 && (
                    <div className="text-xs text-green-600 font-medium">
                      {discountPercentage}% {language === 'en' ? 'OFF' : 'KORTING'}
                    </div>
                  )}
                  
                  <div className="text-xs text-muted-foreground">
                    {service.price.period === 'project' && (language === 'en' ? 'per project' : 'per project')}
                    {service.price.period === 'month' && (language === 'en' ? 'per month' : 'per maand')}
                    {service.price.period === 'hour' && (language === 'en' ? 'per hour' : 'per uur')}
                  </div>
                </div>
              )}
            </div>

            {/* Service Content */}
            <h3 className="text-xl font-semibold mb-3">{getText(service.title)}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {getText(service.description)}
            </p>

            {/* Timeline */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
              <Clock className="h-4 w-4" />
              <span>{getText(service.timeline)}</span>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-6">
              {getArray(service.features).slice(0, 6).map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              {getArray(service.features).length > 6 && (
                <div className="text-sm text-muted-foreground">
                  +{getArray(service.features).length - 6} {language === 'en' ? 'more features' : 'meer functies'}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button 
              variant={service.id === 'business-website' ? 'gradient' : 'outline'}
              className={`w-full transition-colors ${
                service.id === 'business-website' 
                  ? '' 
                  : 'group-hover:border-primary group-hover:text-primary'
              }`}
              asChild
            >
              <a href="#contact">
                {language === 'en' ? 'Get Started' : 'Begin Nu'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Process Section */}
      <motion.div variants={itemVariants}>
        <div className="text-center mb-6 md:mb-12">
          <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
            {language === 'en' ? 'Simple Process' : 'Eenvoudig Proces'}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            {language === 'en' 
              ? 'From idea to live website in just a few steps'
              : 'Van idee naar live website in slechts een paar stappen'
            }
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0"></div>
              )}

              <div className="relative bg-card p-3 md:p-6 rounded-lg md:rounded-xl border border-border text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm md:text-lg mx-auto mb-2 md:mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold text-xs md:text-base mb-1 md:mb-2">{getText(step.title)}</h4>
                <div className="text-xs md:text-sm text-primary font-medium">
                  {getText(step.duration)}
                </div>
                <p className="hidden md:block text-sm text-muted-foreground mb-3 mt-2">
                  {getText(step.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        variants={itemVariants}
        className="mt-8 md:mt-16 text-center bg-gradient-to-br from-primary/5 to-primary/10 p-4 md:p-8 rounded-lg md:rounded-xl border border-primary/20"
      >
        <div className="flex items-center justify-center space-x-1 md:space-x-2 mb-2 md:mb-4">
          <Award className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          <h3 className="text-lg md:text-2xl font-bold">
            {language === 'en' ? 'Ready to Start?' : 'Klaar Om Te Starten?'}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
          {discountPercentage > 0 
            ? (language === 'en' 
                ? `Get ${discountPercentage}% off your website today!`
                : `Krijg ${discountPercentage}% korting op je website vandaag!`
              )
            : (language === 'en' 
                ? 'Get your professional website built with modern technologies.'
                : 'Laat je professionele website bouwen met moderne technologieën.'
              )
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button variant="gradient" size="default" className="w-full sm:w-auto" asChild>
            <a href="#contact">
              {language === 'en' ? 'Start My Project' : 'Start Mijn Project'}
            </a>
          </Button>
          <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
            <a href="tel:+31619948201">
              {language === 'en' ? 'Call Now' : 'Bel Nu'}
            </a>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          {language === 'en' 
            ? 'No obligation consultation • Free quote within 24 hours'
            : 'Vrijblijvende consultatie • Gratis offerte binnen 24 uur'
          }
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function ServicesSection({ language, viewMode }: SectionProps) {
  // Don't render at all in professional mode
  if (viewMode !== 'freelance') {
    return null
  }

  return (
    <section id="services" className="section-padding">
      <div className="container-padding">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Section Header */}
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              {language === 'en' ? 'Website Development' : 'Website Ontwikkeling'}
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Professional websites for North Holland businesses'
                : 'Professionele websites voor Noord-Holland bedrijven'
              }
            </p>
          </motion.div>

          {/* Services Content */}
          <ServicesContent language={language} />
        </motion.div>
      </div>
    </section>
  )
}