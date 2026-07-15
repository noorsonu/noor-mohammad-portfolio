import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-ink-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="eyebrow text-xs text-text-dim">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <p className="eyebrow text-xs text-text-dim">status: 200 OK</p>
      </div>
    </footer>
  );
}
