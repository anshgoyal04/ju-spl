import QualityPillarRow from "@/components/sections/QualityPillarRow";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import { QUALITY_PILLARS, QUALITY_PROCESS, QUALITY_STATS } from "@/data/quality";
import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight, HiOutlineBadgeCheck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Quality — Inspection, Testing & Standards",
  description: "Inside Jindal Udyog's quality process: inspection laboratory, dimension testing, hardness testing, material testing and 100% quality control.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="100% inspection. Zero compromise."
        description="Quality isn't a final checkpoint — it's built into every stage of production, from raw material intake to the moment a component is packed."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
      />

      <section className="bg-brand-charcoal py-14">
        <div className="container-x">
          <StatCounter stats={QUALITY_STATS} />
        </div>
      </section>

      {/* Quality pillars — zigzag, alternating background bands */}
      {QUALITY_PILLARS.map((pillar, i) => (
        <section key={pillar.id} className={`py-16 lg:py-20 ${i % 2 === 1 ? "bg-brand-grey-50" : "bg-white"}`}>
          <div className="container-x">
            <QualityPillarRow pillar={pillar} index={i} />
          </div>
        </section>
      ))}

      <section className="section-pad bg-brand-grey-50">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="How it works" title="Five checkpoints, every single batch" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {QUALITY_PROCESS.map((step, i) => (
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

      <section className="section-pad">
        <div className="container-x">
          <div className="rounded-3xl bg-brand-black p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <HiOutlineBadgeCheck className="h-12 w-12 text-brand-red shrink-0" />
              <div>
                <h3 className="h-display text-xl sm:text-2xl text-white">Backed by ISO 9001:2015 and more</h3>
                <p className="mt-2 text-white/60 max-w-lg">
                  See our full certifications — quality management, registered trademark, and MSME ZED Bronze recognition.
                </p>
              </div>
            </div>
            <Link href="/about/certifications" className="btn-primary shrink-0">
              View certifications <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red">
        <div className="container-x flex flex-col items-center text-center gap-6">
          <h2 className="h-display text-3xl sm:text-4xl text-white max-w-xl">
            Quality you can audit, not just take our word for
          </h2>
          <Link href="/contact" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-red hover:-translate-y-0.5 transition-transform">
            Request a quality documentation pack
          </Link>
        </div>
      </section>
    </>
  );
}