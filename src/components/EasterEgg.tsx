"use client";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

/** Triggered by 5 quick clicks on the logo, or the footer stamp. Terminal-typing reveal + confetti. */
export default function EasterEgg() {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const msg = site.easterEgg;

  useEffect(() => {
    const on = () => setOpen(true);
    window.addEventListener("shipit:egg", on);
    return () => window.removeEventListener("shipit:egg", on);
  }, []);

  useEffect(() => {
    if (!open) { setTyped(""); return; }
    let i = 0;
    const id = setInterval(() => { i += 1; setTyped(msg.slice(0, i)); if (i >= msg.length) clearInterval(id); }, 28);
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", esc);
    return () => { clearInterval(id); window.removeEventListener("keydown", esc); };
  }, [open, msg]);

  const confetti = useMemo(() => Array.from({ length: 70 }, (_, i) => ({
    id: i, x: (Math.random() - 0.5) * 900, y: -200 - Math.random() * 500, r: Math.random() * 720 - 360,
    d: 1.4 + Math.random() * 1.2, s: 6 + Math.random() * 8,
    c: ["#2E3A1F", "#9DB27E", "#5C7A3A", "#F5F5F0", "#DFE7EC", "#C9A24D"][i % 6],
  })), []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div key="egg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/70 p-5 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Easter egg">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2">
            {confetti.map((p) => (
              <motion.span key={p.id} initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 0.6 }}
                animate={{ x: p.x, y: [0, p.y, p.y + 700], rotate: p.r, opacity: [1, 1, 0], scale: 1 }}
                transition={{ duration: p.d, ease: [0.2, 0.8, 0.3, 1] }}
                style={{ width: p.s, height: p.s * 0.6, background: p.c }} className="absolute block rounded-sm" />
            ))}
          </div>
          <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()} className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#111411] text-[#E6EFD9] shadow-lift">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 font-mono text-xs text-white/50">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3">shipit — zsh</span>
            </div>
            <pre className="whitespace-pre-wrap p-6 font-mono text-[15px] leading-relaxed">
              <span className="text-[#9DB27E]">$</span> cat SECRET.md{"\n"}
              {typed}<span className="ml-0.5 inline-block h-[1.1em] w-[0.6ch] translate-y-[3px] animate-pulse bg-[#9DB27E]" />
            </pre>
            <div className="flex items-center justify-between border-t border-white/10 px-6 py-3 font-mono text-xs text-white/50">
              <span>press esc to close</span>
              <button type="button" onClick={() => setOpen(false)} className="min-h-[44px] rounded-full px-4 text-[#E6EFD9] hover:bg-white/10">close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
