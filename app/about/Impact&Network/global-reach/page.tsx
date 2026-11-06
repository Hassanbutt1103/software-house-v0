"use client";

import { motion } from "framer-motion";
import { Globe, Server, Users, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const globalImpactStats = [
  {
    number: "99.9%",
    label: "Uptime & Reliability",
    desc: "Guaranteed high availability across our deployed global cloud infrastructure.",
  },
  {
    number: "Global",
    label: "Edge CDN Routing",
    desc: "Lightning-fast asset delivery and ultra-low latency via Cloudflare edge nodes.",
  },
  {
    number: "100%",
    label: "Type-Safe Codebase",
    desc: "Ensuring zero runtime exceptions and robust enterprise scalability.",
  },
  {
    number: "24/7",
    label: "Infrastructure Monitoring",
    desc: "Continuous health checks, automated backups, and proactive server care.",
  },
];

const networkPillars = [
  {
    title: "Global Edge Content Delivery",
    subtitle: "Bringing your application closer to users worldwide.",
    description:
      "We integrate global CDNs and edge caching solutions to distribute your web application's static and dynamic assets across hundreds of edge locations. This guarantees that whether a user accesses your platform from North America, Europe, or Asia, they experience instant load times and zero latency.",
    points: [
      "Global edge caching with Cloudflare",
      "Optimized static and media asset distribution",
      "DDoS mitigation and global security shielding",
      "Instantaneous DNS propagation and routing",
    ],
    icon: Globe,
  },
  {
    title: "High-Performance Cloud Infrastructure",
    subtitle: "Robust VPS servers and automated server management.",
    description:
      "Our deployment architecture relies on dedicated Virtual Private Servers (VPS) optimized with high-performance reverse proxies (Caddy/Nginx) and zero-downtime process managers (PM2). We manage scalable cloud environments that effortlessly handle traffic surges without breaking a sweat.",
    points: [
      "Secure VPS setup with UFW firewalls and fail2ban",
      "Automated SSL certificate generation and renewal",
      "Zero-downtime application reloading and updates",
      "Scalable backend resource allocation",
    ],
    icon: Server,
  },
  {
    title: "Cross-Border Client Collaboration",
    subtitle: "Delivering enterprise-grade software to international markets.",
    description:
      "We operate in a borderless digital economy. Through structured agile sprints, transparent milestone reporting, and clear communication channels, we successfully partner with international startups, businesses, and founders to bring complex software visions to life.",
    points: [
      "International standard agile development workflows",
      "Transparent milestone tracking and sprint updates",
      "Seamless remote collaboration and code handovers",
      "Long-term post-launch maintenance partnerships",
    ],
    icon: Users,
  },
  {
    title: "Resilient Data & Security Networks",
    subtitle: "Absolute data integrity and bulletproof security protocols.",
    description:
      "Security is never an afterthought. We implement strict encryption standards, secure database connections (PostgreSQL, MongoDB, Redis), and automated daily backup protocols to protect your business assets and user privacy across all network layers.",
    points: [
      "Encrypted database connections and queries",
      "Automated daily backup and disaster recovery plans",
      "Strict role-based access control (RBAC)",
      "Proactive vulnerability audits and patching",
    ],
    icon: ShieldCheck,
  },
];

export default function GlobalReachPage() {
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
            <Globe className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">Impact & Network / Global Reach</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Engineering Global Impact & Digital Reach
          </h1>
          <div className="mt-4 h-1.5 w-24 mx-auto rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover how our high-performance cloud architectures, edge CDN networks, and international engineering standards empower businesses to scale worldwide.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Expand Your Reach <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {globalImpactStats.map((stat, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sIdx * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center shadow-sm"
            >
              <span className="text-3xl md:text-4xl font-black text-orange-500 block mb-2">
                {stat.number}
              </span>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Network Pillars Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-16">
        {networkPillars.map((pillar, index) => {
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