import ManufacturingProcessExplorer from "@/components/sections/ManufacturingProcessExplorer";
import PageHero from "@/components/ui/PageHero";
import StatCounter from "@/components/ui/StatCounter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing Process — 20 Checkpoints, Order to Dispatch",
  description: "Inside Jindal Udyog's full manufacturing process: from order and raw material to CNC machining, finishing, inspection and dispatch — 20 controlled steps.",
  alternates: { canonical: "/manufacturing" },
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="20 controlled steps, order to dispatch"
        description="Every component moves through a fully documented, in-house process — from raw material intake to CNC precision machining, finishing and final inspection — before it's ever cleared for dispatch."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Manufacturing" }]}
      />

      <section className="bg-brand-charcoal py-14">
        <div className="container-x">
          <StatCounter
            stats={[
              { value: 20, suffix: "", label: "Process steps" },
              { value: 5, suffix: "", label: "Production phases" },
              { value: 100, suffix: "%", label: "In-house, never outsourced" },
              { value: 30, suffix: "+", label: "Years refining this process" },
            ]}
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <ManufacturingProcessExplorer />
        </div>
      </section>

      <section className="py-20 bg-brand-red">
        <div className="container-x flex flex-col items-center text-center gap-6">
          <h2 className="h-display text-3xl sm:text-4xl text-white max-w-xl">
            See this process behind your next order
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quality" className="btn-outline">Our quality standards</Link>
            <Link href="/contact" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-red hover:-translate-y-0.5 transition-transform">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}