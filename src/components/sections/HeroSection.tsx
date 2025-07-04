'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code2, Database, Cloud, Briefcase, Globe, Linkedin, Shield, Zap, Star, Trophy, Users, Rocket, CheckCircle } from 'lucide-react'
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
      staggerChildren: 0.15
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

// Subtle floating animation
const subtleFloatVariants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function HeroSection({ language, viewMode }: SectionProps) {
  const isFreelance = viewMode === 'freelance'
  const isProfessional = viewMode === 'professional'
  const showDiscountBanner = shouldShowDiscountBanner()
  const currentDiscount = getCurrentDiscount()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient blobs - more impactful */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl"
          animate={{
            x: [-10, 10, -10],
            y: [-5, 5, -5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/12 to-blue-500/12 rounded-full blur-3xl"
          animate={{
            x: [10, -10, 10],
            y: [5, -5, 5],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Subtle floating tech icons */}
        <motion.div
          className="absolute top-32 left-20 hidden lg:block opacity-20"
          variants={subtleFloatVariants}
          animate="animate"
        >
          <div className="p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <Code2 className="h-4 w-4 text-blue-400" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 right-24 hidden lg:block opacity-20"
          variants={subtleFloatVariants}
          animate="animate"
          transition={{ delay: 2, duration: 4, repeat: Infinity }}
        >
          <div className="p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <Database className="h-4 w-4 text-green-400" />
          </div>
        </motion.div>

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <motion.div 
        className="container-padding text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Main Content */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          
          {/* Enhanced Avatar with more impact */}
          <motion.div 
            variants={itemVariants}
            className="relative inline-block mb-6 md:mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative">
              {/* More impactful border with animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 p-1.5"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
                    "linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(34, 197, 94, 0.3))",
                    "linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.3))"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center border border-border/50">
                  {/* Enhanced avatar */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl md:text-3xl shadow-lg">
                    LK
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced status indicator */}
              <motion.div 
                className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full border-3 border-background flex items-center justify-center shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.4)",
                    "0 0 0 8px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Greeting with more personality */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              className="text-2xl"
            >
              👋
            </motion.div>
            <p className="text-base md:text-lg text-muted-foreground font-medium">
              {language === 'en' ? 'Hey, I\'m' : 'Hallo, ik ben'}
            </p>
          </motion.div>

          {/* Enhanced name with more impact */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 relative"
          >
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Luca Keizer
            </motion.span>
          </motion.h1>

          {/* Enhanced title with better visual hierarchy */}
          <motion.div 
            key={`title-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="mb-6 md:mb-8"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-3">
                {isFreelance ? (
                  <motion.div
                    className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Briefcase className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
                  </motion.div>
                ) : (
                  <motion.div
                    className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl border border-purple-200 dark:border-purple-800"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Code2 className="h-6 w-6 md:h-7 md:w-7 text-purple-600" />
                  </motion.div>
                )}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground font-semibold">
                  {isFreelance ? (
                    language === 'en' 
                      ? 'Custom Web Developer'
                      : 'Custom Webontwikkelaar'
                  ) : (
                    language === 'en'
                      ? 'Software Engineer'
                      : 'Software Engineer'
                  )}
                </h2>
              </div>
              
              {/* Professional experience badge with more impact */}
              <motion.div
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <Trophy className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base font-semibold text-primary">
                  {yearsOfExperience}+ {language === 'en' ? 'years experience' : 'jaar ervaring'}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Streamlined description with more impact */}
          <motion.div 
            key={`description-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="mb-6 md:mb-8 max-w-3xl mx-auto"
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-6 md:p-8 shadow-lg">
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                {isFreelance ? (
                  language === 'en' 
                    ? (
                      <>
                        I build <strong className="text-foreground">professional custom websites</strong> for North Holland businesses. 
                        Hand-coded from scratch with <strong className="text-foreground">enterprise-quality</strong> development practices.
                      </>
                    )
                    : (
                      <>
                        Ik bouw <strong className="text-foreground">professionele custom websites</strong> voor Noord-Holland bedrijven. 
                        Handgecodeerd vanaf nul met <strong className="text-foreground">enterprise-kwaliteit</strong> ontwikkelingspraktijken.
                      </>
                    )
                ) : (
                  language === 'en'
                    ? (
                      <>
                        <strong className="text-foreground">{yearsOfExperience}+ years</strong> building scalable solutions with Python, TypeScript, and Azure. 
                        Passionate about creating <strong className="text-foreground">efficient, maintainable software</strong> that delivers real value.
                      </>
                    )
                    : (
                      <>
                        <strong className="text-foreground">{yearsOfExperience}+ jaar</strong> het bouwen van schaalbare oplossingen met Python, TypeScript en Azure. 
                        Gepassioneerd over het creëren van <strong className="text-foreground">efficiënte, onderhoudbare software</strong> die echte waarde levert.
                      </>
                    )
                )}
              </p>
              
              {/* Inline quality indicators for freelance - much more compact */}
              {isFreelance && (
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-1.5 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-medium text-foreground">
                      {language === 'en' ? 'Hand-Coded' : 'Handgecodeerd'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-sm">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium text-foreground">
                      {language === 'en' ? 'Lightning Fast' : 'Bliksem Snel'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-sm">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span className="font-medium text-foreground">
                      {language === 'en' ? 'Professional Quality' : 'Professionele Kwaliteit'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Enhanced tech stack with more visual impact */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10"
          >
            {[
              { icon: Code2, label: 'Python', color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' },
              { icon: Globe, label: 'TypeScript', color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' },
              { icon: Database, label: 'React', color: 'text-cyan-600 bg-cyan-100 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800' },
              { icon: Cloud, label: 'Azure', color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800' }
            ].map((tech, index) => (
              <motion.div
                key={tech.label}
                className={`flex items-center space-x-2 px-3 md:px-4 py-2 md:py-3 rounded-lg border ${tech.color}`}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                animate={{
                  y: [0, -3, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                <tech.icon className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-sm md:text-base font-semibold">{tech.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced discount banner */}
          {isFreelance && showDiscountBanner && (
            <motion.div 
              variants={itemVariants}
              className="mb-8 md:mb-10 max-w-2xl mx-auto"
            >
              <motion.div 
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-orange-300 relative overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(251, 146, 60, 0.3)",
                    "0 0 50px rgba(251, 146, 60, 0.6)",
                    "0 0 30px rgba(251, 146, 60, 0.3)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Zap className="h-6 w-6 md:h-7 md:w-7" />
                    </motion.div>
                    <span className="font-bold text-xl md:text-2xl">
                      {language === 'en' ? currentDiscount.bannerInfo.title.en : currentDiscount.bannerInfo.title.nl}
                    </span>
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star className="h-6 w-6 md:h-7 md:w-7" />
                    </motion.div>
                  </div>
                  <p className="text-base md:text-lg text-center opacity-95">
                    {language === 'en' 
                      ? '🎯 Professional custom development at unbeatable portfolio prices!'
                      : '🎯 Professionele custom ontwikkeling tegen onverslaanbare portfolio prijzen!'
                    }
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Enhanced CTA buttons with more impact */}
          <motion.div 
            key={`cta-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12"
          >
            {isFreelance ? (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="!h-14 !px-8 !text-lg w-full sm:w-auto min-w-[220px] shadow-xl" 
                    variant="gradient" 
                    asChild
                  >
                    <a href="#contact" className="flex items-center">
                      <Rocket className="h-5 w-5 mr-2" />
                      {language === 'en' ? 'Start Your Project' : 'Start Je Project'}
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="!h-14 !px-8 !text-lg w-full sm:w-auto min-w-[220px]" 
                    variant="outline" 
                    asChild
                  >
                    <a href="#services" className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      {language === 'en' ? 'View Services' : 'Bekijk Diensten'}
                    </a>
                  </Button>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="!h-14 !px-8 !text-lg w-full sm:w-auto min-w-[220px] shadow-xl" 
                    variant="gradient" 
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/lucakeizer/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Linkedin className="h-5 w-5 mr-2" />
                      {language === 'en' ? 'LinkedIn Profile' : 'LinkedIn Profiel'}
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="!h-14 !px-8 !text-lg w-full sm:w-auto min-w-[220px]" 
                    variant="outline" 
                    asChild
                  >
                    <a href="#contact" className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
                    </a>
                  </Button>
                </motion.div>
              </>
            )}
          </motion.div>

          {/* Enhanced location & availability */}
          <motion.div 
            key={`location-${viewMode}`}
            variants={modeVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 px-6 py-4 bg-muted/50 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-lg"
                >
                  📍
                </motion.div>
                <span className="text-sm md:text-base font-medium">
                  {language === 'en' ? 'Volendam, Netherlands' : 'Volendam, Nederland'}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
                <span className="text-sm md:text-base font-medium">
                  {isFreelance 
                    ? (language === 'en' ? 'Available for projects' : 'Beschikbaar voor projecten')
                    : (language === 'en' ? 'Open to opportunities' : 'Open voor kansen')
                  }
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  )
}