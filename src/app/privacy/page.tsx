import type { Metadata } from "next";
import { site } from "@/data/site";
export const metadata: Metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <section className="container-x pb-24 pt-32 sm:pt-40">
      <p className="eyebrow">Utility</p>
      <h1 className="h-display mt-4 text-[clamp(2.4rem,7vw,5rem)]">Privacy</h1>
      <div className="mt-8 max-w-2xl space-y-4 leading-relaxed text-muted">
        <p>ShipIt Studio collects only what you send us: your name, contact details and the description of the work you want done. We use it to reply to you and to scope your project, and we never sell it.</p>
        <p>Client data we touch during a build stays inside your own accounts and infrastructure wherever possible. Any third-party service that processes it is agreed with you in writing before it goes live.</p>
        <p>Questions? Write to <a href={`mailto:${site.email}`} className="text-leaf underline underline-offset-4">{site.email}</a>.</p>
      </div>
    </section>
  );
}
