"use client";
import SmartImage from "@/components/ui/SmartImage";
import type { QualityPillar } from "@/data/quality";
import { motion } from "framer-motion";
import { HiOutlineCheckCircle } from "react-icons/hi";

export default function QualityPillarRow({ pillar, index }: { pillar: QualityPillar; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <div id={pillar.id} className="scroll-mt-28 grid gap-10 lg:grid-cols-2 lg:items-center">
      <motion.div
        initial={{ opacity: 0, x: reversed ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className={`relative h-72 sm:h-80 rounded-2xl overflow-hidden ${reversed ? "lg:order-2" : ""}`}
      >
        <SmartImage src={pillar.image} alt={pillar.title} fit="cover" fallbackTone="light" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className={reversed ? "lg:order-1" : ""}
      >
        <p className="eyebrow mb-2">0{index + 1}</p>
        <h3 className="h-display text-2xl text-brand-black">{pillar.title}</h3>
        <p className="mt-3 text-brand-grey-700 leading-relaxed">{pillar.summary}</p>
        <ul className="mt-5 space-y-2.5">
          {pillar.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-grey-700">
              <HiOutlineCheckCircle className="h-4 w-4 mt-0.5 text-brand-red shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}