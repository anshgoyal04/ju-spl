import PageHero from "@/components/ui/PageHero";
import Timeline from "@/components/ui/Timeline";
import { MANUFACTURING_STEPS } from "@/data/manufacturing";
import { breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowLeft, HiArrowRight, HiOutlineCheckCircle } from "react-icons/hi";

export function generateStaticParams() {
  return MANUFACTURING_STEPS.map((s) => ({ step: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ step: string }> }): Promise<Metadata> {
  const { step } = await params;
  const item = MANUFACTURING_STEPS.find((s) => s.slug === step);
  if (!item) return {};
  return {
    title: `${item.title} — SPL Piston Manufacturing | Jindal Udyog`,
    description: item.summary,
    alternates: { canonical: `/manufacturing/${item.slug}` },
  };
}

export default async function ManufacturingStepPage({ params }: { params: Promise<{ step: string }> }) {
  const { step } = await params;
  const item = MANUFACTURING_STEPS.find((s) => s.slug === step);
  if (!item) notFound();

  const idx = MANUFACTURING_STEPS.findIndex((s) => s.slug === step);
  const prev = idx > 0 ? MANUFACTURING_STEPS[idx - 1] : null;
  const next = idx < MANUFACTURING_STEPS.length - 1 ? MANUFACTURING_STEPS[idx + 1] : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Manufacturing", url: "/manufacturing" },
              { name: item.title, url: `/manufacturing/${item.slug}` },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow={`Manufacturing — Step ${item.step} of ${MANUFACTURING_STEPS.length}`}
        title={`${item.title} — precision piston manufacturing`}
        description={item.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Manufacturing", href: "/manufacturing" },
          { label: item.title },
        ]}
      />

      <section className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-brand-grey-700 leading-relaxed">{item.detail}</p>
            <h2 className="h-display mt-8 text-xl text-brand-black">What happens in this step</h2>
            <ul className="mt-4 space-y-2.5">
              {item.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm text-brand-grey-700">
                  <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" /> {pt}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              {prev && (
                <Link href={`/manufacturing/${prev.slug}`} className="btn-outline-dark">
                  <HiArrowLeft /> {prev.title}
                </Link>
              )}
              {next && (
                <Link href={`/manufacturing/${next.slug}`} className="btn-primary">
                  {next.title} <HiArrowRight />
                </Link>
              )}
            </div>
          </div>
          <div>
            <Timeline steps={MANUFACTURING_STEPS} linkBase="/manufacturing" />
          </div>
        </div>
      </section>
    </>
  );
}