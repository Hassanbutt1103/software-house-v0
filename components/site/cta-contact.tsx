"use client"; // Client Component

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CtaContact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-background to-secondary relative py-20 lg:py-32 overflow-hidden">

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Desktop Version */}
      <motion.div 
        className="hidden md:block relative z-10 rounded-xl px-4 md:px-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-row justify-between items-center gap-8 bg-card border border-border/50 backdrop-blur-sm p-10 rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-500">

          {/* Text */}
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold leading-tight">
              Got a new project? Curious to hear more?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Let's Chat and discuss your ideas—get a clear plan and estimate tailored for your project.
            </p>
          </motion.div>

          {/* Button */}
          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a
              href="mailto:info@codexnav.com" 
              aria-label="Start a chat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-36 py-12 text-2xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.a>
          </motion.div>

        </div>
      </motion.div>

      {/* Mobile Version */}
      <motion.div 
        className="md:hidden text-center relative z-10 rounded-xl px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-card border border-border/50 backdrop-blur-sm p-6 sm:p-10 rounded-2xl shadow-2xl">
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Got a new project? Curious to hear more?
          </motion.h2>
          <motion.p 
            className="mt-4 text-base sm:text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's Chat and discuss your ideas—get a clear plan and estimate tailored for your project.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a
              href="mailto:info@codexnav.com" 
              aria-label="Start a chat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl w-full sm:w-auto">
                Get Started
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
