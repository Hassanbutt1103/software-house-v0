"use client";

import { motion } from "framer-motion";
import { Code, CheckCircle2, ArrowRight, Layers, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";

const webDevFeatures = [
  {
    title: "Full-Stack Custom Web Applications",
    desc: "Tailor-made web apps built from scratch using Next.js, React, and TypeScript to match your exact business logic.",
    icon: Code,
  },
  {
    title: "High-Performance & SEO Optimization",
    desc: "Server-side rendering (SSR) and static generation to ensure blazing-fast load times and top search engine rankings.",
    icon: Cpu,
  },
  {
    title: "Scalable Backend & Secure APIs",
    desc: "Robust Node.js, Express, and PostgreSQL databases designed to handle high traffic securely and efficiently.",
    icon: Layers,
  },
  {
    title: "Enterprise Security & Maintenance",
    desc: "Advanced data encryption, role-based authentication, and continuous post-launch performance monitoring.",
    icon: ShieldCheck,
  },
];

const deliverables = [
  "Responsive layout for mobile, tablet, and desktop",
  "Custom UI/UX implementation with Tailwind CSS & Framer Motion",
  "Seamless API integrations and third-party services",
  "Automated testing, debugging, and cross-browser compatibility",
  "Deployment on high-speed VPS with Caddy and Cloudflare CDN",
  "Complete source code ownership and technical handover",
];

export default function WebDevelopmentPage() {
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
            Service Details / Web Development
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Production-Grade Web Development Services
          </h1>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We engineer high-performance, scalable, and secure web applications tailored to elevate your business. From dynamic enterprise platforms to modern SaaS solutions, we bring your vision to life.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Core Offerings Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          What We Deliver in Web Development
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {webDevFeatures.map((item, index) => {
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
            Key Deliverables & Specifications
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Every web development project we undertake includes standard enterprise-grade deliverables to ensure long-term stability and success.
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