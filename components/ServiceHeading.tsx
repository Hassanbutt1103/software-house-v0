"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ServiceHeading() {
  // 📌 Reference set kr rahe hain jisse hum is section ke scroll position track kar saken
  const ref = useRef(null);

  // 📌 Scroll progress track karne ke liye Framer Motion ka hook
  // ye "scrollYProgress" 0 se 1 tak value deta hai jese user scroll kare
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end start"], // scroll start aur end points define kiye
  });

  // 🔹 DESKTOP ANIMATION SETUP
  // Ye animations sirf desktop size screens par apply honge (md+)
  
  // 📌 Scale animation: text thoda chhota hota hai scroll hone pr
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.8]);

  // 📌 X-axis movement: text scroll hone par left side move hota hai
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-90%", "-90%"]);

  // 📌 Opacity: scroll start hone par text fade in hota hai
//   const opacity = useTransform(scrollYProgress, [0, 0.1, 0.1], [0, 1, 1]);

  // 📌 Y-axis position: text thoda neeche se upar aata hai
  const y = useTransform(scrollYProgress, [0, 0.1, 0.2], [50, 0, 0]);

  // 🔹 MOBILE ANIMATION SETUP
  // Ye animations mobile devices ke liye optimize kiye gaye hain
//   
  // 📌 Mobile scale: text thoda kam shrink hota hai

  return (
    <section ref={ref} className="relative h-[200vh] bg-background">
      {/* 🔸 Desktop Animated Heading */}
      {/* Sticky ka matlab: ye text screen ke center me fixed rahega jab tak section scroll hota rahe */}
      <div className="hidden md:flex sticky top-[50%] items-center justify-center">
        <motion.h1
          style={{ scale, x, y }}
          className="text-6xl md:text-9xl font-bold"
        >
          Services
        </motion.h1>
      </div>

      {/* 🔸 Mobile Animated Heading */}
      {/* Mobile par heading same scroll ke sath upar move hogi */}
      <div className="md:hidden sticky top-[50%] items-center justify-center">
        {/* <div className="md:hidden sticky top-[50%] flex items-center justify-center"> */}
        <motion.h1
          style={{ scale, y}}
          className="text-5xl font-bold"
        >
          Services
        </motion.h1>
      </div>
    </section>
  );
}
