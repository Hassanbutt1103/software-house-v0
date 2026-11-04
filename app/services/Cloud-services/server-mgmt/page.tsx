"use client";

import { motion } from "framer-motion";
import { Server, CheckCircle2, ArrowRight, ShieldCheck, Activity, HardDrive, Cpu } from "lucide-react";
import Link from "next/link";

const serverManagementFeatures = [
  {
    title: "Proactive Server Monitoring & Health Checks",
    desc: "24/7 monitoring of CPU utilization, RAM usage, disk space, and network traffic to prevent downtime before it occurs.",
    icon: Activity,
  },
  {
    title: "Security Hardening & Firewall Configuration",
    desc: "Setting up robust UFW firewalls, SSH key-based authentication, fail2ban protection, and automated security patches.",
    icon: ShieldCheck,
  },
  {
    title: "Automated Backups & Disaster Recovery",
    desc: "Configuring automated daily backups for databases and application files to secure storage solutions with quick restore protocols.",
    icon: HardDrive,
  },
  {
    title: "Zero-Downtime Updates & Process Management",
    desc: "Managing PM2, Docker containers, and system dependencies to ensure smooth, uninterrupted application reloads.",
    icon: Cpu,
  },
];

const deliverables = [
  "Comprehensive initial server audit and security hardening",
  "24/7 uptime monitoring and automated alert systems",
  "Automated database and file system backup configuration",
  "Software updates, kernel patches, and dependency management",
  "SSL certificate auto-renewal and HTTPS enforcement",
  "Performance tuning for high-traffic web applications",
];

export default function ServerManagementPage() {
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
            Service Details / Server Management
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Reliable VPS & Cloud Server Management
          </h1>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Keep your infrastructure secure, optimized, and online 24/7. We handle server configuration, security hardening, performance tuning, and continuous monitoring so you can focus on scaling your business.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Secure Your Servers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Core Offerings Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Our Server Management Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serverManagementFeatures.map((item, index) => {
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
            Management Deliverables & Routine Care
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            We provide ongoing administrative oversight to guarantee maximum availability and bulletproof defense against server vulnerabilities.
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