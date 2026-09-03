import { site } from "@/data/site";
import { cn } from "@/lib/cn";

/** Compact CTA row used at the end of every section. */
export default function SectionCTA({ className = "", label = "Want this for your team?" }: { className?: string; label?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-3 sm:flex-row sm:justify-center", className)}>
      <span className="font-display text-base italic text-muted">{label}</span>
      <div className="flex gap-2">
        <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-11 px-5 text-[14px]">Contact us</a>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-11 px-5 text-[14px]">WhatsApp</a>
      </div>
    </div>
  );
}
