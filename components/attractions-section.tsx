"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react"

const attractions = [
  {
    name: "Kanyakumari Lighthouse",
    description: "The iconic red and white striped lighthouse offers panoramic views of the confluence of three seas. Climb to the top for breathtaking vistas of the coastline and town.",
    distance: "2 min walk",
    timing: "3:00 PM - 6:00 PM",
    images: ["/images/kanyakumari-lighthouse.jpg"],
  },
  {
    name: "Sunrise Point",
    description: "Kanyakumari is one of the few places where you can witness both sunrise and sunset over the ocean. The view of the sun rising from the Bay of Bengal is truly magical.",
    distance: "3 min walk",
    timing: "Sunrise: ~6:00 AM, Sunset: ~6:30 PM",
    images: ["/images/kanyakumari-sunset.jpg"],
  },
  {
    name: "Kumari Amman Temple",
    description: "An ancient temple dedicated to Goddess Kumari, the virgin goddess. This 3000-year-old temple is one of the 108 Shakti Peethas and attracts devotees from across India.",
    distance: "5 min walk",
    timing: "4:30 AM - 12:30 PM, 4:00 PM - 8:00 PM",
    images: ["/images/kumari-amman-temple.jpg"],
  },
  {
    name: "Kanyakumari Church",
    description: "Also known as Our Lady of Ransom Church, this beautiful Catholic church features stunning architecture and peaceful surroundings. A serene place for prayer and reflection.",
    distance: "8 min walk",
    timing: "6:00 AM - 7:00 PM",
    images: ["/images/church.jpg"],
  },
  {
    name: "Vivekananda Rock Memorial",
    description: "A magnificent monument built on a rock island where Swami Vivekananda meditated in 1892. Accessible by ferry, it offers a spiritual experience amidst the ocean.",
    distance: "10 min walk + ferry",
    timing: "8:00 AM - 4:00 PM",
    images: ["/images/vivekananda-rock.jpg"],
  },
  {
    name: "Thiruvalluvar Statue",
    description: "Standing at 133 feet tall, this majestic statue of the Tamil poet-saint Thiruvalluvar is one of the tallest statues in India, located on a small island near the rock memorial.",
    distance: "10 min walk + ferry",
    timing: "8:00 AM - 4:00 PM",
    images: ["/images/thiruvalluvar-statue.jpg"],
  },
  {
    name: "Gandhi Mandapam",
    description: "A memorial dedicated to Mahatma Gandhi, built at the spot where his ashes were kept for public viewing. The unique architecture allows sunlight to fall on the exact spot where the urn was placed.",
    distance: "10 min walk",
    timing: "7:00 AM - 7:00 PM",
    images: ["/images/gandhi.jpg"],
  },
  {
    name: "Sunset Point",
    description: "The famous beach with multi-colored sand where three seas meet. Perfect for evening strolls, watching ferries to the rock memorial, and enjoying fresh seafood.",
    distance: "2 km (5 min drive)",
    timing: "Open 24 hours",
    images: ["/images/kanyakumari-beach.jpg"],
  },
  {
    name: "Lemur Beach",
    description: "A tranquil and less crowded beach perfect for relaxation and solitude. Enjoy the pristine sands, clear waters, and stunning coastal views away from the tourist crowds.",
    distance: "8 km (20 min drive)",
    timing: "Open 24 hours",
    images: ["/images/lemurbeach.jpg"],
  },
  {
    name: "Mathoor Aqueduct",
    description: "A picturesque aqueduct spanning a valley, surrounded by lush greenery. An engineering marvel and popular spot for picnics and photography, especially during monsoon season.",
    distance: "49 km (1.5 hour drive)",
    timing: "8:00 AM - 6:00 PM",
    images: ["/images/bridge.jpg"],
  },
  {
    name: "Chitharal Jain Rockcut Temple",
    description: "An ancient Jain temple carved into rock, featuring beautiful bas-reliefs and sculptures dating back to the 9th century. A hidden gem showcasing remarkable architectural craftsmanship.",
    distance: "50 km (1.5 hour drive)",
    timing: "9:00 AM - 5:00 PM",
    images: ["/images/rock.jpg"],
  },
  {
    name: "Thiruparapu Waterfall",
    description: "A picturesque waterfall cascading over rocky terrain, surrounded by lush greenery. Popular spot for picnics and photography, especially during monsoon season.",
    distance: "49 km (1.5 hour drive)",
    timing: "8:00 AM - 6:00 PM",
    images: ["/images/waterfall.jpg"],
  },
]

function AttractionCard({ attraction }: { attraction: typeof attractions[0] }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % attraction.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + attraction.images.length) % attraction.images.length)
  }

  return (
    <div className="group overflow-hidden bg-card shadow-sm">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Blurred Background Image - visible on hover */}
        <Image
          src={attraction.images[currentImage] || "/placeholder.svg"}
          alt=""
          fill
          className="object-cover blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        {/* Main Image */}
        <Image
          src={attraction.images[currentImage] || "/placeholder.svg"}
          alt={attraction.name}
          fill
          className="relative object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:object-contain"
        />
        
        {/* Navigation Buttons - Show if multiple images */}
        {attraction.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center bg-white/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center bg-white/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            
            {/* Dot Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {attraction.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    index === currentImage 
                      ? "bg-white w-4" 
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-foreground md:text-2xl">
          {attraction.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {attraction.description}
        </p>
        
        {/* Info Tags */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {attraction.distance}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary" />
            {attraction.timing}
          </span>
        </div>
      </div>
    </div>
  )
}

export function AttractionsSection() {
  return (
    <section id="attractions" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Explore Kanyakumari
          </p>
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
            Nearby Attractions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Discover the spiritual and natural wonders of {"India's"} southernmost tip, 
            all within walking distance from {"Queen's Christy Residency"}.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.name} attraction={attraction} />
          ))}
        </div>
      </div>
    </section>
  )
}
