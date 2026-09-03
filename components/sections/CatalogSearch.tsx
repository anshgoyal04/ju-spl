"use client";
import CatalogResultCard from "@/components/ui/CatalogResultCard";
import { ALL_BRANDS, ALL_VARIETIES, searchCatalog } from "@/data/catalog";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { HiChevronDown, HiOutlineAdjustments, HiOutlineSearch, HiOutlineX } from "react-icons/hi";

export default function CatalogSearch() {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
const [type, setType] = useState(searchParams.get("type") || "All Types");
  const [brand, setBrand] = useState("All Brands");
  const [typeOpen, setTypeOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);

  const results = useMemo(() => searchCatalog(query, type, brand), [query, type, brand]);
  const hasActiveSearch = query.trim() !== "" || type !== "All Types" || brand !== "All Brands";

  return (
    <div>
      <div className="card-surface p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2.5 rounded-full border border-black/10 bg-brand-grey-50 px-4 py-3 transition-colors focus-within:border-brand-red focus-within:bg-white">
            <HiOutlineSearch className="h-5 w-5 shrink-0 text-brand-grey-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by model, SKU code, or brand — e.g. Apache RTR 160, SPL-TVSAR..."
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-brand-grey-500"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Clear search" className="shrink-0 text-brand-grey-500 hover:text-brand-black">
                <HiOutlineX className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => { setTypeOpen((v) => !v); setBrandOpen(false); }}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors sm:w-auto ${
                type !== "All Types" ? "border-brand-red text-brand-red bg-brand-red/5" : "border-black/10 text-brand-grey-700 hover:bg-brand-grey-50"
              }`}
            >
              <HiOutlineAdjustments className="h-4 w-4" />
              <span className="max-w-[9rem] truncate">{type !== "All Types" ? type : "Product type"}</span>
              <HiChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>
            {typeOpen && (
              <div className="absolute right-0 z-20 mt-2 w-56 rounded-2xl border border-black/5 bg-white p-2 shadow-xl">
                <div className="max-h-64 overflow-y-auto">
                  {["All Types", ...ALL_VARIETIES].map((t) => (
                    <button key={t} onClick={() => { setType(t); setTypeOpen(false); }}
                      className={`block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-brand-grey-50 ${type === t ? "font-semibold text-brand-red" : "text-brand-grey-700"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => { setBrandOpen((v) => !v); setTypeOpen(false); }}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors sm:w-auto ${
                brand !== "All Brands" ? "border-brand-red text-brand-red bg-brand-red/5" : "border-black/10 text-brand-grey-700 hover:bg-brand-grey-50"
              }`}
            >
              <HiOutlineAdjustments className="h-4 w-4" />
              {brand !== "All Brands" ? `Brand: ${brand}` : "Filter by brand"}
              <HiChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>
            {brandOpen && (
              <div className="absolute right-0 z-20 mt-2 w-56 rounded-2xl border border-black/5 bg-white p-2 shadow-xl">
                <div className="max-h-64 overflow-y-auto">
                  {["All Brands", ...ALL_BRANDS].map((b) => (
                    <button key={b} onClick={() => { setBrand(b); setBrandOpen(false); }}
                      className={`block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-brand-grey-50 ${brand === b ? "font-semibold text-brand-red" : "text-brand-grey-700"}`}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {hasActiveSearch && (
        <div className="mt-8">
          <p className="mb-4 text-sm text-brand-grey-500">{results.length} {results.length === 1 ? "result" : "results"} found</p>
          {results.length === 0 ? (
            <div className="card-surface p-10 text-center">
              <p className="h-display text-lg text-brand-black">No matching products</p>
              <p className="mt-2 text-sm text-brand-grey-700">Try a different model name, brand, or SKU code — or clear filters to browse everything.</p>
            </div>
          ) : (
            <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {results.map(({ model, variety }) => (
                  <CatalogResultCard key={`${model.modelAlias}-${variety.varietyCode}`} model={model} variety={variety} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}