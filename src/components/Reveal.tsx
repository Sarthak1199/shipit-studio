"use client";
import { motion, type Variants } from "framer-motion";

export const containerV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
export const itemV: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ children, className, amount = 0.2 }: { children: React.ReactNode; className?: string; amount?: number }) {
  return (
    <motion.div className={className} variants={containerV} initial="hidden" whileInView="show" viewport={{ once: true, amount }}>
      {children}
    </motion.div>
  );
}
export function Item({ children, className }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} variants={itemV}>{children}</motion.div>;
}
