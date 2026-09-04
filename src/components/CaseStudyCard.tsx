import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <TiltCard href={`/case-studies/${cs.slug}`} className="card flex h-full flex-col overflow-hidden p-3" max={5}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-surface2">
        <Image src={cs.cover} alt={cs.client} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 font-mono text-[11px] text-ink backdrop-blur">{cs.build}</span>
        <span className="absolute right-3 top-3 rounded-full bg-ink/75 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">{cs.industryShort}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[1.6rem] font-medium leading-tight tracking-tight">{cs.client}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted">{cs.summary}</p>
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5">
          {cs.metrics.map((m) => (
            <div key={m.value + m.label}>
              <div className="font-display text-[clamp(1.35rem,2.4vw,1.8rem)] font-medium leading-none tracking-tight">{m.value}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wide leading-snug text-muted">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
