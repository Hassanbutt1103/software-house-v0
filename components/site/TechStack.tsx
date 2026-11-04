"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, CheckCircle2 } from "lucide-react";

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
  },
];

export function TechStack() {
  return (
    <section className="border-t border-gray-200 bg-white text-gray-900 py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        
        {/* Section Header */}
        <motion.header
          className="mb-20 max-w-3xl text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Modern Engineering Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
            Technologies & Tools We Master
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            We don't rely on outdated frameworks. Our technology stack is carefully curated for speed, scalability, type safety, and seamless cloud integration.
          </p>
        </motion.header>

        {/* Detailed Tech Stack Container */}
        <div className="space-y-16">
          {detailedTechStack.map((cat, index) => {
            const Icon = cat.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-start gap-10 p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl transition-all ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Category Header Box */}
                <div className="w-full lg:w-1/3 flex flex-col items-start justify-center p-8 rounded-2xl bg-white border border-gray-200 shadow-inner">
                  <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500 mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-orange-600 font-medium uppercase tracking-wider">
                    Core Competency
                  </p>
                </div>

                {/* Content Box with Detailed Skills & Descriptions */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {cat.subtitle}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Skills Grid with Explanations */}
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3">
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
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}