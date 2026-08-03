import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  FileText,
  Globe2,
  Microscope,
  ShieldCheck,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";
import logisticsPort from "@/assets/logistics-port.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { Counter } from "@/components/site/counter";
import { categories, products } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wayu Import/Export — Medical Consumables Supplier | Wayu" },
      {
        name: "description",
        content:
          "Addis Ababa based B2B enterprise importing and distributing medical, laboratory, surgical and hospital consumables for Ethiopian healthcare institutions.",
      },
      {
        property: "og:title",
        content: "Wayu Import/Export — Healthcare Supply & Trade",
      },
      {
        property: "og:description",
        content:
          "Institutional-grade medical supply, structured for Ethiopian healthcare procurement teams.",
      },
      { rel: "canonical", href: "https://wayu-ethiopia-connect.com/" },
    ],
  }),
  component: Home,
});

const capabilities = [
  {
    Icon: Boxes,
    title: "Institutional volumes",
    body: "Order quantities structured for hospitals, laboratories, pharmacy chains and sub-distributors — from carton to container.",
  },
  {
    Icon: FileText,
    title: "Documentation ready",
    body: "Specification sheets, product data and procurement paperwork prepared to match institutional tender requirements.",
  },
  {
    Icon: Warehouse,
    title: "Local warehousing",
    body: "Storage, consolidation and dispatch handled from our Kolfe Keranio operations base in Addis Ababa.",
  },
  {
    Icon: Globe2,
    title: "International supply network",
    body: "Working with global manufacturers to bring verified medical and pharmaceutical consumables into Ethiopia.",
  },
  {
    Icon: ShieldCheck,
    title: "Quality discipline",
    body: "Products sourced against written specifications, with sample verification available before commitment.",
  },
  {
    Icon: Ship,
    title: "Regional logistics",
    body: "Import clearance, warehousing and dispatch coordinated from our Addis Ababa operations base.",
  },
];

const corridor = [
  {
    step: "01",
    title: "Enquiry & specification",
    body: "You share your requirement list, quantities and technical specifications. We confirm scope and availability.",
  },
  {
    step: "02",
    title: "Quotation & sourcing",
    body: "We quote against verified supply, with alternatives where a specification can be met more efficiently.",
  },
  {
    step: "03",
    title: "Import execution & delivery",
    body: "Orders are placed, imported, cleared and dispatched with documentation prepared for the receiving institution.",
  },
  {
    step: "04",
    title: "Delivery & continuity",
    body: "Goods are dispatched from Addis Ababa with repeat-supply planning available for recurring institutional requirements.",
  },
];

function Home() {
  const medicalLines = products.length;

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-40 sm:pb-28">
        <img
          src={heroLab}
          alt="Modern clinical laboratory with analyser equipment and racked blood collection tubes"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(105deg, oklch(0.19 0.05 256 / 0.96) 0%, oklch(0.22 0.07 256 / 0.9) 55%, oklch(0.2 0.06 256 / 0.72) 100%)",
          }}
        />

        <div
          aria-hidden="true"
          className="drift absolute -top-40 -left-24 -z-10 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.16 250 / 0.55), transparent 65%)",
          }}
        />

        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-primary-soft/80">
                Addis Ababa · Ethiopia · Business to business
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 max-w-3xl font-display text-[2.2rem] leading-[1.08] font-extrabold text-ink-foreground sm:text-6xl lg:text-[4.2rem]">
                Healthcare supply you can plan around.
                <span className="block text-primary-soft">
                  Ethiopian trade the world can rely on.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/85 sm:text-lg">
                Wayu Import/Export imports and distributes medical, laboratory, surgical and hospital consumables across Ethiopia.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/quote"
                  className="sheen inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
                >
                  Request a Quotation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="#capabilities"
                  className="glass-dark inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-ink-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
                >
                  Explore our capabilities
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="lg:pb-2">
            <div className="glass-dark rounded-3xl p-6 sm:p-7">
              <p className="eyebrow text-ink-foreground/50">Operating snapshot</p>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="text-sm text-ink-foreground/60">
                    Medical product lines catalogued
                  </dt>
                  <dd className="font-display text-4xl font-extrabold text-ink-foreground">
                    <Counter to={medicalLines} suffix="+" />
                  </dd>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div>
                    <dt className="text-sm text-ink-foreground/60">Product categories</dt>
                    <dd className="font-display text-3xl font-extrabold text-ink-foreground">
                      <Counter to={categories.length} />
                    </dd>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <dt className="text-sm text-ink-foreground/60">Operating bases</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-foreground/85">
                    Lebu, Nifas Silk-Lafto — commercial office
                    <br />
                    Kolfe Keranio — dispatch & warehousing
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CAPABILITIES ---------------- */}
      <Section id="capabilities">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why institutions work with us"
            title="Built for procurement teams, not for browsing."
            intro="Wayu is structured around the way hospitals, laboratories and international buyers actually purchase: written specifications, documented quotations and predictable delivery."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <div className="lift h-full rounded-2xl bg-card p-6 hairline">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <c.Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------- LOGISTICS CORRIDOR ---------------- */}
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
            eyebrow="Logistics & flow"
            title="From global manufacturers to Ethiopian institutions."
            intro="A single operational corridor runs from global manufacturers through Addis Ababa to Ethiopian institutions, sharing the same planning, storage and documentation discipline."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {corridor.map((c, i) => (
              <Reveal key={c.step} delay={i * 90}>
                <div className="glass-dark relative h-full rounded-2xl p-6">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-primary-soft/70">
                    {c.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-foreground/65">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-sm text-ink-foreground/70">
              <span className="inline-flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary-soft/80" aria-hidden="true" />
                Regional dispatch across Ethiopia
              </span>
              <span className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary-soft/80" aria-hidden="true" />
                Documentation prepared per shipment
              </span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- CTA ---------------- */}
      <Section tone="quiet" className="py-20 sm:py-24">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-7 py-14 text-center sm:px-16">
            <div
              aria-hidden="true"
              className="drift pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full opacity-40 blur-3xl"
              style={{
                background: "radial-gradient(circle, oklch(0.55 0.13 250 / 0.4), transparent 70%)",
              }}
            />
            <h2 className="relative mx-auto max-w-2xl font-display text-3xl leading-tight font-semibold sm:text-4xl">
              Send us your requirement list. We'll come back with a structured quotation.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-muted-foreground">
              Medical consumables for an institution — start with a single enquiry.
            </p>
            <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/quote"
                className="sheen inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                Request a Quotation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-card px-7 py-4 font-semibold hairline transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
