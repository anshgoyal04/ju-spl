import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BlogCard from "@/components/ui/BlogCard";
import { BLOG_POSTS } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Piston Manufacturing Insights & Guides",
  description: "Guides and insights on piston manufacturing, OEM sourcing, export logistics and engine component maintenance from Jindal Udyog.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights from the shop floor"
        description="Practical guides for dealers, OEM buyers and workshops sourcing piston kits and engine components."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />
      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
