import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/nav-bar";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";

export default function Home() {
  return (
    <>
      {/* Paper stock sits behind everything. */}
      <div aria-hidden className="paper-crumple" />
      <div aria-hidden className="paper-grain" />

      {/* The sheet itself: a thick ink frame, like a printed page. */}
      <div className="relative z-10 m-2 min-h-screen border-[3px] border-ink sm:m-3">
        <NavBar />
        <main id="main" className="mx-auto w-full max-w-6xl">
          <Hero />
          <Pricing />
          <Process />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
