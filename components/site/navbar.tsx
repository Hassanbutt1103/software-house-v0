"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 w-full bb border border-t-0 border-x-0 bg-transparent transition-transform duration-500 z-50 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between px-6 h-14">
        {/* ✅ Left Section */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm bg-primary" aria-hidden="true" />
            <span className="font-semibold text-xl text-white">Personal Software</span>
          </Link>

          <div className="flex items-center gap-6 ml-6 text-white">
            <a href="#services" className="text-lg hover:underline">
              Services
            </a>
            <a href="#insight" className="text-lg hover:underline">
              Insight
            </a>
            <a href="#about" className="text-lg hover:underline">
              About
            </a>
          </div>
        </div>

        {/* ✅ Right Section */}
        <div className="flex items-center gap-4 text-white">
          <a href="#career" className="text-lg hover:underline">
            Career
          </a>

          <input
            type="text"
            placeholder="Search..."
            className="bb border-x border-t-0 border-b-0 text-center px-1 h-14 text-sm bg-transparent focus:outline-none focus:ring-0 focus:border-x-primary"

          />

          <button
            className="text-lg rounded-none text-primary-foreground hover:opacity-90 h-full"
          >
            <a href="mailto:hello@example.com" aria-label="Get a quote via email">
              Get a quote
            </a>
          </button>
        </div>
      </nav>
    </header>
  )
}
