import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-background">
      <div className="mx-auto px-4 py-16">
        <header className="mb-8 max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">Our services</h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary" aria-hidden="true" />
          <p className="mt-3 text-pretty text-muted-foreground leading-relaxed">
            We ship production-grade web and mobile applications with modern tooling and clean UI.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
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

          <Card className=" rounded-none  shadow-none">
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
        </div>
      </div>
    </section>
  )
}
