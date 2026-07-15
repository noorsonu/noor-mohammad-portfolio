import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 border-t border-ink-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeading route="GET /education" title="Education" />

        <div className="mt-12 max-w-2xl">
          <ol className="relative border-l border-ink-border ml-3">
            {education.map((item) => (
              <li key={item.degree} className="mb-10 ml-8 last:mb-0">
                <span className="absolute -left-[1.05rem] w-8 h-8 rounded-full bg-ink-surface border border-amber-brand/30 grid place-items-center">
                  <GraduationCap className="w-4 h-4 text-amber-brand" />
                </span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-medium text-text">{item.degree}</h3>
                  <span className="eyebrow text-[11px] text-text-dim">{item.period}</span>
                </div>
                <p className="text-sm text-text-muted mt-1">{item.school}</p>
                <p className="eyebrow text-xs text-amber-soft mt-1.5">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
