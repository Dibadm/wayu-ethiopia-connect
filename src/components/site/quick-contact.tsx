import { useState } from "react";
import { MessageCircle, Send, Phone, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

const actions = [
  {
    label: "WhatsApp",
    href: company.whatsapp,
    Icon: MessageCircle,
  },
  {
    label: "Telegram B2B channel",
    href: company.telegram,
    Icon: Send,
  },
  {
    label: "Call our office",
    href: company.phoneHref,
    Icon: Phone,
  },
];

export function QuickContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2.5 sm:right-6 sm:bottom-6">
      {actions.map((a, i) => (
        <a
          key={a.label}
          href={a.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={a.label}
          title={a.label}
          style={{ transitionDelay: `${open ? i * 55 : 0}ms` }}
          className={cn(
            "glass inline-flex h-12 w-12 items-center justify-center rounded-full text-primary transition-all duration-300",
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-90 opacity-0",
          )}
        >
          <a.Icon className="h-5 w-5" aria-hidden="true" />
        </a>
      ))}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close quick contact" : "Open quick contact"}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Plus className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
