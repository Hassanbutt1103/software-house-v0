"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Zap, Target, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const coreValues = [
  {
    title: "Relentless Quality Commitment",
    subtitle: "No shortcuts, no bloated code—only enterprise-grade engineering.",
    description:
      "We believe that every digital product we ship must meet the highest standards of performance, security, and scalability. From clean TypeScript architectures and type-safe database queries to pixel-perfect UI/UX designs and bulletproof VPS security hardening, quality is embedded in every phase of our workflow.",
    points: [
      "Strict code reviews and type-safe development standards",
      "Rigorous quality assurance (QA) and multi-device testing",
      "Performance optimization for lightning-fast load times",
      "Zero reliance on slow, bloated legacy frameworks",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Transparency & Client Trust",
    subtitle: "Absolute honesty in communication, pricing, and timelines.",
    description:
      "Trust is the cornerstone of every successful partnership. We maintain complete transparency throughout the project lifecycle—from realistic milestone timelines and upfront scope discussions to clear pricing models. You will always know what is being built, how it works, and when it will launch.",
    points: [
      "Open and direct communication via agile sprints",
      "Transparent milestone tracking and progress reporting",
      "Honest technical feasibility assessments before starting",
      "Clear, predictable pricing without hidden surprises",
    ],
    icon: HeartHandshake,
  },
  {
    title: "Agility & Continuous Innovation",
    subtitle: "Staying ahead of the curve with modern technologies and smart workflows.",
    description:
      "The tech landscape evolves rapidly, and so do we. We constantly refine our technical stack—leveraging Next.js, modern backend frameworks, serverless edge databases, and automated deployment pipelines—to ensure your business stays ahead of the competition with future-proof digital infrastructure.",
    points: [
      "Continuous adoption of modern JavaScript/TypeScript standards",
      "Exploring cutting-edge tools like AI integrations and edge databases",
      "Rapid problem-solving and adaptable engineering workflows",
      "Long-term scalability planning for growing enterprises",
    ],
    icon: Zap,
  },
  {
    title: "Accountability & Long-Term Partnership",
    subtitle: "We don't just deliver projects; we build lasting digital ecosystems.",
    description:
      "Our relationship doesn’t end at deployment. We stand firmly behind the software we engineer. Whether it is ongoing infrastructure maintenance, 24/7 server monitoring, or scaling features as your user base expands, we act as your dedicated technical partner for the long haul.",
    points: [
      "Comprehensive post-launch support and infrastructure care",
      "Proactive server health checks and automated backups",
      "Dedicated assistance for scaling applications",
      "Commitment to your long-term business growth",
    ],
    icon: Target,
  },
];

export default function ValuesAndEthicsPage() {
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
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">About Us / Values & Ethics</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Our Core Principles & Work Culture
          </h1>
          <div className="mt-4 h-1.5 w-24 mx-auto rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover the ethical foundation, quality commitments, and professional standards that guide every line of code we write and every relationship we build.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Values Detailed Cards Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-16">
        {coreValues.map((value, index) => {
          const Icon = value.icon;

          return (
            <motion.div
              key={value.title}
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
                    {value.title}
                  </h2>
                  <h3 className="text-sm font-semibold text-orange-600 mt-1">
                    {value.subtitle}
                  </h3>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                {value.description}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {value.points.map((point, pIdx) => (
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