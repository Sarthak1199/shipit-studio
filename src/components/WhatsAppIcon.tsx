import Image from "next/image";

/** The real WhatsApp glyph (not a hand-approximated path). */
export default function WhatsAppIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <Image src="/media/whatsapp.png" alt="" width={size} height={size} unoptimized className={className} style={{ width: size, height: size }} />;
}
