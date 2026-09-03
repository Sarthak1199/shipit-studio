import Image from "next/image";
import Marquee from "@/components/Marquee";
import Magnetic from "@/components/Magnetic";
import { site } from "@/data/site";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-moss text-bg">
      <Image src="/media/hills-wide.jpg" alt="" fill sizes="100vw" className="object-cover opacity-[0.16] mix-blend-luminosity" />
      <div className="relative py-8 md:py-10">
        <Marquee duration={26} mask={false}>
          {[0, 1, 2, 3].map((i) => (
            <a key={i} href={site.calendly} target="_blank" rel="noopener noreferrer" className="flex items-center font-display text-[clamp(2.6rem,8vw,6.5rem)] italic leading-none tracking-tight">
              <span className="mx-6 h-2 w-2 rounded-full bg-sage md:mx-10" />Let&apos;s Talk
            </a>
          ))}
        </Marquee>
      </div>
      <div className="container-x relative flex flex-col items-start gap-4 border-t border-bg/15 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-bg/85">Pick a time, or just message. Either way you talk to the person building your tool.</p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Magnetic><a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-cream h-[52px] w-full px-8 sm:w-auto">Book a call</a></Magnetic>
          <Magnetic><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn h-[52px] w-full border border-bg/40 px-8 text-bg hover:bg-bg/10 sm:w-auto">WhatsApp</a></Magnetic>
        </div>
      </div>
    </section>
  );
}
