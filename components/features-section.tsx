"use client"
import { Card } from "@/components/ui/card"
import { Zap, Users, Map, Trophy, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Zap,
    title: "Fluid Parkour Movement",
    description: "Smooth and responsive controls for wall running, vaulting, sliding, and precision jumping.",
    image: "/images/parkour-movement.jpg"
  },
  {
    icon: Map,
    title: "Urban Environments",
    description: "Explore 4 unique cities with challenging levels designed for parkour mastery.",
    image: "/images/urban-environments.jpg"
  },
  {
    icon: Users,
    title: "Character Progression",
    description: "Unlock new runners with unique abilities as you progress through the game.",
    image: "/images/character-progression.jpg"
  },
  {
    icon: Trophy,
    title: "Time Trial Challenges",
    description: "Compete for the fastest times on global leaderboards and daily challenges.",
    image: "/images/time-trial.jpg"
  },
]

// Carousel images - 5 different parkour/game images
const carouselImages = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.jpg",
]

export function FeaturesSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    )
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Auto slide every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextImage()
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [currentImageIndex])

  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Carousel Section - NEW */}
        <div className="relative mb-20 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-cyan-500/10">
            {/* Main Carousel Image */}
            <div className="aspect-[21/9] relative">
              <img
                src={carouselImages[currentImageIndex]}
                alt={`Parkour Game Scene ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              
              {/* Carousel Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-cyan-500/30 hover:border-cyan-500 transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-cyan-500/30 hover:border-cyan-500 transition-all hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Indicator Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-cyan-400 w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-cyan-500/30">
                <span className="text-sm font-medium text-cyan-300">
                  {currentImageIndex + 1} / {carouselImages.length}
                </span>
              </div>

              {/* Carousel Title */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-xl border border-cyan-500/30">
                <span className="text-sm font-semibold text-cyan-300">
                  Vault Breaker 
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-4">
            {carouselImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative overflow-hidden rounded-xl border-2 transition-all ${
                  index === currentImageIndex
                    ? "border-cyan-400 scale-105"
                    : "border-transparent hover:border-cyan-500/50"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-12 object-cover opacity-70 hover:opacity-100"
                />
                {index === currentImageIndex && (
                  <div className="absolute inset-0 bg-cyan-400/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Title - Center Aligned */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">CORE FEATURES</span>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500">
                Pure Parkour
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-balance leading-relaxed">
              Experience the essence of urban freerunning with intuitive controls, 
              challenging courses, and endless flow possibilities.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:from-slate-700/80 hover:to-slate-800/80 transition-all hover:scale-105 border-2 border-cyan-500/20 hover:border-cyan-500/40 group cursor-pointer backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-cyan-500/30">
                <feature.icon className="w-8 h-8 text-cyan-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Statistics Section - Centered Numbers */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                By The Numbers
              </span>
            </h3>
            <p className="text-gray-300 max-w-xl mx-auto">
              Everything you need for the ultimate parkour experience
            </p>
          </div>

          {/* 3 Columns for Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent mb-3">
                  4
                </div>
                <div className="text-lg font-semibold text-cyan-300 mb-2">Cities</div>
                <div className="text-gray-400 text-sm">Neo-Tokyo to Shinjuku</div>
              </div>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  60+
                </div>
                <div className="text-lg font-semibold text-purple-300 mb-2">Levels</div>
                <div className="text-gray-400 text-sm">Challenging courses</div>
              </div>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  4
                </div>
                <div className="text-lg font-semibold text-green-300 mb-2">Characters</div>
                <div className="text-gray-400 text-sm">Unique abilities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Start Your Parkour Journey Today
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Master the art of urban freerunning across stunning cityscapes
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Play Free Now
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-cyan-500/30 hover:border-cyan-500 text-cyan-300 hover:text-white font-semibold rounded-xl transition-all hover:scale-105 text-lg">
                Learn More
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Available on PC, PlayStation, and Xbox
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}