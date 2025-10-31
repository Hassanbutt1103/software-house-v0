import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceHeading from "@/components/ServiceHeading"


export function Services() {
  return (
    <div>
      <ServiceHeading />
      <section id="services" className="border-t border-border bg-background px-4 md:px-16">
      <div className="mx-auto px-4 py-16">

        {/* Desktop Header */}
        <header className="hidden md:block mb-8 max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            Web and Mobile Development Services <br /> to Broaden
          </h2>
          <div className="mt-2 h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
          <p className="mt-3 text-pretty text-muted-foreground leading-relaxed">
            We ship production-grade web and mobile applications with modern tooling and clean UI.
          </p>
        </header>

        {/* Mobile Header */}
        <header className="md:hidden mb-6 max-w-full text-left ">
          <h2 className="text-balance text-2xl font-semibold">
            Mobile & Web Services
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-primary" aria-hidden="true" />
          <p className="mt-2 text-pretty text-muted-foreground leading-relaxed">
            High-quality web and mobile apps tailored for your business.
          </p>
        </header>
        
        {/* Desktop Section */}
        <div className="hidden md:grid gap-6 md:grid-cols-3">
          <Card className="border border-border rounded-none shadow-none">
            <CardHeader className="border-b-2 border-primary">
              <CardTitle className="text-xl">Web Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                <li>Responsive websites and web apps</li>
                <li>Next.js, React, TypeScript</li>
                <li>APIs, integrations, and automation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-none shadow-none">
            <CardHeader className="border-b-2 border-primary">
              <CardTitle className="text-xl">Mobile App Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                <li>iOS and Android using React Native</li>
                <li>Fast prototypes to full-scale apps</li>
                <li>Store submission and release support</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-none shadow-none">
            <CardHeader className="border-b-2 border-primary">
              <CardTitle className="text-xl">UI/UX Design</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                <li>User-friendly web and mobile interfaces</li>
                <li>Wireframes, prototypes, and visual design</li>
                <li>Design systems and accessibility compliance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Section */}
        <div className="md:hidden space-y-6">
          <div className="grid gap-6">
            <Card className="border border-border rounded-none shadow-none">
              <CardHeader className="border-b-2 border-primary">
                <CardTitle className="text-xl">Web Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc pl-3 text-sm leading-relaxed text-muted-foreground">
                  <li>Responsive websites and web apps</li>
                  <li>Next.js, React, TypeScript</li>
                  <li>APIs, integrations, and automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-none shadow-none">
              <CardHeader className="border-b-2 border-primary">
                <CardTitle className="text-xl">Mobile App Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc pl-3 text-sm leading-relaxed text-muted-foreground">
                  <li>iOS and Android using React Native</li>
                  <li>Fast prototypes to full-scale apps</li>
                  <li>Store submission and release support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-none shadow-none">
              <CardHeader className="border-b-2 border-primary">
                <CardTitle className="text-xl">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc pl-3 text-sm leading-relaxed text-muted-foreground">
                  <li>User-friendly web and mobile interfaces</li>
                  <li>Wireframes, prototypes, and visual design</li>
                  <li>Design systems and accessibility compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Free Consultancy Button */}
<div className="mt-10 text-left">
  <a
    href="#contact"
    className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-primary/80 transition"
  >
    Get a Free Consultancy
  </a>
</div>

      </div>
      
    </section>
    
    </div>
  )
}
