"use client";
import { motion } from "framer-motion";
import { Reveal, Item } from "@/components/Reveal";

const steps = [
  { n: "01", title: "Tell us the headaches", desc: "30-min call, no fluff. We get back with a detailed scope and a prototype within the week.", tag: "Week 0" },
  { n: "02", title: "We build & train", desc: "We get to building without time draining back and forth. We ship and train your team in weeks, not quarters.", tag: "Weeks 1–3" },
  { n: "03", title: "We iterate & maintain", desc: "As your business changes, so does the tool and we’re right there to support you.", tag: "Ongoing" },
];

const snappy = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Process() {
  return (
    <section id="process" className="section scroll-mt-[84px]">
      <div className="container-x">
        <Reveal className="text-center">
          <Item><p className="eyebrow">Process</p></Item>
          <Item><h2 className="h-display mx-auto mt-4 max-w-3xl text-[clamp(2.2rem,5vw,3.9rem)]">No roadmaps. We ship <em>weekly,</em> not quarterly.</h2></Item>
        </Reveal>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }} className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          {steps.map((s) => (
            <motion.div key={s.n} variants={snappy}
              className="group card relative flex flex-col p-7 transition-[box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-8">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(180deg,#DFE7EC_0%,rgba(255,255,255,0)_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white font-display text-lg italic text-moss transition-colors duration-300 group-hover:bg-moss group-hover:text-bg">{s.n}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{s.tag}</span>
              </div>
              <h3 className="relative mt-8 font-display text-[1.6rem] font-medium leading-tight tracking-tight">{s.title}</h3>
              <p className="relative mt-3 leading-relaxed text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
