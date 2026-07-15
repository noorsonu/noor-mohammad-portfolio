import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile, GMAIL_URL } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: GMAIL_URL,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/noorsonu",
    href: profile.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/noorsonu11",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-ink-border bg-ink-soft/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          route="POST /contact"
          title="Let's build something reliable."
          description="Open to backend and full-stack roles. The fastest way to reach me is email — I usually reply within a day."
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group rounded-xl border border-ink-border bg-ink-surface/60 p-6 hover:border-amber-brand/35 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-lg bg-amber-brand/10 border border-amber-brand/20 grid place-items-center text-amber-brand">
                  <channel.icon className="w-4 h-4" />
                </span>
                <ArrowUpRight className="w-4 h-4 text-text-dim group-hover:text-amber-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="eyebrow text-[11px] text-text-dim mt-4">{channel.label}</p>
              <p className="text-sm text-text mt-1 break-all">{channel.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
