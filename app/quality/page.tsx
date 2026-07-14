import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { HiOutlineBeaker, HiOutlineScale, HiOutlineFire, HiOutlineCube } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Quality — Inspection, Testing & Standards",
  description: "Inside Jindal Udyog's quality process: inspection laboratory, dimension testing, hardness testing, material testing and 100% quality control.",
  alternates: { canonical: "/quality" },
};

const SECTIONS = [
  {
    id: "inspection-laboratory",
    icon: HiOutlineBeaker,
    title: "Inspection laboratory",
    desc: "Every batch is routed through our in-house inspection laboratory before it's cleared for packing, with documented results retained for traceability.",
  },
  {
    id: "dimension-testing",
    icon: HiOutlineCube,
    title: "Dimension testing",
    desc: "Bore diameter, ovality, ring-gap and skirt profile are measured against OEM tolerance on calibrated gauging equipment.",
  },
  {
    id: "hardness-testing",
    icon: HiOutlineScale,
    title: "Hardness testing",
    desc: "Post heat-treatment hardness is verified on every batch to confirm fatigue resistance and long-term durability.",
  },
  {
    id: "material-testing",
    icon: HiOutlineFire,
    title: "Material testing",
    desc: "Incoming raw alloy is verified for composition before it enters the casting line, ensuring consistency batch after batch.",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="100% inspection. Zero compromise."
        description="Quality isn't a final checkpoint — it's built into every stage of production, from raw material intake to the moment a component is packed."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
      />
      <section className="section-pad">
        <div className="container-x">
          <div className="h-72 rounded-2xl overflow-hidden mb-14">
            <PlaceholderImage icon={HiOutlineBeaker} tone="dark" label="Inspection laboratory" />
          </div>
          <div className="space-y-16">
            {SECTIONS.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28 grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-grey-50">
                  <s.icon className="h-7 w-7 text-brand-red" />
                </div>
                <div>
                  <h2 className="h-display text-2xl text-brand-black">{s.title}</h2>
                  <p className="mt-3 text-brand-grey-700 leading-relaxed max-w-2xl">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
