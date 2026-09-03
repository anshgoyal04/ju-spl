// import ProductFilterBar from "@/components/sections/ProductFilterBar";
import PageHero from "@/components/ui/PageHero";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";
import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import CatalogSearch from "@/components/sections/CatalogSearch";
export const metadata: Metadata = {
  title: "Products — Motorcycle Pistons, Piston Kits & Engine Components",
  description: "Browse Jindal Udyog's full range of motorcycle pistons, piston kits, cylinder liners, connecting rods, valve sets and engine components — manufactured to OEM tolerance.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Precision components for every engine platform"
        description="Every product line is CNC-machined, heat-treated and 100% inspected before dispatch — built for OEM buyers, dealers and export partners."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <section className="pt-16 sm:pt-20">
  <div className="container-x">
    <Link
      href="/products/new-launch"
      className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-brand-black px-6 py-5 sm:px-8 sm:py-6"
    >
      <span className="flex items-center gap-3 text-white">
        <HiOutlineSparkles className="h-6 w-6 text-brand-red" />
        <span className="h-display text-base sm:text-lg">Just launched — see what's new</span>
      </span>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red group-hover:gap-2.5 transition-all">
        View New Launch <HiArrowRight />
      </span>
    </Link>
  </div>
</section>

<section className="pt-8 sm:pt-10">
  <div className="container-x">
    <h2 className="h-display text-2xl text-brand-black mb-5">Find a part for your vehicle</h2>
    <CatalogSearch />
  </div>
</section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
