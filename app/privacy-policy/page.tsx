"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background pt-28 pb-20 relative overflow-hidden text-foreground">

      {/* VIP Glow Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 px-4 md:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Legal & Governance
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Last updated: November 2026 | OrangeDev
          </p>
        </div>

        {/* Content Box with Backdrop Blur */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card/60 border border-border/60 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl space-y-8 text-muted-foreground leading-relaxed"
        >
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
            <p>
              At <strong>OrangeDev</strong> ("we", "our", or "us"), we are committed to maintaining the highest standards of data protection and user privacy. This Privacy Policy outlines how we collect, process, and safeguard your personal information when you interact with our website or engage our software engineering, mobile application, and cloud architecture services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
            <p>
              We collect information that you explicitly provide to us during project consultations, contact form submissions, or contract execution:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong className="text-foreground">Contact Details:</strong> Full name, professional email address, and phone number.</li>
              <li><strong className="text-foreground">Project Specs:</strong> Company details, estimated budget ranges, and technical project requirements.</li>
              <li><strong className="text-foreground">System Logs:</strong> Standard HTTP request parameters and browser identifiers to maintain platform security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Data</h2>
            <p>
              Your data is exclusively utilized to facilitate client services and streamline technical execution:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Processing project inquiries and conducting feasibility assessments.</li>
              <li>Architecting, engineering, and deploying custom software solutions.</li>
              <li>Sending administrative communications, system status reports, and service invoices.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">4. Data Security & Storage</h2>
            <p>
              We implement enterprise-grade encryption, secure reverse proxies (Caddy/Nginx), and strict server access controls to ensure your project data remains confidential. We do not sell, rent, or lease client information to third-party brokers.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border/60">
            <h2 className="text-xl font-bold text-foreground">Contact & Inquiries</h2>
            <p>
              For questions regarding our privacy compliance or data protection practices, reach out directly:
            </p>
            <p className="font-medium text-foreground">
              Email: <span className="text-primary">1103butt@gmail.com</span>
            </p>
          </section>

        </motion.div>
      </div>

    </div>
  );
}