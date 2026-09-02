"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

const DIGITS = "0123456789".split("");

/** Odometer-style number roll. Digits roll from 0 → target when scrolled into view. */
export default function Odometer({ value, className, delay = 0 }: { value: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  return (
    <span ref={ref} className={cn("inline-flex leading-none", className)} aria-label={value} role="text">
      {value.split("").map((ch, i) =>
        /\d/.test(ch) ? (
          <span key={i} className="relative inline-block h-[1em] overflow-hidden align-baseline" aria-hidden>
            <motion.span
              className="flex flex-col"
              initial={{ y: 0 }}
              animate={inView ? { y: `-${Number(ch)}em` } : { y: 0 }}
              transition={{ duration: 1.5 + i * 0.12, delay: delay + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {DIGITS.map((d) => (
                <span key={d} className="block h-[1em] leading-none">{d}</span>
              ))}
            </motion.span>
          </span>
        ) : (
          <span key={i} className="inline-block h-[1em] leading-none" aria-hidden>{ch === " " ? " " : ch}</span>
        )
      )}
    </span>
  );
}
