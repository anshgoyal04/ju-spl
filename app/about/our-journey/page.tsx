import GrowthChart from "@/components/sections/GrowthChart";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Journey — Jindal Udyog (SPL Piston)",
  description: "The 30-year journey of Jindal Udyog, from a single foundry to a trusted OEM piston manufacturer and exporter.",
  alternates: { canonical: "/about/our-journey" },
};

export default function OurJourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="About / Our journey"
        title="30 years, one continuous pursuit of precision"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Our Journey" }]}
      />
      <section className="section-pad">
        <div className="container-x max-w-4xl">
          <JourneyTimeline />
        </div>
      </section>
      <section className="section-pad !pt-0">
        <div className="container-x">
          <GrowthChart />
        </div>
      </section>
    </>
  );
}