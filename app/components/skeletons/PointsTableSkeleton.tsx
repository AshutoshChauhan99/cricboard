"use client";

export default function PointsTableSkeleton() {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden animate-pulse">
      <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900">
        <div className="h-4 w-28 rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
      <div className="p-3 space-y-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-5 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
        ))}
      </div>
    </div>
  );
}


