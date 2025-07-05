'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Filter, Code2, Eye, Folder } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/useLanguage'
import { useViewMode } from '@/hooks/useViewMode'
import { allProjects, projectCategories, ExtendedProject } from '@/data/allProjects'
import type { LocalizedContent } from '@/types'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

function CompactProjectCard({ project, language, viewMode }: { 
  project: ExtendedProject, 
  language: 'en' | 'nl', 
  viewMode: 'freelance' | 'professional' 
}) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const isFreelance = viewMode === 'freelance'

  const getText = (content: LocalizedContent): string => {
    return content[language]
  }

  const getTechName = (tech: string | { en: string; nl: string }): string => {
    if (typeof tech === 'string') return tech
    return tech[language]
  }

  // Check if we have a valid image path
  const hasImagePath = project.images && project.images.length > 0 && project.images[0]
  
  const renderFallback = () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
        }} />
      </div>
      <div className="text-center relative z-10 text-white/90">
        <Code2 className="h-8 w-8 mx-auto mb-2 opacity-80" />
        <p className="text-xs font-medium opacity-90 px-2 line-clamp-2 leading-tight">
          {getText(project.title)}
        </p>
      </div>
    </div>
  )

  // Determine the primary link
  const primaryUrl = project.liveUrl || project.githubUrl
  const CardWrapper = primaryUrl ? 'a' : 'div'
  const cardProps = primaryUrl ? {
    href: primaryUrl,
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {}

  return (
    <motion.div variants={cardVariants} className="group">
      <CardWrapper
        {...cardProps}
        className="block bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      >
        {/* Image container */}
        <div className="relative h-40 overflow-hidden">
          
          {hasImagePath && !imageError ? (
            <>
              {/* Actual image */}
              <img
                src={project.images[0]}
                alt={getText(project.title)}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                onError={() => {
                  setImageError(true)
                }}
                onLoad={() => {
                  setImageLoaded(true)
                }}
              />
              
              {/* Show fallback overlay while loading */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-30">
                    <div className="h-full w-full" style={{
                      backgroundImage: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
                    }} />
                  </div>
                  <div className="text-center relative z-10 text-white/90">
                    <Code2 className="h-8 w-8 mx-auto mb-2 opacity-80" />
                    <p className="text-xs font-medium opacity-90 px-2 line-clamp-2 leading-tight">
                      {getText(project.title)}
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            // No image or failed to load - show fallback only
            renderFallback()
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Action button on hover */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.liveUrl ? (
              <div className="bg-white/95 text-slate-900 rounded-md px-2 py-1 text-xs font-medium flex items-center">
                <Eye className="h-3 w-3 mr-1" />
                Live
              </div>
            ) : project.githubUrl && !isFreelance ? (
              <div className="bg-white/95 text-slate-900 rounded-md px-2 py-1 text-xs font-medium flex items-center">
                <Github className="h-3 w-3 mr-1" />
                Code
              </div>
            ) : null}
          </div>

          {/* Status badge */}
          {project.status === 'completed' && (
            <div className="absolute top-2 left-2">
              <span className="px-2 py-1 bg-green-500/90 text-white text-xs rounded-full font-medium">
                {language === 'en' ? 'Live' : 'Live'}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 line-clamp-2 leading-tight">
            {getText(project.title)}
          </h3>
          
          {project.client && isFreelance && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
              {project.client}
            </p>
          )}
          
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">
            {getText(project.description)}
          </p>

          {/* Tech tags */}
          <div className="flex gap-1 flex-wrap">
            {project.technologies.slice(0, 2).map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded"
              >
                {getTechName(tech)}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs rounded">
                +{project.technologies.length - 2}
              </span>
            )}
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  )
}

export default function AllProjectsPage() {
  const { language } = useLanguage()
  const { viewMode } = useViewMode()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Redirect to home if not in freelance mode
  if (viewMode !== 'freelance') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-16 flex items-center justify-center">
        <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'en' ? 'Switch to Freelance Mode' : 'Schakel naar Freelance Modus'}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {language === 'en' 
              ? 'This page shows client projects and is only available in freelance mode.'
              : 'Deze pagina toont klantprojecten en is alleen beschikbaar in freelance modus.'
            }
          </p>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <Link href="/">
              {language === 'en' ? 'Back to Home' : 'Terug naar Home'}
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  // Filter projects
  const filteredProjects = allProjects
    .filter(project => project.showInFreelance)
    .filter(project => {
      if (selectedCategory === 'all') return true
      return project.category === selectedCategory
    })

  // Get available categories
  const availableCategories = projectCategories.filter(cat => {
    if (cat.id === 'all') return true
    return filteredProjects.some(project => project.category === cat.id)
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-16">
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
      </div>

      <div className="container-padding py-8 md:py-12 relative z-10">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <Link href="/" className="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">{language === 'en' ? 'Back to Home' : 'Terug naar Home'}</span>
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 shadow-lg mb-6">
              <Folder className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {language === 'en' ? 'Complete Portfolio' : 'Complete Portfolio'}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              {language === 'en' ? 'All Client Work' : 'Al Mijn Klantwerk'}
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Complete overview of websites and solutions built for Noord-Holland businesses'
                : 'Compleet overzicht van websites en oplossingen gebouwd voor Noord-Holland bedrijven'
              }
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
          {availableCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/70 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 backdrop-blur-xl border border-white/20'
              }`}
            >
              {category.label[language]}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {filteredProjects.map((project) => (
            <CompactProjectCard 
              key={project.id} 
              project={project} 
              language={language} 
              viewMode="freelance"
            />
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg max-w-md mx-auto">
              <Code2 className="h-12 w-12 mx-auto mb-4 text-slate-400" />
              <p className="text-slate-600 dark:text-slate-400">
                {language === 'en' 
                  ? 'No projects found for this category.'
                  : 'Geen projecten gevonden voor deze categorie.'
                }
              </p>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Ready for Your Project?' : 'Klaar Voor Je Project?'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm md:text-base">
              {language === 'en' 
                ? 'Let\'s create something amazing for your business'
                : 'Laten we iets geweldigs creëren voor je bedrijf'
              }
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/#contact">
                {language === 'en' ? 'Start Your Project' : 'Start Je Project'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}