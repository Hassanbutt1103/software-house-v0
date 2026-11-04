"use client";

import { motion } from "framer-motion";
import { Handshake, Cloud, Cpu, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const partnershipModels = [
  {
    title: "Technology & Cloud Alliances",
    subtitle: "Partnering with industry leaders to deliver robust infrastructure.",
    description:
      "To build enterprise-grade applications, we collaborate with world-class cloud providers, database architects, and edge network leaders. By leveraging certified tools and optimized platforms, we ensure your software runs with maximum security, speed, and 99.9% uptime.",
    points: [
      "Cloud infrastructure integration (VPS and Dedicated Servers)",
      "Global edge caching and security shielding via Cloudflare",
      "Advanced database partnerships (PostgreSQL, Neon, Supabase)",
      "High-performance web server optimization (Caddy & Nginx)",
    ],
    icon: Cloud,
  },
  {
    title: "Agency & Enterprise Collaborations",
    subtitle: "Your reliable white-label and technical execution partner.",
    description:
      "We frequently partner with digital marketing agencies, UI/UX studios, and overseas enterprises who need expert full-stack JavaScript/TypeScript engineering. We act as your behind-the-scenes technical powerhouse, delivering clean code on strict deadlines while maintaining your brand integrity.",
    points: [
      "White-label full-stack development and code audits",
      "Seamless integration with external design and product teams",
      "Strict NDA compliance and intellectual property protection",
      "Agile sprint collaboration tailored to agency workflows",
    ],
    icon: Handshake,
  },
  {
    title: "Startup & Scale-up Ecosystems",
    subtitle: "Empowering founders with scalable MVP development and technical roadmaps.",
    description:
      "We love working with ambitious founders and startups. Beyond just writing code, we partner with you to refine your product architecture, select the optimal tech stack, build high-converting MVPs, and scale your infrastructure as your user base expands rapidly.",
    points: [
      "Rapid MVP design and full-stack development",
      "Scalable database architecture (MongoDB, PostgreSQL, Redis)",
      "Long-term technical advisory and roadmap planning",
      "Post-launch maintenance and feature scaling partnerships",
    ],
    icon: Cpu,
  },
  {
    title: "Security & Quality Partnerships",
    subtitle: "Ensuring uncompromising data integrity and compliance.",
    description:
      "In today's digital landscape, security is paramount. We partner with security standard frameworks and automated monitoring networks to safeguard your application against vulnerabilities, unauthorized access, and data breaches from day one.",
    points: [
      "Automated server firewall and security hardening (UFW/fail2ban)",
      "Encrypted data transmission and secure REST APIs",
      "Proactive vulnerability audits and automated backups",
      "Compliance-ready data handling protocols",
    ],
    icon: ShieldCheck,
  },
];

export default function PartnershipsPage() {
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
            <Handshake className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">About Us / Partnerships</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Strategic Partnerships & Ecosystem
          </h1>
          <div className="mt-4 h-1.5 w-24 mx-auto rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover how we collaborate with technology leaders, digital agencies, and ambitious startups to engineer powerful, scalable, and secure digital solutions.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Partnership Models Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-16">
        {partnershipModels.map((model, index) => {
          const Icon = model.icon;

          return (
            <motion.div
              key={model.title}
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
                    {model.title}
                  </h2>
                  <h3 className="text-sm font-semibold text-orange-600 mt-1">
                    {model.subtitle}
                  </h3>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                {model.description}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {model.points.map((point, pIdx) => (
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