import Image from "next/image";
import Odometer from "@/components/Odometer";
import { Reveal, Item } from "@/components/Reveal";

export default function Results() {
  return (
    <section id="results" className="section scroll-mt-24">
      <div className="container-x">
        <Reveal className="text-center">
          <Item><p className="eyebrow">Results</p></Item>
          <Item><h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.9rem)]">We don&apos;t do theory.<br />We ship, <em>results.</em></h2></Item>
        </Reveal>

        <Reveal className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
          <Item className="h-full">
            <div className="card relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden p-7 sm:min-h-[520px] sm:p-9">
              <div aria-hidden className="grid-paper absolute inset-0" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm shadow-soft">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg>Customised reporting
                </span>
                <h3 className="h-display mt-6 max-w-sm text-[clamp(1.6rem,3vw,2.3rem)]">Stop paying $$$ for cookie cutter reporting</h3>
              </div>
              <div className="relative">
                <div className="font-display text-[clamp(2.6rem,5vw,3.6rem)] font-medium tracking-tight"><Odometer value="₹12L" /></div>
                <p className="mt-1 text-sm text-muted">reporting cost saved</p>
              </div>
            </div>
          </Item>
          <Item className="h-full">
            <div className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[28px] p-7 text-white shadow-soft sm:min-h-[520px] sm:p-9">
              <Image src="/media/hill-sky.jpg" alt="" fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,36,22,.35)_0%,rgba(31,36,22,.05)_45%,rgba(31,36,22,.45)_100%)]" />
              <div className="relative">
                <h3 className="h-display text-[clamp(1.6rem,3vw,2.3rem)] text-white">Save countless hours</h3>
                <p className="mt-3 max-w-sm text-sm text-white/85">Repeated manual work is costing your org more than you think.</p>
              </div>
              <div className="relative grid grid-cols-2 gap-3">
                {[{ v: "₹4L", l: "saved per month" }, { v: "~200 hrs", l: "saved per month" }].map((m, i) => (
                  <div key={m.l + i} className="rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-md">
                    <div className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-medium tracking-tight"><Odometer value={m.v} delay={i * 0.12} /></div>
                    <p className="mt-1 text-xs text-white/85">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Item>
        </Reveal>
      </div>
    </section>
  );
}
