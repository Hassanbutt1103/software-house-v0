"use client";

import { motion } from "framer-motion";
import { Cloud, CheckCircle2, ArrowRight, Database, Server, RefreshCcw, ShieldCheck } from "lucide-react";
import Link from "next/link";

const migrationFeatures = [
  {
    title: "Comprehensive Assessment & Strategy",
    desc: "Evaluating your existing legacy infrastructure, application codebase, and databases to build a foolproof cloud migration roadmap.",
    icon: Cloud,
  },
  {
    title: "Zero-Downtime Application Migration",
    desc: "Seamlessly transferring your web apps and backend services to high-performance VPS or cloud environments without disrupting active users.",
    icon: RefreshCcw,
  },
  {
    title: "Database & Object Storage Transfer",
    desc: "Securely migrating relational and NoSQL databases (PostgreSQL, MongoDB) alongside asset storage with absolute data integrity.",
    icon: Database,
  },
  {
    title: "Post-Migration Optimization & DNS Routing",
    desc: "Configuring reverse proxies, SSL certificates, CDN routing, and performance tuning to ensure peak efficiency post-migration.",
    icon: ShieldCheck,
  },
];

const deliverables = [
  "Detailed cloud readiness assessment and migration blueprint",
  "Zero-downtime execution plan for production applications",
  "Secure data transfer for databases, files, and user records",
  "DNS updates, traffic rerouting, and SSL certificate setup",
  "Post-migration performance testing, debugging, and verification",
  "Complete infrastructure documentation and technical handover",
];

export default function CloudMigrationPage() {
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
            Service Details / Cloud Migration
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Seamless & Secure Cloud Migration Services
          </h1>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Modernize your infrastructure and scale without limits. We safely transition your legacy applications, databases, and digital assets to high-performance cloud environments with zero data loss and minimal downtime.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Plan Your Migration <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Core Offerings Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Our Cloud Migration Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {migrationFeatures.map((item, index) => {
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
            Migration Deliverables & Guarantees
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            We manage the entire migration pipeline safely, ensuring your data is encrypted, your apps are optimized, and your systems run flawlessly.
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