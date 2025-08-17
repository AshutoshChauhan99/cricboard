"use client";
import { BlogPost } from "@/lib/types";
import Link from "next/link";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="px-4 py-2 text-sm font-semibold bg-zinc-50 dark:bg-zinc-900">Latest Blogs</div>
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
        {posts.map((p) => (
          <li key={p.id} className="p-3 flex gap-3 items-start hover:bg-zinc-50 dark:hover:bg-zinc-900/40">
            <div className="flex-1 min-w-0">
              <Link href={p.url || "#"} className="block">
                <div className="text-sm font-semibold truncate">{p.title}</div>
                <div className="text-xs text-zinc-600 line-clamp-2">{p.summary}</div>
              </Link>
              <div className="mt-1 text-[11px] text-zinc-500">
                By {p.author} • {new Date(p.publishedISO).toLocaleDateString()}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


