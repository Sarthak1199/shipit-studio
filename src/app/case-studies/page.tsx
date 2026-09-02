import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import { Reveal, Item } from "@/components/Reveal";

export const metadata: Metadata = { title: "Case studies", description: "Four builds, real numbers. Internal tools, automation and AI agents shipped for real businesses." };

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[60vh] bg-[linear-gradient(180deg,#DFE7EC_0%,#F5F5F0_100%)]" />
        <div className="container-x">
          <Reveal className="text-center">
            <Item><p className="eyebrow">Case studies</p></Item>
            <Item><h1 className="h-display mt-4 text-[clamp(2.6rem,6.5vw,5rem)]">Real headaches.<br /><em>Shipped</em> fixes.</h1></Item>
            <Item><p className="mx-auto mt-6 max-w-xl text-lg text-muted">Four builds across F&B, fintech, services and quick commerce. Every number below came from the client, not a deck.</p></Item>
          </Reveal>
          <Reveal className="mt-12 grid gap-5 pb-20 md:mt-16 md:grid-cols-2 md:pb-28" amount={0.1}>
            {caseStudies.map((cs) => <Item key={cs.slug} className="h-full"><CaseStudyCard cs={cs} /></Item>)}
          </Reveal>
        </div>
      </section>
      <CTABand />
    </>
  );
}
