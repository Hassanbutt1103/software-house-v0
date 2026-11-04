"use client";

import { motion } from "framer-motion";
import { Users, Linkedin, Github, Twitter, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const leadershipTeam = [
  {
    name: "Hassan Munir Butt",
    role: "Founder & Full-Stack Lead",
    bio: "Passionate full-stack developer and system architect specializing in the JavaScript/TypeScript ecosystem. Expert in engineering high-performance web applications, scalable SaaS products, secure REST APIs, and production-grade cloud infrastructure (Node.js, Next.js, PostgreSQL, VPS, Caddy, and Cloudflare).",
    expertise: [
      "JavaScript & TypeScript",
      "Next.js & React.js",
      "Node.js & Express / Hono",
      "PostgreSQL & Prisma ORM",
      "MongoDB & NoSQL Databases",
      "VPS, Caddy & Cloudflare CDN",
      "Socket.io & Real-time Apps",
    ],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Arslan Younus && Hassan Mirza",
    role: "Design Lead & Prototyping",
    bio: "Dedicated UI/UX engineering unit focused on crafting human-centric digital experiences. Transforming complex business logic into intuitive, accessible, and high-converting interfaces using advanced design tooling, interactive prototyping, and scalable design systems.",
    expertise: [
      "Figma Prototyping & Wireframing",
      "Adobe Creative Suite (XD, Illustrator)",
      "Design Systems & Component Libraries",
      "User Research & Information Architecture",
      "Mobile & Web App UI/UX Design",
      "Accessibility & WCAG Compliance",
    ],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
];

const coreValues = [
  {
    title: "Technical Excellence",
    desc: "We write clean, type-safe JavaScript/TypeScript code that stands the test of heavy traffic and scalability.",
  },
  {
    title: "Uncompromising Quality",
    desc: "From pixel-perfect Figma prototypes to bulletproof server hardening, every layer is meticulously engineered.",
  },
  {
    title: "Transparent Collaboration",
    desc: "Clear milestone tracking, direct communication, and reliable project delivery schedules from concept to launch.",
  },
];

export default function LeadershipPage() {
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
            <Users className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">Leadership & Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mt-3">
            Meet the Minds Behind the Code
          </h1>
          <div className="mt-4 h-1.5 w-24 mx-auto rounded-full bg-orange-500" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We combine expert full-stack JavaScript engineering with intuitive UI/UX design to build robust, high-performance digital ecosystems.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
            >
              Collaborate With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Team Cards Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {leadershipTeam.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Avatar / Initial Box */}
              <div className="w-20 h-20 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-black text-2xl mb-6 border border-orange-500/20">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <h4 className="text-sm font-semibold text-orange-600 mb-4">
                {member.role}
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {member.expertise.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <a href={member.social.linkedin} className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-orange-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={member.social.github} className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-orange-500 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={member.social.twitter} className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-orange-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core Engineering Principles Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Engineering Principles</h2>
          <p className="text-gray-600 mt-2">The standards that guide every line of code and design we produce.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, vIdx) => (
            <div key={vIdx} className="p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm">
              <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500 w-fit mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}