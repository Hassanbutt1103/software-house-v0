"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Compass, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const storySections = [
  {
    title: "The Vision & Foundation",
    subtitle: "Rooted in a passion for clean code and high-performance engineering.",
    description:
      "Every great venture starts with a clear purpose. We established our agency with a singular vision: to bridge the gap between complex enterprise software requirements and lightning-fast, user-centric web applications. We stepped away from bloated templates and sluggish legacy systems to build truly robust digital products completely from scratch.",
    points: [
      "Founded with an uncompromising focus on modern full-stack development",
      "Commitment to type-safe architectures (TypeScript & Next.js)",
      "Zero reliance on bloated, slow pre-built themes",
      "Building a culture of relentless technical precision and code quality",
    ],
    icon: Sparkles,
  },
  {
    title: "Mastering the Tech Stack & Scale",
    subtitle: "Evolving our toolkit to handle high-concurrency and advanced cloud systems.",
    description:
      "As digital demands grew, so did our technical capabilities. We mastered cutting-edge tools—ranging from Next.js and Tailwind CSS on the frontend to Node.js, PostgreSQL, and Redis on the backend. We didn't just build websites; we engineered scalable cloud platforms optimized for global speed, security, and zero downtime.",
    points: [
      "Adoption of Next.js for high-performance server-side rendering and SEO",
      "Robust relational database architectures with Prisma & PostgreSQL",
      "Advanced VPS server hardening, Caddy, and Nginx traffic routing",
      "Seamless integration of global edge CDNs like Cloudflare for speed",
    ],
    icon: Target,
  },
  {
    title: "Client-Centric Agility & Execution",
    subtitle: "Transforming ambitious business ideas into production-grade reality.",
    description:
      "Our growth is measured entirely by the success of our clients. By implementing strict agile sprint methodologies, transparent milestone tracking, and iterative UI/UX wireframing, we turned complex business challenges into seamless, high-converting digital applications right on schedule.",
    points: [
      "Structured agile sprints with transparent milestone reporting",
      "Deep UI/UX discovery and prototyping before writing code",
      "Rigorous quality assurance (QA) and multi-device cross-testing",
      "Strict adherence to pre-agreed project launch timelines",
    ],
    icon: Compass,
  },
  {
    title: "The Future & Continuous Innovation",
    subtitle: "Pushing technical boundaries with modern architectures and smart workflows.",
    description:
      "The digital landscape never stands still, and neither do we. Today, we continue to pioneer modern web architectures, secure payment gateway integrations, automated CI/CD pipelines, and immersive UI/UX experiences. We are here to partner with forward-thinking enterprises for the long haul.",
    points: [
      "Exploring local AI execution and smart automation workflows",
      "Building scalable multi-vendor and multi-tenant SaaS platforms",
      "Continuous learning and adaptation of emerging web standards",
      "Long-term post-launch support, monitoring, and infrastructure scaling",
    ],
    icon: Rocket,
  },
];

export default function OurStoryPage() {
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
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            About Us / Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Engineered With Purpose, Driven By Excellence
          </h1>
          <div className="mt-4 h-1.5 w-24 mx-auto rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover our journey from a dedicated development studio to a trusted engineering partner building high-performance digital ecosystems.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main Narrative Content Blocks */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-16">
        {storySections.map((section, index) => {
          const Icon = section.icon;

          return (
            <motion.div
              key={section.title}
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
                    {section.title}
                  </h2>
                  <h3 className="text-sm font-semibold text-orange-600 mt-1">
                    {section.subtitle}
                  </h3>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                {section.description}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.points.map((point, pIdx) => (
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