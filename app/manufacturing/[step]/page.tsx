import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiOutlineCheckCircle, HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { GiFactory } from "react-icons/gi";
import PageHero from "@/components/ui/PageHero";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { MANUFACTURING_STEPS } from "@/data/manufacturing";

export function generateStaticParams() {
  return MANUFACTURING_STEPS.map((s) => ({ step: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ step: string }> }): Promise<Metadata> {
  const { step } = await params;
  const item = MANUFACTURING_STEPS.find((s) => s.slug === step);
  if (!item) return {};
  return {
    title: `${item.title} — Manufacturing Process`,
    description: item.summary,
    alternates: { canonical: `/manufacturing/${item.slug}` },
  };
}

export default async function ManufacturingStepPage({ params }: { params: Promise<{ step: string }> }) {
  const { step } = await params;
  const index = MANUFACTURING_STEPS.findIndex((s) => s.slug === step);
  if (index === -1) notFound();
  const item = MANUFACTURING_STEPS[index];
  const prev = MANUFACTURING_STEPS[index - 1];
  const next = MANUFACTURING_STEPS[index + 1];

  return (
    <>
      <PageHero
        eyebrow={`Step ${item.step} of ${MANUFACTURING_STEPS.length}`}
        title={item.title}
        description={item.summary}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Manufacturing", href: "/manufacturing" }, { label: item.title }]}
      />
      <section className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="h-72 rounded-2xl overflow-hidden">
            <PlaceholderImage icon={GiFactory} tone="dark" label={item.title} />
          </div>
          <div>
            <p className="text-brand-grey-700 leading-relaxed">{item.detail}</p>
            <ul className="mt-6 space-y-2.5">
              {item.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-brand-grey-700">
                  <HiOutlineCheckCircle className="h-4 w-4 text-brand-red shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="border-t border-black/5">
        <div className="container-x flex items-center justify-between py-8">
          {prev ? (
            <Link href={`/manufacturing/${prev.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-black hover:text-brand-red">
              <HiArrowLeft /> {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/manufacturing/${next.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-black hover:text-brand-red">
              {next.title} <HiArrowRight />
            </Link>
          ) : <span />}
        </div>
      </section>
    </>
  );
}
