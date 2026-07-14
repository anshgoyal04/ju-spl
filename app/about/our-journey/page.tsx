import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Our Journey — Jindal Udyog (SPL Piston)",
  description: "The 45-year journey of Jindal Udyog, from a single foundry to a trusted OEM piston manufacturer and exporter.",
  alternates: { canonical: "/about/our-journey" },
};

const MILESTONES = [
  { year: "1980s", text: "Jindal Udyog founded in Agra as a small-scale piston foundry serving the local automotive aftermarket." },
  { year: "1990s–2000s", text: "Expansion into CNC machining and heat treatment, growing into a full-spectrum piston and cylinder component manufacturer." },
  { year: "2010s", text: "Formalized the SPL Piston brand and Super Shakti, Jindal and JU Original product lines; built out a national dealer network." },
  { year: "BS-6 transition", text: "Re-tooled manufacturing lines to meet BS-6 emission-compliant engine tolerances across all major two-wheeler platforms." },
  { year: "Today", text: "A 45-year manufacturer serving OEM buyers, 1000+ dealers and export partners in 20+ countries." },
];

export default function OurJourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="About / Our journey"
        title="45 years, one continuous pursuit of precision"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Our Journey" }]}
      />
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <div className="relative border-l border-brand-grey-300 pl-8 space-y-10">
            {MILESTONES.map((m) => (
              <div key={m.year} className="relative">
                <span className="absolute -left-[38px] top-1 h-3.5 w-3.5 rounded-full bg-brand-red" />
                <p className="eyebrow">{m.year}</p>
                <p className="mt-2 text-brand-grey-700 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
