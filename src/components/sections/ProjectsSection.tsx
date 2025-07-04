'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, TrendingUp, Code2, Linkedin, ChevronDown, ChevronUp, Eye } from 'lucide-react'
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
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
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

const getTechName = (tech: string | { en: string; nl: string }, language: 'en' | 'nl'): string => {
  if (typeof tech === 'string') return tech
  return tech[language]
}

function ProjectCard({ 
  project, 
  language, 
  viewMode, 
  isCompact = false,
  isExpanded = false,
  onToggleExpand
}: { 
  project: Project, 
  language: 'en' | 'nl', 
  viewMode: 'freelance' | 'professional',
  isCompact?: boolean,
  isExpanded?: boolean,
  onToggleExpand?: () => void
}) {
  const isFreelance = viewMode === 'freelance'

  // Helper function to get localized text
  const getText = (content: LocalizedContent): string => {
    return content[language]
  }

  // Helper function to get localized array
  const getArray = (content: { en: string[]; nl: string[] } | undefined): string[] => {
    return content ? content[language] : []
  }

  if (isCompact) {
    // Mobile Compact Card
    return (
      <motion.div
        variants={cardVariants}
        className="bg-card rounded-lg border border-border overflow-hidden"
      >
        {/* Compact Header */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-1 line-clamp-1">
                {getText(project.title)}
              </h3>
              {project.client && isFreelance && (
                <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-2">
                  <Users className="h-3 w-3" />
                  <span>{project.client}</span>
                </div>
              )}
            </div>
            {project.liveUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Eye className="h-3 w-3" />
                </a>
              </Button>
            )}
          </div>

          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {isFreelance 
              ? (project.freelanceDescription ? getText(project.freelanceDescription) : getText(project.description))
              : (project.professionalDescription ? getText(project.professionalDescription) : getText(project.description))
            }
          </p>

          {/* Technologies - Show only first 3 */}
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                {getTechName(tech, language)}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
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
                className="space-y-3"
              >
                {/* Project Image */}
                {project.images && project.images.length > 0 && (
                  <div className="h-32 rounded-lg overflow-hidden border border-border">
                    <img
                      src={project.images[0]}
                      alt={getText(project.title)}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Key Results/Impact */}
                {isFreelance ? (
                  project.businessImpact && (
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 flex items-center space-x-1 text-sm mb-2">
                        <TrendingUp className="h-3 w-3" />
                        <span>{language === 'en' ? 'Business Impact' : 'Bedrijfsimpact'}</span>
                      </h4>
                      <p className="text-green-700 dark:text-green-300 text-xs">
                        {getText(project.businessImpact)}
                      </p>
                    </div>
                  )
                ) : (
                  project.technicalDetails && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 flex items-center space-x-1 text-sm mb-2">
                        <Code2 className="h-3 w-3" />
                        <span>{language === 'en' ? 'Technical Highlights' : 'Technische Hoogtepunten'}</span>
                      </h4>
                      <p className="text-blue-700 dark:text-blue-300 text-xs">
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
                        {language === 'en' ? 'View Live' : 'Bekijk Live'}
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
        </div>
      </motion.div>
    )
  }

  // Desktop Full Card (existing layout)
  return (
    <motion.div 
      variants={cardVariants}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      {/* Project Image */}
      <div>
        <div className="relative group">
          {project.images && project.images.length > 0 ? (
            <div className="h-64 md:h-80 rounded-xl overflow-hidden border border-border card-hover">
              <img
                src={project.images[0]}
                alt={getText(project.title)}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-muted-foreground" style={{ display: 'none' }}>
                <div className="text-center">
                  <Code2 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">
                    {language === 'en' ? 'Project Image' : 'Project Afbeelding'}
                  </p>
                  <p className="text-xs mt-1">{getText(project.title)}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-brand-100 to-brand-200 h-64 md:h-80 rounded-xl flex items-center justify-center border border-border card-hover">
              <div className="text-center text-muted-foreground">
                <Code2 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-sm">
                  {language === 'en' ? 'Project Image' : 'Project Afbeelding'}
                </p>
                <p className="text-xs mt-1">{getText(project.title)}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
            {project.client && (
              <>
                <Users className="h-4 w-4" />
                <span>{project.client}</span>
              </>
            )}
          </div>
          
          <h3 className="text-2xl font-bold mb-3">{getText(project.title)}</h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {isFreelance 
              ? (project.freelanceDescription ? getText(project.freelanceDescription) : getText(project.description))
              : (project.professionalDescription ? getText(project.professionalDescription) : getText(project.description))
            }
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold mb-3">
            {language === 'en' ? 'Technologies Used' : 'Gebruikte Technologieën'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="tech-tag"
              >
                {getTechName(tech, language)}
              </span>
            ))}
          </div>
        </div>

        {/* Key Results/Impact */}
        {isFreelance ? (
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>{language === 'en' ? 'Business Impact' : 'Bedrijfsimpact'}</span>
            </h4>
            {project.businessImpact && (
              <p className="text-green-700 dark:text-green-300 text-sm">
                {getText(project.businessImpact)}
              </p>
            )}
            {project.results && getArray(project.results).length > 0 && (
              <ul className="mt-3 space-y-1">
                {getArray(project.results).slice(0, 3).map((result, resultIndex) => (
                  <li key={resultIndex} className="text-green-700 dark:text-green-300 text-sm flex items-start space-x-2">
                    <div className="h-1.5 w-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200 flex items-center space-x-2">
              <Code2 className="h-4 w-4" />
              <span>{language === 'en' ? 'Technical Highlights' : 'Technische Hoogtepunten'}</span>
            </h4>
            {project.technicalDetails && (
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                {getText(project.technicalDetails)}
              </p>
            )}
            {project.challenges && getArray(project.challenges).length > 0 && (
              <div className="mt-3">
                <p className="text-blue-800 dark:text-blue-200 text-sm font-medium mb-1">
                  {language === 'en' ? 'Key Challenges Solved:' : 'Belangrijkste Uitdagingen Opgelost:'}
                </p>
                <ul className="space-y-1">
                  {getArray(project.challenges).slice(0, 2).map((challenge, challengeIndex) => (
                    <li key={challengeIndex} className="text-blue-700 dark:text-blue-300 text-sm flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button variant="gradient" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                {language === 'en' ? 'View Live' : 'Bekijk Live'}
              </a>
            </Button>
          )}
          {project.githubUrl && !isFreelance && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                {language === 'en' ? 'View Code' : 'Bekijk Code'}
              </a>
            </Button>
          )}
          {project.caseStudyUrl && (
            <Button variant="outline" asChild>
              <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                {language === 'en' ? 'Case Study' : 'Case Study'}
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
      className="space-y-6 md:space-y-12"
    >
      {/* Mobile: Compact Cards */}
      <div className="block md:hidden space-y-4">
        {projectsToShow.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            language={language} 
            viewMode={viewMode}
            isCompact={true}
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

      {/* Desktop: Full Cards */}
      <div className="hidden md:block space-y-12">
        {projects.map((project, index) => (
          <div key={project.id} className={index % 2 === 1 ? 'lg:flex-row-reverse' : ''}>
            <ProjectCard 
              project={project} 
              language={language} 
              viewMode={viewMode}
              isCompact={false}
            />
          </div>
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
          
          {/* Section Header - More compact on mobile */}
          <motion.div variants={cardVariants} className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              {language === 'en' ? 'Featured Projects' : 'Uitgelichte Projecten'}
            </h2>
            <motion.p 
              key={`projects-header-${viewMode}`}
              variants={modeContentVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              {isFreelance
                ? (language === 'en' 
                    ? 'Real client websites that delivered measurable results'
                    : 'Echte klantwebsites die meetbare resultaten leverden'
                  )
                : (language === 'en'
                    ? 'Technical projects showcasing software engineering skills'
                    : 'Technische projecten die software engineering vaardigheden tonen'
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

          {/* CTA - More compact on mobile */}
          <motion.div 
            variants={cardVariants} 
            className="text-center mt-8 md:mt-16"
          >
            {isFreelance ? (
              <div className="space-y-3 md:space-y-4">
                <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                  <Link href="/projects">
                    {language === 'en' ? 'View All Projects' : 'Bekijk Alle Projecten'}
                  </Link>
                </Button>
                
                <div className="text-muted-foreground text-sm">
                  {language === 'en' ? 'or' : 'of'}
                </div>
                
                <Button variant="gradient" size="default" className="w-full sm:w-auto" asChild>
                  <a href="#contact">
                    {language === 'en' ? 'Start Your Project' : 'Start Je Project'}
                  </a>
                </Button>
              </div>
            ) : (
              <div className="space-y-3 md:space-y-4">
                <Button variant="gradient" size="default" className="w-full sm:w-auto" asChild>
                  <a href="#contact">
                    {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
                  </a>
                </Button>
                
                <div className="text-muted-foreground text-sm">
                  {language === 'en' ? 'or connect via' : 'of verbind via'}
                </div>
                
                <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                  <a href="https://www.linkedin.com/in/lucakeizer/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}