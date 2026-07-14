import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { HiOutlineCog, HiOutlineDocumentText, HiOutlineScale, HiOutlineTruck } from "react-icons/hi";
import { GiFactory } from "react-icons/gi";

export const metadata: Metadata = {
  title: "OEM Solutions — Bulk & Private-Label Piston Manufacturing",
  description: "Partner with Jindal Udyog for OEM piston manufacturing: bulk capacity, private labeling, engineering support and documented quality processes.",
  alternates: { canonical: "/oem-solutions" },
};

const CAPABILITIES = [
  { icon: HiOutlineCog, title: "Engineering support", desc: "Work with our team on spec matching, tolerance requirements and pilot samples." },
  { icon: GiFactory, title: "Scalable capacity", desc: "Production lines built to move from pilot batches to recurring bulk contracts." },
  { icon: HiOutlineDocumentText, title: "Private labeling", desc: "Custom packaging and branding for OEM and private-label programs." },
  { icon: HiOutlineScale, title: "Documented quality", desc: "Full batch traceability, inspection records and material certification on request." },
];

export default function OemSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="OEM Solutions"
        title="Built to your specification, at OEM scale"
        description="From pilot samples to multi-year supply contracts, we partner with OEM buyers to deliver piston and engine components matched to exact tolerance and volume requirements."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "OEM Solutions" }]}
      />
      <section className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="h-80 rounded-2xl overflow-hidden order-2 lg:order-1">
            <PlaceholderImage icon={GiFactory} tone="dark" label="OEM production line" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Why manufacturers choose us" title="A supplier that scales with your program" description="We work as an extension of your sourcing team — matching specifications, holding tolerance across batches, and scaling volume as your program grows." />
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Talk to our OEM team
            </Link>
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-grey-50">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Capabilities" title="What an OEM partnership includes" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="card-surface p-7">
                <c.icon className="h-8 w-8 text-brand-red" />
                <h3 className="h-display mt-4 text-base text-brand-black">{c.title}</h3>
                <p className="mt-2 text-sm text-brand-grey-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-brand-red">
        <div className="container-x flex flex-col items-center text-center gap-6">
          <h2 className="h-display text-3xl sm:text-4xl text-white max-w-xl">Request a bulk / OEM quote</h2>
          <Link href="/contact" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-red hover:-translate-y-0.5 transition-transform">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
