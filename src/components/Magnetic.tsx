"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

export default function Magnetic({
  children, strength = 0.35, className,
}: { children: React.ReactNode; strength?: number; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.25 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={reset} className={cn("inline-block", className)}>
      {children}
    </motion.div>
  );
}
