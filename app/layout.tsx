import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { organizationSchema, SITE_URL } from "@/lib/schema";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["500", "600", "700", "800"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SPL Piston | Jindal Udyog — Premium Motorcycle Piston Manufacturer & Exporter",
    template: "%s | SPL Piston — Jindal Udyog",
  },
  description:
    "Jindal Udyog (SPL Piston) is a leading Indian manufacturer of motorcycle pistons, piston kits, cylinder liners and engine components — trusted by OEM buyers, dealers and exporters in 20+ countries.",
  keywords: [
    "piston manufacturer India",
    "motorcycle piston kit",
    "OEM piston supplier",
    "piston exporter India",
    "cylinder liner manufacturer",
    "SPL Piston",
    "Jindal Udyog",
  ],
  openGraph: {
    type: "website",
    siteName: "SPL Piston — Jindal Udyog",
    title: "SPL Piston | Jindal Udyog — Engineering Precision. Powering Every Ride.",
    description:
      "Leading manufacturer of premium motorcycle pistons, piston kits and engine components trusted by OEM buyers, distributors and exporters.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "SPL Piston | Jindal Udyog",
    description: "Precision-engineered motorcycle pistons, piston kits and engine components.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
