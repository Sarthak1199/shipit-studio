import LazyVideo from "@/components/LazyVideo";
import TiltCard from "@/components/TiltCard";
import { Reveal, Item } from "@/components/Reveal";

const services = [
  { n: "01", title: "Internal Tools & Dashboards", desc: "The dashboard your team asked for. Built around your data, your workflow, your bottlenecks.", video: "/media/internal-tool.mp4", tag: "Live data · Ops platforms" },
  { n: "02", title: "Workflow Automation", desc: "Calendar, Slack, inbox, your internal software - wired together so approvals, follow-ups and reports run themselves.", video: "/media/automate.mp4", tag: "Slack · Email · CRM" },
  { n: "03", title: "Brand Creatives", desc: "Get UGC ads, brand posts, ad video or website media without the shoot cost and timeline", video: "/media/brand.mp4", tag: "UGC · Video · Social" },
];

export default function Services() {
  return (
    <section id="services" className="section scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <Item><p className="eyebrow">Services</p></Item>
          <Item><h2 className="h-display mt-4 max-w-3xl text-[clamp(2rem,5.5vw,4.25rem)]">Three pillars. One studio that actually ships.</h2></Item>
        </Reveal>
        <Reveal className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
          {services.map((s) => (
            <Item key={s.n}>
              <TiltCard className="card relative aspect-[4/5] overflow-hidden md:aspect-[3/4] lg:aspect-[4/5]" max={6}>
                <LazyVideo src={s.video} className="absolute inset-0 h-full w-full object-cover opacity-70 transition-[opacity,transform] duration-700 group-hover:scale-[1.04] group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,13,.15)_0%,rgba(11,11,13,.45)_45%,rgba(11,11,13,.95)_100%)]" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between font-mono text-xs text-ink/80">
                    <span>/{s.n}</span>
                    <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 backdrop-blur">{s.tag}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-[1.7rem]">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{s.desc}</p>
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
