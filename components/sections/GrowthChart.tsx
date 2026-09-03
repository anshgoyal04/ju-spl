"use client";
import { GROWTH_BARS, GROWTH_CLOSING_LINE, GROWTH_STATS } from "@/data/journey";
import { motion } from "framer-motion";

export default function GrowthChart() {
  const max = Math.max(...GROWTH_BARS.map((b) => b.value));

  return (
    <div className="rounded-3xl bg-brand-black p-6 sm:p-10">
      <h3 className="h-display text-xl sm:text-2xl text-white">40x growth in monthly production since 1995</h3>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        {/* Bar chart */}
        <div className="flex items-end gap-3 sm:gap-5 h-56 sm:h-64 border-b border-white/10 pb-2">
          {GROWTH_BARS.map((bar, i) => (
            <div key={bar.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <span className="text-xs sm:text-sm font-semibold text-white">{bar.displayValue}</span>
              <div className="flex w-full flex-1 items-end justify-center">
                <motion.div
                  initial={{ height: "0%" }}
                  whileInView={{ height: `${(bar.value / max) * 100}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
                  className={`w-full max-w-[2.5rem] rounded-t-md ${bar.isTarget ? "bg-brand-red" : "bg-white/25"}`}
                />
              </div>
              <span className="text-[10px] sm:text-xs text-white/50 text-center leading-tight">
                {bar.label}
                {bar.isTarget && <span className="block text-white/30">(Target)</span>}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {GROWTH_STATS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/5 p-5">
              <p className="h-display text-2xl text-brand-red">{s.value}</p>
              <p className="mt-1 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-sm italic text-white/50 border-t border-white/10 pt-6">{GROWTH_CLOSING_LINE}</p>
    </div>
  );
}