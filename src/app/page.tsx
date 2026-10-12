import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Pricing />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
