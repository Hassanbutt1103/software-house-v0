"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const detailedProcessSteps = [
  {
    number: "01",
    title: "Discovery, Research & Strategy",
    subtitle: "Understanding your business goals and technical requirements from scratch.",
    description:
      "Before writing a single line of code, we dive deep into your target audience, market competitors, and core objectives. We map out a comprehensive project roadmap, define system architectures, select the optimal tech stack, and establish strict milestones to ensure absolute clarity.",
    points: [
      "Requirement analysis and scope finalization",
      "System architecture and database planning",
      "Tech stack selection (Next.js, Node.js, PostgreSQL)",
      "Milestone scheduling and deadline mapping",
    ],
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "UI/UX Architecture & Wireframing",
    subtitle: "Creating intuitive, high-converting, and user-centric interfaces.",
    description:
      "Design is more than just aesthetics; it is about functionality and user retention. Our UI/UX engineers craft interactive wireframes, design systems, and responsive prototypes that guarantee seamless navigation and an engaging visual experience across all devices.",
    points: [
      "Low-fi & high-fi wireframes and user flows",
      "Modern, accessible, and brand-aligned UI design",
      "Interactive prototypes via Figma",
      "Design systems and component library setup",
    ],
    icon: Palette,
  },
  {
    number: "03",
    title: "Agile Development & Coding",
    subtitle: "Writing clean, scalable, and production-grade software code.",
    description:
      "This is where the magic happens. Using modern tooling like Next.js, TypeScript, Tailwind CSS, and robust backend architectures, our developers build secure, high-performance applications. We follow clean code practices, modular component structures, and rigorous code reviews.",
    points: [
      "Full-stack development with Next.js & React",
      "Secure API integration, authentication & role management",
      "State management, caching, and performance tuning",
      "Regular progress updates and agile sprints",
    ],
    icon: Code,
  },
  {
    number: "04",
    title: "Rigorous Testing & Cloud Deployment",
    subtitle: "Ensuring zero bugs, optimal speed, and smooth production launch.",
    description:
      "Post-development, your application goes through strict quality assurance (QA). We test for responsiveness, security vulnerabilities, API response times, and cross-browser compatibility. Once perfected, we deploy it to high-speed cloud infrastructure with automated CI/CD pipelines.",
    points: [
      "Comprehensive debugging and cross-device testing",
      "Security hardening and SSL configuration",
      "Cloud server setup (VPS, Caddy, Nginx, Cloudflare)",
      "Post-launch monitoring and long-term maintenance support",
    ],
    icon: Rocket,
  },
];

export default function OurProcessPage() {
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
            Company / Our Process
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            How We Transform Vision Into Reality
          </h1>
          <div className="mt-4 h-1.5 w-24 mx-auto rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Scroll down to explore our step-by-step development lifecycle, meticulously designed to alternate seamlessly and deliver enterprise-grade digital products.
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
          {detailedProcessSteps.map((step, index) => {
            const Icon = step.icon;
            // Agar index even hai (0, 2) toh left par card ayega, odd (1, 3) toh right par
            const isEven = index % 2 === 0;

            return (
              <div 
                key={step.number} 
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                
                {/* Step Card Content */}
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
                      {step.number}
                    </span>
                  </div>

                  <span className="text-xs text-orange-600 font-semibold uppercase tracking-wider block mb-1">
                    Phase {step.number} of 04
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4">
                    {step.subtitle}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-gray-700 font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Center Badge / Number Node on Line (Desktop Only) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-orange-500 items-center justify-center shadow-lg z-10 text-orange-600 font-black text-lg">
                  {step.number}
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