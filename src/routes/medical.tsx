import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Download, FileText, Search, X } from "lucide-react";
import medicalProducts from "@/assets/medical-products.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { categories, products, type Product, type ProductCategory } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/medical")({
  head: () => ({
    meta: [
      { title: "Medical & Laboratory Consumables Supplier in Addis Ababa | Wayu" },
      {
        name: "description",
        content:
          "Medical consumables importer and distributor in Addis Ababa: vacuum blood collection tubes, EDTA and clot activator tubes, surgical sutures, syringes, IV sets, gloves and masks for Ethiopian hospitals and laboratories.",
      },
      {
        property: "og:title",
        content: "Medical & Pharmaceutical Consumables — Wayu Import/Export",
      },
      {
        property: "og:description",
        content:
          "A B2B catalogue of diagnostic, laboratory, surgical and hospital consumables supplied to Ethiopian healthcare institutions.",
      },
      { rel: "canonical", href: "https://wayu-ethiopia-connect.com/medical" },
    ],
  }),
  component: MedicalPage,
});

function MedicalPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<ProductCategory | "All">("All");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCategory = active === "All" || p.category === active;
      if (!inCategory) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.specs.join(" ").toLowerCase().includes(q) ||
        p.variants.join(" ").toLowerCase().includes(q)
      );
    });
  }, [query, active]);

  return (
    <>
      {/* Hero */}
      <section className="surface-ink relative isolate overflow-hidden pt-28 pb-20 sm:pt-44">
        <img
          src={medicalProducts}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
          width={1408}
          height={1008}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-primary-soft/80">Division 01 · Medical & Pharmaceutical</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl font-display text-[2.2rem] leading-[1.08] font-extrabold text-ink-foreground sm:text-5xl lg:text-[3.6rem]">
              Consumables supply that keeps clinical work moving.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
              We import and distribute diagnostic, laboratory, surgical and hospital consumables
              for hospitals, clinical laboratories, pharmacies and medical sub-distributors across
              Ethiopia. Every line is quoted against your written specification.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/quote"
                search={{ division: "medical" }}
                className="sheen inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                Request a Quotation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#catalogue"
                className="glass-dark inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-ink-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                Open the catalogue
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Catalogue */}
      <Section id="catalogue" tone="quiet">
        <SectionHeading
          eyebrow="Product catalogue"
          title="Search, filter, and request exactly what your institution needs."
          intro="A procurement-oriented catalogue: specifications first, no retail checkout. Select any product for full variant detail and add it to a quotation request."
        />

        <Reveal className="mt-10">
          <div className="glass flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search
                className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <label htmlFor="product-search" className="sr-only">
                Search products
              </label>
              <input
                id="product-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, sizes or specifications…"
                className="h-12 w-full rounded-xl bg-background/70 pr-4 pl-11 text-sm hairline outline-none placeholder:text-muted-foreground focus-visible:border-primary"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
              {(["All", ...categories] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={active === c}
                  className={cn(
                    "whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold transition-colors",
                    active === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-background/70 text-muted-foreground hairline hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          Showing {filtered.length} of {products.length} product lines
        </p>

        {filtered.length === 0 ? (
          <Reveal className="mt-8">
            <div className="rounded-2xl bg-card p-12 text-center hairline">
              <h3 className="font-display text-xl font-semibold">No matching products</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                We source beyond this catalogue. Send your requirement list and we will quote
                against it directly.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActive("All");
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                  Clear filters
                </button>
                <Link
                  to="/quote"
                  search={{ division: "medical" }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  Request a quotation
                </Link>
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i, 6) * 60}>
                <article className="lift group flex h-full flex-col rounded-2xl bg-card p-6 hairline">
                  <p className="eyebrow text-primary">{p.category}</p>
                  <h3 className="mt-3 font-display text-lg leading-snug font-semibold">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {p.specs.map((s) => (
                      <li
                        key={s}
                        className="rounded-full bg-primary-soft/70 px-2.5 py-1 text-[0.68rem] font-semibold text-secondary-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
                    <button
                      type="button"
                      onClick={() => setSelected(p)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      Specifications
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                    <Link
                      to="/quote"
                      search={{ division: "medical", product: p.name }}
                      className="rounded-full bg-secondary px-3.5 py-2 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Request quote
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      {/* Supply support */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={warehouseImg}
                alt="Medical consumables stored on organised warehouse shelving"
                loading="lazy"
                width={1408}
                height={912}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Institutional supply support"
              title="Procurement support beyond the product list."
              intro="Documentation, sampling and continuity planning are part of the supply — not an afterthought."
            />
            <ul className="mt-9 space-y-5">
              {[
                {
                  title: "Specification sheets & catalogues",
                  body: "Product data prepared for tender files and internal approval. Documentation packs are available on request while the download library is being finalised.",
                },
                {
                  title: "Sampling before commitment",
                  body: "Where a specification is critical, samples can be arranged for laboratory or clinical verification before an order is confirmed.",
                },
                {
                  title: "Scheduled repeat supply",
                  body: "For recurring consumption lines, we plan replenishment against your usage so stock-outs are avoided.",
                },
                {
                  title: "Sub-distributor terms",
                  body: "Regional pharmacies and medical sub-distributors can request volume-based commercial terms.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <li className="rounded-2xl bg-card p-6 hairline">
                    <h3 className="font-display text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Request documentation pack
                </Link>
                <Link
                  to="/quote"
                  search={{ division: "medical" }}
                  className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-semibold hairline"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Start a quotation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Product dialog */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected ? (
            <>
              <DialogHeader>
                <p className="eyebrow text-primary">{selected.category}</p>
                <DialogTitle className="font-display text-xl">{selected.name}</DialogTitle>
                <DialogDescription className="leading-relaxed">
                  {selected.summary}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-5">
                <div>
                  <h4 className="eyebrow text-muted-foreground">Specifications</h4>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {selected.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="eyebrow text-muted-foreground">Available variants</h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {selected.variants.map((v) => (
                      <li
                        key={v}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Additional sizes, needle geometries and packaging configurations can be sourced
                  on request. Quotations are issued per institutional requirement.
                </p>
                <Link
                  to="/quote"
                  search={{ division: "medical", product: selected.name }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
                >
                  Request a quotation for this line
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
