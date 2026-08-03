// Central, easy-to-edit company + catalogue data for Wayu pharmaceutical and medical equipment import plc.
// Replace placeholder contact details and links with real values when available.

export const company = {
  name: "Wayu pharmaceutical and medical equipment import plc",
  shortName: "Wayu Pharmaceutical",
  tagline: "Reliable healthcare supply.",
  country: "Ethiopia",
  city: "Addis Ababa",
  // TODO: replace placeholders below with Wayu's official details.
  email: "info@example.com", // placeholder
  email2: "info@example.com", // placeholder
  phone: "+251911897333", // placeholder
  phoneHref: "tel:+251911897333", // placeholder
  whatsapp: "https://wa.me/251000000000", // placeholder
  telegram: "https://t.me/example", // placeholder
  locations: [
    {
      label: "Administrative hub",
      lines: ["Nifas Silk-Lafto Sub-City", "Lebu / Kebele 25", "Addis Ababa, Ethiopia"],
      note: "Commercial, procurement and documentation office.",
    },
    {
      label: "Dispatch & warehousing",
      lines: ["Kolfe Keranio Sub-City", "Addis Ababa, Ethiopia"],
      note: "Order consolidation, storage and regional dispatch.",
    },
  ],
} as const;

export type ProductCategory =
  | "Diagnostic & Laboratory"
  | "Surgical Sutures"
  | "Hospital Consumables & PPE";

export const categories: ProductCategory[] = [
  "Diagnostic & Laboratory",
  "Surgical Sutures",
  "Hospital Consumables & PPE",
];

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  summary: string;
  specs: string[];
  variants: string[];
};

export const products: Product[] = [
  {
    id: "vacuum-tubes",
    name: "Vacuum Blood Collection Tubes",
    category: "Diagnostic & Laboratory",
    summary:
      "Sterile evacuated tubes for venous sampling, supplied by colour-coded additive with institutional case quantities.",
    specs: ["Sterile", "Colour-coded caps", "Case & pallet quantities"],
    variants: ["2 ml", "3 ml", "4 ml", "5 ml", "6 ml"],
  },
  {
    id: "edta-tubes",
    name: "EDTA K2 / K3 Tubes",
    category: "Diagnostic & Laboratory",
    summary:
      "Haematology tubes with spray-dried K2 or liquid K3 EDTA anticoagulant for CBC and related panels.",
    specs: ["K2 spray-dried", "K3 liquid", "Lavender cap"],
    variants: ["1 ml", "2 ml", "3 ml", "4 ml"],
  },
  {
    id: "clot-activator",
    name: "Clot Activator Tubes",
    category: "Diagnostic & Laboratory",
    summary:
      "Silica-coated serum tubes for accelerated clotting in routine chemistry and serology workflows.",
    specs: ["Silica activator", "Red cap", "Serum chemistry"],
    variants: ["3 ml", "4 ml", "5 ml", "6 ml"],
  },
  {
    id: "gel-sst",
    name: "Gel & Clot / SST Tubes",
    category: "Diagnostic & Laboratory",
    summary:
      "Separator gel tubes producing a stable barrier between serum and cells after centrifugation.",
    specs: ["Separator gel", "Gold / yellow cap", "Stable serum barrier"],
    variants: ["3.5 ml", "4 ml", "5 ml"],
  },
  {
    id: "microtubes",
    name: "Microtubes",
    category: "Diagnostic & Laboratory",
    summary:
      "Paediatric and micro-sampling tubes for low-volume specimens and capillary collection.",
    specs: ["Low volume", "EDTA / serum options", "Screw or snap cap"],
    variants: ["0.5 ml", "1 ml", "1.5 ml", "2 ml"],
  },
  {
    id: "specimen-containers",
    name: "Specimen Containers",
    category: "Diagnostic & Laboratory",
    summary:
      "Leak-resistant containers for urine, stool and histology specimens with secure screw closures.",
    specs: ["Leak-resistant", "Graduated", "Sterile & non-sterile"],
    variants: ["30 ml", "60 ml", "100 ml", "120 ml"],
  },
  {
    id: "pipette-tips",
    name: "Pipette Tips",
    category: "Diagnostic & Laboratory",
    summary:
      "Universal-fit tips for manual and semi-automated pipettes, available bulk-bagged or racked.",
    specs: ["Universal fit", "Racked or bulk", "Filtered option"],
    variants: ["10 µl", "200 µl", "1000 µl"],
  },
  {
    id: "vicryl",
    name: "Polyglactin 910 Suture (Vicryl type)",
    category: "Surgical Sutures",
    summary:
      "Braided absorbable suture for soft-tissue approximation, supplied with a range of needle geometries.",
    specs: ["Absorbable", "Braided coated", "Sterile foil pack"],
    variants: ["USP 4-0", "USP 3-0", "USP 2-0", "USP 1", "70 cm / 90 cm"],
  },
  {
    id: "prolene",
    name: "Polypropylene Suture (Prolene type)",
    category: "Surgical Sutures",
    summary:
      "Monofilament non-absorbable suture for cardiovascular, general and plastic surgery closure.",
    specs: ["Non-absorbable", "Monofilament", "Blue pigmented"],
    variants: ["USP 6-0", "USP 5-0", "USP 4-0", "USP 3-0", "75 cm"],
  },
  {
    id: "nylon",
    name: "Nylon / Polyamide Suture",
    category: "Surgical Sutures",
    summary:
      "Monofilament non-absorbable suture widely used for skin closure and general surgical repair.",
    specs: ["Non-absorbable", "Monofilament", "1/2 & 3/8 circle needles"],
    variants: ["USP 5-0", "USP 4-0", "USP 3-0", "USP 2-0", "45 cm / 75 cm"],
  },
  {
    id: "luer-lock-syringe",
    name: "Luer-Lock Syringes",
    category: "Hospital Consumables & PPE",
    summary:
      "Single-use sterile syringes with threaded luer-lock hub for secure needle attachment.",
    specs: ["Sterile, single use", "Luer-lock hub", "With or without needle"],
    variants: ["2 ml", "5 ml", "10 ml"],
  },
  {
    id: "luer-slip-syringe",
    name: "Luer-Slip Syringes",
    category: "Hospital Consumables & PPE",
    summary:
      "Single-use sterile syringes with slip-tip hub for routine injection and irrigation use.",
    specs: ["Sterile, single use", "Slip-tip hub", "Clear barrel graduations"],
    variants: ["2 ml", "5 ml", "10 ml"],
  },
  {
    id: "iv-sets",
    name: "IV Infusion Sets",
    category: "Hospital Consumables & PPE",
    summary:
      "Gravity infusion sets with roller clamp and drip chamber for ward and emergency use.",
    specs: ["Sterile", "Roller clamp", "Vented / non-vented"],
    variants: ["20 drops/ml", "60 drops/ml (micro)"],
  },
  {
    id: "gloves",
    name: "Medical Gloves",
    category: "Hospital Consumables & PPE",
    summary:
      "Examination and surgical gloves in nitrile and latex, supplied in institutional carton volumes.",
    specs: ["Nitrile & latex", "Powder-free", "Examination / surgical"],
    variants: ["S", "M", "L", "XL"],
  },
  {
    id: "face-masks",
    name: "Face Masks",
    category: "Hospital Consumables & PPE",
    summary:
      "Three-ply and respirator-style masks for clinical and laboratory environments.",
    specs: ["3-ply", "Earloop / headband", "Carton volumes"],
    variants: ["3-ply surgical", "Respirator style"],
  },
];

