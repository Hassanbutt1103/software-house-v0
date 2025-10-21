import { Button } from "@/components/ui/button"

export function CtaContact() {
  return (
    <section id="contact" className="border-t border-border bg-secondary">
      <div className="mx-auto px-4 py-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Have a project in mind?</h3>
            <p className="mt-2 text-muted-foreground">Tell us about your idea—get a scoped plan and estimate.</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-primary text-primary-foreground hover:opacity-90 rounded-none" asChild>
              <a href="info@codexnav.com" aria-label="Email us to start a project">
                Email us
              </a>
            </Button>
            <Button variant="outline" asChild className=" rounded-none">
              <a href="https://cal.com" target="_blank" rel="noreferrer" aria-label="Schedule a call">
                Schedule a call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
