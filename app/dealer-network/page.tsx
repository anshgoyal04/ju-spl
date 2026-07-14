import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";
import DealerForm from "@/components/ui/DealerForm";
import { HiOutlineUserGroup, HiOutlineGlobeAlt, HiOutlineTruck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Dealer Network — Become a Dealer, Distributor or Export Partner",
  description: "Join Jindal Udyog's dealer network as a dealer, distributor or export partner and access premium piston kits and engine components.",
  alternates: { canonical: "/dealer-network" },
};

const TIERS = [
  { icon: HiOutlineUserGroup, title: "Become a dealer", desc: "Stock our full product range in your local market with dealer pricing and marketing support." },
  { icon: HiOutlineTruck, title: "Become a distributor", desc: "Take on regional distribution with dedicated volume pricing and priority dispatch." },
  { icon: HiOutlineGlobeAlt, title: "Become an export partner", desc: "Partner with us on bulk international orders with full export documentation support." },
];

export default function DealerNetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Dealer Network"
        title="1000+ dealers strong — and growing"
        description="Whether you're a local dealer, a regional distributor, or an international export partner, we build long-term supply relationships."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dealer Network" }]}
      />
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Partnership tiers" title="Choose how you'd like to partner with us" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TIERS.map((t) => (
              <div key={t.title} className="card-surface p-8 text-center">
                <t.icon className="h-10 w-10 text-brand-red mx-auto" />
                <h3 className="h-display mt-4 text-lg text-brand-black">{t.title}</h3>
                <p className="mt-2 text-sm text-brand-grey-700">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-grey-50">
        <div className="container-x max-w-2xl">
          <DealerForm />
        </div>
      </section>
    </>
  );
}
