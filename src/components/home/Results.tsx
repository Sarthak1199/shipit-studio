import Odometer from "@/components/Odometer";
import { Reveal, Item } from "@/components/Reveal";

// Counter targets are inferred from the case-study metrics (reference site
// ships its digits as animation frames, not values). Adjust freely.
export default function Results() {
  return (
    <section id="results" className="section scroll-mt-24 border-t border-line">
      <div className="container-x">
        <Reveal>
          <Item><p className="eyebrow">Results</p></Item>
          <Item>
            <h2 className="h-display mt-4 text-[clamp(2.4rem,7vw,5.5rem)]">
              We don&apos;t do theory.<br />We ship, <span className="font-serif font-normal italic text-lime">results.</span>
            </h2>
          </Item>
        </Reveal>

        <Reveal className="mt-12 grid gap-4 md:mt-16 md:grid-cols-5">
          <Item className="md:col-span-2">
            <div className="card noise flex h-full flex-col justify-between overflow-hidden p-7 sm:p-9">
              <div>
                <h3 className="font-display text-xl font-bold">Customised reporting</h3>
                <p className="mt-2 text-muted">Stop paying $$$ for cookie cutter reporting</p>
              </div>
              <div className="mt-12">
                <div className="font-display text-[clamp(3.5rem,9vw,6.5rem)] font-extrabold tracking-[-0.04em] text-pop">
                  <Odometer value="₹10L" />
                </div>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">reporting cost saved</p>
              </div>
            </div>
          </Item>
          <Item className="md:col-span-3">
            <div className="card noise flex h-full flex-col justify-between overflow-hidden p-7 sm:p-9">
              <div>
                <h3 className="font-display text-xl font-bold">Save countless hours</h3>
                <p className="mt-2 text-muted">Repeated manual work is costing your org more than you think.</p>
              </div>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div>
                  <div className="font-display text-[clamp(3.5rem,9vw,6.5rem)] font-extrabold tracking-[-0.04em]">
                    <Odometer value="₹9L" delay={0.1} />
                  </div>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">saved per month</p>
                </div>
                <div>
                  <div className="flex items-baseline whitespace-nowrap font-display text-[clamp(3.5rem,9vw,6.5rem)] font-extrabold tracking-[-0.04em] text-lime">
                    <span className="mr-1 font-serif text-[0.6em] font-normal italic text-muted">~</span>
                    <Odometer value="160" delay={0.2} />
                    <span className="ml-2 font-serif text-[0.45em] font-normal italic text-ink">hrs</span>
                  </div>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">saved per month</p>
                </div>
              </div>
            </div>
          </Item>
        </Reveal>
      </div>
    </section>
  );
}
