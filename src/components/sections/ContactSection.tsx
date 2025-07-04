'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Calendar,
  MessageSquare,
  User,
  Building,
  CheckCircle,
  AlertCircle,
  Clock,
  Loader2,
  Linkedin,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionProps, ContactFormData } from '@/types'

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

export default function ContactSection({ language, viewMode }: SectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    subject: '',
    preferredContact: 'email',
    projectType: '',
    budget: '',
    timeline: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  
  const [showAdvancedForm, setShowAdvancedForm] = useState(true) // Show form by default

  const isFreelance = viewMode === 'freelance'

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          viewMode // Include current view mode for email context
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: language === 'en' 
            ? 'Message sent successfully! I\'ll get back to you within 24 hours.'
            : 'Bericht succesvol verzonden! Ik neem binnen 24 uur contact met je op.'
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          subject: '',
          preferredContact: 'email',
          projectType: '',
          budget: '',
          timeline: ''
        })
        setShowAdvancedForm(false)
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
      
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus({
        type: 'error',
        message: language === 'en' 
          ? 'Failed to send message. Please try emailing me directly at keizerluca@gmail.com'
          : 'Kon bericht niet verzenden. Stuur me alsjeblieft direct een email naar keizerluca@gmail.com'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleQuickContact = (method: 'email' | 'phone') => {
    if (method === 'email') {
      window.location.href = 'mailto:keizerluca@gmail.com'
    } else {
      window.location.href = 'tel:+31619948201'
    }
  }

  return (
    <section id="contact" className="section-padding bg-muted/30 min-h-screen">
      <div className="container-padding">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pb-8 md:pb-0" // Extra bottom padding on mobile
        >
          
          {/* Section Header - More compact on mobile */}
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {isFreelance
                ? (language === 'en'
                    ? 'Ready to start your project? Let\'s discuss how I can help your business.'
                    : 'Klaar om je project te starten? Laten we bespreken hoe ik je bedrijf kan helpen.'
                  )
                : (language === 'en'
                    ? 'Interested in working together? I\'d love to hear about opportunities.'
                    : 'Geïnteresseerd in samenwerking? Ik hoor graag over kansen.'
                  )
              }
            </p>
          </motion.div>

          {/* Mobile-First Layout with improved spacing */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Quick Contact Options - Mobile Priority with better spacing */}
            <motion.div variants={itemVariants} className="md:hidden space-y-4">
              <h3 className="text-lg font-semibold mb-4 text-center">
                {language === 'en' ? 'Quick Contact' : 'Snel Contact'}
              </h3>
              <div className="grid grid-cols-1 gap-3 mb-6">
                <button
                  onClick={() => handleQuickContact('email')}
                  className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors min-h-[60px]"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">
                      {language === 'en' ? 'Send Email' : 'Stuur Email'}
                    </div>
                    <div className="text-sm text-muted-foreground">keizerluca@gmail.com</div>
                  </div>
                </button>

                <button
                  onClick={() => handleQuickContact('phone')}
                  className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors min-h-[60px]"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">
                      {language === 'en' ? 'Call Now' : 'Bel Nu'}
                    </div>
                    <div className="text-sm text-muted-foreground">+31 06 1994 8201</div>
                  </div>
                </button>

                {!isFreelance && (
                  <a
                    href="https://www.linkedin.com/in/lucakeizer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors min-h-[60px]"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">@lucakeizer</div>
                    </div>
                  </a>
                )}
              </div>

              {/* Simple divider between contact methods and form */}
              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-border"></div>
                <span className="px-3 text-xs text-muted-foreground">
                  {language === 'en' ? 'or use the form below' : 'of gebruik het formulier hieronder'}
                </span>
                <div className="flex-1 h-px bg-border"></div>
              </div>
            </motion.div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-8">
                
                {/* Contact Cards */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === 'en' ? 'Contact Information' : 'Contactinformatie'}
                  </h3>
                  
                  <a 
                    href="mailto:keizerluca@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors card-hover"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">keizerluca@gmail.com</div>
                    </div>
                  </a>

                  <a 
                    href="tel:+31619948201"
                    className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors card-hover"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">
                        {language === 'en' ? 'Phone' : 'Telefoon'}
                      </div>
                      <div className="text-muted-foreground">+31 06 1994 8201</div>
                    </div>
                  </a>

                  {!isFreelance && (
                    <a 
                      href="https://www.linkedin.com/in/lucakeizer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors card-hover"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-muted-foreground">@lucakeizer</div>
                      </div>
                    </a>
                  )}

                  <div className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">
                        {language === 'en' ? 'Location' : 'Locatie'}
                      </div>
                      <div className="text-muted-foreground">
                        {language === 'en' ? 'Volendam, Netherlands' : 'Volendam, Nederland'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold mb-3 flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>
                      {isFreelance 
                        ? (language === 'en' ? 'Availability' : 'Beschikbaarheid')
                        : (language === 'en' ? 'Response Time' : 'Reactietijd')
                      }
                    </span>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span>
                        {isFreelance 
                          ? (language === 'en' ? 'Available for new projects' : 'Beschikbaar voor nieuwe projecten')
                          : (language === 'en' ? 'Open to opportunities' : 'Open voor kansen')
                        }
                      </span>
                    </div>
                    <div className="text-muted-foreground">
                      {language === 'en' 
                        ? 'Usually responds within 24 hours'
                        : 'Reageert meestal binnen 24 uur'
                      }
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form - Desktop */}
              <motion.div variants={itemVariants}>
                <ContactForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  submitStatus={submitStatus}
                  language={language}
                  viewMode={viewMode}
                  isFreelance={isFreelance}
                  showAdvanced={true}
                />
              </motion.div>
            </div>

            {/* Mobile Contact Form - Now always visible */}
            <motion.div 
              variants={itemVariants}
              className="md:hidden"
            >
              <div className="mb-8">
                <ContactForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  submitStatus={submitStatus}
                  language={language}
                  viewMode={viewMode}
                  isFreelance={isFreelance}
                  showAdvanced={false} // Simplified for mobile
                />
              </div>
            </motion.div>

            {/* Additional mobile spacing */}
            <div className="md:hidden h-16"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Separate Contact Form Component
function ContactForm({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitting,
  submitStatus,
  language,
  viewMode,
  isFreelance,
  showAdvanced
}: {
  formData: ContactFormData
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent) => void
  isSubmitting: boolean
  submitStatus: { type: 'success' | 'error' | null; message: string }
  language: 'en' | 'nl'
  viewMode: 'freelance' | 'professional'
  isFreelance: boolean
  showAdvanced: boolean
}) {
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="bg-card p-4 md:p-6 rounded-xl border border-border space-y-4 md:space-y-6 w-full">
        
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          {language === 'en' ? 'Send a Message' : 'Stuur een Bericht'}
        </h3>

        {/* Status Message */}
        {submitStatus.type && (
          <div className={`p-3 md:p-4 rounded-lg flex items-start space-x-3 ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200' 
              : 'bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200'
          }`}>
            {submitStatus.type === 'success' ? (
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
            )}
            <span className="text-sm">{submitStatus.message}</span>
          </div>
        )}

        {/* Essential Fields with better mobile spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {language === 'en' ? 'Name' : 'Naam'} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 md:px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 bg-background text-sm md:text-base"
              placeholder={language === 'en' ? 'Your name' : 'Je naam'}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 md:px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 bg-background text-sm md:text-base"
              placeholder="your@email.com"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Message with better mobile height */}
        <div className="w-full">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {language === 'en' ? 'Message' : 'Bericht'} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={showAdvanced ? 5 : 4} // Shorter on mobile
            className="w-full px-3 md:px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-vertical bg-background text-sm md:text-base min-h-[100px]"
            placeholder={
              isFreelance 
                ? (language === 'en' 
                    ? 'Tell me about your project and what you need...'
                    : 'Vertel me over je project en wat je nodig hebt...'
                  )
                : (language === 'en'
                    ? 'Tell me about the opportunity or how we might work together...'
                    : 'Vertel me over de kans of hoe we zouden kunnen samenwerken...'
                  )
            }
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Advanced Fields - Only on Desktop or when requested */}
        {showAdvanced && isFreelance && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                {language === 'en' ? 'Budget' : 'Budget'} ({language === 'en' ? 'optional' : 'optioneel'})
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-3 md:px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-background text-sm md:text-base"
                disabled={isSubmitting}
              >
                <option value="">
                  {language === 'en' ? 'Select budget' : 'Selecteer budget'}
                </option>
                <option value="under-500">€ 150 - € 500</option>
                <option value="500-1000">€ 500 - € 1.000</option>
                <option value="1000-plus">€ 1.000+</option>
                <option value="discuss">
                  {language === 'en' ? 'Let\'s discuss' : 'Laten we bespreken'}
                </option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                {language === 'en' ? 'Timeline' : 'Tijdlijn'} ({language === 'en' ? 'optional' : 'optioneel'})
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-3 md:px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-background text-sm md:text-base"
                disabled={isSubmitting}
              >
                <option value="">
                  {language === 'en' ? 'Select timeline' : 'Selecteer tijdlijn'}
                </option>
                <option value="asap">
                  {language === 'en' ? 'As soon as possible' : 'Zo snel mogelijk'}
                </option>
                <option value="1-month">
                  {language === 'en' ? 'Within 1 month' : 'Binnen 1 maand'}
                </option>
                <option value="2-3-months">
                  {language === 'en' ? '2-3 months' : '2-3 maanden'}
                </option>
                <option value="flexible">
                  {language === 'en' ? 'Flexible' : 'Flexibel'}
                </option>
              </select>
            </div>
          </div>
        )}

        {/* Submit Button with better mobile touch target */}
        <Button 
          type="submit" 
          disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
          variant="gradient" 
          className="w-full py-3 md:py-3 min-h-[48px]" // Better touch target on mobile
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm md:text-base">
                {language === 'en' ? 'Sending...' : 'Versturen...'}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Send className="h-4 w-4" />
              <span className="text-sm md:text-base">
                {language === 'en' ? 'Send Message' : 'Bericht Versturen'}
              </span>
            </div>
          )}
        </Button>

        {/* Privacy Note */}
        <p className="text-xs text-muted-foreground text-center">
          {language === 'en' 
            ? 'Your information is safe and will only be used to respond to your inquiry.'
            : 'Je informatie is veilig en wordt alleen gebruikt om te reageren op je aanvraag.'
          }
        </p>
      </form>
    </div>
  )
}            