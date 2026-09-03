import CertificateGallery from "@/components/sections/CertificateGallery";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications — Jindal Udyog (SPL Piston)",
  description: "ISO 9001:2015 certifications, registered trademark, copyright registration, and MSME ZED Bronze certification held by Jindal Udyog.",
  alternates: { canonical: "/about/certifications" },
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="About / Certifications"
        title="Standards we're built on"
        description="From ISO 9001:2015 quality certification to registered trademarks, every credential here backs the parts that leave our factory floor."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Certifications" }]}
      />
      <section className="section-pad">
        <div className="container-x">
          <CertificateGallery />
        </div>
      </section>
    </>
  );
}