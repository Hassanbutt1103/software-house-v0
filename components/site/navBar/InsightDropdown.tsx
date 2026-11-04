"use client"

import Link from "next/link"

interface InsightItem {
  title: string
  description: string
  href: string
}

interface InsightCategory {
  category: string
  items: InsightItem[]
}

const insightData: InsightCategory[] = [
  {
    category: "Resources",
    items: [
      {
        title: "Blog & Articles",
        description: "Latest insights on web development, software engineering, and tech trends.",
        href: "/insights/blog",
      },
      {
        title: "Case Studies",
        description: "Deep dives into how we built scalable products for our clients.",
        href: "/insights/case-studies",
      },
      {
        title: "Whitepapers",
        description: "Research papers and technical documents on modern architectures.",
        href: "/insights/whitepapers",
      },
    ],
  },
  {
    category: "Company",
    items: [
      {
        title: "Our Process",
        description: "How we plan, design, and execute projects from scratch to deployment.",
        href: "/insights/company/process",
      },
      {
        title: "Tech Stack",
        description: "Explore the modern technologies, tools, and frameworks we use.",
        href: "/insights/company/tech-stack",
      },
      {
        title: "FAQs",
        description: "Frequently asked questions about working with us and our pricing.",
        href: "/insights/company/faq",
      },
    ],
  },
]

export function InsightDropdown() {
  return (
    <div className="fixed left-0 right-0 top-14 w-full bg-black/95 text-white border-b border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insightData.map((cat, idx) => (
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