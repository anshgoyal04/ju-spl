"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ManufacturingStep } from "@/data/manufacturing";

export default function Timeline({ steps, linkBase }: { steps: ManufacturingStep[]; linkBase?: string }) {
  return (
    <div className="relative">
      <div className="absolute left-[27px] top-2 bottom-2 w-px bg-brand-grey-300 hidden sm:block" />
      <div className="space-y-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative flex gap-6"
          >
            <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-red text-white h-display text-lg z-10">
              {s.step}
            </div>
            <div className="card-surface flex-1 p-6">
              <h3 className="h-display text-lg text-brand-black">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-grey-700 leading-relaxed">{s.summary}</p>
              {linkBase && (
                <Link href={`${linkBase}/${s.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-red">
                  Learn more →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
