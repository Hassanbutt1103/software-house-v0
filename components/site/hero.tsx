import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center  bg-primary px-3 py-1 text-lg font-medium text-primary-foreground">
            Software House
          </span>
          <h1 className="text-balance text-7xl font-bold tracking-tight">
            We build fast, reliable <span className="text-primary">web</span> and{" "}
            <span className="text-primary">mobile</span> apps
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            From landing pages to complex platforms, we design and ship products that scale. Our team delivers clean
            code, crisp UI, and measurable results.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button className="hover:opacity-90 rounded-none" asChild>
              <a href="/contact">
                Start a project
              </a>
            </Button>
            <Button variant="outline" className="rounded-none shadow-none" asChild>
              <a href="#services"  aria-label="See our services">
                See services
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10  border border-border bg-secondary p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className=" border border-border bg-card p-4">
              <p className="text-sm font-medium text-muted-foreground">Performance</p>
              <p className="mt-1 text-sm">Lighthouse-focused builds with accessibility, SEO, and speed baked in.</p>
            </div>
            <div className=" border border-border bg-card p-4">
              <p className="text-sm font-medium text-muted-foreground">Quality</p>
              <p className="mt-1 text-sm">Modern stacks, type-safety, and best practices for robust apps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
