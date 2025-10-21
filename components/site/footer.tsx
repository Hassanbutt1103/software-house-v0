export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Orangepoint Software. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <a href="info@codexnav.com" className="hover:underline">
            info@codexnav.com
          </a>
        </nav>
      </div>
    </footer>
  )
}
