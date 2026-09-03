export type Certification = {
  id: string;
  title: string;
  issuer: string;
  registrationNumber?: string;
  scope?: string;
  validity?: string;
  category: "Quality & Compliance" | "Recognition";
  image: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "iso-9001-uscert",
    title: "ISO 9001:2015 — Quality Management System",
    issuer: "US Certification & Inspection Limited (UKAS accredited)",
    registrationNumber: "QM-20227 · Company No. 13917497",
    scope: "Manufacturer & Exporter — Piston, Piston Ring and Spare Parts of Oil Engines, Water Pump, Diesel Engine and Auto Parts",
    validity: "Certified 08 Apr 2026 · Valid until 07 Apr 2029",
    category: "Quality & Compliance",
    image: "/images/certifications/iso-9001-uscert.jpg",
  },
  {
    id: "iso-9001-iqsa",
    title: "ISO 9001:2015 — Quality Management System",
    issuer: "International Quality Standards Assessments (IQSA), USA — USAB accredited",
    registrationNumber: "IQSA-2102QMS006H",
    scope: "Manufacturing & Trading of Oil Engine Spare Parts, Water Pump Spare Parts and Auto Parts",
    validity: "Initial certification 12 Feb 2021",
    category: "Quality & Compliance",
    image: "/images/certifications/iso-9001-iqsa.jpg",
  },
  {
    id: "trademark-registration",
    title: "Registered Trademark — JU SPL",
    issuer: "Trade Marks Registry, Government of India",
    registrationNumber: "Trade Mark No. 2438762",
    scope: "Piston & Piston Rings, spare parts of diesel/kerosene/petrol engines, generators, alternators, air compressors, water pumps (Class 7)",
    validity: "Registered 07 Dec 2012",
    category: "Quality & Compliance",
    image: "/images/certifications/trademark-registration.png",
  },
  {
    id: "copyright-ju-spl-logo",
    title: "Copyright Registration — JU SPL Brand Artwork",
    issuer: "Copyright Office, Government of India",
    registrationNumber: "A-140331/2021",
    scope: "Artistic work — the JU SPL logo and brand identity",
    validity: "Registered 13 Oct 2021",
    category: "Quality & Compliance",
    image: "/images/certifications/copyright-ju-spl-logo.jpg",
  },
  {
    id: "msme-zed-bronze",
    title: "ZED Bronze Certification",
    issuer: "Ministry of Micro, Small & Medium Enterprises, Government of India",
    registrationNumber: "UDYAM-UP-01-0025575",
    scope: "Zero Defect Zero Effect (ZED) certification under the MSME Sustainable Certification Scheme",
    validity: "Issued 06 Jun 2025 · Valid 3 years",
    category: "Quality & Compliance",
    image: "/images/certifications/msme-zed-bronze.jpg",
  },
  {
    id: "certificate-appreciation-bhu",
    title: "Certificate of Appreciation",
    issuer: "Institute of Management Studies, Banaras Hindu University",
    scope: "Recognized as a sponsor for Ransangraam 9.0, hosted by the Kalpavriksha Management Club",
    validity: "22–23 Feb 2025",
    category: "Recognition",
    image: "/images/certifications/certificate-appreciation-bhu.jpg",
  },
];