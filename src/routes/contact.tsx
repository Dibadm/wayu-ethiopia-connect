import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Wayu Import/Export — Addis Ababa, Ethiopia" },
      {
        name: "description",
        content:
          "Contact Wayu Import/Export in Addis Ababa for medical consumables supply enquiries or Ethiopian coffee and commodity export programmes. Office, warehousing, phone, WhatsApp and Telegram contact.",
      },
      { property: "og:title", content: "Contact — Wayu Import/Export" },
      {
        property: "og:description",
        content:
          "Reach the Wayu supply and export teams in Addis Ababa, Ethiopia.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(120),
  organisation: z.string().trim().max(140).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email address").max(180),
  message: z.string().trim().min(10, "Please add a little more detail").max(1500),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = schema.safeParse(data);
    if (!res.success) {
      const next: Record<string, string> = {};
      for (const issue of res.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Message prepared — we'll be in touch.");
  };

  return (
    <>
      <section className="surface-ink relative overflow-hidden pt-36 pb-20 sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-primary-soft/80">Contact</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl font-display text-[2.4rem] leading-[1.06] font-extrabold text-ink-foreground sm:text-5xl">
              Speak to the team handling your requirement.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl leading-relaxed text-ink-foreground/75">
              For institutional supply, export programmes, documentation requests or commercial
              partnership enquiries. If you already know what you need, a quotation request moves
              faster.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <Link
              to="/quote"
              className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              Request a quotation instead
            </Link>
          </Reveal>
        </div>
      </section>

      <Section tone="quiet">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Direct channels"
              title="Reach us the way that suits your process."
            />
            <div className="mt-9 space-y-4">
              {[
                { Icon: Mail, label: "General enquiries", value: company.email, href: `mailto:${company.email}` },
                { Icon: Mail, label: "Export desk", value: company.email2, href: `mailto:${company.email2}` },
                { Icon: Phone, label: "Telephone", value: company.phone, href: company.phoneHref },
                { Icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: company.whatsapp },
                { Icon: Send, label: "Telegram B2B channel", value: "Join the channel", href: company.telegram },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i * 70}>
                  <a
                    href={c.href}
                    className="lift flex items-center gap-4 rounded-2xl bg-card p-5 hairline"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <c.Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {c.label}
                      </span>
                      <span className="block truncate font-semibold">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Contact details above are editable placeholders until Wayu's official channels are
              confirmed.
            </p>
          </div>

          <Reveal delay={120}>
            {sent ? (
              <div className="glass flex h-full flex-col justify-center rounded-3xl p-9 text-center">
                <h2 className="font-display text-2xl font-semibold">Message prepared</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Thank you — we'll respond from our Addis Ababa office. This form is not yet
                  connected to a live mail service, so please also reach us directly on the
                  channels listed.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mx-auto mt-8 inline-flex rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-9" noValidate>
                <h2 className="font-display text-xl font-semibold">Send a message</h2>
                <div className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Your name" name="name" error={errors["name"]} required />
                    <FormField label="Organisation" name="organisation" error={errors["organisation"]} />
                  </div>
                  <FormField label="Email" name="email" type="email" error={errors["email"]} required />
                  <label className="block">
                    <span className="block text-sm font-semibold">
                      Message<span className="text-destructive"> *</span>
                    </span>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      maxLength={1500}
                      className="mt-2.5 w-full rounded-xl bg-background p-4 text-sm leading-relaxed hairline outline-none focus-visible:border-primary"
                    />
                    {errors["message"] ? (
                      <span className="mt-2 block text-sm text-destructive">{errors["message"]}</span>
                    ) : null}
                  </label>
                  <button
                    type="submit"
                    className="sheen inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Send message
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our locations" title="Addis Ababa, Ethiopia" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {company.locations.map((loc, i) => (
            <Reveal key={loc.label} delay={i * 100}>
              <div className="lift h-full rounded-3xl bg-card p-7 hairline">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{loc.label}</h3>
                <address className="mt-2.5 text-sm leading-relaxed text-muted-foreground not-italic">
                  {loc.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-6">
          <div className="overflow-hidden rounded-3xl hairline">
            <iframe
              title="Map of Addis Ababa, Ethiopia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=38.62%2C8.88%2C38.86%2C9.05&layer=mapnik"
              loading="lazy"
              className="h-[22rem] w-full border-0"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Map shows the Addis Ababa area. A precise pinned location will be added once confirmed.
          </p>
        </Reveal>
      </Section>
    </>
  );
}

function FormField({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string | undefined;
  error?: string | undefined;
  required?: boolean | undefined;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={180}
        className="mt-2.5 h-12 w-full rounded-xl bg-background px-4 text-sm hairline outline-none focus-visible:border-primary"
      />
      {error ? <span className="mt-2 block text-sm text-destructive">{error}</span> : null}
    </label>
  );
}
