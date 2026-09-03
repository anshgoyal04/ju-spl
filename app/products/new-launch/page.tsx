import NewLaunchCarousel from "@/components/sections/NewLaunchCarousel";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Launch — Latest Piston & Engine Components",
  description: "Explore Jindal Udyog's newest piston kits, cylinder liners, connecting rods and engine components, recently launched for OEM and export markets.",
  alternates: { canonical: "/products/new-launch" },
};

export default function NewLaunchPage() {
  return (
    <>
      <PageHero
        eyebrow="Products / New Launch"
        title="Our latest engineering, on the shelf now"
        description="Freshly launched piston kits and engine components — engineered with the same precision, refined with what we've learned since."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "New Launch" }]}
      />
      <section className="section-pad">
        <div className="container-x">
          <NewLaunchCarousel />
        </div>
      </section>
    </>
  );
}