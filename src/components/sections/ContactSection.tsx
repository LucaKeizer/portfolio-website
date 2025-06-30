'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
  Loader2
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

  return (
    <section id="contact" className="section-padding bg-muted/30">
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
              {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isFreelance
                ? (language === 'en'
                    ? 'Ready to start your next web project? Let\'s discuss how I can help your business succeed online.'
                    : 'Klaar om je volgende webproject te starten? Laten we bespreken hoe ik je bedrijf online kan helpen slagen.'
                  )
                : (language === 'en'
                    ? 'Interested in working together? I\'d love to hear about opportunities and discuss how I can contribute to your team.'
                    : 'Geïnteresseerd in samenwerking? Ik hoor graag over kansen en bespreek graag hoe ik kan bijdragen aan je team.'
                  )
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
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

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="bg-card p-6 rounded-xl border border-border space-y-6">
                
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'en' ? 'Send a Message' : 'Stuur een Bericht'}
                </h3>

                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg flex items-start space-x-3 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200' 
                      : 'bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{submitStatus.message}</span>
                  </div>
                )}

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Name' : 'Naam'} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 bg-background input-focus"
                        placeholder={language === 'en' ? 'Your name' : 'Je naam'}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 bg-background input-focus"
                        placeholder="your@email.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                {/* Company (for freelance) */}
                {isFreelance && (
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Company' : 'Bedrijf'} ({language === 'en' ? 'optional' : 'optioneel'})
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-background"
                        placeholder={language === 'en' ? 'Your company name' : 'Je bedrijfsnaam'}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                )}

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Subject' : 'Onderwerp'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-background"
                    placeholder={
                      isFreelance 
                        ? (language === 'en' ? 'e.g., Website project inquiry' : 'bijv. Website project aanvraag')
                        : (language === 'en' ? 'e.g., Job opportunity' : 'bijv. Baan mogelijkheid')
                    }
                    disabled={isSubmitting}
                  />
                </div>

                {/* Project-specific fields for freelance */}
                {isFreelance && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        {language === 'en' ? 'Budget Range' : 'Budget Bereik'} ({language === 'en' ? 'optional' : 'optioneel'})
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-background"
                        disabled={isSubmitting}
                      >
                        <option value="">
                          {language === 'en' ? 'Select budget range' : 'Selecteer budget bereik'}
                        </option>
                        <option value="under-500">€ 150 - € 500</option>
                        <option value="500-1000">€ 500 - € 1.000</option>
                        <option value="1000-plus">€ 1.000+</option>
                        <option value="discuss">
                          {language === 'en' ? 'Let\'s discuss' : 'Laten we bespreken'}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                        {language === 'en' ? 'Timeline' : 'Tijdlijn'} ({language === 'en' ? 'optional' : 'optioneel'})
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-background"
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

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Message' : 'Bericht'} *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-vertical bg-background"
                      placeholder={
                        isFreelance 
                          ? (language === 'en' 
                              ? 'Tell me about your project, goals, and what you\'re looking to achieve...'
                              : 'Vertel me over je project, doelen en wat je wilt bereiken...'
                            )
                          : (language === 'en'
                              ? 'Tell me about the opportunity, role, or how we might work together...'
                              : 'Vertel me over de kans, rol of hoe we zouden kunnen samenwerken...'
                            )
                      }
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    {language === 'en' ? 'Preferred Contact Method' : 'Voorkeur Contactmethode'}
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['email', 'phone', 'either'] as const).map((method) => (
                      <label key={method} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-border"
                          disabled={isSubmitting}
                        />
                        <span className="text-sm">
                          {method === 'email' && 'Email'}
                          {method === 'phone' && (language === 'en' ? 'Phone' : 'Telefoon')}
                          {method === 'either' && (language === 'en' ? 'Either' : 'Beiden')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  variant="gradient" 
                  size="lg" 
                  className="w-full"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>
                        {language === 'en' ? 'Sending...' : 'Versturen...'}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}