import Image from "next/image";
import Marquee from "@/components/Marquee";
import { Reveal, Item } from "@/components/Reveal";

const logos = [
  { name: "DotPe", src: "/logos/dotpe.jpg" },
  { name: "Lexi's", src: "/logos/lexis.jpg" },
  { name: "Zomato", src: "/logos/zomato.png" },
  { name: "MyMuse", src: "/logos/mymuse.jpg" },
];

export default function LogoStrip() {
  return (
    <section className="border-y border-line py-14 md:py-20">
      <div className="container-x">
        <Reveal className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <Item><h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">Built by. Built for.</h2></Item>
          <Item><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Teams we&apos;ve shipped with</p></Item>
        </Reveal>
      </div>
      <Marquee duration={26} className="mt-10">
        {logos.map((l) => (
          <div key={l.name} className="group mx-4 flex h-[88px] w-[200px] items-center justify-center rounded-2xl border border-line bg-surface p-4 sm:mx-5 sm:w-[240px]">
            <Image
              src={l.src} alt={l.name} width={160} height={64}
              className="h-14 w-auto max-w-[150px] rounded-lg object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
