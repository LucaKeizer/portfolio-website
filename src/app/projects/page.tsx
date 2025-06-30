'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, Filter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/useLanguage'
import { useViewMode } from '@/hooks/useViewMode'
import { allProjects, projectCategories, ExtendedProject } from '@/data/allProjects'
import { formatDate } from '@/lib/utils'
import type { Project, LocalizedContent } from '@/types'

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

function ProjectCard({ project, language, viewMode }: { 
  project: ExtendedProject, 
  language: 'en' | 'nl', 
  viewMode: 'freelance' | 'professional' 
}) {
  const isFreelance = viewMode === 'freelance'

  // Helper function to get localized text
  const getText = (content: LocalizedContent): string => {
    return content[language]
  }

  return (
    <motion.div
      variants={cardVariants}
      className="bg-card rounded-xl border border-border overflow-hidden card-hover group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {project.images && project.images.length > 0 ? (
          <img
            src={project.images[0]}
            alt={getText(project.title)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
            <div className="text-brand-600 text-sm font-medium">
              {getText(project.title)}
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          {project.liveUrl && (
            <Button variant="secondary" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.githubUrl && !isFreelance && (
            <Button variant="secondary" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(project.startDate, language)}</span>
          </div>
          {project.status === 'completed' && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              {language === 'en' ? 'Completed' : 'Voltooid'}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-1">
          {getText(project.title)}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {getText(project.description)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Client */}
        {project.client && isFreelance && (
          <p className="text-xs text-muted-foreground">
            {language === 'en' ? 'Client: ' : 'Klant: '}{project.client}
          </p>
        )}
      </div>
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
      <div className="min-h-screen bg-background pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Page Not Available' : 'Pagina Niet Beschikbaar'}
          </h1>
          <p className="text-muted-foreground mb-6">
            {language === 'en' 
              ? 'This page is only available in freelance mode.'
              : 'Deze pagina is alleen beschikbaar in freelance modus.'
            }
          </p>
          <Button asChild>
            <Link href="/">
              {language === 'en' ? 'Back to Home' : 'Terug naar Home'}
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  // Only show freelance projects
  const filteredProjects = allProjects
    .filter(project => project.showInFreelance)
    .filter(project => {
      // Filter by category
      if (selectedCategory === 'all') return true
      return project.category === selectedCategory
    })

  // Get available categories for freelance projects only
  const availableCategories = projectCategories.filter(cat => {
    if (cat.id === 'all') return true
    return filteredProjects.some(project => project.category === cat.id)
  })

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container-padding py-12">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground mb-8 link-hover">
            <ArrowLeft className="h-4 w-4" />
            <span>{language === 'en' ? 'Back to Home' : 'Terug naar Home'}</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'en' ? 'All Client Projects' : 'Alle Klant Projecten'}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            {language === 'en' 
              ? 'A complete overview of websites and digital solutions I\'ve built for businesses across North Holland.'
              : 'Een compleet overzicht van websites en digitale oplossingen die ik heb gebouwd voor bedrijven in Noord-Holland.'
            }
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mr-4">
            <Filter className="h-4 w-4" />
            <span>{language === 'en' ? 'Filter by:' : 'Filter op:'}</span>
          </div>
          
          {availableCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.label[language]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              language={language} 
              viewMode="freelance"
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'No projects found for this category.'
                : 'Geen projecten gevonden voor deze categorie.'
              }
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'en' ? 'Ready to Start Your Project?' : 'Klaar Om Je Project Te Starten?'}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Let\'s discuss your business needs and create a solution that drives real results.'
                : 'Laten we je bedrijfsbehoeften bespreken en een oplossing creëren die echte resultaten oplevert.'
              }
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link href="/#contact">
                {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}