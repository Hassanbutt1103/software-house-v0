"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceHeading from "@/components/ServiceHeading";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export function Services() {
  const services = [
    {
      title: "Web Development",
      items: ["Responsive websites and web apps", "Next.js, React, TypeScript", "APIs, integrations, and automation"],
    },
    {
      title: "Mobile App Development",
      items: ["iOS and Android using React Native", "Fast prototypes to full-scale apps", "Store submission and release support"],
    },
    {
      title: "UI/UX Design",
      items: ["User-friendly web and mobile interfaces", "Wireframes, prototypes, and visual design", "Design systems and accessibility compliance"],
    },
    {
      title: "AI Website Fix & Customization",
      items: ["Fix errors or glitches from AI-generated websites to make them fully functional.", "Customize design, layout, and features based on your specific needs.", "Enhance usability, accessibility, and user experience to impress visitors."],
    },
  ];

  return (
    <div>
      <ServiceHeading />

      <section id="services" className="border-t border-border bg-background">
        <div className="mx-auto px-4 md:px-16 py-16">

          {/* Desktop Header */}
          <motion.header
            className="hidden md:block mb-8 max-w-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Web and Mobile Development Services <br /> to Broaden
            </h2>
            <div className="mt-2 h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
            <p className="mt-3 text-pretty text-muted-foreground leading-relaxed">
              We ship production-grade web and mobile applications with modern tooling and clean UI.
            </p>
          </motion.header>

          {/* Mobile Header */}
          <motion.header
            className="md:hidden mb-6 max-w-full text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-balance text-2xl font-semibold">
              Mobile & Web Services
            </h2>
            <div className="mt-2 h-1 w-20 rounded-full bg-primary" aria-hidden="true" />
            <p className="mt-2 text-pretty text-muted-foreground leading-relaxed">
              High-quality web and mobile apps tailored for your business.
            </p>
          </motion.header>

          {/* Desktop Section */}
          <div className="hidden md:grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border border-border rounded-none shadow-none">
                  <CardHeader className="border-b-2 border-primary">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                      {service.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile Section */}
          <div className="md:hidden space-y-6">
            <div className="grid gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="border border-border rounded-none shadow-none">
                    <CardHeader className="border-b-2 border-primary">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <ul className="list-disc pl-3 text-sm leading-relaxed text-muted-foreground">
                        {service.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Free Consultancy Button */}
          <div className="mt-10 text-left">
            <motion.a
              href="#contact"
              className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-primary/80 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get a Free Consultancy
            </motion.a>
          </div>

        </div>
      </section>
    </div>
  )
}
