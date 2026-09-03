import { site } from "@/data/site";

/** Sticky bottom CTA bar, phones and tablets only. */
export default function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(10px,env(safe-area-inset-bottom))] lg:hidden">
      <div className="glass flex gap-2 rounded-full border border-line p-1.5 shadow-lift">
        <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-11 flex-1 text-[14px]">Contact us</a>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-11 flex-1 text-[14px]">WhatsApp</a>
      </div>
    </div>
  );
}
