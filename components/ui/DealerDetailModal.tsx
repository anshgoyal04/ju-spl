"use client";
import type { Dealer } from "@/data/dealers";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineOfficeBuilding, HiOutlinePhone, HiOutlineX } from "react-icons/hi";

const TYPE_STYLES: Record<Dealer["type"], string> = {
  Dealer: "bg-brand-grey-100 text-brand-grey-700",
  Distributor: "bg-brand-red/10 text-brand-red",
  "Export Partner": "bg-brand-black text-white",
};

export default function DealerDetailModal({ dealer, onClose }: { dealer: Dealer | null; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    document.body.style.overflow = dealer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [dealer]);

  const modal = (
    <AnimatePresence>
      {dealer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-3xl bg-white p-6 sm:p-8"
          >
            <div className="flex items-start justify-between">
              <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${TYPE_STYLES[dealer.type]}`}>
                {dealer.type}
              </span>
              <button onClick={onClose} aria-label="Close" className="text-brand-grey-400 hover:text-brand-black">
                <HiOutlineX className="h-5 w-5" />
              </button>
            </div>

            <h3 className="h-display mt-4 text-xl text-brand-black">{dealer.name}</h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="h-5 w-5 mt-0.5 text-brand-red shrink-0" />
                <div>
                  {dealer.address && <p className="text-sm text-brand-black">{dealer.address}</p>}
                  <p className={`text-sm ${dealer.address ? "text-brand-grey-500" : "text-brand-black"}`}>
                    {dealer.city}, {dealer.state}
                  </p>
                </div>
              </div>
              {dealer.phone && (
                <div className="flex items-center gap-3">
                  <HiOutlinePhone className="h-5 w-5 text-brand-red shrink-0" />
                  <p className="text-sm text-brand-black">{dealer.phone}</p>
                </div>
              )}
              <div className="flex items-center gap-3">
                <HiOutlineOfficeBuilding className="h-5 w-5 text-brand-red shrink-0" />
                <p className="text-sm text-brand-black">Authorized {dealer.type.toLowerCase()}</p>
              </div>
            </div>

            {dealer.phone ? (
              <div className="mt-7 flex gap-3">
                <a href={`tel:${dealer.phone.replace(/\s/g, "")}`} className="btn-primary flex-1 justify-center text-sm">
                  <HiOutlinePhone className="h-4 w-4" /> Call
                </a>
                <a
                  href={`https://wa.me/${dealer.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1DA851] transition-colors"
                >
                  <FaWhatsapp className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            ) : (
              <div className="mt-7">
                <p className="mb-3 text-xs text-brand-grey-500">
                  Direct contact number will be added soon. Reach out to us and we'll connect you with this distributor.
                </p>
                <Link href="/contact" onClick={onClose} className="btn-primary w-full justify-center text-sm">
                  Contact Jindal Udyog
                </Link>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(modal, document.body);
}