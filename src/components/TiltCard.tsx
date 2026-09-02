"use client";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

export default function TiltCard({
  children, className, href, max = 8,
}: { children: React.ReactNode; className?: string; href?: string; max?: number }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 260, damping: 22 });
  const sry = useSpring(ry, { stiffness: 260, damping: 22 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max);
    rx.set(-py * max);
  };
  const reset = () => { rx.set(0); ry.set(0); };

  const props = {
    style: { rotateX: srx, rotateY: sry, transformPerspective: 1100 },
    whileHover: { y: -8, scale: 1.01 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 300, damping: 24 } as const,
    onMouseMove: onMove,
    onMouseLeave: reset,
    className: cn("group block will-change-transform [transform-style:preserve-3d]", className),
  };

  return href ? <MotionLink href={href} {...props}>{children}</MotionLink> : <motion.div {...props}>{children}</motion.div>;
}
