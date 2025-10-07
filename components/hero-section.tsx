"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Youtube, X } from "lucide-react"

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/anime-style-parkour-character-jumping-between-futu.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Text Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
          <span className="text-accent font-semibold text-sm lg:text-base">
            Upcoming Game!
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance text-foreground">
          Defy Gravity.
          <br />
          <span className="text-primary">Master the City.</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
          Experience the ultimate parkour adventure with anime-style characters
          in stunning urban environments. Run, jump, and flow through breathtaking cityscapes.
        </p>

        <div className="flex items-center justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 w-full sm:w-auto"
            onClick={() => setIsOpen(true)}
          >
            <Youtube className="w-5 h-5 mr-2" />
            Watch Trailer
          </Button>
        </div>
      </div>

      {/* 🎬 Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Ipalit dito ang iyong video file */}
              <video
                controls
                autoPlay
                className="w-full h-full"
              >
                <source src="/trailer-video.mp4" />
                <source src="/trailer-video.mp4" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 rounded-full p-2 transition-colors z-10"
                aria-label="Close video"
              >
                <X className="text-white w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}