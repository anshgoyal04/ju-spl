"use client";
import SmartImage from "@/components/ui/SmartImage";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiArrowLeft, HiArrowRight, HiOutlineX } from "react-icons/hi";

export default function BlogEventGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
  }, [activeIndex]);

  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  const prev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));

  const lightbox = (
    <AnimatePresence>
      {activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <HiOutlineX className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <HiArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <HiArrowRight className="h-5 w-5" />
          </button>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative h-[70vh] w-full max-w-3xl"
          >
            <SmartImage src={images[activeIndex]} alt={`${title} — photo ${activeIndex + 1}`} fit="contain" fallbackTone="dark" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div>
      <h2 className="h-display text-2xl text-brand-black mb-6">Event gallery</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((img, i) => (
          <motion.button
            key={img + i}
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group relative h-32 sm:h-40 overflow-hidden rounded-xl border border-black/10 bg-brand-grey-50"
          >
            <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
              <SmartImage src={img} alt={`${title} — photo ${i + 1}`} fit="contain" fallbackTone="dark" className="p-2" />
            </div>
          </motion.button>
        ))}
      </div>

      {mounted && createPortal(lightbox, document.body)}
    </div>
  );
}