import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import StatCounter from "@/components/ui/StatCounter";
import { OEM_CAPABILITIES, OEM_PROCESS, OEM_STATS } from "@/data/oemSolutions";
import type { Metadata } from "next";
import Link from "next/link";
import { GiFactory } from "react-icons/gi";
import {
  HiArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineCheckCircle,
  HiOutlineCog,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "OEM Solutions — Bulk & Private-Label Piston Manufacturing",
  description: "Partner with Jindal Udyog for OEM piston manufacturing: bulk capacity, private labeling, engineering support and documented quality processes.",
  alternates: { canonical: "/oem-solutions" },
};

const CAPABILITY_ICONS = [HiOutlineCog, GiFactory, HiOutlineDocumentText, HiOutlineShieldCheck];

export default function OemSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="OEM Solutions"
        title="Built to your specification, at OEM scale"
        description="From pilot samples to multi-year supply contracts, we partner with OEM buyers to deliver piston and engine components matched to exact tolerance and volume requirements."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "OEM Solutions" }]}
      />

      <section className="bg-brand-charcoal py-14">
        <div className="container-x">
          <StatCounter stats={OEM_STATS} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why OEM buyers choose us"
              title="A supplier that scales with your program"
              description="We work as an extension of your sourcing team — matching specifications, holding tolerance across batches, and scaling volume as your program grows. Every part carries the same discipline behind our own SPL Piston brand."
            />
            <ul className="mt-6 space-y-3">
              {["OEM-tolerance matching from the first sample", "Batch traceability on every shipment", "ISO 9001:2015 certified quality system", "Capacity to move from pilot to bulk without re-negotiation"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-brand-grey-700">
                  <HiOutlineCheckCircle className="h-5 w-5 mt-0.5 text-brand-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Talk to our OEM team <HiArrowRight />
            </Link>
          </div>

          <div className="relative">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
              <SmartImage src="/images/oem/production-line.jpg" alt="OEM production line" fit="cover" fallbackTone="dark" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-brand-red px-6 py-4 shadow-lg">
              <p className="h-display text-2xl text-white">ISO 9001</p>
              <p className="text-xs text-white/80 uppercase tracking-wide">Certified quality system</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-grey-50">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Capabilities" title="What an OEM partnership includes" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OEM_CAPABILITIES.map((c, i) => {
              const Icon = CAPABILITY_ICONS[i];
              return (
                <div key={c.title} className="card-surface p-7 hover:-translate-y-1 transition-transform duration-300">
                  <Icon className="h-9 w-9 text-brand-red" />
                  <h3 className="h-display mt-4 text-base text-brand-black">{c.title}</h3>
                  <p className="mt-2 text-sm text-brand-grey-700">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="How it works" title="From specification to ongoing supply" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {OEM_PROCESS.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white h-display text-lg">
                  {i + 1}
                </div>
                <h3 className="h-display mt-4 text-base text-brand-black">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-grey-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-grey-50">
        <div className="container-x">
          <div className="rounded-3xl bg-brand-black p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <HiOutlineBadgeCheck className="h-12 w-12 text-brand-red shrink-0" />
              <div>
                <h3 className="h-display text-xl sm:text-2xl text-white">Backed by documented quality, not just claims</h3>
                <p className="mt-2 text-white/60 max-w-lg">
                  ISO 9001:2015 certified, 100% batch inspection, and full traceability — see exactly how we back every OEM order.
                </p>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/quality" className="btn-outline text-sm">Our quality process</Link>
              <Link href="/about/certifications" className="btn-primary text-sm">Certifications</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red">
        <div className="container-x flex flex-col items-center text-center gap-6">
          <h2 className="h-display text-3xl sm:text-4xl text-white max-w-xl">Request a bulk / OEM quote</h2>
          <p className="text-white/85 max-w-lg">
            Share your specification and volume requirement — our team will respond with pricing and lead time.
          </p>
          <Link href="/contact" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-red hover:-translate-y-0.5 transition-transform">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}