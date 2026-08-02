import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WayuMark } from "./wayu-mark";

const links = [
  { to: "/medical", label: "Medical Supply" },
  { to: "/export", label: "Coffee & Commodities" },
  { to: "/about", label: "Company" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "glass border-b border-border/60 shadow-elevate"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8"
        >
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Wayu home">
            <WayuMark className="h-9 w-9 shrink-0 text-primary" />
            <span className="min-w-0">
              <span className="block truncate font-display text-[0.95rem] leading-tight font-extrabold tracking-tight">
                WAYU
              </span>
              <span className="block truncate text-[0.62rem] leading-tight tracking-[0.2em] text-muted-foreground uppercase">
                Import / Export
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-1">
            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft/70 hover:text-foreground data-[status=active]:text-primary"
                    activeProps={{ className: "bg-primary-soft/60" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/quote"
              className="sheen ml-1 hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elevate transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              Request a Quotation
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="glass ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "surface-ink absolute inset-0 transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div className="relative flex h-full flex-col px-6 pt-5 pb-10">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-3 text-ink-foreground">
              <WayuMark className="h-9 w-9 text-primary" />
              <span className="font-display text-sm font-extrabold tracking-[0.2em]">WAYU</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="glass-dark inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-foreground"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <ul className="mt-14 space-y-1">
            {[{ to: "/", label: "Home" }, ...links].map((l, i) => (
              <li
                key={l.to}
                style={{ transitionDelay: `${80 + i * 60}ms` }}
                className={cn(
                  "border-b border-white/10 transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                <Link
                  to={l.to}
                  className="flex items-center justify-between py-4 font-display text-2xl font-semibold text-ink-foreground"
                >
                  {l.label}
                  <ArrowUpRight className="h-5 w-5 opacity-50" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-3">
            <Link
              to="/quote"
              className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground"
            >
              Request a Quotation
            </Link>
            <Link
              to="/contact"
              className="glass-dark flex w-full items-center justify-center rounded-full px-6 py-4 font-semibold text-ink-foreground"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
