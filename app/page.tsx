import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { AccommodationsSection } from "@/components/accommodations-section"
import { AttractionsSection } from "@/components/attractions-section"
import Gallery from "@/components/gallery"
import TestimonialsSection from "@/components/testimonials-section"

import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <AccommodationsSection />
      <AttractionsSection />
      <Gallery />
      <TestimonialsSection />

      <Footer />
    </main>
  )
}
