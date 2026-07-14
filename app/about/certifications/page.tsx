import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { HiOutlineBadgeCheck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Certifications — Jindal Udyog (SPL Piston)",
  description: "The quality and manufacturing standards Jindal Udyog is built on.",
  alternates: { canonical: "/about/certifications" },
};

const CERTS = [
  { title: "ISO 9001:2015", desc: "Quality management systems certification for consistent manufacturing processes." },
  { title: "OEM tolerance compliance", desc: "Components manufactured and inspected to OEM-equivalent dimensional standards." },
  { title: "Export documentation standards", desc: "Certificate of origin, packing list and inspection reports on every export shipment." },
  { title: "100% inspection protocol", desc: "Every batch passes dimension, hardness and material verification before dispatch." },
];

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="About / Certifications"
        title="Standards we're built on"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Certifications" }]}
      />
      <section className="section-pad">
        <div className="container-x grid gap-6 sm:grid-cols-2">
          {CERTS.map((c) => (
            <div key={c.title} className="card-surface p-7 flex gap-4">
              <HiOutlineBadgeCheck className="h-8 w-8 shrink-0 text-brand-red" />
              <div>
                <h3 className="h-display text-lg text-brand-black">{c.title}</h3>
                <p className="mt-2 text-sm text-brand-grey-700">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="container-x mt-8 text-xs text-brand-grey-500">
          Certificate artwork and registration numbers will be added here once final scans are provided.
        </p>
      </section>
    </>
  );
}
