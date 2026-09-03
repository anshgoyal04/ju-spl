"use client";
import SmartImage from "@/components/ui/SmartImage";
import { useCart } from "@/context/CartContext";
import type { SearchResult } from "@/data/catalog";
import { getVarietyImage } from "@/data/varietyImages";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineCheck, HiOutlineClipboardCopy, HiOutlinePlus } from "react-icons/hi";

export default function CatalogResultCard({ model, variety }: SearchResult) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const activeSku = variety.allSizesAvailable ? variety.skus[0] : variety.skus[sizeIndex];

  const copySku = async () => {
    try {
      await navigator.clipboard.writeText(activeSku.sku);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const handleAddToCart = () => {
    addToCart({
      sku: activeSku.sku,
      size: activeSku.size,
      variety: variety.variety,
      modelName: model.modelName,
      brand: model.brand,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="card-surface overflow-hidden"
    >
      <div className="relative h-40 bg-brand-grey-50">
        <SmartImage src={getVarietyImage(variety.variety, variety.image)} alt={`${model.modelName} ${variety.variety}`} fit="contain" fallbackTone="light" />                {variety.allSizesAvailable && (
          <span className="absolute top-3 left-3 rounded-full bg-brand-black/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            All sizes available
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-red font-[var(--font-label)]">
          {model.brand} · {variety.variety}
        </p>
        <h3 className="h-display mt-1 text-base text-brand-black leading-snug">{model.modelName}</h3>

        {!variety.allSizesAvailable && variety.skus.length > 1 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {variety.skus.map((s, i) => (
              <button
                key={s.sku}
                onClick={() => setSizeIndex(i)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  i === sizeIndex ? "bg-brand-red text-white" : "bg-brand-grey-50 text-brand-grey-700 hover:bg-brand-grey-100"
                }`}
              >
                {s.size}
              </button>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-grey-50 px-3 py-2.5">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-brand-grey-500">SKU</p>
            <p className="text-sm font-semibold text-brand-black">{activeSku.sku}</p>
          </div>
          <button
            onClick={copySku}
            aria-label="Copy SKU"
            className="flex h-8 w-8 items-center justify-center rounded-full text-brand-grey-500 hover:bg-white hover:text-brand-red transition-colors"
          >
            {copied ? <HiOutlineCheck className="h-4 w-4 text-green-600" /> : <HiOutlineClipboardCopy className="h-4 w-4" />}
          </button>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Link href="/contact" className="btn-primary flex-1 justify-center text-sm">
            Enquire
          </Link>
          <button
            onClick={handleAddToCart}
            aria-label="Add to order list"
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors ${
              added ? "border-green-600 bg-green-50 text-green-600" : "border-brand-black/15 text-brand-black hover:bg-brand-grey-50"
            }`}
          >
            {added ? <HiOutlineCheck className="h-4 w-4" /> : <HiOutlinePlus className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}