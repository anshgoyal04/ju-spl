import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Timeline from "@/components/ui/Timeline";
import { MANUFACTURING_STEPS } from "@/data/manufacturing";

export const metadata: Metadata = {
  title: "Manufacturing Process — Casting to Packaging",
  description: "How Jindal Udyog manufactures pistons and engine components: casting, machining, heat treatment, quality inspection and packaging.",
  alternates: { canonical: "/manufacturing" },
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Five controlled stages, one consistent standard"
        description="From raw alloy casting to export-ready packaging, every batch follows the same documented process — with 100% inspection at every handoff."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Manufacturing" }]}
      />
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <Timeline steps={MANUFACTURING_STEPS} linkBase="/manufacturing" />
        </div>
      </section>
    </>
  );
}
