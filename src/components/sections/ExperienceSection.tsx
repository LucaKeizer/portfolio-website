'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Building, ExternalLink, Award } from 'lucide-react'
import type { SectionProps } from '@/types'
import { workExperience, education } from '@/data/experience'
import { formatDate } from '@/lib/utils'

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
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

interface TimelineItemProps {
  title: string
  company: string
  location: string
  startDate: Date
  endDate?: Date
  description: string
  achievements: string[]
  technologies: string[]
  type: 'work' | 'education'
  language: 'en' | 'nl'
}

function TimelineItem({ 
  title, 
  company, 
  location, 
  startDate, 
  endDate, 
  description, 
  achievements, 
  technologies, 
  type,
  language 
}: TimelineItemProps) {
  return (
    <motion.div variants={itemVariants} className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
      
      {/* Content */}
      <div className="ml-16 pb-12">
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                <Building className="h-4 w-4" />
                <span className="font-medium">{company}</span>
                <span>•</span>
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-lg">
              <Calendar className="h-4 w-4" />
              <span>
                {formatDate(startDate, language)}
                {endDate ? ` - ${formatDate(endDate, language)}` : ` - ${language === 'en' ? 'Present' : 'Heden'}`}
              </span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
          
          {/* Achievements */}
          {achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <Award className="h-4 w-4 text-primary" />
                <span>{language === 'en' ? 'Key Achievements' : 'Belangrijkste Prestaties'}</span>
              </h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Technologies */}
          {technologies.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2 text-sm">
                {language === 'en' ? 'Technologies' : 'Technologieën'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index} className="tech-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ExperienceContent({ language }: { language: 'en' | 'nl' }) {
  // Combine work experience and education, sort by start date (newest first)
  const allExperience = [
    ...workExperience.map(exp => ({ ...exp, type: 'work' as const })),
    ...education.map(edu => ({ 
      ...edu, 
      type: 'education' as const,
      position: edu.degree,
      company: edu.institution,
      description: edu.description || '',
      achievements: edu.achievements || [],
      technologies: [] // Education doesn't have technologies
    }))
  ].sort((a, b) => b.startDate.getTime() - a.startDate.getTime())

  // Resume download handler
  const handleResumeDownload = () => {
    const resumeFile = language === 'en' ? '/resume/resume-en.pdf' : '/resume/resume-nl.pdf'
    const fileName = language === 'en' ? 'Luca_Keizer_Resume.pdf' : 'Luca_Keizer_CV.pdf'
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a')
    link.href = resumeFile
    link.download = fileName
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      variants={modeContentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Timeline */}
      <div className="relative">
        {allExperience.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            title={exp.position}
            company={exp.company}
            location={exp.location}
            startDate={exp.startDate}
            endDate={exp.endDate}
            description={exp.description}
            achievements={exp.achievements}
            technologies={exp.technologies}
            type={exp.type}
            language={language}
          />
        ))}
      </div>

      {/* Additional Info */}
      <motion.div 
        variants={itemVariants}
        className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20"
      >
        <h3 className="text-lg font-semibold mb-3">
          {language === 'en' ? 'What\'s Next?' : 'Wat Komt Er?'}
        </h3>
        <p className="text-muted-foreground mb-4">
          {language === 'en' 
            ? 'I\'m always interested in new challenges and opportunities to grow as a software engineer. Whether it\'s a exciting startup, established company, or innovative project - let\'s talk!'
            : 'Ik ben altijd geïnteresseerd in nieuwe uitdagingen en kansen om te groeien als software engineer. Of het nu een spannende startup, gevestigd bedrijf of innovatief project is - laten we praten!'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="mailto:keizerluca@gmail.com"
            className="btn-primary inline-flex items-center justify-center"
          >
            {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
          </a>
          <button 
            onClick={handleResumeDownload}
            className="btn-secondary inline-flex items-center justify-center"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            {language === 'en' ? 'Download Resume' : 'Download CV'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ExperienceSection({ language, viewMode }: SectionProps) {
  // Always render the section but conditionally show content
  return (
    <section id="experience" className="section-padding">
      <div className="container-padding">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          
          {/* Section Header - Always visible when in professional mode */}
          <AnimatePresence>
            {viewMode === 'professional' && (
              <motion.div 
                variants={itemVariants} 
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {language === 'en' ? 'Professional Journey' : 'Professionele Reis'}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {language === 'en' 
                    ? 'My career progression in software engineering, from education to current role'
                    : 'Mijn carrièreontwikkeling in software engineering, van opleiding tot huidige rol'
                  }
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Experience Content - Only show in professional mode */}
          <AnimatePresence>
            {viewMode === 'professional' && (
              <ExperienceContent key="experience-content" language={language} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}