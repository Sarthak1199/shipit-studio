import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Reveal, Item } from "@/components/Reveal";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section scroll-mt-[84px]">
      <div className="container-x">
        <Reveal className="text-center">
          <Item><p className="eyebrow">Case studies</p></Item>
          <Item><h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.9rem)]">Don&apos;t take our word<br />for <em>it.</em></h2></Item>
        </Reveal>
        <Reveal className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2" amount={0.1}>
          {caseStudies.map((cs) => <Item key={cs.slug} className="h-full"><CaseStudyCard cs={cs} /></Item>)}
        </Reveal>
        <Reveal className="mt-8 text-center"><Item><Link href="/case-studies" className="btn btn-ghost">All case studies →</Link></Item></Reveal>
      </div>
    </section>
  );
}
