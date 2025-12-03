"use client"

import Link from "next/link"

import { Instagram, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-serif font-semibold text-foreground tracking-wide uppercase">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Contemporary photographer specializing in nature and street photography
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-serif font-semibold text-foreground tracking-wide uppercase">Contact</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="mailto:aakrasov@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                aakrasov@gmail.com
              </Link>
              <p className="text-sm text-muted-foreground">Based in Sibirea</p>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-serif font-semibold text-foreground tracking-wide uppercase">Follow</h3>
            <div className="flex items-center gap-6">
              <Link
                href="https://www.instagram.com/aakrasov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </Link>
              <Link
                href="mailto:aakrasov@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-muted-foreground">© {currentYear} Andrey Krasov. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp size={14} strokeWidth={1.5} className="group-hover:translate-y-[-2px] transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}

