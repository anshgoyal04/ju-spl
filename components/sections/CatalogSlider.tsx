"use client";
import CatalogResultCard from "@/components/ui/CatalogResultCard";
import { CATALOG } from "@/data/catalog";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const CARD_WIDTH = 280;
const GAP = 20;
const STEP = CARD_WIDTH + GAP;
const VISIBLE = 4; // how many cards show at once on desktop

export default function CatalogSlider({ variety }: { variety: string }) {
  const [index, setIndex] = useState(0);

  // One representative product per brand for this variety
  const seenBrands = new Set<string>();
  const matches = CATALOG.flatMap((model) =>
    model.varieties
      .filter((v) => v.variety === variety)
      .map((v) => ({ model, variety: v }))
  ).filter(({ model }) => {
    if (seenBrands.has(model.brand)) return false;
    seenBrands.add(model.brand);
    return true;
  });

  if (matches.length === 0) return null;

  const totalSlides = matches.length + 1; // +1 for the "Show more" card
  const maxIndex = Math.max(0, totalSlides - VISIBLE);

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="section-pad bg-brand-grey-50">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow mb-2">Available across brands</p>
            <h2 className="h-display text-2xl text-brand-black">Real SKUs you can order today</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-opacity"
            >
              <HiArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-opacity"
            >
              <HiArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: -index * STEP }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {matches.map(({ model, variety: v }) => (
              <div key={`${model.modelAlias}-${v.varietyCode}`} className="w-[280px] shrink-0">
                <CatalogResultCard model={model} variety={v} />
              </div>
            ))}

            <Link
              href={`/products?type=${encodeURIComponent(variety)}`}
              className="flex w-[280px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-black/15 py-16 text-center hover:bg-white transition-colors"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white">
                <HiArrowRight className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-brand-black">Show more</span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile: simple swipe hint dots */}
        <div className="mt-6 flex justify-center gap-1.5 sm:hidden">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-brand-red" : "w-1.5 bg-black/15"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}