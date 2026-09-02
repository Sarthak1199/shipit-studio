import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import { Reveal, Item } from "@/components/Reveal";

export const metadata: Metadata = { title: "Case studies", description: "Four builds, real numbers. Internal tools, automation and AI agents shipped for real businesses." };

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 sm:pt-40 md:pt-48">
        <div className="container-x">
          <Reveal>
            <Item><p className="eyebrow">Case studies</p></Item>
            <Item><h1 className="h-display mt-4 text-[clamp(2.8rem,9vw,7rem)]">Real headaches.<br /><span className="font-serif font-normal italic text-pop">Shipped</span> fixes.</h1></Item>
            <Item><p className="mt-6 max-w-xl text-lg text-muted">Four builds across F&B, fintech, services and quick commerce. Every number below came from the client, not a deck.</p></Item>
          </Reveal>
          <Reveal className="mt-12 grid gap-4 pb-20 md:mt-16 md:grid-cols-2 md:pb-32" amount={0.1}>
            {caseStudies.map((cs, i) => (
              <Item key={cs.slug} className="h-full"><CaseStudyCard cs={cs} index={i} /></Item>
            ))}
          </Reveal>
        </div>
      </section>
      <CTABand />
    </>
  );
}
