"use client"; // Client Component

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const servicesList = [
  { id: "web-dev", label: "Web Development", category: "Web & Design" },
  { id: "mobile-apps", label: "Mobile Apps", category: "Web & Design" },
  { id: "backend-dev", label: "Backend Development", category: "Backend Services" },
  { id: "ui-ux", label: "UI/UX Design", category: "Web & Design" },
  { id: "cloud-infra", label: "Cloud Infrastructure", category: "Cloud Services" },
  { id: "server-mgmt", label: "Server Management", category: "Cloud Services" },
  { id: "cloud-migration", label: "Cloud Migration", category: "Cloud Services" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$1k - $5k",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        selectedServices,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", budget: "$1k - $5k", message: "" });
      setSelectedServices([]);
    } else {
      alert("درخواست بھیجنے میں ناکامی ہوئی۔ دوبارہ کوشش کریں۔");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background pt-28 pb-20 relative overflow-hidden">

      {/* VIP Glow Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Get In Touch With Us
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Let's build something <span className="text-primary">extraordinary</span> together.
          </h1>
          <p className="text-muted-foreground text-lg">
            Have a project in mind, need expert engineering, or want to discuss scaling your cloud infrastructure? Drop us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-card/60 border border-border/60 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl">

          {/* Left Side: Contact Info & Benefits (5 Cols) */}
          <motion.div 
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Why collaborate with us?</h3>
              <p className="text-muted-foreground">
                We combine high-performance custom development with robust cloud architecture to deliver scalable results for your business.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border/60">
              <div className="flex items-center gap-4 text-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-xl shadow-inner">
                  ✉
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Direct Inquiries</p>
                  <p className="font-semibold text-base">info@codexnav.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-xl shadow-inner">
                  ⚡
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Turnaround Time</p>
                  <p className="font-semibold text-base">Fast delivery & 24/7 support</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-xl shadow-inner">
                  🛡️
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Engineering Standard</p>
                  <p className="font-semibold text-base">Custom code, zero bloat</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: VIP Interactive Form (7 Cols) */}
          <motion.div 
            className="lg:col-span-7 bg-background/50 p-6 sm:p-8 rounded-2xl border border-border/80 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-4"
              >
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto text-3xl font-bold">✓</div>
                <h3 className="text-3xl font-bold">Request Received!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">Thank you for outlining your project. Our lead engineer will review your requirements and get back to you shortly.</p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-primary text-primary-foreground rounded-full px-8 py-3 font-bold"
                >
                  Submit Another Request
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Your Name <span className="text-primary">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Hassan Butt"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background/90 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Email Address <span className="text-primary">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="hassan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background/90 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                {/* Company & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="CNTL C&V"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background/90 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="<$1k">&lt; $1,000</option>
                      <option value="$1k - $5k">$1,000 - $5,000</option>
                      <option value="$5k - $10k">$5,000 - $10,000</option>
                      <option value="$10k+">$10,000+</option>
                    </select>
                  </div>
                </div>

                {/* Service Selection Boxes */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">What services do you need? <span className="text-xs text-muted-foreground">(Select multiple)</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {servicesList.map((service) => {
                      const isSelected = selectedServices.includes(service.id);
                      return (
                        <div
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={`cursor-pointer px-4 py-3 rounded-xl border transition-all duration-200 flex items-center justify-between text-sm font-medium ${
                            isSelected 
                              ? "bg-primary/15 border-primary text-primary shadow-sm" 
                              : "bg-background/40 border-border/80 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                          }`}
                        >
                          <span>{service.label}</span>
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-xs ${isSelected ? "bg-primary border-primary text-primary-foreground font-bold" : "border-border"}`}>
                            {isSelected ? "✓" : ""}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Project Details & Requirements</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project scope, tech stack preferences, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background/90 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                    >
                      {isSubmitting ? "Submitting Request..." : "Send Project Inquiry 🚀"}
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