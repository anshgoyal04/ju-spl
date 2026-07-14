import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";

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
