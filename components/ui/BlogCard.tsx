import Link from "next/link";
import { HiOutlineNewspaper } from "react-icons/hi";
import PlaceholderImage from "./PlaceholderImage";
import { BlogPost } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card-surface group block overflow-hidden">
      <div className="h-44 overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <PlaceholderImage icon={HiOutlineNewspaper} tone="dark" />
        </div>
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
  );
}
