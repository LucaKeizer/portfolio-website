'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Database, Cloud, Briefcase, Globe, Linkedin, MapPin, Terminal, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionProps } from '@/types'
import { calculateYearsOfExperience } from '@/lib/utils'

const startDate = new Date('2022-04-01')
const yearsOfExperience = calculateYearsOfExperience(startDate)

export default function HeroSection({ language, viewMode }: SectionProps) {
  const isFreelance = viewMode === 'freelance'

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      
      {/* Dynamic Background with Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-padding relative z-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-lg"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {isFreelance 
                  ? (language === 'en' ? 'Available for projects' : 'Beschikbaar voor projecten')
                  : (language === 'en' ? 'Open to opportunities' : 'Open voor kansen')
                }
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                <span className="text-slate-900 dark:text-white">Luca</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Keizer
                </span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0"
              >
                <div className="flex items-center space-x-2">
                  {isFreelance ? (
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Code2 className="h-5 w-5 text-blue-600" />
                  )}
                  <span className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                    {isFreelance ? (
                      language === 'en' 
                        ? 'Web Developer'
                        : 'Webontwikkelaar'
                    ) : (
                      language === 'en'
                        ? 'Software Engineer'
                        : 'Software Engineer'
                    )}
                  </span>
                </div>
                
                <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-500">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Volendam</span>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
            >
              {isFreelance ? (
                language === 'en' 
                  ? (
                    <>
                      Building <span className="font-semibold text-slate-900 dark:text-white">custom websites</span> for 
                      Noord-Holland businesses with <span className="font-semibold text-slate-900 dark:text-white">{yearsOfExperience}+ years</span> of 
                      professional development experience.
                    </>
                  )
                  : (
                    <>
                      Bouw <span className="font-semibold text-slate-900 dark:text-white">custom websites</span> voor 
                      Noord-Holland bedrijven met <span className="font-semibold text-slate-900 dark:text-white">{yearsOfExperience}+ jaar</span> professionele 
                      ontwikkelingservaring.
                    </>
                  )
              ) : (
                language === 'en'
                  ? (
                    <>
                      <span className="font-semibold text-slate-900 dark:text-white">{yearsOfExperience}+ years</span> building 
                      scalable solutions with modern technologies. Passionate about creating 
                      <span className="font-semibold text-slate-900 dark:text-white"> efficient, maintainable software</span>.
                    </>
                  )
                  : (
                    <>
                      <span className="font-semibold text-slate-900 dark:text-white">{yearsOfExperience}+ jaar</span> het bouwen van 
                      schaalbare oplossingen met moderne technologieën. Gepassioneerd over het creëren van 
                      <span className="font-semibold text-slate-900 dark:text-white"> efficiënte, onderhoudbare software</span>.
                    </>
                  )
              )}
            </motion.p>

            {/* Mobile Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="lg:hidden"
            >
              <div className="grid grid-cols-2 gap-3">
                {(isFreelance ? [
                  { icon: Globe, label: 'React/Next.js', color: 'from-cyan-400 to-cyan-600' },
                  { icon: Code2, label: 'TypeScript', color: 'from-blue-400 to-blue-600' },
                  { icon: Database, label: 'Responsive Design', color: 'from-green-400 to-green-600' },
                  { icon: Zap, label: 'Fast Performance', color: 'from-yellow-400 to-orange-600' }
                ] : [
                  { icon: Code2, label: 'Python', color: 'from-yellow-400 to-yellow-600' },
                  { icon: Globe, label: 'TypeScript/React', color: 'from-blue-400 to-blue-600' },
                  { icon: Database, label: 'SQL/APIs', color: 'from-cyan-400 to-cyan-600' },
                  { icon: Cloud, label: 'Azure/Docker', color: 'from-indigo-400 to-indigo-600' }
                ]).map((tech, index) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-2 p-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm"
                  >
                    <div className={`p-2 bg-gradient-to-br ${tech.color} rounded-lg flex-shrink-0`}>
                      <tech.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {isFreelance ? (
                <>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" 
                    asChild
                  >
                    <a href="#projects" className="flex items-center">
                      {language === 'en' ? 'View My Work' : 'Bekijk Mijn Werk'}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 hover:bg-white dark:hover:bg-slate-700" 
                    asChild
                  >
                    <a href="#contact">
                      {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
                    </a>
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" 
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/lucakeizer/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Linkedin className="h-4 w-4 mr-2" />
                      {language === 'en' ? 'LinkedIn Profile' : 'LinkedIn Profiel'}
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 hover:bg-white dark:hover:bg-slate-700" 
                    asChild
                  >
                    <a href="#projects" className="flex items-center">
                      {language === 'en' ? 'View Projects' : 'Bekijk Projecten'}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              
              {/* Main Card */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 max-w-sm">
                
                {/* Profile Section */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 relative">
                    <span>LK</span>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Luca Keizer</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {isFreelance ? (
                      language === 'en' ? 'Web Developer' : 'Webontwikkelaar'
                    ) : (
                      'Software Engineer'
                    )}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    {isFreelance ? (
                      language === 'en' ? 'Website Technologies' : 'Website Technologieën'
                    ) : (
                      language === 'en' ? 'Tech Stack' : 'Tech Stack'
                    )}
                  </h4>
                  
                  {(isFreelance ? [
                    { icon: Globe, label: 'React/Next.js', color: 'from-cyan-400 to-cyan-600' },
                    { icon: Code2, label: 'TypeScript', color: 'from-blue-400 to-blue-600' },
                    { icon: Database, label: 'Responsive Design', color: 'from-green-400 to-green-600' },
                    { icon: Zap, label: 'Fast Performance', color: 'from-yellow-400 to-orange-600' }
                  ] : [
                    { icon: Code2, label: 'Python', color: 'from-yellow-400 to-yellow-600' },
                    { icon: Globe, label: 'TypeScript/React', color: 'from-blue-400 to-blue-600' },
                    { icon: Database, label: 'SQL/APIs', color: 'from-cyan-400 to-cyan-600' },
                    { icon: Cloud, label: 'Azure/Docker', color: 'from-indigo-400 to-indigo-600' }
                  ]).map((tech, index) => (
                    <motion.div
                      key={tech.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div className={`p-2 bg-gradient-to-br ${tech.color} rounded-lg`}>
                        <tech.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{tech.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-6 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800"
                >
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                      {yearsOfExperience}+ {language === 'en' ? 'years experience' : 'jaar ervaring'}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Terminal Window */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: -5 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -top-4 -left-8 bg-slate-900 dark:bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-3 text-xs font-mono"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-green-400">
                  <span className="text-slate-500">$</span> npm run build
                  <br />
                  <span className="text-blue-400">✓</span> Ready in 2.3s
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}