import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Timeline from "@/components/ui/Timeline";
import { MANUFACTURING_STEPS } from "@/data/manufacturing";

export const metadata: Metadata = {
  title: "Manufacturing Facility — Jindal Udyog (SPL Piston)",
  description: "Inside the Jindal Udyog shop floor: casting, machining, heat treatment, inspection and packaging under one roof.",
  alternates: { canonical: "/about/manufacturing-facility" },
};

export default function ManufacturingFacilityPage() {
  return (
    <>
      <PageHero
        eyebrow="About / Manufacturing facility"
        title="Inside the shop floor"
        description="Every stage of piston and cylinder component production — from raw alloy to export-ready packaging — happens under one roof in Agra."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Manufacturing Facility" }]}
      />
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <Timeline steps={MANUFACTURING_STEPS} linkBase="/manufacturing" />
          <Link href="/manufacturing" className="btn-primary mt-10 inline-flex">
            See the full manufacturing process
          </Link>
        </div>
      </section>
    </>
  );
}
