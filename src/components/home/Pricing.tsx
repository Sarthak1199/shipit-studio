import { site } from "@/data/site";
import { Reveal, Item } from "@/components/Reveal";
import SectionCTA from "@/components/SectionCTA";

export default function Pricing() {
  return (
    <section id="pricing" className="section scroll-mt-[84px] border-t border-line">
      <div className="container-x">
        <Reveal className="text-center">
          <Item><p className="eyebrow">Pricing</p></Item>
          <Item><h2 className="h-display mx-auto mt-4 max-w-3xl text-[clamp(2rem,5vw,3.9rem)]">Fixed price. <em>Quoted</em> after one call.</h2></Item>
        </Reveal>
        <Reveal className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3" amount={0.2}>
          {site.pricing.map((t, i) => (
            <Item key={t.name} className="h-full">
              <div className="card flex h-full flex-col p-6 sm:p-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">0{i + 1}</span>
                <h3 className="mt-3 font-display text-[1.35rem] font-medium leading-tight tracking-tight">{t.name}</h3>
                <p className="mt-5 text-sm text-muted">starting</p>
                <p className="font-display text-[2rem] font-medium tracking-tight text-moss">{t.from}</p>
              </div>
            </Item>
          ))}
        </Reveal>
        <p className="mt-5 text-center text-sm text-muted">No hourly billing, no retainer. Scope changes are requoted before we build.</p>
        <SectionCTA className="mt-8" label="Get your quote." />
      </div>
    </section>
  );
}
