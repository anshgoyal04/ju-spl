import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { GiFactory } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Company Profile — Jindal Udyog (SPL Piston)",
  description: "Company profile of Jindal Udyog: a 45-year-old piston manufacturer, OEM supplier and exporter based in Agra, India.",
  alternates: { canonical: "/about/company-profile" },
};

export default function CompanyProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="About / Company profile"
        title="Who we are"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Company Profile" }]}
      />
      <section className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5 text-brand-grey-700 leading-relaxed">
            <p>
              Jindal Udyog is a manufacturer, OEM supplier, exporter and wholesale supplier of motorcycle pistons,
              piston kits, cylinder liners, connecting rods, valve sets and engine components, operating under the
              SPL Piston brand out of Agra, Uttar Pradesh.
            </p>
            <p>
              Our team of highly skilled engineers and technicians brings decades of collective experience, pushing
              the boundaries of piston technology while meeting the unique demands of automotive applications across
              domestic and export markets.
            </p>
            <p>
              We operate on a global scale, serving clients across many countries, while maintaining the personalized
              service and responsiveness of a closely held manufacturing business.
            </p>
          </div>
          <div className="h-80 rounded-2xl overflow-hidden">
            <PlaceholderImage icon={GiFactory} tone="light" label="Company overview" />
          </div>
        </div>
      </section>
    </>
  );
}
