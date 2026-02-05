"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const images = [
  "/images/kanyakumari-lighthouse.jpg",
  "/images/kanyakumari-sunset.jpg",
  "/images/kanyakumari-beach.jpg",
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img || "/placeholder.svg"}
            alt="Queen's Christy Residency - Kanyakumari"
            fill
            className={`object-cover ${index === 2 ? 'object-top scale-[2] md:scale-100 md:object-center' : 'object-center'}`}
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      
     {/* Content */}
<div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center text-white">

  {/* Welcome Text */}
  <p className="mb-4 sm:mb-6 text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase opacity-90">
    Welcome To
  </p>

   {/* Logo */}
  <div className="mb-4 sm:mb-8 flex justify-center mt-[1cm]">
    <div className="w-[160px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[280px] md:h-[180px] flex items-center justify-center">
      <Image
        src="/images/LogoBlack.png"
        alt="Queen's Christy Residency Logo"
        width={280}
        height={180}
        priority
        className="object-contain"
      />
    </div>
  </div>

    {/* Hotel Name Image */}
<div className="mb-6 sm:mb-10 md:mb-12 flex justify-center">
  <div className="w-[340px] h-[75px] sm:w-[550px] sm:h-[120px] md:w-[800px] md:h-[180px] flex items-center justify-center">
    <Image
      src="/images/QueensChristyBlack.png"
      alt="Queen's Christy Residency"
      width={800}
      height={180}
      className="object-contain"
    />
  </div>
</div>

  {/* Tagline */}
  <p className="mb-4 sm:mb-6 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed opacity-80 px-4">
    Experience coastal luxury near the iconic Kanyakumari Lighthouse, 
    where three seas meet and every sunrise paints the sky with wonder.
  </p>

  {/* Location Badge */}
  <div className="flex items-center gap-2 text-xs tracking-wide opacity-90">
    <span className="text-amber-400">★★★★★</span>
    <span>Near Kanyakumari Lighthouse</span>
  </div>

</div>

      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white opacity-80 transition-opacity hover:opacity-100"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
      
      {/* Image Indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1.5 transition-all duration-300 ${
              index === currentImage 
                ? "w-8 bg-white" 
                : "w-1.5 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
