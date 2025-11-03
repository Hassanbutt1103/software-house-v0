"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-background">

      <video
        src="/frontpageVID/home.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block w-full h-screen object-cover"
      />

      {/* Mobile Video */}
      <video
        src="/frontpageVID/home.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden w-full h-screen object-cover"
      />

      {/* Desktop View */}
      <motion.div
        className="absolute inset-0 hidden md:flex flex-col justify-center items-start px-4 md:px-16 space-y-10 bg-black/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          className="text-7xl inter-regular font-bold text-white tracking-tight"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          We build fast, reliable <br />
          <span className="text-primary">web</span> and{" "}
          <span className="text-primary">mobile</span> apps
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-200 max-w-2xl"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          From landing pages to complex platforms, we design and ship products that scale.
        </motion.p>

        <motion.div
          className="mt-6 flex items-center gap-3"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.2 }}
        >
          <button className="shadow-none backdrop-blur-sm bg-white/20 text-white px-5 py-4 font-bold text-xl rounded-sm">
            <a href="#services">GET IN TOUCH</a>
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile View */}
      <motion.div
        className="absolute inset-0 flex md:hidden flex-col justify-center items-start text-start px-4 space-y-6 bg-black/60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          className="text-4xl font-bold text-white"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          Fast & Reliable <br />
          <span className="text-primary">Web</span> &{" "}
          <span className="text-primary">Mobile</span> Apps
        </motion.h1>

        <motion.p
          className="text-base text-gray-200"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          Design and build products that scale with performance.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.2 }}
        >
          <button className="shadow-none backdrop-blur-sm bg-white/20 text-white px-4 py-3 font-semibold rounded-sm">
            <a href="#services">GET IN TOUCH</a>
          </button>
        </motion.div>
      </motion.div>

    </section>
  );
}
