import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  Explore: [
    { label: "About Us", href: "#about" },
    { label: "Rooms", href: "#accommodations" },
    { label: "Attractions", href: "#attractions" },
    { label: "Reviews", href: "#testimonials" },
  ],
  Attractions: [
    { label: "Lighthouse", href: "#attractions" },
    { label: "Vivekananda Rock", href: "#attractions" },
    { label: "Kumari Amman Temple", href: "#attractions" },
    { label: "Beach & Sunset", href: "#attractions" },
  ],
  Connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "Reservations", href: "#contact" },
    { label: "WhatsApp", href: "#" },
    { label: "Directions", href: "#" },
  ],
}

export function Footer() {
  return (
    <>
      {/* Reception Image Section */}
      <section className="bg-amber-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Image
            src="/images/receptionend.jpg"
            alt="Queen's Christy Residency Reception"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority={false}
          />
        </div>
      </section>

      <footer id="contact" className="bg-foreground text-background">
      {/* Contact Section */}
      <div className="border-b border-background/20 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h3 className="font-serif text-2xl font-light md:text-3xl">
                Book Your Stay
              </h3>
              <p className="mt-2 text-background/70">
                Contact us for reservations and inquiries.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+919442416709"
                className="flex items-center justify-center gap-2 border border-background px-6 py-3 text-sm tracking-wide transition-all hover:bg-background hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919442416709"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 px-6 py-3 text-sm tracking-wide text-white transition-all hover:bg-green-700"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="font-serif text-2xl font-light tracking-wide md:text-3xl">
                {"Queen's Christy Residency"}
              </Link>
              <p className="mt-4 max-w-sm text-background/70 leading-relaxed">
                A premium coastal stay near the iconic Kanyakumari Lighthouse. 
                Experience the magic of {"India's"} southern tip with comfort and convenience.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-background/30 transition-all hover:bg-background hover:text-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-background/30 transition-all hover:bg-background hover:text-foreground"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="mailto:christyresidency@gmail.com"
                  className="flex h-10 w-10 items-center justify-center border border-background/30 transition-all hover:bg-background hover:text-foreground"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-4 text-sm font-medium tracking-wide uppercase">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-background/70 transition-colors hover:text-background"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-background/20 pt-8 text-sm text-background/70">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Kovalam Road,Near Lighthouse, Kanyakumari, Tamil Nadu 629702</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 9442416709</span>
              <span>+91 9361831702</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>christyresidency@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20 py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-background/50 md:flex-row">
            <p>© 2026 {"Queen's Christy Residency"}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-background">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-background">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
