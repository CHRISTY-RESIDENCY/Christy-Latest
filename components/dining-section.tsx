"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export function DiningSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section id="dining" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Video/Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/dining.jpg"
              alt="Farm to table dining experience"
              fill
              className="object-cover"
            />
            {!isVideoPlaying && (
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all hover:bg-black/30"
                aria-label="Play video"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-white/20 backdrop-blur-sm transition-transform hover:scale-110">
                  <Play className="h-8 w-8 text-white" fill="white" />
                </div>
              </button>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm tracking-[0.2em] uppercase opacity-80">
              E.A.R.T.H Restaurant
            </p>
            <h2 className="mb-6 font-serif text-3xl font-light md:text-4xl lg:text-5xl">
              A world-class gastronomic journey
            </h2>
            <p className="mb-6 opacity-90 leading-relaxed">
              Where nature&apos;s finest ingredients meet culinary craftsmanship. 
              Our farm-to-table philosophy celebrates local produce, traditional 
              recipes, and innovative techniques.
            </p>
            <p className="mb-8 opacity-90 leading-relaxed">
              Every dish tells a story of the land, prepared by our talented 
              culinary team who are passionate about sustainability and flavor.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-8">
              {[
                { label: "Farm Fresh", value: "100%" },
                { label: "Local Sourced", value: "90%" },
                { label: "Organic", value: "100%" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-serif text-2xl">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide opacity-70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-10 w-fit border border-white px-8 py-3 text-sm tracking-wide transition-all hover:bg-white hover:text-primary">
              View Our Menu
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-20 grid grid-cols-3 gap-4">
          {["/images/dining.jpg", "/images/villa-1.jpg", "/images/nature.jpg"].map(
            (img, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Dining gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
