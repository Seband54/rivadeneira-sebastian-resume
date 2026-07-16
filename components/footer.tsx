'use client'

import { useLanguage } from '@/app/providers'
import { translations } from '@/lib/translations'

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="https://github.com" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" className="hover:text-foreground transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
