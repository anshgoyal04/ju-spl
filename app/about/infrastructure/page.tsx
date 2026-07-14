import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { GiFactory, GiGears, GiCog, GiForklift } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Infrastructure — Jindal Udyog (SPL Piston)",
  description: "Explore the plant, tooling and production capacity behind Jindal Udyog's piston manufacturing operations.",
  alternates: { canonical: "/about/infrastructure" },
};

const AREAS = [
  { icon: GiFactory, title: "Foundry & casting bay", desc: "Gravity and pressure die-casting lines for aluminium alloy components." },
  { icon: GiGears, title: "CNC machining floor", desc: "Multi-axis turning, boring and milling cells with in-line gauging." },
  { icon: GiCog, title: "Heat treatment furnaces", desc: "Calibrated solution treatment and ageing furnaces." },
  { icon: GiForklift, title: "Warehouse & dispatch", desc: "Bulk storage and export-grade packing and load-out bays." },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="About / Infrastructure"
        title="Plant, tooling and production capacity"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Infrastructure" }]}
      />
      <section className="section-pad">
        <div className="container-x">
          <div className="h-80 rounded-2xl overflow-hidden mb-12">
            <PlaceholderImage icon={GiFactory} tone="dark" label="Manufacturing plant" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {AREAS.map((a) => (
              <div key={a.title} className="card-surface p-7">
                <a.icon className="h-9 w-9 text-brand-red" />
                <h3 className="h-display mt-4 text-lg text-brand-black">{a.title}</h3>
                <p className="mt-2 text-sm text-brand-grey-700">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
