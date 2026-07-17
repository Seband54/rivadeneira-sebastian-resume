'use client'

import { useLanguage } from '@/app/providers'

const certificationsData = {
  en: {
    title: 'Certifications & Languages',
    certifications: [
      'ISO/IEC 27001 Information Security Management System',
      'Role-Based Access Control (RBAC)',
      'Multi-Factor Authentication (MFA) Implementation',
      'Zero Trust Security Architecture',
      'Design Thinking Methodology',
      'Lean Startup Framework',
      'Scrum Agile Framework',
      'Kanban Methodology',
    ],
    languages: [
      { language: 'Spanish', level: 'Native' },
      { language: 'English', level: 'Advanced' },
    ],
  },
  es: {
    title: 'Certificaciones e Idiomas',
    certifications: [
      'ISO/IEC 27001 Sistema de Gestión de Seguridad de la Información',
      'Control de Acceso Basado en Roles (RBAC)',
      'Implementación de Autenticación Multifactor (MFA)',
      'Arquitectura Zero Trust',
      'Metodología Design Thinking',
      'Marco Lean Startup',
      'Framework Ágil Scrum',
      'Metodología Kanban',
    ],
    languages: [
      { language: 'Español', level: 'Nativo' },
      { language: 'Inglés', level: 'Avanzado' },
    ],
  },
}

export function Certifications() {
  const { language } = useLanguage()
  const data = certificationsData[language]

  return (
    <section id="certifications" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
      <h3 className="text-3xl font-bold text-foreground mb-12">{data.title}</h3>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-xl font-semibold text-foreground mb-6">
            {language === 'en' ? 'Certifications & Knowledge' : 'Certificaciones & Conocimientos'}
          </h4>
          <div className="space-y-3">
            {data.certifications.map((cert, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <p className="text-foreground/70">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-foreground mb-6">
            {language === 'en' ? 'Languages' : 'Idiomas'}
          </h4>
          <div className="space-y-4">
            {data.languages.map((lang, index) => (
              <div key={index} className="border border-border rounded-sm p-4">
                <p className="font-semibold text-foreground">{lang.language}</p>
                <p className="text-sm text-foreground/60">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
