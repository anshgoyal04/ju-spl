import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { GiGears } from "react-icons/gi";
import PageHero from "@/components/ui/PageHero";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import ProductCard from "@/components/ui/ProductCard";
import InquiryForm from "@/components/ui/InquiryForm";
import { PRODUCTS, getProduct, getRelatedProducts } from "@/data/products";
import { productSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Manufacturer & Supplier`,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            productSchema(product),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Products", url: "/products" },
              { name: product.name, url: `/products/${product.slug}` },
            ]),
          ]),
        }}
      />
      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={product.summary}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]}
      />

      <section className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div className="h-80 lg:h-full rounded-2xl overflow-hidden">
            <PlaceholderImage icon={GiGears} tone="light" label={product.name} />
          </div>

          <div>
            <p className="text-brand-grey-700 leading-relaxed">{product.description}</p>

            <h2 className="h-display mt-8 text-xl text-brand-black">Specifications</h2>
            <dl className="mt-4 divide-y divide-black/5 border-y border-black/5">
              {product.specs.map((s) => (
                <div key={s.label} className="flex justify-between py-3 text-sm">
                  <dt className="text-brand-grey-500">{s.label}</dt>
                  <dd className="font-medium text-brand-black text-right">{s.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="h-display mt-8 text-xl text-brand-black">Applications</h2>
            <ul className="mt-3 space-y-2">
              {product.applications.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-brand-grey-700">
                  <HiOutlineCheckCircle className="h-4 w-4 text-brand-red shrink-0" /> {a}
                </li>
              ))}
            </ul>

            <h2 className="h-display mt-8 text-xl text-brand-black">Compatible brands</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.brands.map((b) => (
                <span key={b} className="rounded-full bg-brand-grey-50 px-4 py-1.5 text-xs font-medium text-brand-grey-700">
                  {b}
                </span>
              ))}
            </div>

            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Request a quote for {product.name}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-grey-50">
        <div className="container-x">
          <h2 className="h-display text-2xl text-brand-black mb-8">Related products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x max-w-2xl">
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
