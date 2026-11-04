"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket, CheckCircle2 } from "lucide-react";

const detailedSteps = [
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

export function OurProcess() {
  return (
    <section className="border-t border-gray-200 bg-white text-gray-900 py-24 relative z-10">
      <div className="max-w-8xl mx-auto px-4 md:px-16">
        
        {/* Section Header */}
        <motion.header
          className="mb-20 max-w-3xl text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Step-by-Step Execution
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
            Our Detailed Development Lifecycle
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            We don't just write code; we engineer comprehensive digital ecosystems. Here is how we transform your vision into a secure, scalable, and market-ready production product.
          </p>
        </motion.header>

        {/* Detailed Steps Container */}
        <div className="space-y-16">
          {detailedSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl transition-all ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left/Right Icon & Number Box */}
                <div className="w-full lg:w-1/3 flex flex-col items-start justify-center p-8 rounded-2xl bg-white border border-gray-200 shadow-inner">
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-5xl font-black text-gray-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-orange-600 font-medium uppercase tracking-wider">
                    Phase {step.number} of 04
                  </p>
                </div>

                {/* Content Box with Detailed Points */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {step.subtitle}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Bullet points list */}
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
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}