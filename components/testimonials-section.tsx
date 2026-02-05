import React from 'react'

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Best experience in Kanyakumari! The customer service was impeccable and the staff were so kind. The rooms were beautifully maintained and the location is perfect near the lighthouse.",
      author: "Priya S.",
      date: "December 2025",
    },
    {
      text: "A truly memorable experience. Beautiful architecture, wonderful staff, and stunning views. We will remember our stay at Queen's Christy Residency forever.",
      author: "Rajesh & Meena K.",
      date: "November 2025",
    },
    {
      text: "Perfect place to relax! The residency is so beautiful, peaceful, quiet and close to all major attractions. The food service was excellent and staff does an amazing job.",
      author: "Anand M.",
      date: "October 2025",
    },
    {
      text: "One of the most beautiful residencies in Kanyakumari. Just returned from an amazing 3-day stay. The rooms are spacious, clean, and the ambiance is just perfect.",
      author: "Kavitha R.",
      date: "September 2025",
    },
    {
      text: "Immerse yourself in comfort and hospitality. Our stay was truly exceptional. The location near Kovalam Road makes it convenient to explore all of Kanyakumari.",
      author: "Vikram & Divya",
      date: "August 2025",
    },
    {
      text: "If I only could give 6 stars! This is definitely one of the best places we've stayed at. The staff are friendly, helpful and the rooms exceeded our expectations.",
      author: "Suresh T.",
      date: "July 2025",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-24">
      {/* Section Intro */}
      <div className="mx-auto mb-16 max-w-3xl px-6 text-center">
        <span className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
          Guest Reviews
        </span>
        <h2 className="mt-3 font-serif text-3xl font-light text-foreground">
          What Our Guests Say
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Read about the experiences of our valued guests who have stayed with us.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-primary/20 bg-card p-8 shadow-sm transition-shadow duration-500 hover:shadow-md"
            >
              <p className="mb-6 text-sm leading-relaxed text-foreground">
                "{item.text}"
              </p>

              <div className="text-sm font-medium text-primary">
                {item.author}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
