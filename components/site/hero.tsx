import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Software House
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            We build fast, reliable <span className="text-primary">web</span> and{" "}
            <span className="text-primary">mobile</span> apps
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            From landing pages to complex platforms, we design and ship products that scale. Our team delivers clean
            code, crisp UI, and measurable results.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button className="bg-primary text-primary-foreground hover:opacity-90" asChild>
              <a href="#contact" aria-label="Start a project">
                Start a project
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#services" aria-label="See our services">
                See services
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-secondary p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-md border border-border bg-card p-4">
              <p className="text-sm font-medium text-muted-foreground">Performance</p>
              <p className="mt-1 text-sm">Lighthouse-focused builds with accessibility, SEO, and speed baked in.</p>
            </div>
            <div className="rounded-md border border-border bg-card p-4">
              <p className="text-sm font-medium text-muted-foreground">Quality</p>
              <p className="mt-1 text-sm">Modern stacks, type-safety, and best practices for robust apps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
