import Image from "next/image"
import Link from "next/link"

const programs = [
  {
    title: "Balance",
    subtitle: "Relaxation",
    description: "Restore equilibrium through mindful practices and serene environments.",
  },
  {
    title: "Renewal",
    subtitle: "Healing",
    description: "Experience transformative therapies that rejuvenate body and spirit.",
  },
]

export function WellnessSection() {
  return (
    <section id="wellness" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Wellness & Retreats
            </p>
            <h2 className="mb-6 font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
              Discover your path to wellness and growth.
            </h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              At Sanctum we redefine luxury as an experience that not only pampers 
              the senses but also nurtures the soul. Nestled in pristine nature, 
              our eco-luxury retreat offers a sanctuary for healing and transformation.
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              With personalized programs year-round, enjoy dedicated attention and care, 
              immersing yourself in relaxation, rejuvenation, or profound inner change 
              through meticulously curated activities and treatments.
            </p>
            <p className="font-serif text-xl italic text-primary">
              Your transformative journey begins here.
            </p>

            {/* Program Cards */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="group border border-border p-6 transition-all hover:border-primary hover:bg-card"
                >
                  <h3 className="font-serif text-2xl font-light text-foreground">
                    {program.title}
                  </h3>
                  <p className="mb-3 text-sm text-primary">{program.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </div>
              ))}
            </div>

            <Link
              href="#book"
              className="mt-10 inline-flex w-fit items-center gap-2 border-b border-primary pb-1 text-sm tracking-wide text-primary transition-all hover:gap-4"
            >
              Explore Our Retreats
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/yoga.jpg"
                alt="Yoga and wellness at Sanctum"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlapping smaller image */}
            <div className="absolute -bottom-8 -left-8 aspect-square w-1/2 overflow-hidden border-4 border-background shadow-xl md:w-2/5">
              <Image
                src="/images/spa.jpg"
                alt="Spa treatments"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
