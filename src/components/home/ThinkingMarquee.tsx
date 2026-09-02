import Marquee from "@/components/Marquee";

const words = ["Our Thinking", "Research", "Methodology", "Insights"];

export default function ThinkingMarquee() {
  return (
    <div className="border-y border-line py-6 md:py-8">
      <Marquee duration={28} mask={false}>
        {words.map((w, i) => (
          <span key={i} className="flex items-center font-display text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase tracking-tight">
            <span className="mx-6 text-pop md:mx-10">•</span>{w}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
