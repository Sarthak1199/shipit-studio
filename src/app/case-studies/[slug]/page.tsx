import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import Odometer from "@/components/Odometer";
import CTABand from "@/components/CTABand";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Reveal, Item } from "@/components/Reveal";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return { title: cs.client, description: cs.summary };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();
  const others = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 2);
  const blocks = [
    { k: "Problem", v: cs.problem },
    { k: "Solution", v: cs.solution },
    { k: "Process", v: cs.process },
  ];

  return (
    <>
      {/* sticky breadcrumb, sits just under the fixed nav */}
      <div className="sticky top-[68px] z-30 sm:top-[84px]">
        <div className="container-x">
          <Link href="/case-studies" className="glass inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line px-4 font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-ink">
            ← All case studies
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32">
        <div aria-hidden className="pointer-events-none absolute right-[-10%] top-[-10%] -z-10 h-[50vw] w-[50vw] rounded-full opacity-30 blur-3xl" style={{ background: cs.accent }} />
        <div className="container-x">
          <Reveal>
            <Item>
              <div className="flex items-center gap-3">
                {cs.logo && <Image src={cs.logo} alt="" width={40} height={40} className="h-10 w-10 rounded-xl object-cover" />}
                <p className="eyebrow">{cs.industry}</p>
              </div>
            </Item>
            <Item><h1 className="h-display mt-5 text-[clamp(2.6rem,8vw,6.5rem)]">{cs.client}</h1></Item>
            <Item><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{cs.summary}</p></Item>
          </Reveal>

          <Reveal className="mt-12 grid gap-4 sm:grid-cols-3 md:mt-16" amount={0.2}>
            {cs.metrics.map((m, i) => (
              <Item key={m.label}>
                <div className="card noise p-6 sm:p-8">
                  <div className="font-display text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold tracking-[-0.04em]" style={{ color: i === 0 ? cs.accent : undefined }}>
                    <Odometer value={m.value} delay={i * 0.12} />
                  </div>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">{m.label}</p>
                </div>
              </Item>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal className="grid gap-4 md:grid-cols-3" amount={0.15}>
            {blocks.map((b, i) => (
              <Item key={b.k} className="h-full">
                <div className="card h-full p-7 sm:p-8">
                  <span className="font-serif text-5xl italic" style={{ color: cs.accent }}>/0{i + 1}</span>
                  <h2 className="mt-6 font-display text-2xl font-extrabold tracking-tight">{b.k}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{b.v}</p>
                </div>
              </Item>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <Item><p className="eyebrow">Results</p></Item>
            <Item><h2 className="h-display mt-4 text-[clamp(2.2rem,6vw,4.5rem)]">{cs.headline}</h2></Item>
          </Reveal>
          <Reveal className="mt-10 flex flex-wrap gap-3" amount={0.3}>
            {cs.metrics.map((m) => (
              <Item key={m.label}>
                <div className="flex items-baseline gap-2 rounded-full border border-line bg-surface px-5 py-3">
                  <span className="font-display text-2xl font-extrabold">{m.value}</span>
                  <span className="text-muted">{m.label}</span>
                </div>
              </Item>
            ))}
          </Reveal>

          {cs.testimonial && (
            <Reveal className="mt-14" amount={0.3}>
              <Item>
                <figure className="card noise max-w-3xl p-8 sm:p-10">
                  <span className="font-serif text-6xl leading-none" style={{ color: cs.accent }}>“</span>
                  <blockquote className="mt-2 text-xl leading-relaxed sm:text-2xl">{cs.testimonial.quote}</blockquote>
                  <figcaption className="mt-6 text-muted"><span className="font-semibold text-ink">{cs.testimonial.name}</span> · {cs.testimonial.role}</figcaption>
                </figure>
              </Item>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="container-x">
          <Reveal className="flex items-end justify-between">
            <Item><h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">More builds</h2></Item>
            <Item><Link href="/case-studies" className="font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-ink">All →</Link></Item>
          </Reveal>
          <Reveal className="mt-8 grid gap-4 md:grid-cols-2" amount={0.1}>
            {others.map((o) => (
              <Item key={o.slug} className="h-full"><CaseStudyCard cs={o} index={caseStudies.indexOf(o)} /></Item>
            ))}
          </Reveal>
        </div>
      </section>
      <CTABand />
    </>
  );
}
