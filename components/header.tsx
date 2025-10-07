"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-xl lg:text-2xl text-foreground">PlayGame Studios</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#characters" className="text-foreground hover:text-primary transition-colors">
              Characters
            </a>
            <a href="#gameplay" className="text-foreground hover:text-primary transition-colors">
              Gameplay
            </a>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Play Now
            </Button>
          </nav>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-border">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#characters" className="text-foreground hover:text-primary transition-colors">
              Characters
            </a>
            <a href="#gameplay" className="text-foreground hover:text-primary transition-colors">
              Gameplay
            </a>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
              Play Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
