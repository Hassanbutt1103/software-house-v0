"use client"

import Link from "next/link"

interface AboutItem {
  title: string
  description: string
  href: string
}

interface AboutCategory {
  category: string
  items: AboutItem[]
}

const aboutData: AboutCategory[] = [
  {
    category: "Company & Culture",
    items: [
      {
        title: "Our Story",
        description: "Learn about our journey, mission, and vision for personal software.",
        href: "/about/Company&Culture/our-story",
      },
      {
        title: "Leadership & Team",
        description: "Meet the experts and visionary engineers behind our products.",
        href: "/about/Company&Culture/leadership",
      },
      {
        title: "Values & Ethics",
        description: "Our core principles, quality commitment, and work culture.",
        href: "/about/Company&Culture/values",
      },
    ],
  },
  
  {
    category: "Impact & Network",
    items: [
      {
        title: "Global Reach",
        description: "Discover our client distribution and international footprint.",
        href: "/about/Impact&Network/global-reach",
      },
      {
        title: "Partnerships",
        description: "Our strategic technology vendors, platforms, and integrations.",
        href: "/about/Impact&Network/partnerships",
      },
      {
        title: "Sustainability & Social Impact",
        description: "How we contribute to tech communities and open-source ecosystems.",
        href: "/about/Impact&Network/sustainability",
      },
    ],
  },
]

export function AboutDropdown() {
  return (
    <div className="fixed left-0 right-0 top-14 w-full bg-black/95 text-white border-b border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutData.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {/* Category Heading */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                  {cat.category}
                </h3>
              </div>

              {/* Category Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
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
      </div>
    </div>
  )
}