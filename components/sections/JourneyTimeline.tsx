"use client";
import { JOURNEY_CLOSING_LINE, JOURNEY_MILESTONES, type Milestone } from "@/data/journey";
import { motion } from "framer-motion";

function MilestoneItem({ milestone, index }: { milestone: Milestone; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="relative pl-8"
    >
      <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-brand-red" />
      <span className="absolute left-[6px] top-5 bottom-[-2.5rem] w-px bg-brand-grey-300 last:hidden" />
      <p className="h-display text-lg text-brand-black">{milestone.year}</p>
      <p className="mt-1.5 text-sm text-brand-grey-700 leading-relaxed">{milestone.text}</p>
    </motion.div>
  );
}

export default function JourneyTimeline() {
  const mid = Math.ceil(JOURNEY_MILESTONES.length / 2);
  const left = JOURNEY_MILESTONES.slice(0, mid);
  const right = JOURNEY_MILESTONES.slice(mid);

  return (
    <div>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
        <div className="space-y-10">
          {left.map((m, i) => (
            <MilestoneItem key={m.year} milestone={m} index={i} />
          ))}
        </div>
        <div className="space-y-10">
          {right.map((m, i) => (
            <MilestoneItem key={m.year} milestone={m} index={i + mid} />
          ))}
        </div>
      </div>
      <p className="mt-14 text-center italic text-brand-grey-700 border-t border-black/5 pt-8">
        {JOURNEY_CLOSING_LINE}
      </p>
    </div>
  );
}