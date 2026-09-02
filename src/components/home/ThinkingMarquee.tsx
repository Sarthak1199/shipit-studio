import Marquee from "@/components/Marquee";
const words = ["Our Thinking", "Research", "Methodology", "Insights"];
export default function ThinkingMarquee() {
  return (
    <div className="border-y border-line py-5 md:py-6">
      <Marquee duration={32} mask>
        {words.map((w, i) => (
          <span key={i} className="flex items-center font-display text-[clamp(1.4rem,3vw,2.2rem)] italic text-muted">
            <span className="mx-6 h-1.5 w-1.5 rounded-full bg-sage md:mx-10" />{w}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
