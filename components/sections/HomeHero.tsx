"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { GiFactory } from "react-icons/gi";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function HomeHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-black">
      <div className="absolute inset-0">
        <PlaceholderImage tone="dark" className="opacity-70" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(179,16,26,0.35),transparent_55%)]" />

      <div className="container-x relative pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-brand-red"
        >
          Manufacturer · OEM Supplier · Exporter
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="h-display mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] leading-[1.05] text-white"
        >
          Engineering Precision.<br /> Powering Every Ride.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed"
        >
          Leading manufacturer of premium motorcycle pistons, piston kits and engine components — trusted by OEM
          buyers, distributors and exporters worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="/products" className="btn-primary">
            Explore products <HiArrowRight />
          </Link>
          <Link href="/contact" className="btn-outline">
            Request quote
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 text-white/50 text-xs uppercase tracking-widest font-[var(--font-label)]">
        <GiFactory className="h-5 w-5" /> Made in Agra, India
      </div>
    </section>
  );
}
