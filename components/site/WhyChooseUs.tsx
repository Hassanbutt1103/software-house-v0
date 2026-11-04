"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock, Headphones, CheckCircle2 } from "lucide-react";

const detailedStrengths = [
  {
    number: "01",
    title: "Scalable Architecture & Responsive Performance",
    subtitle: "Built to perform seamlessly across all devices and grow with your traffic.",
    description:
      "We don't just build websites; we engineer robust digital products designed for high concurrency and heavy user loads. From mobile phones to widescreen desktops, every layout is meticulously optimized for fluid responsiveness, ultra-fast page loads, and zero layout shifts.",
    points: [
      "Mobile-first responsive design principles",
      "Optimized asset delivery and fast Cumulative Layout Shift (CLS)",
      "Scalable backend architectures ready for traffic spikes",
      "Cross-browser and multi-device compatibility testing",
    ],
    icon: Zap,
  },
  {
    number: "02",
    title: "Modern Tech Stack & Enterprise Security",
    subtitle: "Leveraging cutting-edge tools to ensure safety, speed, and reliability.",
    description:
      "Security and performance go hand in hand. By utilizing modern, type-safe frameworks like Next.js and TypeScript, alongside secure database architectures and encrypted server environments, we protect your business data and user privacy from evolving cyber threats.",
    points: [
      "Type-safe development with TypeScript and React",
      "Advanced data encryption and secure API authentication",
      "Proactive vulnerability testing and code auditing",
      "GDPR and accessibility (a11y) compliance standards",
    ],
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Strict On-Time Delivery & Agile Sprints",
    subtitle: "Valuing your time through structured planning and transparent milestones.",
    description:
      "Time to market is critical for any business. We operate on strict agile methodologies, breaking down complex projects into manageable sprints. You receive regular progress updates, transparent milestone tracking, and a firm guarantee that your project will launch on schedule.",
    points: [
      "Structured project roadmaps and clear phase timelines",
      "Regular milestone reviews and transparent progress reports",
      "Dedicated project management to prevent scope creep",
      "Guaranteed adherence to pre-agreed delivery dates",
    ],
    icon: Clock,
  },
  {
    number: "04",
    title: "Dedicated Post-Launch Support & Maintenance",
    subtitle: "A long-term partnership that extends far beyond initial deployment.",
    description:
      "Launching your application is just the beginning. We provide comprehensive post-launch care, continuous performance monitoring, security updates, and feature scaling. Whenever your business evolves, our team is right here to scale your digital infrastructure accordingly.",
    points: [
      "24/7 uptime monitoring and server health tracking",
      "Regular software updates, patches, and dependency upgrades",
      "On-demand feature additions and UI enhancements",
      "Direct technical assistance and developer support",
    ],
    icon: Headphones,
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-t border-gray-200 bg-white text-gray-900 py-24 relative z-10">
      <div className="max-w-8xl mx-auto px-4 md:px-16">
        
        {/* Section Header */}
        <motion.header
          className="mb-20 max-w-3xl text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Our Core Strengths
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
            Why Partner With Us?
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            We combine rigorous technical standards, aesthetic design precision, and steadfast reliability to ensure your digital venture outperforms the competition.
          </p>
        </motion.header>

        {/* Detailed Strengths Container */}
        <div className="space-y-16">
          {detailedStrengths.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl transition-all ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left/Right Icon & Number Box */}
                <div className="w-full lg:w-1/3 flex flex-col items-start justify-center p-8 rounded-2xl bg-white border border-gray-200 shadow-inner">
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-5xl font-black text-gray-300">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-orange-600 font-medium uppercase tracking-wider">
                    Core Advantage
                  </p>
                </div>

                {/* Content Box with Detailed Points */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {item.subtitle}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullet points list */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-gray-700 font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}