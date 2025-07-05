'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  Building, 
  Briefcase, 
  GraduationCap,
  Download,
  Linkedin,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionProps } from '@/types'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function ExperienceSection({ language, viewMode }: SectionProps) {
  // Only show in professional mode
  if (viewMode !== 'professional') {
    return null
  }

  // Resume download handler
  const handleResumeDownload = () => {
    const resumeFile = language === 'en' ? '/resume/Luca-Keizer-Resume-EN.pdf' : '/resume/Luca-Keizer-CV-NL.pdf'
    const fileName = language === 'en' ? 'Luca-Keizer-Resume-EN.pdf' : 'Luca-Keizer-CV-NL.pdf'
    
    const link = document.createElement('a')
    link.href = resumeFile
    link.download = fileName
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
          }} />
        </div>
      </div>

      <div className="container-padding relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-lg mb-6">
              <Briefcase className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {language === 'en' ? 'Experience' : 'Ervaring'}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-slate-900 dark:text-white">
                {language === 'en' ? 'Work Experience' : 'Werkervaring'}
              </span>
            </h2>
          </motion.div>

          {/* Simple Timeline */}
          <div className="max-w-3xl mx-auto space-y-8 mb-16">
            
            {/* Current Job */}
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
                
                {/* Current Badge */}
                <div className="absolute -top-3 left-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>{language === 'en' ? 'Current' : 'Huidig'}</span>
                </div>

                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Data Solutions Engineer
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-slate-600 dark:text-slate-400 space-y-1 sm:space-y-0">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>Sonic Equipment B.V.</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Purmerend</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Sept 2023 - {language === 'en' ? 'Present' : 'Heden'}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === 'en' 
                    ? 'Building Python applications for business automation and Azure cloud infrastructure. Developing data analysis tools and automated workflows.'
                    : 'Python applicaties bouwen voor bedrijfsautomatisering en Azure cloud infrastructuur. Ontwikkelen van data-analyse tools en geautomatiseerde workflows.'
                  }
                </p>
              </div>
            </motion.div>

            {/* Previous Experience */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {language === 'en' ? 'Software Development & Study Abroad' : 'Software Ontwikkeling & Studie in Buitenland'}
                    </h3>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      2022 - 2023 • {language === 'en' ? 'Netherlands & Japan' : 'Nederland & Japan'}
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === 'en' 
                    ? 'Completed software development internship and spent a year studying in Japan, developing technical skills and international perspective.'
                    : 'Voltooide software ontwikkeling stage en bracht een jaar door met studeren in Japan, ontwikkelde technische vaardigheden en internationaal perspectief.'
                  }
                </p>
              </div>
            </motion.div>
          </div>

          {/* Simple CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
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
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                onClick={handleResumeDownload}
              >
                <Download className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Download Resume' : 'Download CV'}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}