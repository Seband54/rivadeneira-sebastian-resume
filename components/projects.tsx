'use client'

import { useLanguage } from '@/app/providers'
import { translations } from '@/lib/translations'
import { GitBranch, ExternalLink } from 'lucide-react'

const projectsData = {
  en: [
    {
      title: 'DevOps - StudentRisk Platform for University Dropout Prevention',
      description: 'Web platform for early detection of student dropout risk developed under Design Thinking, Lean Startup, and Scrum/Kanban frameworks within a DevOps lifecycle. Features risk evaluation engine and AI module applied to academic data with continuous deployment to cloud.',
      details: [
        'Backlog managed in Jira with epics and user stories distributed across multiple sprints with rotative Scrum Master responsibility',
        'Collaborative backend development: business logic, user authentication, and database connectivity with version control branches',
        'Continuous integration to main branch ensuring code quality and stability',
        'Risk evaluation engine and AI module implementation applied to academic data',
        'MVC architecture with interface prototyping for user experience optimization',
        'Continuous deployment to cloud infrastructure with automated pipelines'
      ],
      tags: ['Scrum', 'Kanban', 'Jira', 'Git', 'CI/CD', 'Cloud', 'MVC', 'AI/ML'],
      github: 'https://github.com/Seband54',
    },
    {
      title: 'Systems Simulation - Carwash Operations Optimization',
      description: 'Comprehensive discrete event simulation model for proposing operational improvements at carwash facilities. Involved complete data lifecycle from collection and processing to model construction and scenario analysis.',
      details: [
        'Real-world operational data collection from carwash processes',
        'Data cleaning and validation for accuracy and reliability',
        'Discrete event simulation model development capturing all operational processes',
        'Multiple scenario creation and comparative analysis',
        'Statistical evaluation of results using industry metrics',
        'Documented improvement proposals with quantified benefits'
      ],
      tags: ['ProModel', 'Data Analysis', 'Simulation', 'Optimization', 'Statistical Analysis'],
      github: 'https://github.com/Seband54',
    },
    {
      title: 'Interactive Memory Game Application',
      description: 'Full-featured interactive memory card game with responsive design, developed with vanilla HTML, CSS, and JavaScript. Packaged and deployed as cross-platform desktop application using Electron with comprehensive documentation.',
      details: [
        'Game logic implementation with complete mechanics using vanilla JavaScript',
        'Responsive user interface optimized for multiple screen sizes',
        'Score tracking and game statistics display',
        'Sound effects and visual feedback for user interactions',
        'Desktop application packaging and deployment via Electron',
        'Comprehensive project documentation and user guides'
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Electron', 'Desktop Apps'],
      github: 'https://github.com/Seband54',
    },
  ],
  es: [
    {
      title: 'DevOps - Plataforma StudentRisk para Prevención de Deserción Universitaria',
      description: 'Plataforma web para detección temprana del riesgo de deserción estudiantil, desarrollada bajo Design Thinking, Lean Startup y marcos Scrum/Kanban dentro de ciclo DevOps. Motor de evaluación de riesgo y módulo IA aplicado a datos académicos con despliegue continuo en la nube.',
      details: [
        'Backlog gestionado en Jira con épicas e historias de usuario distribuidas en múltiples sprints con responsabilidad rotatoria de Scrum Master',
        'Desarrollo colaborativo del backend: lógica de negocio, autenticación de usuarios y conectividad de base de datos con ramas de control',
        'Integración continua a la rama principal asegurando calidad y estabilidad del código',
        'Implementación del motor de evaluación de riesgo y módulo IA aplicado a datos académicos',
        'Arquitectura MVC con prototipado de interfaces para optimización de experiencia de usuario',
        'Despliegue continuo a infraestructura en la nube con pipelines automatizados'
      ],
      tags: ['Scrum', 'Kanban', 'Jira', 'Git', 'CI/CD', 'Cloud', 'MVC', 'IA/ML'],
      github: 'https://github.com/Seband54',
    },
    {
      title: 'Simulación de Sistemas - Optimización de Operaciones en Carwash',
      description: 'Modelo integral de simulación de eventos discretos para proponer mejoras operacionales en instalaciones de carwash. Involucró ciclo completo de datos desde recolección y procesamiento hasta construcción del modelo y análisis de escenarios.',
      details: [
        'Recolección de datos operacionales reales de procesos de carwash',
        'Limpieza y validación de datos para precisión y confiabilidad',
        'Desarrollo de modelo de simulación de eventos discretos capturando todos los procesos',
        'Creación de múltiples escenarios y análisis comparativo',
        'Evaluación estadística de resultados usando métricas de la industria',
        'Propuestas de mejora documentadas con beneficios cuantificados'
      ],
      tags: ['ProModel', 'Análisis de Datos', 'Simulación', 'Optimización', 'Análisis Estadístico'],
      github: 'https://github.com/Seband54',
    },
    {
      title: 'Aplicación de Juego de Memoria Interactivo',
      description: 'Juego de memoria con características completas y diseño responsivo, desarrollado con HTML, CSS y JavaScript vanilla. Empaquetado y despliegue como aplicación de escritorio multiplataforma usando Electron con documentación completa.',
      details: [
        'Implementación de lógica del juego con mecánicas completas usando JavaScript vanilla',
        'Interfaz de usuario responsiva optimizada para múltiples tamaños de pantalla',
        'Seguimiento de puntuación y visualización de estadísticas del juego',
        'Efectos de sonido y retroalimentación visual para interacciones de usuario',
        'Empaquetado y despliegue de aplicación de escritorio mediante Electron',
        'Documentación integral del proyecto y guías de usuario'
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Electron', 'Aplicaciones de Escritorio'],
      github: 'https://github.com/Seband54',
    },
  ],
}

export function Projects() {
  const { language } = useLanguage()
  const t = translations[language]
  const projects = projectsData[language]

  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
      <h3 className="text-3xl font-bold text-foreground mb-12">{t.projects.title}</h3>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-border rounded-sm p-6 hover:border-foreground/30 transition-colors">
            <h4 className="text-xl font-semibold text-foreground mb-2">{project.title}</h4>
            <p className="text-foreground/70 mb-4">{project.description}</p>
            
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h5>
              <ul className="space-y-2">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-foreground/70 flex gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-card text-foreground/70 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                <GitBranch className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
