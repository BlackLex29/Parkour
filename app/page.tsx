import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CharactersSection } from "@/components/characters-section"
import { GameplaySection } from "@/components/gameplay-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CharactersSection />
      <GameplaySection />
      <CTASection />
      <Footer />
    </main>
  )
}