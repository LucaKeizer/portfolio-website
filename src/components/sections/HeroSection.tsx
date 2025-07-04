'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code2, Database, Cloud, Briefcase, Globe, Linkedin, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionProps } from '@/types'
import { calculateYearsOfExperience } from '@/lib/utils'
import { shouldShowDiscountBanner, getCurrentDiscount } from '@/data/services'

const startDate = new Date('2022-04-01') // Your career start date
const yearsOfExperience = calculateYearsOfExperience(startDate)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Animation variants for mode switching
const modeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export default function HeroSection({ language, viewMode }: SectionProps) {
  const isFreelance = viewMode === 'freelance'
  const isProfessional = viewMode === 'professional'
  const showDiscountBanner = shouldShowDiscountBanner()
  const currentDiscount = getCurrentDiscount()

  return (
    <section className="min-h-[70vh] md:min-h-screen lg:min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="container-padding text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Main Content */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          
          {/* Greeting - More compact on mobile */}
          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-lg text-muted-foreground mb-2 md:mb-4"
          >
            {language === 'en' ? 'Hello, I\'m' : 'Hallo, ik ben'}
          </motion.p>

          {/* Name - Smaller on mobile */}
          <motion.h1 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6"
          >
            <span className="gradient-text">Luca Keizer</span>
          </motion.h1>

          {/* Title/Role - More compact on mobile */}
          <motion.h2 
            key={`title-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-3 md:mb-8"
          >
            {isFreelance ? (
              language === 'en' 
                ? 'Custom Web Developer'
                : 'Custom Webontwikkelaar'
            ) : (
              language === 'en'
                ? 'Software Engineer'
                : 'Software Engineer'
            )}
          </motion.h2>

          {/* Description - Much shorter on mobile */}
          <motion.div 
            key={`description-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="mb-4 md:mb-8 max-w-3xl mx-auto"
          >
            {/* Mobile version - very concise */}
            <p className="text-sm md:hidden text-muted-foreground leading-relaxed">
              {isFreelance ? (
                language === 'en' 
                  ? `Professional websites for North Holland businesses. Hand-coded, fast & secure.`
                  : `Professionele websites voor Noord-Holland bedrijven. Handgecodeerd, snel & veilig.`
              ) : (
                language === 'en'
                  ? `${yearsOfExperience}+ years building scalable solutions with Python & TypeScript.`
                  : `${yearsOfExperience}+ jaar het bouwen van schaalbare oplossingen met Python & TypeScript.`
              )}
            </p>
            
            {/* Desktop version - full text */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed hidden md:block">
              {isFreelance ? (
                language === 'en' 
                  ? `Professional hand-coded websites for local businesses in North Holland. Built from scratch with modern technologies - no templates, just fast and secure custom solutions. ${yearsOfExperience}+ years of professional software engineering experience.`
                  : `Professionele handgecodeerde websites voor lokale bedrijven in Noord-Holland. Vanaf nul gebouwd met moderne technologieën - geen templates, alleen snelle en veilige custom oplossingen. ${yearsOfExperience}+ jaar professionele software engineering ervaring.`
              ) : (
                language === 'en'
                  ? `Passionate about building scalable solutions with Python, TypeScript, and modern cloud technologies. ${yearsOfExperience}+ years of experience in full-stack development and data analysis.`
                  : `Gepassioneerd over het bouwen van schaalbare oplossingen met Python, TypeScript en moderne cloud technologieën. ${yearsOfExperience}+ jaar ervaring in full-stack ontwikkeling en data-analyse.`
              )}
            </p>
          </motion.div>

          {/* Quality Badges - Hidden on mobile to save space */}
          {isFreelance && (
            <motion.div 
              variants={itemVariants}
              className="hidden md:flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-6 md:mb-8 text-xs md:text-sm"
            >
              <div className="flex items-center space-x-1 md:space-x-2 text-muted-foreground">
                <Code2 className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                <span className="font-medium">
                  {language === 'en' ? 'Custom Coded' : 'Custom Gecodeerd'}
                </span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2 text-muted-foreground">
                <Zap className="h-3 w-3 md:h-4 md:w-4 text-purple-600" />
                <span className="font-medium">
                  {language === 'en' ? 'Lightning Fast' : 'Bliksem Snel'}
                </span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2 text-muted-foreground">
                <Shield className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
                <span className="font-medium">
                  {language === 'en' ? 'Professional Quality' : 'Professionele Kwaliteit'}
                </span>
              </div>
            </motion.div>
          )}

          {/* Tech Stack Icons - Smaller and fewer on mobile */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-3 md:space-x-6 mb-6 md:mb-12"
          >
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Code2 className="h-3 w-3 md:h-5 md:w-5" />
              <span className="text-xs md:text-sm font-medium">Python</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Globe className="h-3 w-3 md:h-5 md:w-5" />
              <span className="text-xs md:text-sm font-medium">TypeScript</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1 text-muted-foreground">
              <Database className="h-3 w-3 md:h-5 md:w-5" />
              <span className="text-xs md:text-sm font-medium">React</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1 text-muted-foreground">
              <Cloud className="h-3 w-3 md:h-5 md:w-5" />
              <span className="text-xs md:text-sm font-medium">Azure</span>
            </div>
          </motion.div>

          {/* Discount Banner - More compact on mobile */}
          {isFreelance && showDiscountBanner && (
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border border-orange-300 dark:border-orange-700 rounded-lg md:rounded-xl p-2 md:p-4 mb-6 md:mb-12 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-1 md:space-x-2 mb-1">
                <Zap className="h-3 w-3 md:h-4 md:w-4 text-orange-600" />
                <span className="font-bold text-orange-800 dark:text-orange-200 text-xs md:text-sm">
                  {language === 'en' ? currentDiscount.bannerInfo.title.en : currentDiscount.bannerInfo.title.nl}
                </span>
              </div>
              <p className="text-orange-700 dark:text-orange-300 text-xs md:text-sm text-center">
                {language === 'en' 
                  ? 'Professional custom websites at portfolio prices!'
                  : 'Professionele custom websites tegen portfolio prijzen!'
                }
              </p>
            </motion.div>
          )}

          {/* CTA Buttons - Compact mobile layout */}
          <motion.div 
            key={`cta-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-2 md:gap-4 md:flex-row justify-center items-center mb-6 md:mb-16"
          >
            {isFreelance ? (
              <>
                <Button size="sm" className="md:!h-12 md:!px-10 md:!text-base w-full sm:w-auto max-w-xs" variant="gradient" asChild>
                  <a href="#contact">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {language === 'en' ? 'Start Your Project' : 'Start Je Project'}
                  </a>
                </Button>
                <Button size="sm" className="md:!h-12 md:!px-10 md:!text-base w-full sm:w-auto max-w-xs" variant="outline" asChild>
                  <a href="#services">
                    {language === 'en' ? 'View Services' : 'Bekijk Diensten'}
                  </a>
                </Button>
              </>
            ) : (
              <>
                <Button size="sm" className="md:!h-12 md:!px-10 md:!text-base w-full sm:w-auto max-w-xs" variant="gradient" asChild>
                  <a href="https://www.linkedin.com/in/lucakeizer/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center">
                    <Linkedin className="h-4 w-4 mr-2" />
                    {language === 'en' ? 'LinkedIn' : 'LinkedIn'}
                  </a>
                </Button>
                <Button size="sm" className="md:!h-12 md:!px-10 md:!text-base w-full sm:w-auto max-w-xs" variant="outline" asChild>
                  <a href="#contact">
                    {language === 'en' ? 'Contact' : 'Contact'}
                  </a>
                </Button>
              </>
            )}
          </motion.div>

          {/* Location & Availability - More compact on mobile */}
          <motion.div 
            key={`location-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="text-center text-muted-foreground"
          >
            <p className="text-xs md:text-sm">
              📍 {language === 'en' ? 'Volendam, Netherlands' : 'Volendam, Nederland'}
            </p>
            {isFreelance && (
              <p className="text-xs md:text-sm mt-1">
                ✅ {language === 'en' ? 'Available for projects' : 'Beschikbaar voor projecten'}
              </p>
            )}
            {isProfessional && (
              <p className="text-xs md:text-sm mt-1">
                💼 {language === 'en' ? 'Open to opportunities' : 'Open voor kansen'}
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile to save space */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}