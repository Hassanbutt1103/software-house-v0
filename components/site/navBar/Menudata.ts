export interface MenuItem {
  title: string
  description: string
  href: string
}

export interface MenuCategory {
  category: string
  items: MenuItem[]
}

export interface MenuSection {
  key: string
  label: string
  categories: MenuCategory[]
}

export const servicesData: MenuCategory[] = [
  {
    category: "Digital Services",
    items: [
      {
        title: "Web Development",
        description: "Custom and scalable web applications built with modern tech.",
        href: "/services/Digital-services/webDev",
      },
      {
        title: "Mobile Apps",
        description: "Cross-platform mobile apps for iOS and Android.",
        href: "/services/Digital-services/mobileApps",
      },
      {
        title: "UI/UX Design",
        description: "User-centered design that creates intuitive experiences.",
        href: "/services/Digital-services/ui-ux",
      },
    ],
  },
  {
    category: "Cloud Services",
    items: [
      {
        title: "Cloud Infrastructure",
        description: "Secure and scalable cloud setup & DevOps solutions.",
        href: "/services/Cloud-services/cloud-infra",
      },
      {
        title: "Server Management",
        description: "24/7 server monitoring, performance optimization & security.",
        href: "/services/Cloud-services/server-mgmt",
      },
      {
        title: "Cloud Migration",
        description: "Seamless transfer of your applications to high-speed cloud.",
        href: "/services/Cloud-services/cloud-migration",
      },
    ],
  },
]

export const insightData: MenuCategory[] = [
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

export const aboutData: MenuCategory[] = [
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

// Mobile menu isi data se banta hai
export const mobileMenu: MenuSection[] = [
  { key: "services", label: "Services", categories: servicesData },
  { key: "insight", label: "Insight", categories: insightData },
  { key: "about", label: "About", categories: aboutData },
]