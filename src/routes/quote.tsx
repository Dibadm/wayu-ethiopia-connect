import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Paperclip } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/reveal";
import { categories, products } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const searchSchema = z.object({
  division: z.enum(["medical"]).optional(),
  product: z.string().max(120).optional(),
});

export const Route = createFileRoute("/quote")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Request a Quotation — Medical Consumables | Wayu" },
      {
        name: "description",
        content:
          "Submit a B2B quotation request to Wayu Import/Export for medical, laboratory and hospital consumables for Ethiopian institutions.",
      },
      { property: "og:title", content: "Request a Quotation — Wayu Import/Export" },
      {
        property: "og:description",
        content:
          "A structured B2B quotation request for institutional procurement teams and international buyers.",
      },
    ],
  }),
  component: QuotePage,
});

const steps = ["Division", "Requirement", "Organisation", "Review"] as const;

type Division = "medical" | "export";

type FormState = {
  division: Division | "";
  category: string;
  items: string;
  quantity: string;
  destination: string;
  organisation: string;
  contactName: string;
  email: string;
  phone: string;
  notes: string;
  fileName: string;
};

const emptyForm: FormState = {
  division: "",
  category: "",
  items: "",
  quantity: "",
  destination: "",
  organisation: "",
  contactName: "",
  email: "",
  phone: "",
  notes: "",
  fileName: "",
};

const fieldSchemas = {
  organisation: z.string().trim().min(2, "Enter your organisation name").max(140),
  contactName: z.string().trim().min(2, "Enter a contact name").max(120),
  email: z.string().trim().email("Enter a valid business email").max(180),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  items: z.string().trim().min(3, "List at least one requested item").max(2000),
  quantity: z.string().trim().max(200).optional().or(z.literal("")),
};

function QuotePage() {
  const search = Route.useSearch();
  const [step, setStep] = useState(search.division ? 1 : 0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormState>({
    ...emptyForm,
    division: search.division ?? "",
    items: search.product ? `${search.product} — ` : "",
  });

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validateStep = (index: number) => {
    const next: Record<string, string> = {};
    if (index === 0 && !form.division) next["division"] = "Select a division";
    if (index === 1) {
      const items = fieldSchemas.items.safeParse(form.items);
      if (!items.success) next["items"] = items.error.issues[0]!.message;
    }
    if (index === 2) {
      for (const key of ["organisation", "contactName", "email"] as const) {
        const res = fieldSchemas[key].safeParse(form[key]);
        if (!res.success) next[key] = res.error.issues[0]!.message;
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(2)) {
      toast.error("Please complete the required fields.");
      setStep(2);
      return;
    }
    setSubmitted(true);
    toast.success("Quotation request prepared");
  };

  if (submitted) {
    return (
      <section className="surface-quiet flex min-h-screen items-center px-5 pt-32 pb-24 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald/10 text-emerald">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </span>
          <h1 className="mt-8 font-display text-3xl font-semibold">Request received</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Thank you, {form.contactName || "there"}. Your{" "}
            supply enquiry for{" "}
            {form.organisation || "your organisation"} has been recorded. Our team will respond
            with a structured quotation and confirm availability.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Note: this form is not yet connected to a live submission service. Until it is, please
            also reach us directly so nothing is missed.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              Contact details
            </Link>
            <button
              type="button"
              onClick={() => {
                setForm(emptyForm);
                setStep(0);
                setSubmitted(false);
              }}
              className="inline-flex items-center justify-center rounded-full bg-card px-6 py-3.5 text-sm font-semibold hairline"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  const categoryOptions =
    [...categories, "Other / mixed requirement"];

  return (
    <section className="surface-quiet px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow text-primary">Request a quotation</p>
          <h1 className="mt-5 font-display text-3xl leading-tight font-semibold sm:text-4xl">
            Tell us what you need. We'll quote against it.
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Four short steps. Institutional purchase requests and requirement lists can be
            referenced in the notes, and documents can be attached at the final step.
          </p>
        </Reveal>

        {/* Progress */}
        <Reveal delay={90} className="mt-10">
          <ol className="flex items-center gap-2" aria-label="Progress">
            {steps.map((s, i) => (
              <li key={s} className="flex flex-1 items-center gap-2">
                <span
                  className={cn(
                    "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors",
                    i < step
                      ? "bg-emerald text-emerald-foreground"
                      : i === step
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground",
                  )}
                  aria-current={i === step ? "step" : undefined}
                >
                  {i < step ? <Check className="h-4 w-4" aria-hidden="true" /> : i + 1}
                </span>
                <span
                  className={cn(
                    "hidden text-xs font-semibold sm:block",
                    i === step ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s}
                </span>
                {i < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-px flex-1 transition-colors",
                      i < step ? "bg-emerald" : "bg-border",
                    )}
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={140} className="mt-8">
          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-9" noValidate>
            {/* Step 0 — division */}
            {step === 0 ? (
              <fieldset>
                <legend className="font-display text-xl font-semibold">
                  Which division is your enquiry for?
                </legend>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {(
                    [
                      {
                        value: "medical",
                        title: "Medical & Pharmaceutical",
                        body: "Diagnostic, laboratory, surgical and hospital consumables.",
                      },
                                          ] as const
                  ).map((d) => (
                    <label
                      key={d.value}
                      className={cn(
                        "cursor-pointer rounded-2xl bg-card p-6 hairline transition-all duration-300 hover:-translate-y-0.5",
                        form.division === d.value && "border-primary ring-2 ring-primary/30",
                      )}
                    >
                      <input
                        type="radio"
                        name="division"
                        value={d.value}
                        checked={form.division === d.value}
                        onChange={() => set("division", d.value)}
                        className="sr-only"
                      />
                      <span className="block font-display text-base font-semibold">{d.title}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                        {d.body}
                      </span>
                    </label>
                  ))}
                </div>
                {errors["division"] ? (
                  <p className="mt-3 text-sm text-destructive">{errors["division"]}</p>
                ) : null}
              </fieldset>
            ) : null}

            {/* Step 1 — requirement */}
            {step === 1 ? (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold">Your requirement</h2>
                <Field label="Category" hint="Helps us route the enquiry to the right team.">
                  <select
                    value={form.category}
                    onChange={(e) => set("category", e.target.value)}
                    className="h-12 w-full rounded-xl bg-background px-4 text-sm hairline outline-none focus-visible:border-primary"
                  >
                    <option value="">Select a category (optional)</option>
                    {categoryOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field
                  label="Requested items"
                  required
                  error={errors["items"]}
                  hint="List products, sizes and specifications — one per line."
                >
                  <textarea
                    value={form.items}
                    onChange={(e) => set("items", e.target.value)}
                    rows={6}
                    maxLength={2000}
                    required
                    className="w-full rounded-xl bg-background p-4 text-sm leading-relaxed hairline outline-none focus-visible:border-primary"
                    placeholder={
                      form.division === "export"
                        ? "Grade, processing, screen size, volume…"
                        : "EDTA K2 tubes 4 ml — 200 cartons\nLuer-lock syringes 5 ml — 50 cartons"
                    }
                  />
                </Field>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Quantities / volume" hint="Cartons, units, tonnes or containers.">
                    <input
                      value={form.quantity}
                      onChange={(e) => set("quantity", e.target.value)}
                      maxLength={200}
                      className="h-12 w-full rounded-xl bg-background px-4 text-sm hairline outline-none focus-visible:border-primary"
                    />
                  </Field>
                  <Field
                    label={"Delivery location"}
                  >
                    <input
                      value={form.destination}
                      onChange={(e) => set("destination", e.target.value)}
                      maxLength={140}
                      className="h-12 w-full rounded-xl bg-background px-4 text-sm hairline outline-none focus-visible:border-primary"
                    />
                  </Field>
                </div>
                {form.division === "medical" ? (
                  <details className="rounded-xl bg-card p-4 text-sm hairline">
                    <summary className="cursor-pointer font-semibold">
                      Need the catalogue while you fill this in?
                    </summary>
                    <p className="mt-3 text-muted-foreground">
                      {products.length} catalogued lines across {categories.length} categories are
                      listed on the{" "}
                      <Link to="/medical" className="font-semibold text-primary">
                        medical division page
                      </Link>
                      .
                    </p>
                  </details>
                ) : null}
              </div>
            ) : null}

            {/* Step 2 — organisation */}
            {step === 2 ? (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold">Organisation & contact</h2>
                <Field label="Organisation / institution" required error={errors["organisation"]}>
                  <input
                    value={form.organisation}
                    onChange={(e) => set("organisation", e.target.value)}
                    maxLength={140}
                    required
                    className="h-12 w-full rounded-xl bg-background px-4 text-sm hairline outline-none focus-visible:border-primary"
                  />
                </Field>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Contact name" required error={errors["contactName"]}>
                    <input
                      value={form.contactName}
                      onChange={(e) => set("contactName", e.target.value)}
                      maxLength={120}
                      required
                      className="h-12 w-full rounded-xl bg-background px-4 text-sm hairline outline-none focus-visible:border-primary"
                    />
                  </Field>
                  <Field label="Business email" required error={errors["email"]}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      maxLength={180}
                      required
                      className="h-12 w-full rounded-xl bg-background px-4 text-sm hairline outline-none focus-visible:border-primary"
                    />
                  </Field>
                </div>
                <Field label="Phone / WhatsApp">
                  <input
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    maxLength={40}
                    className="h-12 w-full rounded-xl bg-background px-4 text-sm hairline outline-none focus-visible:border-primary"
                  />
                </Field>
                <Field
                  label="Procurement requirements"
                  hint="Tender reference, delivery deadlines, packaging or documentation needs."
                >
                  <textarea
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    rows={4}
                    maxLength={1500}
                    className="w-full rounded-xl bg-background p-4 text-sm leading-relaxed hairline outline-none focus-visible:border-primary"
                  />
                </Field>
              </div>
            ) : null}

            {/* Step 3 — review */}
            {step === 3 ? (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold">Review & attach</h2>
                <dl className="divide-y divide-border rounded-2xl bg-card p-5 text-sm hairline">
                  {[
                    [
                      "Division",
                      form.division === "export"
                        ? "Coffee & Commodity Export"
                        : "Medical & Pharmaceutical",
                    ],
                    ["Category", form.category || "—"],
                    ["Requested items", form.items || "—"],
                    ["Quantities", form.quantity || "—"],
                    ["Destination", form.destination || "—"],
                    ["Organisation", form.organisation || "—"],
                    ["Contact", `${form.contactName || "—"} · ${form.email || "—"}`],
                  ].map(([k, v]) => (
                    <div key={k} className="grid gap-1 py-3 sm:grid-cols-[10rem_minmax(0,1fr)]">
                      <dt className="font-semibold text-muted-foreground">{k}</dt>
                      <dd className="whitespace-pre-line break-words">{v}</dd>
                    </div>
                  ))}
                </dl>

                <Field
                  label="Attach purchase request or requirement list"
                  hint="PDF, image or document. Optional."
                >
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-background px-4 py-3.5 text-sm hairline">
                    <Paperclip className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <span className="truncate text-muted-foreground">
                      {form.fileName || "Choose a file"}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                      onChange={(e) => set("fileName", e.target.files?.[0]?.name ?? "")}
                      className="sr-only"
                    />
                  </label>
                </Field>
              </div>
            ) : null}

            {/* Controls */}
            <div className="mt-9 flex items-center justify-between gap-3 border-t border-border/70 pt-6">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </button>
              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => {
                    if (validateStep(step)) setStep((s) => s + 1);
                  }}
                  className="sheen inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="sheen inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Submit request
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  hint?: string | undefined;
  error?: string | undefined;
  required?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </span>
      {hint ? <span className="mt-1 block text-xs text-muted-foreground">{hint}</span> : null}
      <span className="mt-2.5 block">{children}</span>
      {error ? <span className="mt-2 block text-sm text-destructive">{error}</span> : null}
    </label>
  );
}
