import BlogFilterGrid from "@/components/sections/BlogFilterGrid";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Piston Manufacturing Insights & Event Updates",
  description: "Guides, insights and event updates from Jindal Udyog — including our latest exhibition and expo appearances.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights from the shop floor"
        description="Practical guides for dealers and OEM buyers, plus a look at where you can find us at trade shows and exhibitions."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />
      <section className="section-pad">
        <div className="container-x">
          <BlogFilterGrid />
        </div>
      </section>
    </>
  );
}