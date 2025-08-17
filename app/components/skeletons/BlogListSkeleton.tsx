"use client";

export default function BlogListSkeleton() {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden animate-pulse">
      <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900">
        <div className="h-4 w-28 rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className="p-3 space-y-2">
            <div className="h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-3 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-3 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
          </li>
        ))}
      </ul>
    </div>
  );
}


