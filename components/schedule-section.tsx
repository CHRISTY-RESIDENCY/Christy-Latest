"use client"

import { useState } from "react"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const schedule = {
  "7 AM": "Yoga (All Levels)",
  "9 AM": "Guided Meditation",
  "12 PM": "Sound Journey",
  "4 PM": "Nature Walk",
  "6 PM": "Sunset Ceremony",
}

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState("Monday")

  return (
    <section id="experiences" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Daily Experiences
          </p>
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
            Weekly Schedule
          </h2>
          <p className="mt-4 text-muted-foreground">
            Advanced booking is recommended
          </p>
        </div>

        {/* Day Selector */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 text-sm tracking-wide transition-all ${
                activeDay === day
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="mx-auto max-w-3xl">
          <div className="divide-y divide-border border border-border">
            {Object.entries(schedule).map(([time, activity]) => (
              <div
                key={time}
                className="flex items-center justify-between p-6 transition-colors hover:bg-secondary"
              >
                <span className="font-serif text-xl text-primary">{time}</span>
                <span className="text-foreground">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 font-serif text-2xl font-light text-foreground">
            Reconnect With Yourself In Luxurious Comfort.
          </p>
          <button className="border border-primary bg-primary px-10 py-4 text-sm tracking-wide text-primary-foreground transition-all hover:bg-transparent hover:text-primary">
            Book Your Stay
          </button>
        </div>
      </div>
    </section>
  )
}
