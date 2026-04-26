import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/ilink-logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`glass-strong rounded-2xl flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "shadow-[0_8px_40px_-10px_oklch(0.10_0.05_260/0.5)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg group-hover:blur-xl transition-all" />
              <img
                src={logo}
                alt="iLink Tanzania"
                className="relative h-10 w-10 rounded-xl object-contain bg-white/95 p-1"
              />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg tracking-tight">iLink</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Tanzania
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-white/5 transition-all relative"
                activeProps={{ className: "px-4 py-2 text-sm font-medium text-primary rounded-lg bg-white/5 relative" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
            >
              Get in touch
              <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            className="md:hidden glass rounded-lg p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground" />
          </button>
        </div>

        {open && (
          <div className="md:hidden glass-strong rounded-2xl mt-2 p-4 flex flex-col gap-1 animate-slide-up">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-medium"
                activeProps={{ className: "px-4 py-3 rounded-lg bg-white/5 text-primary text-sm font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
