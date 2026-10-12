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
    <>
      {/* Paper stock sits behind everything. */}
      <div aria-hidden className="paper-crumple" />
      <div aria-hidden className="paper-grain" />

      {/* The sheet itself: a thick ink frame, like a printed page. */}
      <div className="relative z-10 m-2 min-h-screen border-[3px] border-ink sm:m-3">
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
      </div>

      <MobileBar />
    </>
  );
}
