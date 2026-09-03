export type Milestone = {
  year: string;
  text: string;
};

export const JOURNEY_MILESTONES: Milestone[] = [
  { year: "1995", text: "Founded with just 2 employees & 2 machines. Producing 2,000 pistons/month." },
  { year: "2000", text: "Launched our own brand — SPL Pistons — focused on 2-wheeler pistons." },
  { year: "2006–07", text: "Expanded into a 4,000 sq. ft. facility. Output scaled to 4,000 pistons/month." },
  { year: "2012", text: "Grew to 6,000 sq. ft. Added our first CNC machine. Output: 5,500–6,000/month." },
  { year: "2016", text: "Moved into a 12,000 sq. ft. facility with advanced CNC & precision machines. ISO 9001 certified. Output crossed 10,000/month." },
  { year: "2020", text: "Scaled up manpower and production capacity to meet growing demand." },
  { year: "2024", text: "Opened a new 25,000 sq. ft. facility. Output doubled to 20,000 pistons/month." },
  { year: "2026–27", text: "Manufacturing 4,00,000+ pistons/year. New Kawasaki machine arriving Dec 2026 — targeting 80,000/month by Jan 2027." },
];

export const JOURNEY_CLOSING_LINE =
  "Same founders. Same factory roots. 32 years of consistent, in-house growth — never outsourced.";

export type GrowthBar = {
  label: string;
  value: number;
  displayValue: string;
  isTarget?: boolean;
};

export const GROWTH_BARS: GrowthBar[] = [
  { label: "1995", value: 2, displayValue: "2K" },
  { label: "2006–07", value: 4, displayValue: "4K" },
  { label: "2012", value: 6, displayValue: "6K" },
  { label: "2016", value: 10, displayValue: "10K" },
  { label: "2024", value: 20, displayValue: "20K" },
  { label: "2026", value: 40, displayValue: "40K" },
  { label: "2027", value: 80, displayValue: "80K", isTarget: true },
];

export const GROWTH_STATS = [
  { value: "2", label: "Machines & staff at founding (1995)" },
  { value: "12x", label: "Facility size growth (4,000 → 25,000+ sq ft)" },
  { value: "4,00,000+", label: "Pistons manufactured per year, today" },
];

export const GROWTH_CLOSING_LINE =
  "From 2 machines in a small workshop to a 25,000+ sq. ft. ISO-certified facility — steady, self-funded, in-house growth every step of the way.";