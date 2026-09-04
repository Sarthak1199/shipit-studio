import HeroMac from "@/components/home/HeroMac";
import Services from "@/components/home/Services";
import Quote from "@/components/home/Quote";
import CaseStudies from "@/components/home/CaseStudies";
import Testimonials from "@/components/home/Testimonials";
import Process from "@/components/home/Process";
import About from "@/components/home/About";
import FAQ from "@/components/home/FAQ";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <HeroMac />
      <Services />
      <Quote />
      <CaseStudies />
      <Testimonials />
      <Process />
      <About />
      <FAQ />
      <CTABand />
    </>
  );
}
