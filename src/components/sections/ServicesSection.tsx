'use client'

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
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionProps, LocalizedContent } from '@/types'
import { services, processSteps, discountInfo } from '@/data/services'

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
  'simple-website': <Globe className="h-6 w-6" />,
  'business-website': <Calendar className="h-6 w-6" />,
  'custom-website': <Code2 className="h-6 w-6" />
}

const complexityColors = {
  simple: 'bg-green-100 text-green-700 border-green-300',
  medium: 'bg-blue-100 text-blue-700 border-blue-300', 
  complex: 'bg-purple-100 text-purple-700 border-purple-300'
}

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

function calculateDiscount(original: number, current: number) {
  return Math.round(((original - current) / original) * 100)
}

function ServicesContent({ language }: { language: 'en' | 'nl' }) {
  // Helper function to get localized text
  const getText = (content: LocalizedContent): string => {
    return content[language]
  }

  // Helper function to get localized array
  const getArray = (content: { en: string[]; nl: string[] }): string[] => {
    return content[language]
  }

  return (
    <motion.div
      variants={modeContentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Special Discount Banner */}
      <motion.div 
        variants={itemVariants}
        className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800"
      >
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Zap className="h-5 w-5 text-orange-600" />
            <span className="text-lg font-bold text-orange-800 dark:text-orange-200">
              {getText(discountInfo.title)}
            </span>
            <Zap className="h-5 w-5 text-orange-600" />
          </div>
          <p className="text-orange-700 dark:text-orange-300 font-medium mb-3">
            {getText(discountInfo.subtitle)}
          </p>
          <p className="text-sm text-orange-600 dark:text-orange-400 max-w-2xl mx-auto mb-4">
            {getText(discountInfo.description)}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-3xl mx-auto mb-4">
            {discountInfo.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-orange-700 dark:text-orange-300">
                <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                <span>{getText(feature)}</span>
              </div>
            ))}
          </div>
          <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg border border-orange-300 dark:border-orange-700">
            <p className="text-sm font-medium text-orange-800 dark:text-orange-200">
              {getText(discountInfo.limitations)}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            variants={itemVariants}
            className={`bg-card p-6 rounded-xl border border-border card-hover group relative`}
          >
            
            {/* Popular Badge for Business Website */}
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
                  {/* Original Price (crossed out) */}
                  {service.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through mb-1">
                      {service.originalPrice.to 
                        ? `${formatPrice(service.originalPrice.from, service.originalPrice.currency)} - ${formatPrice(service.originalPrice.to, service.originalPrice.currency)}`
                        : `${formatPrice(service.originalPrice.from, service.originalPrice.currency)}+`
                      }
                    </div>
                  )}
                  
                  {/* Current Price */}
                  <div className="font-bold text-lg text-green-600">
                    {service.price.to 
                      ? `${formatPrice(service.price.from, service.price.currency)} - ${formatPrice(service.price.to, service.price.currency)}`
                      : `${formatPrice(service.price.from, service.price.currency)}+`
                    }
                  </div>
                  
                  {/* Discount Percentage */}
                  {service.originalPrice && (
                    <div className="text-xs text-green-600 font-medium">
                      {calculateDiscount(
                        service.originalPrice.from, 
                        service.price.from
                      )}% {language === 'en' ? 'OFF' : 'KORTING'}
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
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'How We Build Your Website' : 'Hoe We Je Website Bouwen'}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'A transparent, step-by-step process to ensure you get exactly what your business needs'
              : 'Een transparant, stap-voor-stap proces om ervoor te zorgen dat je precies krijgt wat je bedrijf nodig heeft'
            }
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0"></div>
              )}

              {/* Step Content */}
              <div className="relative bg-card p-6 rounded-xl border border-border text-center">
                
                {/* Step Number */}
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>

                {/* Step Title */}
                <h4 className="font-semibold mb-2">{getText(step.title)}</h4>
                
                {/* Step Description */}
                <p className="text-sm text-muted-foreground mb-3">
                  {getText(step.description)}
                </p>

                {/* Duration */}
                <div className="text-xs text-primary font-medium">
                  {getText(step.duration)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        variants={itemVariants}
        className="mt-16 text-center bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Award className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">
            {language === 'en' ? 'Ready to Get Your Website?' : 'Klaar Om Je Website Te Krijgen?'}
          </h3>
        </div>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Join the first 5 businesses to get a professional website at an incredible discount. Limited time offer!'
            : 'Sluit je aan bij de eerste 5 bedrijven om een professionele website te krijgen met een ongelooflijke korting. Beperkte tijd aanbieding!'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" size="lg" asChild>
            <a href="#contact">
              {language === 'en' ? 'Start My Website Project' : 'Start Mijn Website Project'}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:+31619948201">
              {language === 'en' ? 'Call for Quick Chat' : 'Bel Voor Kort Gesprek'}
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'Website Development Services' : 'Website Ontwikkeling Diensten'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Professional websites for North Holland businesses - from simple landing pages to complete e-commerce solutions'
                : 'Professionele websites voor Noord-Holland bedrijven - van eenvoudige landingspagina\'s tot complete e-commerce oplossingen'
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