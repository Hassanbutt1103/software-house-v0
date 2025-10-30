import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Services } from "@/components/site/services"
import { CtaContact } from "@/components/site/cta-contact"
import { Footer } from "@/components/site/footer"
import AfterService from '@/components/site/afterService'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <AfterService />
      <CtaContact />
      <Footer />
    </main>
  )
}
