import LazyVideo from "@/components/LazyVideo";
import TiltCard from "@/components/TiltCard";
import { Reveal, Item } from "@/components/Reveal";

const services = [
  { n: "01", title: "Internal Tools & Dashboards", desc: "The dashboard your team asked for. Built around your data, your workflow, your bottlenecks.", video: "/media/internal-tool.mp4", tags: ["Live data", "Ops platforms"] },
  { n: "02", title: "Workflow Automation", desc: "Calendar, Slack, inbox, your internal software - wired together so approvals, follow-ups and reports run themselves.", video: "/media/automate.mp4", tags: ["Slack", "Email", "CRM"] },
  { n: "03", title: "Brand Creatives", desc: "Get UGC ads, brand posts, ad video or website media without the shoot cost and timeline", video: "/media/brand.mp4", tags: ["UGC", "Video", "Social"] },
];

export default function Services() {
  return (
    <section id="services" className="section scroll-mt-[84px]">
      <div className="container-x">
        <Reveal className="text-center">
          <Item><p className="eyebrow">Services</p></Item>
          <Item><h2 className="h-display mx-auto mt-4 max-w-3xl text-[clamp(2.2rem,5vw,3.9rem)]">Pick your headache.<br />We&apos;ll <em>automate</em> it.</h2></Item>
        </Reveal>
        <Reveal className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          {services.map((s) => (
            <Item key={s.n} className="h-full">
              <TiltCard className="card flex h-full flex-col overflow-hidden p-3" max={5}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-surface2">
                  <LazyVideo src={s.video} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 font-mono text-[11px] text-ink backdrop-blur">/{s.n}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[1.55rem] font-medium leading-tight tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {s.tags.map((t) => <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</span>)}
                  </div>
                </div>
              </TiltCard>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
