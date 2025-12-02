import Link from "next/link"

import { Instagram, Mail } from "lucide-react"



export function TopNavigation() {

  return (

    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">

      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="flex items-center justify-between">

          {/* Left: Name and Title */}

          <div className="flex flex-col gap-1">

            <h1 className="text-2xl font-serif font-bold text-foreground tracking-tight">Andrey Krasov</h1>

            <p className="text-sm text-muted-foreground font-light">Modern Photograph</p>

          </div>



          {/* Right: Social Links */}

          <div className="flex items-center gap-6">

            <Link

              href="https://instagram.com"

              target="_blank"

              rel="noopener noreferrer"

              className="text-muted-foreground hover:text-foreground transition-colors duration-200"

              aria-label="Instagram"

            >

              <Instagram size={20} strokeWidth={1.5} />

            </Link>

            <Link

              href="mailto:andrey@example.com"

              className="text-muted-foreground hover:text-foreground transition-colors duration-200"

              aria-label="Email"

            >

              <Mail size={20} strokeWidth={1.5} />

            </Link>

          </div>

        </div>

      </div>

    </nav>

  )

}

