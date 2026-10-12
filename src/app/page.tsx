import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Masthead } from "@/components/masthead";
import { MobileBar } from "@/components/mobile-bar";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Rail } from "@/components/rail";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Masthead />
      <div className="mx-auto flex w-full max-w-6xl">
        <Rail />
        <main id="main" className="min-w-0 flex-1">
          <Hero />
          <Pricing />
          <Process />
          <Faq />
          <Contact />
        </main>
      </div>
      <Footer />
      <MobileBar />
    </div>
  );
}
