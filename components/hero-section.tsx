 "use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Youtube, X, Play, Sparkles, GamepadIcon } from "lucide-react"

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/anime-style-parkour-character-jumping-between-futu.jpg"
          alt="Vault Breaker Hero - Parkour character in futuristic city"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/50 to-cyan-900/70" />
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Text Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        {/* Game Studio Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-cyan-400/40 mb-6">
          <GamepadIcon className="w-4 h-4 text-cyan-300" />
          <span className="text-cyan-200 font-semibold text-sm">
            PLAYGAME STUDIOS PRESENTS
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-white">
          VAULT
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
            BREAKER
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-6 max-w-4xl mx-auto text-balance leading-relaxed font-medium">
          Defy gravity. Master the urban landscape. Become legend in the ultimate 
          <span className="text-cyan-200 font-semibold"> anime-style parkour experience</span> of Neo-Tokyo 2045.
        </p>

        {/* Sub Description */}
        <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Run, jump, and flow through breathtaking cityscapes. Unlock characters, 
          master abilities, and compete in the world's most extreme urban sport.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-lg rounded-xl transition-all hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 border-2 border-cyan-400/30"
          >
            <Play className="w-5 h-5 mr-2" />
            Play Free Now
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="px-8 py-4 border-2 border-white/40 text-white hover:bg-white/20 font-bold text-lg rounded-xl transition-all hover:scale-105 backdrop-blur-sm hover:border-white/60"
            onClick={() => setIsOpen(true)}
          >
            <Youtube className="w-5 h-5 mr-2" />
            Watch Trailer
          </Button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-cyan-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-300 rounded-full mt-2"></div>
        </div>
      </div>

      {/* 🎬 Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black border-2 border-cyan-400/50 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Video Player */}
              <video
                controls
                autoPlay
                className="w-full h-full"
                poster="/trailer-thumbnail.jpg"
              >
                <source src="/trailer-video.mp4" type="video/mp4" />
                <source src="/trailer-video.mp4" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-black/80 hover:bg-black rounded-full p-3 transition-all hover:scale-110 z-10 border border-white/20"
                aria-label="Close video"
              >
                <X className="text-white w-5 h-5" />
              </button>

              {/* Video Title Overlay */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-cyan-400/30">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span className="text-white font-semibold text-sm">Vault Breaker - Official Trailer</span>
                </div>
              </div>
            </motion.div>

            {/* Click outside to close */}
            <div 
              className="absolute inset-0 -z-10" 
              onClick={() => setIsOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}