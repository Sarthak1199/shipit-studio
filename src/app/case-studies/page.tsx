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
          <Link href="/" className="inline-flex min-h-[44px] items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-ink">← Home</Link>
          <Reveal className="mt-4 grid gap-5 pb-20 md:grid-cols-2 md:pb-28" amount={0.05}>
            {caseStudies.map((cs) => <Item key={cs.slug} className="h-full"><CaseStudyCard cs={cs} /></Item>)}
          </Reveal>
        </div>
      </section>
      <CTABand />
    </>
  );
}
