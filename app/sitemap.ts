import { BLOG_POSTS } from "@/data/blog";
import { MANUFACTURING_STEPS } from "@/data/manufacturing";
import { PRODUCTS } from "@/data/products";
import { SITE_URL } from "@/lib/schema";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/about/company-profile",
    "/about/our-journey",
    "/about/infrastructure",
    "/about/manufacturing-facility",
    "/about/certifications",
    "/products",
    "/products/new-launch",
    "/manufacturing",
    "/quality",
    "/oem-solutions",
    "/export",
    "/dealer-network",
    "/blog",
    "/contact",
  ];

  const dynamicRoutes = [
    ...PRODUCTS.map((p) => `/products/${p.slug}`),
    ...MANUFACTURING_STEPS.map((s) => `/manufacturing/${s.slug}`),
    ...BLOG_POSTS.map((b) => `/blog/${b.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
