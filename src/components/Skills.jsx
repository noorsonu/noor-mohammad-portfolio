import {
  Coffee,
  Server,
  FileJson2,
  Database,
  Wrench,
  LayoutTemplate,
} from "lucide-react";
import { skillGroups } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";
import Tag from "./ui/Tag";

const ICONS = {
  Coffee,
  Server,
  FileJson2,
  Database,
  Wrench,
  LayoutTemplate,
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-ink-border bg-ink-soft/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          route="GET /skills"
          title="Toolkit"
          description="The languages, frameworks, and platforms I reach for when a request needs to become a reliable API."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const Icon = ICONS[group.icon];
            return (
              <div
                key={group.title}
                className="rounded-xl border border-ink-border bg-ink-surface/60 p-6 hover:border-amber-brand/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-amber-brand/10 border border-amber-brand/20 grid place-items-center text-amber-brand">
                    <Icon className="w-4 h-4" />
                  </span>
                  <h3 className="font-medium text-text">{group.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
