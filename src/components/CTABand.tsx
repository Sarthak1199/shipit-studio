import Marquee from "@/components/Marquee";
import Magnetic from "@/components/Magnetic";
import { site } from "@/data/site";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-pop text-bg">
      <div className="py-8 md:py-10">
        <Marquee duration={22} mask={false}>
          {[0, 1, 2, 3].map((i) => (
            <a key={i} href={site.calendly} target="_blank" rel="noopener noreferrer" className="flex items-center font-display text-[clamp(3rem,11vw,9rem)] font-extrabold leading-none tracking-[-0.04em]">
              <span className="mx-6 md:mx-10">•</span>Let&apos;s Talk
            </a>
          ))}
        </Marquee>
      </div>
      <div className="container-x flex flex-col items-start gap-4 border-t border-bg/15 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md font-medium">Pick a time, or just message. Either way you talk to the person building your tool.</p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Magnetic><a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn h-14 w-full bg-bg px-8 text-ink hover:bg-black sm:w-auto">Book a demo</a></Magnetic>
          <Magnetic><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn h-14 w-full border border-bg/40 px-8 text-bg hover:bg-bg/10 sm:w-auto">Chat on WhatsApp</a></Magnetic>
        </div>
      </div>
    </section>
  );
}
