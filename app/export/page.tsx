import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { HiOutlineGlobeAlt, HiOutlineTruck, HiOutlineDocumentText, HiOutlineCube } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Export — Global Piston & Engine Component Supply",
  description: "Jindal Udyog exports motorcycle pistons, piston kits and engine components to 20+ countries with export-grade packaging and full shipment documentation.",
  alternates: { canonical: "/export" },
};

const EXPORT_POINTS = [
  { icon: HiOutlineGlobeAlt, title: "20+ export countries", desc: "Serving distributors and OEM buyers across Asia, Africa, the Middle East and Latin America." },
  { icon: HiOutlineCube, title: "Bulk order fulfilment", desc: "Container-load and pallet-scale orders handled on scheduled production runs." },
  { icon: HiOutlineTruck, title: "Export-grade packaging", desc: "Moisture-proof, impact-resistant cartons sized to component footprint." },
  { icon: HiOutlineDocumentText, title: "Full documentation", desc: "Certificate of origin, packing list and inspection reports with every shipment." },
];

export default function ExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Export"
        title="Precision engineering, shipped worldwide"
        description="From bulk container orders to distributor pallets, our export operation is built around consistent quality and complete documentation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Export" }]}
      />
      <section className="section-pad">
        <div className="container-x">
          <div className="h-80 rounded-2xl overflow-hidden">
            <PlaceholderImage icon={HiOutlineGlobeAlt} tone="red" label="Export country coverage map" />
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-grey-50">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Export capabilities" title="What export partners can expect" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXPORT_POINTS.map((p) => (
              <div key={p.title} className="card-surface p-7">
                <p.icon className="h-8 w-8 text-brand-red" />
                <h3 className="h-display mt-4 text-base text-brand-black">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-grey-700">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-brand-red">
        <div className="container-x flex flex-col items-center text-center gap-6">
          <h2 className="h-display text-3xl sm:text-4xl text-white max-w-xl">Become an export partner</h2>
          <Link href="/dealer-network#apply" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-red hover:-translate-y-0.5 transition-transform">
            Apply now
          </Link>
        </div>
      </section>
    </>
  );
}
