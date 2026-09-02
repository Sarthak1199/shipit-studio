import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <TiltCard href={`/case-studies/${cs.slug}`} className="card relative h-full overflow-hidden p-6 sm:p-8">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40" style={{ background: cs.accent }} />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted">/0{index + 1} · {cs.industry}</span>
          {cs.logo ? (
            <Image src={cs.logo} alt="" width={40} height={40} className="h-10 w-10 rounded-xl object-cover" />
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line font-display text-sm font-extrabold" style={{ color: cs.accent }}>{cs.client[0]}</span>
          )}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {cs.metrics.map((m) => (
            <span key={m.label} className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-[13px]">
              <span className="font-semibold text-ink">{m.value}</span> <span className="text-muted">{m.label}</span>
            </span>
          ))}
        </div>
        <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{cs.client}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{cs.summary}</p>
        <div className="mt-auto flex items-center gap-2 pt-8 font-mono text-xs uppercase tracking-[0.18em]">
          <span>Read the case</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </div>
      </div>
    </TiltCard>
  );
}
