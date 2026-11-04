"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceHeading from "@/components/ServiceHeading";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    },
  }),
};

export function Services() {
  const services = [
    {
      title: "Web Development",
      items: [
        "Responsive websites and web apps",
        "Next.js, React, TypeScript",
        "APIs, integrations, and automation",
      ],
    },
    {
      title: "Mobile App Development",
      items: [
        "iOS and Android using React Native",
        "Fast prototypes to full-scale apps",
        "Store submission and release support",
      ],
    },
    {
      title: "UI/UX Design",
      items: [
        "User-friendly web and mobile interfaces",
        "Wireframes, prototypes, and visual design",
        "Design systems and accessibility compliance",
      ],
    },
    {
      title: "AI Website Fix & Customization",
      items: [
        "Fix errors or glitches from AI-generated websites to make them fully functional.",
        "Customize design, layout, and features based on your specific needs.",
        "Enhance usability, accessibility, and user experience to impress visitors.",
      ],
    },
  ];

  return (
    <div>
      {/* Animated Sticky Heading Section (Dark to match top) */}
      <ServiceHeading />

      {/* Services Grid Section - ✅ اب یہ وائٹ (White) رہے گا لیکن کلرز پرفیکٹلی ایڈجسٹ ہیں */}
      <section id="services" className="border-t border-gray-200 bg-white text-gray-900 relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-16">

          {/* Section Header */}
          <motion.header
            className="mb-12 max-w-2xl text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Web & Mobile Development Services
            </h2>
            <div className="mt-2.5 h-1 w-20 rounded-full bg-orange-500" aria-hidden="true" />
            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
              We ship production-grade web and mobile applications with modern tooling, clean UI, and scalable performance.
            </p>
          </motion.header>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* ✅ وائٹ بیک گراؤنڈ کے لیے کارڈز کو صاف ستھرا اور شیڈو والا بنایا گیا ہے */}
                <Card className="border border-gray-200 bg-gray-50/50 rounded-xl shadow-md hover:border-orange-500/50 hover:shadow-xl transition-all h-full flex flex-col justify-between">
                  <CardHeader className="border-b border-gray-200 pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center justify-between">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-3 flex-1">
                    <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-600 space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="hover:text-gray-900 transition-colors">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Free Consultancy Button */}
          <div className="mt-12 text-left">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get a Free Consultancy
            </motion.a>
          </div>

        </div>
      </section>
    </div>
  );
}