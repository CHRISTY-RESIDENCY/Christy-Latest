import Image from "next/image"

const images = [
  { src: "/images/reception.jpg", alt: "Reception", featured: true },
  { src: "/images/dbed.jpg", alt: "Deluxe Bed" },
  { src: "/images/dlamp.jpg", alt: "Deluxe Lamp" },
  { src: "/images/dtowel.jpg", alt: "Deluxe Towel" },
  { src: "/images/dtv.jpg", alt: "Deluxe TV" },
  { src: "/images/dwardrobe.jpg", alt: "Deluxe Wardrobe" },
  { src: "/images/dbedfront.jpg", alt: "Deluxe Bed Front", tall: true },
  { src: "/images/pbedside.JPG", alt: "Premium Bedside" },
  { src: "/images/pbroom.jpg", alt: "Premium Bathroom" },
  { src: "/images/plight.jpg", alt: "Premium Light" },
  { src: "/images/pmirror.jpg", alt: "Premium Mirror" },
  { src: "/images/sbedside.jpg", alt: "Suite Bedside", tall: true },
  { src: "/images/sbroom.jpg", alt: "Suite Bathroom" },
  { src: "/images/smirror.jpg", alt: "Suite Mirror" },
  { src: "/images/stvview.jpg", alt: "Suite TV View" },
]

export default function Gallery() {
  return (
    <section className="bg-secondary py-24">

      {/* Section Intro */}
      <div className="mx-auto mb-14 max-w-3xl px-6 text-center">
        <span className="text-xs tracking-[0.35em] uppercase text-gray-500">
          Explore
        </span>
        <h2 className="mt-3 font-serif text-3xl font-light">
          Our Gallery
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          A visual journey through refined interiors and thoughtfully designed spaces.
        </p>
      </div>

      {/* Immersive Editorial Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-[6px] md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`
                group relative overflow-hidden
                ${img.featured ? "md:col-span-2 md:row-span-2" : ""}
                ${img.tall ? "row-span-2" : ""}
              `}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                priority={img.featured}
              />

              {/* Subtle caption */}
              <div className="absolute bottom-3 left-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="rounded-sm bg-black/40 px-2 py-0.5 text-[11px] tracking-wide text-white backdrop-blur">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
