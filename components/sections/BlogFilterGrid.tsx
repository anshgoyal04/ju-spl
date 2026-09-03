"use client";
import BlogCard from "@/components/ui/BlogCard";
import SmartImage from "@/components/ui/SmartImage";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/data/blog";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiArrowRight, HiOutlinePhotograph } from "react-icons/hi";

export default function BlogFilterGrid() {
  const [category, setCategory] = useState("All Posts");

  const filtered = useMemo(() => {
    if (category === "All Posts") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.category === category);
  }, [category]);

  const [featured, ...rest] = filtered;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {BLOG_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === c ? "bg-brand-red text-white" : "bg-brand-grey-50 text-brand-grey-700 hover:bg-brand-grey-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {!featured ? (
            <p className="mt-12 text-center text-sm text-brand-grey-500">No posts in this category yet.</p>
          ) : (
            <>
              <Link
                href={`/blog/${featured.slug}`}
                className="group mt-10 grid overflow-hidden rounded-3xl border border-black/5 shadow-sm lg:grid-cols-2"
              >
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <SmartImage src={featured.image} alt={featured.title} fit="cover" fallbackTone="dark" />
                  </div>
                  {featured.gallery && featured.gallery.length > 0 && (
                    <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                      <HiOutlinePhotograph className="h-3.5 w-3.5" /> {featured.gallery.length} photos
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-red font-[var(--font-label)]">
                    {featured.category}
                  </p>
                  <h2 className="h-display mt-3 text-2xl sm:text-3xl text-brand-black leading-tight group-hover:text-brand-red transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-brand-grey-700">{featured.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 text-xs text-brand-grey-500">
                    <span>{new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black group-hover:text-brand-red transition-colors">
                    Read more <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>

              {rest.length > 0 && (
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post, i) => (
                    <BlogCard key={post.slug} post={post} index={i} />
                  ))}
                </div>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}