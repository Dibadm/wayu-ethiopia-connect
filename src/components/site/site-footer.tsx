import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { company } from "@/lib/site-data";
import { WayuMark } from "./wayu-mark";

export function SiteFooter() {
  return (
    <footer className="surface-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="flex items-center gap-3">
              <WayuMark className="h-10 w-10 text-primary" />
              <span className="font-display text-base font-extrabold tracking-[0.2em] text-ink-foreground">
                WAYU
              </span>
            </span>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/65">
              A B2B import/export enterprise in Addis Ababa, Ethiopia — supplying medical,
              laboratory and hospital consumables to healthcare institutions, and exporting
              Ethiopian Arabica coffee and agricultural commodities to international buyers.
            </p>
            <Link
              to="/quote"
              className="mt-7 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Request a Quotation
            </Link>
          </div>

          <nav aria-label="Footer" className="grid gap-8 sm:grid-cols-2 lg:col-span-1">
            <div>
              <h3 className="eyebrow text-ink-foreground/50">Divisions</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/75">
                <li>
                  <Link to="/medical" className="hover:text-ink-foreground">
                    Medical & Pharmaceutical
                  </Link>
                </li>
                <li>
                  <Link to="/export" className="hover:text-ink-foreground">
                    Coffee & Commodity Export
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-ink-foreground">
                    Company & Logistics
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-ink-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="eyebrow text-ink-foreground/50">Reach us</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/75">
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
                  <a href={`mailto:${company.email}`} className="break-all hover:text-ink-foreground">
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
                  <a href={company.phoneHref} className="hover:text-ink-foreground">
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
                  <span>Addis Ababa, Ethiopia</span>
                </li>
              </ul>
            </div>
          </nav>

          <div>
            <h3 className="eyebrow text-ink-foreground/50">Operations</h3>
            <ul className="mt-4 space-y-5 text-sm text-ink-foreground/75">
              {company.locations.map((loc) => (
                <li key={loc.label}>
                  <p className="font-semibold text-ink-foreground">{loc.label}</p>
                  <p className="mt-1 leading-relaxed">{loc.lines.join(" · ")}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Wayu Import/Export. All rights reserved.</p>
          <p>Contact details shown are placeholders pending confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
