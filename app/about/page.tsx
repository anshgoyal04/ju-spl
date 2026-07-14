import Link from "next/link";
import type { Metadata } from "next";
import { HiArrowRight } from "react-icons/hi";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { GiFactory } from "react-icons/gi";
import { NAV } from "@/data/nav";

export const metadata: Metadata = {
  title: "About Jindal Udyog — 45 Years of Piston Manufacturing Excellence",
  description: "Learn about Jindal Udyog (SPL Piston): our journey, infrastructure, manufacturing facility and certifications behind 45 years of precision piston manufacturing.",
  alternates: { canonical: "/about" },
};

const aboutNav = NAV.find((n) => n.label === "About")!.children!;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Jindal Udyog"
        title="45 years of precision, one brand: SPL Piston"
        description="From a single foundry in Agra to a trusted name across OEM, dealer and export channels — this is the story behind every piston we make."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Company profile" title="Precision engineering, at scale" description="At Jindal Udyog, we are the driving force behind precision engineering in the world of piston manufacturing. With a rich heritage dating back 45 years, we have established ourselves as a trusted leader in the industry, delivering top-quality pistons that power engines of all sizes and applications." />
            <p className="mt-5 text-brand-grey-700 leading-relaxed">
              Our commitment to excellence remains at the core of everything we do — from raw material intake through
              to export-ready dispatch. We serve OEM buyers, dealers, distributors and export partners across more
              than 20 countries, without losing the personalized service of a family-run manufacturer.
            </p>
          </div>
          <div className="h-80 rounded-2xl overflow-hidden">
            <PlaceholderImage icon={GiFactory} tone="dark" label="Jindal Udyog facility" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-grey-50">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Explore" title="Go deeper into who we are" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutNav.map((item) => (
              <Link key={item.href} href={item.href} className="card-surface group p-7 block">
                <h3 className="h-display text-lg text-brand-black group-hover:text-brand-red transition-colors">{item.label}</h3>
                <p className="mt-2 text-sm text-brand-grey-700">{item.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                  Read more <HiArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
