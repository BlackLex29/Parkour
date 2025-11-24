"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {!logoError ? (
                <img 
                  src="/VaultBreaker.jpg" 
                  alt="Vault Breaker Logo" 
                  className="w-12 h-12 object-cover rounded-xl shadow-lg"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">VB</span>
                </div>
              )}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl lg:text-2xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Vault Breaker
              </span>
              <span className="text-xs text-muted-foreground -mt-1">by PlayGame Studios</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className="text-foreground hover:text-cyan-400 transition-colors font-medium relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#characters" 
              className="text-foreground hover:text-purple-400 transition-colors font-medium relative group"
            >
              Characters
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#gameplay" 
              className="text-foreground hover:text-green-400 transition-colors font-medium relative group"
            >
              Gameplay
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
            </a>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 font-bold shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Play Free Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-accent/50" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 flex flex-col gap-6 border-t border-border/60 bg-background/95 backdrop-blur-md">
            <a 
              href="#features" 
              className="text-foreground hover:text-cyan-400 transition-colors font-medium py-2 border-b border-border/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#characters" 
              className="text-foreground hover:text-purple-400 transition-colors font-medium py-2 border-b border-border/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Characters
            </a>
            <a 
              href="#gameplay" 
              className="text-foreground hover:text-green-400 transition-colors font-medium py-2 border-b border-border/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Gameplay
            </a>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 font-bold shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Play Free Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}