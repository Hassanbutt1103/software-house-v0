"use client";

import { motion } from "framer-motion";
import { Leaf, Code2, Users, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const impactPillars = [
  {
    title: "Open-Source Contributions & Collaboration",
    subtitle: "Giving back to the developer community that powers modern web engineering.",
    description:
      "We strongly believe in the power of open source. Much of the technology stack we rely on—from Next.js and Node.js to database connectors and UI libraries—is built by the community. We actively contribute bug fixes, maintain utility packages, and share reusable modular components to help developers worldwide build better software.",
    points: [
      "Contributing bug fixes and patches to open-source repositories",
      "Sharing reusable React/Next.js UI components and boilerplates",
      "Participating in developer discussions, code reviews, and forums",
      "Supporting transparent, community-driven software standards",
    ],
    icon: Code2,
  },
  {
    title: "Empowering Local Tech Communities",
    subtitle: "Mentoring upcoming developers and fostering digital entrepreneurship.",
    description:
      "We are deeply committed to uplifting our local and regional tech ecosystems. By mentoring aspiring full-stack developers, sharing real-world software engineering best practices, and guiding student engineers, we help bridge the gap between academic theory and production-grade industry standards.",
    points: [
      "Mentoring junior and aspiring full-stack software engineers",
      "Conducting knowledge-sharing sessions on TypeScript and Next.js",
      "Guiding local startups on technical roadmaps and MVP strategies",
      "Fostering a collaborative culture of continuous learning",
    ],
    icon: Users,
  },
  {
    title: "Sustainable & Energy-Efficient Code Architecture",
    subtitle: "Writing optimized software that minimizes carbon footprint and server load.",
    description:
      "Unoptimized, bloated code consumes excessive server CPU cycles and electricity. We engineer lightweight, highly optimized applications utilizing server-side rendering (SSR), efficient database indexing, and global edge caching via Cloudflare. Faster load times mean lower server energy consumption and a greener digital footprint.",
    points: [
      "Optimized query structures and database indexing to reduce CPU load",
      "Edge caching and CDN distribution to minimize redundant server requests",
      "Eliminating bloated libraries and heavy unnecessary scripts",
      "Energy-conscious cloud infrastructure configuration",
    ],
    icon: Leaf,
  },
  {
    title: "Ethical AI & Modern Technological Growth",
    subtitle: "Leveraging smart automation responsibly and ethically.",
    description:
      "As we explore local AI execution, smart automation workflows, and modern development tools, we prioritize ethical practices. We ensure that our technological advancements respect data privacy, maintain rigorous security standards, and serve to enhance human creativity and productivity.",
    points: [
      "Prioritizing user data privacy and strict security compliance",
      "Exploring efficient local AI models for translation and automation",
      "Responsible implementation of automated testing and CI/CD pipelines",
      "Building resilient systems designed for long-term ethical use",
    ],
    icon: Cpu,
  },
];

export default function SustainabilityPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-600 mb-4">
            <Leaf className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">About Us / Sustainability & Social Impact</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Sustainability & Social Impact
          </h1>
          <div className="mt-4 h-1.5 w-24 mx-auto rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover how we contribute to open-source ecosystems, empower tech communities, and engineer energy-efficient, sustainable digital architectures.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Join Our Mission <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Impact Pillars Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-16">
        {impactPillars.map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {pillar.title}
                  </h2>
                  <h3 className="text-sm font-semibold text-orange-600 mt-1">
                    {pillar.subtitle}
                  </h3>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                {pillar.description}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillar.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-gray-700 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}