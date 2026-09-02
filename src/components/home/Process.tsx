import { Reveal, Item } from "@/components/Reveal";

const steps = [
  { n: "01", title: "Tell us the headaches", desc: "30-min call, no fluff. We get back with a detailed scope and a prototype within the week." },
  { n: "02", title: "We build & train", desc: "We get to building without time draining back and forth. We ship and train your team in weeks, not quarters." },
  { n: "03", title: "We iterate & maintain", desc: "As your business changes, so does the tool and we’re right there to support you." },
];

export default function Process() {
  return (
    <section id="process" className="section scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <Item><p className="eyebrow">Process</p></Item>
          <Item>
            <h2 className="h-display mt-4 max-w-4xl text-[clamp(2.4rem,7vw,5.5rem)]">
              No roadmaps. We ship <span className="font-serif font-normal italic text-pop">weekly,</span> not quarterly.
            </h2>
          </Item>
        </Reveal>
        <Reveal className="relative mt-12 grid gap-4 md:mt-16 md:grid-cols-3" amount={0.3}>
          {steps.map((s, i) => (
            <Item key={s.n} className="h-full">
              <div className="card noise relative h-full overflow-hidden p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-6xl italic text-pop sm:text-7xl">/{s.n}</span>
                  {i < steps.length - 1 && <span className="hidden font-mono text-muted md:inline">→</span>}
                </div>
                <h3 className="mt-8 font-display text-2xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
