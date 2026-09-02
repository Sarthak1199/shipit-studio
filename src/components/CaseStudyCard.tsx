import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import LazyVideo from "@/components/LazyVideo";
import type { CaseStudy } from "@/data/case-studies";

export function CaseMedia({ cs, className = "" }: { cs: CaseStudy; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[20px] bg-surface2 ${className}`}>
      {cs.media.type === "video" ? (
        <LazyVideo src={cs.media.src} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.04]" style={{ background: cs.media.bg }}>
          <Image src={cs.media.src} alt={cs.client} width={480} height={480} className="w-[52%] max-w-[260px] rounded-2xl object-contain" />
        </div>
      )}
    </div>
  );
}

export default function CaseStudyCard({ cs }: { cs: CaseStudy; index?: number }) {
  return (
    <TiltCard href={`/case-studies/${cs.slug}`} className="card h-full overflow-hidden p-3" max={5}>
      <CaseMedia cs={cs} className="aspect-[16/10]" />
      <div className="relative -mt-9 mx-3">
        <div className="inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-full bg-ink/75 px-4 py-2 text-[12px] text-white backdrop-blur-md">
          {cs.metrics.map((m, i) => (
            <span key={m.value + m.label} className="flex items-center gap-3">
              {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-white/70" />}
              <span><b className="font-semibold">{m.value}</b> {m.label}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="px-5 pb-5 pt-6 text-center">
        <h3 className="font-display text-[1.6rem] font-medium leading-tight tracking-tight">{cs.client}</h3>
        <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-muted">{cs.summary}</p>
      </div>
    </TiltCard>
  );
}
