'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code2, Database, Cloud, Briefcase, Globe, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionProps } from '@/types'
import { calculateYearsOfExperience } from '@/lib/utils'

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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
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
          
          {/* Greeting */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-4"
          >
            {language === 'en' ? 'Hello, I\'m' : 'Hallo, ik ben'}
          </motion.p>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Luca Keizer</span>
          </motion.h1>

          {/* Title/Role - Animated based on mode */}
          <motion.h2 
            key={`title-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-8"
          >
            {isFreelance ? (
              language === 'en' 
                ? 'Freelance Web Developer & Software Engineer'
                : 'Freelance Webontwikkelaar & Software Engineer'
            ) : (
              language === 'en'
                ? 'Software Engineer & Full-Stack Developer'
                : 'Software Engineer & Full-Stack Developer'
            )}
          </motion.h2>

          {/* Description - Animated based on mode */}
          <motion.p 
            key={`description-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            {isFreelance ? (
              language === 'en' 
                ? `Helping businesses in North Holland build modern, scalable websites and web applications. ${yearsOfExperience}+ years of professional software engineering experience.`
                : `Help bedrijven in Noord-Holland bij het bouwen van moderne, schaalbare websites en webapplicaties. ${yearsOfExperience}+ jaar professionele software engineering ervaring.`
            ) : (
              language === 'en'
                ? `Passionate about building scalable solutions with Python, TypeScript, and modern cloud technologies. ${yearsOfExperience}+ years of experience in full-stack development and data analysis.`
                : `Gepassioneerd over het bouwen van schaalbare oplossingen met Python, TypeScript en moderne cloud technologieën. ${yearsOfExperience}+ jaar ervaring in full-stack ontwikkeling en data-analyse.`
            )}
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-6 mb-12"
          >
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Code2 className="h-5 w-5" />
              <span className="text-sm font-medium">Python</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">TypeScript</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Database className="h-5 w-5" />
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Cloud className="h-5 w-5" />
              <span className="text-sm font-medium">Azure</span>
            </div>
          </motion.div>

          {/* CTA Buttons - Animated based on mode */}
          <motion.div 
            key={`cta-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {isFreelance ? (
              <>
                <Button size="xl" variant="gradient" asChild>
                  <a href="#contact">
                    <Briefcase className="h-5 w-5 mr-2" />
                    {language === 'en' ? 'Start Your Project' : 'Start Je Project'}
                  </a>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <a href="#projects">
                    {language === 'en' ? 'View My Work' : 'Bekijk Mijn Werk'}
                  </a>
                </Button>
              </>
            ) : (
              <>
                <Button size="xl" variant="gradient" asChild>
                  <a href="https://www.linkedin.com/in/lucakeizer/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center">
                    <Linkedin className="h-5 w-5 mr-2" />
                    {language === 'en' ? 'Connect on LinkedIn' : 'Verbind op LinkedIn'}
                  </a>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <a href="#contact">
                    {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
                  </a>
                </Button>
              </>
            )}
          </motion.div>

          {/* Location & Availability - Animated based on mode */}
          <motion.div 
            key={`location-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="text-center text-muted-foreground"
          >
            <p className="text-sm">
              📍 {language === 'en' ? 'Based in Volendam, Netherlands' : 'Gevestigd in Volendam, Nederland'}
            </p>
            {isFreelance && (
              <p className="text-sm mt-1">
                ✅ {language === 'en' ? 'Available for new projects' : 'Beschikbaar voor nieuwe projecten'}
              </p>
            )}
            {isProfessional && (
              <p className="text-sm mt-1">
                💼 {language === 'en' ? 'Open to new opportunities' : 'Open voor nieuwe kansen'}
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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