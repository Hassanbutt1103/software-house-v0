"use client";

import { motion } from "framer-motion";
import { Cloud, CheckCircle2, ArrowRight, Server, ShieldCheck, Cpu, HardDrive } from "lucide-react";
import Link from "next/link";

const cloudFeatures = [
  {
    title: "Dedicated VPS Server Setup & Hardening",
    desc: "Provisioning and configuring high-performance Virtual Private Servers with complete root access, security firewalls, and SSH hardening.",
    icon: Server,
  },
  {
    title: "Reverse Proxy, Caddy & Nginx Configuration",
    desc: "Setting up lightning-fast web servers, automated SSL certificates, load balancing, and secure traffic routing for your applications.",
    icon: HardDrive,
  },
  {
    title: "Production Process Management (PM2 & Docker)",
    desc: "Ensuring zero-downtime application deployments, process monitoring, and containerized environments for robust backend execution.",
    icon: Cpu,
  },
  {
    title: "Global Edge Caching & Cloudflare CDN",
    desc: "Accelerating asset delivery, implementing DDoS protection, object storage (R2), and global edge caching for ultimate performance.",
    icon: ShieldCheck,
  },
];

const deliverables = [
  "Custom VPS architecture planning and deployment",
  "Automated HTTPS configuration and SSL certificate management",
  "PM2 process manager setup for zero-downtime Node.js restarts",
  "Caddy & Nginx reverse proxy configuration and routing",
  "Cloudflare CDN integration, DDoS mitigation, and edge security",
  "Regular server health monitoring, backups, and maintenance guides",
];

export default function CloudInfrastructurePage() {
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
            Service Details / Cloud Infrastructure
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Secure & Scalable Cloud Setup & DevOps
          </h1>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We build enterprise-grade cloud environments optimized for speed, reliability, and security. From VPS server management to global edge CDNs, we ensure your applications stay online 24/7.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Setup Your Infrastructure <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Core Offerings Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Our Cloud & DevOps Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cloudFeatures.map((item, index) => {
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
            Infrastructure Deliverables & Specifications
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Every cloud setup includes bulletproof security hardening, automated deployments, and high-performance routing.
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