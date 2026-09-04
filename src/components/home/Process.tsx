"use client";
import { motion } from "framer-motion";
import { Reveal, Item } from "@/components/Reveal";

const steps = [
  { n: "01", title: "Tell us the headaches", desc: "30-min call, no fluff. We get back with a detailed scope and a prototype within the week.", tag: "Week 0" },
  { n: "02", title: "We build & train", desc: "We get to building without time draining back and forth. We ship and train your team in weeks, not quarters.", tag: "Weeks 1–3" },
  { n: "03", title: "We iterate & maintain", desc: "As your business changes, so does the tool and we’re right there to support you.", tag: "Ongoing" },
];

/** Cards stack vertically and each one slides in on its own as it scrolls into view. */
export default function Process() {
  return (
    <section id="process" className="section scroll-mt-[84px]">
      <div className="container-x">
        <Reveal className="text-center">
          <Item><p className="eyebrow">Process</p></Item>
          <Item><h2 className="h-display mx-auto mt-4 max-w-3xl text-[clamp(2rem,5vw,3.9rem)]">No roadmaps. We ship <em>weekly,</em> not quarterly.</h2></Item>
        </Reveal>
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 md:mt-14">
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group card sticky flex flex-col p-6 transition-shadow duration-300 hover:shadow-lift sm:flex-row sm:items-start sm:gap-6 sm:p-8"
              style={{ top: `${96 + i * 14}px` }}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white font-display text-lg font-semibold text-moss transition-colors duration-300 group-hover:bg-moss group-hover:text-bg">{s.n}</span>
              <div className="mt-4 sm:mt-0">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-[1.45rem] font-medium leading-tight tracking-tight sm:text-[1.6rem]">{s.title}</h3>
                  <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:inline">{s.tag}</span>
                </div>
                <p className="mt-2 leading-relaxed text-muted">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
