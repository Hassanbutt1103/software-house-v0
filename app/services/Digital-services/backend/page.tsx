"use client";

import { motion } from "framer-motion";
import { Server, CheckCircle2, ArrowRight, Database, Cpu, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";

const backendDevFeatures = [
  {
    title: "RESTful & GraphQL API Architecture",
    desc: "Design and build fast, secure, and robust APIs using Node.js, Express, Hono, and NestJS to seamlessly power your web and mobile applications.",
    icon: Server,
  },
  {
    title: "Database Design & Management",
    desc: "Architect scalable relational and NoSQL databases (PostgreSQL, MongoDB, Supabase, Redis) optimized for high performance and data integrity.",
    icon: Database,
  },
  {
    title: "Secure Authentication & Authorization",
    desc: "Implement rock-solid security mechanisms including JWT, OAuth2, role-based access control (RBAC), and encrypted data storage.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Infrastructure & Deployment",
    desc: "Configure Linux servers (Ubuntu), Docker containers, Caddy/Nginx reverse proxies, and cloud storage for high availability and zero downtime.",
    icon: Globe,
  },
];

const deliverables = [
  "Custom Node.js / Express / Hono backend services built with TypeScript",
  "Optimized database schemas, migrations, and indexing (PostgreSQL, MongoDB)",
  "Secure JWT/OAuth authentication with encrypted password hashing",
  "Real-time event handling using WebSockets / Socket.io",
  "Payment gateway and third-party API integrations (Stripe, GoPayFast, etc.)",
  "Production deployment on VPS / cloud servers with automated SSL and PM2",
];

export default function BackendDevelopmentPage() {
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
            Service Details / Backend Development
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Robust APIs & Scalable Server Architecture
          </h1>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We engineer high-performance backend systems, secure databases, and scalable APIs that act as the invincible engine for your web and mobile applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Build Your Backend <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Core Offerings Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Our Backend Development Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {backendDevFeatures.map((item, index) => {
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
            Key Deliverables & Server Setup
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            We handle everything from clean database architecture to secure production deployment on cloud servers.
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