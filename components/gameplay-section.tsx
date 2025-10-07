export function GameplaySection() {
  return (
    <section id="gameplay" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance">
              Flow Through
              <br />
              <span className="text-primary">Epic Cityscapes</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Navigate through meticulously designed urban environments featuring towering skyscrapers, neon-lit
              streets, and hidden shortcuts. Every building is a playground, every rooftop a new challenge waiting to be
              conquered.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Dynamic Weather System</h4>
                  <p className="text-muted-foreground">
                    Experience rain, fog, and day-night cycles that change gameplay
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Destructible Environments</h4>
                  <p className="text-muted-foreground">Break through obstacles and create your own paths</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Vertical Exploration</h4>
                  <p className="text-muted-foreground">Climb to dizzying heights and discover secret areas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-border">
              <img src="/anime-parkour-game-screenshot-showing-character-ru.jpg" alt="Gameplay screenshot" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-xl blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/20 rounded-xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
