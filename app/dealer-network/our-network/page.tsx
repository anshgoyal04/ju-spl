import DealerNetworkExplorer from "@/components/sections/DealerNetworkExplorer";
import PageHero from "@/components/ui/PageHero";
import StatCounter from "@/components/ui/StatCounter";
import { DEALERS } from "@/data/dealers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Network — Find a Dealer Near You",
  description: "Explore Jindal Udyog's nationwide dealer, distributor and export partner network by state and city.",
  alternates: { canonical: "/dealer-network/our-network" },
};

export default function OurNetworkPage() {
  const states = new Set(DEALERS.map((d) => d.state)).size;
  const cities = new Set(DEALERS.map((d) => d.city)).size;
  const exportPartners = DEALERS.filter((d) => d.type === "Export Partner").length;

  return (
    <>
      <PageHero
        eyebrow="Dealer Network / Our Network"
        title="Find a partner near you"
        description="Search our nationwide network of dealers, distributors and export partners by state or city."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dealer Network", href: "/dealer-network" }, { label: "Our Network" }]}
      />

      <section className="bg-brand-charcoal py-14">
        <div className="container-x">
          <StatCounter
            stats={[
              { value: DEALERS.length, suffix: "+", label: "Active partners" },
              { value: states, suffix: "", label: "States covered" },
              { value: cities, suffix: "", label: "Cities covered" },
              { value: exportPartners, suffix: "", label: "Export partners" },
            ]}
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <DealerNetworkExplorer />
        </div>
      </section>
    </>
  );
}