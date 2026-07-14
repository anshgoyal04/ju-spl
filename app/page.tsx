import Link from "next/link";
import type { Metadata } from "next";
import { HiArrowRight, HiOutlineShieldCheck, HiOutlineCog, HiOutlineFire, HiOutlineTruck, HiOutlineGlobeAlt, HiOutlineBadgeCheck, HiOutlineCurrencyRupee, HiOutlineClock } from "react-icons/hi";
import { GiFactory } from "react-icons/gi";
import HomeHero from "@/components/sections/HomeHero";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import ProductCard from "@/components/ui/ProductCard";
import BrandMarquee from "@/components/ui/BrandMarquee";
import Timeline from "@/components/ui/Timeline";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { PRODUCTS } from "@/data/products";
import { MANUFACTURING_STEPS } from "@/data/manufacturing";

export const metadata: Metadata = {
  title: "SPL Piston | Jindal Udyog — Engineering Precision. Powering Every Ride.",
  description:
    "Leading manufacturer of premium motorcycle pistons, piston kits and engine components — trusted by OEM buyers, distributors and exporters in 20+ countries. Request a quote today.",
  alternates: { canonical: "/" },
};

const WHY_US = [
  { icon: HiOutlineBadgeCheck, title: "OEM quality", desc: "Manufactured to OEM tolerance standards" },
  { icon: HiOutlineCog, title: "Precision engineering", desc: "CNC-machined to ±0.005 mm" },
  { icon: HiOutlineFire, title: "Heat treatment", desc: "Controlled thermal cycles for durability" },
  { icon: HiOutlineShieldCheck, title: "Long engine life", desc: "Engineered for extended service intervals" },
  { icon: HiOutlineCurrencyRupee, title: "Affordable pricing", desc: "Competitive bulk & OEM pricing" },
  { icon: GiFactory, title: "Bulk manufacturing", desc: "Scalable production capacity" },
  { icon: HiOutlineClock, title: "Fast dispatch", desc: "Reliable lead times, every order" },
  { icon: HiOutlineTruck, title: "Export packaging", desc: "Moisture-proof, export-grade packing" },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="bg-brand-charcoal py-14">
        <div className="container-x">
          <StatCounter
            stats={[
              { value: 30, suffix: "+", label: "Years experience" },
              { value: 500, suffix: "+", label: "Products" },
              { value: 100, suffix: "+", label: "Dealers" },
              { value: 2, suffix: "+", label: "Export countries" },
              { value: 1, suffix: "M+", label: "Components made" },
            ]}
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="What we manufacture" title="Engineered for every engine platform" description="From complete piston kits to individual engine components, every part is built to OEM tolerance and tested before dispatch." />
            <Link href="/products" className="btn-outline-dark hidden sm:inline-flex">
              View all products <HiArrowRight />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.slice(0, 8).map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
          <Link href="/products" className="btn-outline-dark mt-8 inline-flex sm:hidden">
            View all products <HiArrowRight />
          </Link>
        </div>
      </section>

      <section className="section-pad bg-brand-grey-50">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Compatibility" title="Fits every major two-wheeler brand" description="A wider range of piston kits across BS-6 compliant motorcycles, scooters and three-wheelers." />
          <div className="mt-10">
            <BrandMarquee />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Why SPL Piston" title="Built on 45 years of precision manufacturing" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item) => (
              <div key={item.title} className="card-surface p-6 hover:-translate-y-1 transition-transform duration-300">
                <item.icon className="h-8 w-8 text-brand-red" />
                <h3 className="h-display mt-4 text-base text-brand-black">{item.title}</h3>
                <p className="mt-1.5 text-sm text-brand-grey-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-grey-50">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Manufacturing" title="From raw alloy to export-ready components" description="Every component moves through five controlled stages — casting, machining, heat treatment, inspection and packaging — before it ever reaches a dealer shelf." />
            <Link href="/manufacturing" className="btn-primary mt-8">
              Explore our process <HiArrowRight />
            </Link>
          </div>
          <Timeline steps={MANUFACTURING_STEPS} linkBase="/manufacturing" />
        </div>
      </section>

      <section className="section-pad bg-brand-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-3 text-brand-red">Global reach</p>
            <h2 className="h-display text-3xl sm:text-4xl text-white leading-tight">
              Exporting precision to 20+ countries
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed max-w-md">
              From bulk OEM contracts to distributor pallets, our export packaging and documentation are built for
              the realities of international freight.
            </p>
            <Link href="/export" className="btn-outline mt-8">
              View export capabilities <HiArrowRight />
            </Link>
          </div>
          <div className="h-72 rounded-2xl overflow-hidden">
            <PlaceholderImage icon={HiOutlineGlobeAlt} tone="red" label="Export network map" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red">
        <div className="container-x flex flex-col items-center text-center gap-6">
          <h2 className="h-display text-3xl sm:text-4xl text-white max-w-xl">
            Ready to source premium engine components?
          </h2>
          <p className="text-white/85 max-w-lg">
            Talk to our team about OEM manufacturing, bulk dealer pricing, or export partnerships.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-outline">Explore products</Link>
            <Link href="/contact" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-red hover:-translate-y-0.5 transition-transform">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
