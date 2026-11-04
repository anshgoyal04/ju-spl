import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import StatCounter from "@/components/ui/StatCounter";
import type { Metadata } from "next";
import Link from "next/link";
import { GiFactory } from "react-icons/gi";
import {
  HiArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineCog,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Company Profile — Jindal Udyog (SPL Piston)",
  description: "Company profile of Jindal Udyog: a 30-year-old piston manufacturer, OEM supplier and exporter based in Agra, India.",
  alternates: { canonical: "/about/company-profile" },
};

const BUSINESS_TYPES = [
  { icon: GiFactory, title: "Manufacturer", desc: "In-house casting, machining and heat treatment — nothing outsourced." },
  { icon: HiOutlineBadgeCheck, title: "OEM Supplier", desc: "Engineered to exact tolerance for OEM production programs." },
  { icon: HiOutlineGlobeAlt, title: "Exporter", desc: "Shipping to 20+ countries with export-grade documentation." },
  { icon: HiOutlineTruck, title: "Wholesale Supplier", desc: "Bulk supply to a 1000+ strong dealer and distributor network." },
];

const STRENGTHS = [
  { icon: HiOutlineCog, title: "Engineering expertise", desc: "Decades of in-house tooling and process knowledge, not bought-in capability." },
  { icon: HiOutlineShieldCheck, title: "Quality obsession", desc: "100% inspection at every stage, ISO 9001:2015 certified since 2021." },
  { icon: HiOutlineSparkles, title: "Scale without compromise", desc: "From 2,000 to 4,00,000+ pistons a year, without diluting consistency." },
  { icon: HiOutlineUserGroup, title: "Relationship-first service", desc: "The responsiveness of a family-run business, at OEM-grade scale." },
];

export default function CompanyProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="About / Company profile"
        title="Who we are"
        description="Three decades of precision manufacturing, built one machine, one certification, and one customer relationship at a time."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Company Profile" }]}
      />

      {/* Intro + image */}
      <section className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Since 1995"
              title="Precision manufacturing, three decades deep"
              description="Jindal Udyog is a manufacturer, OEM supplier, exporter and wholesale supplier of motorcycle pistons, piston kits, cylinder liners, connecting rods, valve sets and engine components, operating under the SPL Piston brand out of Agra, Uttar Pradesh."
            />
            <div className="mt-6 space-y-4 text-brand-grey-700 leading-relaxed">
              <p>
                Our team of highly skilled engineers and technicians brings decades of collective experience, pushing
                the boundaries of piston technology while meeting the unique demands of automotive applications
                across domestic and export markets.
              </p>
              <p>
                We operate on a global scale, serving clients across many countries, while maintaining the
                personalized service and responsiveness of a closely held manufacturing business.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
              <SmartImage
                src="/images/about/factory-aerial-view.jpeg"
                alt="Aerial view of the Jindal Udyog manufacturing facility in Agra"
                fit="cover"
                fallbackTone="light"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-brand-red px-6 py-4 shadow-lg">
              <p className="h-display text-2xl text-white">30+</p>
              <p className="text-xs text-white/80 uppercase tracking-wide">Years in operation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-charcoal py-14">
        <div className="container-x">
          <StatCounter
            stats={[
              { value: 30, suffix: "+", label: "Years in operation" },
              { value: 25000, suffix: "+", label: "Sq. ft. facility" },
              { value: 4, suffix: "L+", label: "Pistons per year" },
              { value: 20, suffix: "+", label: "Export countries" },
              { value: 1000, suffix: "+", label: "Dealers & distributors" },
            ]}
          />
        </div>
      </section>

      {/* Business types */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="What we do" title="One company, four roles in your supply chain" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BUSINESS_TYPES.map((b, i) => (
              <div
                key={b.title}
                className="card-surface p-7 text-center hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <b.icon className="h-9 w-9 text-brand-red mx-auto" />
                <h3 className="h-display mt-4 text-base text-brand-black">{b.title}</h3>
                <p className="mt-2 text-sm text-brand-grey-700">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-brand-grey-50">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-black p-8 sm:p-10">
            <p className="eyebrow text-brand-red">Our mission</p>
            <h3 className="h-display mt-3 text-2xl text-white leading-snug">
              Engineer every component to a standard we'd trust in our own vehicles.
            </h3>
            <p className="mt-4 text-white/60 leading-relaxed">
              We exist to give OEM buyers, dealers and export partners a supplier they don't have to double-check —
              consistent tolerance, consistent quality, batch after batch.
            </p>
          </div>
          <div className="rounded-3xl bg-brand-red p-8 sm:p-10">
            <p className="eyebrow text-white/80">Our vision</p>
            <h3 className="h-display mt-3 text-2xl text-white leading-snug">
              Be the piston manufacturer global buyers think of first from India.
            </h3>
            <p className="mt-4 text-white/80 leading-relaxed">
              From a two-machine workshop to a 25,000+ sq. ft. ISO-certified facility — we're scaling the same way we
              started: in-house, self-funded, and never outsourced.
            </p>
          </div>
        </div>
      </section>

      {/* Core strengths */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Why partners stay" title="What backs every part that leaves our factory" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STRENGTHS.map((s) => (
              <div key={s.title} className="card-surface p-7">
                <s.icon className="h-8 w-8 text-brand-red" />
                <h3 className="h-display mt-4 text-base text-brand-black">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-grey-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-black">
        <div className="container-x flex flex-col items-center text-center gap-6">
          <h2 className="h-display text-3xl sm:text-4xl text-white max-w-xl">
            Thirty years of manufacturing discipline, ready to work for you
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/oem-solutions" className="btn-outline">Explore OEM solutions</Link>
            <Link href="/contact" className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 transition-transform">
              Talk to our team <HiArrowRight className="inline h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}