"use client";
import { BRANDS, PRODUCTS } from "@/data/products";
import { useState } from "react";
import { HiChevronDown, HiOutlineAdjustments, HiOutlineSearch, HiOutlineX } from "react-icons/hi";

const PRODUCT_TYPES = ["All Types", ...PRODUCTS.map((p) => p.name)];

export default function ProductFilterBar() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState("All Types");
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [typeOpen, setTypeOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);

  return (
    <div className="card-surface p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Search input */}
        <div className="flex flex-1 items-center gap-2.5 rounded-full border border-black/10 bg-brand-grey-50 px-4 py-3 transition-colors focus-within:border-brand-red focus-within:bg-white">
          <HiOutlineSearch className="h-5 w-5 shrink-0 text-brand-grey-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products — e.g. piston kit, cylinder liner..."
            className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-brand-grey-500"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="shrink-0 text-brand-grey-500 hover:text-brand-black"
            >
              <HiOutlineX className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Product type filter */}
        <div className="relative">
          <button
            onClick={() => {
              setTypeOpen((v) => !v);
              setBrandOpen(false);
            }}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors sm:w-auto ${
              activeType !== "All Types"
                ? "border-brand-red text-brand-red bg-brand-red/5"
                : "border-black/10 text-brand-grey-700 hover:bg-brand-grey-50"
            }`}
          >
            <HiOutlineAdjustments className="h-4 w-4" />
            <span className="max-w-[10rem] truncate">
              {activeType !== "All Types" ? activeType : "Product type"}
            </span>
            <HiChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>

          {typeOpen && (
            <div className="absolute right-0 z-20 mt-2 w-64 rounded-2xl border border-black/5 bg-white p-2 shadow-xl">
              <div className="max-h-64 overflow-y-auto">
                {PRODUCT_TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setActiveType(t);
                      setTypeOpen(false);
                    }}
                    className={`block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-brand-grey-50 ${
                      activeType === t ? "font-semibold text-brand-red" : "text-brand-grey-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Brand filter */}
        <div className="relative">
          <button
            onClick={() => {
              setBrandOpen((v) => !v);
              setTypeOpen(false);
            }}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors sm:w-auto ${
              activeBrand ? "border-brand-red text-brand-red bg-brand-red/5" : "border-black/10 text-brand-grey-700 hover:bg-brand-grey-50"
            }`}
          >
            <HiOutlineAdjustments className="h-4 w-4" />
            {activeBrand ? `Brand: ${activeBrand}` : "Filter by brand"}
            <HiChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>

          {brandOpen && (
            <div className="absolute right-0 z-20 mt-2 w-56 rounded-2xl border border-black/5 bg-white p-2 shadow-xl">
              <button
                onClick={() => {
                  setActiveBrand(null);
                  setBrandOpen(false);
                }}
                className="block w-full rounded-xl px-3 py-2 text-left text-sm text-brand-grey-700 hover:bg-brand-grey-50"
              >
                All brands
              </button>
              <div className="my-1 border-t border-black/5" />
              <div className="max-h-56 overflow-y-auto">
                {BRANDS.map((b) => (
                  <button
                    key={b}
                    onClick={() => {
                      setActiveBrand(b);
                      setBrandOpen(false);
                    }}
                    className={`block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-brand-grey-50 ${
                      activeBrand === b ? "font-semibold text-brand-red" : "text-brand-grey-700"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="btn-primary sm:w-auto w-full">
          <HiOutlineSearch className="h-4 w-4" /> Search
        </button>
      </div>
    </div>
  );
}