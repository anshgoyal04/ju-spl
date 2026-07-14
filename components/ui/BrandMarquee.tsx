"use client";
import { BRANDS } from "@/data/products";

export default function BrandMarquee() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-4 animate-[marquee_28s_linear_infinite]">
        {loop.map((brand, i) => (
          <div
            key={i}
            className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white text-sm font-semibold text-brand-grey-700 font-[var(--font-label)]"
          >
            {brand}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
