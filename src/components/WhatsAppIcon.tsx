/** The real WhatsApp glyph. Plain <img> (not next/image) + shrink-0 so icon-only flex buttons never squash it. */
export default function WhatsAppIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/media/whatsapp.png"
      alt=""
      width={size}
      height={size}
      className={`inline-block shrink-0 object-contain ${className}`}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    />
  );
}
