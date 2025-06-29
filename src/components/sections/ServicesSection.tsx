'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Calendar, 
  BarChart3, 
  Cog, 
  MessageSquare, 
  Wrench,
  Euro,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionProps } from '@/types'
import { services, processSteps } from '@/data/services'

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

const serviceIcons: Record<string, React.ReactNode> = {
  'web-development': <Code2 className="h-6 w-6" />,
  'booking-systems': <Calendar className="h-6 w-6" />,
  'automation': <Cog className="h-6 w-6" />,
  'data-analysis': <BarChart3 className="h-6 w-6" />,
  'consultation': <MessageSquare className="h-6 w-6" />,
  'maintenance': <Wrench className="h-6 w-6" />
}

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export default function ServicesSection({ language, viewMode }: SectionProps) {
  if (viewMode !== 'freelance') return null

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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'Services & Solutions' : 'Diensten & Oplossingen'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Professional web development and automation services for businesses in North Holland'
                : 'Professionele webontwikkeling en automatiseringsdiensten voor bedrijven in Noord-Holland'
              }
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                className="bg-card p-6 rounded-xl border border-border card-hover group"
              >
                
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {serviceIcons[service.id] || <Code2 className="h-6 w-6" />}
                  </div>
                  
                  {service.price && (
                    <div className="text-right">
                      <div className="font-bold text-lg">
                        {service.price.to 
                          ? `${formatPrice(service.price.from, service.price.currency)} - ${formatPrice(service.price.to, service.price.currency)}`
                          : `${formatPrice(service.price.from, service.price.currency)}+`
                        }
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {service.price.period === 'project' && (language === 'en' ? 'per project' : 'per project')}
                        {service.price.period === 'month' && (language === 'en' ? 'per month' : 'per maand')}
                        {service.price.period === 'hour' && (language === 'en' ? 'per hour' : 'per uur')}
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Timeline */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4" />
                  <span>{service.timeline}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-muted-foreground">
                      +{service.features.length - 4} {language === 'en' ? 'more features' : 'meer functies'}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  asChild
                >
                  <a href="#contact">
                    {language === 'en' ? 'Get Quote' : 'Offerte Aanvragen'}
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
                {language === 'en' ? 'How We Work Together' : 'Hoe We Samenwerken'}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'A transparent, collaborative process designed to deliver exactly what your business needs'
                  : 'Een transparant, samenwerkingsproces ontworpen om precies te leveren wat je bedrijf nodig heeft'
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
                    <h4 className="font-semibold mb-2">{step.title[language]}</h4>
                    
                    {/* Step Description */}
                    <p className="text-sm text-muted-foreground mb-3">
                      {step.description[language]}
                    </p>

                    {/* Duration */}
                    <div className="text-xs text-primary font-medium">
                      {step.duration}
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
            <h3 className="text-2xl font-bold mb-4">
              {language === 'en' ? 'Ready to Start Your Project?' : 'Klaar Om Je Project Te Starten?'}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Let\'s discuss your needs and create a solution that drives real results for your business.'
                : 'Laten we je behoeften bespreken en een oplossing creëren die echte resultaten oplevert voor je bedrijf.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <a href="#contact">
                  {language === 'en' ? 'Start Your Project' : 'Start Je Project'}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+31619948201">
                  {language === 'en' ? 'Call for Quick Chat' : 'Bel Voor Kort Gesprek'}
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}