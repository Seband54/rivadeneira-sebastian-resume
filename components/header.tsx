'use client'

import { useLanguage } from '@/app/providers'
import { translations } from '@/lib/translations'

export function Header() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">SR</h1>
        
        <nav className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            <li><a href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t.nav.about}</a></li>
            <li><a href="#skills" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t.nav.skills}</a></li>
            <li><a href="#experience" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t.nav.experience}</a></li>
            <li><a href="#projects" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t.nav.projects}</a></li>
            <li><a href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">{t.nav.contact}</a></li>
          </ul>

          <div className="flex items-center gap-3 border-l border-border pl-3">
            <button
              onClick={() => setLanguage('en')}
              className={`text-xs font-medium transition-colors ${
                language === 'en'
                  ? 'text-foreground'
                  : 'text-foreground/50 hover:text-foreground/70'
              }`}
            >
              EN
            </button>
            <span className="text-foreground/30">|</span>
            <button
              onClick={() => setLanguage('es')}
              className={`text-xs font-medium transition-colors ${
                language === 'es'
                  ? 'text-foreground'
                  : 'text-foreground/50 hover:text-foreground/70'
              }`}
            >
              ES
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
