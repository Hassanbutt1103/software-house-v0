"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AskQuestionPage() {
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Yahan backend / API call add kar sakte hain
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", question: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background pt-32 pb-20 relative overflow-hidden flex items-center">
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-card/60 border border-border/60 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl">

          {/* Left Side: Information & Value Props (5 Cols) */}
          <motion.div 
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Direct Engineering Support
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Have a <span className="text-primary">Custom Question?</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Didn't find what you were looking for in our FAQs? Ask your specific technical, architecture, or project question here. Our engineering lead will get back to you with a direct answer.
            </p>

            <div className="space-y-4 pt-6 border-t border-border/60">
              <div className="flex items-center gap-4 text-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-xl shadow-inner">
                  ✉
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Directly</p>
                  <p className="font-semibold text-base">info@codexnav.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-xl shadow-inner">
                  ⏱️
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="font-semibold text-base">Within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-xl shadow-inner">
                  🛡️
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">No Spam Policy</p>
                  <p className="font-semibold text-base">Your contact details are strictly confidential</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/#faq" className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                ← Back to FAQ Section
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Question Form (7 Cols) */}
          <motion.div 
            className="lg:col-span-7 bg-background/50 p-6 sm:p-8 rounded-2xl border border-border/80 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-4"
              >
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto text-3xl font-bold">✓</div>
                <h3 className="text-3xl font-bold">Question Submitted!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you for reaching out. We have received your query and will respond via email shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    onClick={() => setSubmitted(false)}
                    className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-bold"
                  >
                    Ask Another Question
                  </Button>
                  <Link href="/">
                    <Button variant="outline" className="rounded-full px-8 py-3 w-full">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Your Name <span className="text-primary">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Hassan Butt"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background/90 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Your Email <span className="text-primary">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="hassan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background/90 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Your Custom Question <span className="text-primary">*</span></label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Describe your technical requirement, custom stack question, or hosting query in detail..."
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background/90 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-sm"
                  />
                </div>

                <div className="pt-2">
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-base font-bold rounded-xl shadow-lg transition-all w-full"
                    >
                      {isSubmitting ? "Submitting Question..." : "Submit Custom Question 📩"}
                    </Button>
                  </motion.div>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </div>
  );
}