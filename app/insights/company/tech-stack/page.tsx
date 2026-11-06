"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const detailedTechStack = [
  {
    category: "Frontend Development",
    subtitle: "Building responsive, lightning-fast, and interactive user interfaces.",
    description:
      "We harness the power of cutting-edge frontend frameworks and libraries to deliver pixel-perfect designs, smooth animations, and optimized client-side rendering. Every interface is built with mobile-first responsiveness and high accessibility standards.",
    skills: [
      { name: "Next.js", desc: "Server-side rendering, SEO optimization, and hybrid routing." },
      { name: "React", desc: "Component-driven architecture for dynamic web applications." },
      { name: "TypeScript", desc: "Type safety, robust code quality, and scalable maintenance." },
      { name: "Tailwind CSS", desc: "Utility-first styling for lightning-fast and custom designs." },
      { name: "Framer Motion", desc: "Smooth UI animations, transitions, and immersive scroll effects." },
    ],
    icon: Code,
    number: "01",
  },
  {
    category: "Backend & API Architecture",
    subtitle: "Robust, secure, and high-throughput server-side systems.",
    description:
      "Our backend architecture is built to handle heavy traffic, secure data exchange, and real-time operations. We design clean RESTful APIs, asynchronous event handlers, and scalable microservices tailored to your business logic.",
    skills: [
      { name: "Node.js", desc: "Asynchronous event-driven runtime for scalable backend services." },
      { name: "Express & Hono", desc: "Lightweight, ultrafast web frameworks for API routing." },
      { name: "REST APIs", desc: "Standardized, secure, and well-documented endpoint communication." },
      { name: "Socket.io", desc: "Real-time bidirectional event-based communication." },
    ],
    icon: Server,
    number: "02",
  },
  {
    category: "Database & Data Storage",
    subtitle: "Secure, reliable, and high-performance data persistence layers.",
    description:
      "Data integrity and speed are critical. We use advanced relational and NoSQL databases combined with high-speed object storage to ensure your application handles data securely, scales smoothly, and executes queries instantaneously.",
    skills: [
      { name: "PostgreSQL", desc: "Advanced relational database for complex queries and data integrity." },
      { name: "Prisma ORM", desc: "Next-gen type-safe database client and automated migrations." },
      { name: "MongoDB", desc: "Flexible NoSQL document storage for unstructured data and fast reads." },
      { name: "Neon DB & Cloudflare R2", desc: "Serverless Postgres and zero-egress object storage solutions." },
    ],
    icon: Database,
    number: "03",
  },
  {
    category: "Cloud Infrastructure & DevOps",
    subtitle: "Enterprise-grade deployment, caching, and server management.",
    description:
      "We deploy applications on dedicated virtual private servers optimized with reverse proxies, SSL hardening, containerization, and global edge CDNs to guarantee 99.9% uptime and ultra-low latency.",
    skills: [
      { name: "VPS Servers", desc: "Dedicated cloud computing power with full root control and security." },
      { name: "Caddy & Nginx", desc: "High-performance web servers, load balancing, and automatic HTTPS." },
      { name: "PM2", desc: "Production process manager ensuring zero-downtime node application reloads." },
      { name: "Cloudflare CDN", desc: "Global edge caching, DDoS protection, and lightning-fast asset delivery." },
    ],
    icon: Cloud,
    number: "04",
  },
];

export default function TechStackPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen pt-24 pb-24 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Company / Tech Stack
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Modern Engineering Stack & Tools
          </h1>
          <div className="mt-4 h-1.5 w-24 mx-auto rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Scroll down to explore the robust, type-safe, and high-performance technologies we use to engineer scalable web applications and cloud infrastructure.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Zig-Zag Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-16 relative">
        
        {/* Central Vertical Line (Visible on Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-1 bg-gray-200 -translate-x-1/2 rounded-full" />

        <div className="space-y-20 lg:space-y-32">
          {detailedTechStack.map((cat, index) => {
            const Icon = cat.icon;
            // Alternating pattern: 0 -> Left, 1 -> Right, 2 -> Left, 3 -> Right
            const isEven = index % 2 === 0;

            return (
              <div 
                key={cat.category} 
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                
                {/* Tech Category Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full lg:w-1/2 p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-4xl md:text-5xl font-black text-gray-300 group-hover:text-orange-500/30 transition-colors">
                      {cat.number}
                    </span>
                  </div>

                  <span className="text-xs text-orange-600 font-semibold uppercase tracking-wider block mb-1">
                    Core Competency {cat.number} of 04
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {cat.category}
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4">
                    {cat.subtitle}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Skills List with Descriptions */}
                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-bold text-gray-900 block mb-0.5">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-600 leading-relaxed">
                            {skill.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Center Badge / Number Node on Line (Desktop Only) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-orange-500 items-center justify-center shadow-lg z-10 text-orange-600 font-black text-lg">
                  {cat.number}
                </div>

                {/* Empty Spacer for the alternating side on Desktop */}
                <div className="hidden lg:block lg:w-1/2" />

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}