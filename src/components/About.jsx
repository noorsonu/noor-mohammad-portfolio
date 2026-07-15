import { profile, stats } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-ink-border">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <SectionHeading
          route="GET /about"
          title="Backend-first, detail-obsessed."
          description={profile.summary}
        />

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-ink-border bg-ink-surface/60 p-6 hover:border-amber-brand/30 transition-colors"
            >
              <div className="text-3xl font-semibold text-amber-soft eyebrow">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-text-muted leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
