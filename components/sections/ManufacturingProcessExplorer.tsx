"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import SmartImage from "@/components/ui/SmartImage";
import { PROCESS_PHASES } from "@/data/manufacturingProcess";

const AUTOPLAY_MS = 5500;

export default function ManufacturingProcessExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const totalPhases = PROCESS_PHASES.length;
  const totalSteps = PROCESS_PHASES.reduce((sum, p) => sum + p.steps.length, 0);
  const phase = PROCESS_PHASES[activeIndex];

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > activeIndex || (activeIndex === totalPhases - 1 && next === 0) ? 1 : -1);
      setActiveIndex(((next % totalPhases) + totalPhases) % totalPhases);
    },
    [activeIndex, totalPhases]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);
  const prev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div
      className="relative overflow-hidden rounded-3xl bg-brand-black p-6 sm:p-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(179,16,26,0.2),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:repeating-linear-gradient(90deg,white_0,white_1px,transparent_1px,transparent_40px)]" />

      <div className="relative">
        <div className="flex flex-wrap justify-center gap-2">
          {PROCESS_PHASES.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                i === activeIndex ? "bg-brand-red text-white" : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="mt-4 mx-auto h-1 max-w-md overflow-hidden rounded-full bg-white/10">
          {!paused && (
            <motion.div
              key={activeIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
              className="h-full bg-brand-red"
            />
          )}
        </div>

        <p className="mt-6 text-center text-sm text-white/50">
          Steps {phase.steps[0].step}–{phase.steps[phase.steps.length - 1].step} of {totalSteps} · {phase.subtitle}
        </p>

        <div className="relative mt-10">
          <button
            onClick={prev}
            aria-label="Previous phase"
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors"
          >
            <HiArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next phase"
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors"
          >
            <HiArrowRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden px-2 sm:px-14">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={phase.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                {phase.steps.map((s, i) => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    className="rounded-2xl bg-white overflow-hidden"
                  >
                    <div className="relative h-52 sm:h-60 bg-brand-grey-50">
                      <SmartImage src={s.image} alt={s.title} fit="cover" fallbackTone="dark" />
                      <span className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-base font-bold text-white shadow-md">
                        {s.step}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="h-display text-base text-brand-black">{s.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-1.5">
          {PROCESS_PHASES.flatMap((p) => p.steps).map((s) => {
            const inActivePhase = phase.steps.some((ps) => ps.step === s.step);
            return (
              <span
                key={s.step}
                className={`h-1.5 w-6 rounded-full transition-colors ${inActivePhase ? "bg-brand-red" : "bg-white/15"}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}