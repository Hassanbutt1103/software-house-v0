"use client";

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqsList = [
  {
    question: "What technologies and tech stack do you use for development?",
    answer:
      "We specialize in the modern JavaScript/TypeScript ecosystem. For frontend, we use Next.js, React, TypeScript, and Tailwind CSS with Framer Motion animations. For backend and APIs, we deploy Node.js, Express, and Hono. Our database expertise spans PostgreSQL, Prisma ORM, MongoDB, CassandraDB, SQLite, Redis, and serverless edge databases like Neon, Supabase, and Cloudflare D1.",
  },
  {
    question: "Who manages the server hosting and cloud infrastructure?",
    answer:
      "We offer flexible hosting management! We can completely manage your cloud infrastructure, VPS setup, security hardening, Caddy/Nginx routing, and 24/7 uptime monitoring for you. Alternatively, if you prefer to use your own outside hosting provider, cloud account, or dedicated server, we are fully equipped to deploy and configure your application there as well.",
  },
  {
    question: "How do you handle cloud hosting and server management (if managed by us)?",
    answer:
      "If we manage it, we deploy applications on high-performance Virtual Private Servers (VPS) with robust security hardening, UFW firewalls, and fail2ban. We utilize Caddy or Nginx as reverse proxies for automated SSL certificates, PM2 for zero-downtime process management, and Cloudflare CDN for global edge caching and DDoS protection.",
  },
  {
    question: "What is your typical project development workflow?",
    answer:
      "Our workflow follows 4 core phases: 1) Discovery, Research & Architecture planning; 2) UI/UX wireframing and interactive prototyping via Figma; 3) Agile full-stack coding with regular sprint updates; and 4) Rigorous QA testing followed by secure cloud deployment.",
  },
  {
    question: "Can you migrate my existing legacy application to the cloud?",
    answer:
      "Yes! We provide seamless, zero-downtime cloud migration services. We audit your legacy codebase and databases, plan a bulletproof migration roadmap, securely transfer your data (PostgreSQL, MongoDB, etc.) with 100% integrity, and configure optimal DNS and CDN routing.",
  },
  {
    question: "What are your payment terms and project pricing models?",
    answer:
      "Our pricing depends on project scope, technical complexity, and custom requirements. Typically, we follow a milestone-based payment structure (e.g., initial deposit upon scope finalization, interim milestone payments, and final handover upon deployment).",
  },
  {
    question: "Do you offer post-launch maintenance and support?",
    answer:
      "Absolutely. We offer long-term infrastructure maintenance, 24/7 uptime monitoring, automated backup configurations, security updates, and performance optimization to ensure your digital product scales smoothly as your business grows.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <HelpCircle className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">Support & FAQs</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Frequently Asked Questions
          </h1>
          <div className="mt-4 h-1.5 w-24 mx-auto rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Find answers to common questions about our engineering standards, tech stack, cloud infrastructure, hosting flexibility, and project collaboration process.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Have a Custom Question? <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="space-y-4">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden transition-all shadow-sm hover:border-orange-500/40"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl bg-orange-500/10 text-orange-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-orange-500 text-white" : ""}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}