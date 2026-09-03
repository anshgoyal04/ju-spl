export type QualityPillar = {
  id: string;
  title: string;
  summary: string;
  checklist: string[];
  image: string;
};

export const QUALITY_STATS = [
  { value: 100, suffix: "%", label: "Batches inspected" },
  { value: 2, suffix: "", label: "ISO 9001:2015 certifications" },
  { value: 5, suffix: "", label: "Quality checkpoints per batch" },
  { value: 30, suffix: "+", label: "Years of process refinement" },
];

export const QUALITY_PILLARS: QualityPillar[] = [
  {
    id: "inspection-laboratory",
    title: "Inspection laboratory",
    summary:
      "Every batch is routed through our in-house inspection laboratory before it's cleared for packing, with documented results retained for full traceability.",
    checklist: [
      "Dedicated in-house lab, not outsourced",
      "Calibrated measuring equipment",
      "Documented pass/fail records per batch",
      "Rejected components root-caused, not just discarded",
    ],
    image: "/images/quality/inspection-laboratory.jpg",
  },
  {
    id: "dimension-testing",
    title: "Dimension testing",
    summary:
      "Bore diameter, ovality, ring-gap and skirt profile are measured against OEM tolerance on calibrated gauging equipment — the same tolerance standard OEM buyers themselves audit against.",
    checklist: [
      "Bore diameter & ovality checks",
      "Ring-gap verification",
      "Skirt profile measurement",
      "±0.005 mm tolerance standard",
    ],
    image: "/images/quality/dimension-testing.jpg",
  },
  {
    id: "hardness-testing",
    title: "Hardness testing",
    summary:
      "Post heat-treatment hardness is verified on every batch to confirm fatigue resistance and long-term durability, before a component ever reaches an engine bay.",
    checklist: [
      "Post-heat-treatment hardness checks",
      "Fatigue resistance verification",
      "Consistent hardness across a batch",
      "Results logged against batch ID",
    ],
    image: "/images/quality/hardness-testing.jpg",
  },
  {
    id: "material-testing",
    title: "Material testing",
    summary:
      "Incoming raw alloy is verified for composition before it enters the casting line, ensuring consistency batch after batch and catching supplier variance early.",
    checklist: [
      "Incoming raw alloy verification",
      "Composition consistency checks",
      "Supplier-batch traceability",
      "Non-conforming material quarantined",
    ],
    image: "/images/quality/material-testing.jpg",
  },
];

export type QualityProcessStep = {
  title: string;
  desc: string;
};

export const QUALITY_PROCESS: QualityProcessStep[] = [
  { title: "Incoming material verification", desc: "Raw alloy checked for composition before it's cleared for casting." },
  { title: "In-process inspection", desc: "Dimensions checked continuously through machining, not just at the end." },
  { title: "Final batch testing", desc: "Hardness, dimension and material checks on the completed batch." },
  { title: "Documentation & traceability", desc: "Every result logged against batch ID for full traceability." },
  { title: "Dispatch clearance", desc: "Only batches that clear every checkpoint are cleared for packing." },
];