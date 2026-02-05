import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Location Intro */}
        <div className="mb-20 text-center">
          <h2 className="font-serif text-3xl font-light leading-relaxed text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Located just steps from the iconic Kanyakumari Lighthouse, 
              where the Arabian Sea, Bay of Bengal, and Indian Ocean converge.
            </span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
<div className="w-full flex justify-center">
  <Image
    src="/images/hotelcover.jpg"
    alt="Kanyakumari Lighthouse near Queen's Christy Residency"
    width={520}
    height={760}
    className="w-full max-w-[520px] h-auto"
    priority
  />
</div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Discover Cozy Elegance
            </p>
            <h3 className="mb-6 font-serif text-3xl font-light text-foreground md:text-4xl">
              Your Gateway to {"India's"} Southern Tip
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {"Queen's Christy Residency"} Nestled near the serene Kovalam Road in Kanyakumari, Queen's Christy Residency offers refined comfort and elegant interiors for a peaceful stay.

We believe nature and luxury can coexist. Our residency offers a welcoming, comfortable haven with luxurious amenities and impeccable service. Experience the beauty of Kanyakumari while enjoying modern comforts.

              </p>
              <p>
                Recharge your mind, body, and soul in this unique retreat where tranquility meets Kanyakumari's serene beauty.
              </p>
            </div>
            <Link
              href="#accommodations"
              className="mt-8 inline-flex w-fit items-center gap-2 border-b border-primary pb-1 text-sm tracking-wide text-primary transition-all hover:gap-4"
            >
              Explore Our Rooms
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4">
          {[
            { value: "2 min", label: "Walk to Lighthouse" },
            { value: "5 min", label: "Walk to Beach" },
            { value: "24/7", label: "Guest Services" },
            { value: "4.9★", label: "Guest Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-light text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
