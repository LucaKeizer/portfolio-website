'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, TrendingUp, Code2, Linkedin, ChevronDown, ChevronUp, Eye, Globe, Database, Cloud, Star, Award } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { SectionProps, LocalizedContent } from '@/types'
import { getFeaturedProjects } from '@/data/projects'
import type { Project } from '@/types'
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
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

const getTechName = (tech: string | { en: string; nl: string }, language: 'en' | 'nl'): string => {
  if (typeof tech === 'string') return tech
  return tech[language]
}

// Get technology icon
const getTechIcon = (techName: string) => {
  const lowerTech = techName.toLowerCase()
  if (lowerTech.includes('python') || lowerTech.includes('django')) return Code2
  if (lowerTech.includes('react') || lowerTech.includes('next') || lowerTech.includes('typescript') || lowerTech.includes('javascript')) return Globe
  if (lowerTech.includes('postgres') || lowerTech.includes('mysql') || lowerTech.includes('database') || lowerTech.includes('prisma')) return Database
  if (lowerTech.includes('azure') || lowerTech.includes('aws') || lowerTech.includes('cloud') || lowerTech.includes('docker')) return Cloud
  return Code2 // fallback
}

// Get technology color
const getTechColor = (techName: string) => {
  const lowerTech = techName.toLowerCase()
  if (lowerTech.includes('python') || lowerTech.includes('django')) return 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800'
  if (lowerTech.includes('react') || lowerTech.includes('next')) return 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-400 dark:border-cyan-800'
  if (lowerTech.includes('typescript') || lowerTech.includes('javascript')) return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800'
  if (lowerTech.includes('postgres') || lowerTech.includes('mysql') || lowerTech.includes('database')) return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
  if (lowerTech.includes('azure') || lowerTech.includes('aws') || lowerTech.includes('cloud')) return 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800'
  return 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800'
}

function MobileProjectCard({ 
  project, 
  language, 
  viewMode, 
  isExpanded = false,
  onToggleExpand
}: { 
  project: Project, 
  language: 'en' | 'nl', 
  viewMode: 'freelance' | 'professional',
  isExpanded?: boolean,
  onToggleExpand?: () => void
}) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const isFreelance = viewMode === 'freelance'

  // Helper function to get localized text
  const getText = (content: LocalizedContent): string => {
    return content[language]
  }

  const renderProjectImage = () => {
    const hasValidImage = project.images && project.images.length > 0 && !imageError

    if (hasValidImage) {
      return (
        <div className="relative w-full h-full overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted animate-pulse flex items-center justify-center">
              <div className="text-muted-foreground">
                <Code2 className="h-8 w-8 animate-pulse" />
              </div>
            </div>
          )}
          <img
            src={project.images[0]}
            alt={getText(project.title)}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )
    }

    return (
      <div className="w-full h-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center text-muted-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="text-center relative z-10">
          <Code2 className="h-12 w-12 mx-auto mb-3 opacity-60" />
          <p className="text-sm font-medium opacity-75">
            {getText(project.title)}
          </p>
          <p className="text-xs mt-1 opacity-50">
            {language === 'en' ? 'Project Preview' : 'Project Preview'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      variants={cardVariants}
      className="bg-card rounded-xl border border-border overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {renderProjectImage()}
        
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <Button variant="secondary" size="sm" className="bg-white/90 backdrop-blur-sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="h-3 w-3" />
              </a>
            </Button>
          )}
          {project.githubUrl && !isFreelance && (
            <Button variant="secondary" size="sm" className="bg-white/90 backdrop-blur-sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-base mb-2 line-clamp-1">
              {getText(project.title)}
            </h3>
            {project.client && isFreelance && (
              <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                <Users className="h-3 w-3" />
                <span>{project.client}</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {isFreelance 
            ? (project.freelanceDescription ? getText(project.freelanceDescription) : getText(project.description))
            : (project.professionalDescription ? getText(project.professionalDescription) : getText(project.description))
          }
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => {
            const TechIcon = getTechIcon(getTechName(tech, language))
            return (
              <span 
                key={index} 
                className={`inline-flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-medium border ${getTechColor(getTechName(tech, language))}`}
              >
                <TechIcon className="h-3 w-3" />
                <span>{getTechName(tech, language)}</span>
              </span>
            )
          })}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border">
              +{project.technologies.length - 3}
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
              className="space-y-4 border-t border-border pt-4"
            >
              {/* Key Results/Impact */}
              {isFreelance ? (
                project.businessImpact && (
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 flex items-center space-x-2 text-sm mb-2">
                      <TrendingUp className="h-3 w-3" />
                      <span>{language === 'en' ? 'Business Impact' : 'Bedrijfsimpact'}</span>
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-xs leading-relaxed">
                      {getText(project.businessImpact)}
                    </p>
                  </div>
                )
              ) : (
                project.technicalDetails && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 flex items-center space-x-2 text-sm mb-2">
                      <Code2 className="h-3 w-3" />
                      <span>{language === 'en' ? 'Technical Highlights' : 'Technische Hoogtepunten'}</span>
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-xs leading-relaxed">
                      {getText(project.technicalDetails)}
                    </p>
                  </div>
                )
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                {project.liveUrl && (
                  <Button variant="gradient" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {language === 'en' ? 'Live Site' : 'Live Site'}
                    </a>
                  </Button>
                )}
                {project.githubUrl && !isFreelance && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      {language === 'en' ? 'Code' : 'Code'}
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand/Collapse Button */}
        {onToggleExpand && (
          <button
            onClick={onToggleExpand}
            className="flex items-center justify-center space-x-1 text-xs text-primary font-medium hover:text-primary/80 transition-colors mt-4 w-full py-2 border-t border-border"
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
      </div>
    </motion.div>
  )
}

function DesktopProjectCard({ 
  project, 
  language, 
  viewMode
}: { 
  project: Project, 
  language: 'en' | 'nl', 
  viewMode: 'freelance' | 'professional'
}) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const isFreelance = viewMode === 'freelance'

  // Helper function to get localized text
  const getText = (content: LocalizedContent): string => {
    return content[language]
  }

  const renderProjectImage = () => {
    const hasValidImage = project.images && project.images.length > 0 && !imageError

    if (hasValidImage) {
      return (
        <div className="relative w-full h-full overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted animate-pulse flex items-center justify-center">
              <div className="text-muted-foreground">
                <Code2 className="h-6 w-6 animate-pulse" />
              </div>
            </div>
          )}
          <img
            src={project.images[0]}
            alt={getText(project.title)}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </div>
      )
    }

    return (
      <div className="w-full h-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center text-muted-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="text-center relative z-10">
          <Code2 className="h-8 w-8 mx-auto mb-2 opacity-60" />
          <p className="text-xs font-medium opacity-75">
            {getText(project.title)}
          </p>
        </div>
      </div>
    )
  }

  return (
    <motion.div 
      variants={cardVariants}
      className="bg-card rounded-xl border border-border overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-48 lg:h-52 overflow-hidden">
        {renderProjectImage()}
        
        {/* Action buttons overlay */}
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <Button variant="secondary" size="sm" className="bg-white/95 backdrop-blur-sm hover:bg-white shadow-md" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.githubUrl && !isFreelance && (
            <Button variant="secondary" size="sm" className="bg-white/95 backdrop-blur-sm hover:bg-white shadow-md" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-5 lg:p-6 flex flex-col flex-1">
        <div className="flex-1">
          {/* Header */}
          <div className="mb-4">
            {project.client && isFreelance && (
              <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                <Users className="h-3 w-3" />
                <span>{project.client}</span>
              </div>
            )}
            
            <h3 className="text-lg lg:text-xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors duration-200">
              {getText(project.title)}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
              {isFreelance 
                ? (project.freelanceDescription ? getText(project.freelanceDescription) : getText(project.description))
                : (project.professionalDescription ? getText(project.professionalDescription) : getText(project.description))
              }
            </p>
          </div>

          {/* Technologies - Compact */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((tech, techIndex) => {
                const TechIcon = getTechIcon(getTechName(tech, language))
                return (
                  <span 
                    key={techIndex}
                    className={`inline-flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-medium border transition-transform hover:scale-105 ${getTechColor(getTechName(tech, language))}`}
                  >
                    <TechIcon className="h-3 w-3" />
                    <span>{getTechName(tech, language)}</span>
                  </span>
                )
              })}
              {project.technologies.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Key Impact - Compact */}
          {isFreelance ? (
            project.businessImpact && (
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800 mb-4">
                <h4 className="font-semibold mb-1 text-green-800 dark:text-green-200 flex items-center space-x-1 text-xs">
                  <TrendingUp className="h-3 w-3" />
                  <span>{language === 'en' ? 'Impact' : 'Impact'}</span>
                </h4>
                <p className="text-green-700 dark:text-green-300 text-xs leading-relaxed line-clamp-2">
                  {getText(project.businessImpact)}
                </p>
              </div>
            )
          ) : (
            project.technicalDetails && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mb-4">
                <h4 className="font-semibold mb-1 text-blue-800 dark:text-blue-200 flex items-center space-x-1 text-xs">
                  <Code2 className="h-3 w-3" />
                  <span>{language === 'en' ? 'Technical' : 'Technisch'}</span>
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-xs leading-relaxed line-clamp-2">
                  {getText(project.technicalDetails)}
                </p>
              </div>
            )
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          {project.liveUrl && (
            <Button variant="gradient" size="sm" className="flex-1" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-1" />
                {language === 'en' ? 'Live' : 'Live'}
              </a>
            </Button>
          )}
          {project.githubUrl && !isFreelance && (
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3 w-3 mr-1" />
                {language === 'en' ? 'Code' : 'Code'}
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectsList({ projects, language, viewMode }: { 
  projects: Project[], 
  language: 'en' | 'nl', 
  viewMode: 'freelance' | 'professional' 
}) {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  // Show only 2 projects on mobile initially
  const projectsToShow = showAllProjects ? projects : projects.slice(0, 2)

  return (
    <motion.div
      variants={modeContentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="space-y-6"
    >
      {/* Mobile: Keep the exact same version (unchanged) */}
      <div className="block md:hidden space-y-6">
        {projectsToShow.map((project) => (
          <MobileProjectCard 
            key={project.id} 
            project={project} 
            language={language} 
            viewMode={viewMode}
            isExpanded={expandedProject === project.id}
            onToggleExpand={() => setExpandedProject(
              expandedProject === project.id ? null : project.id
            )}
          />
        ))}

        {/* Show More Projects Button */}
        {!showAllProjects && projects.length > 2 && (
          <div className="text-center pt-4">
            <Button 
              variant="outline" 
              onClick={() => setShowAllProjects(true)}
              className="w-full"
            >
              {language === 'en' ? `View All ${projects.length} Projects` : `Bekijk Alle ${projects.length} Projecten`}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </div>

      {/* Desktop: NEW Horizontal Grid Layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <DesktopProjectCard 
            key={project.id}
            project={project} 
            language={language} 
            viewMode={viewMode}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function ProjectsSection({ language, viewMode }: SectionProps) {
  const isFreelance = viewMode === 'freelance'
  
  // Get projects for current mode
  let featuredProjects: Project[] = []
  try {
    featuredProjects = getFeaturedProjects(viewMode) || []
  } catch (error) {
    console.error('Error loading projects:', error)
    featuredProjects = []
  }

  // Don't render if no projects available
  if (!featuredProjects || featuredProjects.length === 0) {
    return (
      <section id="projects" className="section-padding bg-muted/30">
        <div className="container-padding">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-padding">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Enhanced Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {language === 'en' ? 'Portfolio' : 'Portfolio'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              {language === 'en' ? 'Featured Projects' : 'Uitgelichte Projecten'}
            </h2>
            
            <motion.p 
              key={`projects-header-${viewMode}`}
              variants={modeContentVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {isFreelance
                ? (language === 'en' 
                    ? 'Real client websites built from scratch with modern technologies, delivering measurable business results'
                    : 'Echte klantwebsites vanaf nul gebouwd met moderne technologieën, die meetbare bedrijfsresultaten leveren'
                  )
                : (language === 'en'
                    ? 'Technical projects showcasing software engineering expertise, problem-solving skills, and modern development practices'
                    : 'Technische projecten die software engineering expertise, probleemoplossende vaardigheden en moderne ontwikkelingspraktijken tonen'
                  )
              }
            </motion.p>
          </motion.div>

          {/* Projects List with smooth transitions */}
          <AnimatePresence mode="wait">
            <ProjectsList 
              key={viewMode}
              projects={featuredProjects}
              language={language}
              viewMode={viewMode}
            />
          </AnimatePresence>

          {/* Enhanced CTA */}
          <motion.div 
            variants={cardVariants} 
            className="text-center mt-12 md:mt-16"
          >
            <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent p-8 md:p-10 rounded-2xl border border-primary/20 max-w-4xl mx-auto">
              {isFreelance ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {language === 'en' ? 'Ready to Start Your Project?' : 'Klaar Om Je Project Te Starten?'}
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {language === 'en' 
                        ? 'Let\'s create a custom website that drives real results for your business'
                        : 'Laten we een custom website creëren die echte resultaten oplevert voor je bedrijf'
                      }
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="gradient" size="lg" className="w-full sm:w-auto" asChild>
                      <a href="#contact">
                        <Award className="h-5 w-5 mr-2" />
                        {language === 'en' ? 'Start Your Project' : 'Start Je Project'}
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                      <Link href="/projects">
                        <Eye className="h-5 w-5 mr-2" />
                        {language === 'en' ? 'View All Projects' : 'Bekijk Alle Projecten'}
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {language === 'en' ? 'Interested in My Work?' : 'Geïnteresseerd in Mijn Werk?'}
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {language === 'en' 
                        ? 'Let\'s discuss how I can contribute to your team and projects'
                        : 'Laten we bespreken hoe ik kan bijdragen aan jouw team en projecten'
                      }
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="gradient" size="lg" className="w-full sm:w-auto" asChild>
                      <a href="#contact">
                        <Users className="h-5 w-5 mr-2" />
                        {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                      <a href="https://www.linkedin.com/in/lucakeizer/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 mr-2" />
                        {language === 'en' ? 'LinkedIn Profile' : 'LinkedIn Profiel'}
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}