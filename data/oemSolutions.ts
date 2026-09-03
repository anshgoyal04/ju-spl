export const OEM_STATS = [
  { value: 30, suffix: "+", label: "Years manufacturing" },
  { value: 4, suffix: "L+", label: "Pistons capacity / year" },
  { value: 5000, suffix: "+", label: "Products in catalog" },
  { value: 20, suffix: "+", label: "Export countries" },
];

export type OemCapability = {
  title: string;
  desc: string;
};

export const OEM_CAPABILITIES: OemCapability[] = [
  {
    title: "Engineering support",
    desc: "Work with our team on spec matching, tolerance requirements and pilot samples before committing to volume.",
  },
  {
    title: "Scalable capacity",
    desc: "Production lines built to move from pilot batches to recurring bulk contracts, without a quality dip along the way.",
  },
  {
    title: "Private labeling",
    desc: "Custom packaging and branding for OEM and private-label programs — from carton design to inserts and documentation.",
  },
  {
    title: "Documented quality",
    desc: "Full batch traceability, inspection records and material certification on request — the same discipline behind our own SPL Piston brand.",
  },
];

export type OemProcessStep = {
  title: string;
  desc: string;
};

export const OEM_PROCESS: OemProcessStep[] = [
  { title: "Share your specification", desc: "Send drawings, tolerance requirements, or a reference sample part." },
  { title: "Pilot batch & approval", desc: "We manufacture a pilot run for your sign-off before scaling production." },
  { title: "Volume ramp-up", desc: "Production scales to your required volume, holding the same tolerance." },
  { title: "Ongoing supply", desc: "Recurring batches, fully documented and dispatched on schedule." },
];