'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Building, ExternalLink, Award, ChevronDown, ChevronUp, Briefcase, GraduationCap } from 'lucide-react'
import type { SectionProps, LocalizedContent } from '@/types'
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
  isCompact?: boolean
  isExpanded?: boolean
  onToggleExpand?: () => void
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
  language,
  isCompact = false,
  isExpanded = false,
  onToggleExpand
}: TimelineItemProps) {
  
  if (isCompact) {
    // Mobile Compact Version
    return (
      <motion.div variants={itemVariants} className="bg-card p-4 rounded-lg border border-border">
        {/* Compact Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              {type === 'work' ? 
                <Briefcase className="h-4 w-4 text-primary" /> : 
                <GraduationCap className="h-4 w-4 text-primary" />
              }
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm line-clamp-1">{title}</h3>
              <p className="text-xs text-muted-foreground">{company}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">
              {formatDate(startDate, language)}
              {endDate ? ` - ${formatDate(endDate, language)}` : ` - ${language === 'en' ? 'Present' : 'Heden'}`}
            </div>
          </div>
        </div>

        {/* Brief Description */}
        <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
          {description}
        </p>

        {/* Top Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
              +{technologies.length - 3}
            </span>
          )}
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 border-t border-border pt-3"
            >
              {/* Location */}
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{location}</span>
              </div>

              {/* Achievements */}
              {achievements.length > 0 && (
                <div>
                  <h4 className="font-semibold text-xs mb-2 flex items-center space-x-1">
                    <Award className="h-3 w-3 text-primary" />
                    <span>{language === 'en' ? 'Key Achievements' : 'Belangrijkste Prestaties'}</span>
                  </h4>
                  <ul className="space-y-1">
                    {achievements.slice(0, 3).map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2 text-xs">
                        <div className="h-1 w-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                    {achievements.length > 3 && (
                      <li className="text-xs text-muted-foreground">
                        +{achievements.length - 3} {language === 'en' ? 'more achievements' : 'meer prestaties'}
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* All Technologies */}
              {technologies.length > 3 && (
                <div>
                  <h4 className="font-semibold text-xs mb-2">
                    {language === 'en' ? 'All Technologies' : 'Alle Technologieën'}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand/Collapse Button */}
        {onToggleExpand && (
          <button
            onClick={onToggleExpand}
            className="flex items-center space-x-1 text-xs text-primary font-medium hover:text-primary/80 transition-colors mt-3 w-full justify-center"
          >
            <span>
              {isExpanded 
                ? (language === 'en' ? 'Show Less' : 'Toon Minder')
                : (language === 'en' ? 'View Details' : 'Bekijk Details')
              }
            </span>
            {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
        )}
      </motion.div>
    )
  }

  // Desktop Full Version (original)
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
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [showAllItems, setShowAllItems] = useState(false)

  // Helper function to get localized text
  const getText = (content: LocalizedContent | string): string => {
    if (typeof content === 'string') return content
    return content[language]
  }

  // Helper function to get localized array
  const getArray = (content: { en: string[]; nl: string[] }): string[] => {
    return content[language]
  }

  // Combine work experience and education, sort by start date (newest first)
  const allExperience = [
    ...workExperience.map(exp => ({ 
      ...exp, 
      type: 'work' as const,
      position: exp.position,
      company: exp.company,
      description: getText(exp.description),
      achievements: getArray(exp.achievements),
      technologies: exp.technologies
    })),
    ...education.map(edu => ({ 
      ...edu, 
      type: 'education' as const,
      position: getText(edu.degree),
      company: edu.institution,
      description: edu.description ? getText(edu.description) : '',
      achievements: edu.achievements ? getArray(edu.achievements) : [],
      technologies: [] // Education doesn't have technologies
    }))
  ].sort((a, b) => b.startDate.getTime() - a.startDate.getTime())

  // Show only 2 items on mobile initially
  const itemsToShow = showAllItems ? allExperience : allExperience.slice(0, 2)

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
      {/* MOBILE ONLY: Compact Timeline */}
      <div className="block md:hidden space-y-4 mb-8">
        {itemsToShow.map((exp) => (
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
            isCompact={true}
            isExpanded={expandedItem === exp.id}
            onToggleExpand={() => setExpandedItem(
              expandedItem === exp.id ? null : exp.id
            )}
          />
        ))}

        {/* Show More Button */}
        {!showAllItems && allExperience.length > 2 && (
          <div className="text-center pt-4">
            <button
              onClick={() => setShowAllItems(true)}
              className="flex items-center space-x-2 text-sm text-primary font-medium hover:text-primary/80 transition-colors mx-auto bg-muted/50 px-4 py-2 rounded-lg"
            >
              <span>
                {language === 'en' ? `View All ${allExperience.length} Experiences` : `Bekijk Alle ${allExperience.length} Ervaringen`}
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* DESKTOP ONLY: Original Timeline */}
      <div className="hidden md:block">
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
              isCompact={false}
            />
          ))}
        </div>
      </div>

      {/* Call to Action - Compact on mobile */}
      <motion.div 
        variants={itemVariants}
        className="mt-8 md:mt-12 bg-gradient-to-br from-primary/5 to-primary/10 p-4 md:p-6 rounded-xl border border-primary/20"
      >
        <h3 className="text-lg md:text-xl font-semibold mb-3">
          {language === 'en' ? 'What\'s Next?' : 'Wat Komt Er?'}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base mb-4">
          {language === 'en' 
            ? 'I\'m always interested in new challenges and opportunities to grow as a software engineer.'
            : 'Ik ben altijd geïnteresseerd in nieuwe uitdagingen en kansen om te groeien als software engineer.'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="mailto:keizerluca@gmail.com"
            className="btn-primary inline-flex items-center justify-center text-sm md:text-base"
          >
            {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
          </a>
          <button 
            onClick={handleResumeDownload}
            className="btn-secondary inline-flex items-center justify-center text-sm md:text-base"
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
  // Only show in professional mode
  if (viewMode === 'freelance') {
    return null
  }

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
          
          {/* Section Header - More compact on mobile */}
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              {language === 'en' ? 'Professional Journey' : 'Professionele Reis'}
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'My career progression in software engineering'
                : 'Mijn carrièreontwikkeling in software engineering'
              }
            </p>
          </motion.div>

          {/* Experience Content */}
          <ExperienceContent language={language} />
        </motion.div>
      </div>
    </section>
  )
}