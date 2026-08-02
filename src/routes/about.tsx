import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, MapPin, PackageCheck, Route as RouteIcon } from "lucide-react";
import warehouseImg from "@/assets/warehouse.jpg";
import logisticsPort from "@/assets/logistics-port.jpg";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Wayu Import/Export — Addis Ababa Trade & Distribution Company" },
      {
        name: "description",
        content:
          "Wayu Import/Export is a privately held B2B import and export enterprise in Addis Ababa, Ethiopia, with a commercial office in Lebu and dispatch and warehousing operations in Kolfe Keranio.",
      },
      { property: "og:title", content: "Company & Logistics — Wayu Import/Export" },
      {
        property: "og:description",
        content:
          "A privately held Ethiopian import/export enterprise bridging global suppliers, healthcare institutions and international commodity buyers.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="surface-ink relative isolate overflow-hidden pt-36 pb-20 sm:pt-44">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-primary-soft/80">The company</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl font-display text-[2.4rem] leading-[1.06] font-extrabold text-ink-foreground sm:text-5xl lg:text-[3.6rem]">
              A privately held Ethiopian trade enterprise, built around dependability.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
              Wayu Import/Export operates from Addis Ababa as a bridge in two directions: bringing
              global medical and pharmaceutical consumables to Ethiopian healthcare institutions,
              and taking Ethiopian coffee and agricultural commodities to international markets.
            </p>
          </Reveal>
        </div>
      </section>

      <Section tone="quiet">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={warehouseImg}
                alt="Wayu distribution warehouse aisle with organised stock"
                loading="lazy"
                width={1408}
                height={912}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="How we operate"
              title="Two divisions, one operating discipline."
              intro="Wayu is deliberately structured so that both divisions share planning, storage and documentation practice. That is what makes supply predictable."
            />
            <div className="mt-9 space-y-4">
              {[
                {
                  Icon: PackageCheck,
                  title: "Specification-led purchasing",
                  body: "Nothing is quoted loosely. Requirements are captured in writing, then matched against verified supply.",
                },
                {
                  Icon: RouteIcon,
                  title: "Controlled movement",
                  body: "Import consignments and export consolidations are planned through the same warehousing and dispatch base.",
                },
                {
                  Icon: Building2,
                  title: "Institutional communication",
                  body: "We work to the pace of procurement teams: clear documentation, traceable correspondence, defined contacts.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="flex gap-5 rounded-2xl bg-card p-6 hairline">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <item.Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Locations */}
      <Section>
        <SectionHeading
          eyebrow="Operating locations"
          title="Addis Ababa, working in two places for a reason."
          intro="Commercial and procurement work sits close to partners and institutions; storage and dispatch sit where movement is efficient."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {company.locations.map((loc, i) => (
            <Reveal key={loc.label} delay={i * 110}>
              <article className="lift h-full rounded-3xl bg-card p-8 hairline">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{loc.label}</h3>
                <address className="mt-3 text-sm leading-relaxed text-muted-foreground not-italic">
                  {loc.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
                <p className="mt-5 border-t border-border pt-5 text-sm text-muted-foreground">
                  {loc.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Corridor */}
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
        <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeading
            tone="ink"
            eyebrow="Trade corridor"
            title="Ethiopia at the centre, connected in both directions."
            intro="Inbound: manufacturers and suppliers of medical and pharmaceutical consumables. Outbound: coffee and agricultural commodities to international buyers."
          />
          <Reveal delay={140}>
            <div className="glass-dark rounded-3xl p-8">
              <ol className="space-y-6">
                {[
                  { label: "Inbound", route: "Global suppliers → Addis Ababa → Ethiopian institutions" },
                  { label: "Outbound", route: "Ethiopian origin → Addis Ababa consolidation → destination ports" },
                  { label: "Support", route: "Documentation · warehousing · scheduled dispatch" },
                ].map((r) => (
                  <li key={r.label}>
                    <p className="eyebrow text-primary-soft/70">{r.label}</p>
                    <p className="mt-2 font-display text-base leading-relaxed font-semibold text-ink-foreground">
                      {r.route}
                    </p>
                    <div
                      aria-hidden="true"
                      className="mt-4 h-px w-full"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.7 0.12 250 / 0.8), transparent 90%)",
                      }}
                    />
                  </li>
                ))}
              </ol>
              <Link
                to="/quote"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                Start an enquiry
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="quiet">
        <Reveal>
          <div className="rounded-3xl bg-card p-8 hairline sm:p-10">
            <h2 className="font-display text-xl font-semibold">
              A note on certifications and credentials
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Wayu publishes only what can be substantiated. Licences, registrations,
              certifications and partner references are added to this page as documentation is
              confirmed — this section is reserved for that purpose and is intended to be updated
              by the company.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
