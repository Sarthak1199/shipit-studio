import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import { Reveal, Item } from "@/components/Reveal";

export const metadata: Metadata = { title: "Case studies", description: "Four builds, real numbers. Internal tools, automation and AI agents shipped for real businesses." };

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-24 sm:pt-28">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Link href="/" className="inline-flex min-h-[32px] items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-ink">← Home</Link>
              <h1 className="h-display text-[clamp(1.8rem,4vw,2.6rem)]">Case <em>studies</em></h1>
            </div>
            <p className="pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">4 builds</p>
          </div>
          <Reveal className="mt-6 grid gap-5 pb-20 md:grid-cols-2 md:pb-28" amount={0.05}>
            {caseStudies.map((cs) => <Item key={cs.slug} className="h-full"><CaseStudyCard cs={cs} /></Item>)}
          </Reveal>
        </div>
      </section>
      <CTABand />
    </>
  );
}
