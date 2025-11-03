"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ServiceHeading() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end start"],
  });

  // Desktop animations
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.8]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-80%", "-80%"]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.2], [50, 0, 0]);

  // Mobile animations
  const mobileScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.9]);
  const mobileX = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-30%", "-30%"]);
  const mobileY = useTransform(scrollYProgress, [0, 0.1, 0.2], [50, 0, 0]);

  return (
    <section ref={ref} className="relative h-[200vh] bg-background">
      {/* Desktop Animated Heading */}
      <div className="hidden md:flex sticky top-[50%] items-center justify-center">
        <motion.h1
          style={{ scale, x, y }}
          className="text-6xl md:text-9xl font-bold"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 via-purple-500 to-orange-500 bg-[length:200%_auto] animate-gradient">
            Services
          </span>
        </motion.h1>
      </div>

      {/* Mobile Animated Heading */}
      <div className="md:hidden sticky top-[50%] flex items-center justify-center">
        <motion.h1
          style={{ scale: mobileScale, x: mobileX, y: mobileY }}
          className="text-5xl font-bold"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-[length:200%_auto] animate-gradient">
            Services
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
