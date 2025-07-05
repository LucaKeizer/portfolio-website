'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Code2, Folder, Eye, Zap } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { SectionProps, LocalizedContent } from '@/types'
import { getFeaturedProjects } from '@/data/projects'
import type { Project } from '@/types'

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

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

function ProjectCard({ 
  project, 
  language, 
  viewMode,
  index 
}: { 
  project: Project, 
  language: 'en' | 'nl', 
  viewMode: 'freelance' | 'professional',
  index: number
}) {
  const [imageError, setImageError] = useState(false)
  const isFreelance = viewMode === 'freelance'

  // Helper function to get localized text
  const getText = (content: LocalizedContent): string => {
    return content[language]
  }

  const renderProjectImage = () => {
    const hasValidImage = project.images && project.images.length > 0 && !imageError

    if (hasValidImage) {
      return (
        <img
          src={project.images[0]}
          alt={getText(project.title)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={() => setImageError(true)}
        />
      )
    }

    // Modern fallback with gradient
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 flex items-center justify-center relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
          }} />
        </div>
        <div className="text-center relative z-10 text-white">
          <Code2 className="h-12 w-12 mx-auto mb-3 opacity-80" />
          <p className="text-sm font-medium opacity-90">
            {getText(project.title)}
          </p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-full"
    >
      {/* Main Card */}
      <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden h-full flex flex-col hover:shadow-3xl transition-all duration-700 hover:-translate-y-3">
        
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          {renderProjectImage()}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            {project.liveUrl && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="bg-white/95 text-slate-900 hover:bg-white shadow-lg" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            )}
            {project.githubUrl && !isFreelance && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="bg-white/95 text-slate-900 hover:bg-white shadow-lg" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            )}
          </div>

          {/* Project Number Badge */}
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-lg">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Bottom Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2 line-clamp-1">
              {getText(project.title)}
            </h3>
            
            {/* Client Info for Freelance */}
            {project.client && isFreelance && (
              <p className="text-white/80 text-sm mb-2">
                {project.client}
              </p>
            )}
            
            {/* Quick Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.slice(0, 3).map((tech, techIndex) => {
                const techName = typeof tech === 'string' ? tech : (tech as any)[language] || tech;
                return (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                  >
                    {techName}
                  </span>
                );
              })}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white/80 text-xs rounded-full border border-white/30">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Body - Minimal Info */}
        <div className="p-6 flex-1 flex flex-col">
          
          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {isFreelance 
              ? (project.freelanceDescription ? getText(project.freelanceDescription) : getText(project.description))
              : (project.professionalDescription ? getText(project.professionalDescription) : getText(project.description))
            }
          </p>

          {/* Key Impact - Simplified */}
          {isFreelance && project.businessImpact && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-3 mb-4">
              <div className="flex items-center space-x-2 mb-1">
                <Zap className="h-3 w-3 text-green-600" />
                <span className="text-xs font-semibold text-green-800 dark:text-green-200">Impact</span>
              </div>
              <p className="text-green-700 dark:text-green-300 text-xs leading-relaxed">
                {getText(project.businessImpact).substring(0, 80)}...
              </p>
            </div>
          )}

          {!isFreelance && project.technicalDetails && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-3 mb-4">
              <div className="flex items-center space-x-2 mb-1">
                <Code2 className="h-3 w-3 text-blue-600" />
                <span className="text-xs font-semibold text-blue-800 dark:text-blue-200">Technical</span>
              </div>
              <p className="text-blue-700 dark:text-blue-300 text-xs leading-relaxed">
                {getText(project.technicalDetails).substring(0, 80)}...
              </p>
            </div>
          )}

          {/* Action Button */}
          <div className="mt-auto">
            {project.liveUrl ? (
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" 
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'View Live' : 'Bekijk Live'}
                </a>
              </Button>
            ) : project.githubUrl && !isFreelance ? (
              <Button 
                variant="outline" 
                className="w-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-white/20 hover:bg-white dark:hover:bg-slate-700" 
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Github className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'View Code' : 'Bekijk Code'}
                </a>
              </Button>
            ) : (
              <Button 
                variant="outline" 
                className="w-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-white/20" 
                disabled
              >
                {language === 'en' ? 'Project Details' : 'Project Details'}
              </Button>
            )}
          </div>
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
  return (
    <motion.div
      variants={modeContentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="grid lg:grid-cols-3 gap-8"
    >
      {projects.slice(0, 3).map((project, index) => (
        <ProjectCard 
          key={project.id}
          project={project} 
          language={language} 
          viewMode={viewMode}
          index={index}
        />
      ))}
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
      <section id="projects" className="py-20 relative overflow-hidden">
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
    <section id="projects" className="py-20 relative overflow-hidden">
      
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-padding relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Modern Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 shadow-xl mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Folder className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {language === 'en' ? 'Featured Work' : 'Uitgelicht Werk'}
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                {language === 'en' ? 'Selected Projects' : 'Geselecteerde Projecten'}
              </span>
            </h2>
            
            <motion.p 
              key={`projects-header-${viewMode}`}
              variants={modeContentVariants}
              initial="hidden"
              animate="visible"
              className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              {isFreelance
                ? (language === 'en' 
                    ? 'Real business solutions that drive results'
                    : 'Echte bedrijfsoplossingen die resultaten leveren'
                  )
                : (language === 'en'
                    ? 'Technical innovation and problem-solving'
                    : 'Technische innovatie en probleemoplossing'
                  )
              }
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <ProjectsList 
              key={viewMode}
              projects={featuredProjects}
              language={language}
              viewMode={viewMode}
            />
          </AnimatePresence>

          {/* Modern CTA */}
          <motion.div variants={cardVariants} className="text-center mt-20">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {language === 'en' ? 'Explore More Work' : 'Ontdek Meer Werk'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                    {language === 'en' 
                      ? 'Dive deeper into my complete portfolio with detailed case studies'
                      : 'Duik dieper in mijn complete portfolio met gedetailleerde case studies'
                    }
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl px-8 py-4 text-lg"
                      asChild
                    >
                      <Link href="/projects" className="flex items-center">
                        <Folder className="h-5 w-5 mr-3" />
                        {language === 'en' ? 'All Projects' : 'Alle Projecten'}
                        <ArrowRight className="h-5 w-5 ml-3" />
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-white/30 hover:bg-white dark:hover:bg-slate-700 px-8 py-4 text-lg"
                      asChild
                    >
                      <a href="#contact">
                        {isFreelance 
                          ? (language === 'en' ? 'Start Project' : 'Start Project')
                          : (language === 'en' ? 'Get in Touch' : 'Contact')
                        }
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}