"use client"; // Client component

import Image from "next/image";
import { motion } from "framer-motion";

export default function WebDevelopmentPage() {
  return (
    <section className="py-16">
      <div className="px-4 md:px-16 flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* Image on Left with Shadow */}
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/png1.png"
            alt="Web Development"
            width={500}
            height={400}
            className="object-contain rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Text Content on Right */}
        <motion.div 
          className="md:w-1/2 text-left md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-balance">
            Web Development for Multi-Channel <span className="text-primary">Visibility</span>
          </h1>
          <div className="mt-3 h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
            A website or web app is built to facilitate user engagement. Our web development services help create scalable digital platforms with intuitive UI/UX and performant functionalities for accessible online interaction. For further efficiency, we leverage threat resistance, tested architectures, continuous maintenance, and custom CMS solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
