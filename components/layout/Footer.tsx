import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { NAV } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white/70">
      <div className="container-x py-16 grid grid-cols-2 gap-10 lg:grid-cols-5">
        <div className="col-span-2">
          <span className="h-display text-xl text-white">
            SPL <span className="text-brand-red">PISTON</span>
          </span>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Jindal Udyog — precision-engineered motorcycle pistons, piston kits and engine components, manufactured
            in Agra, India and trusted by OEM buyers, dealers and exporters worldwide.
          </p>
          <div className="mt-5 flex gap-3">
            {[FaWhatsapp, FaInstagram, FaYoutube, FaLinkedin].map((Icon, i) => (
              <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-brand-red hover:text-brand-red transition-colors cursor-pointer">
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/40 font-[var(--font-label)]">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {["About", "Manufacturing", "Quality", "OEM Solutions", "Export"].map((label) => {
              const item = NAV.find((n) => n.label === label);
              return (
                <li key={label}>
                  <Link href={item?.href || "/"} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/40 font-[var(--font-label)]">Resources</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link href="/dealer-network" className="hover:text-white transition-colors">Dealer Network</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/40 font-[var(--font-label)]">Get in touch</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><HiOutlineLocationMarker className="h-5 w-5 shrink-0 text-brand-red" /> D-51, Foundry Nagar, Hathras Road, Agra, Uttar Pradesh 282006</li>
            <li className="flex gap-2"><HiOutlinePhone className="h-5 w-5 shrink-0 text-brand-red" /> +91 99270 88886</li>
            <li className="flex gap-2"><HiOutlineMail className="h-5 w-5 shrink-0 text-brand-red" /> jindaludyog@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Jindal Udyog. All rights reserved.</p>
          <p>SPL Piston is a brand of Jindal Udyog, India.</p>
        </div>
      </div>
    </footer>
  );
}
