"use client";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="border-y border-line py-10 md:py-28">
      <div className="container-x text-center">
        <motion.p initial={{ opacity: 0, scale: 0.95, y: 18 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-display mx-auto max-w-4xl text-[clamp(1.5rem,5vw,4rem)] leading-[1.1]">
          Intelligence is a commodity, <em className="text-leaf">deployment</em> is not.
        </motion.p>
      </div>
    </section>
  );
}
