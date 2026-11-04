import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Services } from "@/components/site/services"
import { CtaContact } from "@/components/site/cta-contact"
import { Footer } from "@/components/site/footer"
import AfterService from '@/components/site/afterService'
import {OurProcess}  from "@/components/site/OurProcess"
import { TechStack } from "@/components/site/TechStack"
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { FAQ } from "@/components/site/FAQ";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <OurProcess />
      <TechStack />
      <WhyChooseUs />
      <FAQ />
      <AfterService />
      <CtaContact />
      <Footer />
    </main>
  )
}
