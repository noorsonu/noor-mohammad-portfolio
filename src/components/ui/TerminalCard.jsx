import { useEffect, useState } from "react";
import { Circle } from "lucide-react";

const RESPONSE_LINES = [
  { indent: 1, key: '"name"', value: '"Noor Mohammad"' },
  { indent: 1, key: '"role"', value: '"Java Backend Developer"' },
  { indent: 1, key: '"stack"', value: '["Spring Boot", "Spring Security", "MySQL"]' },
  { indent: 1, key: '"status"', value: '"open_to_work"', highlight: true },
  { indent: 1, key: '"experience"', value: '"2 production-style REST APIs"' },
];

export default function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= RESPONSE_LINES.length) return;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 260 + visibleLines * 90);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="relative w-full max-w-md animate-fadeUp" style={{ animationDelay: "180ms" }}>
      {/* ambient glow */}
      <div className="absolute -inset-4 bg-amber-brand/10 blur-3xl rounded-full" aria-hidden="true" />

      <div className="relative rounded-xl border border-ink-border bg-ink-surface/90 backdrop-blur shadow-card overflow-hidden">
        {/* title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-ink-border bg-ink-surface2/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="eyebrow text-[11px] text-text-dim">profile.api</span>
        </div>

        {/* request line */}
        <div className="px-4 pt-4 eyebrow text-xs flex items-center gap-2">
          <span className="text-status-live font-semibold">GET</span>
          <span className="text-text-muted">/v1/developers/noor-mohammad</span>
          <span className="ml-auto flex items-center gap-1 text-status-live">
            <Circle className="w-2 h-2 fill-status-live" strokeWidth={0} />
            200 OK
          </span>
        </div>

        {/* response body */}
        <pre className="px-4 py-4 text-[13px] leading-relaxed eyebrow overflow-x-auto">
          <span className="text-text-dim">{"{"}</span>
          {"\n"}
          {RESPONSE_LINES.map((line, i) => (
            <span
              key={line.key}
              className="block transition-opacity duration-300"
              style={{ opacity: i < visibleLines ? 1 : 0 }}
            >
              {"  ".repeat(line.indent)}
              <span className="text-[#7EC3D4]">{line.key}</span>
              <span className="text-text-dim">: </span>
              <span className={line.highlight ? "text-status-live" : "text-amber-soft"}>
                {line.value}
              </span>
              {i < RESPONSE_LINES.length - 1 && <span className="text-text-dim">,</span>}
            </span>
          ))}
          <span className="text-text-dim">{"}"}</span>
          <span className="inline-block w-2 h-4 bg-amber-brand align-middle ml-1 animate-blink" />
        </pre>
      </div>
    </div>
  );
}
