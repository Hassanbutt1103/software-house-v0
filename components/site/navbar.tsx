"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <>
      <div aria-hidden="true" />
      <header className="w-full border-b border-border bg-background">
        <nav className="mx-auto flex items-stretch justify-between px-4 py-0 h-16">

          <Link href="/" className="flex items-center gap-2" aria-label="Orangepoint Software home">
            <div className="h-6 w-6 rounded-sm bg-primary" aria-hidden="true" />
            <span className="font-semibold text-xl">Personal Software</span>
          </Link>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-lg hover:underline">
              Services
            </a>
            <a href="#contact" className="text-lg hover:underline">
              Contact
            </a>
            <Button 
  asChild 
  className="text-lg rounded-none text-primary-foreground hover:opacity-90 bg-primary h-full"
>
  <a href="mailto:hello@example.com" aria-label="Get a quote via email">
    Get a quote
  </a>
</Button>

          </div>
        </nav>
      </header>
    </>
  )
}
