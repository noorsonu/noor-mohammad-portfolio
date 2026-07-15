export default function Tag({ children, tone = "default" }) {
  const tones = {
    default:
      "bg-ink-surface2 text-text-muted border-ink-border",
    amber:
      "bg-amber-brand/10 text-amber-soft border-amber-brand/25",
  };

  return (
    <span
      className={`eyebrow inline-flex items-center rounded-md border px-2.5 py-1 text-[11px] leading-none ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
