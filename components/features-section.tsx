import { Card } from "@/components/ui/card"
import { Zap, Users, Map, Trophy, Sparkles, TrendingUp, Award } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fluid Parkour Movement",
    description: "Smooth and responsive controls for wall running, vaulting, sliding, and precision jumping.",
  },
  {
    icon: Map,
    title: "Urban Environments",
    description: "Explore 4 unique cities with challenging levels designed for parkour mastery.",
  },
  {
    icon: Users,
    title: "Character Progression",
    description: "Unlock new runners with unique abilities as you progress through the game.",
  },
  {
    icon: Trophy,
    title: "Time Trial Challenges",
    description: "Compete for the fastest times on global leaderboards and daily challenges.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">PARKOUR GAMEPLAY</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-balance">
            Pure Parkour
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Perfected
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-balance leading-relaxed">
            Experience the essence of urban freerunning with intuitive controls, 
            challenging courses, and endless flow possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all hover:scale-105 border-2 border-cyan-500/20 hover:border-cyan-500/40 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
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

        {/* Simple Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-2xl mx-auto">
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">4</div>
            <div className="text-gray-300 text-sm">Cities</div>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">60+</div>
            <div className="text-gray-300 text-sm">Levels</div>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">13</div>
            <div className="text-gray-300 text-sm">Characters</div>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Combinations</div>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Start Your Parkour Journey
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg">
                Play Free Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}