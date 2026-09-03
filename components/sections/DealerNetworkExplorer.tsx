"use client";
import DealerNetworkMap from "@/components/sections/DealerNetworkMap";
import DealerDetailModal from "@/components/ui/DealerDetailModal";
import { DEALERS, type Dealer } from "@/data/dealers";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { HiChevronDown, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineSearch, HiOutlineX } from "react-icons/hi";

const TYPE_DOT: Record<Dealer["type"], string> = {
  Dealer: "bg-brand-grey-400",
  Distributor: "bg-brand-red",
  "Export Partner": "bg-brand-black",
};

export default function DealerNetworkExplorer() {
  const [activeState, setActiveState] = useState<string>("All States");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Dealer | null>(null);
  const [stateOpen, setStateOpen] = useState(false);

  const states = useMemo(() => {
    const counts = new Map<string, number>();
    DEALERS.forEach((d) => counts.set(d.state, (counts.get(d.state) ?? 0) + 1));
    return ["All States", ...Array.from(counts.keys()).sort()].map((s) => ({
      name: s,
      count: s === "All States" ? DEALERS.length : counts.get(s) ?? 0,
    }));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DEALERS.filter((d) => {
      if (activeState !== "All States" && d.state !== activeState) return false;
      if (q && !`${d.name} ${d.city}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [activeState, query]);

  const groupedByCity = useMemo(() => {
    const groups = new Map<string, Dealer[]>();
    filtered.forEach((d) => {
      const list = groups.get(d.city) ?? [];
      list.push(d);
      groups.set(d.city, list);
    });
    return Array.from(groups.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  return (
    <div>
      <DealerNetworkMap activeState={activeState} onSelectState={setActiveState} />

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2.5 rounded-full border border-black/10 bg-brand-grey-50 px-4 py-3 max-w-md">
          <HiOutlineSearch className="h-5 w-5 shrink-0 text-brand-grey-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by dealer name or city…"
            className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-brand-grey-500"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear" className="shrink-0 text-brand-grey-500 hover:text-brand-black">
              <HiOutlineX className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setStateOpen((v) => !v)}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors sm:w-auto ${
              activeState !== "All States" ? "border-brand-red text-brand-red bg-brand-red/5" : "border-black/10 text-brand-grey-700 hover:bg-brand-grey-50"
            }`}
          >
            {activeState}
            <HiChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>

          {stateOpen && (
            <div className="absolute right-0 z-20 mt-2 w-56 rounded-2xl border border-black/5 bg-white p-2 shadow-xl">
              <div className="max-h-64 overflow-y-auto">
                {states.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => {
                      setActiveState(s.name);
                      setStateOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm hover:bg-brand-grey-50 ${
                      activeState === s.name ? "font-semibold text-brand-red" : "text-brand-grey-700"
                    }`}
                  >
                    {s.name} <span className="text-xs opacity-60">({s.count})</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 space-y-10">
        {groupedByCity.length === 0 ? (
          <div className="card-surface p-10 text-center">
            <p className="h-display text-lg text-brand-black">No dealers found</p>
            <p className="mt-2 text-sm text-brand-grey-700">Try a different city, state, or clear your search.</p>
          </div>
        ) : (
          groupedByCity.map(([city, dealers]) => (
            <div key={city}>
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineLocationMarker className="h-5 w-5 text-brand-red" />
                <h3 className="h-display text-lg text-brand-black">{city}</h3>
                <span className="text-sm text-brand-grey-500">({dealers.length})</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {dealers.map((d) => (
                    <motion.button
                      key={d.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setSelected(d)}
                      className="card-surface p-5 text-left hover:-translate-y-0.5 transition-transform"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${TYPE_DOT[d.type]}`} />
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-grey-500">{d.type}</span>
                      </div>
                      <h4 className="h-display mt-2 text-base text-brand-black">{d.name}</h4>
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-brand-grey-500">
                        <HiOutlinePhone className="h-3.5 w-3.5" /> {d.phone}
                      </p>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ))
        )}
      </div>

      <DealerDetailModal dealer={selected} onClose={() => setSelected(null)} />
    </div>
  );
}