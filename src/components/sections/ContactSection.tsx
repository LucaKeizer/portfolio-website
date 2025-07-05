'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  AlertCircle,
  Loader2,
  Linkedin,
  MessageCircle,
  Clock
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
          viewMode
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

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'keizerluca@gmail.com',
      href: 'mailto:keizerluca@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: language === 'en' ? 'Phone' : 'Telefoon',
      value: '+31 06 1994 8201',
      href: 'tel:+31619948201',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: '@lucakeizer',
      href: 'https://www.linkedin.com/in/lucakeizer/',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
          }} />
        </div>
      </div>

      <div className="container-padding relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-lg mb-6">
              <MessageCircle className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-slate-900 dark:text-white">
                {language === 'en' ? 'Let\'s Work Together' : 'Laten We Samenwerken'}
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {isFreelance
                ? (language === 'en' 
                    ? 'Ready to transform your business with a professional website? Let\'s discuss your project.'
                    : 'Klaar om je bedrijf te transformeren met een professionele website? Laten we je project bespreken.'
                  )
                : (language === 'en'
                    ? 'Interested in working together? I\'d love to hear about new opportunities and challenges.'
                    : 'Geïnteresseerd in samenwerking? Ik hoor graag over nieuwe kansen en uitdagingen.'
                  )
              }
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            
            {/* Left Column - Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-8">
              
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={itemVariants}
                    className="flex items-center space-x-3 lg:space-x-4 p-4 lg:p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className={`p-3 lg:p-4 bg-gradient-to-br ${method.color} rounded-lg lg:rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white mb-1 text-sm lg:text-base">
                        {method.title}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 text-sm lg:text-base">
                        {method.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Location & Availability */}
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/20 shadow-lg">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="p-2 lg:p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg lg:rounded-xl">
                    <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm lg:text-base">
                      {language === 'en' ? 'Location & Availability' : 'Locatie & Beschikbaarheid'}
                    </h4>
                    <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3 w-3 lg:h-4 lg:w-4" />
                        <span>{language === 'en' ? 'Volendam, Netherlands' : 'Volendam, Nederland'}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>
                          {isFreelance 
                            ? (language === 'en' ? 'Available for projects' : 'Beschikbaar voor projecten')
                            : (language === 'en' ? 'Open to opportunities' : 'Open voor kansen')
                          }
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3 lg:h-4 lg:w-4" />
                        <span>
                          {language === 'en' 
                            ? 'Usually responds within 24 hours'
                            : 'Reageert meestal binnen 24 uur'
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {language === 'en' ? 'Send a Message' : 'Stuur een Bericht'}
                </h3>

                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg flex items-start space-x-3 mb-6 ${
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {language === 'en' ? 'Name' : 'Naam'} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm"
                        placeholder={language === 'en' ? 'Your name' : 'Je naam'}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm"
                        placeholder="your@email.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Company (Optional) */}
                  {isFreelance && (
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {language === 'en' ? 'Company' : 'Bedrijf'} ({language === 'en' ? 'optional' : 'optioneel'})
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm"
                        placeholder={language === 'en' ? 'Your company name' : 'Je bedrijfsnaam'}
                        disabled={isSubmitting}
                      />
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {language === 'en' ? 'Message' : 'Bericht'} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-vertical bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm"
                      placeholder={
                        isFreelance 
                          ? (language === 'en' 
                              ? 'Tell me about your project, goals, and how I can help...'
                              : 'Vertel me over je project, doelen en hoe ik kan helpen...'
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

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>
                          {language === 'en' ? 'Sending...' : 'Versturen...'}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>
                          {language === 'en' ? 'Send Message' : 'Bericht Versturen'}
                        </span>
                      </div>
                    )}
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                    {language === 'en' 
                      ? 'Your information is safe and will only be used to respond to your inquiry.'
                      : 'Je informatie is veilig en wordt alleen gebruikt om te reageren op je aanvraag.'
                    }
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}