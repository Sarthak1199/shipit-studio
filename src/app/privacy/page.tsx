import type { Metadata } from "next";
import { site } from "@/data/site";
export const metadata: Metadata = { title: "Privacy Policy" };

const H = ({ children }: { children: React.ReactNode }) => <h2 className="mt-10 font-display text-2xl font-medium tracking-tight">{children}</h2>;
const P = ({ children }: { children: React.ReactNode }) => <p className="mt-3 leading-relaxed text-muted">{children}</p>;
const UL = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="mt-3 space-y-2 text-muted">{items.map((it, i) => <li key={i} className="flex gap-3"><span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-sage" /><span className="leading-relaxed">{it}</span></li>)}</ul>
);

export default function Privacy() {
  return (
    <section className="container-x max-w-3xl pb-24 pt-28 sm:pt-32">
      <p className="eyebrow">Legal</p>
      <h1 className="h-display mt-4 text-[clamp(2.2rem,6vw,4rem)]">ShipIt Studio Privacy Policy</h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">Last updated: Sep 10, 2026</p>
      <P>ShipIt Studio (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides AI-powered workflow automation, creative, and internal tooling services to businesses. This policy explains how we collect, use, and protect your information when you visit our website or engage our services.</P>

      <H>Information We Collect</H>
      <UL items={[
        <><b className="text-ink">Contact details:</b> name, email, phone/WhatsApp number, company name — collected when you book a demo (via Calendly) or message us on WhatsApp.</>,
        <><b className="text-ink">Communication data:</b> messages exchanged over WhatsApp, email, or Calendly booking notes.</>,
        <><b className="text-ink">Usage data:</b> pages visited, browser/device type, IP address (via standard website analytics).</>,
        <><b className="text-ink">Client project data:</b> any business data you share with us to build workflows, automations, or dashboards (handled per a separate service/NDA agreement).</>,
      ]} />

      <H>How We Use Your Information</H>
      <UL items={[
        "To schedule and conduct demo calls",
        "To respond to inquiries and provide services",
        "To improve our website and offerings",
        "To communicate about updates, support, and security",
        "To comply with legal obligations, including our duties as a Data Fiduciary under India's Digital Personal Data Protection Act, 2023, and to respond to lawful requests from authorities",
      ]} />

      <H>Cookies &amp; Tracking Technologies</H>
      <P>We use cookies and similar technologies (such as pixels and tags) to understand how our website is used and to measure the performance of our advertising on the platforms listed below. These may set identifiers on your device to recognise repeat visits and attribute conversions. You can control or delete cookies through your browser settings; disabling them may affect parts of the site but will not stop you from contacting us.</P>

      <H>Who We Share Data With</H>
      <UL items={[
        "Service providers (e.g., Calendly, WhatsApp Business, hosting/analytics providers) strictly to operate our services",
        "Legal authorities, if required by law",
      ]} />

      <H>Third-Party Services</H>
      <UL items={["Google Ads", "Meta (Facebook & Instagram)", "TikTok Ads", "Google Analytics"]} />

      <H>Data Security</H>
      <P>We use reasonable technical and organizational measures to protect your data. However, no method of transmission or storage is 100% secure.</P>

      <H>Your Rights</H>
      <P>Under India&apos;s Digital Personal Data Protection Act, 2023, you may:</P>
      <UL items={["Request access to your personal data", "Request correction of inaccurate information", "Request deletion of your data", "Withdraw consent for marketing emails"]} />

      <H>Changes to This Policy</H>
      <P>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised &quot;Last Updated&quot; date.</P>

      <H>Contact Us</H>
      <P>If you have any questions about this Privacy Policy, you can contact us at <a href={`mailto:${site.email}`} className="text-leaf underline underline-offset-4">{site.email}</a>.</P>
    </section>
  );
}
