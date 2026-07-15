import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navRoutes } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur border-b border-ink-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-md bg-amber-brand/10 border border-amber-brand/25 grid place-items-center eyebrow text-amber-brand text-sm font-semibold group-hover:bg-amber-brand/20 transition-colors">
            NM
          </span>
          <span className="text-sm font-medium tracking-wide hidden sm:block">
            Noor Mohammad
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navRoutes.map((route) => (
            <li key={route.path}>
              <a
                href={route.href}
                className="eyebrow text-xs text-text-muted hover:text-amber-soft px-3 py-2 rounded-md hover:bg-ink-surface2 transition-colors"
              >
                {route.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Noor_Mohammad_Resume.pdf"
          download="Noor_Mohammad_Resume.pdf"
          className="hidden md:inline-flex items-center gap-2 text-xs font-medium eyebrow bg-amber-brand text-ink px-4 py-2 rounded-md hover:bg-amber-soft transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Resume
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-md border border-ink-border text-text-muted"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-border bg-ink/95 backdrop-blur px-6 py-4 flex flex-col gap-1">
          {navRoutes.map((route) => (
            <a
              key={route.path}
              href={route.href}
              onClick={() => setOpen(false)}
              className="eyebrow text-sm text-text-muted hover:text-amber-soft py-2"
            >
              {route.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
