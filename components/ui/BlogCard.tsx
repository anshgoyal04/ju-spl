"use client";
import { BlogPost } from "@/data/blog";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlinePhotograph } from "react-icons/hi";
import SmartImage from "./SmartImage";

export default function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07 }}
    >
      <Link href={`/blog/${post.slug}`} className="card-surface group block overflow-hidden">
         <div className="relative h-44 overflow-hidden">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
            <SmartImage src={post.image} alt={post.title} fit="cover" fallbackTone="dark" />
          </div>
          {post.gallery && post.gallery.length > 0 && (
            <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
              <HiOutlinePhotograph className="h-3 w-3" /> {post.gallery.length}
            </span>
          )}
        </div>
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-red font-[var(--font-label)]">{post.category}</p>
          <h3 className="h-display mt-2 text-lg text-brand-black leading-snug group-hover:text-brand-red transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-brand-grey-700 line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-3 text-xs text-brand-grey-500">
            <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}