"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { GiGears } from "react-icons/gi";
// import PlaceholderImage from "./PlaceholderImage";
import { Product } from "@/data/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="card-surface group overflow-hidden"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="h-52 overflow-hidden relative">
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-red font-[var(--font-label)]">{product.category}</p>
          <h3 className="h-display mt-2 text-lg text-brand-black">{product.name}</h3>
          <p className="mt-2 text-sm text-brand-grey-700 leading-relaxed line-clamp-2">{product.summary}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black group-hover:text-brand-red transition-colors">
            View specifications <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
