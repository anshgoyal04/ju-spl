"use client";
import SmartImage from "@/components/ui/SmartImage";
import { CERTIFICATIONS, type Certification } from "@/data/certifications";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiOutlineBadgeCheck, HiOutlineExternalLink, HiOutlineX } from "react-icons/hi";

function CertCard({ cert, index, onOpen }: { cert: Certification; index: number; onOpen: () => void }) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group card-surface text-left overflow-hidden"
    >
      <div className="relative h-56 bg-brand-grey-50 overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <SmartImage src={cert.image} alt={cert.title} fit="contain" fallbackTone="light" className="p-4" />
        </div>
        <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-red shadow-sm">
          <HiOutlineExternalLink className="h-3 w-3" /> View
        </span>
      </div>
      <div className="p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-red font-[var(--font-label)]">
          {cert.category}
        </p>
        <h3 className="h-display mt-2 text-base text-brand-black leading-snug">{cert.title}</h3>
        <p className="mt-2 text-sm text-brand-grey-700 line-clamp-2">{cert.issuer}</p>
        {cert.registrationNumber && (
          <p className="mt-3 text-xs text-brand-grey-500">{cert.registrationNumber}</p>
        )}
      </div>
    </motion.button>
  );
}

export default function CertificateGallery() {
  const [active, setActive] = useState<Certification | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
  }, [active]);

  const quality = CERTIFICATIONS.filter((c) => c.category === "Quality & Compliance");
  const recognition = CERTIFICATIONS.filter((c) => c.category === "Recognition");

  const lightbox = (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl bg-white lg:grid-cols-[1.3fr_1fr]"
          >
            <div className="relative h-72 sm:h-[28rem] lg:h-auto bg-brand-grey-50">
              <SmartImage src={active.image} alt={active.title} fit="contain" fallbackTone="light" className="p-6" />
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="ml-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full text-brand-grey-500 hover:bg-brand-grey-50"
              >
                <HiOutlineX className="h-5 w-5" />
              </button>
              <HiOutlineBadgeCheck className="h-8 w-8 text-brand-red" />
              <h3 className="h-display mt-4 text-xl text-brand-black leading-snug">{active.title}</h3>
              <p className="mt-2 text-sm text-brand-grey-700">{active.issuer}</p>
              {active.registrationNumber && (
                <p className="mt-4 text-xs uppercase tracking-wide text-brand-grey-500">Registration / Certificate No.</p>
              )}
              {active.registrationNumber && <p className="text-sm font-semibold text-brand-black">{active.registrationNumber}</p>}
              {active.scope && (
                <>
                  <p className="mt-4 text-xs uppercase tracking-wide text-brand-grey-500">Scope</p>
                  <p className="text-sm text-brand-grey-700 leading-relaxed">{active.scope}</p>
                </>
              )}
              {active.validity && (
                <>
                  <p className="mt-4 text-xs uppercase tracking-wide text-brand-grey-500">Validity</p>
                  <p className="text-sm text-brand-grey-700">{active.validity}</p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div>
      <h2 className="h-display text-2xl text-brand-black mb-6">Quality & Compliance</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quality.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} index={i} onOpen={() => setActive(cert)} />
        ))}
      </div>

      {recognition.length > 0 && (
        <>
          <h2 className="h-display text-2xl text-brand-black mt-14 mb-6">Recognition</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recognition.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} onOpen={() => setActive(cert)} />
            ))}
          </div>
        </>
      )}

      {mounted && createPortal(lightbox, document.body)}
    </div>
  );
}