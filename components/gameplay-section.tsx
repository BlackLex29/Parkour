"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Trophy, Map, Star, ArrowRight, Zap, Users, Clock, Unlock, Shield, Sparkles } from "lucide-react"

const cities = [
  {
    id: 1,
    name: "Neo-Tokyo District",
    levels: 15,
    difficulty: "Beginner",
    description: "Start your journey in the neon-lit streets of Neo-Tokyo. Master basic parkour moves and learn the fundamentals of urban running.",
    image: "/neo-tokyo-cityscape.jpg",
    features: ["Basic Wall Running", "Precision Jumps", "Simple Rail Grinding"],
    unlockRequirements: "Available from start",
    color: "blue",
    characterUnlocks: [
      { level: 5, character: "Kaito", ability: "Dash Boost" },
      { level: 10, character: "Sakura", ability: "Wall Cling" },
      { level: 15, character: "Ren", ability: "Double Jump" }
    ]
  },
  {
    id: 2,
    name: "Cyber-Osaka Metropolis",
    levels: 15,
    difficulty: "Intermediate",
    description: "Navigate through dense urban canyons and high-speed transit systems. Test your skills in more complex environments.",
    image: "/cyber-osaka-cityscape.jpg",
    features: ["Advanced Wall Climbing", "Momentum Conservation", "Complex Route Planning"],
    unlockRequirements: "Complete Neo-Tokyo District",
    color: "purple",
    characterUnlocks: [
      { level: 5, character: "Hiro", ability: "Air Dash" },
      { level: 10, character: "Yumi", ability: "Time Slow" },
      { level: 15, character: "Jiro", ability: "Teleport" }
    ]
  },
  {
    id: 3,
    name: "Floating Kyoto",
    levels: 15,
    difficulty: "Advanced",
    description: "Conquer the gravity-defying architecture of Floating Kyoto. Master vertical movement and aerial techniques.",
    image: "/floating-kyoto-cityscape.jpg",
    features: ["Vertical Running", "Air Dashing", "Gravity Manipulation"],
    unlockRequirements: "Complete Cyber-Osaka Metropolis",
    color: "green",
    characterUnlocks: [
      { level: 5, character: "Kiko", ability: "Glide" },
      { level: 10, character: "Takeshi", ability: "Wall Run Boost" },
      { level: 15, character: "Akane", ability: "Phase Through" }
    ]
  },
  {
    id: 4,
    name: "Aether Capital",
    levels: 15,
    difficulty: "Expert",
    description: "The ultimate challenge in the clouds. Push your skills to the limit in this final, breathtaking cityscape.",
    image: "/aether-capital-cityscape.jpg",
    features: ["Quantum Leaping", "Time Manipulation", "Master Techniques"],
    unlockRequirements: "Complete Floating Kyoto",
    color: "gold",
    characterUnlocks: [
      { level: 5, character: "Ryuji", ability: "Time Rewind" },
      { level: 10, character: "Mei", ability: "Clone Dash" },
      { level: 15, character: "Master Kenji", ability: "All Abilities" }
    ]
  }
]

const gameplayFeatures = [
  {
    icon: Zap,
    title: "Character Progression",
    description: "Unlock new characters with unique abilities as you complete levels in each city"
  },
  {
    icon: Unlock,
    title: "Ability Unlocks",
    description: "Each character brings special moves that change how you approach challenges"
  },
  {
    icon: Trophy,
    title: "Mastery Rewards",
    description: "Complete cities to unlock legendary characters with powerful combined abilities"
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Mix and match characters to create the perfect team for each challenge"
  }
]

const startingCharacters = [
  { name: "Akira", role: "Balanced Runner", ability: "Standard Moveset" }
]

export function GameplaySection() {
  const [selectedCity, setSelectedCity] = useState(0)

  return (
    <section id="gameplay" className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-balance">
            How To Play &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Unlock Characters</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Progress through cities, complete levels, and unlock new characters with unique abilities. Build your ultimate parkour team!
          </p>
        </div>

        {/* How to Play Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <Play className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">GAME GUIDE</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Your Journey Begins Here
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Start with Basic Character</h4>
                  <p className="text-gray-300">
                    Begin your adventure with <strong className="text-cyan-400">Akira</strong> - a balanced runner with all basic parkour moves.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Complete Levels & Unlock Characters</h4>
                  <p className="text-gray-300">
                    Reach specific levels in each city to unlock new characters:
                    <br />
                    <strong className="text-green-400">Level 5</strong> - Unlock 1st character
                    <br />
                    <strong className="text-blue-400">Level 10</strong> - Unlock 2nd character  
                    <br />
                    <strong className="text-purple-400">Level 15</strong> - Unlock 3rd character
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Master Character Abilities</h4>
                  <p className="text-gray-300">
                    Each character has unique special moves. Switch between them to overcome different challenges and find your perfect playstyle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Progress Through Cities</h4>
                  <p className="text-gray-300">
                    Complete all 15 levels in a city to unlock the next metropolis and continue your character collection journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Starting Character Info */}
            <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h4 className="font-bold text-white">Starting Character</h4>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg">Akira</h5>
                  <p className="text-gray-300 text-sm">Balanced Runner</p>
                  <p className="text-cyan-400 text-xs">Standard Parkour Moveset</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl">
              <img 
                src="/anime-parkour-game-screenshot-showing-character-ru.jpg" 
                alt="Gameplay screenshot" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Character Unlock Overlay */}
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-green-500/50">
              <div className="flex items-center gap-2 mb-2">
                <Unlock className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold text-sm">CHARACTER UNLOCKED!</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 font-bold text-xs">K</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Kaito</p>
                  <p className="text-green-300 text-xs">Dash Boost Ability</p>
                </div>
              </div>
            </div>

            {/* Level Progress Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">Level 5/15</span>
                <span className="text-cyan-400 text-sm">Neo-Tokyo District</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '33%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Character Unlock</span>
                <span>City Complete</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cyan-500/20 rounded-xl blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-500/20 rounded-xl blur-3xl -z-10" />
          </div>
        </div>

        {/* Cities & Character Unlocks */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              City Progression & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Character Unlocks</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Each city offers 3 unique characters to unlock. Complete levels to build your ultimate parkour team!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <Card 
                key={city.id}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 border-2 hover:scale-105 transition-all cursor-pointer ${
                  selectedCity === index 
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                    : 'border-slate-700 hover:border-cyan-500/50'
                }`}
                onClick={() => setSelectedCity(index)}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      city.color === 'blue' ? 'bg-cyan-500/20 border border-cyan-500/30' :
                      city.color === 'purple' ? 'bg-purple-500/20 border border-purple-500/30' :
                      city.color === 'green' ? 'bg-green-500/20 border border-green-500/30' :
                      'bg-amber-500/20 border border-amber-500/30'
                    }`}>
                      <Map className={`w-6 h-6 ${
                        city.color === 'blue' ? 'text-cyan-400' :
                        city.color === 'purple' ? 'text-purple-400' :
                        city.color === 'green' ? 'text-green-400' :
                        'text-amber-400'
                      }`} />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{city.name}</h4>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        city.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        city.difficulty === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                        city.difficulty === 'Advanced' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-amber-500/20 text-amber-400'
                      }`}>
                        {city.difficulty}
                      </span>
                      <span className="text-gray-400 text-sm">• {city.levels} Levels</span>
                    </div>
                  </div>
                  
                  {/* Character Unlocks */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-400 text-center">CHARACTER UNLOCKS</h5>
                    {city.characterUnlocks.map((unlock, idx) => (
                      <div key={idx} className={`flex items-center gap-3 p-2 rounded-lg ${
                        idx === 0 ? 'bg-green-500/10 border border-green-500/20' :
                        idx === 1 ? 'bg-blue-500/10 border border-blue-500/20' :
                        'bg-purple-500/10 border border-purple-500/20'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          idx === 0 ? 'bg-green-500/20' :
                          idx === 1 ? 'bg-blue-500/20' :
                          'bg-purple-500/20'
                        }`}>
                          <span className={`text-xs font-bold ${
                            idx === 0 ? 'text-green-400' :
                            idx === 1 ? 'text-blue-400' :
                            'text-purple-400'
                          }`}>
                            L{unlock.level}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold text-sm">{unlock.character}</p>
                          <p className="text-gray-300 text-xs">{unlock.ability}</p>
                        </div>
                        <Unlock className={`w-4 h-4 ${
                          idx === 0 ? 'text-green-400' :
                          idx === 1 ? 'text-blue-400' :
                          'text-purple-400'
                        }`} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Total Character Count */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-slate-800/50 rounded-2xl border border-cyan-500/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">13</div>
              <div className="text-sm text-gray-400">Total Characters</div>
            </div>
            <div className="w-px h-12 bg-cyan-500/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">1</div>
              <div className="text-sm text-gray-400">Starting Character</div>
            </div>
            <div className="w-px h-12 bg-cyan-500/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">12</div>
              <div className="text-sm text-gray-400">To Unlock</div>
            </div>
          </div>
        </div>

        {/* Gameplay Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {gameplayFeatures.map((feature, index) => (
            <Card key={index} className="p-6 bg-slate-800/50 hover:bg-slate-700/50 transition-all border border-cyan-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold px-8 py-4 text-lg">
            Start Playing & Unlock Your First Character
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-gray-400 mt-4">
            Begin with Akira and unlock Kaito at Level 5 in Neo-Tokyo!
          </p>
        </div>
      </div>
    </section>
  )
}