import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Join millions of players worldwide and experience the thrill of parkour like never before. Free to play,
            available on all platforms.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6">
            <Play className="w-5 h-5 mr-2" />
            Start Playing Now
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Instant access • Cross-platform play
          </p>
        </div>
      </div>
    </section>
  )
}
