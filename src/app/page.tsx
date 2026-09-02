import HeroMac from "@/components/home/HeroMac";
import Services from "@/components/home/Services";
import Results from "@/components/home/Results";
import ThinkingMarquee from "@/components/home/ThinkingMarquee";
import CaseStudies from "@/components/home/CaseStudies";
import Process from "@/components/home/Process";
import Reels from "@/components/home/Reels";
import Testimonials from "@/components/home/Testimonials";
import About from "@/components/home/About";
import FAQ from "@/components/home/FAQ";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <HeroMac />
      <Services />
      <Results />
      <ThinkingMarquee />
      <CaseStudies />
      <Process />
      <Reels />
      <Testimonials />
      <About />
      <FAQ />
      <CTABand />
    </>
  );
}
