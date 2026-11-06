// "use client"

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import { Menu, X, Search, ArrowDown } from "lucide-react"
// import { ServicesDropdown } from "./navBar/ServicesDropdown"
// import { InsightDropdown } from "./navBar/InsightDropdown"
// import { AboutDropdown } from "./navBar/AboutDropdown" // ✅ امپورٹ کریں

// export function Navbar() {
//   const [hidden, setHidden] = useState<boolean>(false)
//   const [lastScrollY, setLastScrollY] = useState<number>(0)
//   const [menuOpen, setMenuOpen] = useState<boolean>(false)
  
//   // Hover States
//   const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false)
//   const [isInsightOpen, setIsInsightOpen] = useState<boolean>(false)
//   const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false) // ✅ About State

//   useEffect(() => {
//     const handleScroll = (): void => {
//       if (window.scrollY > lastScrollY) setHidden(true)
//       else setHidden(false)
//       setLastScrollY(window.scrollY)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [lastScrollY])

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full border-b bg-black/80 backdrop-blur-md transition-transform duration-500 z-50 ${
//         hidden ? "-translate-y-full" : "translate-y-0"
//       }`}
//     >
//       {/* Desktop Navbar */}
//       <nav className="hidden md:flex mx-auto items-center justify-between px-4 md:px-16 h-14">
//         <div className="flex items-center gap-18">
//           <Link href="/" className="flex items-center gap-2">
//             <span className="font-semibold text-xl text-primary">OrangeDev</span>
//           </Link>

//           <div className="flex items-center gap-16 ml-6 text-white">
//             {/* Services Dropdown */}
//             <div
//               className="py-4 cursor-pointer relative"
//               onMouseEnter={() => setIsServicesOpen(true)}
//               onMouseLeave={() => setIsServicesOpen(false)}
//             >
//               <a href="#services" className="flex items-center gap-1 text-lg hover:underline">
//                 Services{" "}
//                 <ArrowDown
//                   className={`w-4 h-4 transition-transform duration-300 ${
//                     isServicesOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </a>
//               {isServicesOpen && <ServicesDropdown />}
//             </div>

//             {/* Insight Dropdown */}
//             <div
//               className="py-4 cursor-pointer relative"
//               onMouseEnter={() => setIsInsightOpen(true)}
//               onMouseLeave={() => setIsInsightOpen(false)}
//             >
//               <a href="#insight" className="flex items-center gap-1 text-lg hover:underline">
//                 Insight{" "}
//                 <ArrowDown
//                   className={`w-4 h-4 transition-transform duration-300 ${
//                     isInsightOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </a>
//               {isInsightOpen && <InsightDropdown />}
//             </div>

//             {/* About Dropdown */}
//             <div
//               className="py-4 cursor-pointer relative"
//               onMouseEnter={() => setIsAboutOpen(true)}
//               onMouseLeave={() => setIsAboutOpen(false)}
//             >
//               <a href="#about" className="flex items-center gap-1 text-lg hover:underline">
//                 About{" "}
//                 <ArrowDown
//                   className={`w-4 h-4 transition-transform duration-300 ${
//                     isAboutOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </a>
//               {isAboutOpen && <AboutDropdown />}
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center gap-4 text-white">
//           {/* <a href="#career" className="text-lg hover:underline">
//             Career
//           </a> */}

//           <input
//             type="text"
//             placeholder="Search..."
//             className="border-x border-white/20 text-gray-400 bg-transparent text-center px-2 h-10 text-sm focus:outline-none focus:border-x-primary"
//           />

//           <a href="#services" className="text-lg font-semibold hover:underline">
//             Get a quote
//           </a>
//         </div>
//       </nav>

//       {/* Mobile Navbar */}
//       <nav className="md:hidden flex items-center justify-between px-4 h-14 text-white">
//         <div className="flex items-center gap-2">
//           <span className="font-semibold text-lg">Orangepoint</span>
//         </div>

//         <div className="flex items-center gap-4">
//           <button aria-label="Search">
//             <Search size={24} />
//           </button>

//           <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
//             {menuOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col bg-black/90 text-white px-4 py-4 space-y-3">
//           <a href="#services" onClick={() => setMenuOpen(false)}>
//             Services
//           </a>
//           <a href="#insight" onClick={() => setMenuOpen(false)}>
//             Insight
//           </a>
//           <a href="#about" onClick={() => setMenuOpen(false)}>
//             About
//           </a>
//           {/* <a href="#career" onClick={() => setMenuOpen(false)}>
//             Career
//           </a> */}
//           <a href="mailto:hello@example.com" className="text-primary font-semibold">
//             Get a quote
//           </a>
//         </div>
//       )}
//     </header>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Search, ArrowDown, ChevronDown } from "lucide-react"
import { ServicesDropdown } from "./navBar/ServicesDropdown"
import { InsightDropdown } from "./navBar/InsightDropdown"
import { AboutDropdown } from "./navBar/AboutDropdown"
import { mobileMenu } from "./navBar/Menudata"

export function Navbar() {
  const [hidden, setHidden] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  // Desktop hover states
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false)
  const [isInsightOpen, setIsInsightOpen] = useState<boolean>(false)
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false)

  // Mobile states
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const [mobileSearchOpen, setMobileSearchOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      if (menuOpen) return // menu khula ho to navbar hide na ho
      setHidden(window.scrollY > lastScrollY && window.scrollY > 56)
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, menuOpen])

  const closeMobileMenu = (): void => {
    setMenuOpen(false)
    setMobileSection(null)
    setMobileSearchOpen(false)
  }

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
            <span className="font-semibold text-xl text-primary">OrangeDev</span>
          </Link>

          <div className="flex items-center gap-16 ml-6 text-white">
            {/* Services Dropdown */}
            <div
              className="py-4 cursor-pointer relative"
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
              className="py-4 cursor-pointer relative"
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
              className="py-4 cursor-pointer relative"
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
          <input
            type="text"
            placeholder="Search..."
            className="border-x border-white/20 text-gray-400 bg-transparent text-center px-2 h-10 text-sm focus:outline-none focus:border-x-primary"
          />

          <a href="/contact-us" className="text-lg font-semibold hover:underline">
            Get a quote
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between px-4 h-14 text-white">
        <Link href="/" onClick={closeMobileMenu}>
          <span className="font-semibold text-lg text-primary">OrangeDev</span>
        </Link>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            onClick={() => {
              setMobileSearchOpen(!mobileSearchOpen)
              setMenuOpen(true)
            }}
          >
            <Search size={24} />
          </button>

          <button
            onClick={() => (menuOpen ? closeMobileMenu() : setMenuOpen(true))}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 text-white px-4 py-4 max-h-[calc(100svh-3.5rem)] overflow-y-auto">
          {/* Search */}
          {mobileSearchOpen && (
            <input
              type="text"
              autoFocus
              placeholder="Search..."
              className="w-full mb-4 border border-white/20 rounded-md bg-transparent text-gray-300 px-3 h-10 text-sm focus:outline-none focus:border-primary"
            />
          )}

          {/* Accordion Sections: Services / Insight / About */}
          {mobileMenu.map((section) => {
            const isOpen = mobileSection === section.key
            return (
              <div key={section.key} className="border-b border-white/10">
                <button
                  className="w-full flex items-center justify-between py-3 text-lg"
                  onClick={() => setMobileSection(isOpen ? null : section.key)}
                  aria-expanded={isOpen}
                >
                  {section.label}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-4 flex flex-col gap-5">
                    {section.categories.map((cat) => (
                      <div key={cat.category} className="flex flex-col gap-2">
                        {/* Category Heading (desktop jaisa) */}
                        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                            {cat.category}
                          </h3>
                        </div>

                        {/* Category Items */}
                        <div className="flex flex-col gap-2">
                          {cat.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="p-3 rounded-lg bg-white/5 active:bg-white/10 border border-white/5 transition-all group"
                            >
                              <h4 className="font-semibold text-sm text-white group-hover:text-primary transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          <Link
            href="/contact-us"
            className="block mt-4 text-primary font-semibold text-lg"
            onClick={closeMobileMenu}
          >
            Get a quote
          </Link>
        </div>
      )}
    </header>
  )
}