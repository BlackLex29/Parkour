import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const characters = [
  {
    name: "Akira",
    role: "Speed Runner",
    image: "/anime-male-character-with-spiky-blue-hair-in-parko.jpg",
  },
  {
    name: "Yuki",
    role: "Acrobat",
    image: "/anime-female-character-with-white-hair-in-athletic.jpg",
  },
  {
    name: "Ryu",
    role: "Power Jumper",
    image: "/anime-male-character-with-red-jacket-in-dynamic-ju.jpg",
  },
  {
    name: "Sakura",
    role: "Wall Runner",
    image: "/anime-female-character-with-pink-hair-running-on-w.jpg",
  },
]

export function CharactersSection() {
  return (
    <section id="characters" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground text-balance">
            Meet Your Runners
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Each character brings unique abilities and playstyles to master
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {characters.map((character, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer border-2 hover:border-primary transition-all"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={character.image || "/placeholder.svg"}
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">{character.name}</h3>
                  <p className="text-accent font-semibold">{character.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 bg-transparent">
            View All 20+ Characters
          </Button>
        </div>
      </div>
    </section>
  )
}
