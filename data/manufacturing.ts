export type ManufacturingStep = {
  slug: string;
  step: number;
  title: string;
  summary: string;
  detail: string;
  points: string[];
};

export const MANUFACTURING_STEPS: ManufacturingStep[] = [
  {
    slug: "casting",
    step: 1,
    title: "Casting",
    summary: "Molten aluminium alloy is gravity and pressure die-cast into raw piston and block blanks, including sand-blasting to clean surface residue.",
    detail:
      "Every batch begins with certified raw aluminium alloy, melted and cast under controlled temperature curves. Post-cast, components pass through a sand-blasting stage to remove mould residue and surface scale before entering machining.",
    points: ["Certified raw material intake", "Gravity & pressure die-casting", "Sand-blasting & de-flashing", "Batch traceability tagging"],
  },
  {
    slug: "machining",
    step: 2,
    title: "Machining",
    summary: "CNC turning, milling and boring bring every component to final OEM-tolerance dimensions.",
    detail:
      "Raw castings move to multi-axis CNC cells for turning, boring and profile milling. In-line gauging checks bore diameter, ovality and skirt profile continuously through the run, not just at the end of it.",
    points: ["Multi-axis CNC turning & boring", "In-line dimensional gauging", "Ring-groove & pin-bore finishing", "Surface profiling to OEM spec"],
  },
  {
    slug: "heat-treatment",
    step: 3,
    title: "Heat Treatment",
    summary: "Controlled thermal cycles relieve internal stress and increase hardness for long service life.",
    detail:
      "Components are solution heat-treated and artificially aged in calibrated furnaces, improving fatigue strength and dimensional stability before they ever see an engine bay.",
    points: ["Solution heat treatment", "Controlled ageing cycles", "Hardness normalization", "Stress-relief verification"],
  },
  {
    slug: "quality-inspection",
    step: 4,
    title: "Quality Inspection",
    summary: "100% inspection across dimension, hardness and material composition before any part is packed.",
    detail:
      "Every part is checked against a documented inspection plan — dimensional gauging, hardness testing and material verification — with rejected components pulled and root-caused before the batch proceeds.",
    points: ["100% dimensional inspection", "Hardness & material testing", "Batch documentation & traceability", "Root-cause rejection handling"],
  },
  {
    slug: "packaging",
    step: 5,
    title: "Packaging",
    summary: "Export-grade moisture-proof packaging and final dispatch, sized for OEM, dealer or export volumes.",
    detail:
      "Finished components are individually protected, boxed to OEM or export-carton specification, and dispatched with full documentation for domestic dealer networks or international export shipment.",
    points: ["Moisture-proof export packaging", "OEM-spec carton sizing", "Dispatch documentation", "Container / bulk load-out"],
  },
];
