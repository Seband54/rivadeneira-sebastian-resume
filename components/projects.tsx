'use client'

import { useLanguage } from '@/app/providers'
import { translations } from '@/lib/translations'
import { GitBranch, ExternalLink } from 'lucide-react'

const projectsData = {
  en: [
    {
      title: 'Thesis - Cloud Data Analysis System for Customer Segmentation',
      description: 'Cloud-based data analysis system that improves customer segmentation quality through various clustering algorithms, including a proprietary automatic k-search variant. Architecture comprised of API, visualization dashboard, and experiment tracking module, containerized and deployed to production.',
      details: [
        'Implementation of multiple clustering algorithms including custom k-search automation variant for optimal parameter selection',
        'Cloud-based architecture with API, visualization dashboard, and experiment tracking module',
        'Debugging and normalization of 110,000+ records from three real-world datasets across retail, marketing, and services sectors',
        'Statistical validation of results with proven improvements compared to traditional baseline scenarios',
        'Scalability testing with volumes up to one million records demonstrating system robustness'
      ],
      tags: ['Python', 'Clustering', 'Cloud', 'Data Analysis', 'Machine Learning', 'API', 'Docker'],
      github: 'https://github.com/Seband54',
    },
    {
      title: 'Cybersecurity - Information Security Management System under ISO/IEC 27001',
      description: 'Application of ISO/IEC 27001 standard in designing an Information Security Management System for a software development agency with remote operations. Comprehensive risk assessment and implementation of Zero Trust architecture with role-based access control.',
      details: [
        'Risk assessment of technological and human factors using Zero Trust approach and minimum privilege principle',
        'Organizational context analysis and stakeholder identification for comprehensive security planning',
        'Role-Based Access Control (RBAC) model implementation and multi-factor authentication (MFA) scheme deployment',
        'Internal legal framework development for information protection and intellectual property safeguarding',
        'Secure development practices integrated into technical workflow for continuous security assurance'
      ],
      tags: ['ISO/IEC 27001', 'Cybersecurity', 'Zero Trust', 'RBAC', 'MFA', 'Risk Management'],
      github: 'https://github.com/Seband54',
    },
    {
      title: 'Software Quality - Web Application Quality Assurance',
      description: 'Comprehensive quality assurance plan for a web platform managing an amusement park, including defined quality objectives, testing strategy, and acceptance criteria following industry best practices.',
      details: [
        'Definition of quality objectives and comprehensive testing strategy with acceptance criteria for all components',
        'Functional, validation, usability, performance, compatibility, and security test cases execution following industry standards',
        'Automation of repetitive functional tests and performance testing under concurrent load conditions',
        'Identification and documentation of access control and configuration vulnerabilities with severity classification',
        'Security analysis and vulnerability assessment ensuring comprehensive platform protection'
      ],
      tags: ['QA Testing', 'Test Automation', 'Security Testing', 'Performance Testing', 'OWASP'],
      github: 'https://github.com/Seband54',
    },
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
        'Real-world operational data collection from carwash processes with systematic observation and documentation',
        'Data cleaning and validation for accuracy and reliability ensuring model integrity',
        'Discrete event simulation model development capturing all operational processes and dependencies',
        'Multiple scenario creation and comparative analysis identifying optimization opportunities',
        'Statistical evaluation of results using industry metrics and hypothesis testing',
        'Documented improvement proposals with quantified benefits and implementation recommendations'
      ],
      tags: ['ProModel', 'Data Analysis', 'Simulation', 'Optimization', 'Statistical Analysis'],
      github: 'https://github.com/Seband54',
    },
  ],
  es: [
    {
      title: 'Tesis — Sistema de Análisis de Datos en la Nube para la Segmentación de Clientes',
      description: 'Sistema de análisis de datos en la nube que mejora la calidad de segmentación de clientes mediante distintos algoritmos de clustering, incluyendo una variante propia de búsqueda automática de k. Arquitectura compuesta por una API, un panel de visualización y un módulo de seguimiento de experimentos, contenerizada y desplegada en producción.',
      details: [
        'Implementación de múltiples algoritmos de clustering incluyendo variante personalizada de búsqueda automática de k para selección óptima de parámetros',
        'Arquitectura en la nube con API, panel de visualización y módulo de seguimiento de experimentos',
        'Depuración y normalización de más de 110,000 registros provenientes de tres datasets reales de sectores retail, marketing y servicios',
        'Validación estadística de resultados con mejoras comprobadas frente a escenarios tradicionales de referencia',
        'Pruebas de escalabilidad con volúmenes de hasta un millón de registros demostrando robustez del sistema'
      ],
      tags: ['Python', 'Clustering', 'Cloud', 'Análisis de Datos', 'Machine Learning', 'API', 'Docker'],
      github: 'https://github.com/Seband54',
    },
    {
      title: 'Ciberseguridad — Sistema de Gestión de Seguridad de la Información bajo ISO/IEC 27001',
      description: 'Aplicación de la norma ISO/IEC 27001 en el diseño de un Sistema de Gestión de Seguridad de la Información para una agencia de desarrollo de software con operación remota. Evaluación integral de riesgos e implementación de arquitectura Zero Trust con control de acceso basado en roles.',
      details: [
        'Evaluación de riesgos tecnológicos y humanos bajo enfoque Zero Trust y principio de mínimo privilegio',
        'Análisis del contexto organizacional e identificación de partes interesadas para planificación de seguridad integral',
        'Implementación de modelo de control de acceso basado en roles (RBAC) y esquema de autenticación multifactor (MFA)',
        'Desarrollo de marco legal interno para protección de información y propiedad intelectual',
        'Prácticas de desarrollo seguro integradas al flujo de trabajo técnico para aseguramiento continuo'
      ],
      tags: ['ISO/IEC 27001', 'Ciberseguridad', 'Zero Trust', 'RBAC', 'MFA', 'Gestión de Riesgos'],
      github: 'https://github.com/Seband54',
    },
    {
      title: 'Calidad de Software — Aseguramiento de Calidad de una Aplicación Web',
      description: 'Plan integral de aseguramiento de calidad para una plataforma web de gestión de un parque de diversiones, con objetivos de calidad, estrategia de pruebas y criterios de aceptación definidos siguiendo mejores prácticas de la industria.',
      details: [
        'Definición de objetivos de calidad y estrategia integral de pruebas con criterios de aceptación para todos los componentes',
        'Ejecución de casos de prueba funcionales, de validación, usabilidad, rendimiento, compatibilidad y seguridad bajo estándares de la industria',
        'Automatización de pruebas funcionales repetitivas y ejecución de pruebas de rendimiento bajo carga concurrente',
        'Identificación y documentación de vulnerabilidades de control de acceso y configuración con clasificación de severidad',
        'Análisis de seguridad y evaluación de vulnerabilidades asegurando protección integral de la plataforma'
      ],
      tags: ['QA Testing', 'Automatización de Pruebas', 'Testing de Seguridad', 'Testing de Rendimiento', 'OWASP'],
      github: 'https://github.com/Seband54',
    },
    {
      title: 'DevOps — Plataforma StudentRisk para Prevención de Deserción Universitaria',
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
      title: 'Simulación de Sistemas — Optimización de un Carwash mediante Simulación de Eventos Discretos',
      description: 'Propuesta de mejoras operativas para un carwash a partir de un modelo de simulación de eventos discretos. Involucró ciclo completo de datos desde recolección y procesamiento hasta construcción del modelo y análisis de escenarios.',
      details: [
        'Recolección de datos operacionales reales de procesos de carwash con observación sistemática y documentación',
        'Limpieza y validación de datos para precisión y confiabilidad asegurando integridad del modelo',
        'Desarrollo de modelo de simulación de eventos discretos capturando todos los procesos y dependencias',
        'Creación de múltiples escenarios y análisis comparativo identificando oportunidades de optimización',
        'Evaluación estadística de resultados usando métricas de la industria y pruebas de hipótesis',
        'Propuestas de mejora documentadas con beneficios cuantificados y recomendaciones de implementación'
      ],
      tags: ['ProModel', 'Análisis de Datos', 'Simulación', 'Optimización', 'Análisis Estadístico'],
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
