"use client";

import { motion } from "framer-motion";
import { Palette, CheckCircle2, ArrowRight, Layout, Smartphone, Eye, Sparkles } from "lucide-react";
import Link from "next/link";

const uiuxFeatures = [
  {
    title: "User Research & Information Architecture",
    desc: "Understanding user behaviors, pain points, and business goals to structure intuitive user flows and information hierarchies.",
    icon: Eye,
  },
  {
    title: "Wireframing & Interactive Prototypes",
    desc: "Translating concepts into low-fi and high-fi interactive prototypes using Figma to test and validate usability early.",
    icon: Layout,
  },
  {
    title: "Modern Web & Mobile UI Design",
    desc: "Crafting visually stunning, accessible, and high-converting interfaces tailored for both web applications and mobile apps.",
    icon: Smartphone,
  },
  {
    title: "Design Systems & Component Libraries",
    desc: "Building scalable design systems with reusable components, typography guides, and color palettes for brand consistency.",
    icon: Sparkles,
  },
];

const deliverables = [
  "Comprehensive user research and persona mapping",
  "Low-fidelity and high-fidelity clickable Figma prototypes",
  "Responsive layouts optimized for desktop, tablet, and mobile",
  "Design systems, style guides, and reusable component libraries",
  "Accessibility (a11y) and WCAG compliance checks",
  "Seamless handoff documentation and assets for developers",
];

export default function UiUxDesignPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-left"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Service Details / UI/UX Design
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Intuitive & High-Converting UI/UX Engineering
          </h1>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We design engaging, human-centric digital experiences that bridge user needs with business goals. From complex SaaS dashboards to sleek mobile apps, we turn ideas into immersive interfaces.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Start Your Design Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Core Offerings Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Our UI/UX Design Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uiuxFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500 w-fit mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Key Deliverables Checklist */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-16">
        <div className="p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Design Deliverables & Handoff
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            We ensure complete alignment between design and development with organized files, component structures, and design tokens.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}