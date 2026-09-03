import DealerForm from "@/components/ui/DealerForm";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import { ONBOARDING_STEPS, PARTNER_STATS, PARTNER_TIERS, WHY_PARTNER } from "@/data/dealerNetwork";
import type { Metadata } from "next";
import {
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCurrencyRupee,
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Dealer Network — Become a Dealer, Distributor or Export Partner",
  description: "Join Jindal Udyog's dealer network as a dealer, distributor or export partner and access premium piston kits and engine components.",
  alternates: { canonical: "/dealer-network" },
};

const TIER_ICONS: Record<string, typeof HiOutlineUserGroup> = {
  dealer: HiOutlineUserGroup,
  distributor: HiOutlineTruck,
  "export-partner": HiOutlineGlobeAlt,
};

const WHY_ICONS: Record<string, typeof HiOutlineUserGroup> = {
  "Competitive bulk pricing": HiOutlineCurrencyRupee,
  "Priority dispatch": HiOutlineTruck,
  "Export documentation support": HiOutlineDocumentText,
  "Marketing support": HiOutlineSparkles,
  "Fast onboarding": HiOutlineClock,
  "Dedicated account manager": HiOutlineUserGroup,
};

export default function DealerNetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Dealer Network"
        title="1000+ dealers strong — and growing"
        description="Whether you're a local dealer, a regional distributor, or an international export partner, we build long-term supply relationships."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dealer Network" }]}
      />

      <section className="bg-brand-charcoal py-14">
        <div className="container-x">
          <StatCounter stats={PARTNER_STATS} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Partnership tiers" title="Choose how you'd like to partner with us" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PARTNER_TIERS.map((tier) => {
              const Icon = TIER_ICONS[tier.id];
              return (
                <div key={tier.id} className="card-surface p-8 flex flex-col">
                  <Icon className="h-10 w-10 text-brand-red" />
                  <h3 className="h-display mt-4 text-lg text-brand-black">{tier.title}</h3>
                  <p className="mt-2 text-sm text-brand-grey-700">{tier.desc}</p>
                  <ul className="mt-5 space-y-2 flex-1">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-brand-grey-700">
                        <HiOutlineCheckCircle className="h-4 w-4 mt-0.5 text-brand-red shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#apply" className="btn-outline-dark mt-6 justify-center text-sm">
                    Apply now <HiArrowRight />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-grey-50">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Why partners stay with us" title="Built for long-term partnerships, not one-off orders" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_PARTNER.map((b) => {
              const Icon = WHY_ICONS[b.title];
              return (
                <div key={b.title} className="card-surface p-7">
                  <Icon className="h-8 w-8 text-brand-red" />
                  <h3 className="h-display mt-4 text-base text-brand-black">{b.title}</h3>
                  <p className="mt-2 text-sm text-brand-grey-700">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="How it works" title="From application to your first order" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ONBOARDING_STEPS.map((step, i) => (
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
        <div className="container-x max-w-2xl">
          <DealerForm />
        </div>
      </section>
    </>
  );
}