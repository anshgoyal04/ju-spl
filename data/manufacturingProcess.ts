export type ProcessStep = {
  step: number;
  title: string;
  image: string;
};

export type ProcessPhase = {
  id: string;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
};

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    id: "planning-sourcing",
    title: "Planning & Sourcing",
    subtitle: "Every batch starts with a confirmed order and certified raw material.",
    steps: [
      { step: 1, title: "Order", image: "/images/manufacturing-process/01-order.jpg" },
      { step: 2, title: "Production Planning", image: "/images/manufacturing-process/02-production-planning.jpeg" },
      { step: 3, title: "Raw Material", image: "/images/manufacturing-process/03-raw-material.jpeg" },
      { step: 4, title: "Casting", image: "/images/manufacturing-process/04-casting.jpeg" },
    ],
  },
  {
    id: "heat-precision-setup",
    title: "Heat Treatment & Setup",
    subtitle: "Castings are heat-treated and prepared for precision machining.",
    steps: [
      { step: 5, title: "Heat Treatment", image: "/images/manufacturing-process/05-heat-treatment.jpeg" },
      { step: 6, title: "Locating Sheet", image: "/images/manufacturing-process/06-locating-sheet.jpeg" },
      { step: 7, title: "CNC Grooving", image: "/images/manufacturing-process/07-cnc-grooving.jpeg" },
      { step: 8, title: "Oil Hole Drilling", image: "/images/manufacturing-process/08-oil-hole-drilling.jpeg" },
    ],
  },
  {
    id: "turning-boring",
    title: "Turning & Boring",
    subtitle: "Multi-stage CNC turning and boring bring every part to precise dimension.",
    steps: [
      { step: 9, title: "Rough Turning", image: "/images/manufacturing-process/09-rough-turning-facia.jpeg" },
      { step: 10, title: "Pre-OD Turning", image: "/images/manufacturing-process/10-pre-od-turning-facia.jpeg" },
      { step: 11, title: "Rough Bore + Finish Bore", image: "/images/manufacturing-process/11-rough-finish-bore.jpeg" },
      { step: 12, title: "OD Finishing", image: "/images/manufacturing-process/12-od-finishing.jpeg" },
    ],
  },
  {
    id: "finishing-operations",
    title: "Finishing Operations",
    subtitle: "Surface finishing operations bring each component to its final form.",
    steps: [
      { step: 13, title: "Burnishing", image: "/images/manufacturing-process/13-burnishing.jpeg" },
      { step: 14, title: "Circlip Groove", image: "/images/manufacturing-process/14-circlip-groove.jpeg" },
      { step: 15, title: "Size Marking", image: "/images/manufacturing-process/15-size-marking.jpeg" },
      { step: 16, title: "Ultrasonic Cleaning", image: "/images/manufacturing-process/16-ultrasonic-cleaning.jpeg" },
    ],
  },
  {
    id: "quality-dispatch",
    title: "Quality & Dispatch",
    subtitle: "Every part is inspected and documented before it leaves the factory.",
    steps: [
      { step: 17, title: "Size Inspection", image: "/images/manufacturing-process/17-size-inspection.jpeg" },
      { step: 18, title: "Final Inspection", image: "/images/manufacturing-process/18-final-inspection.jpeg" },
      { step: 19, title: "Packing", image: "/images/manufacturing-process/19-packing.jpeg" },
      { step: 20, title: "Ready to Dispatch", image: "/images/manufacturing-process/20-ready-to-dispatch.jpeg" },
    ],
  },
];