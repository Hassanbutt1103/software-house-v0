"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight, Code2, Layout, Cpu } from "lucide-react";

const serviceHighlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "Scalable web applications built with Next.js, TypeScript & React.",
  },
  {
    icon: Layout,
    title: "UI/UX Engineering",
    desc: "Crafting modern, intuitive, and responsive high-converting interfaces.",
  },
  {
    icon: Cpu,
    title: "Cloud Infrastructure",
    desc: "Robust backend deployment, serverless pipelines & API integration.",
  },
];

export default function ServiceHeading() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 🖥️ Desktop Math Transforms (Left Slide & Scale)
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.75]);
  const x = useTransform(scrollYProgress, [0, 0.5], ["0%", "-30%"]);

  // 📱 Mobile Math Transforms (Upwards Slide & Scale instead of horizontal overflow)
  const mobileScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const mobileY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-40%"]);

  // Content Fade-in when scrolling starts
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.4], [20, 0]);

  return (
    <section ref={ref} className="relative h-[220vh] bg-black text-white overflow-clip">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4 md:px-16 overflow-hidden">
        
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Heading Section (Responsive for both Mobile & Desktop) */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-gray-300 font-semibold">
                What We Offer
              </span>
            </motion.div>

            {/* 🖥️ Desktop Heading Animation */}
            <motion.div
              style={{ scale, x, transformOrigin: "left center" }}
              className="hidden md:block will-change-transform"
            >
              <h1 className="text-7xl lg:text-9xl font-black tracking-tight select-none leading-none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 via-purple-500 to-orange-500 bg-[length:200%_auto] animate-gradient">
                  Services
                </span>
              </h1>
            </motion.div>

            {/* 📱 Mobile Heading Animation (Moves vertically to avoid side clipping) */}
            <motion.div
              style={{ scale: mobileScale, y: mobileY, transformOrigin: "center center" }}
              className="block md:hidden will-change-transform"
            >
              <h1 className="text-6xl font-black tracking-tight select-none leading-none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-[length:200%_auto] animate-gradient">
                  Services
                </span>
              </h1>
            </motion.div>

            {/* Sub-description */}
            <motion.p
              style={{ opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0.7]) }}
              className="text-gray-400 text-xs md:text-base max-w-md mt-6 leading-relaxed"
            >
              Architecting high-performance digital products and modern cloud solutions tailored for software platforms.
            </motion.p>
          </div>

          {/* Right Side / Bottom: Feature Cards */}
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="w-full md:w-1/2 flex flex-col gap-3 z-10"
          >
            {serviceHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 md:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.07] hover:border-orange-500/40 transition-all duration-300 group shadow-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-base md:text-lg font-bold text-white group-hover:text-orange-400 transition-colors flex items-center justify-between">
                        {item.title}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-400" />
                      </h3>
                      <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0] ) }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
          <div className="w-4 h-7 rounded-full border-2 border-gray-600 flex justify-center p-0.5">
            <div className="w-1 h-1.5 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}