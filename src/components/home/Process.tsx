"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal, Item } from "@/components/Reveal";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { n: "01", title: "Tell us the headaches", desc: "30-min call, no fluff. We get back with a detailed scope and a prototype within the week.", tag: "Week 0" },
  { n: "02", title: "We build & train", desc: "We get to building without time draining back and forth. We ship and train your team in weeks, not quarters.", tag: "Weeks 1–3" },
  { n: "03", title: "We iterate & maintain", desc: "As your business changes, so does the tool and we’re right there to support you.", tag: "Ongoing" },
];

export default function Process() {
  const root = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const cards = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ desktop: "(min-width: 768px)", mobile: "(max-width: 767px)", reduce: "(prefers-reduced-motion: reduce)" }, (c) => {
        const { mobile, reduce } = c.conditions as { mobile: boolean; reduce: boolean };
        if (reduce) return;
        if (mobile) {
          // each card slides in as it enters
          cards.current.forEach((el) => {
            gsap.fromTo(el, { y: 60, opacity: 0, rotate: 2 }, { y: 0, opacity: 1, rotate: 0, ease: "power3.out", duration: 0.9, scrollTrigger: { trigger: el, start: "top 85%" } });
          });
          return;
        }
        // desktop: scrubbed deal-out — cards fan out from a stack and the timeline line draws
        const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 75%", end: "top 15%", scrub: 0.6 } });
        cards.current.forEach((el, i) => {
          tl.fromTo(el, { x: (1 - i) * 320, y: 80 + i * 10, rotate: (i - 1) * 6, opacity: 0.4, scale: 0.94 }, { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1, ease: "power2.out", duration: 1 }, 0);
        });
        tl.fromTo(line.current, { scaleX: 0 }, { scaleX: 1, ease: "none", duration: 1 }, 0.1);
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="section scroll-mt-24">
      <div className="container-x">
        <Reveal className="text-center">
          <Item><p className="eyebrow">Process</p></Item>
          <Item><h2 className="h-display mx-auto mt-4 max-w-3xl text-[clamp(2.2rem,5vw,3.9rem)]">No roadmaps. We ship <em>weekly,</em> not quarterly.</h2></Item>
        </Reveal>
        <div ref={root} className="relative mt-14 md:mt-20">
          <div aria-hidden className="absolute inset-x-[16%] top-[38px] hidden h-px origin-left bg-line md:block">
            <div ref={line} className="h-full w-full origin-left bg-sage" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.n} ref={(el) => { if (el) cards.current[i] = el; }}
                className="group card relative flex flex-col p-7 transition-[box-shadow,transform] duration-500 will-change-transform hover:-translate-y-1.5 hover:shadow-lift sm:p-8">
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(180deg,#DFE7EC_0%,rgba(255,255,255,0)_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white font-display text-lg italic text-moss transition-colors duration-500 group-hover:bg-moss group-hover:text-bg">{s.n}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{s.tag}</span>
                </div>
                <h3 className="relative mt-8 font-display text-[1.6rem] font-medium leading-tight tracking-tight">{s.title}</h3>
                <p className="relative mt-3 leading-relaxed text-muted">{s.desc}</p>
                <span className="relative mt-6 inline-flex items-center gap-2 text-sm text-moss opacity-0 transition-all duration-500 group-hover:opacity-100">
                  What happens here <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
