"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const accommodations = [
  {
    name: "Deluxe room",
    description: " Comfortable and elegantly designed rooms with modern amenities. ",
    images: [
      "/images/deluxebed.jpg",
      "/images/deluxebed1.jpg",
      "/images/deluxebr.jpg",
      "/images/deluxecoll.jpg",
    ],
    features: ["King Bed", "Spacious Bed", "Jungle View"],
  },
  {
    name: "Premium room",
    description: "Spacious rooms with premium interiors, comfortable and elegantly designed.",
    images: [
      "/images/premiumbed.jpg",
      "/images/premiumbed2.jpg",
      "/images/premiumbr.jpg",
      "/images/premiumcoll.jpg",
      "/images/premiumview.jpg",
    ],
    features: ["King Bed", "Lake Access", "Sunrise View"],
  },
  {
    name: "Suite room",
    description: " Luxury suite rooms ideal for families and long stays.",
    images: [
      "/images/suitebed.jpg",
      "/images/suitecol.jpg",
      "/images/suitebr.jpg",
      "/images/suitecol.jpg",
    ],
    features: ["Queen Bed", "Garden Terrace", "Spa Access"],
  },
]

function RoomImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden group">
      {/* Images */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-full w-full flex-shrink-0">
  {/* Blurred background */}
  <Image
  src={image || "/placeholder.svg"}
  alt=""
  fill
  className="object-cover blur-2xl scale-110 opacity-50"
/>
  {/* Main image */}
  <Image
  src={image || "/placeholder.svg"}
  alt={`${name} - Image ${index + 1}`}
  fill
  className="object-contain relative z-10"
/>
</div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-background/80 text-foreground opacity-0 transition-all hover:bg-background group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-background/80 text-foreground opacity-0 transition-all hover:bg-background group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dot Indicators Overlay */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 rounded-full bg-background/60 px-3 py-2 backdrop-blur-sm">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-foreground/40 hover:bg-foreground/60"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function AccommodationsSection() {
  return (
    <section id="accommodations" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Accommodations
          </p>
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Discover cozy elegance, where tranquility 
              meets nature&apos;s serene beauty.
            </span>
          </h2>
        </div>

        {/* Room Types - Stacked Vertically */}
        <div className="flex flex-col gap-20">
          {accommodations.map((accommodation, idx) => (
            <div
              key={accommodation.name}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                idx % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:[direction:ltr]">
                <RoomImageCarousel 
                  images={accommodation.images} 
                  name={accommodation.name} 
                />
              </div>
              <div className="flex flex-col justify-center lg:[direction:ltr]">
                <h3 className="mb-4 font-serif text-3xl font-light text-foreground md:text-4xl">
                  {accommodation.name}
                </h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {accommodation.description}
                </p>
                <div className="mb-8 flex flex-wrap gap-4">
                  {accommodation.features.map((feature) => (
                    <span
                      key={feature}
                      className="border border-border px-4 py-2 text-sm text-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-fit border border-primary bg-primary px-8 py-3 text-sm tracking-wide text-primary-foreground transition-all hover:bg-transparent hover:text-primary">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Book CTA */}
        <div className="mt-20 text-center">
          <p className="mb-6 font-serif text-2xl font-light text-foreground">
            Experience a blend of nature, comfort and luxury like never before.
          </p>
          <button className="border border-foreground px-10 py-4 text-sm tracking-wide text-foreground transition-all hover:bg-foreground hover:text-background">
            Book Your Stay
          </button>
        </div>
      </div>
    </section>
  )
}

