import DealerNetworkExplorer from "@/components/sections/DealerNetworkExplorer";
import PageHero from "@/components/ui/PageHero";
import StatCounter from "@/components/ui/StatCounter";
import { DEALERS } from "@/data/dealers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Network — Find a Distributor Near You",
  description: "Explore Jindal Udyog's distributor network across India by state and city.",
  alternates: { canonical: "/dealer-network/our-network" },
};

export default function OurNetworkPage() {
  const states = new Set(DEALERS.map((d) => d.state)).size;
  const cities = new Set(DEALERS.map((d) => d.city)).size;

  return (
    <>
      <PageHero
        eyebrow="Dealer Network / Our Network"
        title="Find a partner near you"
        description="Search our distributor network across India by state or city."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dealer Network", href: "/dealer-network" }, { label: "Our Network" }]}
      />

      <section className="bg-brand-charcoal py-14">
        <div className="container-x">
          <StatCounter
            stats={[
              { value: DEALERS.length, suffix: "", label: "Active distributors" },
              { value: states, suffix: "", label: "States covered" },
              { value: cities, suffix: "", label: "Cities covered" },
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