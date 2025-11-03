"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react" // ✅ Add this
import { ArrowDown } from "lucide-react"

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setHidden(true)
      else setHidden(false)
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 w-full border-b transition-transform duration-500 z-50 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* ✅ Desktop Navbar */}
      <nav className="hidden md:flex mx-auto items-center justify-between px-4 md:px-16 h-14">
        <div className="flex items-center gap-18">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-semibold text-xl text-white">Personal Software</span>
          </Link>

          <div className="flex items-center gap-16 ml-6 text-white">
  <a href="#services" className="flex items-center gap-1 text-lg hover:underline">
    Services <ArrowDown className="w-4 h-4" />
  </a>
  <a href="#insight" className="flex items-center gap-1 text-lg hover:underline">
    Insight <ArrowDown className="w-4 h-4" />
  </a>
  <a href="#about" className="flex items-center gap-1 text-lg hover:underline">
    About <ArrowDown className="w-4 h-4" />
  </a>
</div>
        </div>

        <div className="flex items-center gap-4 text-white">
          <a href="#career" className="text-lg hover:underline">Career</a>

          <input
            type="text"
            placeholder="Search..."
            className="border-x border-white/20 text-gray-400 bg-transparent text-center px-2 h-10 text-sm focus:outline-none focus:border-x-primary"
          />

          <button className="text-lg font-semibold">
            <a href="mailto:hello@example.com">Get a quote</a>
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between px-4 h-14 text-white">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Personal Software</span>
        </div>

        <div className="flex items-center gap-4">
          {/* ✅ Search icon added */}
          <button aria-label="Search">
            <Search size={24} />
          </button>

          {/* ✅ Menu icon */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-black/90 text-white px-4 py-4 space-y-3">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#insight" onClick={() => setMenuOpen(false)}>Insight</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#career" onClick={() => setMenuOpen(false)}>Career</a>
          <a href="mailto:hello@example.com" className="text-primary font-semibold">Get a quote</a>
        </div>
      )}
    </header>
  )
}
