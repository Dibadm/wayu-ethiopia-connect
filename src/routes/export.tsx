import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Container, FileText, Globe2, Leaf, Ship, Sprout } from "lucide-react";
import coffeeFarm from "@/assets/coffee-farm.jpg";
import greenBeans from "@/assets/green-beans.jpg";
import logisticsPort from "@/assets/logistics-port.jpg";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { agriCommodities, coffeeGrades } from "@/lib/site-data";

export const Route = createFileRoute("/export")({
  head: () => ({
    meta: [
      { title: "Ethiopian Coffee Exporter — Arabica & Agricultural Commodities | Wayu" },
      {
        name: "description",
        content:
          "Ethiopian Arabica coffee exporter based in Addis Ababa: Grade 1 and Grade 2 washed and natural lots, agricultural commodities, container shipment and export documentation for international buyers.",
      },
      {
        property: "og:title",
        content: "Coffee & Agricultural Commodity Export — Wayu Import/Export",
      },
      {
        property: "og:description",
        content:
          "Sourcing Ethiopian Arabica coffee and agricultural commodities for international buyers, with container logistics and export documentation.",
      },
    ],
  }),
  component: ExportPage,
});

const exportSteps = [
  {
    Icon: Sprout,
    title: "Origin sourcing",
    body: "Lots gathered from Ethiopian highland growing regions and assessed against your target profile and grade.",
  },
  {
    Icon: Leaf,
    title: "Processing & preparation",
    body: "Washed or natural sun-dried preparation, cleaning and grading ahead of bagging for export.",
  },
  {
    Icon: Container,
    title: "Container loading",
    body: "Consolidation and loading coordinated from Addis Ababa for scheduled container shipment.",
  },
  {
    Icon: FileText,
    title: "Export documentation",
    body: "Shipping and compliance documentation prepared per destination market requirements.",
  },
];

function ExportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-44">
        <img
          src={coffeeFarm}
          alt="Ethiopian coffee farm at sunrise with ripe arabica cherries"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          width={1408}
          height={1008}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(105deg, oklch(0.2 0.04 70 / 0.93) 0%, oklch(0.24 0.05 90 / 0.78) 50%, oklch(0.22 0.05 120 / 0.5) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-white/70">Division 02 · Coffee & Commodity Export</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl font-display text-[2.4rem] leading-[1.06] font-extrabold text-ink-foreground sm:text-5xl lg:text-[3.6rem]">
              Ethiopian origin, prepared for international contracts.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
              Wayu sources Ethiopian Arabica coffee — washed and natural, Grade 1 and Grade 2 —
              and selected agricultural commodities for roasters, importers and commodity
              traders, with container logistics and export documentation handled end to end.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/quote"
                search={{ division: "export" }}
                className="sheen inline-flex items-center justify-center gap-2 rounded-full bg-earth px-7 py-4 font-semibold text-earth-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
              >
                Request container rates
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="glass-dark inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-ink-foreground"
              >
                Contact the export team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grades */}
      <Section tone="quiet">
        <SectionHeading
          eyebrow="Coffee offer"
          title="Grades and processing methods, described the way buyers evaluate them."
          intro="Lot availability changes with the harvest cycle. Share your target grade, screen size and volume and we will respond with a current export profile."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {coffeeGrades.map((g, i) => (
            <Reveal key={g.name} delay={i * 80}>
              <article className="lift h-full rounded-2xl bg-card p-7 hairline">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold">{g.name}</h3>
                  <span className="shrink-0 rounded-full bg-earth/10 px-3 py-1 text-[0.68rem] font-bold tracking-wider text-earth uppercase">
                    {g.process}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{g.detail}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {g.attributes.map((a) => (
                    <li
                      key={a}
                      className="rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-semibold text-secondary-foreground"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 rounded-2xl bg-card p-7 hairline">
            <h3 className="font-display text-lg font-semibold">Agricultural commodities</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Alongside coffee, we handle enquiries for selected Ethiopian agricultural
              commodities. Availability is confirmed per season and volume.
            </p>
            <ul className="mt-5 grid gap-2.5 text-sm sm:grid-cols-2">
              {agriCommodities.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* Origin story + beans */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Origin"
              title="Ethiopia is the reference point for Arabica. We treat it as a responsibility."
              intro="Altitude, heirloom varieties and careful post-harvest handling are what make Ethiopian lots distinctive. Our role is to keep that quality intact from the drying bed to the container."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                { k: "Sourcing", v: "Highland growing regions" },
                { k: "Processing", v: "Washed & natural sun-dried" },
                { k: "Grades", v: "Grade 1 and Grade 2" },
                { k: "Shipment", v: "Container-scale programmes" },
              ].map((item, i) => (
                <Reveal key={item.k} delay={i * 70}>
                  <div className="rounded-2xl bg-card p-6 hairline">
                    <p className="eyebrow text-muted-foreground">{item.k}</p>
                    <p className="mt-2 font-display text-base font-semibold">{item.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={greenBeans}
                alt="Close-up of premium green unroasted Ethiopian arabica coffee beans"
                loading="lazy"
                width={1408}
                height={912}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Export flow */}
      <Section tone="ink">
        <img
          src={logisticsPort}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1600}
          height={912}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="relative">
          <SectionHeading
            tone="ink"
            eyebrow="Export execution"
            title="From drying bed to destination port."
            intro="Each shipment follows the same four stages, so buyers know what is happening and when."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {exportSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="glass-dark h-full rounded-2xl p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-ink-foreground">
                    <s.Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-foreground/65">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="glass-dark mt-12 flex flex-col gap-6 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-foreground">
                  Request an export profile
                </h3>
                <p className="mt-2 max-w-xl text-sm text-ink-foreground/70">
                  Tell us your grade, processing preference, volume and destination port. We will
                  respond with availability, current indications and shipment timing.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  to="/quote"
                  search={{ division: "export" }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-earth px-6 py-3.5 text-sm font-semibold text-earth-foreground"
                >
                  <Ship className="h-4 w-4" aria-hidden="true" />
                  Request rates
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm font-semibold text-ink-foreground"
                >
                  <Globe2 className="h-4 w-4" aria-hidden="true" />
                  Export team
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
