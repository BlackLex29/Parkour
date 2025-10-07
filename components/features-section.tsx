import { Card } from "@/components/ui/card"
import { Zap, Users, Map, Trophy } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Movement",
    description: "Experience fluid parkour mechanics with responsive controls and smooth animations.",
  },
  {
    icon: Users,
    title: "Unique Characters",
    description: "Choose from 20+ anime-style characters, each with their own abilities and style.",
  },
  {
    icon: Map,
    title: "Stunning Environments",
    description: "Explore beautifully crafted urban landscapes with towering buildings and hidden paths.",
  },
  {
    icon: Trophy,
    title: "Competitive Modes",
    description: "Race against players worldwide in time trials and multiplayer challenges.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground text-balance">
            Why Players Love Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover what makes PlayGame Studios the ultimate parkour experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card hover:bg-card/80 transition-all hover:scale-105 border-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
