'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, TrendingUp, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionProps } from '@/types'
import { getFeaturedProjects } from '@/data/projects'
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

export default function ProjectsSection({ language, viewMode }: SectionProps) {
  const isFreelance = viewMode === 'freelance'
  const featuredProjects = getFeaturedProjects(viewMode)

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-padding">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'Featured Projects' : 'Uitgelichte Projecten'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isFreelance
                ? (language === 'en' 
                    ? 'Real client websites and business solutions that delivered measurable results'
                    : 'Echte klant websites en bedrijfsoplossingen die meetbare resultaten leverden'
                  )
                : (language === 'en'
                    ? 'Technical projects demonstrating software engineering skills and system architecture'
                    : 'Technische projecten die software engineering vaardigheden en systeemarchitectuur tonen'
                  )
              }
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                variants={cardVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="bg-gradient-to-br from-brand-100 to-brand-200 h-64 md:h-80 rounded-xl flex items-center justify-center border border-border card-hover">
                      <div className="text-center text-muted-foreground">
                        <Code2 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm">
                          {language === 'en' ? 'Project Screenshot' : 'Project Screenshot'}
                        </p>
                        <p className="text-xs mt-1">{project.title}</p>
                      </div>
                    </div>
                    
                    {/* Overlay with links */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center space-x-4">
                      {project.liveUrl && (
                        <Button variant="secondary" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {language === 'en' ? 'Live Demo' : 'Live Demo'}
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && !isFreelance && (
                        <Button variant="secondary" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            {language === 'en' ? 'Code' : 'Code'}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  
                  {/* Header */}
                  <div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {formatDate(project.startDate, language)}
                        {project.endDate && ` - ${formatDate(project.endDate, language)}`}
                      </span>
                      {project.client && (
                        <>
                          <span>•</span>
                          <Users className="h-4 w-4" />
                          <span>{project.client}</span>
                        </>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {isFreelance ? project.freelanceDescription : project.professionalDescription}
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
                          {tech}
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
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        {project.businessImpact}
                      </p>
                      {project.results && project.results.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {project.results.slice(0, 3).map((result, resultIndex) => (
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
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        {project.technicalDetails}
                      </p>
                      {project.challenges && project.challenges.length > 0 && (
                        <div className="mt-3">
                          <p className="text-blue-800 dark:text-blue-200 text-sm font-medium mb-1">
                            {language === 'en' ? 'Key Challenges Solved:' : 'Belangrijkste Uitdagingen Opgelost:'}
                          </p>
                          <ul className="space-y-1">
                            {project.challenges.slice(0, 2).map((challenge, challengeIndex) => (
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
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={cardVariants} className="text-center mt-16">
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                {isFreelance 
                  ? (language === 'en' ? 'Start Your Project' : 'Start Je Project')
                  : (language === 'en' ? 'Get in Touch' : 'Neem Contact Op')
                }
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}