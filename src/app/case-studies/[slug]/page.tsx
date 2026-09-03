import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import Odometer from "@/components/Odometer";
import CTABand from "@/components/CTABand";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Reveal, Item } from "@/components/Reveal";

export function generateStaticParams() { return caseStudies.map((c) => ({ slug: c.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudy(params.slug);
  return cs ? { title: cs.client, description: cs.summary } : {};
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();
  const others = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 2);
  const blocks = [{ k: "Problem", v: cs.problem }, { k: "Solution", v: cs.solution }, { k: "Process", v: cs.process }];

  return (
    <>
      <div className="sticky top-[76px] z-30 sm:top-[80px]">
        <div className="container-x">
          <Link href="/case-studies" className="glass inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line px-4 font-mono text-xs uppercase tracking-[0.18em] text-muted shadow-soft hover:text-ink">← All case studies</Link>
        </div>
      </div>

      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[linear-gradient(180deg,#DFE7EC_0%,#F5F5F0_100%)]" />
        <div className="container-x">
          <Reveal>
            <Item>
              <div className="flex items-center gap-3">
                {cs.logo && <Image src={cs.logo} alt="" width={40} height={40} className="h-10 w-10 rounded-xl object-cover" />}
                <p className="eyebrow">{cs.build} · {cs.industry}</p>
              </div>
            </Item>
            <Item><h1 className="h-display mt-5 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)]">{cs.client}</h1></Item>
            <Item><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{cs.summary}</p></Item>
          </Reveal>

          {/* media */}
          <Reveal className={`mt-12 grid gap-5 ${cs.gallery.length > 1 ? "md:grid-cols-2" : ""}`} amount={0.2}>
            {cs.gallery.map((src, i) => (
              <Item key={src}>
                <div className="group relative aspect-[16/10] overflow-hidden rounded-[28px] bg-surface2 shadow-soft">
                  <Image src={src} alt={`${cs.client} — screen ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
                  {i === 0 && (
                    <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
                      {cs.metrics.map((m) => (
                        <span key={m.value + m.label} className="rounded-full bg-ink/75 px-3 py-1.5 text-xs text-white backdrop-blur-md"><b className="font-semibold">{m.value}</b> {m.label}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Item>
            ))}
          </Reveal>

          {/* metrics */}
          <Reveal className="mt-5 grid gap-5 sm:grid-cols-3" amount={0.2}>
            {cs.metrics.map((m, i) => (
              <Item key={m.value + m.label}>
                <div className="card p-6 sm:p-7">
                  <div className="font-display text-[clamp(2.2rem,4.5vw,3.4rem)] font-medium tracking-tight" style={{ color: i === 0 ? cs.accent : undefined }}><Odometer value={m.value} delay={i * 0.12} /></div>
                  <p className="mt-1 text-sm text-muted">{m.label}</p>
                </div>
              </Item>
            ))}
          </Reveal>
        </div>
      </section>

      {/* problem / solution / process */}
      <section className="section">
        <div className="container-x">
          <Reveal className="grid gap-5 md:grid-cols-3" amount={0.15}>
            {blocks.map((b, i) => (
              <Item key={b.k} className="h-full">
                <div className="card h-full p-7 sm:p-8">
                  <span className="font-display text-4xl italic" style={{ color: cs.accent }}>0{i + 1}</span>
                  <h2 className="mt-5 font-display text-2xl font-medium tracking-tight">{b.k}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{b.v}</p>
                </div>
              </Item>
            ))}
          </Reveal>
        </div>
      </section>

      {/* technical details */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Item><p className="eyebrow">Technical details</p></Item>
            <Item><h2 className="h-display mt-4 text-[clamp(2rem,4.5vw,3.2rem)]">How it&apos;s <em>built.</em></h2></Item>
            <Item><p className="mt-4 text-muted">What runs where, what it talks to, and what was handed over.</p></Item>
          </Reveal>
          <Reveal className="md:col-span-8" amount={0.15}>
            <Item>
              <div className="card divide-y divide-line">
                <Row k="Stack">{cs.tech.stack.map((s) => <Chip key={s}>{s}</Chip>)}</Row>
                <Row k="Integrations">{cs.tech.integrations.map((s) => <Chip key={s}>{s}</Chip>)}</Row>
                <Row k="Timeline"><span className="text-ink">{cs.tech.timeline}</span></Row>
                <Row k="Team"><span className="text-ink">{cs.tech.team}</span></Row>
                <Row k="Delivered">
                  <ul className="space-y-1.5">{cs.tech.deliverables.map((d) => <li key={d} className="flex gap-2 text-ink"><span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />{d}</li>)}</ul>
                </Row>
              </div>
            </Item>
          </Reveal>
        </div>
      </section>

      {/* impact */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-start">
          <Reveal className="md:col-span-5">
            <Item><p className="eyebrow">Impact</p></Item>
            <Item><h2 className="h-display mt-4 text-[clamp(2rem,4.5vw,3.2rem)]">{cs.headline}</h2></Item>
            <Item>
              <div className="mt-8 flex flex-wrap gap-3">
                {cs.metrics.map((m) => (
                  <div key={m.value + m.label} className="flex items-baseline gap-2 rounded-full border border-line bg-white px-5 py-3 shadow-soft">
                    <span className="font-display text-2xl font-medium">{m.value}</span><span className="text-muted">{m.label}</span>
                  </div>
                ))}
              </div>
            </Item>
          </Reveal>
          <Reveal className="md:col-span-7" amount={0.3}>
            <Item>
              {cs.testimonial ? (
                <figure className="card p-8 sm:p-10">
                  <span className="font-display text-6xl leading-none" style={{ color: cs.accent }}>“</span>
                  <blockquote className="mt-2 font-display text-xl leading-snug sm:text-2xl">{cs.testimonial.quote}</blockquote>
                  <figcaption className="mt-6 text-muted"><span className="font-semibold text-ink">{cs.testimonial.name}</span> · {cs.testimonial.role}</figcaption>
                </figure>
              ) : (
                <div className="relative overflow-hidden rounded-[28px] shadow-soft">
                  <Image src="/media/hills-wide.jpg" alt="" width={1200} height={720} sizes="(max-width: 768px) 100vw, 640px" className="aspect-[16/9] w-full object-cover" />
                  <p className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/75 p-4 font-display text-lg italic backdrop-blur-md">Numbers reported by the client after launch.</p>
                </div>
              )}
            </Item>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="container-x">
          <Reveal className="flex items-end justify-between">
            <Item><h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">More builds</h2></Item>
            <Item><Link href="/case-studies" className="font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-ink">All →</Link></Item>
          </Reveal>
          <Reveal className="mt-8 grid gap-5 md:grid-cols-2" amount={0.1}>
            {others.map((o) => <Item key={o.slug} className="h-full"><CaseStudyCard cs={o} /></Item>)}
          </Reveal>
        </div>
      </section>
      <CTABand />
    </>
  );
}

function Row({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 p-6 sm:grid-cols-[140px_1fr] sm:gap-6 sm:p-7">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{k}</span>
      <div className="flex flex-wrap gap-2 text-[15px]">{children}</div>
    </div>
  );
}
function Chip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-line bg-bg px-3 py-1 text-sm text-ink">{children}</span>;
}
