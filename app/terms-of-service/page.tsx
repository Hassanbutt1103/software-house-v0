"use client";

import { motion } from "framer-motion";

export default function TermsOfServicePage() {
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
            Terms & Conditions
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Terms of <span className="text-primary">Service</span>
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
            <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing this website or commissioning software services from <strong>OrangeDev</strong>, you agree to comply with and be bound by the following Terms of Service. If you do not agree with any portion of these terms, you should discontinue site usage immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">2. Scope of Services</h2>
            <p>
              OrangeDev specializes in custom software engineering, Next.js web application development, mobile applications, UI/UX design, and cloud infrastructure management. Deliverables, timelines, and technical requirements are governed by project-specific agreements or Statements of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">3. Intellectual Property Rights</h2>
            <p>
              All proprietary codebases, custom software components, and UI/UX assets crafted by OrangeDev for a specific client transfer to the client upon receipt of full contractual payment, unless explicitly structured as a licensed model.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">4. Payment Terms & Invoicing</h2>
            <p>
              Project payments follow milestones agreed upon in individual client statements. Invoices must be settled within the designated timeframe. Delays in milestone approvals or payments may adjust overall delivery timelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">5. Limitation of Liability</h2>
            <p>
              Under no circumstances shall OrangeDev or its engineering leads be held liable for indirect, consequential, or third-party service disruptions (e.g., domain registrars, hosting outages, or third-party API deprecations).
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border/60">
            <h2 className="text-xl font-bold text-foreground">Questions & Support</h2>
            <p>
              For legal inquiries regarding our terms, reach out to our team:
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