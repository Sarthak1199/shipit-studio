import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Reveal, Item } from "@/components/Reveal";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section scroll-mt-24">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Item><p className="eyebrow">Case studies</p></Item>
            <Item><h2 className="h-display mt-4 text-[clamp(2.4rem,7vw,5.5rem)]">Don&apos;t take our<br />word for it.</h2></Item>
          </div>
          <Item><Link href="/case-studies" className="btn btn-ghost">All case studies →</Link></Item>
        </Reveal>
        <Reveal className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2" amount={0.1}>
          {caseStudies.map((cs, i) => (
            <Item key={cs.slug} className="h-full"><CaseStudyCard cs={cs} index={i} /></Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
