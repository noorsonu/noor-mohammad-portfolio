import { Trophy, Rocket, GraduationCap } from "lucide-react";
import { achievements } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";

const ICONS = { Trophy, Rocket, GraduationCap };

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24 border-t border-ink-border bg-ink-soft/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          route="GET /achievements"
          title="Milestones"
          description="Proof of work — from interview-ready fundamentals to shipped, deployed software."
        />

        <div className="mt-14 grid sm:grid-cols-3 gap-5">
          {achievements.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-xl border border-ink-border bg-ink-surface/60 p-7 hover:border-amber-brand/30 transition-colors"
              >
                <span className="w-10 h-10 rounded-lg bg-amber-brand/10 border border-amber-brand/20 grid place-items-center text-amber-brand">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="mt-5 font-medium text-text leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
