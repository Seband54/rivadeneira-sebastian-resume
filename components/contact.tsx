'use client'

import { useLanguage } from '@/app/providers'
import { translations } from '@/lib/translations'
import { Mail, MapPin, GitBranch, Download } from 'lucide-react'

export function Contact() {
  const { language } = useLanguage()
  const t = translations[language]

  const contactLinks = [
    {
      icon: GitBranch,
      label: language === 'en' ? 'GitHub' : 'GitHub',
      href: 'https://github.com/Seband54',
      value: 'github.com/Seband54',
    },
    {
      icon: MapPin,
      label: language === 'en' ? 'LinkedIn' : 'LinkedIn',
      href: 'https://linkedin.com/in/sebastian-rivadeneira-6496ab277',
      value: 'sebastian-rivadeneira-6496ab277',
    },
  ]

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
      <h3 className="text-3xl font-bold text-foreground mb-3">{t.contact.title}</h3>
      <p className="text-foreground/60 mb-12">{t.contact.subtitle}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border rounded-sm hover:border-foreground/30 hover:bg-card transition-colors group"
              >
                <Icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" />
                <div>
                  <p className="text-xs text-foreground/50">{link.label}</p>
                  <p className="text-sm font-medium text-foreground">{link.value}</p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <div className="p-6 border border-border rounded-sm bg-card">
            <p className="text-sm text-foreground/70 mb-4">
              {language === 'en'
                ? 'Download my CV to learn more about my experience and qualifications.'
                : 'Descarga mi CV para saber más sobre mi experiencia y calificaciones.'}
            </p>
            <div className="flex gap-3">
              <a
                href="/cv-en.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-sm font-medium hover:opacity-90 transition-opacity text-sm"
              >
                <Download className="w-4 h-4" />
                {language === 'en' ? 'CV English' : 'CV Inglés'}
              </a>
              <a
                href="/cv-es.pdf"
                className="flex items-center gap-2 px-4 py-2 border border-foreground text-foreground rounded-sm font-medium hover:bg-foreground/5 transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                {language === 'en' ? 'CV Spanish' : 'CV Español'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
