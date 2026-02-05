"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#accommodations", label: "Rooms" },
  { href: "#attractions", label: "Attractions" },
  { href: "#testimonials", label: "Reviews" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 py-0.5 shadow-sm backdrop-blur-sm"
            : "bg-transparent py-1"
        }`}
      >
        <nav className="flex w-full items-center justify-between px-0">
          <Link
            href="/"
            className="flex items-center gap-1.5 md:gap-3 pl-2 md:pl-4"
          >
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 overflow-hidden">
              <Image
                src="/images/LogoBlack.png"
                alt="Queen's Christy Logo"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative h-8 w-24 sm:h-10 sm:w-32 md:h-14 md:w-56">
              <Image
                src="/images/QueensChristyBlackNav.png"
                alt="Queen's Christy Residency"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex pr-2 md:pr-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className={`border px-5 py-2 text-sm tracking-wide transition-all hover:bg-primary hover:text-primary-foreground ${
                isScrolled
                  ? "border-foreground text-foreground"
                  : "border-white text-white"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden pr-2 ${isScrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-2xl text-foreground transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 border border-foreground px-8 py-3 text-sm tracking-wide text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  )
}
