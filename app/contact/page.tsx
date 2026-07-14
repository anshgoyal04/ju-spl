import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InquiryForm from "@/components/ui/InquiryForm";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Jindal Udyog (SPL Piston)",
  description: "Contact Jindal Udyog for piston assemblies, OEM manufacturing, bulk orders and business inquiries. Reach our team by phone, email or WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with our team"
        description="Looking for high-quality piston assemblies and OEM manufacturing solutions? Contact us for product inquiries and business requirements."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <a
              href="https://wa.me/919927088886?text=Hello%2C%20I%20want%20to%20know%20about%20your%20piston%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-[#25D366] hover:bg-[#1DA851] inline-flex"
            >
              <FaWhatsapp className="h-4 w-4" /> WhatsApp us
            </a>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex gap-3">
                <HiOutlineLocationMarker className="h-6 w-6 shrink-0 text-brand-red" />
                <span className="text-brand-grey-700">D-51, Foundry Nagar, Hathras Road, Agra, Uttar Pradesh 282006</span>
              </li>
              <li className="flex gap-3">
                <HiOutlinePhone className="h-6 w-6 shrink-0 text-brand-red" />
                <span className="text-brand-grey-700">+91 99270 88886</span>
              </li>
              <li className="flex gap-3">
                <HiOutlineMail className="h-6 w-6 shrink-0 text-brand-red" />
                <span className="text-brand-grey-700">jindaludyog@gmail.com</span>
              </li>
            </ul>

            <div className="mt-8 h-64 rounded-2xl overflow-hidden border border-black/5">
              <iframe
                title="Jindal Udyog location map"
                src="https://maps.google.com/maps?q=Jindal%20Udyog%28india%29%2C%20D-51%2C%20Foundry%20Nagar%2C%20Hathras%20Road%2C%20Agra%2C%20Uttar%20Pradesh%20282006&t=m&z=15&output=embed&iwloc=near"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>
    </>
  );
}
