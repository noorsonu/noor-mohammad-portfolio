export default function SectionHeading({ route, title, description, align = "left" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow inline-flex items-center gap-2 text-xs text-amber-brand/90 bg-amber-brand/10 border border-amber-brand/20 rounded-full px-3 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-brand" />
        {route}
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
