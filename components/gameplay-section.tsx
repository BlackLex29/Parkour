"use client"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Star, 
  Maximize2, 
  X, 
  Route, 
  Layers, 
  Flag, 
  Mountain, 
  Building2,
  Compass,
  Navigation,
  Map
} from "lucide-react"

const maps = [
  {
    id: 1,
    name: "Neo-Tokyo Downtown",
    image: "/4.png",
    difficulty: "Beginner",
    description: "Start your journey in the neon-lit streets of futuristic Tokyo. Perfect for learning basic parkour mechanics.",
    features: ["Basic Rooftops", "Simple Wall Runs", "Introductory Obstacles"],
    unlockLevel: 1,
    popularity: 95,
    location: "Tokyo, Japan",
    totalRoutes: 8,
    mapSize: "Medium",
    obstacles: 25,
    secrets: 5,
    elevation: "Low",
    terrainType: "Urban"
  },
  {
    id: 2,
    name: "Shibuya Scramble",
    image: "/2.png",
    difficulty: "Intermediate",
    description: "Navigate through crowded crosswalks and towering billboards in this iconic Tokyo district.",
    features: ["Crowd Navigation", "Vertical Climbs", "Secret Routes"],
    unlockLevel: 5,
    popularity: 88,
    location: "Shibuya, Tokyo",
    totalRoutes: 12,
    mapSize: "Large",
    obstacles: 42,
    secrets: 8,
    elevation: "Medium",
    terrainType: "Urban"
  },
  {
    id: 3,
    name: "Tokyo Tower Ascent",
    image: "/3.png",
    difficulty: "Advanced",
    description: "Scale the iconic Tokyo Tower in this vertigo-inducing vertical challenge.",
    features: ["Extreme Height", "Advanced Climbing", "Wind Mechanics"],
    unlockLevel: 15,
    popularity: 85,
    location: "Minato, Tokyo",
    totalRoutes: 6,
    mapSize: "Vertical",
    obstacles: 18,
    secrets: 3,
    elevation: "High",
    terrainType: "Vertical"
  },
  {
    id: 4,
    name: "Shinjuku Skyscrapers",
    image: "/1.png",
    difficulty: "Expert",
    description: "Leap between skyscrapers in the dense business district. Not for the faint-hearted.",
    features: ["Long Distance Jumps", "Wind Currents", "Moving Platforms"],
    unlockLevel: 20,
    popularity: 78,
    location: "Shinjuku, Tokyo",
    totalRoutes: 10,
    mapSize: "Large",
    obstacles: 35,
    secrets: 6,
    elevation: "Very High",
    terrainType: "Skyscraper"
  }
]

// Helper function for elevation icon
const getElevationIcon = (elevation: string) => {
  switch (elevation) {
    case "Low": return <Navigation className="w-4 h-4 text-blue-400" />
    case "Medium": return <Mountain className="w-4 h-4 text-green-400" />
    case "High": return <Mountain className="w-4 h-4 text-orange-400" />
    case "Very High": return <Mountain className="w-4 h-4 text-red-400" />
    default: return <Compass className="w-4 h-4 text-gray-400" />
  }
}

// Helper function for terrain icon
const getTerrainIcon = (terrainType: string) => {
  switch (terrainType) {
    case "Urban": return <Building2 className="w-4 h-4 text-purple-400" />
    case "Vertical": return <Flag className="w-4 h-4 text-red-400" />
    case "Skyscraper": return <Building2 className="w-4 h-4 text-cyan-400" />
    default: return <Map className="w-4 h-4 text-gray-400" />
  }
}

function MapCard({ map, onViewMap }: { map: typeof maps[0], onViewMap: (map: typeof maps[0]) => void }) {
  const [isHovered, setIsHovered] = useState(false)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Advanced": return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "Expert": return "bg-red-500/20 text-red-400 border-red-500/30"
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <Card 
      className="group overflow-hidden border-2 border-slate-700 hover:border-blue-500 transition-all duration-300 bg-gradient-to-br from-slate-900 to-slate-800 h-full hover:scale-[1.02] hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Map Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
        <img
          src={map.image || "/placeholder.svg"}
          alt={map.name}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? 'scale(1.15)' : 'scale(1.1)' }}
        />
        
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
          <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(map.difficulty)}`}>
            {map.difficulty}
          </div>
          <div className="bg-black/90 backdrop-blur-sm rounded-full px-3 py-1 border border-slate-600">
            <p className="text-sm font-medium text-white">Level {map.unlockLevel}</p>
          </div>
        </div>
        
        <div className="absolute top-3 right-3 z-20 bg-black/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-slate-600">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <p className="text-sm font-medium text-white">{map.popularity}%</p>
        </div>

        {/* Map Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
          <h3 className="text-xl font-bold text-white mb-1">{map.name}</h3>
          <div className="flex items-center gap-1 text-sm text-blue-300">
            <MapPin className="w-3 h-3" />
            <span>{map.location}</span>
          </div>
        </div>
      </div>

      {/* Map Info */}
      <div className="p-5">
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{map.description}</p>
        
        {/* Features */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-400 mb-2">KEY FEATURES</h4>
          <div className="flex flex-wrap gap-1">
            {map.features.map((feature, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs font-medium rounded border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Route className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Routes</p>
              <p className="text-sm font-medium text-white">{map.totalRoutes}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Layers className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Size</p>
              <p className="text-sm font-medium text-white">{map.mapSize}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
              {getElevationIcon(map.elevation)}
            </div>
            <div>
              <p className="text-xs text-gray-400">Elevation</p>
              <p className="text-sm font-medium text-white">{map.elevation}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
              {getTerrainIcon(map.terrainType)}
            </div>
            <div>
              <p className="text-xs text-gray-400">Terrain</p>
              <p className="text-sm font-medium text-white">{map.terrainType}</p>
            </div>
          </div>
        </div>
        
        {/* View Map Button */}
        <Button 
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 group"
          variant="default"
          onClick={() => onViewMap(map)}
        >
          <span>View Map</span>
          <Maximize2 className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    </Card>
  )
}

function MapModal({ map, isOpen, onClose }: { 
  map: typeof maps[0] | null, 
  isOpen: boolean, 
  onClose: () => void 
}) {
  if (!isOpen || !map) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border-2 border-blue-500 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/80 rounded-full flex items-center justify-center hover:bg-black hover:scale-110 transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Map Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white">{map.name}</h2>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300">{map.location}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">Level {map.unlockLevel}</span>
                <span className="text-gray-400">•</span>
                <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                  map.difficulty === "Beginner" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                  map.difficulty === "Intermediate" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" :
                  map.difficulty === "Advanced" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" :
                  "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}>
                  {map.difficulty}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Size Map */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-slate-900">
          <img
            src={map.image}
            alt={`Full view of ${map.name}`}
            className="w-full h-full object-contain p-4"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-sm text-gray-300">• {map.name}</p>
          </div>
        </div>

        {/* Map Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Description</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{map.description}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Map Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Route className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-bold">Routes</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{map.totalRoutes}</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-bold">Size</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{map.mapSize}</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {getElevationIcon(map.elevation)}
                      <span className="text-white font-bold">Elevation</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{map.elevation}</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {getTerrainIcon(map.terrainType)}
                      <span className="text-white font-bold">Terrain</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{map.terrainType}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {map.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-blue-500/10 text-blue-300 text-sm font-medium rounded-lg border border-blue-500/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Map Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-300">Popularity</span>
                      <span className="text-white font-bold">{map.popularity}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                        style={{ width: `${map.popularity}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/30 p-3 rounded-lg">
                      <div className="text-lg font-bold text-white mb-1">{map.obstacles}</div>
                      <div className="text-xs text-gray-400">Obstacles</div>
                    </div>
                    <div className="bg-slate-800/30 p-3 rounded-lg">
                      <div className="text-lg font-bold text-white mb-1">{map.secrets}</div>
                      <div className="text-xs text-gray-400">Secrets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function GameplaySection() {
  const [activeDifficulty, setActiveDifficulty] = useState("all")
  const [selectedMap, setSelectedMap] = useState<typeof maps[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredMaps = maps.filter(map => 
    activeDifficulty === "all" || map.difficulty === activeDifficulty
  )

  const difficultyFilters = [
    { id: "all", label: "All Maps", count: maps.length },
    { id: "Beginner", label: "Beginner", count: maps.filter(m => m.difficulty === "Beginner").length },
    { id: "Intermediate", label: "Intermediate", count: maps.filter(m => m.difficulty === "Intermediate").length },
    { id: "Advanced", label: "Advanced", count: maps.filter(m => m.difficulty === "Advanced").length },
    { id: "Expert", label: "Expert", count: maps.filter(m => m.difficulty === "Expert").length },
  ]

  const handleViewMap = (map: typeof maps[0]) => {
    setSelectedMap(map)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedMap(null), 300)
  }

  return (
    <section id="gameplay" className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-balance">
            Explore Dynamic Maps
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-balance mb-8">
            Conquer challenging parkour courses across Tokyo's iconic districts. Each map offers unique obstacles and gameplay mechanics.
          </p>
          
          {/* Difficulty Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {difficultyFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveDifficulty(filter.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeDifficulty === filter.id 
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg" 
                    : "bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                {filter.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeDifficulty === filter.id 
                    ? "bg-blue-700" 
                    : "bg-slate-700"
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Maps Grid - Exactly 4 maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredMaps.map((map) => (
            <MapCard key={map.id} map={map} onViewMap={handleViewMap} />
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredMaps.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-800 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No maps found</h3>
            <p className="text-gray-400">Try selecting a different difficulty</p>
            <Button 
              variant="outline" 
              className="mt-4 border-blue-500 text-blue-400 hover:bg-blue-500/10"
              onClick={() => setActiveDifficulty("all")}
            >
              Show All Maps
            </Button>
          </div>
        )}

        {/* Map Statistics - Updated */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-slate-800/50 border border-blue-500/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{maps.length}</div>
                <div className="text-sm text-gray-400">Unique Maps</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                  <Route className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">36</div>
                <div className="text-sm text-gray-400">Total Routes</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                  <Layers className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">120</div>
                <div className="text-sm text-gray-400">Total Obstacles</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                  <Navigation className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">4</div>
                <div className="text-sm text-gray-400">Terrain Types</div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Progression */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Map Progression</h3>
          <div className="relative max-w-2xl mx-auto">
            {/* Progress Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-slate-800 -translate-y-1/2 z-0"></div>
            
            <div className="relative flex justify-between items-center z-10">
              {maps.map((map, index) => (
                <div key={map.id} className="text-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 border-2 ${
                    index === 0 ? "bg-green-500/20 border-green-500" :
                    index === 1 ? "bg-yellow-500/20 border-yellow-500" :
                    index === 2 ? "bg-orange-500/20 border-orange-500" :
                    "bg-red-500/20 border-red-500"
                  }`}>
                    <span className={`text-sm font-bold ${
                      index === 0 ? "text-green-400" :
                      index === 1 ? "text-yellow-400" :
                      index === 2 ? "text-orange-400" :
                      "text-red-400"
                    }`}>
                      Lvl {map.unlockLevel}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm">{map.name.split(" ")[0]}</h4>
                  <p className="text-xs text-gray-400 mt-1">{map.difficulty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-12 border-t border-slate-800">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Explore Tokyo?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Master all four unique districts of Tokyo. Each map progressively challenges your parkour skills with increasing difficulty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg">
              Start in Neo-Tokyo Downtown
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg">
              View All Maps
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-white font-semibold">4</span> Iconic Locations
            </span>
            <span className="flex items-center gap-2">
              <Route className="w-4 h-4" />
              <span className="text-white font-semibold">36</span> Total Routes
            </span>
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span className="text-white font-semibold">4</span> Difficulty Levels
            </span>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      <MapModal 
        map={selectedMap} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  )
}