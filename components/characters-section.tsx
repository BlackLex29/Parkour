"use client"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const characters = [
  {
    name: "Akira",
    role: "Balanced Runner",
    image: "/anime-male-character-with-spiky-blue-hair-in-parko.jpg",
    backstory: "A high school student who discovered parkour during the Gravity Shift. He's still learning but shows great potential with his natural athleticism.",
    abilities: ["Quick Step", "Basic Wall Run", "Simple Jump"],
    stats: {
      speed: 70,
      agility: 65,
      strength: 60
    },
    origin: "Neo-Tokyo High School",
    unlock: "Starting Character"
  },
  {
    name: "Yuki",
    role: "Agile Explorer",
    image: "/anime-female-character-with-white-hair-in-athletic.jpg",
    backstory: "A university student who practices gymnastics. Her flexibility and grace make her excellent at navigating tight spaces and precise landings.",
    abilities: ["Better Balance", "Precision Jump", "Quick Turn"],
    stats: {
      speed: 65,
      agility: 75,
      strength: 55
    },
    origin: "Tokyo University",
    unlock: "Neo-Tokyo Level 5"
  },
  {
    name: "Ryu",
    role: "Stable Climber",
    image: "/anime-male-character-with-red-jacket-in-dynamic-ju.jpg",
    backstory: "A part-time delivery worker who knows the city's shortcuts. His job gave him strong legs and good climbing technique.",
    abilities: ["Sturdy Grip", "Reliable Climb", "Steady Landing"],
    stats: {
      speed: 60,
      agility: 60,
      strength: 75
    },
    origin: "Shibuya Delivery Service",
    unlock: "Neo-Tokyo Level 10"
  },
  {
    name: "Sakura",
    role: "Technical Runner",
    image: "/anime-female-character-with-pink-hair-running-on-w.jpg",
    backstory: "An architecture student who understands urban structures. She uses her knowledge to find the most efficient routes through the city.",
    abilities: ["Route Planning", "Wall Kick", "Momentum Control"],
    stats: {
      speed: 68,
      agility: 72,
      strength: 58
    },
    origin: "Architecture College",
    unlock: "Neo-Tokyo Level 15"
  }
]

function CharacterCard({ character }: { character: typeof characters[0] }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  // Determine character tier based on total stats
  const totalStats = character.stats.speed + character.stats.agility + character.stats.strength
  const tier = totalStats <= 195 ? "Beginner" : totalStats <= 210 ? "Intermediate" : "Advanced"

  return (
    <div 
      className="w-full cursor-pointer aspect-[3/4]"
      style={{ perspective: "1000px" }}
      onClick={handleFlip}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front of Card */}
        <div 
          className="absolute w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Card className="overflow-hidden group border-2 hover:border-primary transition-all w-full h-full">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={character.image || "/placeholder.svg"}
                alt={character.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white mb-1">{character.name}</h3>
                <p className="text-blue-300 font-semibold">{character.role}</p>
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs mt-1 ${
                  tier === "Beginner" ? "bg-green-500/20 text-green-400" :
                  tier === "Intermediate" ? "bg-blue-500/20 text-blue-400" :
                  "bg-purple-500/20 text-purple-400"
                }`}>
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  {tier}
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <p className="text-sm font-medium text-white">Click to Flip</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute w-full h-full"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <Card className="overflow-hidden border-2 border-blue-500 w-full h-full bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="p-4 h-full flex flex-col">
              <div className="text-center mb-3">
                <h3 className="text-xl font-bold text-white mb-1">{character.name}</h3>
                <p className="text-blue-400 font-semibold mb-2">{character.role}</p>
                <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-3 flex-1 overflow-y-auto">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 mb-1">UNLOCK</h4>
                  <p className="text-white text-sm font-medium">{character.unlock}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 mb-1">ORIGIN</h4>
                  <p className="text-white text-sm font-medium">{character.origin}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 mb-1">BACKSTORY</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">{character.backstory}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">ABILITIES</h4>
                  <div className="flex flex-wrap gap-1">
                    {character.abilities.map((ability, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded border border-blue-500/30"
                      >
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">STATS</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white">Speed</span>
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${character.stats.speed}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-green-400 w-6 text-right">{character.stats.speed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white">Agility</span>
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${character.stats.agility}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-blue-400 w-6 text-right">{character.stats.agility}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white">Strength</span>
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${character.stats.strength}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-red-400 w-6 text-right">{character.stats.strength}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                      <span className="text-xs text-gray-400">Total</span>
                      <span className="text-xs font-bold text-white">{totalStats}</span>
                      <span className={`text-xs ${
                        tier === "Beginner" ? "text-green-400" :
                        tier === "Intermediate" ? "text-blue-400" :
                        "text-purple-400"
                      }`}>
                        {tier}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-3 pt-3 border-t border-gray-700">
                <p className="text-xs text-gray-400">Click to return</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export function CharactersSection() {
  return (
    <section id="characters" className="py-20 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-balance">
            Meet Your Runners
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-balance">
            Start with basic characters and unlock stronger runners as you progress. Each character grows with you!
          </p>
        </div>

        {/* Character Progression Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-green-500/10 border border-green-500/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">B</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Beginner Tier</h3>
              <p className="text-gray-300 text-sm">
                Starting characters with balanced stats (Total: 180-195)
              </p>
              <div className="text-green-400 text-xs mt-2">Perfect for learning basics</div>
            </div>
          </Card>

          <Card className="p-6 bg-blue-500/10 border border-blue-500/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-400 font-bold">I</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Intermediate Tier</h3>
              <p className="text-gray-300 text-sm">
                Unlocked in later cities (Total: 196-210)
              </p>
              <div className="text-blue-400 text-xs mt-2">Enhanced abilities</div>
            </div>
          </Card>

          <Card className="p-6 bg-purple-500/10 border border-purple-500/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">A</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Advanced Tier</h3>
              <p className="text-gray-300 text-sm">
                End-game specialists (Total: 211+)
              </p>
              <div className="text-purple-400 text-xs mt-2">Master techniques</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-blue-500 bg-transparent text-blue-400 hover:bg-blue-500 hover:text-white">
            Progress to Unlock More Characters
          </Button>
          <p className="text-gray-400 mt-4 text-sm">
            Complete levels in each city to unlock characters with better stats and abilities
          </p>
        </div>
      </div>
    </section>
  )
}