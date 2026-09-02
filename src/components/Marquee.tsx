import { cn } from "@/lib/cn";
import type { CSSProperties } from "react";

export default function Marquee({
  children, className, trackClassName, duration = 30, reverse = false, mask = true,
}: { children: React.ReactNode; className?: string; trackClassName?: string; duration?: number; reverse?: boolean; mask?: boolean }) {
  return (
    <div className={cn("flex w-full overflow-hidden", mask && "mask-x", className)}>
      <div
        className={cn("flex w-max shrink-0 items-center whitespace-nowrap will-change-transform", reverse ? "animate-marquee-reverse" : "animate-marquee", trackClassName)}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
