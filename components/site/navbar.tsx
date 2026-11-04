"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Search, ArrowDown } from "lucide-react"
import { ServicesDropdown } from "./navBar/ServicesDropdown"
import { InsightDropdown } from "./navBar/InsightDropdown"
import { AboutDropdown } from "./navBar/AboutDropdown" // ✅ امپورٹ کریں

export function Navbar() {
  const [hidden, setHidden] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  
  // Hover States
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false)
  const [isInsightOpen, setIsInsightOpen] = useState<boolean>(false)
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false) // ✅ About State

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > lastScrollY) setHidden(true)
      else setHidden(false)
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 w-full border-b bg-black/80 backdrop-blur-md transition-transform duration-500 z-50 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Desktop Navbar */}
      <nav className="hidden md:flex mx-auto items-center justify-between px-4 md:px-16 h-14">
        <div className="flex items-center gap-18">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-semibold text-xl text-primary">Orangepoint</span>
          </Link>

          <div className="flex items-center gap-16 ml-6 text-white">
            {/* Services Dropdown */}
            <div
              className="py-4 cursor-pointer"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a href="#services" className="flex items-center gap-1 text-lg hover:underline">
                Services{" "}
                <ArrowDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </a>
              {isServicesOpen && <ServicesDropdown />}
            </div>

            {/* Insight Dropdown */}
            <div
              className="py-4 cursor-pointer"
              onMouseEnter={() => setIsInsightOpen(true)}
              onMouseLeave={() => setIsInsightOpen(false)}
            >
              <a href="#insight" className="flex items-center gap-1 text-lg hover:underline">
                Insight{" "}
                <ArrowDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isInsightOpen ? "rotate-180" : ""
                  }`}
                />
              </a>
              {isInsightOpen && <InsightDropdown />}
            </div>

            {/* About Dropdown */}
            <div
              className="py-4 cursor-pointer"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <a href="#about" className="flex items-center gap-1 text-lg hover:underline">
                About{" "}
                <ArrowDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </a>
              {isAboutOpen && <AboutDropdown />}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white">
          {/* <a href="#career" className="text-lg hover:underline">
            Career
          </a> */}

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

      {/* Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between px-4 h-14 text-white">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Orangepoint</span>
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Search">
            <Search size={24} />
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-black/90 text-white px-4 py-4 space-y-3">
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#insight" onClick={() => setMenuOpen(false)}>
            Insight
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          {/* <a href="#career" onClick={() => setMenuOpen(false)}>
            Career
          </a> */}
          <a href="mailto:hello@example.com" className="text-primary font-semibold">
            Get a quote
          </a>
        </div>
      )}
    </header>
  )
}