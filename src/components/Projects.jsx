import { ArrowUpRight, CheckCircle2, Circle } from "lucide-react";
import { projects } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";
import Tag from "./ui/Tag";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 border-t border-ink-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          route="GET /projects"
          title="Selected projects"
          description="Two production-style APIs, built from schema to deployment — layered, secured, and documented."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-2xl border border-ink-border bg-ink-surface/60 p-7 flex flex-col hover:border-amber-brand/35 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[11px] text-text-dim">{project.endpoint}</span>
                <span className="eyebrow inline-flex items-center gap-1.5 text-[11px] text-status-live">
                  <Circle className="w-1.5 h-1.5 fill-status-live" strokeWidth={0} />
                  {project.status}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-text">{project.name}</h3>
              <p className="eyebrow text-xs text-amber-soft mt-1">{project.subtitle}</p>

              <p className="mt-4 text-sm text-text-muted leading-relaxed">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-text-muted leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-amber-brand shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Tag key={tech} tone="amber">
                    {tech}
                  </Tag>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-text hover:text-amber-soft transition-colors"
              >
                View source
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
