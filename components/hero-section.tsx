"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Youtube, X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  {
    id: 1,
    url: "1.png",
    title: "Neo-Tokyo Skyline",
    description: "Jump across futuristic skyscrapers in 2045 Tokyo"
  },
  {
    id: 2,
    url: "2.png",
    title: "Parkour Action",
    description: "Master advanced wall running techniques"
  },
  {
    id: 3,
    url: "3.png",
    title: "Cityscape",
    description: "Race through neon-lit streets at night"
  },
  {
    id: 4,
    url: "4.png",
    title: "Character Showcase",
    description: "Choose from unique parkour specialists"
  },
  {
    id: 5,
    url: "5.jpg",
    title: "Urban Exploration",
    description: "Discover hidden routes and shortcuts"
  }
]

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto slide carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextImage = () => {
    setIsAutoPlaying(false)
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setIsAutoPlaying(false)
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    )
  }

  const goToImage = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentImageIndex(index)
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 lg:pt-20 px-4">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-slate-950 z-0"></div>
      
      {/* Main Container */}
      <div className="container mx-auto relative z-10 flex flex-col items-center">
        
        {/* Image Box Container */}
        <div className="w-full max-w-6xl mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-900">
            {/* Carousel Container */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <img
                    src={heroImages[currentImageIndex].url}
                    alt={heroImages[currentImageIndex].title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </motion.div>
              </AnimatePresence>
              
              {/* Carousel Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                {/* Prev Button */}
                <button
                  onClick={prevImage}
                  className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 flex items-center justify-center hover:scale-110 transition-all backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-cyan-400 w-8' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 flex items-center justify-center hover:scale-110 transition-all backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
            
            {/* Image Info */}
            <div className="p-4 bg-gradient-to-b from-slate-800 to-slate-900 border-t border-slate-700">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-white font-bold text-xl mb-1">{heroImages[currentImageIndex].title}</h3>
                <p className="text-cyan-200 text-sm">{heroImages[currentImageIndex].description}</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Below Image */}
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: hasScrolled ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience Ultimate Parkour Adventure
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Master urban freerunning across breathtaking landscapes. 
            Unleash your skills in the most dynamic parkour experience.
          </p>
          
          {/* Watch Trailer Button */}
          <Button 
            size="lg"
            className="px-10 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-xl rounded-xl transition-all hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 border-2 border-cyan-400/30 flex items-center justify-center gap-3 mx-auto"
            onClick={() => setIsOpen(true)}
          >
            <Youtube className="w-6 h-6" />
            <span className="text-2xl">Watch Trailer</span>
          </Button>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 1 }}
            animate={{ opacity: hasScrolled ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-6 h-10 border-2 border-cyan-300/70 rounded-full flex justify-center animate-bounce mx-auto">
              <div className="w-1 h-3 bg-cyan-300/70 rounded-full mt-2"></div>
            </div>
            <p className="text-slate-400 text-sm mt-2">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
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
                  <span className="text-white font-semibold text-sm">Game Trailer</span>
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