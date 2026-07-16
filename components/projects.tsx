'use client'

import { useLanguage } from '@/app/providers'
import { translations } from '@/lib/translations'
import { GitBranch, ExternalLink } from 'lucide-react'

const projectsData = {
  en: [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js, featuring product management, shopping cart, and payment integration.',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Stripe'],
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, user authentication, and drag-and-drop functionality.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
      github: '#',
      live: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard that displays real-time analytics with interactive charts and comprehensive reporting features.',
      tags: ['React', 'D3.js', 'Express', 'MongoDB'],
      github: '#',
      live: '#',
    },
  ],
  es: [
    {
      title: 'Plataforma de E-Commerce',
      description: 'Una plataforma de e-commerce completa construida con Next.js, con gestión de productos, carrito de compras e integración de pagos.',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Stripe'],
      github: '#',
      live: '#',
    },
    {
      title: 'App de Gestión de Tareas',
      description: 'Herramienta colaborativa de gestión de tareas con actualizaciones en tiempo real, autenticación de usuarios y arrastrar y soltar.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
      github: '#',
      live: '#',
    },
    {
      title: 'Panel de Análisis',
      description: 'Panel de visualización de datos que muestra análisis en tiempo real con gráficos interactivos y funciones de informes completos.',
      tags: ['React', 'D3.js', 'Express', 'MongoDB'],
      github: '#',
      live: '#',
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
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-border rounded-sm p-6 hover:border-foreground/30 transition-colors">
            <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
            <p className="text-foreground/70 mb-4">{project.description}</p>
            
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
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                <GitBranch className="w-4 h-4" />
                {t.projects.viewCode}
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t.projects.viewLive}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
