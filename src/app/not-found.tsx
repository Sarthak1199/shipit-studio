import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container-x pb-24 pt-40 text-center">
      <p className="eyebrow">404</p>
      <h1 className="h-display mt-4 text-[clamp(2.4rem,7vw,5rem)]">That page didn&apos;t ship.</h1>
      <Link href="/" className="btn btn-primary mt-8">Back home</Link>
    </section>
  );
}
