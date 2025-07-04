'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Calendar, 
  Building, 
  Clock, 
  Languages,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Star,
  Code2,
  Database,
  Cloud,
  Globe,
  Shield,
  Zap,
  Award,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Users,
  Target,
  User
} from 'lucide-react'
import type { SectionProps } from '@/types'
import { personalInfo } from '@/data/personal'
import { freelanceAbout, professionalAbout } from '@/data/about'
import { calculateYearsOfExperience } from '@/lib/utils'
import type { LocalizedContent } from '@/types'

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

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="h-4 w-4" />,
  Calendar: <Calendar className="h-4 w-4" />,
  Building: <Building className="h-4 w-4" />,
  Clock: <Clock className="h-4 w-4" />,
  Languages: <Languages className="h-4 w-4" />,
  Briefcase: <Briefcase className="h-4 w-4" />,
  GraduationCap: <GraduationCap className="h-4 w-4" />
}

// Enhanced skill progress bar component
function SkillBar({ skill, language }: { skill: any, language: 'en' | 'nl' }) {
  const getSkillWidth = (level: string) => {
    switch (level) {
      case 'expert': return '95%'
      case 'advanced': return '85%'
      case 'intermediate': return '70%'
      default: return '50%'
    }
  }

  const getSkillColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-green-500'
      case 'advanced': return 'bg-blue-500'
      case 'intermediate': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm">{skill.name}</span>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <span className="capitalize">
            {language === 'en' ? skill.level : 
             skill.level === 'expert' ? 'expert' :
             skill.level === 'advanced' ? 'gevorderd' :
             skill.level === 'intermediate' ? 'tussenliggende' : skill.level
            }
          </span>
          <span>•</span>
          <span>{skill.years}{language === 'en' ? 'y' : 'j'}</span>
        </div>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div 
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
          initial={{ width: 0 }}
          whileInView={{ width: getSkillWidth(skill.level) }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.2 }}
        />
      </div>
    </div>
  )
}

// Professional stats component - REAL stats only
function ProfessionalStats({ language }: { language: 'en' | 'nl' }) {
  const stats = [
    {
      icon: Calendar,
      label: language === 'en' ? 'Years Experience' : 'Jaar Ervaring',
      value: '2+',
      color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: Code2,
      label: language === 'en' ? 'Languages' : 'Talen',
      value: 'Python, TS',
      color: 'text-green-600 bg-green-100 dark:bg-green-900/20'
    },
    {
      icon: Cloud,
      label: language === 'en' ? 'Cloud' : 'Cloud',
      value: 'Azure',
      color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20'
    },
    {
      icon: Globe,
      label: language === 'en' ? 'Location' : 'Locatie',
      value: 'Volendam',
      color: 'text-orange-600 bg-orange-100 dark:bg-orange-900/20'
    }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="text-center p-4 bg-card rounded-xl border border-border"
        >
          <div className={`inline-flex p-3 rounded-lg mb-3 ${stat.color}`}>
            <stat.icon className="h-5 w-5" />
          </div>
          <div className="text-lg font-bold mb-1">{stat.value}</div>
          <div className="text-xs text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

function FreelanceAboutSection({ language }: { language: 'en' | 'nl' }) {
  const [showAllSkills, setShowAllSkills] = useState(false)

  return (
    <motion.div
      variants={modeContentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="space-y-6"
    >
      
      {/* MOBILE: Compact Layout */}
      <div className="block lg:hidden space-y-4">
        
        {/* Main Bio - Streamlined */}
        <motion.div variants={itemVariants} className="bg-card p-5 rounded-xl border border-border">
          <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Briefcase className="h-4 w-4 text-primary" />
            </div>
            <span>{language === 'en' ? 'Custom Web Developer' : 'Custom Webontwikkelaar'}</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {language === 'en'
              ? 'I build professional custom-coded websites for North Holland businesses. With software engineering experience, I deliver enterprise-quality solutions at accessible prices.'
              : 'Ik bouw professionele custom-gecodeerde websites voor Noord-Holland bedrijven. Met software engineering ervaring lever ik enterprise-kwaliteit oplossingen tegen toegankelijke prijzen.'
            }
          </p>
        </motion.div>

        {/* What I Build - Streamlined */}
        <motion.div variants={itemVariants} className="bg-card p-5 rounded-xl border border-border">
          <h3 className="text-lg font-semibold mb-3">
            {language === 'en' ? 'What I Build' : 'Wat Ik Bouw'}
          </h3>
          
          <div className="space-y-3">
            {freelanceAbout.businessSkills[0]?.skills.slice(0, showAllSkills ? undefined : 3).map((skill, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{skill.name[language]}</div>
                  <div className="text-xs text-muted-foreground">{skill.description[language]}</div>
                </div>
              </div>
            ))}
          </div>

          {freelanceAbout.businessSkills[0]?.skills.length > 3 && (
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="flex items-center justify-center space-x-1 text-sm text-primary font-medium hover:text-primary/80 transition-colors mt-3 w-full py-2 border-t border-border"
            >
              <span>
                {showAllSkills 
                  ? (language === 'en' ? 'Show Less' : 'Toon Minder')
                  : (language === 'en' ? 'Show All' : 'Toon Alle')
                }
              </span>
              {showAllSkills ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          )}
        </motion.div>

        {/* Key Facts */}
        <motion.div variants={itemVariants} className="bg-card p-5 rounded-xl border border-border">
          <h3 className="text-lg font-semibold mb-3">
            {language === 'en' ? 'Key Facts' : 'Belangrijke Feiten'}
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {freelanceAbout.businessFacts.slice(0, 3).map((fact, index) => (
              <div key={index} className="flex items-center space-x-3 text-sm">
                <div className="p-1.5 bg-muted rounded-lg">
                  {iconMap[fact.icon]}
                </div>
                <div>
                  <span className="font-medium">{fact.label[language]}:</span>
                  <span className="ml-1 text-muted-foreground">{fact.value[language]}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* DESKTOP: Streamlined Two Column Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6">
        
        {/* Left Column: Bio & Info */}
        <div className="lg:col-span-2 space-y-5">
          
          {/* Main Bio - More Compact */}
          <motion.div variants={itemVariants} className="bg-card p-6 rounded-xl border border-border">
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{freelanceAbout.title[language]}</h3>
                <p className="text-primary font-medium text-sm">{language === 'en' ? 'North Holland • Available for Projects' : 'Noord-Holland • Beschikbaar voor Projecten'}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {freelanceAbout.bio[language]}
            </p>
          </motion.div>

          {/* Key Services - Streamlined */}
          <motion.div variants={itemVariants} className="bg-card p-6 rounded-xl border border-border">
            <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Code2 className="h-4 w-4 text-primary" />
              <span>{language === 'en' ? 'Services I Offer' : 'Diensten Die Ik Aanbied'}</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {freelanceAbout.businessSkills[0]?.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-start space-x-2 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">{skill.name[language]}</div>
                    <div className="text-xs text-muted-foreground">{skill.description[language]}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Development Quality */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-5 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">
              {language === 'en' ? 'Why Custom Development?' : 'Waarom Custom Ontwikkeling?'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { icon: Code2, title: language === 'en' ? 'Hand-Coded' : 'Handgecodeerd', desc: language === 'en' ? 'Built from scratch' : 'Vanaf nul gebouwd' },
                { icon: Zap, title: language === 'en' ? 'Lightning Fast' : 'Bliksem Snel', desc: language === 'en' ? 'Optimized performance' : 'Geoptimaliseerde prestaties' },
                { icon: Shield, title: language === 'en' ? 'Secure' : 'Veilig', desc: language === 'en' ? 'No template vulnerabilities' : 'Geen template kwetsbaarheden' }
              ].map((feature, index) => (
                <div key={index} className="text-center p-3 bg-white/50 dark:bg-blue-900/10 rounded-lg">
                  <div className="inline-flex p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-2">
                    <feature.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="font-medium text-blue-800 dark:text-blue-200 text-sm">{feature.title}</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">{feature.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Facts & Details */}
        <div className="space-y-5">
          
          {/* Business Facts */}
          <motion.div variants={itemVariants} className="bg-card p-5 rounded-xl border border-border">
            <h4 className="font-semibold mb-4">{language === 'en' ? 'Quick Facts' : 'Korte Feiten'}</h4>
            <div className="space-y-3">
              {freelanceAbout.businessFacts.map((fact, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm">
                  <div className="p-1.5 bg-muted rounded-lg">
                    {iconMap[fact.icon]}
                  </div>
                  <div>
                    <div className="font-medium text-xs text-muted-foreground">{fact.label[language]}</div>
                    <div className="text-foreground">{fact.value[language]}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Me - Compact */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/5 to-primary/10 p-5 rounded-xl border border-primary/20">
            <h4 className="font-semibold mb-3 text-primary flex items-center space-x-2">
              <Star className="h-4 w-4" />
              <span>{language === 'en' ? 'Why Choose Me?' : 'Waarom Mij Kiezen?'}</span>
            </h4>
            <div className="space-y-2">
              {freelanceAbout.whyChooseMe.slice(0, 3).map((reason, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary text-sm">{reason.title[language]}</div>
                    <div className="text-xs text-muted-foreground">{reason.description[language]}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div variants={itemVariants} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span className="font-medium text-sm">
                {personalInfo.availability.freelance[language]}
              </span>
            </div>
            <p className="text-green-700 dark:text-green-300 text-xs mt-1">
              {language === 'en' 
                ? 'Ready for new custom projects'
                : 'Klaar voor nieuwe custom projecten'
              }
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function ProfessionalAboutSection({ language }: { language: 'en' | 'nl' }) {
  const [showAllSkills, setShowAllSkills] = useState(false)

  // Helper function to get localized text
  const getText = (content: LocalizedContent): string => {
    return content[language]
  }

  return (
    <motion.div
      variants={modeContentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="space-y-6"
    >
      
      {/* Professional Stats */}
      <motion.div variants={itemVariants}>
        <ProfessionalStats language={language} />
      </motion.div>

      {/* MOBILE: Compact Layout */}
      <div className="block lg:hidden space-y-4">
        
        {/* Main Bio */}
        <motion.div variants={itemVariants} className="bg-card p-5 rounded-xl border border-border">
          <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="h-4 w-4 text-primary" />
            </div>
            <span>{professionalAbout.title[language]}</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {language === 'en'
              ? 'Software engineer with 2+ years of professional experience in full-stack development, data analysis, and cloud technologies. I specialize in building scalable solutions using Python, TypeScript, and Azure.'
              : 'Software engineer met 2+ jaar professionele ervaring in full-stack ontwikkeling, data-analyse en cloud technologieën. Ik specialiseer me in het bouwen van schaalbare oplossingen met Python, TypeScript en Azure.'
            }
          </p>
        </motion.div>

        {/* Core Skills */}
        <motion.div variants={itemVariants} className="bg-card p-5 rounded-xl border border-border">
          <h3 className="text-lg font-semibold mb-3">
            {language === 'en' ? 'Core Technologies' : 'Kern Technologieën'}
          </h3>
          
          <div className="space-y-3">
            {professionalAbout.technicalSkills[0]?.skills.slice(0, showAllSkills ? undefined : 4).map((skill, index) => (
              <SkillBar key={index} skill={skill} language={language} />
            ))}
          </div>

          {professionalAbout.technicalSkills[0]?.skills.length > 4 && (
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="flex items-center justify-center space-x-1 text-sm text-primary font-medium hover:text-primary/80 transition-colors mt-3 w-full py-2 border-t border-border"
            >
              <span>
                {showAllSkills 
                  ? (language === 'en' ? 'Show Less' : 'Toon Minder')
                  : (language === 'en' ? 'View All Skills' : 'Bekijk Alle Vaardigheden')
                }
              </span>
              {showAllSkills ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          )}
        </motion.div>

        {/* Career Highlights - Streamlined */}
        <motion.div variants={itemVariants} className="bg-card p-5 rounded-xl border border-border">
          <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
            <Award className="h-4 w-4 text-primary" />
            <span>{language === 'en' ? 'Key Achievements' : 'Belangrijkste Prestaties'}</span>
          </h3>
          <div className="space-y-2">
            {professionalAbout.careerHighlights.slice(0, 3).map((highlight, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="p-1 bg-primary/20 rounded-full mt-1">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-sm">{highlight.title[language]}</div>
                  <div className="text-xs text-muted-foreground">{highlight.description[language]}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* DESKTOP: Streamlined Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6">
        
        {/* Left Column: Bio & Experience */}
        <div className="lg:col-span-2 space-y-5">
          
          {/* Main Bio */}
          <motion.div variants={itemVariants} className="bg-card p-6 rounded-xl border border-border">
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{professionalAbout.title[language]}</h3>
                <p className="text-primary font-medium text-sm">{language === 'en' ? 'Full-Stack Developer • Open to Opportunities' : 'Full-Stack Developer • Open voor Kansen'}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {professionalAbout.bio[language]}
            </p>
          </motion.div>

          {/* Career Highlights - Streamlined */}
          <motion.div variants={itemVariants} className="bg-card p-5 rounded-xl border border-border">
            <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Award className="h-4 w-4 text-primary" />
              <span>{language === 'en' ? 'Career Highlights' : 'Carrière Hoogtepunten'}</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {professionalAbout.careerHighlights.map((highlight, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <div className="p-1.5 bg-primary/20 rounded-lg mt-0.5">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-medium text-sm mb-1">{highlight.title[language]}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{highlight.description[language]}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional Facts - Streamlined */}
          <motion.div variants={itemVariants} className="bg-card p-5 rounded-xl border border-border">
            <h4 className="font-semibold mb-3">{language === 'en' ? 'Professional Details' : 'Professionele Details'}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {professionalAbout.professionalFacts.slice(0, 4).map((fact, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 bg-muted/30 rounded-lg">
                  <div className="p-1.5 bg-muted rounded-lg">
                    {iconMap[fact.icon]}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{fact.label[language]}</div>
                    <div className="font-medium text-sm">{fact.value[language]}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Technical Skills */}
        <div className="space-y-5">
          <h4 className="text-lg font-semibold">
            {language === 'en' ? 'Technical Skills' : 'Technische Vaardigheden'}
          </h4>
          
          {professionalAbout.technicalSkills.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants} className="bg-card p-5 rounded-xl border border-border">
              <div className="flex items-center space-x-2 mb-3">
                <div className={`p-2 rounded-lg ${
                  categoryIndex === 0 ? 'bg-green-100 text-green-600 dark:bg-green-900/20' :
                  categoryIndex === 1 ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20' :
                  'bg-purple-100 text-purple-600 dark:bg-purple-900/20'
                }`}>
                  {categoryIndex === 0 ? <Database className="h-4 w-4" /> :
                   categoryIndex === 1 ? <Globe className="h-4 w-4" /> :
                   <Cloud className="h-4 w-4" />}
                </div>
                <h5 className="font-semibold text-sm">{getText(category.category)}</h5>
              </div>
              
              <div className="space-y-3">
                {category.skills.slice(0, 3).map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} language={language} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutSection({ language, viewMode }: SectionProps) {
  const isFreelance = viewMode === 'freelance'
  
  // Don't show loading state for mode switching
  if (!viewMode || !language) {
    return null
  }

  return (
    <section id="about" className="section-padding py-8 md:py-12">
      <div className="container-padding">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          
          {/* Streamlined Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {language === 'en' ? 'About' : 'Over Mij'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              {language === 'en' ? 'About Me' : 'Over Mij'}
            </h2>
            
            <motion.p 
              key={`header-${viewMode}`}
              variants={modeContentVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              {isFreelance 
                ? (language === 'en' 
                    ? 'Professional custom development with real software engineering experience'
                    : 'Professionele custom ontwikkeling met echte software engineering ervaring'
                  )
                : (language === 'en'
                    ? 'Building scalable solutions with modern technologies and proven results'
                    : 'Schaalbare oplossingen bouwen met moderne technologieën en bewezen resultaten'
                  )
              }
            </motion.p>
          </motion.div>

          {/* Mode-specific content with smooth transitions */}
          <AnimatePresence mode="wait">
            {isFreelance ? (
              <FreelanceAboutSection key="freelance" language={language} />
            ) : (
              <ProfessionalAboutSection key="professional" language={language} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}