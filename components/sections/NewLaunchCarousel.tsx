"use client";
import SmartImage from "@/components/ui/SmartImage";
import { NEW_LAUNCH_ITEMS } from "@/data/new-launch";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FaAmazon } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight, HiOutlineCheckCircle, HiOutlineSparkles } from "react-icons/hi";
const AUTOPLAY_MS = 6000;

export default function NewLaunchCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = NEW_LAUNCH_ITEMS.length;

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > index || (index === total - 1 && next === 0) ? 1 : -1);
      setIndex(((next % total) + total) % total);
    },
    [index, total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, paused]);

  const item = NEW_LAUNCH_ITEMS[index];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.98 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.98 }),
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-brand-charcoal">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={item.slug}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2"
          >
            <div className="relative h-72 sm:h-96 lg:h-[520px]">
              <SmartImage src={item.image} alt={item.name} fallbackTone="dark" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-brand-charcoal/40" />
              <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-brand-red px-4 py-1.5 text-xs font-semibold text-white">
                <HiOutlineSparkles className="h-3.5 w-3.5" /> New Launch
              </span>
            </div>

            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
              <p className="eyebrow text-brand-red">
                {new Date(item.launchDate).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
              </p>
              <h3 className="h-display mt-3 text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                {item.name}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-brand-red font-medium">{item.tagline}</p>
              <p className="mt-5 text-sm sm:text-base text-white/70 leading-relaxed max-w-md">
                {item.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-white/80">
                    <HiOutlineCheckCircle className="h-4 w-4 text-brand-red shrink-0" /> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn-primary w-fit">
                  Enquire about this product
                </Link>
                {item.amazonUrl && item.amazonUrl !== "#" && (
                  <a
                    href={item.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-brand-black hover:-translate-y-0.5"
                  >
                    <FaAmazon className="h-4 w-4" /> Buy on Amazon
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          aria-label="Previous product"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
        >
          <HiArrowLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next product"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
        >
          <HiArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {NEW_LAUNCH_ITEMS.map((it, i) => (
          <button
            key={it.slug}
            onClick={() => goTo(i)}
            className={`group text-left transition-all ${i === index ? "" : "opacity-70 hover:opacity-100"}`}
          >
            <div
              className={`relative aspect-square overflow-hidden rounded-xl bg-brand-grey-50 border transition-all ${
                i === index ? "border-brand-red ring-2 ring-brand-red/30" : "border-black/5 group-hover:border-black/15"
              }`}
            >
              <SmartImage src={it.image} alt={it.name} fallbackTone="light" fit="contain" className="p-3" />
            </div>
            <p
              className={`mt-2 text-[11px] leading-snug line-clamp-2 font-medium transition-colors ${
                i === index ? "text-brand-red" : "text-brand-grey-500"
              }`}
            >
              {it.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}