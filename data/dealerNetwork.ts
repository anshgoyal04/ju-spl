export const PARTNER_STATS = [
  { value: 1000, suffix: "+", label: "Dealers & distributors" },
  { value: 20, suffix: "+", label: "Export countries" },
  { value: 30, suffix: "+", label: "Years manufacturing" },
  { value: 5000, suffix: "+", label: "Products available" },
];

export type PartnerTier = {
  id: string;
  title: string;
  desc: string;
  benefits: string[];
};

export const PARTNER_TIERS: PartnerTier[] = [
  {
    id: "dealer",
    title: "Become a dealer",
    desc: "Stock our full product range in your local market with dealer pricing and marketing support.",
    benefits: ["Dealer-tier pricing", "Marketing materials & dealer board", "Local stock replenishment support"],
  },
  {
    id: "distributor",
    title: "Become a distributor",
    desc: "Take on regional distribution with dedicated volume pricing and priority dispatch.",
    benefits: ["Volume-based pricing", "Priority production & dispatch slots", "Dedicated account manager"],
  },
  {
    id: "export-partner",
    title: "Become an export partner",
    desc: "Partner with us on bulk international orders with full export documentation support.",
    benefits: ["Export-grade packaging", "Full shipment documentation", "Container / bulk order scheduling"],
  },
];

export type Benefit = {
  title: string;
  desc: string;
};

export const WHY_PARTNER: Benefit[] = [
  { title: "Competitive bulk pricing", desc: "Volume-based pricing that gets better as your orders grow." },
  { title: "Priority dispatch", desc: "Partner orders get priority production and dispatch slots." },
  { title: "Export documentation support", desc: "Full paperwork — certificate of origin, packing list, inspection report — handled for you." },
  { title: "Marketing support", desc: "Product imagery, catalogs and dealer signage to help you sell." },
  { title: "Fast onboarding", desc: "Approved partners can start ordering within days, not weeks." },
  { title: "Dedicated account manager", desc: "One point of contact for pricing, orders and support." },
];

export type OnboardingStep = {
  title: string;
  desc: string;
};

export const ONBOARDING_STEPS: OnboardingStep[] = [
  { title: "Submit your application", desc: "Tell us about your business, territory and expected order volumes." },
  { title: "Verification call", desc: "Our partnerships team confirms details and answers your questions." },
  { title: "Partnership agreement", desc: "Pricing tier and terms are finalized in writing." },
  { title: "Start ordering", desc: "Get access to partner pricing and place your first order." },
];