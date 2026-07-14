"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 bg-brand-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(179,16,26,0.25),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:repeating-linear-gradient(90deg,white_0,white_1px,transparent_1px,transparent_40px)]" />
      <div className="container-x relative">
        {breadcrumbs && (
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/50">
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span className="text-white/80">{c.label}</span>}
                {i < breadcrumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </div>
        )}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {eyebrow && <p className="eyebrow mb-3 text-brand-red">{eyebrow}</p>}
          <h1 className="h-display text-4xl sm:text-5xl lg:text-6xl text-white max-w-3xl leading-[1.05]">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">{description}</p>}
        </motion.div>
      </div>
    </section>
  );
}
