import { ArrowRight, Github, Mail } from "lucide-react";
import { profile, GMAIL_URL } from "../data/portfolioData";
import TerminalCard from "./ui/TerminalCard";

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative">
        <div className="animate-fadeUp">
          <span className="eyebrow inline-flex items-center gap-2 text-xs text-amber-brand bg-amber-brand/10 border border-amber-brand/20 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-blink" />
            Available for backend roles
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.08]">
            {profile.name}
            <span className="block text-text-muted font-medium text-2xl sm:text-3xl mt-3">
              {profile.role}
            </span>
          </h1>

          <p className="mt-6 text-text-muted text-lg leading-relaxed max-w-xl">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-amber-brand text-ink font-medium px-5 py-3 rounded-md hover:bg-amber-soft transition-colors"
            >
              View projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-ink-border text-text px-5 py-3 rounded-md hover:border-amber-brand/40 hover:bg-ink-surface2 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={GMAIL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-text-muted hover:text-amber-soft px-2 py-3 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {profile.email}
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
